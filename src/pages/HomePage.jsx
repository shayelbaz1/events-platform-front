import { useState, useMemo } from 'react';
import Header from '../components/Header';
import ChannelHeader from '../components/ChannelHeader';
import FilterBar from '../components/FilterBar';
import EventSection from '../components/EventSection';
import { eventsData } from '../data/eventsData';

const HomePage = () => {
  const [filters, setFilters] = useState({
    time: 'Today',
    categories: [],
    prices: []
  });

  // Filter events based on selected filters
  const filterEvents = (events) => {
    return events.filter(event => {
      // Filter by categories
      if (filters.categories.length > 0 && !filters.categories.includes(event.category)) {
        return false;
      }

      // Filter by price
      if (filters.prices.length > 0 && !filters.prices.includes(event.priceType)) {
        return false;
      }

      return true;
    });
  };

  // Prepare filtered data
  const filteredData = useMemo(() => {
    return {
      topPicks: filterEvents(eventsData.topPicks),
      upNext: filterEvents(eventsData.upNext),
      morningVibes: filterEvents(eventsData.morningVibes),
      noonAndChill: filterEvents(eventsData.noonAndChill),
      afternoonGroove: filterEvents(eventsData.afternoonGroove),
      sunsetMoments: filterEvents(eventsData.sunsetMoments),
      eveningEnergy: filterEvents(eventsData.eveningEnergy),
      nightlifeHighlights: filterEvents(eventsData.nightlifeHighlights)
    };
  }, [filters]);

  // Calculate cumulative index for proper navigation
  const getCumulativeIndex = (sectionKey) => {
    const sections = ['topPicks', 'upNext', 'morningVibes', 'noonAndChill', 'afternoonGroove', 'sunsetMoments', 'eveningEnergy'];
    let index = 0;
    for (let section of sections) {
      if (section === sectionKey) break;
      index += filteredData[section].length;
    }
    return index;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ChannelHeader />
      <FilterBar filters={filters} onFilterChange={setFilters} />
      
      <div className="bg-gray-50">
        {filteredData.topPicks.length > 0 && (
          <EventSection 
            title="Today's Top Picks!" 
            events={filteredData.topPicks}
            startIndex={0}
          />
        )}
        
        {filteredData.upNext.length > 0 && (
          <EventSection 
            title="Up Next!" 
            events={filteredData.upNext}
            startIndex={getCumulativeIndex('upNext')}
          />
        )}
        
        {filteredData.morningVibes.length > 0 && (
          <EventSection 
            title="Morning Vibes" 
            emoji="☕️" 
            events={filteredData.morningVibes}
            startIndex={getCumulativeIndex('morningVibes')}
          />
        )}
        
        {filteredData.noonAndChill.length > 0 && (
          <EventSection 
            title="Noon & Chill" 
            emoji="😎" 
            events={filteredData.noonAndChill}
            startIndex={getCumulativeIndex('noonAndChill')}
          />
        )}
        
        {filteredData.afternoonGroove.length > 0 && (
          <EventSection 
            title="Afternoon Groove" 
            emoji="⚡" 
            events={filteredData.afternoonGroove}
            startIndex={getCumulativeIndex('afternoonGroove')}
          />
        )}
        
        {filteredData.sunsetMoments.length > 0 && (
          <EventSection 
            title="Sunset Moments" 
            emoji="🌅" 
            events={filteredData.sunsetMoments}
            startIndex={getCumulativeIndex('sunsetMoments')}
          />
        )}
        
        {filteredData.eveningEnergy.length > 0 && (
          <EventSection 
            title="Evening Energy" 
            emoji="🔥" 
            events={filteredData.eveningEnergy}
            startIndex={getCumulativeIndex('eveningEnergy')}
          />
        )}
        
        {filteredData.nightlifeHighlights.length > 0 && (
          <EventSection 
            title="Nightlife Highlights" 
            emoji="🏙️" 
            events={filteredData.nightlifeHighlights}
            startIndex={getCumulativeIndex('nightlifeHighlights')}
          />
        )}
        
        {/* Tomorrow Section */}
        <div className="py-8 px-6 border-t-4 border-gray-300">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Tomorrow's Top Picks!</h2>
            <div className="flex justify-center mt-8">
              <button className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition">
                View All Tomorrow's Schedule...
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-black text-white py-8 px-6 mt-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-sm text-gray-400 mb-4">
              About | Contact | Terms | Privacy
            </div>
            <div className="text-sm text-gray-500">
              Copyright 2025 © TODO.TODAY PTE. LTD.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
