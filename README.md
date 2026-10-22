# SMLNEXGEN Microfinance Management System — React UI Prototype

A responsive React + Vite frontend inspired by the supplied SMLNEXGEN dashboard reference.

## Included screens
- Dashboard overview with summary cards, collection trend, quick actions, upcoming EMI dues, and pending approvals
- Customer Management with searchable customer directory
- Loan Management with loan portfolio and lifecycle overview
- Collections with payment summary and sample receipts
- FD & RD management with separate Fixed Deposit / Recurring Deposit lists, process flows, and FD-vs-RD comparison
- Finance overview and separate Profit & Loss screens
- EMI Management with due summaries and interactive EMI date-change approval/rejection
- Notifications center
- Reports & Analytics
- Settings, reminder preferences, and sample roles

## Run locally
1. Install Node.js (recommended: Node 20 LTS or newer).
2. Extract the ZIP and open a terminal in this folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL shown by Vite (normally http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Notes
- Uses sample/demo data only. No backend, database, real SMS, email, payment, or customer information is connected.
- EMI requests are interactive in React state. Approve/reject and new request actions update the current browser session only.
- Branding is SMLNEXGEN. No other organization name is used.
