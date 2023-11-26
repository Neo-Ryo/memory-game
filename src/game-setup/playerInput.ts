import { ref, type Ref } from 'vue'
import { checkIfValidInput } from './gridData'
import { playerScore } from './game'

// refs
export const playerInput = ref<string[]>([])
export const playerInputState = ref<null | boolean>(null)

export function handleEnterInupts(i: string, selected: Ref<boolean>) {
  if (selected.value) {
    if (playerInput.value.length > 0)
      playerInput.value.splice(
        playerInput.value.findIndex((e) => e === i),
        1
      )
    selected.value = false
  } else if (playerInput.value.length < 3) {
    playerInput.value.push(i)
    selected.value = true
  }
}

// export function deleteInput() {
//   if (playerInput.value.length > 0) playerInput.value.pop()
// }

export function submitCombi() {
  const res = checkIfValidInput(playerInput.value)
  if (res) {
    console.log('VALID!')
  } else {
    console.log('INVALID!')
  }
}
