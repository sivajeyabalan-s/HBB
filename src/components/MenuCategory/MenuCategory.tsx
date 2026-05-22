import MenuCard from '../MenuCard/MenuCard'
import './MenuCategory.css'

interface MenuItem {
  name: string
  price: string
  desc: string
  tags: { label: string; type: 'signature' | 'spicy' | 'veg' }[]
  imgSrc?: string
  imgAlt?: string
  imgLabel?: string
}

interface MenuCategoryProps {
  num: string
  title: string
  sub: string
  cat: string
  items: MenuItem[]
  visible: boolean
}

export default function MenuCategory({ num, title, sub, cat, items, visible }: MenuCategoryProps) {
  if (!visible) return null
  return (
    <div className="menu-cat" data-cat={cat}>
      <div className="menu-cat__head">
        <span className="menu-cat__num">{num}</span>
        <h2 className="menu-cat__title" dangerouslySetInnerHTML={{ __html: title }} />
        <span className="menu-cat__sub">{sub}</span>
      </div>
      <div className="menu-grid">
        {items.map((item, i) => (
          <MenuCard key={i} {...item} />
        ))}
      </div>
    </div>
  )
}
