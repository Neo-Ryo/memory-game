import { ref, watch, type Ref } from 'vue'
import { useTimer, timerState } from './timer'
import { grid, allValidCombis } from './gridData'
import { playerInput } from './playerInput'

export function setUpGameGrid() {
  grid.forEach((e) => {
    e.int = Math.floor(Math.random() * 10)
  })

  const sGrid = grid
  const potentialRes: number[] = []
  for (const combi of allValidCombis) {
    const [l1, l2, l3] = combi
    const [res1, res2, res3] = [
      sGrid.find((e) => e.val === l1)?.int,
      sGrid.find((e) => e.val === l2)?.int,
      sGrid.find((e) => e.val === l3)?.int
    ]
    if (res1 && res2 && res3) {
      potentialRes.push(res1 + res2 + res3)
    }
  }

  const counts: Record<string, number> = {}
  let max = 0,
    res = 0
  for (const v in potentialRes) {
    counts[potentialRes[v]] = (counts[potentialRes[v]] || 0) + 1
    if (counts[potentialRes[v]] > max) {
      max = counts[potentialRes[v]]
      res = potentialRes[v]
    }
  }
  // here making sure we 've got at least 7 good combinations
  if (max >= 7) return { newGrid: sGrid, result: res }
  else return setUpGameGrid()
}
// types
export type GameStatus = 'started' | 'stopped' | 'finished'
// refs
export const gameStatus: Ref<GameStatus> = ref('stopped')
export const phase = ref<'discovery phase' | 'guessing phase' | 'game over'>('game over')
export const phaseDesc = ref<string | null>(null)
export const gameGrid = ref(grid)
export const numToGuess = ref<number | null>(null)
export const playerCurrentScore = ref<number>(0)
export const playerPreviousScore = ref<number>(0)
export const playerGivenAnswers = ref<Array<string>>([])
export const intel = ref<{ text: string; goodAnswer: boolean }>({
  text: '',
  goodAnswer: false
})
// var
const discovery = 'You have 1 minute to memorizing as much number as you can'
const guessing = 'You have 2 minutes 30 to attempt good combinations'
// funcs
export function startGame() {
  gameStatus.value = 'started'
  phase.value = 'discovery phase'
  phaseDesc.value = discovery
  numToGuess.value = null
  playerPreviousScore.value = playerCurrentScore.value
  playerCurrentScore.value = 0
  intel.value.text = ''
  intel.value.goodAnswer = false
  playerGivenAnswers.value = []
  const { result, newGrid } = setUpGameGrid()
  gameGrid.value = newGrid
  // discovery time
  useTimer(1, 0, () => {
    // game time
    phase.value = 'guessing phase'
    phaseDesc.value = guessing
    numToGuess.value = result
    useTimer(2, 30, () => {
      phase.value = 'game over'
      phaseDesc.value = null
      gameStatus.value = 'finished'
      intel.value.text = ''
      intel.value.goodAnswer = false
    })
  })
}

export function stopGame() {
  gameStatus.value = 'stopped'
  phase.value = 'game over'
  timerState.value = 0
  numToGuess.value = null
  phaseDesc.value = null
  intel.value.text = ''
  intel.value.goodAnswer = false
  const interval_id = setInterval(function () {}, Number.MAX_SAFE_INTEGER)
  // Clear any timeout/interval up to that id
  for (let i = 1; i < interval_id; i++) {
    clearInterval(i)
  }
}

export const phaseWatcher = watch(phase, (newPhase) => {
  if (newPhase === 'game over' || newPhase === 'discovery phase') {
    playerInput.value = []
  }
})

export function checkResult(playerInput: Array<string>): boolean {
  let playerRes = 0
  for (const l of playerInput) {
    const slot = gameGrid.value.find((e) => e.val === l)
    if (slot) playerRes += slot.int
  }
  let isValid = false
  if (playerGivenAnswers.value.find((e) => e === playerInput.sort().join(''))) {
    intel.value.text = `Combination already given`
    intel.value.goodAnswer = false
  } else {
    playerGivenAnswers.value.push(playerInput.sort().join(''))
    isValid = playerRes === numToGuess.value
    if (!isValid) {
      intel.value.text = `${playerRes} is not right`
      intel.value.goodAnswer = false
    } else {
      intel.value.text = `Well done!`
      intel.value.goodAnswer = true
    }
  }
  return isValid
}
