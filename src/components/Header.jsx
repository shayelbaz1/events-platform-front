import { useState } from 'react';

const Header = () => {
  const [location, setLocation] = useState('Koh Phangan, Thailand');

  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-xl">🌴</span>
            </div>
            <div>
              <h1 className="text-sm font-light">
                <a href="#" className="hover:underline">a.skip-link.screen-reader-text</a>
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-sm">📍</span>
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent text-sm border-none outline-none cursor-pointer"
                >
                  <option>Koh Phangan, Thailand</option>
                  <option>Bangkok, Thailand</option>
                  <option>Phuket, Thailand</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button className="text-white text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
