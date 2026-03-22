const publications = [
  {
    type: "Pre-print",
    title: "Appreciating the Decidability Topic in the Theory of Computations Course",
    description:
      "A teaching-oriented preprint focused on making decidability easier to understand in a theory of computation course.",
    meta: "May 2024 · Preprint",
  },
  {
    type: "Pre-print",
    title:
      "Avoiding Software Piracy Through Appreciation of Software License Models and Software Asset Management Practices",
    description:
      "Discusses software licensing, legal compliance, and the importance of honoring the work of software teams and vendors.",
    meta: "May 2024 · Full text available",
  },
  {
    type: "Pre-print",
    title:
      "A Literature Review of Quantum Algorithms, Programming, and Simulation Tools: Initiatives of the Philippine Computing Community for the Next Paradigm Shift",
    description:
      "A review of quantum computation topics, tools, and the Philippine computing community's role in the next paradigm shift.",
    meta: "May 2024 · Full text available",
  },
  {
    type: "Conference",
    title:
      "Using the Technology Acceptance Model in Understanding the Usage of Web-based Document Management System for the Fire Safety Enforcement Unit of the Bureau of Fire Protection",
    description:
      "Examines a web-based document management system with SMS notifications for a fire safety enforcement workflow.",
    meta: "Nov 2023 · Conference paper",
  },
  {
    type: "Conference",
    title:
      "DESIGN AND SOFTWARE QUALITY ASSESSMENT OF AN ENROLLMENT PAYMENT VALIDATION SYSTEM FOR LVCS ACCOUNTING DEPARTMENT WITH VERYFI OCR AND XERO INTEGRATION",
    description:
      "A system study on validating enrollment payments with OCR and integration into Xero for accounting workflows.",
    meta: "Nov 2023 · Conference paper",
  },
  {
    type: "Pre-print",
    title: "MGA TEORYA, BALANGKAS, AT LITERATURA PARA SA CAPSTONE PROJECT",
    description:
      "A Filipino-language preprint that helps structure capstone research using established theories and concepts.",
    meta: "Nov 2023 · Preprint",
  },
  {
    type: "Conference",
    title:
      "EXAMINING EMPLOYEES' TECHNOLOGY ACCEPTANCE OF WEB-BASED ATTENDANCE MANAGEMENT SYSTEM WITH FACE RECOGNITION AND QR CODE FEATURES FOR LA VERDAD CHRISTIAN COLLEGE",
    description:
      "Studies the adoption of a contactless attendance management system for employee monitoring.",
    meta: "Apr 2022 · Conference paper",
  },
  {
    type: "Article",
    title:
      "Into the Campus: Creating an Android-Based Interactive Virtual Tour of La Verdad Christian College – Apalit using Unity 3D",
    description:
      "Describes an Android-based virtual tour built with Unity 3D and Google SketchUp to showcase the campus experience.",
    meta: "May 2019 · Article",
  },
  {
    type: "Conference",
    title: "IMPLEMENTING DOCUMENT MANAGEMENT SYSTEM (DMS) TECHNOLOGY IN BARANGAY PALIGUI, APALIT, PAMPANGA",
    description:
      "A records management project for a barangay setting aimed at improving service quality and document handling.",
    meta: "Mar 2019 · Conference paper",
  },
  {
    type: "Pre-print",
    title:
      "Increasing Admissions Department Efficiency Using An Online Student Enrolment System For La Verdad Christian College Bachelor of Science in Information Systems",
    description:
      "Proposes an online admissions and enrollment system to speed up student data processing and related workflows.",
    meta: "Mar 2018 · Preprint",
  },
  {
    type: "Thesis",
    title: "Incident Response Information System Using Web and SMS Platforms",
    description:
      "An earlier thesis project focused on incident reporting, collaboration, and decision support through web and SMS tools.",
    meta: "Jul 2016 · Thesis",
  },
];

const experience = [
  {
    role: "Current Position",
    org: "Organization / Department",
    period: "2024 - Present",
    summary: "Describe your current responsibilities, focus areas, and the scope of your work.",
  },
  {
    role: "Previous Role",
    org: "Previous Employer",
    period: "2021 - 2024",
    summary: "Mention achievements, leadership, research, product work, or collaborations.",
  },
  {
    role: "Education",
    org: "University or Training Institution",
    period: "2017 - 2021",
    summary: "Include your degree, specialization, honors, or thesis topic.",
  },
];

const projects = [
  {
    type: "Project",
    title: "Project Title One",
    description:
      "A product, research tool, dashboard, or creative project with a measurable impact.",
    meta: "Role: Founder / Contributor · Tools: Stack or methods used",
  },
  {
    type: "Collaboration",
    title: "Project Title Two",
    description:
      "Highlight a team effort, open-source contribution, or multidisciplinary initiative.",
    meta: "Role: Collaborator · Outcome: what was launched or improved",
  },
  {
    type: "Experiment",
    title: "Project Title Three",
    description:
      "Use this for prototypes, side experiments, or visual work that shows your curiosity.",
    meta: "Role: Builder · Notes: research question or inspiration",
  },
];

const hobbies = [
  "Reading and note-taking",
  "Photography",
  "Writing essays and reflections",
  "Travel and cultural exploration",
  "Running or fitness",
  "Music, films, or creative hobbies",
];

const gallery = [
  "Conference / Event",
  "Portrait / Headshot",
  "Field / Lab",
  "Project Snapshot",
  "Travel / Hobby",
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

document.getElementById("publications").innerHTML = publications.map(cardTemplate).join("");
document.getElementById("projects-grid").innerHTML = projects.map(cardTemplate).join("");

document.getElementById("experience-list").innerHTML = experience
  .map(
    (item) => `
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
    `
  )
  .join("");

document.getElementById("hobbies").innerHTML = hobbies
  .map((hobby) => `<span class="chip">${hobby}</span>`)
  .join("");

document.getElementById("gallery-grid").innerHTML = gallery
  .map((label) => `<div class="gallery-item" data-label="${label}"></div>`)
  .join("");
