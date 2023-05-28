import Link from 'next/link'

export function Categories() {
  const NavCategories = [
    {
      category_name: 'News',
      category_active: true,
    },

    {
      category_name: 'Environment',
      category_active: false,
    },

    {
      category_name: 'Sports',
      category_active: false,
    },

    {
      category_name: 'Entertainment',
      category_active: false,
    },

    {
      category_name: 'Life',
      category_active: false,
    },

    {
      category_name: 'Business',
      category_active: false,
    },

    {
      category_name: 'Tech',
      category_active: false,
    },

    {
      category_name: 'Travel',
      category_active: false,
    },
  ]

  return (
    <nav className="mt-12 flex gap-8 overflow-auto border-b border-gray-100 2md:justify-center">
      {NavCategories.map((category, categoryIdx) => (
        <Link
          href="/"
          className={`p-3 text-sm font-semibold hover:opacity-90  ${
            category.category_active &&
            'border-b-2 border-blue-700 hover:opacity-100'
          }`}
          key={categoryIdx}
        >
          {category.category_name}
        </Link>
      ))}
    </nav>
  )
}
