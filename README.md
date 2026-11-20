<p align="center">
  <img src="public/logo.svg" alt="Adeptify Logo" width="420" />
</p>

<p align="center">
  <strong>Skill Acceleration for Engineers • Enterprise Online Learning Management System (LMS)</strong>
</p>

<p align="center">
  <a href="https://adeptify-online-learning-management.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-Visit_Adeptify_on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo on Vercel" />
  </a>
  <img src="https://img.shields.io/badge/Theme-Dark%20%7C%20Light%20Mode-059669?style=for-the-badge" alt="Dark / Light Mode" />
  <img src="https://img.shields.io/badge/React-19.3-059669?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-7.0-176238?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-10b981?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Redux%20Toolkit-2.14-064e3b?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/Free_Courses-10_Included-10b981?style=for-the-badge" alt="10 Free Courses" />
  <img src="https://img.shields.io/badge/Currency-INR%20(₹)-047857?style=for-the-badge" alt="INR Currency" />
</p>

<p align="center">
  🌐 <strong>Live Application URL:</strong> <a href="https://adeptify-online-learning-management.vercel.app/">https://adeptify-online-learning-management.vercel.app/</a>
</p>

---

## 📖 Brief Project Overview

**Adeptify** is a production-ready, full-lifecycle **Online Learning Management System (LMS)** engineered specifically for technology professionals, developers, and engineering institutions. It brings university-grade curriculum structure, practical hands-on coding workflows, and enterprise administrative governance into a single, unified web platform.

The platform provides an end-to-end learning lifecycle with three interconnected role portals:

1. **Student Portal**:
   - Explore **73+ industry-tailored courses** across Full Stack Development, Cloud & DevOps, AI/Data Science, System Design, and Cybersecurity.
   - Includes **10 completely free courses** across all tech categories with 1-click enrollment.
   - Interactive classroom with **responsive playable video lectures**, in-lecture video search, timestamped personal note-taking, and downloadable cheat sheets.
   - Self-evaluating quizzes with instant passing score validation and graduation celebration confetti.
   - Downloadable and verifiable course completion certificates.

2. **Instructor Studio**:
   - Course creation wizard supporting video embed links, module outlines, quizzes, and Indian Rupee (₹) pricing.
   - Catalog management (*Published*, *Under Review*, *Draft*).
   - Enrolled student directories with progress tracking and direct messaging.
   - Revenue analytics, rating distributions, and student drop-off telemetry.

3. **Administrator Control Center**:
   - Platform-wide operational health monitoring and financial volume tracking (**₹84.59 Lakhs** gross volume).
   - Students and faculty directories with security actions (*Suspend/Reactivate*, *Reset Password*, *Approve Payouts*).
   - Course QA approvals and homepage promotion controls.
   - Payment gateway breakdown (**UPI: 68%**, Cards: 20%, Net Banking: 9%) and ledger export.

---

## 💎 Brand Identity & Visual Design

- **Brand Name**: **Adeptify**
- **Brand Tagline**: *Skill Acceleration for Engineers*
- **Brand Emblem**: **Ascending Diamond Prism** (`AdeptifyLogo.tsx` / `logo.svg`) symbolizing technical growth, resilience, and upward career trajectory.
- **Theme Palette**: **Nordic Emerald, Forest Green & Dark Slate** (`#020617`, `#0f172a`, `#176238`, `#059669`, `#10b981`), providing a distraction-free, high-focus engineering workspace.
- **Frozen Layout Architecture**: The top navigation bar and side drawer are locked to screen boundaries, allowing only the core workspace to scroll smoothly without layout shifting.
- **Sidebar & Navbar Alignment**: Pixel-perfect vertical divider alignment between the expanded sidebar (`w-64`) and minimized sidebar (`w-20`) with identical title item heights and spacing.

---

## 🚀 New Features & Enhancements

### 1. 🌓 Full Application Dark / Light Mode System
- **Global Theme Switcher**: 1-click toggle in the Navbar transitioning smoothly between clean light mode and deep midnight slate dark mode (`#020617` / `#0f172a` / `#10b981`).
- **Comprehensive Dark Mode Across All 32 Files**: Full coverage spanning Student, Instructor, and Admin views — cards, sidebars, modals, tables, inputs, forms, and Recharts analytics.
- **State Persistence**: Theme choice (`light` | `dark`) automatically persists in `localStorage` (`adeptify_theme`) with immediate HTML `class="dark"` hydration on reload.
- **Custom Themed Scrollbars & Background**: Custom dark scrollbar tracks and dynamic multi-stop ambient mesh background with luminous emerald aurora glows.

### 2. 🔍 Live Search Autocomplete with `Ctrl + K` Support
- **Instant Search Dropdown**: Interactive search box in Navbar showing matching courses with thumbnails, categories, instructors, and pricing.
- **Global Keyboard Shortcut**: Press `Ctrl + K` (or `Cmd + K`) anywhere in the application to instantly focus the search bar.
- **Direct Navigation**: Clicking any search suggestion takes learners directly to the course details page.

### 3. 🔥 Daily Learning Streak Badge & Modal
- **Gamified Learning Streak**: Live `🔥 5 Days` badge in the Navbar motivating daily student engagement.
- **Interactive Streak Popover**: Visual 7-day progress calendar dots, current streak metrics, and milestone achievements.

### 4. 🎓 10 Free Full-Length Courses (Zero Cost)
- **10 Free Tech Courses**: Added across Web Development, UI/UX Design, Cloud & DevOps, Data Science & AI, and Cybersecurity.
- **1-Click Free Enrollment**: Direct enrollment button with ₹0 price tag and zero payment friction.

### 5. 🎬 Playable Video Previews Directly on Course Cards
- **Inline Video Previews**: Hover over any course thumbnail and click the play button to watch preview lectures right on the course card or details page without leaving the view.
- **Close & Status Controls**: Built-in "Close Video" button and a live "Playing Video" badge indicator.

### 6. 👤 Smart Profile Photo & Avatar Initial System
- **First-Letter Avatar Fallback**: Dynamic initial letter avatar based on user's name with high-contrast emerald gradients.
- **Custom Image Upload**: Option to upload and compress personal profile images (< 5MB) with instant preview and `localStorage` persistence.
- **One-Click Reset**: "Use Initial Letter" option to switch back to initial letter avatars anytime.

### 7. 📊 Enhanced Sidebar Widgets
- **Weekly Study Goal Widget**: Live progress tracker (e.g., 3.5 / 5.0 hrs - 70%) with visual progress bar and remaining hours indicator.
- **"Continue Learning" Mini-Card**: Quick-resume widget in the sidebar displaying current course thumbnail, progress percentage, and 1-click "Resume Lesson" shortcut.
- **Help Center & Student Community Link**: Integrated modal with FAQs, documentation search, active peer stats, and study group discussions.

---

## 🌟 Core Functional Modules

### 1. Student Classroom & Dashboard
- **1-Click Demo Login**: Switch roles seamlessly between Student, Instructor, and Admin directly from the navigation bar.
- **Student Dashboard (`/dashboard`)**: Study streak tracker, weekly progress metrics, active courses, and quick "Resume Lesson" actions.
- **Course Catalog (`/courses`)**: Multi-facet filterable catalog with live search across 73+ curated technology courses.
- **Course Syllabus & Overview (`/courses/:id`)**: Detailed curriculum tree, instructor credentials, prerequisites, and student reviews.
- **Interactive Classroom Player (`/learning/:courseId`)**:
  - Playable HD video lecture player with fallback streams.
  - **Course Video Search & Related Lecture Finder**: In-classroom video search to find related lectures, deep dives, and tutorials by topic.
  - Interactive collapsible curriculum with real-time completion checkmarks.
  - Interactive modal quiz engine with scoring thresholds.
  - Coding project assignments and submission briefs.
  - Auto-saving timestamped lecture notebook.
- **My Learning (`/my-learning`)**: Course progress filters (*All*, *In Progress*, *Completed*).
- **Verifiable Certificates (`/certificates`)**: Printable certificates with student name, instructor accreditation, and credential verification search.
- **Wishlist & Profile (`/wishlist`, `/profile`)**: Bookmark future learning tracks and manage developer profile credentials.

---

### 2. Instructor Studio (Protected: Instructor & Admin)
- **Studio Dashboard (`/instructor`)**: Monthly earnings (**₹14,89,200**), active student reach (**88,400+**), and average course ratings.
- **Course Builder (`/instructor/create-course`)**: Comprehensive course authoring with syllabus structuring, YouTube lecture attachments, and pricing in INR.
- **Manage Courses (`/instructor/manage-courses`)**: Manage course statuses, preview student classroom view, or delete drafts.
- **Enrolled Students Roster (`/instructor/students`)**: Search and monitor student completion percentages, issue feedback, and review certificates.
- **Performance Analytics (`/instructor/analytics`)**: Revenue area graphs (₹ in Lakhs), rating distributions, and enrollment velocity.

---

### 3. Administrator Governance (Protected: Admin Only)
- **Admin Overview (`/admin`)**: High-level platform health, total learner base (1,84,500), and platform gross revenue.
- **Learners Directory (`/admin/students`)**: Master learner roster across Indian IT hubs, total spending in ₹, and **Suspend / Reactivate** toggles.
- **Faculty Directory (`/admin/instructors`)**: Faculty profiles, payout balances, and instant **"Approve Payout"** actions.
- **Course Approvals (`/admin/courses`)**: QA submission queue for reviewing and approving newly submitted courses.
- **Revenue Analytics & Ledger (`/admin/revenue`)**: Complete platform cash flow, faculty disbursals (85%), platform margin (15%), and gateway breakdown (**UPI: 68%**).

---

### 4. Security & Role-Based Access Control (RBAC)
- **Protected Routes (`ProtectedRoute.tsx`)**: Strict role checking guards `/instructor/*` and `/admin/*`.
- **Friendly Access Guard**: Students attempting to open restricted instructor or admin URLs are presented with an explanatory access screen with an instant **"Switch to Role (Demo)"** button.
- **Feedback Notification Toasts (`ToastContainer.tsx`)**: Global notification toasts with a crisp **2-second auto-dismiss timer** and animated countdown bar.

---

## 🛠️ Technology Stack

| Technology | Role in Adeptify |
| :--- | :--- |
| **React 19 & Vite 8** | Ultra-fast reactive UI rendering and modern module bundling |
| **TypeScript 7** | Comprehensive type safety for courses, roles, quizzes, and analytics |
| **Tailwind CSS 3.4** | Nordic Emerald & Dark Slate enterprise design system with `darkMode: 'class'` |
| **Redux Toolkit 2.14** | Predictable state store for Auth, Courses, Learning progress, and UI state |
| **React Router v7** | Client-side routing with `ProtectedRoute` guards and strict route matchers |
| **Framer Motion 14** | Smooth drawer transitions, modal popups, and toast dismiss animations |
| **Recharts 3.10** | Dynamic responsive revenue area charts, bar charts, and breakdown graphs |
| **Canvas Confetti** | Celebration visual burst on quiz passing and course completion |
| **Lucide React** | Modern SVG iconography with `IndianRupee`, `ShieldCheck`, `Film`, `Award` |

---

## 📁 Project Architecture & Clean Folder Structure

```text
Online Learning Management System/
├── public/                              # Static public assets
│   ├── favicon.svg                      # Animated application favicon
│   ├── icons.svg                        # SVG sprite assets
│   └── logo.svg                         # Adeptify official brand logo banner
├── index.html                           # Single Page Application HTML root
├── package.json                         # Project manifest & npm scripts
├── vite.config.ts                       # Vite bundler configuration
├── tailwind.config.js                   # Nordic Emerald theme tokens & darkMode config
├── tsconfig.json                        # Strict TypeScript compilation rules
├── src/
│   ├── App.tsx                          # App shell with frozen navbar & sidebar
│   ├── main.tsx                         # React 19 bootstrap with Redux Provider
│   ├── index.css                        # Global styles & custom scrollbars
│   │
│   ├── config/                          # Centralized app configuration & navigation
│   │   ├── constants.ts                 # Brand tokens, storage keys & currency
│   │   ├── navigation.ts                # Student, Instructor & Admin navigation items
│   │   └── index.ts                     # Config barrel export
│   │
│   ├── hooks/                           # Custom React domain hooks
│   │   ├── useAuth.ts                   # Role switching, auth state & session
│   │   ├── useTheme.ts                  # Dark/light theme state & document root sync
│   │   ├── useSidebar.ts                # Minimized & mobile drawer state
│   │   ├── useNotifications.ts          # Read status & notification triggers
│   │   └── index.ts                     # Hooks barrel export
│   │
│   ├── routes/                          # Declarative route configuration
│   │   ├── AppRoutes.tsx                # Centralized route tree with ProtectedRoute guards
│   │   └── index.ts                     # Routes barrel export
│   │
│   ├── components/                      # Modular UI components with barrel exports
│   │   ├── common/                      # Navbar, Sidebar, ProtectedRoute, ToastContainer, AdeptifyLogo
│   │   ├── course/                      # CourseCard, CourseFilters, ReviewSection
│   │   ├── learning/                    # VideoPlayer, CurriculumAccordion, Quizzes & Assignments
│   │   └── index.ts                     # Global components barrel export
│   │
│   ├── pages/                           # Application screens grouped by role
│   │   ├── Home.tsx                     # Landing page with hero & featured courses
│   │   ├── NotFound.tsx                 # 404 Error page
│   │   ├── auth/                        # Login.tsx, Register.tsx
│   │   ├── student/                     # StudentDashboard, CourseCatalog, LessonPlayer, etc.
│   │   ├── instructor/                  # InstructorDashboard, ManageCourses, EnrolledStudents, etc.
│   │   ├── admin/                       # AdminDashboard, AdminStudents, AdminInstructors, etc.
│   │   └── index.ts                     # Pages barrel export
│   │
│   ├── store/                           # Redux Toolkit store & slices
│   │   ├── index.ts                     # Store configuration
│   │   └── slices/                      # authSlice, courseSlice, learningSlice, uiSlice
│   │
│   ├── services/                        # Simulated API with localStorage versioned caching
│   ├── data/                            # 73 verified courses (coursesData.ts) & mock profiles
│   ├── types/                           # TypeScript interfaces & domain models
│   └── utils/                           # Animated canvas favicon & helper utilities
```

---

## 🚀 Quick Start Guide

### 1. Clone & Install
```bash
git clone https://github.com/Sushanth666/Adeptify-Online-Learning-Management-System.git
cd Adeptify-Online-Learning-Management-System
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 3. Production Build
```bash
npm run build
```

---

## 🔑 Demo Access Accounts

Try it live right now at **[adeptify-online-learning-management.vercel.app](https://adeptify-online-learning-management.vercel.app/)**!

Switch roles instantly from the top-right profile avatar menu or login using:

| Role | Demo Email | Location & Profile |
| :--- | :--- | :--- |
| **Student** | `aarav.sharma@adeptify.in` | Bengaluru, Karnataka • Full Stack Aspirant |
| **Instructor** | `priya.patel@adeptify.in` | Hyderabad, Telangana • Principal Cloud Architect, Ex-Amazon IDC |
| **Administrator** | `vikram.rao@adeptify.in` | New Delhi, NCR • Academic Dean & Operations Director |

---

<p align="center">
  <sub>Adeptify LMS • Designed and Engineered for Modern Technology Excellence</sub>
</p>
