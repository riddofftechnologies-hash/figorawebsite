import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mx = 0, my = 0, fx = 0, fy = 0
    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx - 6 + 'px'
      cursor.style.top  = my - 6 + 'px'
    }

    function animateFollower() {
      fx += (mx - fx - 20) * 0.12
      fy += (my - fy - 20) * 0.12
      follower!.style.left = fx + 'px'
      follower!.style.top  = fy + 'px'
      rafId = requestAnimationFrame(animateFollower)
    }

    document.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(animateFollower)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
    </>
  )
}
