import { useState } from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [categorySearch, setCategorySearch] = useState('');

  const categories = [
    'Wellness', 'Dance & Movement', 'Sports & Fitness', 
    'Consciousness & Spirituality', 'Arts & Creativity', 'Music',
    'Community & Social', 'Relationships & Connection', 
    'Family & Kids', 'Learning & Discussion', 
    'Parties & Nightlife', 'Dating & Singles'
  ];

  const timeOptions = ['Today', 'Tomorrow'];
  const priceOptions = ['paid', 'free', 'donation'];
  const priceLabels = { paid: 'Paid', free: 'Free', donation: 'Donation' };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(prev => prev === dropdown ? null : dropdown);
  };

  const handleTimeChange = (time) => {
    onFilterChange({ ...filters, time });
    setOpenDropdown(null);
  };

  const handleCategoryToggle = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handlePriceToggle = (price) => {
    const newPrices = filters.prices.includes(price)
      ? filters.prices.filter(p => p !== price)
      : [...filters.prices, price];
    onFilterChange({ ...filters, prices: newPrices });
  };

  const filteredCategories = categories.filter(cat =>
    cat.toLowerCase().includes(categorySearch.toLowerCase())
  );

  const getActiveFilterLabel = (key) => {
    if (key === 'time') return filters.time;
    if (key === 'category') {
      if (filters.categories.length === 0) return 'Category';
      if (filters.categories.length === 1) return filters.categories[0];
      return `${filters.categories.length} selected`;
    }
    if (key === 'price') {
      if (filters.prices.length === 0) return 'Price';
      if (filters.prices.length === 1) return priceLabels[filters.prices[0]];
      return `${filters.prices.length} selected`;
    }
    return key;
  };

  return (
    <div className="bg-white py-4 px-6 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-3">
        
          {/* Time Filter */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('time')}
              className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 bg-white flex items-center gap-2"
            >
              {getActiveFilterLabel('time')} <span>▼</span>
            </button>
            
            {openDropdown === 'time' && (
              <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-2xl shadow-xl min-w-[200px] overflow-hidden z-[9999]">
                {timeOptions.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeChange(time)}
                    className={`block w-full text-left px-5 py-3 hover:bg-gray-50 ${
                      filters.time === time ? 'bg-gray-100 font-medium' : ''
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Filter */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('category')}
              className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 bg-white flex items-center gap-2"
            >
              {getActiveFilterLabel('category')} <span>▼</span>
            </button>
            
            {openDropdown === 'category' && (
              <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-2xl shadow-xl w-[650px] p-5 z-[9999]">
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search category"
                    value={categorySearch}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {filteredCategories.map((category) => (
                    <label key={category} className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-5 h-5 rounded border-gray-300"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('price')}
              className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 bg-white flex items-center gap-2"
            >
              {getActiveFilterLabel('price')} <span>▼</span>
            </button>
            
            {openDropdown === 'price' && (
              <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-2xl shadow-xl min-w-[220px] p-4 z-[9999]">
                {priceOptions.map((price) => (
                  <label key={price} className="flex items-center gap-3 px-3 py-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.prices.includes(price)}
                      onChange={() => handlePriceToggle(price)}
                      className="w-5 h-5 rounded border-gray-300"
                    />
                    <span className="text-sm">{priceLabels[price]}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
