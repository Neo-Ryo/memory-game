import { ref, type Ref } from 'vue'
import { useTimer, timerState } from './timer'
import { diag_poss, grid, line_poss } from './gridData'

export const combis = line_poss.concat(diag_poss)

export function setUpGameGrid() {
  const num = Math.floor(Math.random() * 100)
  grid.forEach((e) => {
    const add = Math.floor(Math.random() * 6)
    e.int = num + add
  })

  const sGrid = grid
  const potentialRes: number[] = []
  for (const combi of combis) {
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
  return { newGrid: sGrid, result: res }
}
// types
export type GameStatus = 'started' | 'stopped' | 'finished'
// refs
export const gameStatus: Ref<GameStatus> = ref('stopped')
export const phase = ref<'discovery phase' | 'guessing phase' | 'game over'>('game over')
export const phaseDesc = ref<string | null>(null)
const discovery = 'You have 1 minute to memorizing as much number as you can'
const guessing = 'You have 2 minutes 30 to attempt good combinations'
export const gameHive = ref(grid)
export const numToGuess = ref<number | null>(null)
// funcs
export function startGame() {
  // discovery time
  gameStatus.value = 'started'
  phase.value = 'discovery phase'
  phaseDesc.value = discovery
  const { result, newGrid } = setUpGameGrid()
  gameHive.value = newGrid
  useTimer(1, 0, () => {
    // game time
    phase.value = 'guessing phase'
    phaseDesc.value = guessing
    numToGuess.value = result
    useTimer(2, 30, () => {
      phase.value = 'game over'
      phaseDesc.value = null
      gameStatus.value = 'finished'
    })
  })
}

export function stopGame() {
  gameStatus.value = 'stopped'
  phase.value = 'game over'
  timerState.value = 0
  numToGuess.value = null
  phaseDesc.value = null
  const interval_id = setInterval(function () {}, Number.MAX_SAFE_INTEGER)
  // Clear any timeout/interval up to that id
  for (let i = 1; i < interval_id; i++) {
    console.log(i)

    clearInterval(i)
  }
}
