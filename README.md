# Adeptify | Skill Acceleration for Engineers

> A modern, responsive, high-velocity Online Learning Management System designed for engineering excellence. Built with **React 19**, **TypeScript**, **Tailwind CSS**, **Redux Toolkit**, **React Router v7**, **Framer Motion**, and **Recharts**.

---

## 💎 Brand Identity & Visual Design
- **Platform Name**: **Adeptify**
- **Tagline**: *Skill Acceleration for Engineers*
- **Brand Emblem**: **Ascending Diamond Prism** (`AdeptifyLogo.tsx`) symbolizing upward career progression and technical mastery.
- **Color Palette**: **Nordic Emerald & Forest Green** (`#176238`, `#059669`, `#10b981`, `#ecfdf5`), delivering an enterprise-grade, focused developer aesthetic.
- **Dynamic Layout**: **Frozen Navbar & Sidebar Architecture** — The top navigation bar and side drawer remain pinned to screen edges while only the center content area scrolls smoothly.
- **Sidebar-Navbar Synchronization**: The navbar brand container matches the sidebar width (`w-64` expanded, `w-20` minimized) with an unbroken, pixel-perfect vertical dividing line (`border-r border-slate-200`).

---

## 🌟 Key Features & Dedicated Modules

### 1. Student Hub
- **1-Click Demo Login & Authentication**: Instant role switching between Student, Instructor, and Administrator.
- **Student Dashboard (`/dashboard`)**: Study metrics, weekly streak, active courses, certificate progress, and 1-click "Resume Lecture".
- **Course Catalog (`/courses`)**: Searchable index of 73+ industry-tailored courses with live search and multi-facet filters.
- **Course Details (`/courses/:id`)**: Comprehensive syllabus inspection, chapter breakdowns, verified student reviews, instructor bio, and instant enrollment.
- **Interactive Classroom Player (`/learning/:courseId`)**:
  - **Verified HD Playable Video Lectures**: Native responsive YouTube embed support with fallback CDN streams.
  - **Course Video Search & Related Lecture Finder**: Dedicated tab to search course lectures and curated deep dives by topic, channel, or keyword, with instant in-classroom playback.
  - **Interactive Curriculum Drawer**: Collapsible module sections with real-time progress checkmarks.
  - **Embedded Quizzes**: Modal quiz engine with multiple-choice questions, passing score validation, and confetti celebrations.
  - **Course Project Assignments**: Practical coding briefs and submission portals.
  - **Study Materials & Notebook**: Auto-saving timestamped lecture notes and downloadable cheat sheets.
- **My Learning (`/my-learning`)**: Course progress filter (All, In Progress, Completed).
- **Verifiable Certificates (`/certificates`)**: QR-verifiable diplomas with student name, instructor accreditation, and First-Class Distinction grades.
- **Wishlist (`/wishlist`)**: Save and bookmark target courses.
- **Developer Profile (`/profile`)**: Manage bio, technology stack tags, GitHub, LinkedIn, and portfolio links.

---

### 2. Instructor Studio (Protected: Instructor & Admin Access)
- **Instructor Dashboard (`/instructor`)**: Monthly revenue overview (**₹14,89,200**), active student reach (**88,400+**), and instructor rating.
- **Create New Course (`/instructor/create-course`)**: Multi-step course creator (Title, Pricing in ₹, Category, Level, Curriculum builder, video lecture embeds).
- **Manage Courses (`/instructor/manage-courses`)**: Full catalog manager with status filters (*Published*, *Under Review*, *Draft*), table/grid views, classroom preview, and deletion controls.
- **Enrolled Students Directory (`/instructor/students`)**: Learner roster displaying progress percentages, last active timestamp, certificate credentials, and an interactive **"Send Message / Feedback"** modal.
- **Course Performance & Analytics (`/instructor/analytics`)**: Monthly revenue area chart (₹ in Lakhs), rating distributions (5-star down to 1-star), drop-off telemetry, and course-by-course financial breakdown.

---

### 3. Administrator Control Center (Protected: Admin Only)
- **Admin Overview (`/admin`)**: Global operational health, gross revenue growth (+22.4%), total learner base (1,84,500), and course completion metrics.
- **Students Directory (`/admin/students`)**: Master learner roster across Indian IT hubs and universities, total spending (₹), password reset trigger, and **Suspend / Reactivate** security toggles.
- **Instructors & Faculty Directory (`/admin/instructors`)**: Faculty directory with verified accreditation badges, lifetime earnings, pending payout claims, and instant **"Approve Payout"** actions.
- **Course Catalog & QA Approvals (`/admin/courses`)**: Quality assurance governance: approve newly submitted courses, toggle **"Featured on Homepage"** promotions, and audit syllabus standards.
- **Revenue Analytics & Financial Ledger (`/admin/revenue`)**:
  - Gross platform volume (**₹84.59 Lakhs** YTD).
  - 85% faculty disbursals (**₹71.91 Lakhs**) vs. 15% net platform margin (**₹12.68 Lakhs**).
  - Indian payment gateway telemetry: **UPI (68%)**, Credit/Debit Cards (20%), Net Banking (9%).
  - Live transactions ledger with date/time, order ID, gateway, and financial audit CSV download.

---

### 4. Security & Role-Based Access Control (RBAC)
- **Protected Routes (`ProtectedRoute.tsx`)**: Enforces strict role checks before rendering `/instructor/*` or `/admin/*`.
- **Informative Access Guard**: When a student attempts to access restricted portals, an access-denied screen appears with an instant 1-click **"Switch to Role (Demo)"** button for smooth evaluation.
- **Toast Notifications (`ToastContainer.tsx`)**: Global feedback toasts featuring an exact **2-second auto-dismiss timer** and a smooth countdown progress bar.

---

## 🛠️ Technology Stack

| Technology | Role in Adeptify |
| :--- | :--- |
| **React 19 & Vite** | High-performance reactive UI and modern dev tooling |
| **TypeScript** | Strict type safety for courses, lectures, quizzes, and roles |
| **Tailwind CSS** | Nordic Emerald & Forest Green responsive design system |
| **Redux Toolkit** | Centralized state management for Auth, Courses, Learning, and UI |
| **React Router v7** | Client-side routing with `ProtectedRoute` guards and `end` matchers |
| **Framer Motion** | Floating drawers, micro-interactions, modal transitions, and toast timers |
| **Recharts** | Interactive revenue area charts, bar charts, and category pie charts |
| **Canvas Confetti** | Celebration burst upon quiz passing & graduation certificate issuance |
| **Lucide React** | Modern iconography including `IndianRupee`, `ShieldCheck`, `Film`, `Award` |

---

## 📁 Project Folder Structure

```text
Online Learning Management System/
├── index.html                           # HTML root & metadata
├── package.json                         # Dependencies & scripts
├── vite.config.ts                       # Vite bundler configuration
├── tailwind.config.js                   # Theme colors & design tokens
├── src/
│   ├── App.tsx                          # Lean layout shell with frozen navigation
│   ├── main.tsx                         # Entry point with Redux Provider & Router
│   ├── index.css                        # Global styling & custom scrollbars
│   │
│   ├── config/                          # Centralized app configuration & navigation
│   │   ├── constants.ts                 # Brand tokens, storage keys & currency
│   │   ├── navigation.ts                # Student, Instructor & Admin navigation items
│   │   └── index.ts                     # Config barrel export
│   │
│   ├── hooks/                           # Custom domain hooks
│   │   ├── useAuth.ts                   # Role switcher, auth state & logout
│   │   ├── useSidebar.ts                # Minimized & mobile drawer controls
│   │   ├── useNotifications.ts          # Read status & notification triggers
│   │   └── index.ts                     # Hooks barrel export
│   │
│   ├── routes/                          # Declarative route configuration
│   │   ├── AppRoutes.tsx                # Centralized route tree with ProtectedRoute guards
│   │   └── index.ts                     # Routes barrel export
│   │
│   ├── components/                      # Reusable components with clean barrel exports
│   │   ├── common/                      # Navbar, Sidebar, ProtectedRoute, ToastContainer, etc.
│   │   ├── course/                      # CourseCard, CourseFilters, ReviewSection
│   │   ├── learning/                    # VideoPlayer, CurriculumAccordion, Quizzes & Assignments
│   │   └── index.ts                     # Global components barrel export
│   │
│   ├── pages/                           # Application screens grouped by role
│   │   ├── Home.tsx                     # Landing page with hero & featured tracks
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
│   ├── data/                            # 73 courses (coursesData.ts) & mock profiles (mockData.ts)
│   ├── types/                           # TypeScript interfaces & domain types
│   └── utils/                           # Animated canvas favicon & utilities (with index.ts)
```

---

## 📁 Project Folder Structure

```text
Online Learning Management System/
├── index.html                           # HTML root & metadata
├── package.json                         # Dependencies & scripts
├── vite.config.ts                       # Vite bundler configuration
├── tailwind.config.js                   # Theme colors & design tokens
├── src/
│   ├── App.tsx                          # Lean layout shell with frozen navigation
│   ├── main.tsx                         # Entry point with Redux Provider & Router
│   ├── index.css                        # Global styling & custom scrollbars
│   │
│   ├── config/                          # Centralized app configuration & navigation
│   │   ├── constants.ts                 # Brand tokens, storage keys & currency
│   │   ├── navigation.ts                # Student, Instructor & Admin navigation items
│   │   └── index.ts                     # Config barrel export
│   │
│   ├── hooks/                           # Custom domain hooks
│   │   ├── useAuth.ts                   # Role switcher, auth state & logout
│   │   ├── useSidebar.ts                # Minimized & mobile drawer controls
│   │   ├── useNotifications.ts          # Read status & notification triggers
│   │   └── index.ts                     # Hooks barrel export
│   │
│   ├── routes/                          # Declarative route configuration
│   │   ├── AppRoutes.tsx                # Centralized route tree with ProtectedRoute guards
│   │   └── index.ts                     # Routes barrel export
│   │
│   ├── components/                      # Reusable components with clean barrel exports
│   │   ├── common/                      # Navbar, Sidebar, ProtectedRoute, ToastContainer, etc.
│   │   ├── course/                      # CourseCard, CourseFilters, ReviewSection
│   │   ├── learning/                    # VideoPlayer, CurriculumAccordion, Quizzes & Assignments
│   │   └── index.ts                     # Global components barrel export
│   │
│   ├── pages/                           # Application screens grouped by role
│   │   ├── Home.tsx                     # Landing page with hero & featured tracks
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
│   ├── data/                            # 73 courses (coursesData.ts) & mock profiles (mockData.ts)
│   ├── types/                           # TypeScript interfaces & domain types
│   └── utils/                           # Animated canvas favicon & utilities (with index.ts)
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📚 Course Dataset (73 Verified Courses in ₹ INR)

| Category | Courses | Highlights |
| :--- | :---: | :--- |
| **Development** | **24** | React 19, Next.js 15, Spring Boot 3, MERN Swiggy Clone, Go, Rust, Flutter, iOS Swift 6, Microservices |
| **Design** | **12** | CRED Aesthetic UI/UX, Figma Design Systems & Tokens, Motion Design, 3D Spline, Bharat Demographics UX |
| **Cloud & DevOps** | **8** | AWS Certified Solutions Architect, Docker & Kubernetes Production, Terraform Multi-Cloud, CI/CD Actions |
| **Data Science & AI** | **14** | Generative AI & LangChain, PyTorch Deep Learning, Spark & Kafka Pipelines, Vector DBs, Llama 3 Fine-Tuning |
| **Cybersecurity** | **6** | CERT-In Compliant Cyber Defense, Web App Penetration Testing (OWASP), Network Wireshark, Zero Trust |
| **Business & Management** | **9** | Tech PM (₹100 Cr ARR), Agile & Jira, Indian FinTech & UPI Banking Architecture, SaaS Growth Hacking |
| **Total** | **73** | Complete with video lectures, verifiable certificates, quizzes, and downloadable blueprints |

---

## 🔑 Demo Access Accounts
Switch roles instantly via the avatar menu in the top navigation bar or log in with 1-click credentials:
- **Student**: `aarav.sharma@adeptify.in` (Bengaluru, Karnataka • Full Stack Aspirant)
- **Instructor**: `priya.patel@adeptify.in` (Hyderabad, Telangana • Principal Cloud Architect, Ex-Amazon IDC)
- **Admin**: `vikram.rao@adeptify.in` (New Delhi, NCR • Academic Dean & Operations Director)
