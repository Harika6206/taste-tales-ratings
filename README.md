# తెలుగు రుచులు (Telugu Ruchulu) - Authentic Telugu Restaurant Website

A modern, responsive website for an authentic Telugu restaurant showcasing traditional Andhra & Telangana cuisine.

## 🍛 About the Project

This website presents "Telugu Ruchulu" - an authentic Telugu restaurant that celebrates the rich culinary heritage of Andhra Pradesh and Telangana. The site features traditional Telugu dishes, customer reviews, and an immersive cultural experience.

## ✨ Features

- **Bilingual Content**: Telugu and English text throughout the site
- **Hero Section**: Stunning background with restaurant introduction
- **Interactive Menu**: Showcasing traditional dishes like:
  - Idli Sambar
  - Masala Dosa  
  - Upma
- **About Section**: Restaurant history and key highlights
- **Rating & Feedback**: Customer review system with star ratings
- **Contact Information**: Phone numbers and operating hours
- **Responsive Design**: Optimized for all devices
- **Modern UI**: Beautiful animations and gradients

## 🛠️ Technologies Used

### Frontend Framework
- **React 18**: Component-based architecture
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/UI**: High-quality component library
- **Lucide React**: Beautiful icons
- **Custom CSS**: Enhanced design system with gradients and animations

### Additional Libraries
- **React Router DOM**: Client-side routing
- **React Hook Form**: Form handling
- **TanStack Query**: Data fetching and caching
- **Zod**: Schema validation
- **Sonner**: Toast notifications

## 📁 Project Structure

```
src/
├── assets/           # Images and static files
│   ├── hero-bg.jpg
│   ├── idli-sambar.jpg
│   ├── masala-dosa.jpg
│   └── upma.jpg
├── components/       # React components
│   ├── ui/          # Shadcn UI components
│   ├── Hero.tsx     # Main hero section
│   ├── Menu.tsx     # Food menu display
│   ├── About.tsx    # Restaurant information
│   ├── RatingFeedback.tsx  # Customer reviews
│   └── Contact.tsx  # Contact information
├── pages/           # Route components
│   ├── Index.tsx    # Main homepage
│   └── NotFound.tsx # 404 page
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── main.tsx        # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd telugu-restaurant-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

The website uses a custom design system with:
- **Color Palette**: Warm, traditional colors reflecting Telugu culture
- **Typography**: Mix of English and Telugu fonts
- **Components**: Reusable UI components with consistent styling
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and hover effects

## 🌟 Key Components

### Hero Section
- Stunning background image
- Bilingual welcome message
- Call-to-action buttons for menu and reservations

### Menu Section
- Grid layout showcasing traditional dishes
- High-quality food photography
- Dish descriptions in both languages

### Rating & Feedback
- Interactive star rating system
- Customer review submission form
- Display of existing testimonials

### About Section
- Restaurant history and philosophy
- Key highlights (Live Kitchen, Traditional Music, etc.)
- Cultural elements and heritage

## 📱 Responsive Design

- **Mobile**: Optimized for smartphones (320px+)
- **Tablet**: Adapted for tablet devices (768px+)
- **Desktop**: Full experience for larger screens (1024px+)

## 🔧 Configuration

### Tailwind Configuration
Custom design tokens defined in `tailwind.config.ts` and `src/index.css`

### Vite Configuration
Optimized build settings in `vite.config.ts` with path aliases

## 🚀 Deployment

This project can be deployed on various platforms:

### Using Lovable
1. Open [Lovable](https://lovable.dev)
2. Click on Share → Publish

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### Supported Platforms
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For questions or support regarding this website:
- Check the code documentation
- Review component implementations
- Refer to the technology stack documentation

---

**తెలుగు రుచులు** - Bringing authentic Telugu flavors to the digital world! 🍛
