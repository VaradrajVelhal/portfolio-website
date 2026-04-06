const projects = [
  {
    title: "HireFlow – Job Aggregation & Application Tracking System",
    tech: ["React", "Django REST Framework", "PostgreSQL", "Tailwind CSS", "JWT"],
    description:
      "Built a full-stack job platform that aggregates listings from multiple sources and allows users to track applications efficiently. Implemented JWT-based authentication with email verification and designed scalable REST APIs for job and user workflows. Developed cron jobs and notification system for automated job fetching and follow-up reminders.",
    github: "https://github.com/VaradrajVelhal/hireflow",
  },
  {
    title: "LifeLink – Real-Time Blood Request System",
    tech: ["React", "Django REST Framework", "PostgreSQL", "Tailwind CSS", "RBAC"],
    description:
      "Developed a full-stack platform to connect hospitals and donors for real-time blood requests, reducing response delays in emergencies. Implemented role-based access (Donor, Hospital, Admin) with secure authentication and dedicated dashboards. Designed REST APIs and workflows for complete request lifecycle management with location-based filtering and activity tracking.",
    github: "https://github.com/VaradrajVelhal/lifelink",
  },
  {
    title: "Rural Government Scheme Eligibility Engine",
    tech: ["Django", "PostgreSQL", "Bootstrap"],
    description:
      "Created a rule-based system to evaluate eligibility for government schemes using dynamic, database-driven conditions. Designed a scalable evaluation engine eliminating hardcoded logic for flexibility. Integrated PDF report generation and analytics dashboard to provide clear insights and improve accessibility for users.",
    github: "https://github.com/VaradrajVelhal/rural-scheme-eligibility-check",
    demo: "https://rural-scheme-eligibility-check.onrender.com",
  },
];

export default projects;