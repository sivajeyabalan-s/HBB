import { useEffect, useState } from 'react'
import './DotIndex.css'

const SECTIONS = [
  { id: 'top', title: 'Top' },
  { id: 'heritage', title: 'Heritage' },
  { id: 'cuisine', title: 'Cuisine' },
  { id: 'services', title: 'Services' },
  { id: 'gallery', title: 'Gallery' },
  { id: 'banquet', title: 'Banquet' },
  { id: 'voices', title: 'Voices' },
  { id: 'reserve', title: 'Reserve' },
]

export default function DotIndex() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id))
    const update = () => {
      const mid = window.scrollY + window.innerHeight / 2
      let idx = 0
      els.forEach((el, i) => {
        if (el && el.offsetTop <= mid) idx = i
      })
      setActiveIndex(idx)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="dot-index" id="dotIndex">
      {SECTIONS.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          data-target={s.id}
          title={s.title}
          className={activeIndex === i ? 'is-active' : ''}
        />
      ))}
    </div>
  )
}
