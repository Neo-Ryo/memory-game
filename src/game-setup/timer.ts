import { ref } from 'vue'

export const interValIndex: number[] = []
export const timerState = ref(0)

export function useTimer(min: number, secs: number, cb?: () => void) {
  timerState.value = min * 60 + secs
  const i = setInterval(() => {
    if (timerState.value > 0) {
      timerState.value--
    } else {
      clearInterval(interValIndex.length && interValIndex[interValIndex.length - 1])
      cb && cb()
    }
  }, 1000)
  interValIndex.push(i)
}
