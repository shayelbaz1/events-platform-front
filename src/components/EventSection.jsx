import EventCard from './EventCard';

const EventSection = ({ title, emoji, events, startIndex = 0 }) => {
  return (
    <div className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          {title} {emoji && <span>{emoji}</span>}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} eventId={startIndex + index} />
          ))}
        </div>
        
        {events.length > 6 && (
          <div className="flex justify-center mt-8">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition">
              Load More...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventSection;
