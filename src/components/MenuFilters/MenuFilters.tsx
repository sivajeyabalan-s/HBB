import './MenuFilters.css'

const CATEGORIES = [
  { value: 'all', label: 'All Dishes' },
  { value: 'biryani', label: 'Biryani' },
  { value: 'kebab', label: 'Kebabs & Starters' },
  { value: 'mains', label: 'Mains' },
  { value: 'breads', label: 'Breads & Rice' },
  { value: 'dessert', label: 'Desserts' },
  { value: 'drink', label: 'Beverages' },
]

interface MenuFiltersProps {
  active: string
  onChange: (cat: string) => void
}

export default function MenuFilters({ active, onChange }: MenuFiltersProps) {
  return (
    <>
      <div className="menu-filters">
        {CATEGORIES.map((c) => (
          <button
            key={c.value}
            className={`chip${active === c.value ? ' is-on' : ''}`}
            data-cat={c.value}
            onClick={() => onChange(c.value)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="menu-filter-wrap">
        <select
          className="menu-filter-select"
          aria-label="Filter by category"
          value={active}
          onChange={(e) => onChange(e.target.value)}
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
        <span className="menu-filter-arrow">&#9660;</span>
      </div>
    </>
  )
}
