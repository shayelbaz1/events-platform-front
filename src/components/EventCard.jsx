import { useNavigate } from 'react-router-dom';

const EventCard = ({ event, eventId }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(`/event/${eventId}`)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        {event.badge && (
          <span className="absolute top-3 left-3 bg-teal-50 text-teal-700 px-3 py-1 rounded-md text-xs font-medium border border-teal-200">
            {event.badge}
          </span>
        )}
        {event.editorPick && (
          <span className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 rounded-md text-xs font-bold">
            EDITOR'S PICK!
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{event.title}</h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">🕐</span>
            <span>{event.time} {event.frequency && `(${event.frequency})`}</span>
          </div>
          
          {event.location && (
            <div className="flex items-center gap-2">
              <span className="text-red-500">📍</span>
              <span>{event.location}</span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <span className="text-green-600">💵</span>
            <span className="font-medium text-gray-900">{event.price}</span>
          </div>
        </div>
      </div>
      
      <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
        <span className="text-xl">⋮</span>
      </button>
    </div>
  );
};

export default EventCard;
