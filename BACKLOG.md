# 📋 Product Backlog & Roadmap

**Vision:** Transform the current workout tracker into a gamified NFT platform for training plans.
**Methodology:** Baby Steps (Incremental Improvements) & BDD (Behavior Driven Development).

## 📊 Project Status Dashboard

| Phase | Focus Area | Status | Progress | Goal |
| :--- | :--- | :---: | :---: | :--- |
| **1. Foundation** | Static HTML Site | ✅ Active | **100%** | Functional workout tracker (MVP) |
| **2. Modernization** | Next.js Migration | 🚧 To Do | **0%** | Modular, responsive, and scalable code |
| **3. Identity** | Backend & DB | 📅 Future | **0%** | User auth and persistent history |
| **4. Web3 / NFT** | Gamification | 📅 Future | **0%** | NFT rewards and token-gated content |

---

## 🟢 Phase 1: Foundation (Current State - Static HTML)
*Status: ✅ Active / Maintenance*
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

## 🏗️ Phase 2: Modernization (Next.js Migration)
*Status: 🚧 To Do*
*Goal: Modularize code, improve performance, and prepare for scalability using "Baby Steps".*

### 2.1 Environment Setup
- [ ] **Feature: Initialize Next.js Project**
    - `GIVEN` a developer machine
    - `WHEN` I initialize the project with `create-next-app`
    - `THEN` I should have a Next.js 14 App Router structure with TypeScript.
    - `AND` Tailwind CSS and shadcn/ui should be configured.

### 2.2 Data Layer Separation
- [ ] **Feature: Extract Static Data**
    - `GIVEN` the monolithic `index.html` file
    - `WHEN` I extract the `athleteData` and `treinos` objects
    - `THEN` they should reside in separate JSON/TS files (e.g., `data/exercises.ts`).
    - `AND` the types/interfaces should be defined.

### 2.3 Component Migration (Baby Steps)
- [ ] **Feature: Header & Layout**
    - `GIVEN` the new Next.js app
    - `WHEN` I implement the `Header` and `AthleteInfo` components
    - `THEN` they should display the athlete's details matching the original design.

- [ ] **Feature: Week Selector Component**
    - `GIVEN` the workout view
    - `WHEN` I click the Week Selector
    - `THEN` it should update the global state (Zustand) to the selected week.

- [ ] **Feature: Workout Tabs Navigation**
    - `GIVEN` the main page
    - `WHEN` I implement the tab navigation (A, B, C, E, F)
    - `THEN` clicking a tab should switch the active view content.

- [ ] **Feature: Exercise List Component**
    - `GIVEN` a selected workout day
    - `WHEN` I render the exercise list
    - `THEN` it should display the correct exercises, sets, and reps for the selected week.

- [ ] **Feature: Exercise Detail Modal**
    - `GIVEN` an exercise list
    - `WHEN` I click an exercise
    - `THEN` a Modal (Dialog) should appear with the exercise details.

- [ ] **Feature: Progress Tracking (Zustand)**
    - `GIVEN` the user completes a set
    - `WHEN` they check the box
    - `THEN` the state should be persisted to `localStorage` via Zustand middleware.

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
