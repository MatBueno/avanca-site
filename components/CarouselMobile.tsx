'use client'
import { useRef, useState } from 'react'

export function CarouselMobile({ children, count }: { children: React.ReactNode; count: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function onScroll() {
    const el = ref.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    if (max <= 0) return
    setActive(Math.round((el.scrollLeft / max) * (count - 1)))
  }

  return (
    <div className="md:hidden overflow-hidden">
      <div ref={ref} onScroll={onScroll} className="-mx-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
        {children}
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${i === active ? 'bg-verde' : 'bg-cinza-medio'}`}
          />
        ))}
      </div>
    </div>
  )
}
