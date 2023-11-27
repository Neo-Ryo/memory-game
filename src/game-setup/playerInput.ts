import { ref, type Ref } from 'vue'
import { checkIfValidInput } from './gridData'
import { playerCurrentScore, checkResult, intel } from './game'

// refs
export const playerInput = ref<string[]>([])
export const playerInputState = ref<null | boolean>(null)
export const playerHasSubmit = ref<boolean>(false)

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

export function submitCombi() {
  playerHasSubmit.value = !playerHasSubmit.value
  const res = checkIfValidInput(playerInput.value)
  if (res) {
    if (checkResult(playerInput.value)) playerCurrentScore.value++
    else playerCurrentScore.value--
  } else {
    playerCurrentScore.value--
    intel.value.text = 'Invalid combination'
    intel.value.goodAnswer = false
  }
  playerInput.value = []
}
