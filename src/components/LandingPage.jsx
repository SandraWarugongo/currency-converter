import { useState } from 'react';
import { ArrowRight, TrendingUp, Globe, Zap } from 'lucide-react';

const LandingPage = ({ onNavigateToDashboard }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            CurrencyFlow
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-4 sm:px-6 pt-10 sm:pt-20 pb-16 sm:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in">
            Convert Currency
            <br />
            <span className="text-3xl sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Experience lightning-fast currency conversion with real-time rates. 
            Your gateway to global financial data at your fingertips.
          </p>

          <button
            onClick={onNavigateToDashboard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="mr-2">Start Converting</span>
            <ArrowRight 
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Why Choose CurrencyFlow?
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Get instant currency conversions with real-time exchange rates. 
                No waiting, no delays - just immediate results.
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Global Coverage</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Support for 150+ currencies worldwide. From major currencies 
                to exotic ones, we've got you covered.
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Live Rates</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Always up-to-date with the latest market rates. 
                Make informed decisions with accurate data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Get Started?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of users who trust CurrencyFlow for their conversion needs.
            </p>
            <button
              onClick={onNavigateToDashboard}
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-white text-gray-900 font-semibold rounded-full text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Launch Converter
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 py-6 sm:py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; 2024 CurrencyFlow. Built with passion for your final project.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;