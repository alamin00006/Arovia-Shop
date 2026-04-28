# GhorerBazar Monorepo Structure

Project is now split into separate folders:

- `backend/` → NestJS + Prisma API
- `client/` → Next.js web client/admin storefront
- `mobile/` → Expo React Native mobile app

## Run each app separately

### Backend
```bash
cd backend
npm install
npm run start:dev
```

### Client
```bash
cd client
npm install
npm run dev
```

### Mobile
```bash
cd mobile
npm install
npm run start
```

## Note
Existing root-level files are kept for backward compatibility while the split structure is introduced.
