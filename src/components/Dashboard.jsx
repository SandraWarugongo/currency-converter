import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRightLeft, TrendingUp, RefreshCw } from 'lucide-react';

const Dashboard = ({ onNavigateToLanding }) => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('1');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Popular currencies
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
    { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh' },
    { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
    { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
    { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£' }
  ];

  // Mock exchange rate function (in real app, you'd use an API like ExchangeRate-API)
  const fetchExchangeRate = async (from, to) => {
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock exchange rates (in real app, fetch from API)
    const mockRates = {
      'USD-EUR': 0.85,
      'USD-GBP': 0.73,
      'USD-JPY': 110.0,
      'USD-CAD': 1.25,
      'USD-AUD': 1.35,
      'USD-CHF': 0.92,
      'USD-CNY': 6.45,
      'USD-INR': 74.5,
      'USD-BRL': 5.2,
      'USD-KES': 108.5,
      'USD-ZAR': 14.8,
      'USD-NGN': 411.0,
      'USD-EGP': 15.7,
      'EUR-USD': 1.18,
      'EUR-GBP': 0.86,
      'EUR-JPY': 129.4,
      'GBP-USD': 1.37,
      'GBP-EUR': 1.16,
      'JPY-USD': 0.009,
      'CAD-USD': 0.80,
      'AUD-USD': 0.74,
      'CHF-USD': 1.09,
      'CNY-USD': 0.155,
      'INR-USD': 0.0134,
      'BRL-USD': 0.19,
      'KES-USD': 0.0092,
      'ZAR-USD': 0.068,
      'NGN-USD': 0.0024,
      'EGP-USD': 0.064
    };
    
    let rate = mockRates[`${from}-${to}`];
    
    // If direct rate not found, calculate via USD
    if (!rate && from !== 'USD' && to !== 'USD') {
      const fromToUsd = mockRates[`${from}-USD`] || 1;
      const usdToTarget = mockRates[`USD-${to}`] || 1;
      rate = fromToUsd * usdToTarget;
    }
    
    // If still no rate, use 1 (same currency or fallback)
    if (!rate) {
      rate = from === to ? 1 : 1.0;
    }
    
    setExchangeRate(rate);
    setLastUpdated(new Date());
    setLoading(false);
    
    return rate;
  };

  // Convert currency
  const convertCurrency = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setResult('Please enter a valid amount');
      return;
    }

    const rate = await fetchExchangeRate(fromCurrency, toCurrency);
    const convertedAmount = parseFloat(amount) * rate;
    setResult(convertedAmount.toFixed(2));
  };

  // Swap currencies
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult('');
    setExchangeRate(null);
  };

  // Auto-convert when values change
  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      const timer = setTimeout(() => {
        convertCurrency();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
      {/* Header */}
      <header className="px-4 sm:px-6 py-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onNavigateToLanding}
            className="flex items-center text-gray-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Currency Converter
          </h1>
          <div className="w-24"></div> {/* Spacer for center alignment */}
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Converter Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Convert Currency</h2>
              <p className="text-gray-300">Get real-time exchange rates</p>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Enter amount"
                min="0"
                step="0.01"
              />
            </div>

            {/* From Currency */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">From</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code} className="bg-gray-800">
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={swapCurrencies}
                className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <ArrowRightLeft className="w-5 h-5" />
              </button>
            </div>

            {/* To Currency */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">To</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code} className="bg-gray-800">
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Convert Button */}
            <button
              onClick={convertCurrency}
              disabled={loading || !amount}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Converting...
                </>
              ) : (
                <>
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Convert
                </>
              )}
            </button>

            {/* Result */}
            {result && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30 animate-fade-in">
                <div className="text-center">
                  <p className="text-sm text-gray-300 mb-1">Converted Amount</p>
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {result} {toCurrency}
                  </p>
                  {exchangeRate && (
                    <p className="text-sm text-gray-400 mt-2">
                      1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
                    </p>
                  )}
                  {lastUpdated && (
                    <p className="text-xs text-gray-500 mt-1">
                      Last updated: {lastUpdated.toLocaleTimeString()}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Quick Access */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { from: 'USD', to: 'EUR' },
              { from: 'EUR', to: 'USD' },
              { from: 'GBP', to: 'USD' },
              { from: 'USD', to: 'KES' }
            ].map((pair, index) => (
              <button
                key={index}
                onClick={() => {
                  setFromCurrency(pair.from);
                  setToCurrency(pair.to);
                  setResult('');
                  setExchangeRate(null);
                }}
                className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-sm font-medium">
                  {pair.from} → {pair.to}
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;