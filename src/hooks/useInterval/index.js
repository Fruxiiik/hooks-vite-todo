import { useEffect, useRef } from 'react'

export function useInterval(callback, delay) {
  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    function tick() {
      // const elapsed = Date.now() - startTime.current
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
