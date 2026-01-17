# 📋 Product Backlog & Roadmap

**Vision:** Transform the current workout tracker into a gamified NFT platform for training plans.
**Methodology:** Baby Steps (Incremental Improvements) & BDD (Behavior Driven Development).

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
*Goal: Modularize code, improve performance, and prepare for scalability.*

- [ ] **Feature: Project Setup**
    - `GIVEN` the developer environment
    - `WHEN` I initialize the Next.js 14 project
    - `THEN` the folder structure should follow the App Router standards.

- [ ] **Feature: Component Architecture**
    - `GIVEN` the monolithic `index.html`
    - `WHEN` I refactor the code
    - `THEN` exercises should be reusable React components.
    - `AND` data (athlete data) should be separated from the view logic (JSON files).

- [ ] **Feature: Responsive UI with Tailwind**
    - `GIVEN` a mobile user
    - `WHEN` they access the application
    - `THEN` the interface should be fully responsive using Tailwind CSS classes.

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
