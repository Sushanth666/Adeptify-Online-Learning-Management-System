import { Course } from '../types';

export const allMockCourses: Course[] = [
  {
    "id": "course-1",
    "title": "React 19 & Next.js 15: Production SaaS & Server Actions",
    "slug": "react-19-next-js-15-production-saas-server-actions",
    "subtitle": "Build full-stack reactive applications with App Router, Turbopack, and Tailwind CSS",
    "description": "Build full-stack reactive applications with App Router, Turbopack, and Tailwind CSS. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/wm5gMKuwSYk?enablejsapi=1&rel=0",
    "price": 2999,
    "originalPrice": 8999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 320,
    "totalStudents": 1200,
    "durationHours": 38,
    "totalLessons": 83,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-1-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-1-les-1",
            "chapterId": "course-1-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/wm5gMKuwSYk?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-1-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-1-les-2",
            "chapterId": "course-1-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/SqcY0GlETPk?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-1-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-1-les-3",
            "chapterId": "course-1-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/843nec-IvW0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-1-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-1-les-4",
            "chapterId": "course-1-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/ZVnjOPwW4ZA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-1-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-1-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-1-les-5",
            "chapterId": "course-1-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/wm5gMKuwSYk?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-1-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-1-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ],
    "whatYouWillLearn": [
      "Master industry-grade React architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "wm5gMKuwSYk",
        "title": "Next.js 14 Full Course: App Router, Server Actions & Auth",
        "channel": "JavaScript Mastery",
        "duration": "4h 12m",
        "embedUrl": "https://www.youtube.com/embed/wm5gMKuwSYk?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/wm5gMKuwSYk/hqdefault.jpg"
      },
      {
        "id": "SqcY0GlETPk",
        "title": "React 18 & Next.js Full Stack Architecture",
        "channel": "Codevolution",
        "duration": "2h 45m",
        "embedUrl": "https://www.youtube.com/embed/SqcY0GlETPk?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/SqcY0GlETPk/hqdefault.jpg"
      },
      {
        "id": "843nec-IvW0",
        "title": "Building Full Stack Apps with Next.js & Tailwind CSS",
        "channel": "Traversy Media",
        "duration": "1h 35m",
        "embedUrl": "https://www.youtube.com/embed/843nec-IvW0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/843nec-IvW0/hqdefault.jpg"
      },
      {
        "id": "ZVnjOPwW4ZA",
        "title": "Next.js Server Actions & Production Deployment",
        "channel": "Fireship",
        "duration": "45m",
        "embedUrl": "https://www.youtube.com/embed/ZVnjOPwW4ZA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/ZVnjOPwW4ZA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-2",
    "title": "Spring Boot 3 Microservices & UPI Payment Architecture",
    "slug": "spring-boot-3-microservices-upi-payment-architecture",
    "subtitle": "High-throughput event-driven microservices engineered for Indian FinTech volume",
    "description": "High-throughput event-driven microservices engineered for Indian FinTech volume. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?enablejsapi=1&rel=0",
    "price": 3499,
    "originalPrice": 9999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 405,
    "totalStudents": 1580,
    "durationHours": 46,
    "totalLessons": 101,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-deve-2-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-2-les-1",
            "chapterId": "course-deve-2-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-2-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-2-les-2",
            "chapterId": "course-deve-2-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/xpDnVSmDvn0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-2-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-2-les-3",
            "chapterId": "course-deve-2-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/bUHFg8CZFws?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-2-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-2-les-4",
            "chapterId": "course-deve-2-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/i53Gi_K3o7I?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-2-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-2-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-2-les-5",
            "chapterId": "course-deve-2-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-2-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-2-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Java",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "UPI"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Java architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "m8Icp_Cid5o",
        "title": "System Design Primer: Scalable High-Availability Systems",
        "channel": "Gaurav Sen",
        "duration": "4h 30m",
        "embedUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/m8Icp_Cid5o/hqdefault.jpg"
      },
      {
        "id": "xpDnVSmDvn0",
        "title": "Designing Distributed Caching & Message Queues",
        "channel": "ByteByteGo",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/xpDnVSmDvn0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/xpDnVSmDvn0/hqdefault.jpg"
      },
      {
        "id": "bUHFg8CZFws",
        "title": "Designing Large Scale Real-Time Systems (IRCTC / Uber)",
        "channel": "Sudarshan Seshadri",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/bUHFg8CZFws?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bUHFg8CZFws/hqdefault.jpg"
      },
      {
        "id": "i53Gi_K3o7I",
        "title": "Database Sharding, Replication & CAP Theorem",
        "channel": "Arpit Bhayani",
        "duration": "2h 00m",
        "embedUrl": "https://www.youtube.com/embed/i53Gi_K3o7I?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/i53Gi_K3o7I/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-3",
    "title": "Full Stack MERN: Swiggy/Zomato Clone with Live Geolocation",
    "slug": "full-stack-mern-swiggy-zomato-clone-with-live-geolocation",
    "subtitle": "Build an end-to-end food delivery app with live driver tracking and WebSockets",
    "description": "Build an end-to-end food delivery app with live driver tracking and WebSockets. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 2499,
    "originalPrice": 6999,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 490,
    "totalStudents": 1960,
    "durationHours": 42,
    "totalLessons": 92,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-deve-3-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-3-les-1",
            "chapterId": "course-deve-3-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-3-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-3-les-2",
            "chapterId": "course-deve-3-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-3-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-3-les-3",
            "chapterId": "course-deve-3-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-3-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-3-les-4",
            "chapterId": "course-deve-3-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-3-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-3-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-3-les-5",
            "chapterId": "course-deve-3-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-3-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-3-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Socket.io"
    ],
    "whatYouWillLearn": [
      "Master industry-grade MongoDB architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-4",
    "title": "Data Structures & Algorithms Mastery in Java (MAANG Special)",
    "slug": "data-structures-algorithms-mastery-in-java-maang-special",
    "subtitle": "Master dynamic programming, graphs, trees, and concurrency for top tech company rounds",
    "description": "Master dynamic programming, graphs, trees, and concurrency for top tech company rounds. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?enablejsapi=1&rel=0",
    "price": 3999,
    "originalPrice": 11999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 575,
    "totalStudents": 2340,
    "durationHours": 58,
    "totalLessons": 127,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_4",
      "name": "Ananya Sengupta",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      "title": "Staff AI Research Scientist & ML Lead",
      "rating": 4.92,
      "studentsCount": 42100,
      "coursesCount": 7,
      "bio": "AI researcher and author with expertise in LLM fine-tuning, Transformers, and scalable PyTorch models."
    },
    "chapters": [
      {
        "id": "course-deve-4-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-4-les-1",
            "chapterId": "course-deve-4-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-4-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-4-les-2",
            "chapterId": "course-deve-4-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/yyUHQIec83I?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-4-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-4-les-3",
            "chapterId": "course-deve-4-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/pwZfZzUSpG4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-4-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-4-les-4",
            "chapterId": "course-deve-4-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/446E-r0rXHI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-4-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-4-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-4-les-5",
            "chapterId": "course-deve-4-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-4-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-4-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Java",
      "DSA",
      "Algorithms",
      "MAANG Prep"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Java architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "un6ZyFkqFJU",
        "title": "Go Programming Language Tutorial for Beginners",
        "channel": "freeCodeCamp",
        "duration": "6h 40m",
        "embedUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/un6ZyFkqFJU/hqdefault.jpg"
      },
      {
        "id": "yyUHQIec83I",
        "title": "Building High-Concurrency Microservices in Go",
        "channel": "Anthony GG",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/yyUHQIec83I?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/yyUHQIec83I/hqdefault.jpg"
      },
      {
        "id": "pwZfZzUSpG4",
        "title": "Goroutines, Channels & Production Networking in Go",
        "channel": "Dreams of Code",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/pwZfZzUSpG4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/pwZfZzUSpG4/hqdefault.jpg"
      },
      {
        "id": "446E-r0rXHI",
        "title": "Golang RESTful APIs with Gin & PostgreSQL",
        "channel": "Tech School",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/446E-r0rXHI?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/446E-r0rXHI/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-5",
    "title": "Modern TypeScript & Design Patterns for Scalable Systems",
    "slug": "modern-typescript-design-patterns-for-scalable-systems",
    "subtitle": "Master advanced types, decorators, generics, and Clean Architecture patterns",
    "description": "Master advanced types, decorators, generics, and Clean Architecture patterns. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/30LWjhZzg50?enablejsapi=1&rel=0",
    "price": 1999,
    "originalPrice": 5999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 660,
    "totalStudents": 2720,
    "durationHours": 28,
    "totalLessons": 61,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_5",
      "name": "Rahul Nair",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "title": "VP of Product & Ex-Flipkart Director",
      "rating": 4.85,
      "studentsCount": 22400,
      "coursesCount": 5,
      "bio": "12+ years scaling consumer tech products from zero to 10M+ daily active users across India."
    },
    "chapters": [
      {
        "id": "course-deve-5-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-5-les-1",
            "chapterId": "course-deve-5-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/30LWjhZzg50?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-5-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-5-les-2",
            "chapterId": "course-deve-5-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/BCg4U1FzODs?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-5-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-5-les-3",
            "chapterId": "course-deve-5-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/gieEQFIfgYc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-5-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-5-les-4",
            "chapterId": "course-deve-5-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/spJ_bo4jK9k?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-5-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-5-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-5-les-5",
            "chapterId": "course-deve-5-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/30LWjhZzg50?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-5-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-5-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "TypeScript",
      "Design Patterns",
      "Clean Code"
    ],
    "whatYouWillLearn": [
      "Master industry-grade TypeScript architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "30LWjhZzg50",
        "title": "TypeScript Full Course for Beginners",
        "channel": "freeCodeCamp",
        "duration": "2h 40m",
        "embedUrl": "https://www.youtube.com/embed/30LWjhZzg50?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/30LWjhZzg50/hqdefault.jpg"
      },
      {
        "id": "BCg4U1FzODs",
        "title": "TypeScript Generics, Decorators & Clean Code",
        "channel": "Fireship",
        "duration": "1h 15m",
        "embedUrl": "https://www.youtube.com/embed/BCg4U1FzODs?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/BCg4U1FzODs/hqdefault.jpg"
      },
      {
        "id": "gieEQFIfgYc",
        "title": "Advanced TypeScript Patterns for Large Codebases",
        "channel": "Matt Pocock",
        "duration": "1h 45m",
        "embedUrl": "https://www.youtube.com/embed/gieEQFIfgYc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/gieEQFIfgYc/hqdefault.jpg"
      },
      {
        "id": "spJ_bo4jK9k",
        "title": "Full Stack TypeScript & Node Architecture",
        "channel": "Dave Gray",
        "duration": "2h 05m",
        "embedUrl": "https://www.youtube.com/embed/spJ_bo4jK9k?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/spJ_bo4jK9k/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-6",
    "title": "System Design for High Concurrency (100k+ TPS Architecture)",
    "slug": "system-design-for-high-concurrency-100k-tps-architecture",
    "subtitle": "Design distributed systems like Flipkart Big Billion Day & IRCTC ticketing",
    "description": "Design distributed systems like Flipkart Big Billion Day & IRCTC ticketing. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?enablejsapi=1&rel=0",
    "price": 4499,
    "originalPrice": 12999,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 745,
    "totalStudents": 3100,
    "durationHours": 36,
    "totalLessons": 79,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_6",
      "name": "Sneha Reddy",
      "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
      "title": "DevOps & Site Reliability Lead",
      "rating": 4.91,
      "studentsCount": 31000,
      "coursesCount": 6,
      "bio": "Kubernetes contributor and multi-cloud infrastructure architect for high-throughput FinTech pipelines."
    },
    "chapters": [
      {
        "id": "course-deve-6-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-6-les-1",
            "chapterId": "course-deve-6-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-6-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-6-les-2",
            "chapterId": "course-deve-6-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/xpDnVSmDvn0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-6-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-6-les-3",
            "chapterId": "course-deve-6-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/bUHFg8CZFws?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-6-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-6-les-4",
            "chapterId": "course-deve-6-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/i53Gi_K3o7I?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-6-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-6-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-6-les-5",
            "chapterId": "course-deve-6-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-6-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-6-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "System Design",
      "Scalability",
      "Redis",
      "Kafka"
    ],
    "whatYouWillLearn": [
      "Master industry-grade System Design architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "m8Icp_Cid5o",
        "title": "System Design Primer: Scalable High-Availability Systems",
        "channel": "Gaurav Sen",
        "duration": "4h 30m",
        "embedUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/m8Icp_Cid5o/hqdefault.jpg"
      },
      {
        "id": "xpDnVSmDvn0",
        "title": "Designing Distributed Caching & Message Queues",
        "channel": "ByteByteGo",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/xpDnVSmDvn0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/xpDnVSmDvn0/hqdefault.jpg"
      },
      {
        "id": "bUHFg8CZFws",
        "title": "Designing Large Scale Real-Time Systems (IRCTC / Uber)",
        "channel": "Sudarshan Seshadri",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/bUHFg8CZFws?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bUHFg8CZFws/hqdefault.jpg"
      },
      {
        "id": "i53Gi_K3o7I",
        "title": "Database Sharding, Replication & CAP Theorem",
        "channel": "Arpit Bhayani",
        "duration": "2h 00m",
        "embedUrl": "https://www.youtube.com/embed/i53Gi_K3o7I?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/i53Gi_K3o7I/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-7",
    "title": "Flutter & Dart: Production Mobile Apps for iOS & Android",
    "slug": "flutter-dart-production-mobile-apps-for-ios-android",
    "subtitle": "Craft native performance cross-platform applications with Bloc and Riverpod state management",
    "description": "Craft native performance cross-platform applications with Bloc and Riverpod state management. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "All Levels",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/VPvVD8t02U8?enablejsapi=1&rel=0",
    "price": 2799,
    "originalPrice": 7999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 830,
    "totalStudents": 3480,
    "durationHours": 35,
    "totalLessons": 77,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-deve-7-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-7-les-1",
            "chapterId": "course-deve-7-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/VPvVD8t02U8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-7-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-7-les-2",
            "chapterId": "course-deve-7-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/pTJJsmejUOQ?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-7-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-7-les-3",
            "chapterId": "course-deve-7-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/CD1Y2DmL5JM?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-7-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-7-les-4",
            "chapterId": "course-deve-7-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/GLSG_Wh_YWc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-7-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-7-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-7-les-5",
            "chapterId": "course-deve-7-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/VPvVD8t02U8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-7-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-7-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Flutter",
      "Dart",
      "Mobile",
      "Cross-Platform"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Flutter architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "VPvVD8t02U8",
        "title": "Flutter Course for Beginners - Clean UI & State",
        "channel": "freeCodeCamp",
        "duration": "7h 15m",
        "embedUrl": "https://www.youtube.com/embed/VPvVD8t02U8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/VPvVD8t02U8/hqdefault.jpg"
      },
      {
        "id": "pTJJsmejUOQ",
        "title": "Flutter & Dart State Management with Bloc & Riverpod",
        "channel": "Vandad Nahavandipoor",
        "duration": "3h 20m",
        "embedUrl": "https://www.youtube.com/embed/pTJJsmejUOQ?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/pTJJsmejUOQ/hqdefault.jpg"
      },
      {
        "id": "CD1Y2DmL5JM",
        "title": "Building Food Delivery UI in Flutter",
        "channel": "The Flutter Way",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/CD1Y2DmL5JM?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/CD1Y2DmL5JM/hqdefault.jpg"
      },
      {
        "id": "GLSG_Wh_YWc",
        "title": "Flutter Animations & Performance Optimization",
        "channel": "Flutter Official",
        "duration": "1h 15m",
        "embedUrl": "https://www.youtube.com/embed/GLSG_Wh_YWc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/GLSG_Wh_YWc/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-8",
    "title": "Golang Backend Engineering & High-Performance Concurrency",
    "slug": "golang-backend-engineering-high-performance-concurrency",
    "subtitle": "Build lightning-fast microservices with Goroutines, Channels, and Gin Framework",
    "description": "Build lightning-fast microservices with Goroutines, Channels, and Gin Framework. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?enablejsapi=1&rel=0",
    "price": 3199,
    "originalPrice": 8499,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 915,
    "totalStudents": 3860,
    "durationHours": 32,
    "totalLessons": 70,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-deve-8-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-8-les-1",
            "chapterId": "course-deve-8-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-8-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-8-les-2",
            "chapterId": "course-deve-8-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/yyUHQIec83I?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-8-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-8-les-3",
            "chapterId": "course-deve-8-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/pwZfZzUSpG4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-8-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-8-les-4",
            "chapterId": "course-deve-8-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/446E-r0rXHI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-8-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-8-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-8-les-5",
            "chapterId": "course-deve-8-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-8-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-8-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Go",
      "Golang",
      "Concurrency",
      "Microservices"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Go architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "un6ZyFkqFJU",
        "title": "Go Programming Language Tutorial for Beginners",
        "channel": "freeCodeCamp",
        "duration": "6h 40m",
        "embedUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/un6ZyFkqFJU/hqdefault.jpg"
      },
      {
        "id": "yyUHQIec83I",
        "title": "Building High-Concurrency Microservices in Go",
        "channel": "Anthony GG",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/yyUHQIec83I?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/yyUHQIec83I/hqdefault.jpg"
      },
      {
        "id": "pwZfZzUSpG4",
        "title": "Goroutines, Channels & Production Networking in Go",
        "channel": "Dreams of Code",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/pwZfZzUSpG4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/pwZfZzUSpG4/hqdefault.jpg"
      },
      {
        "id": "446E-r0rXHI",
        "title": "Golang RESTful APIs with Gin & PostgreSQL",
        "channel": "Tech School",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/446E-r0rXHI?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/446E-r0rXHI/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-9",
    "title": "Python Django 5 & Celery: Enterprise Backend Development",
    "slug": "python-django-5-celery-enterprise-backend-development",
    "subtitle": "Build asynchronous job queues, RESTful APIs, and robust ORM models",
    "description": "Build asynchronous job queues, RESTful APIs, and robust ORM models. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?enablejsapi=1&rel=0",
    "price": 2299,
    "originalPrice": 6499,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 1000,
    "totalStudents": 4240,
    "durationHours": 30,
    "totalLessons": 66,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-deve-9-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-9-les-1",
            "chapterId": "course-deve-9-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-9-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-9-les-2",
            "chapterId": "course-deve-9-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/yyUHQIec83I?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-9-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-9-les-3",
            "chapterId": "course-deve-9-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/pwZfZzUSpG4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-9-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-9-les-4",
            "chapterId": "course-deve-9-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/446E-r0rXHI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-9-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-9-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-9-les-5",
            "chapterId": "course-deve-9-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-9-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-9-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Python",
      "Django",
      "Celery",
      "Redis"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Python architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "un6ZyFkqFJU",
        "title": "Go Programming Language Tutorial for Beginners",
        "channel": "freeCodeCamp",
        "duration": "6h 40m",
        "embedUrl": "https://www.youtube.com/embed/un6ZyFkqFJU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/un6ZyFkqFJU/hqdefault.jpg"
      },
      {
        "id": "yyUHQIec83I",
        "title": "Building High-Concurrency Microservices in Go",
        "channel": "Anthony GG",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/yyUHQIec83I?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/yyUHQIec83I/hqdefault.jpg"
      },
      {
        "id": "pwZfZzUSpG4",
        "title": "Goroutines, Channels & Production Networking in Go",
        "channel": "Dreams of Code",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/pwZfZzUSpG4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/pwZfZzUSpG4/hqdefault.jpg"
      },
      {
        "id": "446E-r0rXHI",
        "title": "Golang RESTful APIs with Gin & PostgreSQL",
        "channel": "Tech School",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/446E-r0rXHI?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/446E-r0rXHI/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-10",
    "title": "Native Android with Jetpack Compose & Kotlin Multiplatform",
    "slug": "native-android-with-jetpack-compose-kotlin-multiplatform",
    "subtitle": "Modern declarative Android development with Room, Coroutines, and MVVM",
    "description": "Modern declarative Android development with Room, Coroutines, and MVVM. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 3299,
    "originalPrice": 8999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 1085,
    "totalStudents": 4620,
    "durationHours": 40,
    "totalLessons": 88,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_4",
      "name": "Ananya Sengupta",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      "title": "Staff AI Research Scientist & ML Lead",
      "rating": 4.92,
      "studentsCount": 42100,
      "coursesCount": 7,
      "bio": "AI researcher and author with expertise in LLM fine-tuning, Transformers, and scalable PyTorch models."
    },
    "chapters": [
      {
        "id": "course-deve-10-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-10-les-1",
            "chapterId": "course-deve-10-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-10-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-10-les-2",
            "chapterId": "course-deve-10-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-10-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-10-les-3",
            "chapterId": "course-deve-10-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-10-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-10-les-4",
            "chapterId": "course-deve-10-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-10-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-10-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-10-les-5",
            "chapterId": "course-deve-10-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-10-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-10-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "Mobile"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Android architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-11",
    "title": "iOS 18 App Development with Swift 6 & SwiftUI",
    "slug": "ios-18-app-development-with-swift-6-swiftui",
    "subtitle": "Build stunning iOS experiences with Swift Concurrency, CoreData, and WidgetKit",
    "description": "Build stunning iOS experiences with Swift Concurrency, CoreData, and WidgetKit. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 3799,
    "originalPrice": 9999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 1170,
    "totalStudents": 5000,
    "durationHours": 38,
    "totalLessons": 83,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_5",
      "name": "Rahul Nair",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "title": "VP of Product & Ex-Flipkart Director",
      "rating": 4.85,
      "studentsCount": 22400,
      "coursesCount": 5,
      "bio": "12+ years scaling consumer tech products from zero to 10M+ daily active users across India."
    },
    "chapters": [
      {
        "id": "course-deve-11-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-11-les-1",
            "chapterId": "course-deve-11-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-11-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-11-les-2",
            "chapterId": "course-deve-11-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-11-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-11-les-3",
            "chapterId": "course-deve-11-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-11-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-11-les-4",
            "chapterId": "course-deve-11-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-11-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-11-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-11-les-5",
            "chapterId": "course-deve-11-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-11-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-11-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "iOS",
      "Swift",
      "SwiftUI",
      "Apple"
    ],
    "whatYouWillLearn": [
      "Master industry-grade iOS architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-12",
    "title": "Rust Systems Programming & Memory Safety for Modern Backends",
    "slug": "rust-systems-programming-memory-safety-for-modern-backends",
    "subtitle": "Master ownership, borrowing, lifetime rules, and async Tokio runtime",
    "description": "Master ownership, borrowing, lifetime rules, and async Tokio runtime. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/ygL_xcgkMzQ?enablejsapi=1&rel=0",
    "price": 3499,
    "originalPrice": 9499,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 1255,
    "totalStudents": 5380,
    "durationHours": 44,
    "totalLessons": 96,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_6",
      "name": "Sneha Reddy",
      "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
      "title": "DevOps & Site Reliability Lead",
      "rating": 4.91,
      "studentsCount": 31000,
      "coursesCount": 6,
      "bio": "Kubernetes contributor and multi-cloud infrastructure architect for high-throughput FinTech pipelines."
    },
    "chapters": [
      {
        "id": "course-deve-12-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-12-les-1",
            "chapterId": "course-deve-12-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/ygL_xcgkMzQ?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-12-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-12-les-2",
            "chapterId": "course-deve-12-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/oxx7MmN4IbA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-12-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-12-les-3",
            "chapterId": "course-deve-12-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/msLmtYcR8_g?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-12-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-12-les-4",
            "chapterId": "course-deve-12-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/2hXNk_sacQA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-12-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-12-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-12-les-5",
            "chapterId": "course-deve-12-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/ygL_xcgkMzQ?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-12-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-12-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Rust",
      "Systems Programming",
      "Tokio",
      "WebAssembly"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Rust architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "ygL_xcgkMzQ",
        "title": "Rust Programming Full Course",
        "channel": "freeCodeCamp",
        "duration": "5h 45m",
        "embedUrl": "https://www.youtube.com/embed/ygL_xcgkMzQ?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/ygL_xcgkMzQ/hqdefault.jpg"
      },
      {
        "id": "oxx7MmN4IbA",
        "title": "Rust Ownership, Borrowing & Lifetimes Demystified",
        "channel": "No Boilerplate",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/oxx7MmN4IbA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/oxx7MmN4IbA/hqdefault.jpg"
      },
      {
        "id": "msLmtYcR8_g",
        "title": "Building Async Web Services with Actix & Tokio",
        "channel": "Let's Get Rusty",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/msLmtYcR8_g?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/msLmtYcR8_g/hqdefault.jpg"
      },
      {
        "id": "2hXNk_sacQA",
        "title": "High Performance Systems Programming in Rust",
        "channel": "The Primeagen",
        "duration": "1h 40m",
        "embedUrl": "https://www.youtube.com/embed/2hXNk_sacQA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2hXNk_sacQA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-13",
    "title": "GraphQL & Apollo Federation: Distributed Microservices API",
    "slug": "graphql-apollo-federation-distributed-microservices-api",
    "subtitle": "Unify hundreds of backend services into one scalable schema with subgraph gateways",
    "description": "Unify hundreds of backend services into one scalable schema with subgraph gateways. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?enablejsapi=1&rel=0",
    "price": 2499,
    "originalPrice": 6999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 1340,
    "totalStudents": 5760,
    "durationHours": 24,
    "totalLessons": 52,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-deve-13-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-13-les-1",
            "chapterId": "course-deve-13-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-13-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-13-les-2",
            "chapterId": "course-deve-13-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/xpDnVSmDvn0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-13-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-13-les-3",
            "chapterId": "course-deve-13-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/bUHFg8CZFws?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-13-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-13-les-4",
            "chapterId": "course-deve-13-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/i53Gi_K3o7I?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-13-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-13-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-13-les-5",
            "chapterId": "course-deve-13-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-13-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-13-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "GraphQL",
      "Apollo",
      "Node.js",
      "APIs"
    ],
    "whatYouWillLearn": [
      "Master industry-grade GraphQL architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "m8Icp_Cid5o",
        "title": "System Design Primer: Scalable High-Availability Systems",
        "channel": "Gaurav Sen",
        "duration": "4h 30m",
        "embedUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/m8Icp_Cid5o/hqdefault.jpg"
      },
      {
        "id": "xpDnVSmDvn0",
        "title": "Designing Distributed Caching & Message Queues",
        "channel": "ByteByteGo",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/xpDnVSmDvn0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/xpDnVSmDvn0/hqdefault.jpg"
      },
      {
        "id": "bUHFg8CZFws",
        "title": "Designing Large Scale Real-Time Systems (IRCTC / Uber)",
        "channel": "Sudarshan Seshadri",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/bUHFg8CZFws?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bUHFg8CZFws/hqdefault.jpg"
      },
      {
        "id": "i53Gi_K3o7I",
        "title": "Database Sharding, Replication & CAP Theorem",
        "channel": "Arpit Bhayani",
        "duration": "2h 00m",
        "embedUrl": "https://www.youtube.com/embed/i53Gi_K3o7I?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/i53Gi_K3o7I/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-14",
    "title": "Angular 18 Enterprise Architecture & Signals State Management",
    "slug": "angular-18-enterprise-architecture-signals-state-management",
    "subtitle": "Master standalone components, Zoneless change detection, and RxJS pipelines",
    "description": "Master standalone components, Zoneless change detection, and RxJS pipelines. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 2999,
    "originalPrice": 7999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 1425,
    "totalStudents": 6140,
    "durationHours": 36,
    "totalLessons": 79,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-deve-14-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-14-les-1",
            "chapterId": "course-deve-14-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-14-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-14-les-2",
            "chapterId": "course-deve-14-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-14-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-14-les-3",
            "chapterId": "course-deve-14-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-14-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-14-les-4",
            "chapterId": "course-deve-14-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-14-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-14-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-14-les-5",
            "chapterId": "course-deve-14-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-14-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-14-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Angular",
      "TypeScript",
      "RxJS",
      "Enterprise"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Angular architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-15",
    "title": "Low-Level Design (LLD) & Clean Code for Technical Interviews",
    "slug": "low-level-design-lld-clean-code-for-technical-interviews",
    "subtitle": "Object-oriented design principles, SOLID, UML, and real-world system modeling",
    "description": "Object-oriented design principles, SOLID, UML, and real-world system modeling. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 2199,
    "originalPrice": 5999,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 1510,
    "totalStudents": 6520,
    "durationHours": 26,
    "totalLessons": 57,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-deve-15-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-15-les-1",
            "chapterId": "course-deve-15-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-15-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-15-les-2",
            "chapterId": "course-deve-15-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-15-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-15-les-3",
            "chapterId": "course-deve-15-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-15-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-15-les-4",
            "chapterId": "course-deve-15-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-15-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-15-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-15-les-5",
            "chapterId": "course-deve-15-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-15-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-15-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "LLD",
      "Design Patterns",
      "OOP",
      "Interview Prep"
    ],
    "whatYouWillLearn": [
      "Master industry-grade LLD architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-16",
    "title": "Node.js Fastify & NestJS: Enterprise Microservices",
    "slug": "node-js-fastify-nestjs-enterprise-microservices",
    "subtitle": "Build modular enterprise-grade architectures with Dependency Injection and TypeScript",
    "description": "Build modular enterprise-grade architectures with Dependency Injection and TypeScript. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?enablejsapi=1&rel=0",
    "price": 2699,
    "originalPrice": 7499,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 1595,
    "totalStudents": 6900,
    "durationHours": 33,
    "totalLessons": 72,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_4",
      "name": "Ananya Sengupta",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      "title": "Staff AI Research Scientist & ML Lead",
      "rating": 4.92,
      "studentsCount": 42100,
      "coursesCount": 7,
      "bio": "AI researcher and author with expertise in LLM fine-tuning, Transformers, and scalable PyTorch models."
    },
    "chapters": [
      {
        "id": "course-deve-16-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-16-les-1",
            "chapterId": "course-deve-16-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-16-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-16-les-2",
            "chapterId": "course-deve-16-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/xpDnVSmDvn0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-16-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-16-les-3",
            "chapterId": "course-deve-16-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/bUHFg8CZFws?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-16-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-16-les-4",
            "chapterId": "course-deve-16-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/i53Gi_K3o7I?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-16-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-16-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-16-les-5",
            "chapterId": "course-deve-16-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-16-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-16-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Node.js",
      "NestJS",
      "Fastify",
      "Microservices"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Node.js architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "m8Icp_Cid5o",
        "title": "System Design Primer: Scalable High-Availability Systems",
        "channel": "Gaurav Sen",
        "duration": "4h 30m",
        "embedUrl": "https://www.youtube.com/embed/m8Icp_Cid5o?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/m8Icp_Cid5o/hqdefault.jpg"
      },
      {
        "id": "xpDnVSmDvn0",
        "title": "Designing Distributed Caching & Message Queues",
        "channel": "ByteByteGo",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/xpDnVSmDvn0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/xpDnVSmDvn0/hqdefault.jpg"
      },
      {
        "id": "bUHFg8CZFws",
        "title": "Designing Large Scale Real-Time Systems (IRCTC / Uber)",
        "channel": "Sudarshan Seshadri",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/bUHFg8CZFws?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bUHFg8CZFws/hqdefault.jpg"
      },
      {
        "id": "i53Gi_K3o7I",
        "title": "Database Sharding, Replication & CAP Theorem",
        "channel": "Arpit Bhayani",
        "duration": "2h 00m",
        "embedUrl": "https://www.youtube.com/embed/i53Gi_K3o7I?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/i53Gi_K3o7I/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-17",
    "title": "Vue 3 & Nuxt 3: Composition API & Full-Stack SSR Apps",
    "slug": "vue-3-nuxt-3-composition-api-full-stack-ssr-apps",
    "subtitle": "Build server-rendered Vue apps with Pinia, Nitro server engine, and Tailwind",
    "description": "Build server-rendered Vue apps with Pinia, Nitro server engine, and Tailwind. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "All Levels",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 2399,
    "originalPrice": 6499,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 1680,
    "totalStudents": 7280,
    "durationHours": 27,
    "totalLessons": 59,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_5",
      "name": "Rahul Nair",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "title": "VP of Product & Ex-Flipkart Director",
      "rating": 4.85,
      "studentsCount": 22400,
      "coursesCount": 5,
      "bio": "12+ years scaling consumer tech products from zero to 10M+ daily active users across India."
    },
    "chapters": [
      {
        "id": "course-deve-17-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-17-les-1",
            "chapterId": "course-deve-17-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-17-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-17-les-2",
            "chapterId": "course-deve-17-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-17-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-17-les-3",
            "chapterId": "course-deve-17-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-17-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-17-les-4",
            "chapterId": "course-deve-17-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-17-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-17-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-17-les-5",
            "chapterId": "course-deve-17-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-17-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-17-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Vue.js",
      "Nuxt",
      "JavaScript",
      "Frontend"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Vue.js architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-18",
    "title": "Web Performance Optimization & Core Web Vitals Mastery",
    "slug": "web-performance-optimization-core-web-vitals-mastery",
    "subtitle": "Optimize LCP, FID, CLS, lazy loading, image CDNs, and critical CSS rendering",
    "description": "Optimize LCP, FID, CLS, lazy loading, image CDNs, and critical CSS rendering. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 1899,
    "originalPrice": 4999,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 1765,
    "totalStudents": 7660,
    "durationHours": 20,
    "totalLessons": 44,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_6",
      "name": "Sneha Reddy",
      "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
      "title": "DevOps & Site Reliability Lead",
      "rating": 4.91,
      "studentsCount": 31000,
      "coursesCount": 6,
      "bio": "Kubernetes contributor and multi-cloud infrastructure architect for high-throughput FinTech pipelines."
    },
    "chapters": [
      {
        "id": "course-deve-18-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-18-les-1",
            "chapterId": "course-deve-18-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-18-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-18-les-2",
            "chapterId": "course-deve-18-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-18-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-18-les-3",
            "chapterId": "course-deve-18-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-18-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-18-les-4",
            "chapterId": "course-deve-18-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-18-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-18-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-18-les-5",
            "chapterId": "course-deve-18-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-18-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-18-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Performance",
      "Core Web Vitals",
      "Optimization",
      "Lighthouse"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Performance architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-19",
    "title": "Embedded Systems & IoT Engineering with ESP32 & FreeRTOS",
    "slug": "embedded-systems-iot-engineering-with-esp32-freertos",
    "subtitle": "C/C++ firmware programming, MQTT IoT telemetry, and hardware sensor integration",
    "description": "C/C++ firmware programming, MQTT IoT telemetry, and hardware sensor integration. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 3199,
    "originalPrice": 8499,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 1850,
    "totalStudents": 8040,
    "durationHours": 34,
    "totalLessons": 74,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-deve-19-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-19-les-1",
            "chapterId": "course-deve-19-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-19-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-19-les-2",
            "chapterId": "course-deve-19-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-19-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-19-les-3",
            "chapterId": "course-deve-19-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-19-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-19-les-4",
            "chapterId": "course-deve-19-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-19-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-19-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-19-les-5",
            "chapterId": "course-deve-19-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-19-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-19-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "IoT",
      "Embedded",
      "C++",
      "FreeRTOS"
    ],
    "whatYouWillLearn": [
      "Master industry-grade IoT architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-20",
    "title": "Progressive Web Apps (PWA) with Offline Sync & Service Workers",
    "slug": "progressive-web-apps-pwa-with-offline-sync-service-workers",
    "subtitle": "Transform web apps into installable, offline-first mobile desktop experiences",
    "description": "Transform web apps into installable, offline-first mobile desktop experiences. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 1799,
    "originalPrice": 4999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 1935,
    "totalStudents": 8420,
    "durationHours": 18,
    "totalLessons": 39,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-deve-20-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-20-les-1",
            "chapterId": "course-deve-20-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-20-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-20-les-2",
            "chapterId": "course-deve-20-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-20-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-20-les-3",
            "chapterId": "course-deve-20-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-20-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-20-les-4",
            "chapterId": "course-deve-20-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-20-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-20-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-20-les-5",
            "chapterId": "course-deve-20-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-20-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-20-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "PWA",
      "Service Workers",
      "Web Dev"
    ],
    "whatYouWillLearn": [
      "Master industry-grade PWA architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-21",
    "title": "Ruby on Rails 7 Enterprise Application Development",
    "slug": "ruby-on-rails-7-enterprise-application-development",
    "subtitle": "Turbo, Hotwire, and rapid MVP deployment for modern startup engineering",
    "description": "Turbo, Hotwire, and rapid MVP deployment for modern startup engineering. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "All Levels",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 2299,
    "originalPrice": 6299,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 2020,
    "totalStudents": 8800,
    "durationHours": 29,
    "totalLessons": 63,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-deve-21-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-21-les-1",
            "chapterId": "course-deve-21-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-21-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-21-les-2",
            "chapterId": "course-deve-21-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-21-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-21-les-3",
            "chapterId": "course-deve-21-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-21-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-21-les-4",
            "chapterId": "course-deve-21-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-21-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-21-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-21-les-5",
            "chapterId": "course-deve-21-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-21-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-21-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Ruby",
      "Rails",
      "Hotwire",
      "Full Stack"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Ruby architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-22",
    "title": "Elixir & Phoenix: Real-Time Scalable Messaging Platforms",
    "slug": "elixir-phoenix-real-time-scalable-messaging-platforms",
    "subtitle": "Harness the Erlang BEAM VM to support millions of simultaneous WebSocket connections",
    "description": "Harness the Erlang BEAM VM to support millions of simultaneous WebSocket connections. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 3699,
    "originalPrice": 9499,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 2105,
    "totalStudents": 9180,
    "durationHours": 32,
    "totalLessons": 70,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_4",
      "name": "Ananya Sengupta",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      "title": "Staff AI Research Scientist & ML Lead",
      "rating": 4.92,
      "studentsCount": 42100,
      "coursesCount": 7,
      "bio": "AI researcher and author with expertise in LLM fine-tuning, Transformers, and scalable PyTorch models."
    },
    "chapters": [
      {
        "id": "course-deve-22-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-22-les-1",
            "chapterId": "course-deve-22-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-22-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-22-les-2",
            "chapterId": "course-deve-22-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-22-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-22-les-3",
            "chapterId": "course-deve-22-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-22-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-22-les-4",
            "chapterId": "course-deve-22-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-22-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-22-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-22-les-5",
            "chapterId": "course-deve-22-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-22-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-22-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Elixir",
      "Phoenix",
      "Erlang",
      "Real-Time"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Elixir architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-23",
    "title": "WebSockets & Real-Time Collaborative Apps in Node.js",
    "slug": "websockets-real-time-collaborative-apps-in-node-js",
    "subtitle": "Build Google Docs-style live collaborative editors with CRDTs and Redis Pub/Sub",
    "description": "Build Google Docs-style live collaborative editors with CRDTs and Redis Pub/Sub. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 2599,
    "originalPrice": 6999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 2190,
    "totalStudents": 9560,
    "durationHours": 25,
    "totalLessons": 55,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_5",
      "name": "Rahul Nair",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "title": "VP of Product & Ex-Flipkart Director",
      "rating": 4.85,
      "studentsCount": 22400,
      "coursesCount": 5,
      "bio": "12+ years scaling consumer tech products from zero to 10M+ daily active users across India."
    },
    "chapters": [
      {
        "id": "course-deve-23-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-23-les-1",
            "chapterId": "course-deve-23-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-23-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-23-les-2",
            "chapterId": "course-deve-23-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-23-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-23-les-3",
            "chapterId": "course-deve-23-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-23-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-23-les-4",
            "chapterId": "course-deve-23-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-23-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-23-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-23-les-5",
            "chapterId": "course-deve-23-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-23-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-23-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "WebSockets",
      "Node.js",
      "Redis",
      "CRDT"
    ],
    "whatYouWillLearn": [
      "Master industry-grade WebSockets architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-deve-24",
    "title": "Complete Frontend Testing with Vitest, Playwright & Cypress",
    "slug": "complete-frontend-testing-with-vitest-playwright-cypress",
    "subtitle": "Unit testing, integration testing, component mocks, and end-to-end browser CI pipelines",
    "description": "Unit testing, integration testing, component mocks, and end-to-end browser CI pipelines. Designed specifically for Indian developers and engineering teams aiming to master Development at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Development",
    "level": "All Levels",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/x4rFhThSX04?enablejsapi=1&rel=0",
    "price": 1999,
    "originalPrice": 5499,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 2275,
    "totalStudents": 9940,
    "durationHours": 22,
    "totalLessons": 48,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_6",
      "name": "Sneha Reddy",
      "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
      "title": "DevOps & Site Reliability Lead",
      "rating": 4.91,
      "studentsCount": 31000,
      "coursesCount": 6,
      "bio": "Kubernetes contributor and multi-cloud infrastructure architect for high-throughput FinTech pipelines."
    },
    "chapters": [
      {
        "id": "course-deve-24-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-deve-24-les-1",
            "chapterId": "course-deve-24-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-deve-24-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-deve-24-les-2",
            "chapterId": "course-deve-24-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-deve-24-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-deve-24-les-3",
            "chapterId": "course-deve-24-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-deve-24-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-deve-24-les-4",
            "chapterId": "course-deve-24-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-deve-24-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-deve-24-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-deve-24-les-5",
            "chapterId": "course-deve-24-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-deve-24-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-deve-24-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Testing",
      "Vitest",
      "Playwright",
      "Cypress"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Testing architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "x4rFhThSX04",
        "title": "React 19 / 18 Complete Masterclass",
        "channel": "freeCodeCamp",
        "duration": "5h 10m",
        "embedUrl": "https://www.youtube.com/embed/x4rFhThSX04?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/x4rFhThSX04/hqdefault.jpg"
      },
      {
        "id": "bMknfKXIFA8",
        "title": "React Course - Beginner to Advanced",
        "channel": "FreeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/bMknfKXIFA8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg"
      },
      {
        "id": "w7ejDZ8SWv8",
        "title": "React State Management & Redux Toolkit",
        "channel": "Academind",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg"
      },
      {
        "id": "dGcsHMXbSOA",
        "title": "React Performance Optimization & Hooks",
        "channel": "Web Dev Simplified",
        "duration": "1h 20m",
        "embedUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dGcsHMXbSOA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-2",
    "title": "UI/UX Masterclass: Designing High-Conversion Fintech Apps (CRED Aesthetic)",
    "slug": "ui-ux-masterclass-designing-high-conversion-fintech-apps-cred-aesthetic",
    "subtitle": "Master dark-mode interfaces, glassmorphism, micro-interactions, and visual storytelling",
    "description": "Master dark-mode interfaces, glassmorphism, micro-interactions, and visual storytelling. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 2999,
    "originalPrice": 7999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 320,
    "totalStudents": 1200,
    "durationHours": 32,
    "totalLessons": 70,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-2-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-2-les-1",
            "chapterId": "course-2-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-2-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-2-les-2",
            "chapterId": "course-2-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-2-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-2-les-3",
            "chapterId": "course-2-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-2-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-2-les-4",
            "chapterId": "course-2-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-2-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-2-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-2-les-5",
            "chapterId": "course-2-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-2-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-2-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Figma",
      "UI/UX",
      "Design Systems",
      "CRED Aesthetic"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Figma architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-desi-2",
    "title": "Figma to Code: Enterprise Design Systems & Token Architecture",
    "slug": "figma-to-code-enterprise-design-systems-token-architecture",
    "subtitle": "Design scalable variables, auto-layout 5.0, typography scales, and CSS export pipelines",
    "description": "Design scalable variables, auto-layout 5.0, typography scales, and CSS export pipelines. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 2499,
    "originalPrice": 6499,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 405,
    "totalStudents": 1580,
    "durationHours": 28,
    "totalLessons": 61,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-desi-2-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-desi-2-les-1",
            "chapterId": "course-desi-2-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-desi-2-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-desi-2-les-2",
            "chapterId": "course-desi-2-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-desi-2-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-desi-2-les-3",
            "chapterId": "course-desi-2-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-desi-2-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-desi-2-les-4",
            "chapterId": "course-desi-2-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-desi-2-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-desi-2-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-desi-2-les-5",
            "chapterId": "course-desi-2-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-desi-2-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-desi-2-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Figma",
      "Design Tokens",
      "Design System"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Figma architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-desi-3",
    "title": "Mobile App UX Research & Rapid Prototyping in Figma",
    "slug": "mobile-app-ux-research-rapid-prototyping-in-figma",
    "subtitle": "Conduct user interviews, journey maps, wireframing, and interactive animated prototypes",
    "description": "Conduct user interviews, journey maps, wireframing, and interactive animated prototypes. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "Beginner",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 2199,
    "originalPrice": 5999,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 490,
    "totalStudents": 1960,
    "durationHours": 24,
    "totalLessons": 52,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-desi-3-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-desi-3-les-1",
            "chapterId": "course-desi-3-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-desi-3-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-desi-3-les-2",
            "chapterId": "course-desi-3-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-desi-3-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-desi-3-les-3",
            "chapterId": "course-desi-3-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-desi-3-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-desi-3-les-4",
            "chapterId": "course-desi-3-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-desi-3-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-desi-3-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-desi-3-les-5",
            "chapterId": "course-desi-3-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-desi-3-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-desi-3-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "UX Research",
      "Figma",
      "Prototyping"
    ],
    "whatYouWillLearn": [
      "Master industry-grade UX Research architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-desi-4",
    "title": "Motion Design for Digital Products with Principle & After Effects",
    "slug": "motion-design-for-digital-products-with-principle-after-effects",
    "subtitle": "Create silky 60fps UI choreographies, page transitions, and Lottie animations",
    "description": "Create silky 60fps UI choreographies, page transitions, and Lottie animations. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 2799,
    "originalPrice": 7499,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 575,
    "totalStudents": 2340,
    "durationHours": 26,
    "totalLessons": 57,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_4",
      "name": "Ananya Sengupta",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      "title": "Staff AI Research Scientist & ML Lead",
      "rating": 4.92,
      "studentsCount": 42100,
      "coursesCount": 7,
      "bio": "AI researcher and author with expertise in LLM fine-tuning, Transformers, and scalable PyTorch models."
    },
    "chapters": [
      {
        "id": "course-desi-4-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-desi-4-les-1",
            "chapterId": "course-desi-4-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-desi-4-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-desi-4-les-2",
            "chapterId": "course-desi-4-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-desi-4-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-desi-4-les-3",
            "chapterId": "course-desi-4-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-desi-4-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-desi-4-les-4",
            "chapterId": "course-desi-4-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-desi-4-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-desi-4-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-desi-4-les-5",
            "chapterId": "course-desi-4-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-desi-4-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-desi-4-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Motion Design",
      "Lottie",
      "After Effects"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Motion Design architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-desi-5",
    "title": "Web Typography & Visual Hierarchy for Modern Interfaces",
    "slug": "web-typography-visual-hierarchy-for-modern-interfaces",
    "subtitle": "Font pairing, optical sizing, responsive vertical rhythm, and layout grids",
    "description": "Font pairing, optical sizing, responsive vertical rhythm, and layout grids. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "All Levels",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 1699,
    "originalPrice": 4499,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 660,
    "totalStudents": 2720,
    "durationHours": 16,
    "totalLessons": 35,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_5",
      "name": "Rahul Nair",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "title": "VP of Product & Ex-Flipkart Director",
      "rating": 4.85,
      "studentsCount": 22400,
      "coursesCount": 5,
      "bio": "12+ years scaling consumer tech products from zero to 10M+ daily active users across India."
    },
    "chapters": [
      {
        "id": "course-desi-5-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-desi-5-les-1",
            "chapterId": "course-desi-5-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-desi-5-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-desi-5-les-2",
            "chapterId": "course-desi-5-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-desi-5-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-desi-5-les-3",
            "chapterId": "course-desi-5-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-desi-5-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-desi-5-les-4",
            "chapterId": "course-desi-5-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-desi-5-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-desi-5-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-desi-5-les-5",
            "chapterId": "course-desi-5-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-desi-5-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-desi-5-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Typography",
      "Layout",
      "Visual Design"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Typography architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-desi-6",
    "title": "Design Systems at Scale: Building Component Libraries for Unicorns",
    "slug": "design-systems-at-scale-building-component-libraries-for-unicorns",
    "subtitle": "Manage multi-brand Figma libraries, governance, accessibility checks, and documentation",
    "description": "Manage multi-brand Figma libraries, governance, accessibility checks, and documentation. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 3299,
    "originalPrice": 8999,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 745,
    "totalStudents": 3100,
    "durationHours": 35,
    "totalLessons": 77,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_6",
      "name": "Sneha Reddy",
      "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
      "title": "DevOps & Site Reliability Lead",
      "rating": 4.91,
      "studentsCount": 31000,
      "coursesCount": 6,
      "bio": "Kubernetes contributor and multi-cloud infrastructure architect for high-throughput FinTech pipelines."
    },
    "chapters": [
      {
        "id": "course-desi-6-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-desi-6-les-1",
            "chapterId": "course-desi-6-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-desi-6-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-desi-6-les-2",
            "chapterId": "course-desi-6-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-desi-6-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-desi-6-les-3",
            "chapterId": "course-desi-6-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-desi-6-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-desi-6-les-4",
            "chapterId": "course-desi-6-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-desi-6-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-desi-6-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-desi-6-les-5",
            "chapterId": "course-desi-6-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-desi-6-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-desi-6-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Design Systems",
      "Figma",
      "Accessibility"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Design Systems architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-desi-7",
    "title": "Interaction Design & Micro-animations for Mobile & Web",
    "slug": "interaction-design-micro-animations-for-mobile-web",
    "subtitle": "Haptic feedback, swipe gestures, drawer transitions, and delight engineering",
    "description": "Haptic feedback, swipe gestures, drawer transitions, and delight engineering. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 2399,
    "originalPrice": 6299,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 830,
    "totalStudents": 3480,
    "durationHours": 22,
    "totalLessons": 48,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-desi-7-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-desi-7-les-1",
            "chapterId": "course-desi-7-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-desi-7-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-desi-7-les-2",
            "chapterId": "course-desi-7-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-desi-7-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-desi-7-les-3",
            "chapterId": "course-desi-7-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-desi-7-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-desi-7-les-4",
            "chapterId": "course-desi-7-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-desi-7-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-desi-7-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-desi-7-les-5",
            "chapterId": "course-desi-7-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-desi-7-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-desi-7-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Interaction Design",
      "Figma",
      "UX"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Interaction Design architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-desi-8",
    "title": "User Research & Usability Testing for India's Diverse Demographics",
    "slug": "user-research-usability-testing-for-india-s-diverse-demographics",
    "subtitle": "Designing for Next Billion Users: regional languages, low-bandwidth UI, and voice-assisted flows",
    "description": "Designing for Next Billion Users: regional languages, low-bandwidth UI, and voice-assisted flows. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "All Levels",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 2699,
    "originalPrice": 6999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 915,
    "totalStudents": 3860,
    "durationHours": 25,
    "totalLessons": 55,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-desi-8-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-desi-8-les-1",
            "chapterId": "course-desi-8-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-desi-8-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-desi-8-les-2",
            "chapterId": "course-desi-8-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-desi-8-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-desi-8-les-3",
            "chapterId": "course-desi-8-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-desi-8-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-desi-8-les-4",
            "chapterId": "course-desi-8-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-desi-8-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-desi-8-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-desi-8-les-5",
            "chapterId": "course-desi-8-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-desi-8-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-desi-8-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "UX Research",
      "Bharat Tech",
      "Inclusive Design"
    ],
    "whatYouWillLearn": [
      "Master industry-grade UX Research architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-desi-9",
    "title": "Responsive Web Design Mastery with Modern CSS & Tailwind CSS",
    "slug": "responsive-web-design-mastery-with-modern-css-tailwind-css",
    "subtitle": "Container queries, CSS Grid, Flexbox, subgrid, and modern responsive patterns",
    "description": "Container queries, CSS Grid, Flexbox, subgrid, and modern responsive patterns. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "Beginner",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 1899,
    "originalPrice": 4999,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 1000,
    "totalStudents": 4240,
    "durationHours": 21,
    "totalLessons": 46,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-desi-9-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-desi-9-les-1",
            "chapterId": "course-desi-9-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-desi-9-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-desi-9-les-2",
            "chapterId": "course-desi-9-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-desi-9-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-desi-9-les-3",
            "chapterId": "course-desi-9-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-desi-9-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-desi-9-les-4",
            "chapterId": "course-desi-9-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-desi-9-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-desi-9-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-desi-9-les-5",
            "chapterId": "course-desi-9-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-desi-9-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-desi-9-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "CSS",
      "Tailwind CSS",
      "Responsive Design"
    ],
    "whatYouWillLearn": [
      "Master industry-grade CSS architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-desi-10",
    "title": "3D Web UI & Spline Interactive Graphics for Modern SaaS",
    "slug": "3d-web-ui-spline-interactive-graphics-for-modern-saas",
    "subtitle": "Model, animate, and embed interactive 3D web experiences with Spline and Three.js",
    "description": "Model, animate, and embed interactive 3D web experiences with Spline and Three.js. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 2899,
    "originalPrice": 7699,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 1085,
    "totalStudents": 4620,
    "durationHours": 24,
    "totalLessons": 52,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_4",
      "name": "Ananya Sengupta",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      "title": "Staff AI Research Scientist & ML Lead",
      "rating": 4.92,
      "studentsCount": 42100,
      "coursesCount": 7,
      "bio": "AI researcher and author with expertise in LLM fine-tuning, Transformers, and scalable PyTorch models."
    },
    "chapters": [
      {
        "id": "course-desi-10-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-desi-10-les-1",
            "chapterId": "course-desi-10-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-desi-10-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-desi-10-les-2",
            "chapterId": "course-desi-10-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-desi-10-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-desi-10-les-3",
            "chapterId": "course-desi-10-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-desi-10-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-desi-10-les-4",
            "chapterId": "course-desi-10-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-desi-10-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-desi-10-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-desi-10-les-5",
            "chapterId": "course-desi-10-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-desi-10-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-desi-10-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "3D Design",
      "Spline",
      "Three.js",
      "Web3D"
    ],
    "whatYouWillLearn": [
      "Master industry-grade 3D Design architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-desi-11",
    "title": "Accessibility (a11y) & Inclusive Design for Millions of Users",
    "slug": "accessibility-a11y-inclusive-design-for-millions-of-users",
    "subtitle": "WCAG 2.2 AA compliance, screen reader compatibility, and high contrast themes",
    "description": "WCAG 2.2 AA compliance, screen reader compatibility, and high contrast themes. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "All Levels",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 1799,
    "originalPrice": 4899,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 1170,
    "totalStudents": 5000,
    "durationHours": 18,
    "totalLessons": 39,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_5",
      "name": "Rahul Nair",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "title": "VP of Product & Ex-Flipkart Director",
      "rating": 4.85,
      "studentsCount": 22400,
      "coursesCount": 5,
      "bio": "12+ years scaling consumer tech products from zero to 10M+ daily active users across India."
    },
    "chapters": [
      {
        "id": "course-desi-11-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-desi-11-les-1",
            "chapterId": "course-desi-11-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-desi-11-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-desi-11-les-2",
            "chapterId": "course-desi-11-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-desi-11-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-desi-11-les-3",
            "chapterId": "course-desi-11-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-desi-11-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-desi-11-les-4",
            "chapterId": "course-desi-11-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-desi-11-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-desi-11-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-desi-11-les-5",
            "chapterId": "course-desi-11-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-desi-11-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-desi-11-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Accessibility",
      "a11y",
      "WCAG",
      "Inclusive Design"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Accessibility architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-desi-12",
    "title": "Product Design Leadership: Managing Enterprise Design Teams",
    "slug": "product-design-leadership-managing-enterprise-design-teams",
    "subtitle": "Design strategy, stakeholder alignment, design sprints, and hiring top product designers",
    "description": "Design strategy, stakeholder alignment, design sprints, and hiring top product designers. Designed specifically for Indian developers and engineering teams aiming to master Design at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Design",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?enablejsapi=1&rel=0",
    "price": 3499,
    "originalPrice": 9499,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 1255,
    "totalStudents": 5380,
    "durationHours": 29,
    "totalLessons": 63,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_6",
      "name": "Sneha Reddy",
      "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
      "title": "DevOps & Site Reliability Lead",
      "rating": 4.91,
      "studentsCount": 31000,
      "coursesCount": 6,
      "bio": "Kubernetes contributor and multi-cloud infrastructure architect for high-throughput FinTech pipelines."
    },
    "chapters": [
      {
        "id": "course-desi-12-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-desi-12-les-1",
            "chapterId": "course-desi-12-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-desi-12-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-desi-12-les-2",
            "chapterId": "course-desi-12-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-desi-12-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-desi-12-les-3",
            "chapterId": "course-desi-12-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-desi-12-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-desi-12-les-4",
            "chapterId": "course-desi-12-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-desi-12-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-desi-12-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-desi-12-les-5",
            "chapterId": "course-desi-12-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-desi-12-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-desi-12-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Design Leadership",
      "Strategy",
      "Management"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Design Leadership architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "c9Wg6Cb_YlU",
        "title": "Figma UI/UX Design Essentials Course",
        "channel": "freeCodeCamp",
        "duration": "4h 15m",
        "embedUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/c9Wg6Cb_YlU/hqdefault.jpg"
      },
      {
        "id": "68w2VwalD5w",
        "title": "Figma Auto Layout, Components & Design Tokens",
        "channel": "DesignCourse",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/68w2VwalD5w?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/68w2VwalD5w/hqdefault.jpg"
      },
      {
        "id": "jwCmIBJ8Jtc",
        "title": "Mobile App UI/UX Design Masterclass",
        "channel": "Mizko",
        "duration": "3h 05m",
        "embedUrl": "https://www.youtube.com/embed/jwCmIBJ8Jtc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jwCmIBJ8Jtc/hqdefault.jpg"
      },
      {
        "id": "9B4vN1p_cOU",
        "title": "Building a Scalable Design System in Figma",
        "channel": "Figma Official",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/9B4vN1p_cOU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/9B4vN1p_cOU/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-clou-1",
    "title": "AWS Certified Solutions Architect (Associate & Professional Prep)",
    "slug": "aws-certified-solutions-architect-associate-professional-prep",
    "subtitle": "Master VPC, EC2, IAM, Lambda, S3, ECS, and well-architected cloud principles",
    "description": "Master VPC, EC2, IAM, Lambda, S3, ECS, and well-architected cloud principles. Designed specifically for Indian developers and engineering teams aiming to master Cloud & DevOps at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cloud & DevOps",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?enablejsapi=1&rel=0",
    "price": 3499,
    "originalPrice": 9999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 320,
    "totalStudents": 1200,
    "durationHours": 52,
    "totalLessons": 114,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-clou-1-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-clou-1-les-1",
            "chapterId": "course-clou-1-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-clou-1-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-clou-1-les-2",
            "chapterId": "course-clou-1-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/ZtqB5_3gk5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-clou-1-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-clou-1-les-3",
            "chapterId": "course-clou-1-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/NKEFW2W32Hg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-clou-1-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-clou-1-les-4",
            "chapterId": "course-clou-1-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/jpno8FSqpc8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-clou-1-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-clou-1-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-clou-1-les-5",
            "chapterId": "course-clou-1-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-clou-1-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-clou-1-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "AWS",
      "Cloud",
      "Solutions Architect",
      "DevOps"
    ],
    "whatYouWillLearn": [
      "Master industry-grade AWS architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "SOTamWNgDKc",
        "title": "AWS Certified Cloud Practitioner Training Course",
        "channel": "freeCodeCamp",
        "duration": "13h 20m",
        "embedUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/SOTamWNgDKc/hqdefault.jpg"
      },
      {
        "id": "ZtqB5_3gk5o",
        "title": "Linux Administration for Cloud & DevOps Engineers",
        "channel": "freeCodeCamp",
        "duration": "4h 50m",
        "embedUrl": "https://www.youtube.com/embed/ZtqB5_3gk5o?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/ZtqB5_3gk5o/hqdefault.jpg"
      },
      {
        "id": "NKEFW2W32Hg",
        "title": "Microsoft Azure Fundamentals Certification Guide",
        "channel": "freeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/NKEFW2W32Hg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/NKEFW2W32Hg/hqdefault.jpg"
      },
      {
        "id": "jpno8FSqpc8",
        "title": "Google Cloud Platform (GCP) Fundamentals",
        "channel": "Google Cloud Tech",
        "duration": "2h 45m",
        "embedUrl": "https://www.youtube.com/embed/jpno8FSqpc8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jpno8FSqpc8/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-clou-2",
    "title": "Docker & Kubernetes from Scratch to Production Clusters",
    "slug": "docker-kubernetes-from-scratch-to-production-clusters",
    "subtitle": "Containerize apps, deploy Helm charts, set up Ingress controllers, and manage K8s pods",
    "description": "Containerize apps, deploy Helm charts, set up Ingress controllers, and manage K8s pods. Designed specifically for Indian developers and engineering teams aiming to master Cloud & DevOps at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cloud & DevOps",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?enablejsapi=1&rel=0",
    "price": 3299,
    "originalPrice": 8999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 405,
    "totalStudents": 1580,
    "durationHours": 44,
    "totalLessons": 96,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-clou-2-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-clou-2-les-1",
            "chapterId": "course-clou-2-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-clou-2-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-clou-2-les-2",
            "chapterId": "course-clou-2-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/X48VuDVv0do?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-clou-2-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-clou-2-les-3",
            "chapterId": "course-clou-2-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/7xngnjfIlK4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-clou-2-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-clou-2-les-4",
            "chapterId": "course-clou-2-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/R8_veQiYtZA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-clou-2-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-clou-2-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-clou-2-les-5",
            "chapterId": "course-clou-2-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-clou-2-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-clou-2-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Docker",
      "Kubernetes",
      "DevOps",
      "Containers"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Docker architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "fqMOX6JJhGo",
        "title": "Docker Tutorial for Beginners [Full Course]",
        "channel": "TechWorld with Nana",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/fqMOX6JJhGo/hqdefault.jpg"
      },
      {
        "id": "X48VuDVv0do",
        "title": "Kubernetes Tutorial for Beginners [100% Practical]",
        "channel": "TechWorld with Nana",
        "duration": "4h 05m",
        "embedUrl": "https://www.youtube.com/embed/X48VuDVv0do?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/X48VuDVv0do/hqdefault.jpg"
      },
      {
        "id": "7xngnjfIlK4",
        "title": "Terraform Full Course - Automate Cloud Infrastructure",
        "channel": "freeCodeCamp",
        "duration": "2h 35m",
        "embedUrl": "https://www.youtube.com/embed/7xngnjfIlK4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/7xngnjfIlK4/hqdefault.jpg"
      },
      {
        "id": "R8_veQiYtZA",
        "title": "GitHub Actions & CI/CD Pipelines Full Course",
        "channel": "freeCodeCamp",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/R8_veQiYtZA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/R8_veQiYtZA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-clou-3",
    "title": "Terraform & Infrastructure as Code (IaC) on Multi-Cloud",
    "slug": "terraform-infrastructure-as-code-iac-on-multi-cloud",
    "subtitle": "Automate AWS, GCP, and Azure cloud resources with state management and reusable modules",
    "description": "Automate AWS, GCP, and Azure cloud resources with state management and reusable modules. Designed specifically for Indian developers and engineering teams aiming to master Cloud & DevOps at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cloud & DevOps",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?enablejsapi=1&rel=0",
    "price": 2899,
    "originalPrice": 7699,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 490,
    "totalStudents": 1960,
    "durationHours": 30,
    "totalLessons": 66,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-clou-3-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-clou-3-les-1",
            "chapterId": "course-clou-3-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-clou-3-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-clou-3-les-2",
            "chapterId": "course-clou-3-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/X48VuDVv0do?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-clou-3-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-clou-3-les-3",
            "chapterId": "course-clou-3-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/7xngnjfIlK4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-clou-3-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-clou-3-les-4",
            "chapterId": "course-clou-3-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/R8_veQiYtZA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-clou-3-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-clou-3-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-clou-3-les-5",
            "chapterId": "course-clou-3-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-clou-3-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-clou-3-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Terraform",
      "IaC",
      "AWS",
      "Automation"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Terraform architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "fqMOX6JJhGo",
        "title": "Docker Tutorial for Beginners [Full Course]",
        "channel": "TechWorld with Nana",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/fqMOX6JJhGo/hqdefault.jpg"
      },
      {
        "id": "X48VuDVv0do",
        "title": "Kubernetes Tutorial for Beginners [100% Practical]",
        "channel": "TechWorld with Nana",
        "duration": "4h 05m",
        "embedUrl": "https://www.youtube.com/embed/X48VuDVv0do?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/X48VuDVv0do/hqdefault.jpg"
      },
      {
        "id": "7xngnjfIlK4",
        "title": "Terraform Full Course - Automate Cloud Infrastructure",
        "channel": "freeCodeCamp",
        "duration": "2h 35m",
        "embedUrl": "https://www.youtube.com/embed/7xngnjfIlK4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/7xngnjfIlK4/hqdefault.jpg"
      },
      {
        "id": "R8_veQiYtZA",
        "title": "GitHub Actions & CI/CD Pipelines Full Course",
        "channel": "freeCodeCamp",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/R8_veQiYtZA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/R8_veQiYtZA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-clou-4",
    "title": "CI/CD Pipeline Automation with GitHub Actions & ArgoCD",
    "slug": "ci-cd-pipeline-automation-with-github-actions-argocd",
    "subtitle": "GitOps workflows, automated testing gates, container scanning, and zero-downtime canary deploys",
    "description": "GitOps workflows, automated testing gates, container scanning, and zero-downtime canary deploys. Designed specifically for Indian developers and engineering teams aiming to master Cloud & DevOps at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cloud & DevOps",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?enablejsapi=1&rel=0",
    "price": 2699,
    "originalPrice": 7199,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 575,
    "totalStudents": 2340,
    "durationHours": 28,
    "totalLessons": 61,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_4",
      "name": "Ananya Sengupta",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      "title": "Staff AI Research Scientist & ML Lead",
      "rating": 4.92,
      "studentsCount": 42100,
      "coursesCount": 7,
      "bio": "AI researcher and author with expertise in LLM fine-tuning, Transformers, and scalable PyTorch models."
    },
    "chapters": [
      {
        "id": "course-clou-4-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-clou-4-les-1",
            "chapterId": "course-clou-4-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-clou-4-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-clou-4-les-2",
            "chapterId": "course-clou-4-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/X48VuDVv0do?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-clou-4-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-clou-4-les-3",
            "chapterId": "course-clou-4-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/7xngnjfIlK4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-clou-4-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-clou-4-les-4",
            "chapterId": "course-clou-4-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/R8_veQiYtZA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-clou-4-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-clou-4-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-clou-4-les-5",
            "chapterId": "course-clou-4-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-clou-4-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-clou-4-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "CI/CD",
      "GitHub Actions",
      "ArgoCD",
      "GitOps"
    ],
    "whatYouWillLearn": [
      "Master industry-grade CI/CD architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "fqMOX6JJhGo",
        "title": "Docker Tutorial for Beginners [Full Course]",
        "channel": "TechWorld with Nana",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/fqMOX6JJhGo/hqdefault.jpg"
      },
      {
        "id": "X48VuDVv0do",
        "title": "Kubernetes Tutorial for Beginners [100% Practical]",
        "channel": "TechWorld with Nana",
        "duration": "4h 05m",
        "embedUrl": "https://www.youtube.com/embed/X48VuDVv0do?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/X48VuDVv0do/hqdefault.jpg"
      },
      {
        "id": "7xngnjfIlK4",
        "title": "Terraform Full Course - Automate Cloud Infrastructure",
        "channel": "freeCodeCamp",
        "duration": "2h 35m",
        "embedUrl": "https://www.youtube.com/embed/7xngnjfIlK4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/7xngnjfIlK4/hqdefault.jpg"
      },
      {
        "id": "R8_veQiYtZA",
        "title": "GitHub Actions & CI/CD Pipelines Full Course",
        "channel": "freeCodeCamp",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/R8_veQiYtZA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/R8_veQiYtZA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-clou-5",
    "title": "Site Reliability Engineering (SRE) & Chaos Engineering",
    "slug": "site-reliability-engineering-sre-chaos-engineering",
    "subtitle": "SLOs, SLIs, error budgets, Prometheus & Grafana alerting, and Chaos Mesh experiments",
    "description": "SLOs, SLIs, error budgets, Prometheus & Grafana alerting, and Chaos Mesh experiments. Designed specifically for Indian developers and engineering teams aiming to master Cloud & DevOps at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cloud & DevOps",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?enablejsapi=1&rel=0",
    "price": 3699,
    "originalPrice": 9699,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 660,
    "totalStudents": 2720,
    "durationHours": 36,
    "totalLessons": 79,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_5",
      "name": "Rahul Nair",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "title": "VP of Product & Ex-Flipkart Director",
      "rating": 4.85,
      "studentsCount": 22400,
      "coursesCount": 5,
      "bio": "12+ years scaling consumer tech products from zero to 10M+ daily active users across India."
    },
    "chapters": [
      {
        "id": "course-clou-5-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-clou-5-les-1",
            "chapterId": "course-clou-5-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-clou-5-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-clou-5-les-2",
            "chapterId": "course-clou-5-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/X48VuDVv0do?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-clou-5-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-clou-5-les-3",
            "chapterId": "course-clou-5-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/7xngnjfIlK4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-clou-5-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-clou-5-les-4",
            "chapterId": "course-clou-5-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/R8_veQiYtZA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-clou-5-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-clou-5-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-clou-5-les-5",
            "chapterId": "course-clou-5-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-clou-5-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-clou-5-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "SRE",
      "Observability",
      "Prometheus",
      "Grafana"
    ],
    "whatYouWillLearn": [
      "Master industry-grade SRE architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "fqMOX6JJhGo",
        "title": "Docker Tutorial for Beginners [Full Course]",
        "channel": "TechWorld with Nana",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/fqMOX6JJhGo?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/fqMOX6JJhGo/hqdefault.jpg"
      },
      {
        "id": "X48VuDVv0do",
        "title": "Kubernetes Tutorial for Beginners [100% Practical]",
        "channel": "TechWorld with Nana",
        "duration": "4h 05m",
        "embedUrl": "https://www.youtube.com/embed/X48VuDVv0do?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/X48VuDVv0do/hqdefault.jpg"
      },
      {
        "id": "7xngnjfIlK4",
        "title": "Terraform Full Course - Automate Cloud Infrastructure",
        "channel": "freeCodeCamp",
        "duration": "2h 35m",
        "embedUrl": "https://www.youtube.com/embed/7xngnjfIlK4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/7xngnjfIlK4/hqdefault.jpg"
      },
      {
        "id": "R8_veQiYtZA",
        "title": "GitHub Actions & CI/CD Pipelines Full Course",
        "channel": "freeCodeCamp",
        "duration": "2h 15m",
        "embedUrl": "https://www.youtube.com/embed/R8_veQiYtZA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/R8_veQiYtZA/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-clou-6",
    "title": "Google Cloud Platform (GCP) Cloud Architect Certification Guide",
    "slug": "google-cloud-platform-gcp-cloud-architect-certification-guide",
    "subtitle": "Master BigQuery, GKE, Cloud Run, Cloud Spanner, and Google Enterprise Networking",
    "description": "Master BigQuery, GKE, Cloud Run, Cloud Spanner, and Google Enterprise Networking. Designed specifically for Indian developers and engineering teams aiming to master Cloud & DevOps at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cloud & DevOps",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?enablejsapi=1&rel=0",
    "price": 3199,
    "originalPrice": 8499,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 745,
    "totalStudents": 3100,
    "durationHours": 38,
    "totalLessons": 83,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_6",
      "name": "Sneha Reddy",
      "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
      "title": "DevOps & Site Reliability Lead",
      "rating": 4.91,
      "studentsCount": 31000,
      "coursesCount": 6,
      "bio": "Kubernetes contributor and multi-cloud infrastructure architect for high-throughput FinTech pipelines."
    },
    "chapters": [
      {
        "id": "course-clou-6-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-clou-6-les-1",
            "chapterId": "course-clou-6-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-clou-6-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-clou-6-les-2",
            "chapterId": "course-clou-6-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/ZtqB5_3gk5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-clou-6-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-clou-6-les-3",
            "chapterId": "course-clou-6-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/NKEFW2W32Hg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-clou-6-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-clou-6-les-4",
            "chapterId": "course-clou-6-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/jpno8FSqpc8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-clou-6-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-clou-6-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-clou-6-les-5",
            "chapterId": "course-clou-6-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-clou-6-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-clou-6-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "GCP",
      "Google Cloud",
      "Cloud Architect"
    ],
    "whatYouWillLearn": [
      "Master industry-grade GCP architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "SOTamWNgDKc",
        "title": "AWS Certified Cloud Practitioner Training Course",
        "channel": "freeCodeCamp",
        "duration": "13h 20m",
        "embedUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/SOTamWNgDKc/hqdefault.jpg"
      },
      {
        "id": "ZtqB5_3gk5o",
        "title": "Linux Administration for Cloud & DevOps Engineers",
        "channel": "freeCodeCamp",
        "duration": "4h 50m",
        "embedUrl": "https://www.youtube.com/embed/ZtqB5_3gk5o?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/ZtqB5_3gk5o/hqdefault.jpg"
      },
      {
        "id": "NKEFW2W32Hg",
        "title": "Microsoft Azure Fundamentals Certification Guide",
        "channel": "freeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/NKEFW2W32Hg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/NKEFW2W32Hg/hqdefault.jpg"
      },
      {
        "id": "jpno8FSqpc8",
        "title": "Google Cloud Platform (GCP) Fundamentals",
        "channel": "Google Cloud Tech",
        "duration": "2h 45m",
        "embedUrl": "https://www.youtube.com/embed/jpno8FSqpc8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jpno8FSqpc8/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-clou-7",
    "title": "Azure Cloud Infrastructure & Enterprise Hybrid Networks",
    "slug": "azure-cloud-infrastructure-enterprise-hybrid-networks",
    "subtitle": "ExpressRoute, Azure Virtual Desktop, Azure App Services, and Entra ID security",
    "description": "ExpressRoute, Azure Virtual Desktop, Azure App Services, and Entra ID security. Designed specifically for Indian developers and engineering teams aiming to master Cloud & DevOps at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cloud & DevOps",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?enablejsapi=1&rel=0",
    "price": 2999,
    "originalPrice": 7999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 830,
    "totalStudents": 3480,
    "durationHours": 34,
    "totalLessons": 74,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-clou-7-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-clou-7-les-1",
            "chapterId": "course-clou-7-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-clou-7-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-clou-7-les-2",
            "chapterId": "course-clou-7-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/ZtqB5_3gk5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-clou-7-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-clou-7-les-3",
            "chapterId": "course-clou-7-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/NKEFW2W32Hg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-clou-7-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-clou-7-les-4",
            "chapterId": "course-clou-7-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/jpno8FSqpc8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-clou-7-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-clou-7-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-clou-7-les-5",
            "chapterId": "course-clou-7-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-clou-7-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-clou-7-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Azure",
      "Microsoft Cloud",
      "Enterprise Networking"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Azure architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "SOTamWNgDKc",
        "title": "AWS Certified Cloud Practitioner Training Course",
        "channel": "freeCodeCamp",
        "duration": "13h 20m",
        "embedUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/SOTamWNgDKc/hqdefault.jpg"
      },
      {
        "id": "ZtqB5_3gk5o",
        "title": "Linux Administration for Cloud & DevOps Engineers",
        "channel": "freeCodeCamp",
        "duration": "4h 50m",
        "embedUrl": "https://www.youtube.com/embed/ZtqB5_3gk5o?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/ZtqB5_3gk5o/hqdefault.jpg"
      },
      {
        "id": "NKEFW2W32Hg",
        "title": "Microsoft Azure Fundamentals Certification Guide",
        "channel": "freeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/NKEFW2W32Hg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/NKEFW2W32Hg/hqdefault.jpg"
      },
      {
        "id": "jpno8FSqpc8",
        "title": "Google Cloud Platform (GCP) Fundamentals",
        "channel": "Google Cloud Tech",
        "duration": "2h 45m",
        "embedUrl": "https://www.youtube.com/embed/jpno8FSqpc8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jpno8FSqpc8/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-clou-8",
    "title": "Linux Administration & Shell Scripting for DevOps Engineers",
    "slug": "linux-administration-shell-scripting-for-devops-engineers",
    "subtitle": "Bash automation, systemd services, SSH hardening, kernel tuning, and cron automation",
    "description": "Bash automation, systemd services, SSH hardening, kernel tuning, and cron automation. Designed specifically for Indian developers and engineering teams aiming to master Cloud & DevOps at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cloud & DevOps",
    "level": "Beginner",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?enablejsapi=1&rel=0",
    "price": 1999,
    "originalPrice": 5299,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 915,
    "totalStudents": 3860,
    "durationHours": 24,
    "totalLessons": 52,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-clou-8-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-clou-8-les-1",
            "chapterId": "course-clou-8-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-clou-8-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-clou-8-les-2",
            "chapterId": "course-clou-8-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/ZtqB5_3gk5o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-clou-8-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-clou-8-les-3",
            "chapterId": "course-clou-8-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/NKEFW2W32Hg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-clou-8-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-clou-8-les-4",
            "chapterId": "course-clou-8-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/jpno8FSqpc8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-clou-8-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-clou-8-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-clou-8-les-5",
            "chapterId": "course-clou-8-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-clou-8-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-clou-8-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Linux",
      "Bash",
      "Shell Scripting",
      "SysAdmin"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Linux architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "SOTamWNgDKc",
        "title": "AWS Certified Cloud Practitioner Training Course",
        "channel": "freeCodeCamp",
        "duration": "13h 20m",
        "embedUrl": "https://www.youtube.com/embed/SOTamWNgDKc?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/SOTamWNgDKc/hqdefault.jpg"
      },
      {
        "id": "ZtqB5_3gk5o",
        "title": "Linux Administration for Cloud & DevOps Engineers",
        "channel": "freeCodeCamp",
        "duration": "4h 50m",
        "embedUrl": "https://www.youtube.com/embed/ZtqB5_3gk5o?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/ZtqB5_3gk5o/hqdefault.jpg"
      },
      {
        "id": "NKEFW2W32Hg",
        "title": "Microsoft Azure Fundamentals Certification Guide",
        "channel": "freeCodeCamp",
        "duration": "3h 30m",
        "embedUrl": "https://www.youtube.com/embed/NKEFW2W32Hg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/NKEFW2W32Hg/hqdefault.jpg"
      },
      {
        "id": "jpno8FSqpc8",
        "title": "Google Cloud Platform (GCP) Fundamentals",
        "channel": "Google Cloud Tech",
        "duration": "2h 45m",
        "embedUrl": "https://www.youtube.com/embed/jpno8FSqpc8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/jpno8FSqpc8/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-4",
    "title": "Complete Generative AI with LLMs, LangChain & OpenAI API",
    "slug": "complete-generative-ai-with-llms-langchain-openai-api",
    "subtitle": "Build production RAG pipelines, autonomous agents, embeddings, and chat interfaces",
    "description": "Build production RAG pipelines, autonomous agents, embeddings, and chat interfaces. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/mEsleV16qdo?enablejsapi=1&rel=0",
    "price": 3999,
    "originalPrice": 10999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 320,
    "totalStudents": 1200,
    "durationHours": 45,
    "totalLessons": 99,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-4-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-4-les-1",
            "chapterId": "course-4-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-4-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-4-les-2",
            "chapterId": "course-4-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/aywZrzNaKjs?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-4-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-4-les-3",
            "chapterId": "course-4-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/ySEx_BqxvVU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-4-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-4-les-4",
            "chapterId": "course-4-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/e-gwvmhyU7A?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-4-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-4-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-4-les-5",
            "chapterId": "course-4-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-4-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-4-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "GenAI",
      "LangChain",
      "LLMs",
      "OpenAI",
      "Python"
    ],
    "whatYouWillLearn": [
      "Master industry-grade GenAI architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "mEsleV16qdo",
        "title": "Complete Generative AI Course with LangChain & OpenAI",
        "channel": "Krish Naik",
        "duration": "6h 30m",
        "embedUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/mEsleV16qdo/hqdefault.jpg"
      },
      {
        "id": "aywZrzNaKjs",
        "title": "Building Production Autonomous Agents with LangGraph & CrewAI",
        "channel": "freeCodeCamp",
        "duration": "3h 45m",
        "embedUrl": "https://www.youtube.com/embed/aywZrzNaKjs?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/aywZrzNaKjs/hqdefault.jpg"
      },
      {
        "id": "ySEx_BqxvVU",
        "title": "Vector Databases, Pinecone & Hybrid Retrieval RAG",
        "channel": "James Briggs",
        "duration": "2h 20m",
        "embedUrl": "https://www.youtube.com/embed/ySEx_BqxvVU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/ySEx_BqxvVU/hqdefault.jpg"
      },
      {
        "id": "e-gwvmhyU7A",
        "title": "Fine-Tuning Llama 3 & Open Source LLMs with LoRA",
        "channel": "Weights & Biases",
        "duration": "2h 50m",
        "embedUrl": "https://www.youtube.com/embed/e-gwvmhyU7A?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/e-gwvmhyU7A/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-2",
    "title": "Deep Learning with PyTorch: Computer Vision & Transformer Models",
    "slug": "deep-learning-with-pytorch-computer-vision-transformer-models",
    "subtitle": "CNNs, Attention mechanisms, ResNet, ViT, and training state-of-the-art vision models",
    "description": "CNNs, Attention mechanisms, ResNet, ViT, and training state-of-the-art vision models. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/V_xro1bcAuA?enablejsapi=1&rel=0",
    "price": 3799,
    "originalPrice": 9999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 405,
    "totalStudents": 1580,
    "durationHours": 48,
    "totalLessons": 105,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-data-2-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-2-les-1",
            "chapterId": "course-data-2-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/V_xro1bcAuA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-2-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-2-les-2",
            "chapterId": "course-data-2-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/TQQlZhbC5ps?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-2-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-2-les-3",
            "chapterId": "course-data-2-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/oXlwWbU8l2o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-2-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-2-les-4",
            "chapterId": "course-data-2-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/06-AZXmwHjo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-2-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-2-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-2-les-5",
            "chapterId": "course-data-2-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/V_xro1bcAuA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-2-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-2-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "PyTorch",
      "Deep Learning",
      "Computer Vision",
      "AI"
    ],
    "whatYouWillLearn": [
      "Master industry-grade PyTorch architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "V_xro1bcAuA",
        "title": "PyTorch for Deep Learning & Computer Vision Bootcamp",
        "channel": "Daniel Bourke",
        "duration": "8h 15m",
        "embedUrl": "https://www.youtube.com/embed/V_xro1bcAuA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/V_xro1bcAuA/hqdefault.jpg"
      },
      {
        "id": "TQQlZhbC5ps",
        "title": "Attention Is All You Need: Transformers Deep Dive",
        "channel": "Yannic Kilcher",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/TQQlZhbC5ps?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/TQQlZhbC5ps/hqdefault.jpg"
      },
      {
        "id": "oXlwWbU8l2o",
        "title": "Computer Vision with OpenCV & YOLOv9",
        "channel": "Murtaza's Workshop",
        "duration": "3h 45m",
        "embedUrl": "https://www.youtube.com/embed/oXlwWbU8l2o?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/oXlwWbU8l2o/hqdefault.jpg"
      },
      {
        "id": "06-AZXmwHjo",
        "title": "MLOps: Deploying Models to Production with MLflow",
        "channel": "freeCodeCamp",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/06-AZXmwHjo?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/06-AZXmwHjo/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-3",
    "title": "Data Engineering with Apache Spark, Kafka & Databricks",
    "slug": "data-engineering-with-apache-spark-kafka-databricks",
    "subtitle": "Build petabyte-scale real-time streaming data pipelines with Lakehouse architecture",
    "description": "Build petabyte-scale real-time streaming data pipelines with Lakehouse architecture. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?enablejsapi=1&rel=0",
    "price": 3899,
    "originalPrice": 10499,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 490,
    "totalStudents": 1960,
    "durationHours": 50,
    "totalLessons": 110,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-data-3-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-3-les-1",
            "chapterId": "course-data-3-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-3-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-3-les-2",
            "chapterId": "course-data-3-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-3-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-3-les-3",
            "chapterId": "course-data-3-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-3-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-3-les-4",
            "chapterId": "course-data-3-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-3-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-3-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-3-les-5",
            "chapterId": "course-data-3-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-3-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-3-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Data Engineering",
      "Apache Spark",
      "Kafka",
      "Databricks"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Data Engineering architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "LHBE6Q9XlzI",
        "title": "Python for Beginners & Data Science",
        "channel": "freeCodeCamp",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/LHBE6Q9XlzI/hqdefault.jpg"
      },
      {
        "id": "r-uOLxNrNk8",
        "title": "Pandas & NumPy for Data Analysis",
        "channel": "Keith Galli",
        "duration": "3h 15m",
        "embedUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/r-uOLxNrNk8/hqdefault.jpg"
      },
      {
        "id": "i_LwzRVP7bg",
        "title": "Machine Learning from Scratch with Scikit-Learn",
        "channel": "freeCodeCamp",
        "duration": "5h 50m",
        "embedUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/i_LwzRVP7bg/hqdefault.jpg"
      },
      {
        "id": "7eh4d6sabA0",
        "title": "Exploratory Data Analysis & Feature Engineering",
        "channel": "Ken Jee",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/7eh4d6sabA0/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-4",
    "title": "Machine Learning from Scratch with Python, NumPy & Scikit-Learn",
    "slug": "machine-learning-from-scratch-with-python-numpy-scikit-learn",
    "subtitle": "Regression, classification, random forests, clustering, and mathematical foundations",
    "description": "Regression, classification, random forests, clustering, and mathematical foundations. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Beginner",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?enablejsapi=1&rel=0",
    "price": 2499,
    "originalPrice": 6999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 575,
    "totalStudents": 2340,
    "durationHours": 36,
    "totalLessons": 79,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_4",
      "name": "Ananya Sengupta",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      "title": "Staff AI Research Scientist & ML Lead",
      "rating": 4.92,
      "studentsCount": 42100,
      "coursesCount": 7,
      "bio": "AI researcher and author with expertise in LLM fine-tuning, Transformers, and scalable PyTorch models."
    },
    "chapters": [
      {
        "id": "course-data-4-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-4-les-1",
            "chapterId": "course-data-4-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-4-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-4-les-2",
            "chapterId": "course-data-4-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-4-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-4-les-3",
            "chapterId": "course-data-4-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-4-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-4-les-4",
            "chapterId": "course-data-4-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-4-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-4-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-4-les-5",
            "chapterId": "course-data-4-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-4-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-4-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Machine Learning",
      "Python",
      "NumPy",
      "Scikit-Learn"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Machine Learning architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "LHBE6Q9XlzI",
        "title": "Python for Beginners & Data Science",
        "channel": "freeCodeCamp",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/LHBE6Q9XlzI/hqdefault.jpg"
      },
      {
        "id": "r-uOLxNrNk8",
        "title": "Pandas & NumPy for Data Analysis",
        "channel": "Keith Galli",
        "duration": "3h 15m",
        "embedUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/r-uOLxNrNk8/hqdefault.jpg"
      },
      {
        "id": "i_LwzRVP7bg",
        "title": "Machine Learning from Scratch with Scikit-Learn",
        "channel": "freeCodeCamp",
        "duration": "5h 50m",
        "embedUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/i_LwzRVP7bg/hqdefault.jpg"
      },
      {
        "id": "7eh4d6sabA0",
        "title": "Exploratory Data Analysis & Feature Engineering",
        "channel": "Ken Jee",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/7eh4d6sabA0/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-5",
    "title": "Prompt Engineering & Vector Databases (Pinecone, Chroma, Milvus)",
    "slug": "prompt-engineering-vector-databases-pinecone-chroma-milvus",
    "subtitle": "Cosine similarity, dense semantic retrieval, hybrid search, and prompt optimization",
    "description": "Cosine similarity, dense semantic retrieval, hybrid search, and prompt optimization. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "All Levels",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?enablejsapi=1&rel=0",
    "price": 2199,
    "originalPrice": 5999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 660,
    "totalStudents": 2720,
    "durationHours": 20,
    "totalLessons": 44,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_5",
      "name": "Rahul Nair",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "title": "VP of Product & Ex-Flipkart Director",
      "rating": 4.85,
      "studentsCount": 22400,
      "coursesCount": 5,
      "bio": "12+ years scaling consumer tech products from zero to 10M+ daily active users across India."
    },
    "chapters": [
      {
        "id": "course-data-5-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-5-les-1",
            "chapterId": "course-data-5-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-5-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-5-les-2",
            "chapterId": "course-data-5-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-5-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-5-les-3",
            "chapterId": "course-data-5-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-5-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-5-les-4",
            "chapterId": "course-data-5-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-5-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-5-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-5-les-5",
            "chapterId": "course-data-5-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-5-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-5-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Vector DB",
      "Pinecone",
      "Chroma",
      "Embeddings"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Vector DB architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "LHBE6Q9XlzI",
        "title": "Python for Beginners & Data Science",
        "channel": "freeCodeCamp",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/LHBE6Q9XlzI/hqdefault.jpg"
      },
      {
        "id": "r-uOLxNrNk8",
        "title": "Pandas & NumPy for Data Analysis",
        "channel": "Keith Galli",
        "duration": "3h 15m",
        "embedUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/r-uOLxNrNk8/hqdefault.jpg"
      },
      {
        "id": "i_LwzRVP7bg",
        "title": "Machine Learning from Scratch with Scikit-Learn",
        "channel": "freeCodeCamp",
        "duration": "5h 50m",
        "embedUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/i_LwzRVP7bg/hqdefault.jpg"
      },
      {
        "id": "7eh4d6sabA0",
        "title": "Exploratory Data Analysis & Feature Engineering",
        "channel": "Ken Jee",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/7eh4d6sabA0/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-6",
    "title": "MLOps: Deploying & Monitoring ML Models with MLflow & KServe",
    "slug": "mlops-deploying-monitoring-ml-models-with-mlflow-kserve",
    "subtitle": "Model registries, data drift detection, Triton inference server, and model pipelines",
    "description": "Model registries, data drift detection, Triton inference server, and model pipelines. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/V_xro1bcAuA?enablejsapi=1&rel=0",
    "price": 3499,
    "originalPrice": 9499,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 745,
    "totalStudents": 3100,
    "durationHours": 32,
    "totalLessons": 70,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_6",
      "name": "Sneha Reddy",
      "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
      "title": "DevOps & Site Reliability Lead",
      "rating": 4.91,
      "studentsCount": 31000,
      "coursesCount": 6,
      "bio": "Kubernetes contributor and multi-cloud infrastructure architect for high-throughput FinTech pipelines."
    },
    "chapters": [
      {
        "id": "course-data-6-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-6-les-1",
            "chapterId": "course-data-6-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/V_xro1bcAuA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-6-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-6-les-2",
            "chapterId": "course-data-6-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/TQQlZhbC5ps?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-6-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-6-les-3",
            "chapterId": "course-data-6-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/oXlwWbU8l2o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-6-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-6-les-4",
            "chapterId": "course-data-6-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/06-AZXmwHjo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-6-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-6-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-6-les-5",
            "chapterId": "course-data-6-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/V_xro1bcAuA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-6-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-6-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "MLOps",
      "MLflow",
      "Kubernetes",
      "Model Serving"
    ],
    "whatYouWillLearn": [
      "Master industry-grade MLOps architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "V_xro1bcAuA",
        "title": "PyTorch for Deep Learning & Computer Vision Bootcamp",
        "channel": "Daniel Bourke",
        "duration": "8h 15m",
        "embedUrl": "https://www.youtube.com/embed/V_xro1bcAuA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/V_xro1bcAuA/hqdefault.jpg"
      },
      {
        "id": "TQQlZhbC5ps",
        "title": "Attention Is All You Need: Transformers Deep Dive",
        "channel": "Yannic Kilcher",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/TQQlZhbC5ps?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/TQQlZhbC5ps/hqdefault.jpg"
      },
      {
        "id": "oXlwWbU8l2o",
        "title": "Computer Vision with OpenCV & YOLOv9",
        "channel": "Murtaza's Workshop",
        "duration": "3h 45m",
        "embedUrl": "https://www.youtube.com/embed/oXlwWbU8l2o?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/oXlwWbU8l2o/hqdefault.jpg"
      },
      {
        "id": "06-AZXmwHjo",
        "title": "MLOps: Deploying Models to Production with MLflow",
        "channel": "freeCodeCamp",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/06-AZXmwHjo?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/06-AZXmwHjo/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-7",
    "title": "NLP & Large Language Models: Fine-Tuning Llama 3 & Mistral",
    "slug": "nlp-large-language-models-fine-tuning-llama-3-mistral",
    "subtitle": "LoRA, QLoRA, PEFT, tokenization, Hugging Face Transformers, and DPO alignment",
    "description": "LoRA, QLoRA, PEFT, tokenization, Hugging Face Transformers, and DPO alignment. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?enablejsapi=1&rel=0",
    "price": 4299,
    "originalPrice": 11999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 830,
    "totalStudents": 3480,
    "durationHours": 40,
    "totalLessons": 88,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-data-7-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-7-les-1",
            "chapterId": "course-data-7-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-7-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-7-les-2",
            "chapterId": "course-data-7-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-7-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-7-les-3",
            "chapterId": "course-data-7-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-7-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-7-les-4",
            "chapterId": "course-data-7-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-7-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-7-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-7-les-5",
            "chapterId": "course-data-7-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-7-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-7-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "NLP",
      "LLM Fine-Tuning",
      "HuggingFace",
      "LoRA"
    ],
    "whatYouWillLearn": [
      "Master industry-grade NLP architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "LHBE6Q9XlzI",
        "title": "Python for Beginners & Data Science",
        "channel": "freeCodeCamp",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/LHBE6Q9XlzI/hqdefault.jpg"
      },
      {
        "id": "r-uOLxNrNk8",
        "title": "Pandas & NumPy for Data Analysis",
        "channel": "Keith Galli",
        "duration": "3h 15m",
        "embedUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/r-uOLxNrNk8/hqdefault.jpg"
      },
      {
        "id": "i_LwzRVP7bg",
        "title": "Machine Learning from Scratch with Scikit-Learn",
        "channel": "freeCodeCamp",
        "duration": "5h 50m",
        "embedUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/i_LwzRVP7bg/hqdefault.jpg"
      },
      {
        "id": "7eh4d6sabA0",
        "title": "Exploratory Data Analysis & Feature Engineering",
        "channel": "Ken Jee",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/7eh4d6sabA0/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-8",
    "title": "SQL & Advanced Analytics for Business Intelligence & Warehousing",
    "slug": "sql-advanced-analytics-for-business-intelligence-warehousing",
    "subtitle": "Window functions, CTEs, snowflake schemas, DBT transformations, and analytical dashboards",
    "description": "Window functions, CTEs, snowflake schemas, DBT transformations, and analytical dashboards. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Beginner",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/mEsleV16qdo?enablejsapi=1&rel=0",
    "price": 1899,
    "originalPrice": 4999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 915,
    "totalStudents": 3860,
    "durationHours": 26,
    "totalLessons": 57,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-data-8-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-8-les-1",
            "chapterId": "course-data-8-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-8-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-8-les-2",
            "chapterId": "course-data-8-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/aywZrzNaKjs?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-8-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-8-les-3",
            "chapterId": "course-data-8-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/ySEx_BqxvVU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-8-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-8-les-4",
            "chapterId": "course-data-8-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/e-gwvmhyU7A?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-8-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-8-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-8-les-5",
            "chapterId": "course-data-8-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-8-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-8-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "SQL",
      "Analytics",
      "PostgreSQL",
      "Data Warehousing"
    ],
    "whatYouWillLearn": [
      "Master industry-grade SQL architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "mEsleV16qdo",
        "title": "Complete Generative AI Course with LangChain & OpenAI",
        "channel": "Krish Naik",
        "duration": "6h 30m",
        "embedUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/mEsleV16qdo/hqdefault.jpg"
      },
      {
        "id": "aywZrzNaKjs",
        "title": "Building Production Autonomous Agents with LangGraph & CrewAI",
        "channel": "freeCodeCamp",
        "duration": "3h 45m",
        "embedUrl": "https://www.youtube.com/embed/aywZrzNaKjs?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/aywZrzNaKjs/hqdefault.jpg"
      },
      {
        "id": "ySEx_BqxvVU",
        "title": "Vector Databases, Pinecone & Hybrid Retrieval RAG",
        "channel": "James Briggs",
        "duration": "2h 20m",
        "embedUrl": "https://www.youtube.com/embed/ySEx_BqxvVU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/ySEx_BqxvVU/hqdefault.jpg"
      },
      {
        "id": "e-gwvmhyU7A",
        "title": "Fine-Tuning Llama 3 & Open Source LLMs with LoRA",
        "channel": "Weights & Biases",
        "duration": "2h 50m",
        "embedUrl": "https://www.youtube.com/embed/e-gwvmhyU7A?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/e-gwvmhyU7A/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-9",
    "title": "Time Series Forecasting & Financial Analytics for Indian Markets",
    "slug": "time-series-forecasting-financial-analytics-for-indian-markets",
    "subtitle": "ARIMA, Prophet, LSTM networks, and quantitative algorithmic trading indicators",
    "description": "ARIMA, Prophet, LSTM networks, and quantitative algorithmic trading indicators. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?enablejsapi=1&rel=0",
    "price": 3199,
    "originalPrice": 8499,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 1000,
    "totalStudents": 4240,
    "durationHours": 30,
    "totalLessons": 66,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-data-9-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-9-les-1",
            "chapterId": "course-data-9-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-9-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-9-les-2",
            "chapterId": "course-data-9-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-9-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-9-les-3",
            "chapterId": "course-data-9-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-9-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-9-les-4",
            "chapterId": "course-data-9-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-9-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-9-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-9-les-5",
            "chapterId": "course-data-9-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-9-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-9-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Time Series",
      "Finance",
      "Python",
      "Forecasting"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Time Series architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "LHBE6Q9XlzI",
        "title": "Python for Beginners & Data Science",
        "channel": "freeCodeCamp",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/LHBE6Q9XlzI/hqdefault.jpg"
      },
      {
        "id": "r-uOLxNrNk8",
        "title": "Pandas & NumPy for Data Analysis",
        "channel": "Keith Galli",
        "duration": "3h 15m",
        "embedUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/r-uOLxNrNk8/hqdefault.jpg"
      },
      {
        "id": "i_LwzRVP7bg",
        "title": "Machine Learning from Scratch with Scikit-Learn",
        "channel": "freeCodeCamp",
        "duration": "5h 50m",
        "embedUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/i_LwzRVP7bg/hqdefault.jpg"
      },
      {
        "id": "7eh4d6sabA0",
        "title": "Exploratory Data Analysis & Feature Engineering",
        "channel": "Ken Jee",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/7eh4d6sabA0/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-10",
    "title": "Computer Vision with OpenCV, YOLOv9 & Deep Learning",
    "slug": "computer-vision-with-opencv-yolov9-deep-learning",
    "subtitle": "Object detection, real-time edge tracking, facial recognition, and image segmentation",
    "description": "Object detection, real-time edge tracking, facial recognition, and image segmentation. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/V_xro1bcAuA?enablejsapi=1&rel=0",
    "price": 2999,
    "originalPrice": 7999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 1085,
    "totalStudents": 4620,
    "durationHours": 34,
    "totalLessons": 74,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_4",
      "name": "Ananya Sengupta",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      "title": "Staff AI Research Scientist & ML Lead",
      "rating": 4.92,
      "studentsCount": 42100,
      "coursesCount": 7,
      "bio": "AI researcher and author with expertise in LLM fine-tuning, Transformers, and scalable PyTorch models."
    },
    "chapters": [
      {
        "id": "course-data-10-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-10-les-1",
            "chapterId": "course-data-10-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/V_xro1bcAuA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-10-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-10-les-2",
            "chapterId": "course-data-10-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/TQQlZhbC5ps?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-10-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-10-les-3",
            "chapterId": "course-data-10-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/oXlwWbU8l2o?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-10-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-10-les-4",
            "chapterId": "course-data-10-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/06-AZXmwHjo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-10-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-10-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-10-les-5",
            "chapterId": "course-data-10-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/V_xro1bcAuA?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-10-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-10-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Computer Vision",
      "OpenCV",
      "YOLO",
      "Python"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Computer Vision architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "V_xro1bcAuA",
        "title": "PyTorch for Deep Learning & Computer Vision Bootcamp",
        "channel": "Daniel Bourke",
        "duration": "8h 15m",
        "embedUrl": "https://www.youtube.com/embed/V_xro1bcAuA?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/V_xro1bcAuA/hqdefault.jpg"
      },
      {
        "id": "TQQlZhbC5ps",
        "title": "Attention Is All You Need: Transformers Deep Dive",
        "channel": "Yannic Kilcher",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/TQQlZhbC5ps?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/TQQlZhbC5ps/hqdefault.jpg"
      },
      {
        "id": "oXlwWbU8l2o",
        "title": "Computer Vision with OpenCV & YOLOv9",
        "channel": "Murtaza's Workshop",
        "duration": "3h 45m",
        "embedUrl": "https://www.youtube.com/embed/oXlwWbU8l2o?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/oXlwWbU8l2o/hqdefault.jpg"
      },
      {
        "id": "06-AZXmwHjo",
        "title": "MLOps: Deploying Models to Production with MLflow",
        "channel": "freeCodeCamp",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/06-AZXmwHjo?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/06-AZXmwHjo/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-11",
    "title": "Big Data Architecture with Hadoop, Hive & Snowflake",
    "slug": "big-data-architecture-with-hadoop-hive-snowflake",
    "subtitle": "Distributed storage, MapReduce, columnar queries, and cloud data warehouse scaling",
    "description": "Distributed storage, MapReduce, columnar queries, and cloud data warehouse scaling. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?enablejsapi=1&rel=0",
    "price": 3399,
    "originalPrice": 8999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 1170,
    "totalStudents": 5000,
    "durationHours": 38,
    "totalLessons": 83,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_5",
      "name": "Rahul Nair",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "title": "VP of Product & Ex-Flipkart Director",
      "rating": 4.85,
      "studentsCount": 22400,
      "coursesCount": 5,
      "bio": "12+ years scaling consumer tech products from zero to 10M+ daily active users across India."
    },
    "chapters": [
      {
        "id": "course-data-11-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-11-les-1",
            "chapterId": "course-data-11-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-11-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-11-les-2",
            "chapterId": "course-data-11-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-11-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-11-les-3",
            "chapterId": "course-data-11-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-11-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-11-les-4",
            "chapterId": "course-data-11-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-11-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-11-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-11-les-5",
            "chapterId": "course-data-11-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-11-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-11-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Big Data",
      "Snowflake",
      "Hadoop",
      "Data Pipeline"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Big Data architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "LHBE6Q9XlzI",
        "title": "Python for Beginners & Data Science",
        "channel": "freeCodeCamp",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/LHBE6Q9XlzI/hqdefault.jpg"
      },
      {
        "id": "r-uOLxNrNk8",
        "title": "Pandas & NumPy for Data Analysis",
        "channel": "Keith Galli",
        "duration": "3h 15m",
        "embedUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/r-uOLxNrNk8/hqdefault.jpg"
      },
      {
        "id": "i_LwzRVP7bg",
        "title": "Machine Learning from Scratch with Scikit-Learn",
        "channel": "freeCodeCamp",
        "duration": "5h 50m",
        "embedUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/i_LwzRVP7bg/hqdefault.jpg"
      },
      {
        "id": "7eh4d6sabA0",
        "title": "Exploratory Data Analysis & Feature Engineering",
        "channel": "Ken Jee",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/7eh4d6sabA0/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-12",
    "title": "Python for Data Analysis & Statistical Modeling with Pandas",
    "slug": "python-for-data-analysis-statistical-modeling-with-pandas",
    "subtitle": "Data wrangling, cleaning messy CSVs, EDA, Seaborn visualization, and hypothesis testing",
    "description": "Data wrangling, cleaning messy CSVs, EDA, Seaborn visualization, and hypothesis testing. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Beginner",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?enablejsapi=1&rel=0",
    "price": 1799,
    "originalPrice": 4699,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 1255,
    "totalStudents": 5380,
    "durationHours": 22,
    "totalLessons": 48,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_6",
      "name": "Sneha Reddy",
      "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
      "title": "DevOps & Site Reliability Lead",
      "rating": 4.91,
      "studentsCount": 31000,
      "coursesCount": 6,
      "bio": "Kubernetes contributor and multi-cloud infrastructure architect for high-throughput FinTech pipelines."
    },
    "chapters": [
      {
        "id": "course-data-12-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-12-les-1",
            "chapterId": "course-data-12-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-12-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-12-les-2",
            "chapterId": "course-data-12-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-12-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-12-les-3",
            "chapterId": "course-data-12-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-12-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-12-les-4",
            "chapterId": "course-data-12-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-12-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-12-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-12-les-5",
            "chapterId": "course-data-12-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-12-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-12-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Python",
      "Pandas",
      "Data Analysis",
      "Statistics"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Python architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "LHBE6Q9XlzI",
        "title": "Python for Beginners & Data Science",
        "channel": "freeCodeCamp",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/LHBE6Q9XlzI?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/LHBE6Q9XlzI/hqdefault.jpg"
      },
      {
        "id": "r-uOLxNrNk8",
        "title": "Pandas & NumPy for Data Analysis",
        "channel": "Keith Galli",
        "duration": "3h 15m",
        "embedUrl": "https://www.youtube.com/embed/r-uOLxNrNk8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/r-uOLxNrNk8/hqdefault.jpg"
      },
      {
        "id": "i_LwzRVP7bg",
        "title": "Machine Learning from Scratch with Scikit-Learn",
        "channel": "freeCodeCamp",
        "duration": "5h 50m",
        "embedUrl": "https://www.youtube.com/embed/i_LwzRVP7bg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/i_LwzRVP7bg/hqdefault.jpg"
      },
      {
        "id": "7eh4d6sabA0",
        "title": "Exploratory Data Analysis & Feature Engineering",
        "channel": "Ken Jee",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/7eh4d6sabA0?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/7eh4d6sabA0/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-13",
    "title": "Reinforcement Learning & Autonomous AI Agents",
    "slug": "reinforcement-learning-autonomous-ai-agents",
    "subtitle": "Markov Decision Processes, Q-Learning, PPO, Gym environments, and agentic reasoning",
    "description": "Markov Decision Processes, Q-Learning, PPO, Gym environments, and agentic reasoning. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/mEsleV16qdo?enablejsapi=1&rel=0",
    "price": 3699,
    "originalPrice": 9899,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 1340,
    "totalStudents": 5760,
    "durationHours": 35,
    "totalLessons": 77,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-data-13-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-13-les-1",
            "chapterId": "course-data-13-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-13-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-13-les-2",
            "chapterId": "course-data-13-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/aywZrzNaKjs?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-13-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-13-les-3",
            "chapterId": "course-data-13-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/ySEx_BqxvVU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-13-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-13-les-4",
            "chapterId": "course-data-13-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/e-gwvmhyU7A?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-13-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-13-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-13-les-5",
            "chapterId": "course-data-13-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-13-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-13-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Reinforcement Learning",
      "RL",
      "AI Agents",
      "Python"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Reinforcement Learning architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "mEsleV16qdo",
        "title": "Complete Generative AI Course with LangChain & OpenAI",
        "channel": "Krish Naik",
        "duration": "6h 30m",
        "embedUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/mEsleV16qdo/hqdefault.jpg"
      },
      {
        "id": "aywZrzNaKjs",
        "title": "Building Production Autonomous Agents with LangGraph & CrewAI",
        "channel": "freeCodeCamp",
        "duration": "3h 45m",
        "embedUrl": "https://www.youtube.com/embed/aywZrzNaKjs?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/aywZrzNaKjs/hqdefault.jpg"
      },
      {
        "id": "ySEx_BqxvVU",
        "title": "Vector Databases, Pinecone & Hybrid Retrieval RAG",
        "channel": "James Briggs",
        "duration": "2h 20m",
        "embedUrl": "https://www.youtube.com/embed/ySEx_BqxvVU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/ySEx_BqxvVU/hqdefault.jpg"
      },
      {
        "id": "e-gwvmhyU7A",
        "title": "Fine-Tuning Llama 3 & Open Source LLMs with LoRA",
        "channel": "Weights & Biases",
        "duration": "2h 50m",
        "embedUrl": "https://www.youtube.com/embed/e-gwvmhyU7A?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/e-gwvmhyU7A/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-data-14",
    "title": "Autonomous AI Agents: Building Multi-Agent Systems with CrewAI",
    "slug": "autonomous-ai-agents-building-multi-agent-systems-with-crewai",
    "subtitle": "Task delegation, tool use, memory caching, and building autonomous research workflows",
    "description": "Task delegation, tool use, memory caching, and building autonomous research workflows. Designed specifically for Indian developers and engineering teams aiming to master Data Science & AI at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Data Science & AI",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/mEsleV16qdo?enablejsapi=1&rel=0",
    "price": 2799,
    "originalPrice": 7499,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 1425,
    "totalStudents": 6140,
    "durationHours": 25,
    "totalLessons": 55,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-data-14-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-data-14-les-1",
            "chapterId": "course-data-14-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-data-14-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-data-14-les-2",
            "chapterId": "course-data-14-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/aywZrzNaKjs?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-data-14-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-data-14-les-3",
            "chapterId": "course-data-14-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/ySEx_BqxvVU?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-data-14-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-data-14-les-4",
            "chapterId": "course-data-14-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/e-gwvmhyU7A?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-data-14-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-data-14-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-data-14-les-5",
            "chapterId": "course-data-14-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-data-14-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-data-14-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "AI Agents",
      "CrewAI",
      "LangChain",
      "Autonomous Systems"
    ],
    "whatYouWillLearn": [
      "Master industry-grade AI Agents architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "mEsleV16qdo",
        "title": "Complete Generative AI Course with LangChain & OpenAI",
        "channel": "Krish Naik",
        "duration": "6h 30m",
        "embedUrl": "https://www.youtube.com/embed/mEsleV16qdo?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/mEsleV16qdo/hqdefault.jpg"
      },
      {
        "id": "aywZrzNaKjs",
        "title": "Building Production Autonomous Agents with LangGraph & CrewAI",
        "channel": "freeCodeCamp",
        "duration": "3h 45m",
        "embedUrl": "https://www.youtube.com/embed/aywZrzNaKjs?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/aywZrzNaKjs/hqdefault.jpg"
      },
      {
        "id": "ySEx_BqxvVU",
        "title": "Vector Databases, Pinecone & Hybrid Retrieval RAG",
        "channel": "James Briggs",
        "duration": "2h 20m",
        "embedUrl": "https://www.youtube.com/embed/ySEx_BqxvVU?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/ySEx_BqxvVU/hqdefault.jpg"
      },
      {
        "id": "e-gwvmhyU7A",
        "title": "Fine-Tuning Llama 3 & Open Source LLMs with LoRA",
        "channel": "Weights & Biases",
        "duration": "2h 50m",
        "embedUrl": "https://www.youtube.com/embed/e-gwvmhyU7A?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/e-gwvmhyU7A/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-cybe-1",
    "title": "CERT-In Compliant Cyber Defense & Threat Intelligence",
    "slug": "cert-in-compliant-cyber-defense-threat-intelligence",
    "subtitle": "Indian regulatory compliance, SOC monitoring, incident response, and national cyber defense",
    "description": "Indian regulatory compliance, SOC monitoring, incident response, and national cyber defense. Designed specifically for Indian developers and engineering teams aiming to master Cybersecurity at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cybersecurity",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?enablejsapi=1&rel=0",
    "price": 3499,
    "originalPrice": 9499,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 320,
    "totalStudents": 1200,
    "durationHours": 42,
    "totalLessons": 92,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-cybe-1-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-cybe-1-les-1",
            "chapterId": "course-cybe-1-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-cybe-1-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-cybe-1-les-2",
            "chapterId": "course-cybe-1-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-cybe-1-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-cybe-1-les-3",
            "chapterId": "course-cybe-1-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-cybe-1-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-cybe-1-les-4",
            "chapterId": "course-cybe-1-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-cybe-1-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-cybe-1-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-cybe-1-les-5",
            "chapterId": "course-cybe-1-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-cybe-1-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-cybe-1-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Cybersecurity",
      "CERT-In",
      "SOC",
      "Incident Response"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Cybersecurity architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "3Kq1MIfTWCE",
        "title": "Full Ethical Hacking Course - Network & Web Defense",
        "channel": "freeCodeCamp",
        "duration": "15h 10m",
        "embedUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/3Kq1MIfTWCE/hqdefault.jpg"
      },
      {
        "id": "2_lswM1S264",
        "title": "Web Application Penetration Testing (OWASP Top 10)",
        "channel": "The Cyber Mentor",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2_lswM1S264/hqdefault.jpg"
      },
      {
        "id": "qiQR5rTSshw",
        "title": "Network Security, Wireshark & Packet Analysis",
        "channel": "NetworkChuck",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/qiQR5rTSshw/hqdefault.jpg"
      },
      {
        "id": "U_p23SqWzdg",
        "title": "SOC Analyst & Incident Response Fundamentals",
        "channel": "John Hammond",
        "duration": "2h 40m",
        "embedUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/U_p23SqWzdg/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-cybe-2",
    "title": "Ethical Hacking & Penetration Testing for Web Applications",
    "slug": "ethical-hacking-penetration-testing-for-web-applications",
    "subtitle": "OWASP Top 10, SQL injection, XSS, CSRF, Burp Suite Pro, and vulnerability reporting",
    "description": "OWASP Top 10, SQL injection, XSS, CSRF, Burp Suite Pro, and vulnerability reporting. Designed specifically for Indian developers and engineering teams aiming to master Cybersecurity at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cybersecurity",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?enablejsapi=1&rel=0",
    "price": 2999,
    "originalPrice": 7999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 405,
    "totalStudents": 1580,
    "durationHours": 38,
    "totalLessons": 83,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-cybe-2-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-cybe-2-les-1",
            "chapterId": "course-cybe-2-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-cybe-2-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-cybe-2-les-2",
            "chapterId": "course-cybe-2-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-cybe-2-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-cybe-2-les-3",
            "chapterId": "course-cybe-2-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-cybe-2-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-cybe-2-les-4",
            "chapterId": "course-cybe-2-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-cybe-2-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-cybe-2-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-cybe-2-les-5",
            "chapterId": "course-cybe-2-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-cybe-2-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-cybe-2-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Ethical Hacking",
      "PenTesting",
      "OWASP",
      "Burp Suite"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Ethical Hacking architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "3Kq1MIfTWCE",
        "title": "Full Ethical Hacking Course - Network & Web Defense",
        "channel": "freeCodeCamp",
        "duration": "15h 10m",
        "embedUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/3Kq1MIfTWCE/hqdefault.jpg"
      },
      {
        "id": "2_lswM1S264",
        "title": "Web Application Penetration Testing (OWASP Top 10)",
        "channel": "The Cyber Mentor",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2_lswM1S264/hqdefault.jpg"
      },
      {
        "id": "qiQR5rTSshw",
        "title": "Network Security, Wireshark & Packet Analysis",
        "channel": "NetworkChuck",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/qiQR5rTSshw/hqdefault.jpg"
      },
      {
        "id": "U_p23SqWzdg",
        "title": "SOC Analyst & Incident Response Fundamentals",
        "channel": "John Hammond",
        "duration": "2h 40m",
        "embedUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/U_p23SqWzdg/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-cybe-3",
    "title": "Network Security & Intrusion Detection with Wireshark & Snort",
    "slug": "network-security-intrusion-detection-with-wireshark-snort",
    "subtitle": "Packet sniffing, firewall policies, VPN tunnels, IDS/IPS rules, and network forensics",
    "description": "Packet sniffing, firewall policies, VPN tunnels, IDS/IPS rules, and network forensics. Designed specifically for Indian developers and engineering teams aiming to master Cybersecurity at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cybersecurity",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?enablejsapi=1&rel=0",
    "price": 2499,
    "originalPrice": 6899,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 490,
    "totalStudents": 1960,
    "durationHours": 28,
    "totalLessons": 61,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-cybe-3-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-cybe-3-les-1",
            "chapterId": "course-cybe-3-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-cybe-3-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-cybe-3-les-2",
            "chapterId": "course-cybe-3-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-cybe-3-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-cybe-3-les-3",
            "chapterId": "course-cybe-3-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-cybe-3-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-cybe-3-les-4",
            "chapterId": "course-cybe-3-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-cybe-3-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-cybe-3-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-cybe-3-les-5",
            "chapterId": "course-cybe-3-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-cybe-3-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-cybe-3-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Network Security",
      "Wireshark",
      "IDS",
      "Firewalls"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Network Security architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "3Kq1MIfTWCE",
        "title": "Full Ethical Hacking Course - Network & Web Defense",
        "channel": "freeCodeCamp",
        "duration": "15h 10m",
        "embedUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/3Kq1MIfTWCE/hqdefault.jpg"
      },
      {
        "id": "2_lswM1S264",
        "title": "Web Application Penetration Testing (OWASP Top 10)",
        "channel": "The Cyber Mentor",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2_lswM1S264/hqdefault.jpg"
      },
      {
        "id": "qiQR5rTSshw",
        "title": "Network Security, Wireshark & Packet Analysis",
        "channel": "NetworkChuck",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/qiQR5rTSshw/hqdefault.jpg"
      },
      {
        "id": "U_p23SqWzdg",
        "title": "SOC Analyst & Incident Response Fundamentals",
        "channel": "John Hammond",
        "duration": "2h 40m",
        "embedUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/U_p23SqWzdg/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-cybe-4",
    "title": "Cloud Security Posture Management & DevSecOps",
    "slug": "cloud-security-posture-management-devsecops",
    "subtitle": "Container vulnerability scanning with Trivy, SAST/DAST in CI pipelines, and IAM least privilege",
    "description": "Container vulnerability scanning with Trivy, SAST/DAST in CI pipelines, and IAM least privilege. Designed specifically for Indian developers and engineering teams aiming to master Cybersecurity at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cybersecurity",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?enablejsapi=1&rel=0",
    "price": 3199,
    "originalPrice": 8499,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 575,
    "totalStudents": 2340,
    "durationHours": 32,
    "totalLessons": 70,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_4",
      "name": "Ananya Sengupta",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      "title": "Staff AI Research Scientist & ML Lead",
      "rating": 4.92,
      "studentsCount": 42100,
      "coursesCount": 7,
      "bio": "AI researcher and author with expertise in LLM fine-tuning, Transformers, and scalable PyTorch models."
    },
    "chapters": [
      {
        "id": "course-cybe-4-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-cybe-4-les-1",
            "chapterId": "course-cybe-4-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-cybe-4-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-cybe-4-les-2",
            "chapterId": "course-cybe-4-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-cybe-4-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-cybe-4-les-3",
            "chapterId": "course-cybe-4-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-cybe-4-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-cybe-4-les-4",
            "chapterId": "course-cybe-4-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-cybe-4-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-cybe-4-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-cybe-4-les-5",
            "chapterId": "course-cybe-4-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-cybe-4-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-cybe-4-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "DevSecOps",
      "Cloud Security",
      "IAM",
      "Trivy"
    ],
    "whatYouWillLearn": [
      "Master industry-grade DevSecOps architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "3Kq1MIfTWCE",
        "title": "Full Ethical Hacking Course - Network & Web Defense",
        "channel": "freeCodeCamp",
        "duration": "15h 10m",
        "embedUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/3Kq1MIfTWCE/hqdefault.jpg"
      },
      {
        "id": "2_lswM1S264",
        "title": "Web Application Penetration Testing (OWASP Top 10)",
        "channel": "The Cyber Mentor",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2_lswM1S264/hqdefault.jpg"
      },
      {
        "id": "qiQR5rTSshw",
        "title": "Network Security, Wireshark & Packet Analysis",
        "channel": "NetworkChuck",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/qiQR5rTSshw/hqdefault.jpg"
      },
      {
        "id": "U_p23SqWzdg",
        "title": "SOC Analyst & Incident Response Fundamentals",
        "channel": "John Hammond",
        "duration": "2h 40m",
        "embedUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/U_p23SqWzdg/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-cybe-5",
    "title": "Certified Information Systems Security Professional (CISSP Prep)",
    "slug": "certified-information-systems-security-professional-cissp-prep",
    "subtitle": "Risk management, asset security, identity access management, and security operations",
    "description": "Risk management, asset security, identity access management, and security operations. Designed specifically for Indian developers and engineering teams aiming to master Cybersecurity at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cybersecurity",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?enablejsapi=1&rel=0",
    "price": 4499,
    "originalPrice": 12499,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 660,
    "totalStudents": 2720,
    "durationHours": 54,
    "totalLessons": 118,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_5",
      "name": "Rahul Nair",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "title": "VP of Product & Ex-Flipkart Director",
      "rating": 4.85,
      "studentsCount": 22400,
      "coursesCount": 5,
      "bio": "12+ years scaling consumer tech products from zero to 10M+ daily active users across India."
    },
    "chapters": [
      {
        "id": "course-cybe-5-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-cybe-5-les-1",
            "chapterId": "course-cybe-5-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-cybe-5-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-cybe-5-les-2",
            "chapterId": "course-cybe-5-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-cybe-5-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-cybe-5-les-3",
            "chapterId": "course-cybe-5-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-cybe-5-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-cybe-5-les-4",
            "chapterId": "course-cybe-5-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-cybe-5-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-cybe-5-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-cybe-5-les-5",
            "chapterId": "course-cybe-5-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-cybe-5-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-cybe-5-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "CISSP",
      "Security Governance",
      "Certification"
    ],
    "whatYouWillLearn": [
      "Master industry-grade CISSP architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "3Kq1MIfTWCE",
        "title": "Full Ethical Hacking Course - Network & Web Defense",
        "channel": "freeCodeCamp",
        "duration": "15h 10m",
        "embedUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/3Kq1MIfTWCE/hqdefault.jpg"
      },
      {
        "id": "2_lswM1S264",
        "title": "Web Application Penetration Testing (OWASP Top 10)",
        "channel": "The Cyber Mentor",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2_lswM1S264/hqdefault.jpg"
      },
      {
        "id": "qiQR5rTSshw",
        "title": "Network Security, Wireshark & Packet Analysis",
        "channel": "NetworkChuck",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/qiQR5rTSshw/hqdefault.jpg"
      },
      {
        "id": "U_p23SqWzdg",
        "title": "SOC Analyst & Incident Response Fundamentals",
        "channel": "John Hammond",
        "duration": "2h 40m",
        "embedUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/U_p23SqWzdg/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-cybe-6",
    "title": "Cryptography, Zero Trust Architecture & API Security",
    "slug": "cryptography-zero-trust-architecture-api-security",
    "subtitle": "Public key infrastructure, OAuth2/OIDC token security, mTLS, and zero trust micro-segmentation",
    "description": "Public key infrastructure, OAuth2/OIDC token security, mTLS, and zero trust micro-segmentation. Designed specifically for Indian developers and engineering teams aiming to master Cybersecurity at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Cybersecurity",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?enablejsapi=1&rel=0",
    "price": 2899,
    "originalPrice": 7699,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 745,
    "totalStudents": 3100,
    "durationHours": 30,
    "totalLessons": 66,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_6",
      "name": "Sneha Reddy",
      "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
      "title": "DevOps & Site Reliability Lead",
      "rating": 4.91,
      "studentsCount": 31000,
      "coursesCount": 6,
      "bio": "Kubernetes contributor and multi-cloud infrastructure architect for high-throughput FinTech pipelines."
    },
    "chapters": [
      {
        "id": "course-cybe-6-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-cybe-6-les-1",
            "chapterId": "course-cybe-6-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-cybe-6-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-cybe-6-les-2",
            "chapterId": "course-cybe-6-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-cybe-6-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-cybe-6-les-3",
            "chapterId": "course-cybe-6-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-cybe-6-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-cybe-6-les-4",
            "chapterId": "course-cybe-6-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-cybe-6-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-cybe-6-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-cybe-6-les-5",
            "chapterId": "course-cybe-6-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-cybe-6-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-cybe-6-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Cryptography",
      "Zero Trust",
      "OAuth2",
      "API Security"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Cryptography architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "3Kq1MIfTWCE",
        "title": "Full Ethical Hacking Course - Network & Web Defense",
        "channel": "freeCodeCamp",
        "duration": "15h 10m",
        "embedUrl": "https://www.youtube.com/embed/3Kq1MIfTWCE?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/3Kq1MIfTWCE/hqdefault.jpg"
      },
      {
        "id": "2_lswM1S264",
        "title": "Web Application Penetration Testing (OWASP Top 10)",
        "channel": "The Cyber Mentor",
        "duration": "4h 25m",
        "embedUrl": "https://www.youtube.com/embed/2_lswM1S264?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2_lswM1S264/hqdefault.jpg"
      },
      {
        "id": "qiQR5rTSshw",
        "title": "Network Security, Wireshark & Packet Analysis",
        "channel": "NetworkChuck",
        "duration": "3h 10m",
        "embedUrl": "https://www.youtube.com/embed/qiQR5rTSshw?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/qiQR5rTSshw/hqdefault.jpg"
      },
      {
        "id": "U_p23SqWzdg",
        "title": "SOC Analyst & Incident Response Fundamentals",
        "channel": "John Hammond",
        "duration": "2h 40m",
        "embedUrl": "https://www.youtube.com/embed/U_p23SqWzdg?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/U_p23SqWzdg/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-busi-1",
    "title": "Tech Product Management: From Idea to ₹100 Cr ARR",
    "slug": "tech-product-management-from-idea-to-100-cr-arr",
    "subtitle": "Product roadmaps, user metrics, PRDs, monetization strategies, and Indian SaaS growth",
    "description": "Product roadmaps, user metrics, PRDs, monetization strategies, and Indian SaaS growth. Designed specifically for Indian developers and engineering teams aiming to master Business & Management at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Business & Management",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?enablejsapi=1&rel=0",
    "price": 3299,
    "originalPrice": 8999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 320,
    "totalStudents": 1200,
    "durationHours": 36,
    "totalLessons": 79,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-busi-1-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-busi-1-les-1",
            "chapterId": "course-busi-1-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-busi-1-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-busi-1-les-2",
            "chapterId": "course-busi-1-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-busi-1-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-busi-1-les-3",
            "chapterId": "course-busi-1-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-busi-1-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-busi-1-les-4",
            "chapterId": "course-busi-1-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-busi-1-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-busi-1-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-busi-1-les-5",
            "chapterId": "course-busi-1-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-busi-1-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-busi-1-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Product Management",
      "PM",
      "Strategy",
      "SaaS"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Product Management architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "dwh50iO8y8U",
        "title": "Product Management Full Course - From Idea to Launch",
        "channel": "freeCodeCamp",
        "duration": "4h 45m",
        "embedUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dwh50iO8y8U/hqdefault.jpg"
      },
      {
        "id": "2Vt7Ik8Ubl8",
        "title": "Scrum Master & Agile Leadership Masterclass",
        "channel": "Agile Academy",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2Vt7Ik8Ubl8/hqdefault.jpg"
      },
      {
        "id": "v9qj7lZzVv4",
        "title": "FinTech Ecosystem & Digital Payments Architecture in India",
        "channel": "FinTech Insider",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/v9qj7lZzVv4/hqdefault.jpg"
      },
      {
        "id": "bNpx7gpSqbY",
        "title": "Startup Valuation, Cap Tables & Venture Capital Math",
        "channel": "Slidebean",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bNpx7gpSqbY/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-busi-2",
    "title": "Agile & Scrum Leadership for Software Engineering Teams",
    "slug": "agile-scrum-leadership-for-software-engineering-teams",
    "subtitle": "Sprint planning, Jira workflows, burndown charts, retrospective facilitation, and team coaching",
    "description": "Sprint planning, Jira workflows, burndown charts, retrospective facilitation, and team coaching. Designed specifically for Indian developers and engineering teams aiming to master Business & Management at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Business & Management",
    "level": "All Levels",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?enablejsapi=1&rel=0",
    "price": 2199,
    "originalPrice": 5799,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 405,
    "totalStudents": 1580,
    "durationHours": 22,
    "totalLessons": 48,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-busi-2-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-busi-2-les-1",
            "chapterId": "course-busi-2-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-busi-2-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-busi-2-les-2",
            "chapterId": "course-busi-2-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-busi-2-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-busi-2-les-3",
            "chapterId": "course-busi-2-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-busi-2-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-busi-2-les-4",
            "chapterId": "course-busi-2-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-busi-2-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-busi-2-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-busi-2-les-5",
            "chapterId": "course-busi-2-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-busi-2-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-busi-2-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Agile",
      "Scrum",
      "Jira",
      "Team Leadership"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Agile architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": true,
    "relatedVideos": [
      {
        "id": "dwh50iO8y8U",
        "title": "Product Management Full Course - From Idea to Launch",
        "channel": "freeCodeCamp",
        "duration": "4h 45m",
        "embedUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dwh50iO8y8U/hqdefault.jpg"
      },
      {
        "id": "2Vt7Ik8Ubl8",
        "title": "Scrum Master & Agile Leadership Masterclass",
        "channel": "Agile Academy",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2Vt7Ik8Ubl8/hqdefault.jpg"
      },
      {
        "id": "v9qj7lZzVv4",
        "title": "FinTech Ecosystem & Digital Payments Architecture in India",
        "channel": "FinTech Insider",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/v9qj7lZzVv4/hqdefault.jpg"
      },
      {
        "id": "bNpx7gpSqbY",
        "title": "Startup Valuation, Cap Tables & Venture Capital Math",
        "channel": "Slidebean",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bNpx7gpSqbY/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-busi-3",
    "title": "Fintech Ventures & Digital Banking in India (UPI & Account Aggregator)",
    "slug": "fintech-ventures-digital-banking-in-india-upi-account-aggregator",
    "subtitle": "Regulatory sandbox, NPCI architecture, lending tech, KYC compliance, and payment gateways",
    "description": "Regulatory sandbox, NPCI architecture, lending tech, KYC compliance, and payment gateways. Designed specifically for Indian developers and engineering teams aiming to master Business & Management at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Business & Management",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?enablejsapi=1&rel=0",
    "price": 3699,
    "originalPrice": 9899,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 490,
    "totalStudents": 1960,
    "durationHours": 30,
    "totalLessons": 66,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-busi-3-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-busi-3-les-1",
            "chapterId": "course-busi-3-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-busi-3-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-busi-3-les-2",
            "chapterId": "course-busi-3-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-busi-3-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-busi-3-les-3",
            "chapterId": "course-busi-3-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-busi-3-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-busi-3-les-4",
            "chapterId": "course-busi-3-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-busi-3-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-busi-3-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-busi-3-les-5",
            "chapterId": "course-busi-3-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-busi-3-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-busi-3-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Fintech",
      "UPI",
      "Banking Tech",
      "NPCI"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Fintech architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "dwh50iO8y8U",
        "title": "Product Management Full Course - From Idea to Launch",
        "channel": "freeCodeCamp",
        "duration": "4h 45m",
        "embedUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dwh50iO8y8U/hqdefault.jpg"
      },
      {
        "id": "2Vt7Ik8Ubl8",
        "title": "Scrum Master & Agile Leadership Masterclass",
        "channel": "Agile Academy",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2Vt7Ik8Ubl8/hqdefault.jpg"
      },
      {
        "id": "v9qj7lZzVv4",
        "title": "FinTech Ecosystem & Digital Payments Architecture in India",
        "channel": "FinTech Insider",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/v9qj7lZzVv4/hqdefault.jpg"
      },
      {
        "id": "bNpx7gpSqbY",
        "title": "Startup Valuation, Cap Tables & Venture Capital Math",
        "channel": "Slidebean",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bNpx7gpSqbY/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-busi-4",
    "title": "Growth Hacking & User Acquisition for Indian Tech Startups",
    "slug": "growth-hacking-user-acquisition-for-indian-tech-startups",
    "subtitle": "Performance marketing, conversion funnel optimization, viral referral loops, and retention cohorts",
    "description": "Performance marketing, conversion funnel optimization, viral referral loops, and retention cohorts. Designed specifically for Indian developers and engineering teams aiming to master Business & Management at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Business & Management",
    "level": "All Levels",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?enablejsapi=1&rel=0",
    "price": 2599,
    "originalPrice": 6999,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 575,
    "totalStudents": 2340,
    "durationHours": 26,
    "totalLessons": 57,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_4",
      "name": "Ananya Sengupta",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      "title": "Staff AI Research Scientist & ML Lead",
      "rating": 4.92,
      "studentsCount": 42100,
      "coursesCount": 7,
      "bio": "AI researcher and author with expertise in LLM fine-tuning, Transformers, and scalable PyTorch models."
    },
    "chapters": [
      {
        "id": "course-busi-4-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-busi-4-les-1",
            "chapterId": "course-busi-4-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-busi-4-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-busi-4-les-2",
            "chapterId": "course-busi-4-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-busi-4-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-busi-4-les-3",
            "chapterId": "course-busi-4-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-busi-4-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-busi-4-les-4",
            "chapterId": "course-busi-4-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-busi-4-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-busi-4-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-busi-4-les-5",
            "chapterId": "course-busi-4-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-busi-4-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-busi-4-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Growth",
      "Marketing",
      "Analytics",
      "Startups"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Growth architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "dwh50iO8y8U",
        "title": "Product Management Full Course - From Idea to Launch",
        "channel": "freeCodeCamp",
        "duration": "4h 45m",
        "embedUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dwh50iO8y8U/hqdefault.jpg"
      },
      {
        "id": "2Vt7Ik8Ubl8",
        "title": "Scrum Master & Agile Leadership Masterclass",
        "channel": "Agile Academy",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2Vt7Ik8Ubl8/hqdefault.jpg"
      },
      {
        "id": "v9qj7lZzVv4",
        "title": "FinTech Ecosystem & Digital Payments Architecture in India",
        "channel": "FinTech Insider",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/v9qj7lZzVv4/hqdefault.jpg"
      },
      {
        "id": "bNpx7gpSqbY",
        "title": "Startup Valuation, Cap Tables & Venture Capital Math",
        "channel": "Slidebean",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bNpx7gpSqbY/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-busi-5",
    "title": "Financial Modeling & Valuation for SaaS Companies",
    "slug": "financial-modeling-valuation-for-saas-companies",
    "subtitle": "CAC, LTV, churn rate, unit economics, term sheets, cap table math, and venture capital pitches",
    "description": "CAC, LTV, churn rate, unit economics, term sheets, cap table math, and venture capital pitches. Designed specifically for Indian developers and engineering teams aiming to master Business & Management at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Business & Management",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?enablejsapi=1&rel=0",
    "price": 2999,
    "originalPrice": 7999,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 660,
    "totalStudents": 2720,
    "durationHours": 28,
    "totalLessons": 61,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_5",
      "name": "Rahul Nair",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "title": "VP of Product & Ex-Flipkart Director",
      "rating": 4.85,
      "studentsCount": 22400,
      "coursesCount": 5,
      "bio": "12+ years scaling consumer tech products from zero to 10M+ daily active users across India."
    },
    "chapters": [
      {
        "id": "course-busi-5-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-busi-5-les-1",
            "chapterId": "course-busi-5-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-busi-5-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-busi-5-les-2",
            "chapterId": "course-busi-5-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-busi-5-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-busi-5-les-3",
            "chapterId": "course-busi-5-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-busi-5-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-busi-5-les-4",
            "chapterId": "course-busi-5-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-busi-5-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-busi-5-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-busi-5-les-5",
            "chapterId": "course-busi-5-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-busi-5-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-busi-5-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Finance",
      "SaaS Metrics",
      "Valuation",
      "Venture Capital"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Finance architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "dwh50iO8y8U",
        "title": "Product Management Full Course - From Idea to Launch",
        "channel": "freeCodeCamp",
        "duration": "4h 45m",
        "embedUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dwh50iO8y8U/hqdefault.jpg"
      },
      {
        "id": "2Vt7Ik8Ubl8",
        "title": "Scrum Master & Agile Leadership Masterclass",
        "channel": "Agile Academy",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2Vt7Ik8Ubl8/hqdefault.jpg"
      },
      {
        "id": "v9qj7lZzVv4",
        "title": "FinTech Ecosystem & Digital Payments Architecture in India",
        "channel": "FinTech Insider",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/v9qj7lZzVv4/hqdefault.jpg"
      },
      {
        "id": "bNpx7gpSqbY",
        "title": "Startup Valuation, Cap Tables & Venture Capital Math",
        "channel": "Slidebean",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bNpx7gpSqbY/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-busi-6",
    "title": "Digital Marketing & SEO Strategy for Indian Direct-to-Consumer",
    "slug": "digital-marketing-seo-strategy-for-indian-direct-to-consumer",
    "subtitle": "Organic search ranking, Google Ads, Meta Ads, influencer marketing, and localized vernacular campaigns",
    "description": "Organic search ranking, Google Ads, Meta Ads, influencer marketing, and localized vernacular campaigns. Designed specifically for Indian developers and engineering teams aiming to master Business & Management at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Business & Management",
    "level": "Beginner",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?enablejsapi=1&rel=0",
    "price": 1999,
    "originalPrice": 5299,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 745,
    "totalStudents": 3100,
    "durationHours": 24,
    "totalLessons": 52,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_6",
      "name": "Sneha Reddy",
      "avatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
      "title": "DevOps & Site Reliability Lead",
      "rating": 4.91,
      "studentsCount": 31000,
      "coursesCount": 6,
      "bio": "Kubernetes contributor and multi-cloud infrastructure architect for high-throughput FinTech pipelines."
    },
    "chapters": [
      {
        "id": "course-busi-6-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-busi-6-les-1",
            "chapterId": "course-busi-6-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-busi-6-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-busi-6-les-2",
            "chapterId": "course-busi-6-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-busi-6-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-busi-6-les-3",
            "chapterId": "course-busi-6-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-busi-6-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-busi-6-les-4",
            "chapterId": "course-busi-6-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-busi-6-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-busi-6-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-busi-6-les-5",
            "chapterId": "course-busi-6-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-busi-6-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-busi-6-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "SEO",
      "Digital Marketing",
      "eCommerce",
      "D2C"
    ],
    "whatYouWillLearn": [
      "Master industry-grade SEO architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "dwh50iO8y8U",
        "title": "Product Management Full Course - From Idea to Launch",
        "channel": "freeCodeCamp",
        "duration": "4h 45m",
        "embedUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dwh50iO8y8U/hqdefault.jpg"
      },
      {
        "id": "2Vt7Ik8Ubl8",
        "title": "Scrum Master & Agile Leadership Masterclass",
        "channel": "Agile Academy",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2Vt7Ik8Ubl8/hqdefault.jpg"
      },
      {
        "id": "v9qj7lZzVv4",
        "title": "FinTech Ecosystem & Digital Payments Architecture in India",
        "channel": "FinTech Insider",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/v9qj7lZzVv4/hqdefault.jpg"
      },
      {
        "id": "bNpx7gpSqbY",
        "title": "Startup Valuation, Cap Tables & Venture Capital Math",
        "channel": "Slidebean",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bNpx7gpSqbY/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-busi-7",
    "title": "Engineering Management & Scaling Tech Organizations to 200+",
    "slug": "engineering-management-scaling-tech-organizations-to-200",
    "subtitle": "Hiring engineering talent, 1-on-1 coaching, performance reviews, tech debt, and culture",
    "description": "Hiring engineering talent, 1-on-1 coaching, performance reviews, tech debt, and culture. Designed specifically for Indian developers and engineering teams aiming to master Business & Management at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Business & Management",
    "level": "Advanced",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?enablejsapi=1&rel=0",
    "price": 3799,
    "originalPrice": 10499,
    "isFree": false,
    "rating": 4.7,
    "reviewsCount": 830,
    "totalStudents": 3480,
    "durationHours": 32,
    "totalLessons": 70,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_1",
      "name": "Dr. Priya Patel",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "title": "Principal Cloud Architect & Lead Tech Instructor",
      "rating": 4.9,
      "studentsCount": 38400,
      "coursesCount": 8,
      "bio": "Ex-Amazon IDC & Swiggy Architect with 14+ years building high-concurrency systems."
    },
    "chapters": [
      {
        "id": "course-busi-7-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-busi-7-les-1",
            "chapterId": "course-busi-7-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-busi-7-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-busi-7-les-2",
            "chapterId": "course-busi-7-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-busi-7-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-busi-7-les-3",
            "chapterId": "course-busi-7-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-busi-7-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-busi-7-les-4",
            "chapterId": "course-busi-7-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-busi-7-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-busi-7-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-busi-7-les-5",
            "chapterId": "course-busi-7-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-busi-7-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-busi-7-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Engineering Management",
      "Leadership",
      "Org Scaling"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Engineering Management architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "dwh50iO8y8U",
        "title": "Product Management Full Course - From Idea to Launch",
        "channel": "freeCodeCamp",
        "duration": "4h 45m",
        "embedUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dwh50iO8y8U/hqdefault.jpg"
      },
      {
        "id": "2Vt7Ik8Ubl8",
        "title": "Scrum Master & Agile Leadership Masterclass",
        "channel": "Agile Academy",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2Vt7Ik8Ubl8/hqdefault.jpg"
      },
      {
        "id": "v9qj7lZzVv4",
        "title": "FinTech Ecosystem & Digital Payments Architecture in India",
        "channel": "FinTech Insider",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/v9qj7lZzVv4/hqdefault.jpg"
      },
      {
        "id": "bNpx7gpSqbY",
        "title": "Startup Valuation, Cap Tables & Venture Capital Math",
        "channel": "Slidebean",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bNpx7gpSqbY/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-busi-8",
    "title": "IT Project Management & Risk Mitigation for Enterprise Clients",
    "slug": "it-project-management-risk-mitigation-for-enterprise-clients",
    "subtitle": "Scope creep management, RFP proposals, SLA contracts, client stakeholder management",
    "description": "Scope creep management, RFP proposals, SLA contracts, client stakeholder management. Designed specifically for Indian developers and engineering teams aiming to master Business & Management at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Business & Management",
    "level": "Intermediate",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?enablejsapi=1&rel=0",
    "price": 2499,
    "originalPrice": 6699,
    "isFree": false,
    "rating": 4.8,
    "reviewsCount": 915,
    "totalStudents": 3860,
    "durationHours": 25,
    "totalLessons": 55,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_2",
      "name": "Rohan Varma",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "title": "Head of Product Design (Ex-CRED & Swiggy)",
      "rating": 4.95,
      "studentsCount": 29800,
      "coursesCount": 6,
      "bio": "Lead product designer specializing in dark-mode aesthetics, micro-interactions, and design systems."
    },
    "chapters": [
      {
        "id": "course-busi-8-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-busi-8-les-1",
            "chapterId": "course-busi-8-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-busi-8-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-busi-8-les-2",
            "chapterId": "course-busi-8-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-busi-8-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-busi-8-les-3",
            "chapterId": "course-busi-8-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-busi-8-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-busi-8-les-4",
            "chapterId": "course-busi-8-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-busi-8-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-busi-8-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-busi-8-les-5",
            "chapterId": "course-busi-8-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-busi-8-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-busi-8-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Project Management",
      "PMP",
      "Enterprise IT"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Project Management architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "dwh50iO8y8U",
        "title": "Product Management Full Course - From Idea to Launch",
        "channel": "freeCodeCamp",
        "duration": "4h 45m",
        "embedUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dwh50iO8y8U/hqdefault.jpg"
      },
      {
        "id": "2Vt7Ik8Ubl8",
        "title": "Scrum Master & Agile Leadership Masterclass",
        "channel": "Agile Academy",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2Vt7Ik8Ubl8/hqdefault.jpg"
      },
      {
        "id": "v9qj7lZzVv4",
        "title": "FinTech Ecosystem & Digital Payments Architecture in India",
        "channel": "FinTech Insider",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/v9qj7lZzVv4/hqdefault.jpg"
      },
      {
        "id": "bNpx7gpSqbY",
        "title": "Startup Valuation, Cap Tables & Venture Capital Math",
        "channel": "Slidebean",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bNpx7gpSqbY/hqdefault.jpg"
      }
    ]
  },
  {
    "id": "course-busi-9",
    "title": "Strategic Negotiation & Business Development for Tech Leaders",
    "slug": "strategic-negotiation-business-development-for-tech-leaders",
    "subtitle": "Enterprise B2B sales cycles, contract negotiation, vendor partnerships, and deal closing",
    "description": "Enterprise B2B sales cycles, contract negotiation, vendor partnerships, and deal closing. Designed specifically for Indian developers and engineering teams aiming to master Business & Management at top MAANG, unicorn, and enterprise standards. Includes interactive hands-on coding labs, downloadable architectural blueprints, and verifiable industry certification upon completion.",
    "category": "Business & Management",
    "level": "All Levels",
    "language": "English (with Indian tech context)",
    "thumbnail": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "previewVideoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?enablejsapi=1&rel=0",
    "price": 2799,
    "originalPrice": 7499,
    "isFree": false,
    "rating": 4.9,
    "reviewsCount": 1000,
    "totalStudents": 4240,
    "durationHours": 20,
    "totalLessons": 44,
    "updatedAt": "2026-03-15",
    "instructor": {
      "id": "usr_inst_3",
      "name": "Vikramaditya Rao",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "title": "Chief Security Officer & CERT-In Auditor",
      "rating": 4.88,
      "studentsCount": 19500,
      "coursesCount": 5,
      "bio": "National cyber defense researcher and consultant for Indian banking & defense security protocols."
    },
    "chapters": [
      {
        "id": "course-busi-9-ch-1",
        "title": "Module 1: Foundations & Architecture Overview",
        "order": 1,
        "lessons": [
          {
            "id": "course-busi-9-les-1",
            "chapterId": "course-busi-9-ch-1",
            "title": "Introduction, Environment Setup & Prerequisites",
            "durationMinutes": 18,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Complete overview of the curriculum, development tools setup, and initial architectural roadmap.",
            "isFreePreview": true,
            "resources": [
              {
                "id": "course-busi-9-res-1",
                "title": "Course Roadmap & Setup Guide.pdf",
                "fileType": "pdf",
                "fileSize": "2.4 MB",
                "downloadUrl": "#"
              }
            ]
          },
          {
            "id": "course-busi-9-les-2",
            "chapterId": "course-busi-9-ch-1",
            "title": "Core Fundamentals & Industry Best Practices",
            "durationMinutes": 24,
            "videoUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
            "description": "Understanding key principles, foundational patterns, and production coding conventions.",
            "isFreePreview": false
          }
        ]
      },
      {
        "id": "course-busi-9-ch-2",
        "title": "Module 2: Deep Dive Implementation & Hands-on Labs",
        "order": 2,
        "lessons": [
          {
            "id": "course-busi-9-les-3",
            "chapterId": "course-busi-9-ch-2",
            "title": "Hands-on Implementation with Real-World Code",
            "durationMinutes": 32,
            "videoUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
            "description": "Building production-grade modules step-by-step with clean code and rigorous error handling.",
            "isFreePreview": false,
            "quiz": {
              "id": "course-busi-9-quiz-1",
              "title": "Module 2 Assessment",
              "passingScore": 80,
              "questions": [
                {
                  "id": "q1",
                  "question": "What is the primary architectural advantage of this module's approach?",
                  "options": [
                    "Higher concurrency and fault tolerance",
                    "Reduced memory overhead",
                    "Faster startup latency",
                    "All of the above"
                  ],
                  "correctAnswerIndex": 3,
                  "explanation": "Production enterprise systems prioritize fault tolerance, low latency, and efficient memory utilization."
                }
              ]
            }
          },
          {
            "id": "course-busi-9-les-4",
            "chapterId": "course-busi-9-ch-2",
            "title": "Performance Optimization & Edge Cases",
            "durationMinutes": 28,
            "videoUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
            "description": "Benchmarking, profile metrics, bottleneck detection, and edge case resilience.",
            "isFreePreview": false,
            "assignment": {
              "id": "course-busi-9-assign-1",
              "title": "Capstone Practice Lab",
              "description": "Submit a working GitHub repository demonstrating the optimized module with unit tests.",
              "dueDate": "Within 7 days of module start",
              "maxScore": 100,
              "instructions": [
                "Clone the template repository",
                "Implement the required handlers with comprehensive test coverage",
                "Submit your pull request link for evaluation"
              ]
            }
          }
        ]
      },
      {
        "id": "course-busi-9-ch-3",
        "title": "Module 3: Production Deployment, Monitoring & Scaling",
        "order": 3,
        "lessons": [
          {
            "id": "course-busi-9-les-5",
            "chapterId": "course-busi-9-ch-3",
            "title": "Production Deployment Checklist & Zero-Downtime Releases",
            "durationMinutes": 35,
            "videoUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
            "description": "Setting up CI/CD automation, production telemetry, and final system sign-off.",
            "isFreePreview": false,
            "resources": [
              {
                "id": "course-busi-9-res-2",
                "title": "Production Deployment Checklist.pdf",
                "fileType": "pdf",
                "fileSize": "1.8 MB",
                "downloadUrl": "#"
              },
              {
                "id": "course-busi-9-res-3",
                "title": "Full Source Code Repo.zip",
                "fileType": "zip",
                "fileSize": "14.2 MB",
                "downloadUrl": "#"
              }
            ]
          }
        ]
      }
    ],
    "tags": [
      "Negotiation",
      "B2B Sales",
      "Business Development"
    ],
    "whatYouWillLearn": [
      "Master industry-grade Negotiation architecture and patterns",
      "Build production-grade applications from scratch with clean code standards",
      "Deploy scalable systems with robust observability and monitoring",
      "Prepare thoroughly for top Indian tech company interviews & technical evaluations"
    ],
    "requirements": [
      "Basic understanding of programming fundamentals",
      "A laptop or desktop with internet access and code editor installed",
      "Curiosity and commitment to hands-on practice"
    ],
    "status": "published",
    "featured": false,
    "relatedVideos": [
      {
        "id": "dwh50iO8y8U",
        "title": "Product Management Full Course - From Idea to Launch",
        "channel": "freeCodeCamp",
        "duration": "4h 45m",
        "embedUrl": "https://www.youtube.com/embed/dwh50iO8y8U?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/dwh50iO8y8U/hqdefault.jpg"
      },
      {
        "id": "2Vt7Ik8Ubl8",
        "title": "Scrum Master & Agile Leadership Masterclass",
        "channel": "Agile Academy",
        "duration": "2h 30m",
        "embedUrl": "https://www.youtube.com/embed/2Vt7Ik8Ubl8?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/2Vt7Ik8Ubl8/hqdefault.jpg"
      },
      {
        "id": "v9qj7lZzVv4",
        "title": "FinTech Ecosystem & Digital Payments Architecture in India",
        "channel": "FinTech Insider",
        "duration": "2h 10m",
        "embedUrl": "https://www.youtube.com/embed/v9qj7lZzVv4?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/v9qj7lZzVv4/hqdefault.jpg"
      },
      {
        "id": "bNpx7gpSqbY",
        "title": "Startup Valuation, Cap Tables & Venture Capital Math",
        "channel": "Slidebean",
        "duration": "1h 50m",
        "embedUrl": "https://www.youtube.com/embed/bNpx7gpSqbY?autoplay=1&enablejsapi=1&rel=0",
        "thumbnailUrl": "https://img.youtube.com/vi/bNpx7gpSqbY/hqdefault.jpg"
      }
    ]
  }
];
