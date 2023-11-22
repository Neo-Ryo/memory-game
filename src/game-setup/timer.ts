import { ref, type Ref } from 'vue'

export let interValIndex: number | undefined = undefined
export const timerState = ref(0)
export const gameStatus: Ref<'started' | 'stopped' | 'finished'> = ref('stopped')
function useTimer(min: number, secs: number) {
  clearInterval(interValIndex)
  timerState.value = min * 60 + secs
  interValIndex = setInterval(() => {
    if (timerState.value > 0) {
      timerState.value--
    } else {
      gameStatus.value = 'finished'
      clearInterval(interValIndex)
    }
  }, 1000)
}

export function useStartTimer(args: { minutes: number; seconds: number }) {
  clearInterval(interValIndex)
  useTimer(args.minutes, args.seconds)
}

export function useStopTimer() {
  clearInterval(interValIndex)
  timerState.value = 0
}
