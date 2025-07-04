
const SneakPeek = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Sneak Peek
          </h2>
        </div>
        
        <div className="relative">
          <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-8 shadow-2xl border border-white/50">
            <div className="aspect-video rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 flex items-center justify-center overflow-hidden">
              {/* Placeholder for dashboard mockup */}
              <div className="text-center p-8">
                <div className="grid grid-cols-3 gap-4 mb-6 opacity-40">
                  <div className="h-8 bg-indigo-200 rounded"></div>
                  <div className="h-8 bg-purple-200 rounded"></div>
                  <div className="h-8 bg-blue-200 rounded"></div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6 opacity-40">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg"></div>
                </div>
                <div className="flex justify-center">
                  <div className="px-6 py-2 bg-indigo-500 text-white rounded-full text-sm font-medium opacity-60">
                    Dashboard Preview
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements for visual interest */}
          <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-70"></div>
          <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-70"></div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 font-medium">
            Full launch coming soon — private beta in progress
          </p>
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;
