const highlights = [
  {
    label: "Current role",
    text: "Senior Software Engineer at Vesanique through Shore360.",
  },
  {
    label: "Teaching",
    text: "Assistant Lecturer at Angeles University Foundation and lecturer at La Verdad Christian College.",
  },
  {
    label: "Research",
    text: "Publications in scholarship systems, social services, attendance, and research methods.",
  },
  {
    label: "Graduate study",
    text: "M.S. in Computer Science ongoing at Don Mariano Marcos Memorial State University.",
  },
];

const expertise = [
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "ElasticSearch",
  "Redis",
  "PHP",
  "Laravel",
  "Python",
  "Flask",
  "NodeJS",
  "ExpressJS",
  "NextJS",
  "Angular",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "HTML5",
  "CSS",
  "AWS",
  "Linux",
  "Git",
  "Bash",
  "Figma",
  "Photoshop",
  "Jira",
  "Redmine",
  "GitLab",
  "GitHub",
  "ClickUp",
  "Asana",
  "AI-assisted software engineering",
];

const scholarSearchLink = (title) =>
  `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;

const rgSearchLink = (title) =>
  `https://www.researchgate.net/search/publication?q=${encodeURIComponent(title)}`;

const publicationGroups = [
  {
    title: "Published and conference papers",
    items: [
      {
        year: "2026",
        source: "Journal article",
        title:
          "Empirical Evaluation of a Scholarship Application Information System Using the DeLone and McLean I.S. Success Model",
        meta: "International Journal of Computing Sciences Research",
        summary:
          "A scholarship system study measured against the DeLone and McLean IS Success Model.",
        links: [{ label: "Search", href: scholarSearchLink("Empirical Evaluation of a Scholarship Application Information System Using the DeLone and McLean I.S. Success Model") }],
      },
      {
        year: "2025",
        source: "Journal article",
        title: "Evaluation of Social Services Information System using DeLone McLean IS success model",
        meta: "International Journal of Computing Sciences Research",
        summary:
          "A social services information system evaluated for usability, reliability, and productivity.",
        links: [
          {
            label: "Issue page",
            href: "https://stepacademic.net/ijcsr/issue/view/26",
          },
          {
            label: "DOI",
            href: "https://doi.org/10.25147/ijcsr.2017.001.1.248",
          },
        ],
      },
      {
        year: "2022",
        source: "Conference paper",
        title:
          "Examining Employees' Technology Acceptance of Web-based Attendance Management System With Face Recognition and QR Code Features for La Verdad Christian College",
        meta: "IRCITE 2022",
        summary:
          "A contactless attendance workflow explored through a technology acceptance lens.",
        links: [{ label: "Search", href: scholarSearchLink("Examining Employees' Technology Acceptance of Web-based Attendance Management System With Face Recognition and QR Code Features for La Verdad Christian College") }],
      },
      {
        year: "2019",
        source: "Conference paper",
        title:
          "Into the Campus: Creating an Android-Based Interactive Virtual Tour of La Verdad Christian College - Apalit using Unity 3D",
        meta: "Innovatus 2019",
        summary: "An Android virtual tour built with Unity 3D and 3D mapping for campus exploration.",
        links: [
          {
            label: "Open article",
            href: "https://innovatus-pub.github.io/abstractpublications_archive/2019a/paper20.html",
          },
          {
            label: "PDF",
            href: "https://innovatus-pub.github.io/abstractpublications_archive/2019a/paper20_pdf.pdf",
          },
        ],
      },
      {
        year: "2019",
        source: "Conference paper",
        title:
          "Implementing Document Management System (DMS) Technology in Barangay Paligui, Apalit, Pampanga",
        meta: "Innovatus 2019",
        summary: "A barangay records and service workflow project focused on document handling.",
        links: [
          {
            label: "PDF",
            href: "https://zenodo.org/records/5209763/files/paper_19.pdf",
          },
          {
            label: "Search",
            href: rgSearchLink(
              "Implementing Document Management System (DMS) Technology in Barangay Paligui, Apalit, Pampanga"
            ),
          },
        ],
      },
      {
        year: "2022",
        source: "Proceedings",
        title:
          "BSIS Capstone Projects Compiled by Natividad, R. (2022) - Information Systems: Undergraduate Research Colloquium Proceedings",
        meta: "7 Eyes Productions",
        summary: "A compiled research proceedings entry for BSIS capstone projects.",
        links: [{ label: "Search", href: scholarSearchLink("BSIS Capstone Projects Compiled by Natividad, R. (2022) - Information Systems: Undergraduate Research Colloquium Proceedings") }],
      },
    ],
  },
  {
    title: "Preprints, working papers, and theses",
    items: [
      {
        year: "2026",
        source: "Conference paper",
        title: "Text-Mining Insights and Students' Perceptions on Generative AI Use in Research",
        meta: "ICETI 2026",
        summary: "A study on student perceptions and text-mining insights around generative AI in research.",
        links: [{ label: "Search", href: scholarSearchLink("Text-Mining Insights and Students' Perceptions on Generative AI Use in Research") }],
      },
      {
        year: "2025",
        source: "Conference paper",
        title:
          "Using the Technology Acceptance Model in Understanding the Usage of Web-based Document Management System With SMS Notification for the Bureau of Fire Protection in Apalit Pampanga",
        meta: "ICITE 2023",
        summary: "A web-based DMS for BFP work with SMS notification support and user acceptance analysis.",
        links: [{ label: "Search", href: scholarSearchLink("Using the Technology Acceptance Model in Understanding the Usage of Web-based Document Management System With SMS Notification for the Bureau of Fire Protection in Apalit Pampanga") }],
      },
      {
        year: "2024",
        source: "Review",
        title:
          "Review of 'Artificial Intelligence-Oriented Software Engineering (AIOSE): Challenges, Opportunities and New Directions' by Faruk, et al.",
        meta: "2024",
        summary: "A review note on the opportunities and challenges of AI-oriented software engineering.",
        links: [{ label: "Search", href: scholarSearchLink("Review of Artificial Intelligence-Oriented Software Engineering (AIOSE): Challenges, Opportunities and New Directions by Faruk et al.") }],
      },
      {
        year: "2024",
        source: "Review",
        title:
          "A Literature Review of Quantum Algorithms, Programming, and Simulation Tools: Initiatives of the Philippine Computing Community for the Next Paradigm Shift",
        meta: "2024",
        summary: "A literature review on quantum computing tools and the Philippine computing community.",
        links: [{ label: "Search", href: scholarSearchLink("A Literature Review of Quantum Algorithms, Programming, and Simulation Tools: Initiatives of the Philippine Computing Community for the Next Paradigm Shift") }],
      },
      {
        year: "2024",
        source: "Review",
        title:
          "Review of the paper 'A Survey of Post-Quantum Cryptography: Start of a New Race' by Duc-Thuan et al.",
        meta: "2024",
        summary: "A review note on post-quantum cryptography and the next shift in secure systems.",
        links: [{ label: "Search", href: scholarSearchLink("Review of the paper A Survey of Post-Quantum Cryptography: Start of a New Race by Duc-Thuan et al.") }],
      },
      {
        year: "2024",
        source: "Preprint",
        title:
          "Avoiding Software Piracy Through Appreciation of Software License Models and Software Asset Management Practices",
        meta: "2024",
        summary: "A preprint about software licensing, compliance, and software asset management.",
        links: [
          {
            label: "Open on RG",
            href: "https://www.researchgate.net/publication/383693557_Avoiding_Software_Piracy_Through_Appreciation_of_Software_License_Models_and_Software_Asset_Management_Practices",
          },
          {
            label: "Search",
            href: scholarSearchLink("Avoiding Software Piracy Through Appreciation of Software License Models and Software Asset Management Practices"),
          },
        ],
      },
      {
        year: "2024",
        source: "Preprint",
        title: "Appreciating the Decidability Topic in the Theory of Computations Course",
        meta: "2024",
        summary: "A teaching-oriented preprint that makes decidability easier to read and discuss.",
        links: [{ label: "Search", href: scholarSearchLink("Appreciating the Decidability Topic in the Theory of Computations Course") }],
      },
      {
        year: "2023",
        source: "Conference paper",
        title:
          "DESIGN AND SOFTWARE QUALITY ASSESSMENT OF AN ENROLLMENT PAYMENT VALIDATION SYSTEM FOR LVCS ACCOUNTING DEPARTMENT WITH VERYFI OCR AND XERO INTEGRATION",
        meta: "ICITE 2023",
        summary: "A software quality assessment for an enrollment payment validation system with OCR and Xero integration.",
        links: [{ label: "Search", href: scholarSearchLink("DESIGN AND SOFTWARE QUALITY ASSESSMENT OF AN ENROLLMENT PAYMENT VALIDATION SYSTEM FOR LVCS ACCOUNTING DEPARTMENT WITH VERYFI OCR AND XERO INTEGRATION") }],
      },
      {
        year: "2023",
        source: "Preprint",
        title: "Mga Teorya, Balangkas, at Literatura Para sa Capstone Project",
        meta: "2023",
        summary: "A Filipino-language preprint for capstone theory, framework, and literature guidance.",
        links: [{ label: "Search", href: scholarSearchLink("Mga Teorya, Balangkas, at Literatura Para sa Capstone Project") }],
      },
      {
        year: "2018",
        source: "Preprint",
        title:
          "Increasing Admissions Department Efficiency Using An Online Student Enrolment System For La Verdad Christian College",
        meta: "2018",
        summary: "An early online enrollment system proposal for admissions workflow efficiency.",
        links: [{ label: "Search", href: scholarSearchLink("Increasing Admissions Department Efficiency Using An Online Student Enrolment System For La Verdad Christian College") }],
      },
      {
        year: "2021",
        source: "Thesis",
        title: "Incident Response Information System Using Web and SMS Platforms",
        meta: "Thesis (M.I.T.) - Angeles University Foundation, 2021",
        summary: "A thesis project on incident reporting and response through web and SMS platforms.",
        links: [{ label: "Search", href: scholarSearchLink("Incident Response Information System Using Web and SMS Platforms Romack Natividad") }],
      },
    ],
  },
];

const experience = [
  {
    role: "Senior Software Engineer",
    org: "Vesanique through Shore360",
    period: "Nov 2020 - Present",
    summary:
      "PHP, Laravel, AWS, WordPress, and ReactJS/NextJS work focused on backend web applications and product support.",
  },
  {
    role: "I.T. Consultant",
    org: "Disney Vacation Club through RCG Global Services",
    period: "Mar 2019 - Oct 2020",
    summary: "PHP, Angular, and AWS consulting work in Makati City.",
  },
  {
    role: "Senior Software Engineer",
    org: "ProLook Sports / QuickStrike",
    period: "Feb 2017 - Jan 2019",
    summary: "Backend engineering work for product and platform improvements in San Fernando, Pampanga.",
  },
  {
    role: "Senior PHP Developer",
    org: "Flexion Technology",
    period: "May 2016 - Mar 2017",
    summary: "PHP, Laravel, and AWS development for software delivery in Makati City.",
  },
  {
    role: "Software Developer",
    org: "Lifetrack Medical Systems",
    period: "Jan 2016 - Apr 2016",
    summary: "Built software solutions using PHP, JavaScript, and AWS in Bonifacio Global City.",
  },
  {
    role: "Software Engineer",
    org: "ProLook Sports / QuickStrike",
    period: "May 2015 - Nov 2015",
    summary: "PHP, Laravel, and AWS development work in San Fernando, Pampanga.",
  },
  {
    role: "Software Engineer",
    org: "Salarium",
    period: "Nov 2014 - Apr 2015",
    summary: "Worked with PHP, CodeIgniter, Cohesion, and AWS in Makati City.",
  },
  {
    role: "Software Engineer",
    org: "Freelancer.com",
    period: "Jan 2013 - Mar 2014",
    summary: "Independent PHP and AWS work for client projects.",
  },
  {
    role: "Junior Java Developer",
    org: "Katana Techworks",
    period: "2008",
    summary: "Java and PostgreSQL work in Quezon City.",
  },
  {
    role: "Junior PHP Developer",
    org: "Katana Tech Works",
    period: "2005 - 2006",
    summary: "PHP and MySQL development in Quezon City.",
  },
  {
    role: "Junior ASP Developer",
    org: "AnXa Limited",
    period: "2004 - 2005",
    summary: "Classic ASP development in Alabang, Muntinlupa.",
  },
];

const teaching = [
  {
    role: "Assistant Lecturer (Part-time)",
    org: "Angeles University Foundation",
    period: "Feb 2022 - Dec 2024",
    summary:
      "Integrative Programming and Technologies, Web Application Development Courses in Angeles City, Pampanga.",
  },
  {
    role: "Lecturer and BS Information Systems Program Chair",
    org: "La Verdad Christian College",
    period: "Jun 2006 - Jan 2024",
    summary: "Information Systems Capstone Projects and research mentoring in Apalit, Pampanga.",
  },
];

const education = [
  {
    role: "Master of Science in Computer Science",
    org: "Don Mariano Marcos Memorial State University",
    period: "2025 - Present",
    summary: "Ongoing graduate study in Agoo, La Union.",
  },
  {
    role: "Master in Information Technology",
    org: "Angeles University Foundation",
    period: "2014 - 2016",
    summary: "Graduate studies in Angeles, Pampanga.",
  },
  {
    role: "B.S. in Information Technology",
    org: "FEU Diliman (formerly FEU-FERN College)",
    period: "2000 - 2003",
    summary: "Undergraduate degree completed in Quezon City.",
  },
];

const projects = [
  {
    type: "System",
    title: "Scholarship Application Information System",
    description: "A scholarship system evaluated with the DeLone and McLean I.S. Success Model.",
    meta: "Research + development",
  },
  {
    type: "System",
    title: "Social Services Information System",
    description:
      "A centralized social services workflow and records system for public service management.",
    meta: "Research + implementation",
  },
  {
    type: "System",
    title: "Web-based Attendance Management System",
    description:
      "A contactless attendance solution using face recognition and QR code features.",
    meta: "Laravel / HR workflow",
  },
  {
    type: "System",
    title: "Enrollment Payment Validation System",
    description: "OCR-based payment validation integrated with Xero for accounting workflow support.",
    meta: "Veryfi OCR / Xero",
  },
  {
    type: "System",
    title: "Interactive Virtual Tour",
    description: "An Android-based virtual tour of La Verdad Christian College built with Unity 3D.",
    meta: "Unity 3D / Android",
  },
  {
    type: "System",
    title: "Document Management System",
    description: "Document management work for barangay service and record handling improvements.",
    meta: "Public sector workflow",
  },
];

const interests = [
  "Computing research",
  "Theses, news, books, and magazines",
  "Music of different genres",
  "Arts and cultures",
];

const gallery = [
  "Conference",
  "Portrait",
  "Teaching",
  "Project Work",
  "Research",
];

function cardTemplate(item) {
  return `
    <article class="card">
      <span class="card-type">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="meta">${item.meta}</div>
    </article>
  `;
}

function timelineTemplate(item) {
  return `
    <article class="timeline-item">
      <header>
        <div>
          <h3 class="role">${item.role}</h3>
          <p>${item.org}</p>
        </div>
        <span class="period">${item.period}</span>
      </header>
      <p>${item.summary}</p>
    </article>
  `;
}

function publicationGroupTemplate(group) {
  return `
    <section class="publication-group">
      <div class="publication-group-head">
        <p class="section-label">Archive</p>
        <h3>${group.title}</h3>
      </div>
      <div class="publication-list">
        ${group.items
          .map(
            (item) => `
              <article class="publication-item">
                <div class="publication-rail">
                  <span class="publication-year">${item.year}</span>
                  <span class="publication-source">${item.source}</span>
                </div>
                <div class="publication-copy">
                  <p class="publication-title">${item.title}</p>
                  <p class="publication-meta">${item.meta}</p>
                  <p class="publication-summary">${item.summary}</p>
                  <div class="publication-links">
                    ${item.links
                      .map(
                        (link) =>
                          `<a class="publication-link" href="${link.href}" target="_blank" rel="noreferrer noopener">${link.label}</a>`
                      )
                      .join("")}
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function mount(id, html) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = html;
  }
}

mount(
  "highlights",
  highlights
    .map(
      (item) => `
        <article class="highlight-item">
          <p class="highlight-label">${item.label}</p>
          <p class="highlight-text">${item.text}</p>
        </article>
      `
    )
    .join("")
);

mount("expertise", expertise.map((item) => `<span class="chip">${item}</span>`).join(""));
mount("publications", publicationGroups.map(publicationGroupTemplate).join(""));
mount("experience-list", experience.map(timelineTemplate).join(""));
mount("teaching-list", teaching.map(timelineTemplate).join(""));
mount("education-list", education.map(timelineTemplate).join(""));
mount("projects-grid", projects.map(cardTemplate).join(""));
mount("interests", interests.map((item) => `<span class="chip">${item}</span>`).join(""));
mount(
  "gallery-grid",
  gallery
    .map((label) => `<div class="gallery-item" data-label="${label}"></div>`)
    .join("")
);
