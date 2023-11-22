import { ref, type Ref } from 'vue'
import { useTimer } from './timer'
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
    res
  for (const v in potentialRes) {
    counts[potentialRes[v]] = (counts[potentialRes[v]] || 0) + 1
    if (counts[potentialRes[v]] > max) {
      max = counts[potentialRes[v]]
      res = potentialRes[v]
    }
  }
  return { grid, res }
}
// types
export type GameStatus = 'started' | 'stopped' | 'finished'
// refs
export const gameStatus: Ref<GameStatus> = ref('stopped')
export const phase = ref<'discovery phase' | 'guessing phase' | 'game over'>('discovery phase')
// funcs
export function startGame() {
  // discovery time
  gameStatus.value = 'started'
  useTimer(0, 20, () => {
    // game time
    phase.value = 'guessing phase'
    useTimer(0, 30, () => {
      phase.value = 'game over'
      gameStatus.value = 'finished'
    })
  })
}

export function stopGame() {
  gameStatus.value = 'stopped'
  const interval_id = setInterval(function () {}, Number.MAX_SAFE_INTEGER)

  // Clear any timeout/interval up to that id
  for (let i = 1; i < interval_id; i++) {
    console.log(i)

    clearInterval(i)
  }
}
