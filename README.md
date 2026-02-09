# Vahlay QC Bot

Production-grade Quality Control engine for call audits.

## Setup
1. Copy `.env.example` → `.env`
2. Install deps: `npm install`
3. Run DB: `npx prisma migrate dev`
4. Start dev: `npm run dev`

## API
POST /api/qc/upload  
POST /api/qc/run  
GET /api/qc/result
