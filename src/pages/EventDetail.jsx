import { useParams, useNavigate } from 'react-router-dom';
import { eventsData } from '../data/eventsData';
import EventCard from '../components/EventCard';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the event from all sections
  const allEvents = [
    ...eventsData.topPicks,
    ...eventsData.upNext,
    ...eventsData.morningVibes,
    ...eventsData.noonAndChill,
    ...eventsData.afternoonGroove,
    ...eventsData.sunsetMoments,
    ...eventsData.eveningEnergy,
    ...eventsData.nightlifeHighlights
  ];
  
  const event = allEvents[parseInt(id)];
  
  if (!event) {
    return <div>Event not found</div>;
  }
  
  // Get 3 random other events
  const otherEvents = allEvents
    .filter((_, index) => index !== parseInt(id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition z-10"
        >
          ←
        </button>
        
        {event.editorPick && (
          <div className="absolute top-6 right-6 bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-bold z-10">
            EDITOR'S PICK!
          </div>
        )}
        
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Walk-in badge */}
        <div className="mb-4">
          <span className="inline-block bg-lime-100 text-lime-800 px-3 py-1 rounded text-sm font-medium">
            Walk-in
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{event.title}</h1>

        {/* Event Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-700">
            <span className="text-blue-500">🕐</span>
            <span>{event.time} {event.frequency && `(${event.frequency})`}</span>
          </div>
          
          {event.location && (
            <div className="flex items-center gap-3">
              <span className="text-red-500">📍</span>
              <a href="#" className="text-blue-600 hover:underline">{event.location}</a>
            </div>
          )}
          
          <div className="flex items-center gap-3 text-gray-700">
            <span className="text-purple-500">👤</span>
            <span>Event By <strong>David Goodman</strong></span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-green-600">💵</span>
            <span className="font-semibold text-gray-900">{event.price}</span>
          </div>
        </div>

        {/* Description */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <p className="text-gray-800 mb-4 font-medium">
            A silent, immersive journey into authentic human connection.
          </p>
          
          <p className="text-gray-700 mb-4">
            <strong>Remove</strong> your masks and come closer to who you truly are. Without speech, we gently repattern limiting 
            self image and open space for new ways of being. This experience is not about performance or perfection, 
            but about authenticity, curiosity, and growth.
          </p>
          
          <p className="text-gray-700 mb-4">
            TantraDev is a two hour journey of connection, interaction, and transformation through music, movement, 
            and encounter. There are no expectations, only a safe and held space to feel, express, and be.
          </p>
          
          <p className="text-gray-700 mb-4">
            Whether you are seeking renewal, emotional growth, or a deeper sense of belonging and connection, 
            TantraDev offers a profound and exciting pathway into becoming more of yourself.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 pb-8 border-b border-gray-200">
          <span className="flex items-center gap-1 text-sm text-gray-700">😍🔥 Tantra</span>
          <span className="flex items-center gap-1 text-sm text-gray-700">💃 Dance</span>
          <span className="flex items-center gap-1 text-sm text-gray-700">🙌 Connection</span>
          <span className="flex items-center gap-1 text-sm text-gray-700">🚶 Movement</span>
          <span className="flex items-center gap-1 text-sm text-gray-700">🌱 Personal Growth</span>
        </div>

        {/* Other Events Section */}
        <div className="py-8">
          <h2 className="text-2xl font-bold mb-6">Other events you may like:</h2>
          <div className="space-y-4">
            {otherEvents.map((otherEvent, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden flex hover:shadow-md transition">
                <img 
                  src={otherEvent.image} 
                  alt={otherEvent.title}
                  className="w-44 h-36 object-cover flex-shrink-0"
                />
                <div className="p-4 flex-1">
                  <h3 className="font-semibold text-lg mb-2">{otherEvent.title}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">🕐</span>
                      <span>{otherEvent.time}</span>
                    </div>
                    {otherEvent.location && (
                      <div className="flex items-center gap-2">
                        <span className="text-red-500">📍</span>
                        <span>{otherEvent.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">💵</span>
                      <span className="font-medium">{otherEvent.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

      {/* Floating Contact Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition flex items-center justify-center text-2xl">
        💬
      </button>
    </div>
  );
};

export default EventDetail;
