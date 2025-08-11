# Resume Writing Agency Website

A modern, responsive one-page website for a professional resume writing agency built with React.

## Features

- **Hero Section** - Eye-catching hero with CTA button
- **About Us** - Company mission and expertise highlights
- **Services** - Service cards with pricing and descriptions
- **Why Choose Us** - Trust factors and company advantages
- **Testimonials** - Client success stories carousel
- **Contact Form** - Contact form with WhatsApp and email integration

## Tech Stack

- React 18
- CSS Modules
- React Icons
- Responsive Design
- Modern CSS (Grid, Flexbox, CSS Variables)

## Design Features

- Clean, professional design with blue color palette
- Smooth scroll navigation
- Hover animations and transitions
- Mobile-first responsive design
- Modern typography using Inter font
- Professional imagery and icons

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js           # Hero section
│   ├── About.js          # About us section
│   ├── Services.js       # Services section
│   ├── WhyChooseUs.js    # Why choose us section
│   ├── Testimonials.js   # Testimonials carousel
│   ├── Contact.js        # Contact form
│   └── *.css             # Component styles
├── App.js                # Main app component
├── App.css               # Global styles
└── index.js              # App entry point
```

## Customization

### Colors
Update the CSS variables in `src/App.css` to change the color scheme:

```css
:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary-color: #64748b;
  /* ... */
}
```

### Content
Edit the component files to update text content, services, testimonials, and contact information.

### Images
Replace the placeholder images with your own professional images.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please contact the development team.
