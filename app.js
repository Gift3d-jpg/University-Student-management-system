const iconPaths = {
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  back: '<path d="m15 18-6-6 6-6"/><path d="M20 12H9"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
  user: '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/>',
  home: '<path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/>',
  students:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  courses:
    '<rect x="3" y="4" width="8" height="7" rx="1"/><rect x="13" y="4" width="8" height="7" rx="1"/><rect x="3" y="13" width="8" height="7" rx="1"/><rect x="13" y="13" width="8" height="7" rx="1"/>',
  departments:
    '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M9 9h.01M15 9h.01M9 12h.01M15 12h.01"/>',
  faculty:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/>',
  rooms:
    '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M9 9h.01M15 9h.01M9 12h.01M15 12h.01"/>',
  fees: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  settings:
    '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.6.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.6-.9l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.9l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.6-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.6.9l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 1.9Z"/>',
  download:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  chart: '<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
  trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
};

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");

const students = [
  {
    name: "Alex Morgan",
    email: "alex.morgan@northbridge.edu",
    department: "Computer Science",
    id: "ST-2024-001",
    year: "Year 3",
    enrolled: "Sep 02, 2024",
    status: "Active",
  },
  {
    name: "Emma Wilson",
    email: "emma.wilson@northbridge.edu",
    department: "Computer Science",
    id: "ST-2024-002",
    year: "Year 3",
    enrolled: "Sep 02, 2024",
    status: "Active",
  },
  {
    name: "Liam Chen",
    email: "liam.chen@northbridge.edu",
    department: "Engineering",
    id: "ST-2025-014",
    year: "Year 2",
    enrolled: "Sep 01, 2025",
    status: "Active",
  },
  {
    name: "Olivia Brown",
    email: "olivia.brown@northbridge.edu",
    department: "Business",
    id: "ST-2023-008",
    year: "Year 4",
    enrolled: "Sep 04, 2023",
    status: "Active",
  },
  {
    name: "Noah Williams",
    email: "noah.williams@northbridge.edu",
    department: "Computer Science",
    id: "ST-2025-021",
    year: "Year 2",
    enrolled: "Sep 01, 2025",
    status: "Active",
  },
  {
    name: "Sophie Patel",
    email: "sophie.patel@northbridge.edu",
    department: "Mathematics",
    id: "ST-2024-035",
    year: "Year 3",
    enrolled: "Sep 02, 2024",
    status: "Active",
  },
];

const courseData = [
  {
    code: "CSC301",
    name: "Algorithms & Data Structures",
    department: "Computer Science",
    lecturer: "Brenard Cole",
    credits: "3 credits",
    students: "86 / 100",
  },
  {
    code: "CSC305",
    name: "Database Systems",
    department: "Computer Science",
    lecturer: "Dr. James Park",
    credits: "3 credits",
    students: "72 / 80",
  },
  {
    code: "CSC311",
    name: "Software Engineering",
    department: "Computer Science",
    lecturer: "Dr. Maria Garcia",
    credits: "3 credits",
    students: "64 / 80",
  },
  {
    code: "CSC320",
    name: "Computer Networks",
    department: "Computer Science",
    lecturer: "Dr. Robert Kim",
    credits: "3 credits",
    students: "58 / 70",
  },
  {
    code: "MTH301",
    name: "Probability & Statistics",
    department: "Mathematics",
    lecturer: "Dr. Aisha Khan",
    credits: "3 credits",
    students: "91 / 100",
  },
  {
    code: "COS210",
    name: "Technical Writing",
    department: "General Education",
    lecturer: "Prof. Ellen Reed",
    credits: "3 credits",
    students: "42 / 50",
  },
];

const departmentData = [
  {
    name: "Computer Science",
    code: "CS",
    faculty: "Faculty of Science",
    head: "Dr. Helen Brooks",
    students: "2,184",
    courses: "58",
    staff: "124",
  },
  {
    name: "Engineering",
    code: "ENG",
    faculty: "Faculty of Engineering",
    head: "Dr. David Miller",
    students: "1,640",
    courses: "72",
    staff: "98",
  },
  {
    name: "Business",
    code: "BUS",
    faculty: "Faculty of Business",
    head: "Dr. Rachel Adams",
    students: "1,260",
    courses: "48",
    staff: "64",
  },
  {
    name: "Mathematics",
    code: "MAT",
    faculty: "Faculty of Science",
    head: "Dr. Aisha Khan",
    students: "842",
    courses: "36",
    staff: "28",
  },
  {
    name: "General Education",
    code: "GEN",
    faculty: "Faculty of Arts",
    head: "Prof. Ellen Reed",
    students: "916",
    courses: "106",
    staff: "42",
  },
];

const attendanceStudents = [
  { name: "Alex Morgan", id: "ST-2024-001", rate: "94.2%", attendance: "Present" },
  { name: "Emma Wilson", id: "ST-2024-002", rate: "98.5%", attendance: "Present" },
  { name: "Noah Williams", id: "ST-2025-021", rate: "90.7%", attendance: "Absent" },
  { name: "Sophie Patel", id: "ST-2024-035", rate: "98.1%", attendance: "Present" },
  { name: "Ethan Davis", id: "ST-2024-041", rate: "92.0%", attendance: "Present" },
  { name: "Isabella Clark", id: "ST-2024-052", rate: "95.4%", attendance: "Present" },
];

const gradeRecords = [
  { name: "Alex Morgan", quiz: 18, midterm: 27, final: null },
  { name: "Emma Wilson", quiz: 20, midterm: 28, final: null },
  { name: "Noah Williams", quiz: 16, midterm: 24, final: null },
  { name: "Sophie Patel", quiz: 20, midterm: 29, final: null },
  { name: "Ethan Davis", quiz: 17, midterm: 25, final: null },
  { name: "Isabella Clark", quiz: 19, midterm: 26, final: null },
];

const sections = [
  { label: "Overview", icon: "home", group: "Workspace" },
  {
    label: "Teaching overview",
    icon: "chart",
    group: "Workspace",
    roles: ["Admin"],
  },
  {
    label: "Students",
    icon: "students",
    group: "Workspace",
    roles: ["Admin"],
  },
  { label: "Courses", icon: "courses", group: "Workspace", roles: ["Admin"] },
  {
    label: "Departments",
    icon: "departments",
    group: "Workspace",
    roles: ["Admin"],
  },
  { label: "Faculty", icon: "faculty", group: "Workspace", roles: ["Admin"] },
  {
    label: "Users & roles",
    icon: "user",
    group: "Workspace",
    roles: ["Admin"],
  },
  {
    label: "My courses",
    icon: "courses",
    group: "Workspace",
    roles: ["Admin", "Student"],
  },
  {
    label: "Attendance",
    icon: "calendar",
    group: "Workspace",
    roles: ["Admin"],
  },
  {
    label: "Gradebook",
    icon: "chart",
    group: "Workspace",
    roles: ["Admin"],
  },
  { label: "Rooms", icon: "rooms", group: "Operations", roles: ["Admin"] },
  {
    label: "Fees",
    icon: "fees",
    group: "Operations",
    roles: ["Admin", "Student"],
  },
  {
    label: "Calendar",
    icon: "calendar",
    group: "Operations",
    roles: ["Admin", "Student"],
  },
  { label: "Settings", icon: "settings", group: "Other" },
];

const notificationsByRole = {
  Admin: [
    {
      id: "admin-approvals",
      icon: "students",
      title: "Enrollment requests need review",
      detail: "8 enrollment requests and 4 record changes are awaiting approval.",
      message:
        "There are 12 requests awaiting review: 8 enrollment requests and 4 student record changes.",
      read: false,
    },
    {
      id: "admin-grades",
      icon: "chart",
      title: "Midterm grades are ready",
      detail: "24 scores are ready for review in the Gradebook.",
      message:
        "The Gradebook has 24 midterm scores ready for review for the Fall 2026 semester.",
      read: false,
    },
    {
      id: "admin-registration",
      icon: "calendar",
      title: "Spring 2027 registration is open",
      detail: "Course registration is open through December 11.",
      message:
        "Spring 2027 course registration is now open. Review course requirements and complete registration by December 11.",
      read: false,
    },
  ],
  Student: [
    {
      id: "student-registration",
      icon: "calendar",
      title: "Spring 2027 registration is open",
      detail:
        "Review your program requirements and select courses before December 11.",
      message:
        "Spring 2027 course registration is now open. Review your program requirements and select your courses before December 11.",
      read: false,
    },
    {
      id: "student-fees",
      icon: "fees",
      title: "Fee payment reminder",
      detail: "Your outstanding balance of $1,250 is due December 4.",
      message:
        "You have an outstanding fee balance of $1,250. Please make payment by December 4.",
      read: false,
    },
    {
      id: "student-attendance",
      icon: "chart",
      title: "Your attendance is on track",
      detail: "Your current attendance is 94.2%. Keep up the good work.",
      message:
        "Your attendance is currently 94.2%, which is in good standing.",
      read: false,
    },
  ],
};

const state = {
  page: "login",
  role: "Student",
  section: "Overview",
  mobileNavOpen: false,
  studentQuery: "",
  courseQuery: "",
  department: "All departments",
  year: "All years",
  status: "All statuses",
  enrollmentPeriod: "Last 6 years",
  modalOpen: false,
  editingStudentId: null,
  selectedStudentId: null,
  studentDetailTab: "Overview",
  darkMode: false,
  openNotificationId: null,
  pendingNotificationDeleteId: null,
  profileMenuOpen: false,
};

const viewHistory = [];
let themeTransitionTimeout;

function currentView() {
  return {
    section: state.section,
    selectedStudentId: state.selectedStudentId,
    courseQuery: state.courseQuery,
  };
}

function navigateTo(section, selectedStudentId = null, options = {}) {
  const current = currentView();
  const next = {
    section,
    selectedStudentId,
    courseQuery: options.courseQuery ?? state.courseQuery,
  };

  if (
    current.section !== next.section ||
    current.selectedStudentId !== next.selectedStudentId ||
    current.courseQuery !== next.courseQuery
  ) {
    viewHistory.push(current);
  }

  state.section = next.section;
  state.selectedStudentId = next.selectedStudentId;
  state.courseQuery = next.courseQuery;
  state.mobileNavOpen = false;
  state.profileMenuOpen = false;
  render();
}

function navigateBack() {
  const previous = viewHistory.pop();
  if (previous) {
    state.section = previous.section;
    state.selectedStudentId = previous.selectedStudentId;
    state.courseQuery = previous.courseQuery;
  } else {
    state.section = "Overview";
    state.selectedStudentId = null;
  }
  state.mobileNavOpen = false;
  state.profileMenuOpen = false;
  render();
}

function icon(name, className = "icon") {
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.home}</svg>`;
}

function toggleTheme() {
  const root = document.documentElement;
  clearTimeout(themeTransitionTimeout);
  root.classList.add("theme-transitioning");
  state.darkMode = !state.darkMode;
  root.dataset.theme = state.darkMode ? "dark" : "light";

  const button = app.querySelector('[data-action="toggle-theme"]');
  button.innerHTML = icon(state.darkMode ? "sun" : "moon");
  button.setAttribute(
    "aria-label",
    `Switch to ${state.darkMode ? "light" : "dark"} mode`,
  );
  button.setAttribute("aria-pressed", String(state.darkMode));
  button.title = `Switch to ${state.darkMode ? "light" : "dark"} mode`;

  themeTransitionTimeout = window.setTimeout(() => {
    root.classList.remove("theme-transitioning");
  }, 2000);
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(
    () => toast.classList.remove("visible"),
    3000,
  );
}

function renderSchoolMarquee(className = "") {
  return `
    <div class="school-marquee ${className}" aria-label="Northbridge University">
      <div class="school-marquee-track">
        <span class="school-marquee-item">Northbridge University <span aria-hidden="true">✦</span></span>
        <span class="school-marquee-item" aria-hidden="true">Northbridge University <span>✦</span></span>
      </div>
    </div>`;
}

function renderLogin() {
  app.innerHTML = `
    <main class="login-shell">
      <section class="login-promo" aria-label="Campus introduction">
        ${renderSchoolMarquee()}
        <div class="promo-copy">
          <h1>One connected campus.</h1>
          <p>Everything that moves your university forward, in one place.</p>
        </div>
        <div class="promo-stats">
          <div class="promo-stat"><strong>42</strong><span>Departments</span></div>
          <div class="promo-stat"><strong>320</strong><span>Courses</span></div>
        </div>
      </section>
      <section class="login-panel">
        ${renderSchoolMarquee("school-marquee--mobile")}
        <div class="login-form-wrap">
          <div class="brand">
            <div class="brand-name">campus</div>
            <div class="brand-subtitle">Northbridge University</div>
          </div>
          <p class="eyebrow">Welcome back</p>
          <h2>Sign in to campus</h2>
          <p class="form-intro">Your university, all in one place.</p>
          <div class="role-switch" aria-label="Choose your account type">
            ${["Admin", "Student"].map((role) => `<button type="button" class="${state.role === role ? "selected" : ""}" data-role="${role}" aria-pressed="${state.role === role}">${role}</button>`).join("")}
          </div>
          <form id="login-form">
            <label class="field">University email
              <input name="email" type="email" autocomplete="username" value="${state.role === "Admin" ? "j.saltzman@northbridge.edu" : "alex.morgan@northbridge.edu"}" required />
            </label>
            <label class="field">Password
              <input name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required />
            </label>
            <div class="form-row">
              <label class="checkbox-label"><input type="checkbox" name="remember" /> Remember me</label>
              <button class="text-button" type="button" data-action="forgot">Forgot password?</button>
            </div>
            <button class="primary-button full-width" type="submit">Sign in ${icon("arrow")}</button>
          </form>
          <p class="demo-notice">Demo preview only. Authentication and password recovery are not connected; any non-empty password opens the selected demo role.</p>
        </div>
      </section>
    </main>`;
}

function renderForgotPassword() {
  app.innerHTML = `
    <main class="login-shell">
      <section class="login-promo" aria-label="Campus introduction">
        ${renderSchoolMarquee()}
        <div class="promo-copy">
          <h1>One connected campus.</h1>
          <p>Everything that moves your university forward, in one place.</p>
        </div>
        <div class="promo-stats">
          <div class="promo-stat"><strong>42</strong><span>Departments</span></div>
          <div class="promo-stat"><strong>320</strong><span>Courses</span></div>
        </div>
      </section>
      <section class="login-panel">
        ${renderSchoolMarquee("school-marquee--mobile")}
        <div class="login-form-wrap">
          <div class="brand"><div class="brand-name">campus</div><div class="brand-subtitle">Northbridge University</div></div>
          <p class="eyebrow">Account recovery</p>
          <h2>Forgot your password?</h2>
          <p class="form-intro">Enter your university email. This demo does not send password reset emails.</p>
          <form id="forgot-form">
            <label class="field">University email
              <input name="email" type="email" autocomplete="email" placeholder="you@northbridge.edu" required />
            </label>
            <button class="primary-button full-width" type="submit">Send reset link ${icon("arrow")}</button>
          </form>
          <a class="back-link" href="#" data-action="back-login">‹ &nbsp; Back to sign in</a>
          <div class="inbox-note"><strong>Demo account recovery</strong>Password recovery is a visual preview and will not send an email.</div>
        </div>
      </section>
    </main>`;
}

function renderSidebar() {
  let currentGroup = "";
  const visibleSections = sections.filter(
    (item) => !item.roles || item.roles.includes(state.role),
  );
  const nav = visibleSections
    .map((item) => {
      const heading =
        item.group !== currentGroup
          ? `<p class="nav-label">${item.group}</p>`
          : "";
      currentGroup = item.group;
      const count = item.label === "Students" ? students.length : item.count;
      return `${heading}<button type="button" class="nav-item ${state.section === item.label ? "active" : ""}" data-section="${item.label}">
      ${icon(item.icon)}<span>${item.label}</span>${count ? `<span class="nav-count">${count}</span>` : ""}
    </button>`;
    })
    .join("");

  return `
    <button class="mobile-scrim ${state.mobileNavOpen ? "visible" : ""}" data-action="close-nav" aria-label="Close navigation"></button>
    <aside class="sidebar ${state.mobileNavOpen ? "open" : ""}" aria-label="Main navigation">
      <div class="brand"><div class="brand-name">campus</div><div class="brand-subtitle">Northbridge University</div></div>
      <nav class="side-nav">${nav}</nav>
      <div class="sidebar-bottom">
        <div class="campus-card"><div class="campus-emblem">${icon("departments")}</div><div class="campus-info"><strong>Northbridge University</strong><span>Fall semester · 2026</span></div></div>
      </div>
    </aside>`;
}

function renderTopbar() {
  const profile =
    state.role === "Admin"
      ? { name: "John Saltzman", initials: "JS", label: "Admin" }
      : { name: "Alex Morgan", initials: "AM", label: "Student" };
  const unreadNotifications = notificationsByRole[state.role].filter(
    (notification) => !notification.read,
  ).length;
  const canGoBack =
    viewHistory.length > 0 ||
    state.section !== "Overview" ||
    Boolean(state.selectedStudentId);
  return `
    <header class="topbar">
      <button class="icon-button back-button" type="button" data-action="go-back" aria-label="Go back" title="Go back" ${canGoBack ? "" : "disabled"}>${icon("back")}</button>
      <button class="icon-button menu-button" type="button" data-action="toggle-nav" aria-label="Open navigation">${icon("menu")}</button>
      <div class="brand mobile-brand"><div class="brand-name">campus</div></div>
      <div class="global-search-wrap">
        <label class="global-search">${icon("search")}<input class="global-search-input" type="search" aria-label="Search campus" placeholder="${state.role === "Student" ? "Search courses..." : "Search students, courses, and departments..."}" role="combobox" aria-autocomplete="list" aria-controls="global-search-results" aria-expanded="false" autocomplete="off" /></label>
        <div class="global-search-results" id="global-search-results" role="listbox" hidden></div>
      </div>
      <div class="topbar-spacer"></div>
      <span class="term-pill">Fall 2026</span>
      <button class="icon-button theme-toggle" type="button" data-action="toggle-theme" aria-label="Switch to ${state.darkMode ? "light" : "dark"} mode" aria-pressed="${state.darkMode}" title="Switch to ${state.darkMode ? "light" : "dark"} mode">${icon(state.darkMode ? "sun" : "moon")}</button>
      <button class="icon-button" type="button" data-action="notifications" aria-label="Notifications${unreadNotifications ? `, ${unreadNotifications} unread` : ""}">${icon("bell")}${unreadNotifications ? '<span class="notification-dot"></span>' : ""}</button>
      <div class="profile-control">
        <button class="profile-button" type="button" data-action="profile" aria-label="${profile.name}, ${profile.label}" aria-haspopup="menu" aria-expanded="${state.profileMenuOpen}">
          <span class="profile-copy"><strong>${profile.name}</strong><span>${profile.label}</span></span><span class="avatar">${profile.initials}</span>
        </button>
        ${
          state.profileMenuOpen
            ? `<div class="profile-menu" role="menu"><span>${profile.name} · ${profile.label}</span><button type="button" role="menuitem" data-action="sign-out">Sign out</button></div>`
            : ""
        }
      </div>
    </header>`;
}

function updateGlobalSearchResults(input) {
  const resultsContainer = app.querySelector("#global-search-results");
  const query = input.value.trim().toLowerCase();
  if (!resultsContainer) return;

  if (!query) {
    resultsContainer.hidden = true;
    input.setAttribute("aria-expanded", "false");
    resultsContainer.innerHTML = "";
    return;
  }

  const results = [];
  if (state.role === "Admin") {
    students
      .filter((student) =>
        [student.name, student.email, student.id, student.department].some(
          (value) => value.toLowerCase().includes(query),
        ),
      )
      .forEach((student) =>
        results.push({
          type: "student",
          id: student.id,
          query: student.name,
          title: student.name,
          detail: `${student.department} · ${student.id}`,
        }),
      );
  }
  courseData
    .filter((course) =>
      [course.code, course.name, course.department, course.lecturer].some(
        (value) => value.toLowerCase().includes(query),
      ),
    )
    .forEach((course) =>
      results.push({
        type: "course",
        id: course.code,
        query: course.code,
        title: course.name,
        detail: `${course.code} · ${course.department}`,
      }),
    );
  if (state.role === "Admin") {
    departmentData
      .filter((department) =>
        [department.name, department.code, department.head].some((value) =>
          value.toLowerCase().includes(query),
        ),
      )
      .forEach((department) =>
        results.push({
          type: "department",
          id: department.code,
          query: department.name,
          title: department.name,
          detail: `Department · ${department.code}`,
        }),
      );
  }

  resultsContainer.innerHTML = results.length
    ? results
        .slice(0, 7)
        .map(
          (result) => `
            <button class="global-search-result" type="button" role="option" aria-selected="false" data-search-type="${result.type}" data-search-id="${escapeHtml(result.id)}" data-search-query="${escapeHtml(result.query)}">
              <span class="global-search-result-icon">${icon(result.type === "student" ? "students" : result.type === "course" ? "courses" : "departments")}</span>
              <span><strong>${escapeHtml(result.title)}</strong><small>${escapeHtml(result.detail)}</small></span>
            </button>`,
        )
        .join("")
    : '<p class="global-search-empty">No matching records found.</p>';
  resultsContainer.hidden = false;
  input.setAttribute("aria-expanded", "true");
}

function metricCard(title, value, change, iconName) {
  return `<article class="metric-card">
    <div class="metric-top"><span>${title}</span><span class="metric-icon">${icon(iconName)}</span></div>
    <div class="metric-value">${value}</div>
    <div class="metric-change">${change}</div>
  </article>`;
}

function renderOverview() {
  if (state.role === "Student") return renderStudentOverview();

  const bars = [45, 54, 61, 70, 79, 87];
  const visibleBars =
    state.enrollmentPeriod === "Last 3 years" ? bars.slice(-3) : bars;
  const firstYear = 2027 - visibleBars.length;
  return `
    <div class="page-heading">
      <div><h1>Campus overview</h1><p>Wednesday, November 25, 2026 · Fall semester</p></div>
      <div class="heading-actions"><button class="secondary-button" data-action="report">${icon("download")} Export report</button></div>
    </div>
    <section class="metric-grid" aria-label="Campus statistics">
      ${metricCard("Total students", "6,842", "↑ 3.2% from last term", "students")}
      ${metricCard("Active courses", "320", "Across 42 departments", "courses")}
      ${metricCard("Attendance rate", "94.2%", "↑ 2.1% from last month", "calendar")}
      ${metricCard("Fees collected", "$2.48M", "67% of semester target", "fees")}
    </section>
    <div class="dashboard-grid">
      <section class="panel">
        <div class="panel-heading"><div><h2>Enrollment trends</h2><p>Students enrolled per academic year</p></div><select class="select-compact" aria-label="Enrollment period"><option ${state.enrollmentPeriod === "Last 6 years" ? "selected" : ""}>Last 6 years</option><option ${state.enrollmentPeriod === "Last 3 years" ? "selected" : ""}>Last 3 years</option></select></div>
        <div class="chart" role="img" aria-label="Enrollment increases steadily from ${firstYear} to 2026">
          ${visibleBars.map((height, index) => `<div class="chart-column"><div class="chart-bar ${index === visibleBars.length - 1 ? "current" : ""}" style="height:${height}%"></div><span class="chart-label">${firstYear + index}</span></div>`).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-heading"><div><h2>Approvals need your attention</h2><p>Keep campus operations moving</p></div>${icon("trend")}</div>
        <div class="approval-summary"><span class="approval-number">12</span><div><strong>12 approvals need your attention</strong><span>8 enrollment requests · 4 record changes</span></div></div>
        <button class="approval-link" type="button" data-action="approvals">Review requests ${icon("arrow")}</button>
      </section>
    </div>
    <section class="panel">
      <div class="panel-heading"><div><h2>Latest registrations</h2><p>Recently added to Northbridge University</p></div><button class="text-button" type="button" data-section="Students">View all students →</button></div>
      <div class="registration-list">
        ${students
          .slice(2, 6)
          .map(
            (student) =>
              `<div class="registration"><span class="registration-avatar">${initials(student.name)}</span><div class="registration-copy"><strong>${escapeHtml(student.name)}</strong><span>${escapeHtml(student.department)} · ${escapeHtml(student.year)}</span></div><span class="status-badge">${escapeHtml(student.status)}</span></div>`,
          )
          .join("")}
      </div>
    </section>`;
}

function renderTeachingOverview() {
  const schedule = [
    { time: "09:00", title: courseData[0].name, detail: `${courseData[0].code} · 87 students · Hall B-204` },
    { time: "14:00", title: "Advanced Algorithms", detail: "CSC410 · 64 students · Hall A-102" },
  ];
  return `
    <div class="page-heading"><div><h1>Teaching overview</h1><p>Your teaching schedule and course tasks for Fall 2026.</p></div></div>
    <section class="metric-grid">
      ${metricCard("Teaching courses", "3", "Fall 2026 semester", "courses")}
      ${metricCard("Enrolled students", "214", "Across assigned courses", "students")}
      ${metricCard("Average attendance", "93.6%", "↑ 1.4% this month", "calendar")}
      ${metricCard("Grades to review", "24", "Midterm grades ready", "chart")}
    </section>
    <div class="dashboard-grid">
      <section class="panel"><div class="panel-heading"><div><h2>Today's schedule</h2><p>Teaching sessions</p></div></div>
        <div class="registration-list">${schedule.map((item) => `<div class="registration"><span class="registration-avatar">${item.time}</span><div class="registration-copy"><strong>${item.title}</strong><span>${item.detail}</span></div></div>`).join("")}</div>
      </section>
      <section class="panel"><div class="panel-heading"><div><h2>Course tasks</h2><p>Items that need attention</p></div></div>
        <div class="registration-list">
          <div class="registration"><span class="metric-icon">${icon("chart")}</span><div class="registration-copy"><strong>24 midterm grades to review</strong><span>CSC301 · Due today</span></div></div>
          <div class="registration"><span class="metric-icon">${icon("calendar")}</span><div class="registration-copy"><strong>Review 3 absence requests</strong><span>CSC301 · Due this week</span></div></div>
          <div class="registration"><span class="metric-icon">${icon("courses")}</span><div class="registration-copy"><strong>Upload course materials</strong><span>CSC305 · Friday, Nov 27</span></div></div>
        </div>
      </section>
    </div>
    <section class="panel"><div class="panel-heading"><div><h2>Assigned courses</h2><p>Teaching assignments for Fall 2026</p></div><button class="text-button" type="button" data-section="My courses">View courses →</button></div>
      <div class="registration-list">${courseData.slice(0, 3).map((course) => `<div class="registration"><span class="registration-avatar">${course.code}</span><div class="registration-copy"><strong>${course.name}</strong><span>${course.students} students · ${course.credits}</span></div><span class="status-badge">Active</span></div>`).join("")}</div>
    </section>`;
}

function renderStudentOverview() {
  return `
    <div class="page-heading"><div><h1>Welcome back, Alex</h1><p>BSc Computer Science · Year 3 · ST-2024-001</p></div></div>
    <section class="panel student-registration-banner" style="margin-bottom:18px"><div class="panel-heading" style="margin:0;align-items:center"><div><h2>Your next chapter starts here.</h2><p>Spring 2027 registration is open until December 11.</p></div><button class="primary-button" type="button" data-section="My courses">Register for courses</button></div></section>
    <section class="metric-grid">
      ${metricCard("Cumulative GPA", "3.72", "78 completed credits", "chart")}
      ${metricCard("Enrolled courses", "6", "18 credits · Fall 2026", "courses")}
      ${metricCard("Attendance", "94.2%", "Good standing", "calendar")}
      ${metricCard("Outstanding fees", "$1,250", "Due December 4", "fees")}
    </section>
    <div class="dashboard-grid">
      <section class="panel"><div class="panel-heading"><div><h2>Your next classes</h2><p>Coming up this week</p></div></div>
        <div class="registration-list">${courseData
          .slice(0, 3)
          .map(
            (course, index) =>
              `<div class="registration"><span class="registration-avatar">${course.code}</span><div class="registration-copy"><strong>${course.name}</strong><span>${index === 0 ? "Wed · 09:00 · Hall B-204" : index === 1 ? "Thu · 11:00 · Lab C-106" : "Fri · 14:00 · Hall A-102"}</span></div><button class="text-button" type="button" data-section="My courses">View course →</button></div>`,
          )
          .join("")}</div>
      </section>
      <section class="panel"><div class="panel-heading"><div><h2>Your progress</h2><p>Academic standing</p></div></div>
        <div class="metric-value" style="color:var(--blue)">3.72</div><p class="form-intro">Cumulative GPA · Dean's list</p>
        <div class="progress-track"><div class="progress-fill"></div></div>
        <p class="metric-change" style="margin-top:12px">78 of 120 credits completed</p>
        <button class="approval-link" type="button" data-section="My courses">View academic history →</button>
      </section>
    </div>
    <section class="panel"><div class="panel-heading"><div><h2>Campus update</h2><p>Important information for students</p></div></div><div class="approval-summary"><span class="metric-icon">${icon("calendar")}</span><div><strong>Spring 2027 course registration is now open</strong><span>Review your program requirements and select your courses before December 11.</span></div></div></section>`;
}

function renderNotifications() {
  const notifications = notificationsByRole[state.role];

  return `
    <div class="page-heading">
      <div><h1>Notifications</h1><p>Your latest campus updates and reminders.</p></div>
      <button class="secondary-button" type="button" data-section="Overview">Back to overview</button>
    </div>
    <section class="panel notification-list" aria-label="Recent notifications">
      ${
        notifications.length
          ? notifications
        .map(
          (notification) => {
            const isOpen = state.openNotificationId === notification.id;
            return `
            <article class="notification-item ${notification.read ? "is-read" : "is-unread"}">
              <span class="metric-icon">${icon(notification.icon)}</span>
              <div class="notification-copy">
                <strong>${notification.title}</strong>
                <p>${notification.detail}</p>
                <time datetime="2026-11-25">Nov 25, 2026</time>
                ${
                  isOpen
                    ? `<div class="notification-message" id="notification-message-${notification.id}" role="region" aria-label="Full message">${notification.message}</div>`
                    : ""
                }
              </div>
              <div class="notification-controls">
                <span class="status-badge ${notification.read ? "" : "pending"}">${notification.read ? "Read" : "Unread"}</span>
                <button class="text-button" type="button" data-action="open-notification" data-notification-id="${notification.id}" aria-expanded="${isOpen}" ${isOpen ? `aria-controls="notification-message-${notification.id}"` : ""}>${isOpen ? "Close message" : "Read message"}</button>
                ${
                  notification.read
                    ? ""
                    : `<button class="text-button" type="button" data-action="mark-notification-read" data-notification-id="${notification.id}">Mark as read</button>`
                }
                <button class="text-button notification-delete" type="button" data-action="delete-notification" data-notification-id="${notification.id}">Delete</button>
              </div>
            </article>`;
          },
        )
        .join("")
          : `<p class="notification-empty">You have no notifications.</p>`
      }
    </section>`;
}

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function filteredStudents() {
  const query = state.studentQuery.trim().toLowerCase();
  return students.filter((student) => {
    const matchesQuery =
      !query ||
    [student.name, student.email, student.department, student.id].some(
      (value) => value.toLowerCase().includes(query),
    );
    const matchesDepartment =
      state.department === "All departments" ||
      student.department === state.department;
    const matchesYear =
      state.year === "All years" || student.year === state.year;
    const matchesStatus =
      state.status === "All statuses" || student.status === state.status;
    return matchesQuery && matchesDepartment && matchesYear && matchesStatus;
  });
}

function renderStudentTable() {
  const rows = filteredStudents();
  return rows
    .map(
      (student) => `<tr>
    <td><button class="student-name text-button" type="button" data-action="student-detail" data-student-id="${escapeHtml(student.id)}"><span class="student-initials">${initials(student.name)}</span>${escapeHtml(student.name)}</button></td>
    <td>${escapeHtml(student.email)}</td>
    <td>${escapeHtml(student.department)}</td>
    <td>${escapeHtml(student.id)}</td>
    <td>${escapeHtml(student.year)}</td>
    <td>${escapeHtml(student.enrolled)}</td>
    <td><span class="status-badge">${escapeHtml(student.status)}</span></td>
  </tr>`,
    )
    .join("");
}

function renderStudentDetail() {
  const student = students.find((item) => item.id === state.selectedStudentId);
  if (!student) {
    state.selectedStudentId = null;
    return renderStudents();
  }
  const isAlex = student.id === "ST-2024-001";
  const activeTab = state.studentDetailTab;
  const tabContent =
    activeTab === "Enrollments"
      ? `<div class="panel"><div class="panel-heading"><div><h2>Current enrollments</h2><p>Fall 2026 · ${isAlex ? "6 courses · 18 credits" : "4 courses · 12 credits"}</p></div></div><div class="registration-list">${courseData
          .slice(0, isAlex ? 3 : 2)
          .map(
            (course) =>
              `<div class="registration"><span class="registration-avatar">${course.code}</span><div class="registration-copy"><strong>${course.name}</strong><span>${course.credits} · ${course.lecturer}</span></div><span class="status-badge">Enrolled</span></div>`,
          )
          .join("")}</div></div>`
      : activeTab === "Academic history"
        ? `<div class="panel"><div class="panel-heading"><div><h2>Academic history</h2><p>Completed terms and academic standing</p></div></div><div class="registration-list"><div class="registration"><div class="registration-copy"><strong>Fall 2025</strong><span>GPA 3.68 · 18 credits completed</span></div><span class="status-badge">Complete</span></div><div class="registration"><div class="registration-copy"><strong>Spring 2025</strong><span>GPA 3.75 · 18 credits completed</span></div><span class="status-badge">Complete</span></div></div></div>`
        : `<div class="dashboard-grid"><section class="panel"><div class="panel-heading"><div><h2>Personal information</h2></div></div><p class="eyebrow">University email</p><p>${escapeHtml(student.email)}</p><p class="eyebrow">Phone number</p><p>+1 (617) 555-0124</p><p class="eyebrow">Department</p><p>${escapeHtml(student.department)} · ${escapeHtml(student.id.slice(0, 2))}</p><p class="eyebrow">Academic advisor</p><p>Brenard Cole</p></section><section class="panel"><div class="panel-heading"><div><h2>Enrollment details</h2></div></div><p>Fall 2026 · 6 courses · 18 credits</p><p>Program: ${escapeHtml(student.department)}</p><p>Expected graduation: May 2028</p><p>Student status: Full-time</p><button class="approval-link" type="button" data-detail-tab="Enrollments">View enrolled courses →</button></section></div>`;
  return `
    <div class="page-heading"><div><button class="back-link" type="button" data-action="back-students">‹ &nbsp; Back to student records</button><h1>${escapeHtml(student.name)}</h1><p>Student records / ${escapeHtml(student.id)}</p></div><div class="heading-actions"><button class="primary-button" type="button" data-action="edit-student">${icon("user")} Edit student</button></div></div>
    <section class="panel" style="margin-bottom:18px"><div class="panel-heading" style="margin:0"><div><h2>${escapeHtml(student.name)}</h2><p>${escapeHtml(student.department)} · ${escapeHtml(student.year)} · ${escapeHtml(student.id)} · Joined ${escapeHtml(student.enrolled)}</p></div><span class="status-badge">Active</span></div></section>
    <nav class="detail-tabs" aria-label="Student record sections">${["Overview", "Enrollments", "Academic history"].map((tab) => `<button type="button" class="${activeTab === tab ? "active" : ""}" data-detail-tab="${tab}">${tab}</button>`).join("")}</nav>
    ${activeTab === "Overview" ? `<section class="metric-grid">${metricCard("Cumulative GPA", isAlex ? "3.72" : "3.64", "78 completed credits", "chart")}${metricCard("Attendance", "94.2%", "Fall 2026", "calendar")}${metricCard("Outstanding fees", "$1,250", "Due December 4, 2026", "fees")}</section>` : ""}
    ${tabContent}`;
}

function renderStudents() {
  const departments = [
    "All departments",
    ...new Set(students.map((student) => student.department)),
  ];
  return `
    <div class="page-heading">
      <div><h1>Student records</h1><p>Manage student profiles, enrollment, and academic status.</p></div>
      <div class="heading-actions">
        <button class="secondary-button" type="button" data-action="export">${icon("download")} Export CSV</button>
        <button class="primary-button" type="button" data-action="add-student">${icon("plus")} Add student</button>
      </div>
    </div>
    <section class="filter-bar" aria-label="Student record filters">
      <label class="search-box">${icon("search")}<input id="student-search" type="search" placeholder="Search by name, ID, or email" value="${escapeHtml(state.studentQuery)}" /></label>
      <select class="filter-control" id="department-filter" aria-label="Filter by department">${departments.map((dept) => `<option ${state.department === dept ? "selected" : ""}>${escapeHtml(dept)}</option>`).join("")}</select>
      <select class="filter-control" id="year-filter" aria-label="Filter by year">${["All years", "Year 1", "Year 2", "Year 3", "Year 4"].map((year) => `<option ${state.year === year ? "selected" : ""}>${year}</option>`).join("")}</select>
      <select class="filter-control" id="status-filter" aria-label="Filter by status">${["All statuses", "Active"].map((status) => `<option ${state.status === status ? "selected" : ""}>${status}</option>`).join("")}</select>
    </section>
    <section class="panel table-panel">
      <div class="table-title"><h2>Student records</h2><span>${students.length} sample records</span></div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Student name</th><th>University email</th><th>Department</th><th>Student ID</th><th>Year</th><th>Enrolled</th><th>Status</th></tr></thead>
          <tbody id="student-rows">${renderStudentTable()}</tbody>
        </table>
      </div>
      <div class="table-footer"><span id="results-count">Showing ${filteredStudents().length ? 1 : 0}–${filteredStudents().length} of ${students.length} records</span><div class="pagination"><button type="button" disabled>‹ Previous</button><button type="button" class="active" aria-current="page">1</button><button type="button" disabled>Next →</button></div></div>
    </section>
    <div class="privacy-note"><strong>Sample student records</strong>This preview updates records in the browser only; it is not connected to university systems.</div>`;
}

function renderCourses() {
  return `
    <div class="page-heading"><div><h1>Course catalog</h1><p>Manage courses, credit hours, and teaching assignments.</p></div><div class="heading-actions"><button class="primary-button" type="button" data-action="create-course">${icon("plus")} Create course</button></div></div>
    <section class="metric-grid">
      ${metricCard("Active courses", "320", "Fall 2026 catalog", "courses")}
      ${metricCard("Enrolled students", "6,842", "Across all departments", "students")}
      ${metricCard("Open sections", "48", "Seats still available", "calendar")}
      ${metricCard("Credit range", "1–6", "Per course", "chart")}
    </section>
    <section class="panel table-panel">
      <div class="filter-bar" style="border:0;margin:0;border-radius:0"><label class="search-box">${icon("search")}<input type="search" placeholder="Search courses by code or name" aria-label="Search courses" /></label><select class="filter-control" aria-label="Filter course department"><option>All departments</option><option>Computer Science</option><option>Mathematics</option></select><select class="filter-control" aria-label="Filter course status"><option>Status: Active</option><option>Status: Draft</option></select></div>
      <div class="table-wrap"><table class="data-table"><thead><tr><th>Course name</th><th>Course code / Department</th><th>Lecturer</th><th>Credits</th><th>Enrollment</th><th>Status</th></tr></thead><tbody>
      ${courseData.map((course) => `<tr><td>${course.name}</td><td>${course.code} · ${course.department}</td><td>${course.lecturer}</td><td>${course.credits}</td><td>${course.students}</td><td><span class="status-badge">Active</span></td></tr>`).join("")}
      </tbody></table></div><div class="table-footer"><span class="table-result-count">Showing 1–${courseData.length} of ${courseData.length} records</span><div class="pagination"><button disabled>‹ Previous</button><button class="active" aria-current="page">1</button><button disabled>Next →</button></div></div>
    </section>
    <div class="privacy-note"><strong>A course belongs to one department</strong>Course codes and credit values follow Northbridge University academic policies.</div>`;
}

function renderDepartments() {
  const faculties = [...new Set(departmentData.map((department) => department.faculty))];
  return `
    <div class="page-heading"><div><h1>Departments</h1><p>Organize academic departments and their programs.</p></div><div class="heading-actions"><button class="primary-button" type="button" data-action="add-department">${icon("plus")} Add department</button></div></div>
    <section class="metric-grid">
      ${metricCard("Departments", "42", "Across 5 faculties", "departments")}
      ${metricCard("Academic staff", "344", "Active teaching staff", "faculty")}
      ${metricCard("Programs offered", "86", "Undergraduate & graduate", "courses")}
      ${metricCard("Students", "6,842", "Currently enrolled", "students")}
    </section>
    <section class="panel table-panel">
      <div class="filter-bar" style="border:0;margin:0;border-radius:0"><label class="search-box">${icon("search")}<input type="search" placeholder="Search departments" aria-label="Search departments" /></label><select class="filter-control" aria-label="Filter by faculty"><option>Faculty: All</option>${faculties.map((faculty) => `<option>${escapeHtml(faculty)}</option>`).join("")}</select></div>
      <div class="table-wrap"><table class="data-table"><thead><tr><th>Department</th><th>Code / Head</th><th>Faculty</th><th>Students</th><th>Courses</th><th>Staff</th></tr></thead><tbody>
      ${departmentData.map((department) => `<tr><td>${escapeHtml(department.name)}</td><td>${escapeHtml(department.code)} · ${escapeHtml(department.head)}</td><td>${escapeHtml(department.faculty)}</td><td>${escapeHtml(department.students)}</td><td>${escapeHtml(department.courses)}</td><td>${escapeHtml(department.staff)}</td></tr>`).join("")}
      </tbody></table></div><div class="table-footer"><span class="table-result-count">Showing 1–${departmentData.length} of ${departmentData.length} records</span><div class="pagination"><button disabled>‹ Previous</button><button class="active" aria-current="page">1</button><button disabled>Next →</button></div></div>
    </section>
    <div class="privacy-note"><strong>A shared academic structure</strong>Departments coordinate courses, staff, and student programs across the university.</div>`;
}

function renderUsers() {
  const users = [
    [
      "John Saltzman",
      "j.saltzman@northbridge.edu",
      "USR-0001",
      "Admin",
      "Nov 24, 09:12",
      "Active",
    ],
    [
      "Brenard Cole",
      "b.cole@northbridge.edu",
      "USR-0086",
      "Lecturer",
      "Nov 24, 09:45",
      "Active",
    ],
    [
      "Alex Morgan",
      "a.morgan@northbridge.edu",
      "USR-1042",
      "Student",
      "Nov 24, 08:30",
      "Active",
    ],
    [
      "Dr. James Park",
      "j.park@northbridge.edu",
      "USR-0091",
      "Lecturer",
      "Nov 23, 16:40",
      "Inactive",
    ],
    [
      "Emma Wilson",
      "e.wilson@northbridge.edu",
      "USR-1043",
      "Student",
      "Nov 23, 15:22",
      "Active",
    ],
  ];
  return `
    <div class="page-heading"><div><h1>Users &amp; roles</h1><p>Manage accounts and role-based access.</p></div><div class="heading-actions"><button class="primary-button" type="button" data-action="invite-user">${icon("plus")} Invite user</button></div></div>
    <section class="metric-grid">
      ${metricCard("Total users", "7,210", "All university accounts", "user")}
      ${metricCard("Administrators", "24", "Full management access", "settings")}
      ${metricCard("Lecturers", "344", "Teaching & grading access", "faculty")}
      ${metricCard("Students", "6,842", "Personal academic access", "students")}
    </section>
    <section class="panel table-panel">
      <div class="filter-bar" style="border:0;margin:0;border-radius:0"><label class="search-box">${icon("search")}<input type="search" placeholder="Search name or university email" aria-label="Search users" /></label><select class="filter-control" aria-label="Filter by role"><option>Role: All</option><option>Admin</option><option>Lecturer</option><option>Student</option></select><select class="filter-control" aria-label="Filter by status"><option>Status: All</option><option>Status: Active</option><option>Status: Inactive</option></select></div>
      <div class="table-wrap"><table class="data-table"><thead><tr><th>Full name</th><th>University email</th><th>User ID</th><th>Role</th><th>Last active</th><th>Status</th></tr></thead><tbody>${users.map((user) => `<tr><td>${escapeHtml(user[0])}</td><td>${escapeHtml(user[1])}</td><td>${escapeHtml(user[2])}</td><td>${escapeHtml(user[3])}</td><td>${escapeHtml(user[4])}</td><td><span class="status-badge ${user[5] === "Inactive" ? "overdue" : ""}">${escapeHtml(user[5])}</span></td></tr>`).join("")}</tbody></table></div>
      <div class="table-footer"><span class="table-result-count">Showing 1–${users.length} of ${users.length} demo accounts</span><div class="pagination"><button disabled>‹ Previous</button><button class="active" aria-current="page">1</button><button disabled>Next →</button></div></div>
    </section>
    <div class="privacy-note"><strong>Least privilege, by design</strong>Assign each user only the access needed for their work at Northbridge University.</div>`;
}

function attendanceTotals() {
  return attendanceStudents.reduce(
    (totals, student) => {
      totals[student.attendance] += 1;
      return totals;
    },
    { Present: 0, Absent: 0, Excused: 0 },
  );
}

function renderAttendance() {
  const totals = attendanceTotals();
  return `
    <div class="page-heading"><div><h1>Attendance register</h1><p>Record attendance for an assigned course session.</p></div><div class="heading-actions"><button class="primary-button" type="button" data-action="save-attendance">Save attendance</button></div></div>
    <section class="panel" style="margin-bottom:18px"><div class="panel-heading" style="margin:0"><div><h2>${courseData[0].code} · ${courseData[0].name}</h2><p>Wednesday, Nov 25, 2026 · 09:00–10:30</p></div><span class="term-pill">Hall B-204 · 87 enrolled</span></div></section>
    <div class="approval-summary"><span class="approval-number">${totals.Present}</span><div><strong>${totals.Present} present · ${totals.Absent} absent · ${totals.Excused} excused</strong><span>Counts reflect the ${attendanceStudents.length} sample records shown below.</span></div></div>
    <section class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Student name</th><th>Student ID</th><th>Previous rate</th><th>Present</th><th>Absent</th><th>Excused</th></tr></thead><tbody>
      ${attendanceStudents.map((student, index) => `<tr><td>${student.name}</td><td>${student.id}</td><td>${student.rate}</td>${["Present", "Absent", "Excused"].map((status) => `<td><input type="radio" name="attendance-${index}" value="${status}" ${student.attendance === status ? "checked" : ""} aria-label="${status} for ${student.name}" /></td>`).join("")}</tr>`).join("")}
    </tbody></table></div><div class="table-footer"><span>Showing ${attendanceStudents.length} sample students from 87 enrolled</span><div class="pagination"><button disabled>‹ Previous</button><button class="active" aria-current="page">1</button><button disabled>Next →</button></div></div></section>
    <section class="panel" style="margin-top:18px"><div class="panel-heading" style="margin:0"><div><h2>Attendance changes</h2><p>Save the register to confirm attendance.</p></div><div class="heading-actions"><button class="secondary-button" type="button" data-action="mark-present">Mark all present</button><button class="primary-button" type="button" data-action="save-attendance">Save attendance</button></div></div></section>`;
}

function renderGradebook() {
  return `
    <div class="page-heading"><div><h1>Gradebook</h1><p>Review assessment scores before publishing grades.</p></div><div class="heading-actions"><button class="primary-button" type="button" data-action="publish-grades">Publish grades</button></div></div>
    <section class="panel" style="margin-bottom:18px"><div class="panel-heading" style="margin:0"><div><h2>${courseData[0].code} · ${courseData[0].name}</h2><p>Assessment: Fall 2026 · Midterm</p></div><span class="term-pill">Quiz 20 pts · Midterm 30 pts · Final 50 pts</span></div></section>
    <div class="approval-summary gradebook-summary"><span class="approval-number">Draft</span><div><strong>Grade entries · ${gradeRecords.length} sample students</strong><span>Scores are kept for this demo session. Save a draft before reviewing publication.</span></div></div>
    <section class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Student name</th><th>Quiz / 20</th><th>Midterm / 30</th><th>Final / 50</th><th>Total</th><th>Status</th></tr></thead><tbody>
      ${gradeRecords.map((record, index) => {
        const total = record.quiz + record.midterm + (record.final || 0);
        const ready = record.final !== null;
        return `<tr><td>${escapeHtml(record.name)}</td><td><input class="grade-score" type="number" min="0" max="20" step="1" required value="${record.quiz}" data-grade-index="${index}" data-grade-field="quiz" aria-label="Quiz score for ${escapeHtml(record.name)}" style="width:60px;padding:6px;border:1px solid var(--line);border-radius:5px" /></td><td><input class="grade-score" type="number" min="0" max="30" step="1" required value="${record.midterm}" data-grade-index="${index}" data-grade-field="midterm" aria-label="Midterm score for ${escapeHtml(record.name)}" style="width:60px;padding:6px;border:1px solid var(--line);border-radius:5px" /></td><td><input class="grade-score" type="number" min="0" max="50" step="1" value="${record.final ?? ""}" data-grade-index="${index}" data-grade-field="final" aria-label="Final score for ${escapeHtml(record.name)}" style="width:60px;padding:6px;border:1px solid var(--line);border-radius:5px" /></td><td class="grade-total">${ready ? `${total} / 100` : `${record.quiz + record.midterm} / 50 so far`}</td><td><span class="status-badge ${ready ? "" : "pending"} grade-status">${ready ? "Ready" : "Draft"}</span></td></tr>`;
      }).join("")}
    </tbody></table></div><div class="table-footer"><span>Showing ${gradeRecords.length} sample students from 87 enrolled</span><div class="pagination"><button disabled>‹ Previous</button><button class="active" aria-current="page">1</button><button disabled>Next →</button></div></div></section>
    <section class="panel" style="margin-top:18px"><div class="panel-heading" style="margin:0"><div><h2>Midterm grades</h2><p>Save a draft before publishing grades to students.</p></div><div class="heading-actions"><button class="secondary-button" type="button" data-action="save-grades">Save draft</button><button class="primary-button" type="button" data-action="publish-grades">Publish grades</button></div></div></section>`;
}

function updateGradeRow(input) {
  const record = gradeRecords[Number(input.dataset.gradeIndex)];
  if (!record) return;
  const field = input.dataset.gradeField;
  record[field] = input.value === "" ? null : Number(input.value);

  const row = input.closest("tr");
  const scoreInputs = [...row.querySelectorAll(".grade-score")];
  const hasInvalidScore = scoreInputs.some(
    (scoreInput) =>
      !scoreInput.validity.valid ||
      (scoreInput.required && scoreInput.value === ""),
  );
  const finalScore = scoreInputs.find(
    (scoreInput) => scoreInput.dataset.gradeField === "final",
  );
  const totalCell = row.querySelector(".grade-total");
  const status = row.querySelector(".grade-status");
  if (hasInvalidScore) {
    totalCell.textContent = "Check scores";
    status.textContent = "Draft";
    return;
  }

  const total = record.quiz + record.midterm + (record.final || 0);
  totalCell.textContent =
    record.final === null ? `${total} / 50 so far` : `${total} / 100`;
  status.textContent = finalScore.value === "" ? "Draft" : "Ready";
  status.classList.toggle("pending", finalScore.value === "");
}

function validateGradebook(requireFinalScores) {
  const inputs = [...app.querySelectorAll(".grade-score")];
  for (const input of inputs) {
    if (requireFinalScores && input.dataset.gradeField === "final" && !input.value) {
      input.setCustomValidity("Enter a final score before publishing.");
      input.reportValidity();
      input.setCustomValidity("");
      return false;
    }
    if (!input.checkValidity()) {
      input.reportValidity();
      return false;
    }
  }
  return true;
}

function renderMyCourses() {
  const isAdmin = state.role === "Admin";
  const visibleCourses = courseData.filter((course) =>
    [course.code, course.name, course.department, course.lecturer].some(
      (value) => value.toLowerCase().includes(state.courseQuery.toLowerCase()),
    ),
  );
  return `
    <div class="page-heading"><div><h1>${isAdmin ? "Assigned courses" : "My courses"}</h1><p>${isAdmin ? "Review teaching assignments for Fall 2026." : "Fall 2026 · Your current course enrollment"}</p></div>${isAdmin ? "" : '<div class="heading-actions"><button class="primary-button" type="button" data-action="register-courses">Register for courses</button></div>'}</div>
    <section class="metric-grid">${metricCard(isAdmin ? "Teaching courses" : "Enrolled courses", isAdmin ? "3" : "6", "Fall 2026 semester", "courses")}${metricCard("Students enrolled", "214", "Across assigned courses", "students")}${metricCard(isAdmin ? "Average attendance" : "Your attendance", isAdmin ? "93.6%" : "94.2%", isAdmin ? "Across assigned courses" : "Good standing", "calendar")}${metricCard(isAdmin ? "Grades to review" : "Credits completed", isAdmin ? "24" : "78", isAdmin ? "Midterm grades ready" : "Of 120 program credits", "chart")}</section>
    <section class="panel"><div class="panel-heading"><div><h2>Course list</h2><p>${state.courseQuery ? `Results for “${escapeHtml(state.courseQuery)}”` : isAdmin ? "Schedules, teaching assignments, and enrollment" : "Your schedules, enrollment, and course materials"}</p></div>${state.courseQuery ? '<button class="text-button" type="button" data-action="clear-course-search">Clear search</button>' : ""}</div><div class="registration-list">${visibleCourses.length ? visibleCourses.map((course, index) => `<div class="registration"><span class="registration-avatar">${course.code}</span><div class="registration-copy"><strong>${escapeHtml(course.name)}</strong><span>${isAdmin ? `${escapeHtml(course.lecturer)} · ${escapeHtml(course.students)} students` : `${index % 2 ? "Thu · 11:00 · Lab C-106" : "Wed · 09:00 · Hall B-204"}`}</span></div><span class="status-badge">${escapeHtml(course.credits)}</span></div>`).join("") : '<p class="notification-empty">No courses match this search.</p>'}</div></section>`;
}

function renderGenericSection() {
  const descriptions = {
    Courses: "Browse active courses, instructors, and enrollment capacity.",
    Departments: "View academic departments and their programs.",
    Faculty: "Manage faculty profiles, teaching assignments, and availability.",
    Rooms: "Review campus room availability and scheduled classes.",
    Fees: "Track tuition payments, balances, and semester targets.",
    Calendar: "See important dates and upcoming campus events.",
    Settings: "Manage your campus workspace preferences.",
  };
  const title = state.section;
  return `
    <div class="page-heading"><div><h1>${title}</h1><p>${descriptions[title] || "Manage your Northbridge University workspace."}</p></div></div>
    <section class="metric-grid">
      ${metricCard(title === "Courses" ? "Active courses" : "Total records", title === "Courses" ? "320" : "42", "Updated for Fall 2026", title === "Courses" ? "courses" : "departments")}
      ${metricCard("Departments", "42", "Across Northbridge University", "departments")}
      ${metricCard("This semester", "Fall 2026", "Semester in progress", "calendar")}
      ${metricCard("Needs attention", "12", "Requests awaiting review", "bell")}
    </section>
    <section class="panel generic-panel">
      <div class="panel-heading"><div><h2>${title} workspace</h2><p>Campus information at a glance</p></div></div>
      <div class="empty-state"><span class="metric-icon">${icon(sections.find((item) => item.label === title)?.icon || "home")}</span><strong>${title} workspace is ready</strong><p>Use this area to review ${title.toLowerCase()} and keep campus operations up to date.</p></div>
    </section>`;
}

function renderModal() {
  if (state.pendingNotificationDeleteId) {
    const notification = notificationsByRole[state.role].find(
      (item) => item.id === state.pendingNotificationDeleteId,
    );
    if (!notification) return "";
    return `
    <div class="overlay">
      <section class="modal confirm-modal" role="alertdialog" aria-modal="true" aria-labelledby="delete-notification-title" aria-describedby="delete-notification-description">
        <div class="modal-header"><div><h2 id="delete-notification-title">Delete notification?</h2><p id="delete-notification-description">Are you sure you want to delete “${escapeHtml(notification.title)}”? This action cannot be undone.</p></div></div>
        <div class="modal-actions">
          <button class="secondary-button" type="button" data-action="cancel-delete-notification">Cancel</button>
          <button class="primary-button danger-button" type="button" data-action="confirm-delete-notification">Delete notification</button>
        </div>
      </section>
    </div>`;
  }

  const editedStudent = students.find(
    (student) => student.id === state.editingStudentId,
  );
  const departmentOptions = departmentData.map((department) => department.name);
  return state.modalOpen
    ? `
    <div class="overlay" data-action="overlay">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-header"><div><h2 id="modal-title">${editedStudent ? "Edit student" : "Add a student"}</h2><p>${editedStudent ? "Update this student's contact and academic information." : "Create a student record for Northbridge University."}</p></div><button class="modal-close" type="button" data-action="close-modal" aria-label="Close">${icon("close")}</button></div>
        <form id="student-form">
          <div class="modal-grid">
            <label class="field">Full name<input name="name" autocomplete="name" value="${escapeHtml(editedStudent?.name || "")}" required /></label>
            <label class="field">University email<input name="email" type="email" autocomplete="email" pattern="[^@\\s]+@northbridge\\.edu" title="Use a @northbridge.edu email address" value="${escapeHtml(editedStudent?.email || "")}" required /></label>
            <label class="field">Department<select name="department" required><option value="">Select department</option>${departmentOptions.map((department) => `<option ${editedStudent?.department === department ? "selected" : ""}>${escapeHtml(department)}</option>`).join("")}</select></label>
            <label class="field">Academic year<select name="year" required><option value="">Select year</option>${["Year 1", "Year 2", "Year 3", "Year 4"].map((year) => `<option ${editedStudent?.year === year ? "selected" : ""}>${year}</option>`).join("")}</select></label>
          </div>
          <div class="modal-actions"><button class="secondary-button" type="button" data-action="close-modal">Cancel</button><button class="primary-button" type="submit">${editedStudent ? "Save changes" : "Add student"}</button></div>
        </form>
      </section>
    </div>`
    : "";
}

function renderPortal() {
  const views = {
    Overview: renderOverview,
    "Teaching overview": renderTeachingOverview,
    Students: renderStudents,
    Courses: renderCourses,
    Departments: renderDepartments,
    "Users & roles": renderUsers,
    Attendance: renderAttendance,
    Gradebook: renderGradebook,
    "My courses": renderMyCourses,
    Notifications: renderNotifications,
  };
  const content =
    state.section === "Students" && state.selectedStudentId
      ? renderStudentDetail()
      : (views[state.section] || renderGenericSection)();
  app.innerHTML = `<div class="app-shell">${renderSidebar()}<main class="main-area">${renderTopbar()}<div class="page-content">${renderSchoolMarquee("school-marquee--portal")}${content}</div></main>${renderModal()}</div>`;
  if (state.section === "Students") bindStudentFilters();
}

function bindStudentFilters() {
  document
    .querySelector("#student-search")
    ?.addEventListener("input", (event) => {
      state.studentQuery = event.target.value;
      updateStudentResults();
    });
  document
    .querySelector("#department-filter")
    ?.addEventListener("change", (event) => {
      state.department = event.target.value;
      updateStudentResults();
    });
  document
    .querySelector("#year-filter")
    ?.addEventListener("change", (event) => {
      state.year = event.target.value;
      updateStudentResults();
    });
  document
    .querySelector("#status-filter")
    ?.addEventListener("change", (event) => {
      state.status = event.target.value;
      updateStudentResults();
    });
}

function updateStudentResults() {
  const filtered = filteredStudents();
  const rows = document.querySelector("#student-rows");
  const count = document.querySelector("#results-count");
  if (rows) {
    rows.innerHTML = filtered.length
      ? renderStudentTable()
      : '<tr><td colspan="7">No students match these filters.</td></tr>';
  }
  if (count) {
    count.textContent = `Showing ${filtered.length ? 1 : 0}–${filtered.length} of ${students.length} records`;
  }
}

function filterVisibleTableRows() {
  if (state.section === "Students") return;
  document.querySelectorAll(".table-panel").forEach((panel) => {
    const query =
      panel.querySelector('input[type="search"]')?.value.trim().toLowerCase() ||
      "";
    const filters = [...panel.querySelectorAll("select")].map((select) =>
      select.value.toLowerCase(),
    );
    const rows = [...panel.querySelectorAll("tbody tr")];
    let visibleCount = 0;
    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      const matchesQuery = !query || text.includes(query);
      const matchesFilters = filters.every(
        (filter) => {
          if (filter.toLowerCase().includes("all")) return true;
          const [filterType, ...filterParts] = filter.split(":");
          if (filterParts.length) {
            const value = filterParts.join(":").trim().toLowerCase();
            return [...row.querySelectorAll("td")].some(
              (cell) => cell.textContent.trim().toLowerCase() === value,
            );
          }
          return text.includes(filterType.trim().toLowerCase());
        },
      );
      row.hidden = !(matchesQuery && matchesFilters);
      if (!row.hidden) visibleCount += 1;
    });
    const resultCount = panel.querySelector(".table-result-count");
    if (resultCount) {
      resultCount.textContent = `Showing ${visibleCount ? 1 : 0}–${visibleCount} of ${rows.length} records`;
    }
  });
}

function render() {
  document.documentElement.dataset.theme = state.darkMode ? "dark" : "light";
  if (state.page === "login") renderLogin();
  else if (state.page === "forgot") renderForgotPassword();
  else renderPortal();
}

app.addEventListener("input", (event) => {
  if (event.target.matches(".global-search-input")) {
    updateGlobalSearchResults(event.target);
  } else if (event.target.matches(".grade-score")) {
    updateGradeRow(event.target);
  } else if (event.target.matches('.table-panel input[type="search"]')) {
    filterVisibleTableRows();
  }
});

app.addEventListener("change", (event) => {
  if (event.target.matches('[aria-label="Enrollment period"]')) {
    state.enrollmentPeriod = event.target.value;
    render();
  } else if (event.target.matches('input[type="radio"][name^="attendance-"]')) {
    const index = Number(event.target.name.slice("attendance-".length));
    const student = attendanceStudents[index];
    if (student) {
      student.attendance = event.target.value;
      render();
    }
  } else if (event.target.matches(".table-panel select")) {
    filterVisibleTableRows();
  }
});

function exportStudents() {
  const headers = [
    "Student name",
    "University email",
    "Department",
    "Student ID",
    "Year",
    "Enrolled",
    "Status",
  ];
  const values = filteredStudents().map((student) => [
    student.name,
    student.email,
    student.department,
    student.id,
    student.year,
    student.enrolled,
    student.status,
  ]);
  downloadCsv("northbridge-students.csv", [headers, ...values]);
  showToast("Student records exported.");
}

function downloadCsv(filename, rows) {
  const csv = rows
    .map((row) =>
      row
        .map((field) => {
          const value = String(field);
          const safeValue = /^[\t\r\n ]*[=+\-@]/.test(value)
            ? `'${value}`
            : value;
          return `"${safeValue.replace(/"/g, '""')}"`;
        })
        .join(","),
    )
    .join("\r\n");
  const url = URL.createObjectURL(
    new Blob([csv], { type: "text/csv;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.hidden = true;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportCampusReport() {
  downloadCsv("northbridge-campus-report.csv", [
    ["Metric", "Value"],
    ["Total students", "6,842"],
    ["Active courses", "320"],
    ["Attendance rate", "94.2%"],
    ["Fees collected", "$2.48M"],
    ["Sample student records", students.length],
    ["Generated at", new Date().toLocaleString()],
  ]);
  showToast("Campus overview report downloaded.");
}

app.addEventListener("click", (event) => {
  if (!event.target.closest(".global-search-wrap")) {
    const searchInput = app.querySelector(".global-search-input");
    const searchResults = app.querySelector("#global-search-results");
    if (searchInput && searchResults) {
      searchInput.setAttribute("aria-expanded", "false");
      searchResults.hidden = true;
    }
  }
  if (state.profileMenuOpen && !event.target.closest(".profile-control")) {
    state.profileMenuOpen = false;
    app.querySelector(".profile-menu")?.remove();
    app
      .querySelector('[data-action="profile"]')
      ?.setAttribute("aria-expanded", "false");
  }

  if (event.target.classList?.contains("overlay")) {
    state.modalOpen = false;
    state.editingStudentId = null;
    state.pendingNotificationDeleteId = null;
    render();
    return;
  }

  const button = event.target.closest("button, a");
  if (!button) return;

  if (button.dataset.searchType) {
    const section =
      button.dataset.searchType === "student"
        ? "Students"
        : button.dataset.searchType === "course"
          ? state.role === "Student"
            ? "My courses"
            : "Courses"
          : "Departments";
    const selectedStudentId =
      button.dataset.searchType === "student" ? button.dataset.searchId : null;
    navigateTo(section, selectedStudentId, {
      courseQuery:
        button.dataset.searchType === "course" && state.role === "Student"
          ? button.dataset.searchQuery
          : state.courseQuery,
    });
    if (
      button.dataset.searchType !== "student" &&
      !(button.dataset.searchType === "course" && state.role === "Student")
    ) {
      const localSearch = app.querySelector(
        '.table-panel input[type="search"]',
      );
      if (localSearch) {
        localSearch.value = button.dataset.searchQuery;
        filterVisibleTableRows();
      }
    }
  } else if (button.dataset.role) {
    state.role = button.dataset.role;
    render();
  } else if (button.dataset.section) {
    navigateTo(button.dataset.section);
  } else if (button.dataset.detailTab) {
    state.studentDetailTab = button.dataset.detailTab;
    render();
  } else {
    switch (button.dataset.action) {
      case "forgot":
        state.page = "forgot";
        render();
        break;
      case "back-login":
        event.preventDefault();
        state.page = "login";
        render();
        break;
      case "go-back":
        navigateBack();
        break;
      case "toggle-nav":
        state.mobileNavOpen = !state.mobileNavOpen;
        render();
        break;
      case "close-nav":
        state.mobileNavOpen = false;
        render();
        break;
      case "add-student":
        state.modalOpen = true;
        state.editingStudentId = null;
        render();
        document.querySelector("#student-form input[name='name']")?.focus();
        break;
      case "student-detail":
        state.studentDetailTab = "Overview";
        navigateTo("Students", button.dataset.studentId);
        break;
      case "back-students":
        if (
          viewHistory.length &&
          viewHistory[viewHistory.length - 1].section === "Students" &&
          !viewHistory[viewHistory.length - 1].selectedStudentId
        ) {
          viewHistory.pop();
        }
        state.selectedStudentId = null;
        render();
        break;
      case "edit-student":
        state.modalOpen = true;
        state.editingStudentId = state.selectedStudentId;
        render();
        document.querySelector("#student-form input[name='name']")?.focus();
        break;
      case "close-modal":
        state.modalOpen = false;
        state.editingStudentId = null;
        render();
        break;
      case "cancel-delete-notification":
        state.pendingNotificationDeleteId = null;
        render();
        break;
      case "export":
        exportStudents();
        break;
      case "report":
        exportCampusReport();
        break;
      case "approvals":
        showToast("The approvals queue is not connected in this demo.");
        break;
      case "notifications":
        navigateTo("Notifications");
        break;
      case "open-notification":
        state.openNotificationId =
          state.openNotificationId === button.dataset.notificationId
            ? null
            : button.dataset.notificationId;
        render();
        break;
      case "mark-notification-read": {
        const notification = notificationsByRole[state.role].find(
          (item) => item.id === button.dataset.notificationId,
        );
        if (!notification) {
          showToast("This notification is no longer available.");
          break;
        }
        notification.read = true;
        render();
        showToast("Notification marked as read.");
        break;
      }
      case "delete-notification": {
        const notificationId = button.dataset.notificationId;
        const notification = notificationsByRole[state.role].find(
          (item) => item.id === notificationId,
        );
        if (!notification) {
          showToast("This notification is no longer available.");
          break;
        }
        state.pendingNotificationDeleteId = notificationId;
        render();
        break;
      }
      case "confirm-delete-notification": {
        const notificationId = state.pendingNotificationDeleteId;
        const notificationIndex = notificationsByRole[state.role].findIndex(
          (item) => item.id === notificationId,
        );
        if (!notificationId || notificationIndex === -1) {
          state.pendingNotificationDeleteId = null;
          render();
          showToast("This notification is no longer available.");
          break;
        }
        notificationsByRole[state.role].splice(notificationIndex, 1);
        state.pendingNotificationDeleteId = null;
        if (state.openNotificationId === notificationId)
          state.openNotificationId = null;
        render();
        showToast("Notification deleted.");
        break;
      }
      case "toggle-theme":
        toggleTheme();
        break;
      case "profile":
        state.profileMenuOpen = !state.profileMenuOpen;
        render();
        break;
      case "clear-course-search":
        state.courseQuery = "";
        render();
        break;
      case "sign-out":
        state.page = "login";
        state.section = "Overview";
        viewHistory.length = 0;
        state.mobileNavOpen = false;
        state.modalOpen = false;
        state.selectedStudentId = null;
        state.courseQuery = "";
        state.profileMenuOpen = false;
        state.editingStudentId = null;
        state.pendingNotificationDeleteId = null;
        state.darkMode = false;
        render();
        showToast("You have signed out.");
        break;
      case "save-attendance":
        showToast("Attendance saved for this demo session.");
        break;
      case "mark-present":
        attendanceStudents.forEach((student) => {
          student.attendance = "Present";
        });
        render();
        showToast("All students marked present. Save to confirm.");
        break;
      case "save-grades":
        if (!validateGradebook(false)) {
          showToast("Correct the quiz and midterm scores before saving.");
          break;
        }
        showToast("Grade draft saved for this demo session.");
        break;
      case "publish-grades":
        if (!validateGradebook(true)) {
          showToast("Complete valid scores for all students before publishing.");
          break;
        }
        showToast("Scores are ready; publishing to students is not connected.");
        break;
      case "create-course":
        showToast(
          "Course creation form is not connected to a university service.",
        );
        break;
      case "add-department":
        showToast(
          "Department creation is not connected to a university service.",
        );
        break;
      case "invite-user":
        showToast(
          "User invitations are not connected to a university service.",
        );
        break;
      case "register-courses":
        showToast(
          "Course registration opens for Spring 2027 until December 11; registration is not connected in this demo.",
        );
        break;
      default:
        break;
    }
  }
});

app.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.id === "login-form") {
    state.page = "portal";
    state.section = "Overview";
    viewHistory.length = 0;
    render();
    showToast(`Welcome to Campus, ${state.role}.`);
  } else if (event.target.id === "forgot-form") {
    showToast("This demo does not send password reset emails.");
  } else if (event.target.id === "student-form") {
    const data = new FormData(event.target);
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim().toLowerCase();
    const department = String(data.get("department"));
    const year = String(data.get("year"));
    if (!email.endsWith("@northbridge.edu")) {
      showToast("Use a @northbridge.edu email address.");
      return;
    }
    const editedStudent = students.find(
      (student) => student.id === state.editingStudentId,
    );
    if (
      students.some(
        (student) =>
          student.id !== editedStudent?.id &&
          student.email.toLowerCase() === email,
      )
    ) {
      showToast("A student with this email already exists.");
      return;
    }
    if (editedStudent) {
      Object.assign(editedStudent, { name, email, department, year });
      state.modalOpen = false;
      state.editingStudentId = null;
      state.section = "Students";
      state.selectedStudentId = editedStudent.id;
      render();
      showToast(`${name}'s student record was updated.`);
      return;
    }
    let idNumber = 1;
    while (
      students.some(
        (student) =>
          student.id === `ST-2026-${String(idNumber).padStart(3, "0")}`,
      )
    ) {
      idNumber += 1;
    }
    students.unshift({
      name,
      email,
      department,
      year,
      id: `ST-2026-${String(idNumber).padStart(3, "0")}`,
      enrolled: "Nov 25, 2026",
      status: "Active",
    });
    state.modalOpen = false;
    state.editingStudentId = null;
    state.section = "Students";
    state.studentQuery = "";
    state.department = "All departments";
    state.year = "All years";
    state.status = "All statuses";
    render();
    showToast(`${name} was added to student records.`);
  }
});

app.addEventListener("keydown", (event) => {
  if (event.target.matches?.(".global-search-input")) {
    const firstResult = app.querySelector(".global-search-result");
    if (event.key === "ArrowDown" && firstResult) {
      event.preventDefault();
      firstResult.focus();
      return;
    }
    if (event.key === "Enter" && firstResult) {
      event.preventDefault();
      firstResult.click();
      return;
    }
  }
  if (
    event.key === "Escape" &&
    (state.modalOpen || state.pendingNotificationDeleteId)
  ) {
    state.modalOpen = false;
    state.editingStudentId = null;
    state.pendingNotificationDeleteId = null;
    render();
    return;
  }
  if (event.key === "Escape" && state.profileMenuOpen) {
    state.profileMenuOpen = false;
    render();
    return;
  }
  if (event.key === "Escape") {
    const searchInput = app.querySelector(".global-search-input");
    const searchResults = app.querySelector("#global-search-results");
    if (searchInput && searchResults && !searchResults.hidden) {
      searchInput.setAttribute("aria-expanded", "false");
      searchResults.hidden = true;
      searchInput.blur();
    }
  }
});

render();
