# Film_ACT Frontend

Film_ACT is a frontend-only creative networking demo for actors and filmmakers. It is the initial SEN 401 Group C application baseline; all profiles, listings, sign-in, and interest actions use mock data or browser-local state.

## Run locally

Requirements: Node.js 20 or newer and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use `npm run build` to create a production bundle and `npm run preview` to view that bundle locally.

## Technology

- React 18 and TypeScript
- Vite
- Tailwind CSS configuration with project-specific CSS components
- React Router for client-side navigation
- Lucide React icons

## Pages and demo interactions

- Landing page with community overview, featured actors, and open calls
- Registration and login forms with browser-side validation and simulated account selection
- Actor and filmmaker dashboard views
- Talent directory with name, skill, location, and experience filters
- Actor profiles with a simulated demo reel and connection actions
- Opportunity directory and details with frontend-only interest confirmation

No backend, database, real authentication, messaging, or application delivery is included.

## Structure

- `src/components/` reusable navigation, cards, brand, footer, and dashboard shell
- `src/data/mockData.ts` typed sample actors, filmmakers, and opportunities
- `src/pages/` route-level screens
- `src/types/` shared TypeScript models
- `src/styles.css` responsive visual system
- `docs/FRONTEND.md` frontend setup and scope
