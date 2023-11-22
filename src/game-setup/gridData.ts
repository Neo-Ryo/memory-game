export type Grid = {
  val: string
  int: number
  pos: number
  line: number
}[]

export const grid: Grid = [
  { val: 'A', int: 0, pos: 1, line: 1 },
  { val: 'B', int: 0, pos: 2, line: 1 },
  { val: 'C', int: 0, pos: 3, line: 1 },
  { val: 'D', int: 0, pos: 1, line: 2 },
  { val: 'E', int: 0, pos: 2, line: 2 },
  { val: 'F', int: 0, pos: 3, line: 2 },
  { val: 'G', int: 0, pos: 4, line: 2 },
  { val: 'H', int: 0, pos: 1, line: 3 },
  { val: 'I', int: 0, pos: 2, line: 3 },
  { val: 'J', int: 0, pos: 3, line: 3 },
  { val: 'K', int: 0, pos: 4, line: 3 },
  { val: 'L', int: 0, pos: 5, line: 3 },
  { val: 'M', int: 0, pos: 1, line: 4 },
  { val: 'N', int: 0, pos: 2, line: 4 },
  { val: 'O', int: 0, pos: 3, line: 4 },
  { val: 'P', int: 0, pos: 4, line: 4 },
  { val: 'Q', int: 0, pos: 1, line: 5 },
  { val: 'R', int: 0, pos: 2, line: 5 },
  { val: 'S', int: 0, pos: 3, line: 5 }
]

export const line_poss = ['ABC', 'DEF', 'EFG', 'HIJ', 'IJK', 'JKL', 'MNO', 'NOP', 'QRS']

export const diag_poss = [
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
