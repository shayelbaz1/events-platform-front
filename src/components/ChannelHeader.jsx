const ChannelHeader = () => {
  return (
    <div className="bg-white py-6 px-6 border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-3xl">🌴</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Phangan Today</h2>
            <p className="text-sm text-gray-600">Channel by: <span className="text-blue-600">Eran Shor</span></p>
          </div>
        </div>
        
        <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition">
          Get The Daily Updates
          <span className="flex gap-1">
            <span className="text-green-400">💬</span>
            <span className="text-blue-400">✈️</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ChannelHeader;
