# 📋 Product Backlog & Roadmap

**Vision:** Transform the current workout tracker into a gamified NFT platform for training plans.
**Methodology:** Baby Steps (Incremental Improvements) & BDD (Behavior Driven Development).

---

## 🔥 Current Focus: Phase 2.1 - Environment Setup
*We are currently migrating the static base to a robust Next.js architecture.*

---

## 📊 Status Overview

| Phase | Goal | Status | Progress |
| :--- | :--- | :--- | :--- |
| **1. Foundation** | Static HTML Site | ✅ Completed | 100% |
| **2. Modernization** | Next.js Migration | 🚧 In Progress | 0% |
| **3. Identity** | Backend & Auth | 📅 Planned | 0% |
| **4. Web3 / NFT** | Gamification | 📅 Planned | 0% |

---

## 🟢 Phase 1: Foundation (Static HTML)
*Status: ✅ Completed*
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

- [x] **Feature: Educational Content**
    - `GIVEN` I am on the dashboard
    - `WHEN` I click the "Why This Works" tab
    - `THEN` I see the scientific explanation and biomechanical logic of the plan.

- [x] **Feature: Theme System**
    - `GIVEN` the application is loaded
    - `WHEN` I view any page
    - `THEN` the colors and typography follow the defined design tokens (Dark Mode, Accents).

---

## 🏗️ Phase 2: Modernization (Next.js Migration)
*Status: 🚧 To Do*
*Goal: Modularize code, improve performance, and prepare for scalability using "Baby Steps".*

### 2.1 Environment Setup
- [ ] **Feature: Next.js Initialization**
    - `GIVEN` I have a clean repository
    - `WHEN` I initialize the Next.js 14 project with App Router
    - `THEN` I should see the default Next.js folder structure.
    - `AND` Tailwind CSS should be configured.

- [ ] **Feature: Theme Configuration (Tailwind)**
    - `GIVEN` the Next.js project
    - `WHEN` I configure `tailwind.config.ts`
    - `THEN` I should have the same color palette (Primary, Accents) available as utility classes.

- [ ] **Feature: Asset Migration**
    - `GIVEN` the existing static HTML project
    - `WHEN` I move images and static files to `public/`
    - `THEN` they should be accessible via the new Next.js routes.

### 2.2 Data Extraction (Preparation)
- [ ] **Feature: Extract Athlete Data**
    - `GIVEN` the monolithic `index.html` with hardcoded athlete info
    - `WHEN` I create a `data/athlete.json` file
    - `THEN` the data should be structured and typed (TypeScript interface).

- [ ] **Feature: Extract Exercises Data**
    - `GIVEN` the hardcoded exercise list in `index.html`
    - `WHEN` I create a `data/exercises.json` file
    - `THEN` all exercise details (anatomy, cues, videos) should be in a structured format.

- [ ] **Feature: Extract Workout Plans**
    - `GIVEN` the hardcoded workout tables in `index.html`
    - `WHEN` I create a `data/workouts.json` file
    - `THEN` the workout structure (Day A, B, C...) should be represented as data objects.

- [ ] **Feature: Extract Educational Content**
    - `GIVEN` the hardcoded "Why This Works" HTML
    - `WHEN` I create a `data/education.json` or `content/why-works.md`
    - `THEN` the text content should be separated from the presentation layer.

### 2.3 Component Architecture
- [ ] **Feature: Header Component**
    - `GIVEN` the static header HTML
    - `WHEN` I create a `<Header />` React component
    - `THEN` it should display the athlete's name and stats dynamically from JSON data.

- [ ] **Feature: Week Selector Component**
    - `GIVEN` the week selection buttons
    - `WHEN` I create a `<WeekSelector />` component
    - `THEN` it should update the global state (Zustand) to the selected week.

- [ ] **Feature: Workout Tabs Component**
    - `GIVEN` the tab navigation for days (A, B, C...)
    - `WHEN` I create a `<WorkoutTabs />` component
    - `THEN` it should render buttons dynamically based on the available workout days.

- [ ] **Feature: Exercise List Component**
    - `GIVEN` the list of exercises for a selected day
    - `WHEN` I create an `<ExerciseList />` component
    - `THEN` it should map through the workout data and render individual items.

- [ ] **Feature: Exercise Modal Component**
    - `GIVEN` a user clicks on an exercise
    - `WHEN` the `<ExerciseModal />` is triggered
    - `THEN` it should display detailed info (Anatomy, Cues) passed as props.

---

## 🔐 Phase 3: Identity & Persistence (Backend)
*Status: 📅 Future*
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
