# 📋 Product Backlog & Roadmap

> **Vision:** Transform the current workout tracker into a gamified **NFT platform** for training plans.
> **Methodology:** Baby Steps (Incremental Improvements) & BDD (Behavior Driven Development).

---

## 🧭 Legend & Status

| Icon | Meaning | Action Required |
| :---: | :--- | :--- |
| 🚀 | **Current Focus** | Priority tasks to be picked up immediately. |
| ✅ | **Done** | Feature is implemented, tested, and deployed. |
| 🚧 | **In Progress** | Currently being worked on. |
| 📅 | **Planned** | Future tasks, ready for refinement. |
| 💎 | **Goal / Milestone** | Major phase completion. |

---

## 🚀 Current Focus: Phase 2.1 - Environment Setup
*Objective: Migrate the static base to a robust Next.js 14 architecture.*

- [ ] **Feature: Next.js Initialization**
    - `GIVEN` I have a clean repository
    - `WHEN` I run `npx create-next-app@latest`
    - `THEN` I should have a Next.js 14 project with TypeScript, Tailwind, and App Router.

- [ ] **Feature: Shadcn/UI Configuration**
    - `GIVEN` the Next.js project is initialized
    - `WHEN` I run `npx shadcn-ui@latest init`
    - `THEN` I should have the `components/ui` folder structure ready.

- [ ] **Feature: Design System & Fonts**
    - `GIVEN` the current `index.html` styles
    - `WHEN` I configure `globals.css` and `tailwind.config.ts`
    - `THEN` the "Dark Mode" and specific colors (Primary #32b8c6) should be available as utility classes.

- [ ] **Feature: Static Asset Migration**
    - `GIVEN` the existing project
    - `WHEN` I move images and icons to `public/`
    - `THEN` they should be accessible via `http://localhost:3000/image.png`.

---

## 📊 Roadmap Overview

| Phase | Goal | Status | Progress |
| :--- | :--- | :--- | :--- |
| **1. Foundation** | Static HTML Site | ✅ **Done** | 100% |
| **2. Modernization** | Next.js Migration | 🚧 **In Progress** | 0% |
| **3. Identity** | Backend & Auth | 📅 **Planned** | 0% |
| **4. Web3 / NFT** | Gamification | 📅 **Planned** | 0% |

---

## 🟢 Phase 1: Foundation (Static HTML)
*Status: ✅ Completed*
*Goal: Functional workout tracker for Andrea Mitsuoka.*

<details>
<summary><strong>✅ View Completed Use Cases (Click to Expand)</strong></summary>

### Features
- [x] **Feature: View Workout Plan**
    - `GIVEN` I am on the landing page
    - `WHEN` I select a specific day (e.g., "Monday")
    - `THEN` I see the list of exercises for that day.

- [x] **Feature: Interactive Exercise Details**
    - `GIVEN` I am viewing the exercise list
    - `WHEN` I click on an exercise row
    - `THEN` a modal opens with details (Anatomy, Errors, Coaching Cues).

- [x] **Feature: Generic Fallback Modal**
    - `GIVEN` I click on an exercise that is missing specific data
    - `WHEN` the modal opens
    - `THEN` it displays a generic template with a YouTube search link.

- [x] **Feature: Educational Content (Why This Works)**
    - `GIVEN` I am on the dashboard
    - `WHEN` I click the "Why This Works" tab
    - `THEN` I see scientific explanations for the workout volume and frequency.

- [x] **Feature: Track Progress (Local)**
    - `GIVEN` I have performed a set
    - `WHEN` I check the box for that set
    - `THEN` the progress is saved in my browser (Local Storage).

- [x] **Feature: Week Selector**
    - `GIVEN` I am progressing through the program
    - `WHEN` I switch from "Weeks 1-2" to "Weeks 3-4"
    - `THEN` the workout volume and intensity adjust automatically.

- [x] **Feature: Theme System**
    - `GIVEN` the application is loaded
    - `WHEN` I view any page
    - `THEN` the colors and typography follow the defined design tokens (Dark Mode, Accents).
</details>

---

## 🏗️ Phase 2: Modernization (Next.js Migration)
*Status: 🚧 To Do*
*Goal: Modularize code and prepare for scalability using "Baby Steps".*

### 2.2 📦 Data Extraction (JSON/Types)
- [ ] **Feature: Extract Athlete Profile**
    - `GIVEN` the monolithic `index.html`
    - `WHEN` I create a `data/athlete.json` file
    - `THEN` the athlete's metadata (age, weight, goal) should be separated from the UI code.

- [ ] **Feature: Extract Exercise Database**
    - `GIVEN` the hardcoded exercise javascript object
    - `WHEN` I create a `data/exercises.json` file
    - `THEN` all exercise details (cues, errors, muscle groups) should be in a structured format.

- [ ] **Feature: Extract Workout Plans**
    - `GIVEN` the hardcoded workout tables
    - `WHEN` I create a `data/workouts.json` file
    - `THEN` the workout structure (Sets, Reps, RPE) should be represented as data objects.

### 2.3 🧩 Component Architecture
- [ ] **Feature: Header Component**
    - `GIVEN` the static header HTML
    - `WHEN` I create a `<Header />` React component
    - `THEN` it should accept athlete data as props and render the info cards.

- [ ] **Feature: Week Selector Component**
    - `GIVEN` the week selection buttons
    - `WHEN` I create a `<WeekSelector />` component with Zustand state
    - `THEN` it should toggle the global `currentWeek` state.

- [ ] **Feature: Workout Tabs Component**
    - `GIVEN` the tab navigation
    - `WHEN` I create a `<WorkoutTabs />` component
    - `THEN` it should render buttons dynamically based on the active plan.

- [ ] **Feature: Exercise List Component**
    - `GIVEN` the list of exercises
    - `WHEN` I create an `<ExerciseList />` component
    - `THEN` it should map through the workout data and render rows.

---

## 🔐 Phase 3: Identity & Persistence (Backend)
*Status: 📅 Future*
*Goal: Save progress to a database so it persists across devices.*

- [ ] **Feature: User Authentication**
    - `GIVEN` a visitor
    - `WHEN` they sign up with email/password
    - `THEN` they should have a personal account.

- [ ] **Feature: History Sync (Supabase/Postgres)**
    - `GIVEN` a logged-in user
    - `WHEN` they check a workout set
    - `THEN` the progress is saved to the remote database instead of LocalStorage.

---

## 💎 Phase 4: Gamification & NFT (Web3)
*Status: 📅 Future*
*Goal: Incentivize training consistency with digital assets.*

- [ ] **Feature: Wallet Connection**
    - `GIVEN` a user with a crypto wallet (Metamask/Rabby)
    - `WHEN` they click "Connect Wallet"
    - `THEN` the app authenticates their public address.

- [ ] **Feature: Mint Completion NFT**
    - `GIVEN` a user has completed 100% of the 4-week plan
    - `WHEN` they click "Claim Reward"
    - `THEN` the system verifies the database records
    - `AND` a smart contract mints a "Completion Badge" NFT to their wallet.

- [ ] **Feature: Token Gated Workouts**
    - `GIVEN` a premium "Glute Master" workout plan
    - `WHEN` a user tries to access it
    - `THEN` the system checks if they hold the "Phase 1 Completion" NFT
    - `AND` allows access only if the NFT is present.
