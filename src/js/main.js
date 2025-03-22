export default function Projects() {
    return (
      <div className="flex flex-col items-center justify-end min-h-screen p-6 bg-gray-900 text-white">
        {/* Main Container */}
        <div className="w-3/4 max-w-4xl p-6 bg-gray-800 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4">My Projects</h1>
  
          {/* Categories */}
          <div className="flex justify-center gap-6 mb-6">
            <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">Hard Projects</button>
            <button className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">Small Scripts</button>
          </div>
  
          {/* Small Scripts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-700 rounded-xl shadow-md hover:scale-105 transition">
              <h3 className="text-lg font-semibold">Script 1</h3>
              <p className="text-sm text-gray-300">A cool Python script for automation.</p>
              <button className="mt-2 text-blue-300 hover:underline">View</button>
            </div>
  
            <div className="p-4 bg-gray-700 rounded-xl shadow-md hover:scale-105 transition">
              <h3 className="text-lg font-semibold">Script 2</h3>
              <p className="text-sm text-gray-300">A CLI tool for file organization.</p>
              <button className="mt-2 text-blue-300 hover:underline">View</button>
            </div>
  
            <div className="p-4 bg-gray-700 rounded-xl shadow-md hover:scale-105 transition">
              <h3 className="text-lg font-semibold">Script 3</h3>
              <p className="text-sm text-gray-300">A small web scraper tool.</p>
              <button className="mt-2 text-blue-300 hover:underline">View</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  