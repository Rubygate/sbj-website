# Sparkles by Junetrain - Ecommerce Website

A modern, responsive ecommerce website built with Next.js 15 and Tailwind CSS for Sparkles by Junetrain, a handcrafted jewelry brand.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Ecommerce Ready**: Product listings, categories, search, and filtering
- **Mobile First**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: WCAG compliant design patterns

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Animations**: Custom CSS animations
- **Deployment**: Ready for Vercel deployment

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── shop/              # Shop page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── FeaturedProducts.tsx # Featured products grid
│   ├── Categories.tsx     # Product categories
│   └── Testimonials.tsx   # Customer testimonials
└── lib/                   # Utility functions
    └── utils.ts           # Helper functions
```

## 🎨 Design System

### Colors
- **Primary**: Pink gradient (`from-pink-600 to-purple-600`)
- **Secondary**: Purple accents
- **Neutral**: Gray scale for text and backgrounds
- **Success**: Green for positive actions
- **Warning**: Yellow for alerts
- **Error**: Red for errors and sales

### Typography
- **Font**: Geist Sans (system font fallback)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight for readability

### Components
- **Buttons**: Rounded with hover effects
- **Cards**: Subtle shadows with hover states
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with mobile menu

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sparkles-by-junetrain
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Pages

### Homepage (`/`)
- Hero section with call-to-action
- Featured products showcase
- Product categories
- Customer testimonials
- Trust indicators

### Shop (`/shop`)
- Product grid with filtering
- Search functionality
- Category filters
- Price range filters
- Sorting options

### About (`/about`)
- Company story and mission
- Team member profiles
- Company values
- Statistics and achievements

### Contact (`/contact`)
- Contact form with validation
- Company information
- Business hours
- Location details

## 🛍️ Ecommerce Features

### Product Management
- Product listings with images
- Pricing and sale prices
- Product categories
- Ratings and reviews
- New and sale badges

### Shopping Experience
- Product search
- Category filtering
- Price range filtering
- Wishlist functionality
- Shopping cart (UI ready)

### Customer Service
- Contact forms
- FAQ section (ready for content)
- Return policy information
- Shipping information

## 🎯 Future Enhancements

### Phase 2 Features
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Product detail pages
- [ ] Checkout process
- [ ] Payment integration
- [ ] Order management
- [ ] Customer reviews system
- [ ] Inventory management

### Phase 3 Features
- [ ] Admin dashboard
- [ ] CMS integration
- [ ] Email marketing
- [ ] Analytics tracking
- [ ] Multi-language support
- [ ] PWA capabilities

## 🔧 Customization

### Branding
Update the following files to customize the brand:
- `src/app/layout.tsx` - Meta tags and site title
- `src/components/Header.tsx` - Logo and navigation
- `src/components/Footer.tsx` - Company information
- `src/app/globals.css` - Color scheme and fonts

### Content
Replace placeholder content in:
- Product data in components
- Company information in About page
- Contact details in Contact page
- Testimonials and reviews

### Styling
Modify Tailwind classes in components to match your brand colors and design preferences.

## 📈 Performance

The website is optimized for performance with:
- Next.js 15 with App Router
- Tailwind CSS for minimal CSS
- Optimized images (ready for Next.js Image component)
- Lazy loading for components
- Efficient bundle splitting

## 🔒 Security

- Form validation on client and server
- Secure headers (ready for production)
- Input sanitization
- HTTPS ready

## 📊 SEO

- Semantic HTML structure
- Meta tags and descriptions
- Open Graph tags
- Structured data ready
- Sitemap generation ready

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with one click

### Other Platforms
The app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📞 Support

For support or questions:
- Email: hello@sparklesbyjunetrain.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for Sparkles by Junetrain
