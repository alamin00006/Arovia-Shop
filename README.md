# GhorerBazar Mobile (Expo + React Native)

Production-ready React Native mobile app scaffold for grocery/food ecommerce.

## Stack
- Expo + React Native + TypeScript
- Redux Toolkit + RTK Query + Redux Persist
- React Navigation (auth stack + bottom tabs + app stack)
- React Hook Form + Zod
- NativeWind-ready setup
- Expo SecureStore for sensitive token persistence
- Expo Image + Expo Notifications placeholder
- Reanimated + Gesture Handler + Bottom Sheet

## Environment
Create `.env`:
```bash
EXPO_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1
```

## Install
```bash
npm install
npm run start
```

## Included
- Splash and onboarding scaffolds
- Auth flow (login/register/forgot + OTP placeholder)
- Main tabs: Home, Shop, Cart, Wishlist, Account
- Product details, checkout, order success, track order
- My orders + order details, address book, reviews
- Support/static pages (about/contact/faq/policy-style screen)
- Reusable component library for common, home, product, cart, checkout, account, filters
- RTK Query API slices for all requested domains
- Secure token storage adapter via Expo SecureStore

## Notes
- Uses realistic mock product data while backend integration is pending.
- Replace placeholder API endpoints and static text with live backend contracts.
