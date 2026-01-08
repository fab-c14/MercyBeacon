# CharityWeb - Charity Donation Website

A modern, responsive charity website built with Next.js, Firebase, and Tailwind CSS.

## Features

- 🎨 **Modern UI/UX**: Beautiful, minimalistic design with smooth animations
- 📱 **Fully Responsive**: Works seamlessly on all devices
- 🔥 **Firebase Backend**: Real-time database for donations, messages, and volunteers
- 💳 **QR Code Donations**: Easy donation process with QR code integration
- 📊 **Impact Dashboard**: Track donations and community impact
- 📧 **Contact Forms**: Message and volunteer registration forms
- 🎭 **Lottie Animations**: Engaging visual elements
- 🌈 **Professional Design**: Modern gradients and theming

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase account (for backend services)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and add your Firebase configuration:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Charity Configuration
NEXT_PUBLIC_CHARITY_UPI_ID=charity@upi
NEXT_PUBLIC_CHARITY_WALLET_ADDRESS=your_wallet_address_or_payment_info
NEXT_PUBLIC_CHARITY_NAME=CharityWeb Foundation
```

See `.env.example` for a template.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
CharityWeb/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── dashboard/         # Impact dashboard
│   │   ├── layout.js          # Root layout with navigation and footer
│   │   ├── page.js            # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── ContactSection.js  # Contact form
│   │   ├── DonationSection.js # Donation form with QR code
│   │   ├── Footer.js          # Footer component
│   │   ├── HeroSection.js     # Hero section with animation
│   │   ├── Navigation.js      # Navigation bar
│   │   └── Services.js        # Services/Impact section
│   ├── lib/                   # Library code
│   │   └── firebase.js        # Firebase initialization
│   └── services/              # Service layer
│       └── firebaseService.js # Firebase CRUD operations
├── public/                    # Static assets
├── .env.example              # Environment variables template
├── .gitignore               # Git ignore rules
├── next.config.mjs          # Next.js configuration
└── package.json             # Dependencies and scripts
```

## Pages

### Home (`/`)
- Hero section with call-to-action
- Services/Impact areas
- Donation section with QR code
- Contact form

### About (`/about`)
- Mission statement
- Impact areas
- Organization story

### Dashboard (`/dashboard`)
- Donation statistics
- Recent donations list
- Unread messages
- Community impact metrics

## Firebase Collections

The application uses the following Firestore collections:

- `donations`: Stores donation records
- `messages`: Stores contact form submissions
- `contacts`: Stores general inquiries
- `volunteers`: Stores volunteer registrations

## Technologies Used

- **Framework**: Next.js 16.1.1
- **Styling**: Tailwind CSS 4
- **Backend**: Firebase (Firestore)
- **Animations**: Lottie React
- **QR Codes**: qrcode.react
- **Icons**: React Icons

## Customization

### Updating Charity Information

Edit the `.env.local` file to customize:
- Charity name
- Payment QR code information (UPI ID or wallet address)
- Firebase configuration

### Styling

The project uses Tailwind CSS. Main color scheme:
- Primary: Orange (#F97316)
- Secondary Accents: Teal (#14B8A6), Blue (#3B82F6), Green (#22C55E)
- Background: White with subtle gray sections
- Footer: Dark gray (#111827)

Update colors in component files or add custom Tailwind configuration.

## Development

Run the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000
