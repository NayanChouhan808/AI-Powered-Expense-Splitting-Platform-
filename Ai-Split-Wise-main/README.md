# AI Splitwise 

A modern expense sharing application that makes it easy to split bills with friends and keep track of who owes whom. Built with Next.js, Convex, and Clerk for authentication.

![AI Splitwise Clone](./public/hero.png)

## Features

- **User Authentication**: Secure sign-in and sign-up with Clerk
- **Expense Tracking**: Add and manage expenses shared between friends
- **Group Management**: Create and manage groups for shared expenses
- **Balance Dashboard**: Visual overview of owed money and debts
- **Expense Analytics**: Track spending patterns with monthly breakdowns
- **Real-time Updates**: Changes reflect instantly across all connected clients
- **Settlements**: Easily record payments between users

## Tech Stack

- **Frontend**: Next.js 15.2.3 with React 19
- **Backend/Database**: Convex (serverless backend with real-time sync)
- **Authentication**: Clerk with JWT integration
- **Styling**: Tailwind CSS with ShadcnUI components
- **Charts**: Recharts for data visualization
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Arpitkushwahaa/Ai-Split-Wise.git
cd Ai-Split-Wise
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create an `.env.local` file with the following variables:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

CLERK_JWT_ISSUER_DOMAIN=your_clerk_domain

CONVEX_DEPLOYMENT=your_convex_deployment
NEXT_PUBLIC_CONVEX_URL=your_convex_url
```

4. Push the Convex schema:
```bash
npx convex dev
# or for production
npx convex deploy
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app`: Next.js app router with page components
  - `/(auth)`: Authentication related pages
  - `/(main)`: Main application pages
    - `/dashboard`: User dashboard with expense analytics
    - `/contacts`: Contacts management
    - `/expenses`: Expense creation and management
    - `/groups`: Group management
    - `/settlements`: Handle settlements between users
- `/components`: Reusable React components
- `/convex`: Backend Convex functions and schema
  - `schema.js`: Database schema definition
  - `users.js`, `expenses.js`, etc.: Backend functions
- `/hooks`: Custom React hooks
- `/lib`: Utility functions and constants

## Environment Setup

For the project to work correctly, you need to set up:

1. **Clerk Authentication**:
   - Create a Clerk application at [clerk.dev](https://clerk.dev)
   - Configure JWT templates with "convex" as the applicationID

2. **Convex Backend**:
   - Set up a Convex project at [convex.dev](https://convex.dev)
   - Get your deployment URL to use in environment variables

## Features in Detail

### Dashboard

The dashboard provides an overview of:
- Who owes you money
- Who you owe money to
- Monthly spending patterns
- Recent expenses
- Groups you belong to

### Expenses

- Add new expenses and split them among group members
- Choose from different expense categories
- Select split methods (equal, percentage, custom)
- Add notes and tags to expenses

### Groups

- Create groups with friends for shared expenses
- Add and remove members
- View group-specific expenses and balances
- Settle up with specific group members

### Settlements

- Record payments between users
- Track settlement history
- Multiple payment methods supported

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Inspired by [Splitwise](https://www.splitwise.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide Icons](https://lucide.dev/)
