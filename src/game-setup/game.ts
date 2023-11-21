type Grid = {
  val: string
  int: number
  pos: number
  line: number
}[]

const grid: Grid = [
  { val: 'A', int: 1, pos: 1, line: 1 },
  { val: 'B', int: 2, pos: 2, line: 1 },
  { val: 'C', int: 3, pos: 3, line: 1 },
  { val: 'D', int: 4, pos: 1, line: 2 },
  { val: 'E', int: 5, pos: 2, line: 2 },
  { val: 'F', int: 6, pos: 3, line: 2 },
  { val: 'G', int: 7, pos: 4, line: 2 },
  { val: 'H', int: 8, pos: 1, line: 3 },
  { val: 'I', int: 9, pos: 2, line: 3 },
  { val: 'J', int: 10, pos: 3, line: 3 },
  { val: 'K', int: 11, pos: 4, line: 3 },
  { val: 'L', int: 12, pos: 5, line: 3 },
  { val: 'M', int: 13, pos: 1, line: 4 },
  { val: 'N', int: 14, pos: 2, line: 4 },
  { val: 'O', int: 15, pos: 3, line: 4 },
  { val: 'P', int: 16, pos: 4, line: 4 },
  { val: 'Q', int: 17, pos: 1, line: 5 },
  { val: 'R', int: 18, pos: 2, line: 5 },
  { val: 'S', int: 19, pos: 3, line: 5 }
]

const line_poss = ['ABC', 'DEF', 'EFG', 'HIJ', 'IJK', 'JKL', 'MNO', 'NOP', 'QRS']

const diag_poss = [
  'ADH',
  'BEI',
  'CFJ',
  'AEJ',
  'BFK',
  'CGL',
  'DIN',
  'EJO',
  'FKP',
  'EIM',
  'FJN',
  'GKO',
  'HMQ',
  'INR',
  'JOS',
  'LPS',
  'KOR',
  'JNQ'
]

export function checkCombi(arr: Grid): string | Grid {
  if (arr.length !== 3) return 'Invalid suite'
  const [l1, l2, l3] = arr.sort((a, b) => a.line - b.line)
  if ((l1.line === l2.line && l2.line !== l3.line) || (l2.line === l3.line && l2.line !== l1.line))
    return 'Invalid suite lines'
  if (l1.line === l2.line) {
    // same line
    const [p1, p2, p3] = arr.sort((a, b) => a.pos - b.pos).map((e) => e.pos)
    if (p1 === p2 || p2 === p3 || p2 - p1 !== 1 || p3 - p2 !== 1) {
      return 'Invalid suite positions'
    }
    return arr
  } else {
    // diff lines;
    if (l2.line - l1.line !== 1 || l3.line - l2.line !== 1) {
      return 'Invalid suite lines'
    } else {
      const [p1, p2, p3] = [l1.pos, l2.pos, l3.pos]
      switch ([l1.line, l2.line, l3.line].toString()) {
        case [1, 2, 3].toString(): {
          if ((p1 === p2 && p2 !== p3) || (p1 !== p2 && (p2 - p1 !== 1 || p3 - p2 !== 1))) {
            return 'Invalid suite positions c1'
          }
          return arr
        }
        case [2, 3, 4].toString(): {
          if (
            (p1 === 1 && p2 === 1) ||
            (p1 === 4 && p2 === 5) ||
            (p1 === 4 && p2 === 1) ||
            (p1 === p2 && p2 - p3 !== 1) ||
            (p2 - p1 === 1 && p2 !== p3)
          ) {
            return 'Invalid suite positions c2'
          }
          return arr
        }
        case [3, 4, 5].toString(): {
          if ((p1 === p2 && p2 !== p3) || (p1 !== p2 && (p1 - p2 !== 1 || p2 - p3 !== 1))) {
            return 'Invalid suite positions c3'
          }
          return arr
        }
        default:
          break
      }
      return arr
    }
  }
}

export function setUpGame() {
  const num = Math.floor(Math.random() * 100)
  grid.forEach((e) => {
    const add = Math.floor(Math.random() * 6)
    e.int = num + add
  })

  const sGrid = grid
  const combis = line_poss.concat(diag_poss)
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

export const hexClass = (i: number) => {
  switch (i) {
    case 1:
      return 'one'
    case 2:
      return 'two'
    case 3:
      return 'three'
    case 4:
      return 'four'
    case 5:
      return 'five'
    case 6:
      return 'six'
    case 7:
      return 'seven'
    case 8:
      return 'eight'
    case 9:
      return 'nine'
    case 10:
      return 'ten'
    case 11:
      return 'eleven'
    case 12:
      return 'twelve'
    case 13:
      return 'thirteen'
    case 14:
      return 'fourteen'
    case 15:
      return 'fifteen'
    case 16:
      return 'sixteen'
    case 17:
      return 'seventeen'
    case 18:
      return 'eighteen'
    case 19:
      return 'nineteen'
    default:
      return 'zero'
  }
}
