# CurrencyFlow - Currency Converter App

A modern, responsive currency converter built with React, Vite, and Tailwind CSS for a final school project.

![CurrencyFlow](https://img.shields.io/badge/CurrencyFlow-v1.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-green)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.0-blue)

## 🌟 Features

- **Modern Design**: Beautiful gradient backgrounds with glassmorphism effects
- **Responsive Layout**: Works perfectly on mobile, tablet, and desktop devices
- **Real-time Conversion**: Instant currency conversion with simulated live rates
- **Multiple Currencies**: Support for 14+ popular world currencies including USD, EUR, GBP, KES, etc.
- **Interactive UI**: Smooth animations, hover effects, and transitions
- **Quick Access**: Pre-configured currency pairs for common conversions
- **Swap Feature**: Easy currency swap with one click
- **Mobile-First**: Optimized for mobile devices with touch-friendly interface

## 🚀 Technologies Used

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful, customizable SVG icons
- **JavaScript ES6+** - Modern JavaScript features

## 📱 Responsive Design

This application is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop computers (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🛠️ Installation & Setup

Follow these steps to run the project locally:

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Step 1: Clone or Download
```bash
# If using Git
git clone <your-repo-url>
cd currency-converter

# Or download and extract the project files
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`

### Step 4: Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
currency-converter/
├── public/                 # Public assets
├── src/
│   ├── components/         # React components
│   │   ├── LandingPage.jsx # Welcome/landing page
│   │   └── Dashboard.jsx   # Currency converter interface
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles with Tailwind
├── index.html             # HTML template
├── package.json           # Project dependencies
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Design Features

### Landing Page
- **Hero Section**: Eye-catching gradient background with animated elements
- **Feature Cards**: Highlighting key benefits of the converter
- **Call-to-Action**: Prominent buttons to navigate to the converter
- **Responsive Typography**: Scales beautifully across all screen sizes

### Dashboard
- **Clean Interface**: Focused design for easy currency conversion
- **Input Validation**: Ensures valid amounts are entered
- **Visual Feedback**: Loading states and success animations
- **Quick Access**: Pre-configured currency pairs for convenience

## 💱 Supported Currencies

The converter supports these popular currencies:

| Code | Currency | Symbol |
|------|----------|---------|
| USD  | US Dollar | $ |
| EUR  | Euro | € |
| GBP  | British Pound | £ |
| JPY  | Japanese Yen | ¥ |
| CAD  | Canadian Dollar | C$ |
| AUD  | Australian Dollar | A$ |
| CHF  | Swiss Franc | CHF |
| CNY  | Chinese Yuan | ¥ |
| INR  | Indian Rupee | ₹ |
| BRL  | Brazilian Real | R$ |
| KES  | Kenyan Shilling | KSh |
| ZAR  | South African Rand | R |
| NGN  | Nigerian Naira | ₦ |
| EGP  | Egyptian Pound | E£ |

## 🔧 Customization

### Adding New Currencies
To add more currencies, edit the `currencies` array in `src/components/Dashboard.jsx`:

```javascript
const currencies = [
  // Add new currency object
  { code: 'NEW', name: 'New Currency', symbol: 'N },
  // ... existing currencies
];
```

### Styling Changes
The app uses Tailwind CSS utility classes. Key areas to customize:
- **Colors**: Modify gradient colors in components
- **Spacing**: Adjust padding/margins using Tailwind classes  
- **Typography**: Change text sizes and fonts
- **Animations**: Modify transition and animation classes

### API Integration
Currently uses mock exchange rates. To integrate a real API:

1. Sign up for a service like:
   - [ExchangeRate-API](https://exchangerate-api.com/)
   - [Fixer.io](https://fixer.io/)
   - [CurrencyAPI](https://currencyapi.com/)

2. Replace the `fetchExchangeRate` function in `Dashboard.jsx`:

```javascript
const fetchExchangeRate = async (from, to) => {
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  const data = await response.json();
  return data.rates[to];
};
```

## 🎯 Learning Objectives

This project demonstrates:
- **React Hooks**: useState, useEffect for state management
- **Component Architecture**: Modular, reusable components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern JavaScript**: ES6+ features like async/await, destructuring
- **User Experience**: Smooth animations and intuitive interface
- **Project Structure**: Organized file structure and best practices

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/currency-converter",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📝 Future Enhancements

Potential improvements for the project:
- [ ] Historical exchange rate charts
- [ ] Favorite currency pairs
- [ ] Offline mode with cached rates
- [ ] Currency rate alerts
- [ ] Dark/light theme toggle
- [ ] Multiple language support
- [ ] Export conversion history

## 🐛 Troubleshooting

### Common Issues

**Build fails with Tailwind CSS**
```bash
# Reinstall Tailwind CSS
npm uninstall tailwindcss
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Icons not showing**
```bash
# Reinstall Lucide React
npm uninstall lucide-react
npm install lucide-react
```

**Development server not starting**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 🤝 Contributing

This is a school project, but suggestions are welcome:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch  
5. Create a Pull Request

## 📄 License

This project is created for educational purposes as part of a final school project.

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first framework
- **Lucide React** for the beautiful icons
- **Vite** for the fast development experience
- **React Team** for the incredible library

---

**Built with ❤️ for a final school project**

*CurrencyFlow - Making currency conversion simple and beautiful.
