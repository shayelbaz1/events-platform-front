import Header from '../components/Header';
import ChannelHeader from '../components/ChannelHeader';
import FilterBar from '../components/FilterBar';
import EventSection from '../components/EventSection';
import { eventsData } from '../data/eventsData';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ChannelHeader />
      <FilterBar />
      
      <div className="bg-gray-50">
        <EventSection 
          title="Today's Top Picks!" 
          events={eventsData.topPicks}
          startIndex={0}
        />
        
        <EventSection 
          title="Up Next!" 
          events={eventsData.upNext}
          startIndex={eventsData.topPicks.length}
        />
        
        <EventSection 
          title="Morning Vibes" 
          emoji="☕️" 
          events={eventsData.morningVibes}
          startIndex={eventsData.topPicks.length + eventsData.upNext.length}
        />
        
        <EventSection 
          title="Noon & Chill" 
          emoji="😎" 
          events={eventsData.noonAndChill}
          startIndex={eventsData.topPicks.length + eventsData.upNext.length + eventsData.morningVibes.length}
        />
        
        <EventSection 
          title="Afternoon Groove" 
          emoji="⚡" 
          events={eventsData.afternoonGroove}
          startIndex={eventsData.topPicks.length + eventsData.upNext.length + eventsData.morningVibes.length + eventsData.noonAndChill.length}
        />
        
        <EventSection 
          title="Sunset Moments" 
          emoji="🌅" 
          events={eventsData.sunsetMoments}
          startIndex={eventsData.topPicks.length + eventsData.upNext.length + eventsData.morningVibes.length + eventsData.noonAndChill.length + eventsData.afternoonGroove.length}
        />
        
        <EventSection 
          title="Evening Energy" 
          emoji="🔥" 
          events={eventsData.eveningEnergy}
          startIndex={eventsData.topPicks.length + eventsData.upNext.length + eventsData.morningVibes.length + eventsData.noonAndChill.length + eventsData.afternoonGroove.length + eventsData.sunsetMoments.length}
        />
        
        <EventSection 
          title="Nightlife Highlights" 
          emoji="🏙️" 
          events={eventsData.nightlifeHighlights}
          startIndex={eventsData.topPicks.length + eventsData.upNext.length + eventsData.morningVibes.length + eventsData.noonAndChill.length + eventsData.afternoonGroove.length + eventsData.sunsetMoments.length + eventsData.eveningEnergy.length}
        />
        
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
