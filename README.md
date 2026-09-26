# 🏋️‍♂️ FITLOG — Workout Library & Routine Planner

A modern, high-performance, dark-themed gym companion and workout routine planner built with **Next.js (App Router)** and **TypeScript**. FITLOG empowers fitness enthusiasts to explore a comprehensive exercise library, curate custom daily workout routines with smart limit caps, monitor live session metrics, and bookmark lifts for future sessions.

---

## 🚀 Live Demo & Repository

- **Repository:** [https://github.com/abirhosen30/Dev-fit-node-js-assignment.git](https://github.com/abirhosen30/Dev-fit-node-js-assignment.git)

---

## 🛠️ Technologies Used

FITLOG is built with modern, production-grade frontend tools and libraries:

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | React framework for server-rendered components, routing, and performance optimization |
| **React 19** | Component-driven UI architecture and lifecycle hooks |
| **TypeScript** | Type-safe development, robust interfaces, and autocomplete support |
| **Tailwind CSS v4** | Modern utility-first styling with responsive breakpoint management |
| **DaisyUI** | Accessible, themeable UI components and tabs |
| **React Context API** | Centralized global state management for workout plans and bookmarks |
| **Lucide React** | Clean, lightweight SVG iconography |
| **React Toastify** | Smooth, interactive user notifications for plan actions |

---

## ✨ 5 Key Features

### 1. 📚 Curated Workout Library & In-Depth Details
Explore exercises covering all major muscle groups (Chest, Shoulders, Arms, Back, Legs, Core). Each exercise features a dedicated dynamic detail page with step-by-step instructions, equipment needed, difficulty level, sets/reps guidance, and calorie estimates.

### 2. ⚡ "Today's Plan" with 5-Lift Cap Logic
Keep workouts focused and intent-driven. Users can queue exercises into their daily routine with an enforced **5-lift cap limit**. Once 5 lifts are added, the addition button automatically disables to prevent overtraining, along with duplicate prevention warnings.

### 3. 💾 Hydration-Safe LocalStorage Persistence
Workouts survive page reloads and browser sessions seamlessly. Implemented with hydration-safe `useEffect` lifecycle synchronization, ensuring `todayPlan` and `savePlan` remain fully persistent without Next.js server-client mismatch warnings.

### 4. 📊 Real-Time Workout Analytics Dashboard
The "My Plan" dashboard dynamically aggregates workout metrics in real time:
- **Total Exercises Count**
- **Cumulative Active Duration (Minutes)**
- **Total Estimated Calories Burned (kcal)**

### 5. 🎛️ Instant Plan Sorting & Routine Management
Organize planned routines effortlessly with on-the-fly sorting by:
- **Duration** (highest to lowest)
- **Rating** (community favorite)
- **Calories Burned** (maximum burn)
Features one-click actions to **Mark as Done**, **Save for Later**, or remove exercises from active lists.

---

## 📱 Responsive Layout Design

FITLOG is engineered from the ground up for seamless usability across all device form factors:
- **Mobile (< 640px):** Single-column grid, compact headers, 2-tier stacked plan cards, and thumb-friendly action buttons.
- **Tablet (640px – 1023px):** Balanced 2-column exercise grid, horizontal split hero banner, and structured 3-column stats panel.
- **Laptop & Desktop (1024px+):** 3-column exercise library grid, detailed side-by-side exercise breakdown, and full-width navigation bars.

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── details/[id]/        # Dynamic exercise details page
│   ├── my-plan/             # Today's plan & saved workouts dashboard
│   ├── globals.css          # Tailwind CSS & DaisyUI setup
│   ├── layout.tsx           # Root layout with ExercisesProvider & ToastContainer
│   └── page.tsx             # Homepage combining Banner & Library
├── assets/                  # Logos and static banner assets
├── components/
│   ├── exercisesDetails/    # Action buttons for detail views
│   ├── homepage/            # Hero Banner & Exercises Library section
│   └── shared/              # Cards, Navbar, and Footer components
├── context/
│   └── ExercisesContext.tsx # Global state, 5-lift cap, & LocalStorage persistence
└── types/
    └── exercieses.type.ts   # TypeScript interfaces for exercise data
