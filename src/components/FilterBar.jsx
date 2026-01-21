import { useState } from 'react';

const FilterBar = () => {
  const [activeFilters, setActiveFilters] = useState({
    time: 'Today',
    category: null,
    venue: null,
    price: null,
    area: null
  });

  const filters = [
    { key: 'time', label: 'Today', options: ['Today', 'Tomorrow', 'This Week'] },
    { key: 'category', label: 'Category', options: ['Yoga', 'Fitness', 'Meditation', 'Workshop'] },
    { key: 'venue', label: 'Venue', options: [] },
    { key: 'price', label: 'Price', options: ['Free', 'Under ฿500', '฿500-1000', 'Over ฿1000'] },
    { key: 'area', label: 'Area', options: ['Haad Rin', 'Thong Sala', 'Srithanu'] }
  ];

  return (
    <div className="bg-white py-4 px-6 border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-3 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium whitespace-nowrap hover:bg-gray-50 flex items-center gap-1"
            >
              {activeFilters[filter.key] || filter.label}
              <span className="text-xs">▼</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
