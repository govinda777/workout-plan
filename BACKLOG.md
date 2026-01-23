# 📋 Product Backlog & Roadmap

**Vision:** Transform the current workout tracker into a gamified NFT platform for training plans.
**Methodology:** Baby Steps (Incremental Improvements) & BDD (Behavior Driven Development).

---

## 📊 Status Summary

| Phase | Focus | Status | Completion |
|-------|-------|--------|------------|
| **1. Foundation** | Static HTML Site | ✅ Done | 100% |
| **2. Migration** | Next.js + Components | 🚧 **In Progress** | 0% |
| **3. Backend** | Auth & Persistence | 📅 Planned | 0% |
| **4. Web3** | NFT & Gamification | 📅 Future | 0% |

---

## 🟢 Phase 1: Foundation (Static HTML)
*Status: ✅ Complete*
*Goal: Provide a functional workout tracker for Andrea Mitsuoka using simple technologies.*

- [x] **Feature: View Workout Plan**
    - `GIVEN` I am on the landing page
    - `WHEN` I select a specific day (e.g., "Monday")
    - `THEN` I see the list of exercises for that day.
    - `AND` I can see the number of sets and reps.

- [x] **Feature: Interactive Exercise Details**
    - `GIVEN` I am viewing the exercise list
    - `WHEN` I click on an exercise row
    - `THEN` a modal opens with details (Anatomy, Errors, Coaching Cues).

- [x] **Feature: Track Progress (Local)**
    - `GIVEN` I have performed a set
    - `WHEN` I check the box for that set
    - `THEN` the progress is saved in my browser (Local Storage) for today.

- [x] **Feature: Week Selector**
    - `GIVEN` I am progressing through the program
    - `WHEN` I switch from "Weeks 1-2" to "Weeks 3-4"
    - `THEN` the workout volume and intensity adjust automatically in the view.

---

## 🚧 Phase 2: Modernization (Next.js Migration)
*Status: 🚀 Ready for Development*
*Goal: Modularize code, improve performance, and prepare for scalability using "Baby Steps".*

### 2.1 Environment & Data
- [ ] **Feature: Next.js Initialization**
    - `GIVEN` a standard Node.js environment
    - `WHEN` I run the initialization command
    - `THEN` a Next.js 14 project with TypeScript and Tailwind should be created.

- [ ] **Feature: Data Extraction**
    - `GIVEN` the monolithic `index.html`
    - `WHEN` I extract the JSON data
    - `THEN` `athleteData` and `treinos` should exist in a separate `src/data/workouts.ts` or `.json` file.

### 2.2 Component Migration (Baby Steps)
- [ ] **Feature: Layout Component**
    - `GIVEN` the new Next.js app
    - `WHEN` I create the Root Layout
    - `THEN` it should include the global CSS variables and font settings from the original HTML.

- [ ] **Feature: Header Component**
    - `GIVEN` the athlete info section
    - `WHEN` I render the `<Header />` component
    - `THEN` it should display the athlete's name, age, and stats via props.

- [ ] **Feature: Tab Navigation Component**
    - `GIVEN` the navigation tabs
    - `WHEN` I click a tab
    - `THEN` the URL should change (e.g., `/?tab=treino-a`) to support deep linking.

- [ ] **Feature: Exercise Table Component**
    - `GIVEN` a list of exercises for a specific day
    - `WHEN` I render the `<ExerciseTable />` component
    - `THEN` it should map through the data and render rows dynamically.
    - `AND` it should support bi-sets and tri-sets visuals.

- [ ] **Feature: Exercise Modal Component**
    - `GIVEN` an exercise click event
    - `WHEN` the modal opens
    - `THEN` it should use a `shadcn/ui` Dialog component to show details like "Errors" and "Coaching Cues".

---

## 📅 Phase 3: Identity & Persistence (Backend)
*Status: 📅 Planned*
*Goal: Allow users to save history permanently and access it from any device.*

- [ ] **Feature: User Authentication**
    - `GIVEN` a new user
    - `WHEN` they sign up with Email/Password
    - `THEN` a user profile is created in the database.

- [ ] **Feature: History Sync**
    - `GIVEN` I completed a workout on my phone
    - `WHEN` I login on my laptop
    - `THEN` I see the same workout marked as complete.

---

## 💎 Phase 4: Gamification & NFT (Web3)
*Status: 📅 Future*
*Goal: Incentivize training consistency with digital assets.*

- [ ] **Feature: Wallet Connection**
    - `GIVEN` a user with a crypto wallet (e.g., MetaMask)
    - `WHEN` they click "Connect Wallet"
    - `THEN` the app authenticates their address.

- [ ] **Feature: Mint Completion NFT**
    - `GIVEN` a user has completed 100% of the "4-Week Heavy/Light" plan
    - `WHEN` they click "Claim Reward"
    - `THEN` a smart contract mints a "Completion Badge" NFT to their wallet.

- [ ] **Feature: Token Gated Content**
    - `GIVEN` a premium workout plan
    - `WHEN` a user tries to access it
    - `THEN` the system checks if they hold the required NFT Access Pass.
