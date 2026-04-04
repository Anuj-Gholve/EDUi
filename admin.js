/* ========================================
   EDU.i — Admin Panel Logic
   ======================================== */

// ==========================================
// DATA
// ==========================================

const STUDENTS = [
  { id: "STU-001", name: "Aarav Sharma", roll: "CS3A-01", class: "CS-A (3rd Year)", section: "A", email: "aarav.s@college.edu", attendance: 88 },
  { id: "STU-002", name: "Priya Patel", roll: "CS3A-02", class: "CS-A (3rd Year)", section: "A", email: "priya.p@college.edu", attendance: 92 },
  { id: "STU-003", name: "Rohan Deshmukh", roll: "CS3A-03", class: "CS-A (3rd Year)", section: "A", email: "rohan.d@college.edu", attendance: 62 },
  { id: "STU-004", name: "Sneha Kulkarni", roll: "CS3A-04", class: "CS-A (3rd Year)", section: "A", email: "sneha.k@college.edu", attendance: 85 },
  { id: "STU-005", name: "Arjun Mehta", roll: "CS3A-05", class: "CS-A (3rd Year)", section: "A", email: "arjun.m@college.edu", attendance: 58 },
  { id: "STU-006", name: "Diya Joshi", roll: "CS3A-06", class: "CS-A (3rd Year)", section: "A", email: "diya.j@college.edu", attendance: 79 },
  { id: "STU-007", name: "Vivaan Reddy", roll: "CS3A-07", class: "CS-A (3rd Year)", section: "A", email: "vivaan.r@college.edu", attendance: 94 },
  { id: "STU-008", name: "Ananya Iyer", roll: "CS3B-01", class: "CS-B (3rd Year)", section: "B", email: "ananya.i@college.edu", attendance: 90 },
  { id: "STU-009", name: "Kabir Singh", roll: "CS3B-02", class: "CS-B (3rd Year)", section: "B", email: "kabir.s@college.edu", attendance: 71 },
  { id: "STU-010", name: "Ishaan Gupta", roll: "CS3B-03", class: "CS-B (3rd Year)", section: "B", email: "ishaan.g@college.edu", attendance: 87 },
  { id: "STU-011", name: "Meera Nair", roll: "IT2A-01", class: "IT-A (2nd Year)", section: "A", email: "meera.n@college.edu", attendance: 65 },
  { id: "STU-012", name: "Aditya Verma", roll: "IT2A-02", class: "IT-A (2nd Year)", section: "A", email: "aditya.v@college.edu", attendance: 55 },
  { id: "STU-013", name: "Kavya Rao", roll: "IT2A-03", class: "IT-A (2nd Year)", section: "A", email: "kavya.r@college.edu", attendance: 70 },
  { id: "STU-014", name: "Ritika Chopra", roll: "CS3A-08", class: "CS-A (3rd Year)", section: "A", email: "ritika.c@college.edu", attendance: 74 },
  { id: "STU-015", name: "Manav Tiwari", roll: "CS3A-09", class: "CS-A (3rd Year)", section: "A", email: "manav.t@college.edu", attendance: 60 },
  { id: "STU-016", name: "Pooja Bhatt", roll: "CS3B-04", class: "CS-B (3rd Year)", section: "B", email: "pooja.b@college.edu", attendance: 68 },
  { id: "STU-017", name: "Raj Malhotra", roll: "IT2A-04", class: "IT-A (2nd Year)", section: "A", email: "raj.m@college.edu", attendance: 82 },
  { id: "STU-018", name: "Sara Khan", roll: "IT2A-05", class: "IT-A (2nd Year)", section: "A", email: "sara.k@college.edu", attendance: 73 },
  { id: "STU-019", name: "Vikram Patil", roll: "IT2B-01", class: "IT-B (2nd Year)", section: "B", email: "vikram.p@college.edu", attendance: 91 },
  { id: "STU-020", name: "Neha Saxena", roll: "IT2B-02", class: "IT-B (2nd Year)", section: "B", email: "neha.s@college.edu", attendance: 76 },
];

const CLASSES_DATA = [
  { class: "CS-A", section: "A", year: "3rd Year", students: 62 },
  { class: "CS-B", section: "B", year: "3rd Year", students: 58 },
  { class: "IT-A", section: "A", year: "2nd Year", students: 55 },
  { class: "IT-B", section: "B", year: "2nd Year", students: 52 },
  { class: "CS-A", section: "A", year: "2nd Year", students: 60 },
  { class: "CS-B", section: "B", year: "2nd Year", students: 57 },
  { class: "IT-A", section: "A", year: "3rd Year", students: 48 },
  { class: "IT-B", section: "B", year: "3rd Year", students: 50 },
];

const SUBJECTS_DATA = [
  { name: "Machine Learning", code: "CS401", classes: "CS-A (3rd), CS-B (3rd)" },
  { name: "Data Structures", code: "CS201", classes: "CS-A (2nd), CS-B (2nd)" },
  { name: "Operating Systems", code: "CS301", classes: "CS-A (3rd), CS-B (3rd)" },
  { name: "Computer Networks", code: "IT301", classes: "IT-A (3rd), IT-B (3rd)" },
  { name: "Database Systems", code: "CS202", classes: "CS-A (2nd), IT-A (2nd)" },
  { name: "Web Development", code: "IT201", classes: "IT-A (2nd), IT-B (2nd)" },
];

const SESSIONS_DATA = [
  { id: "SES-1042", class: "CS-A (3rd Year)", subject: "Machine Learning", teacher: "Prof. A. Kumar", date: "2026-04-04", time: "09:00 AM", status: "Active", present: 54 },
  { id: "SES-1041", class: "CS-B (3rd Year)", subject: "Operating Systems", teacher: "Prof. R. Sharma", date: "2026-04-04", time: "10:30 AM", status: "Active", present: 48 },
  { id: "SES-1040", class: "IT-A (2nd Year)", subject: "Web Development", teacher: "Prof. S. Nair", date: "2026-04-04", time: "11:00 AM", status: "Active", present: 50 },
  { id: "SES-1039", class: "CS-A (3rd Year)", subject: "Data Structures", teacher: "Prof. M. Desai", date: "2026-04-03", time: "09:00 AM", status: "Completed", present: 56 },
  { id: "SES-1038", class: "IT-B (2nd Year)", subject: "Web Development", teacher: "Prof. S. Nair", date: "2026-04-03", time: "10:30 AM", status: "Completed", present: 45 },
  { id: "SES-1037", class: "CS-B (3rd Year)", subject: "Machine Learning", teacher: "Prof. A. Kumar", date: "2026-04-03", time: "02:00 PM", status: "Completed", present: 50 },
  { id: "SES-1036", class: "IT-A (3rd Year)", subject: "Computer Networks", teacher: "Prof. P. Mehta", date: "2026-04-02", time: "09:00 AM", status: "Completed", present: 42 },
  { id: "SES-1035", class: "CS-A (2nd Year)", subject: "Data Structures", teacher: "Prof. M. Desai", date: "2026-04-02", time: "11:00 AM", status: "Completed", present: 52 },
];

const ATTENDANCE_RECORDS = STUDENTS.flatMap(s => {
  const subjects = ["Machine Learning", "Data Structures", "Operating Systems"];
  const dates = ["2026-04-04", "2026-04-03", "2026-04-02"];
  return dates.map(d => ({
    name: s.name,
    roll: s.roll,
    date: d,
    subject: subjects[Math.floor(Math.random() * subjects.length)],
    status: Math.random() > 0.2 ? "Present" : "Absent",
    confidence: Math.floor(Math.random() * 30) + 70
  }));
});

const TREND_DATA = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  values: [82, 85, 78, 88, 81, 0, 0]
};

const CLASS_CHART_DATA = {
  labels: ["CS-A 3rd", "CS-B 3rd", "IT-A 2nd", "IT-B 2nd", "CS-A 2nd", "CS-B 2nd"],
  values: [85, 79, 72, 81, 88, 76]
};

// ==========================================
// UTILITIES
// ==========================================

const avatarColors = ["#3b82f6", "#8b5cf6", "#ec4899", "#f97316", "#22c55e", "#06b6d4", "#6366f1", "#f43f5e"];

function getInitials(name) { return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2); }
function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return avatarColors[Math.abs(hash) % avatarColors.length];
}
function getConfClass(v) { return v >= 80 ? "high" : v >= 60 ? "medium" : "low"; }
function statusBadge(st) {
  const map = { Present: "badge-present", Absent: "badge-absent", Good: "badge-good", Low: "badge-low", Active: "badge-active", Completed: "badge-completed" };
  return `<span class="badge ${map[st] || ''}">${st}</span>`;
}

function showToast(msg, type = "info") {
  const c = document.getElementById("toastContainer");
  const icons = { success: "check_circle", error: "error", info: "info" };
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="material-icons-round">${icons[type]}</span> ${msg}`;
  c.appendChild(t);
  setTimeout(() => { t.style.animation = "slideOutRight 0.3s ease forwards"; setTimeout(() => t.remove(), 300); }, 3000);
}

function studentCell(name) {
  return `<div class="student-cell"><div class="student-avatar" style="background:${getAvatarColor(name)}">${getInitials(name)}</div><span>${name}</span></div>`;
}

function attBar(pct) {
  const cls = pct >= 75 ? "high" : "low";
  const color = pct >= 75 ? "var(--green-600)" : "var(--red-500)";
  return `<div class="att-bar-wrapper"><div class="att-bar"><div class="att-bar-fill ${cls}" style="width:${pct}%"></div></div><span style="font-weight:600;color:${color}">${pct}%</span></div>`;
}

function confBar(pct) {
  return `<div class="confidence-bar-wrapper"><div class="confidence-bar"><div class="confidence-bar-fill ${getConfClass(pct)}" style="width:${pct}%"></div></div><span class="confidence-value">${pct}%</span></div>`;
}

// ==========================================
// NAVIGATION
// ==========================================

const pageTitles = {
  dashboard: "Dashboard", students: "Student Management", classes: "Classes & Subjects",
  attendance: "Attendance Records", sessions: "Session Management",
  reports: "Reports & Analytics", alerts: "Alerts & Thresholds", settings: "Admin Settings"
};

function navigateTo(pageId) {
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  const active = document.querySelector(`.nav-item[data-page="${pageId}"]`);
  if (active) active.classList.add("active");
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const pg = document.getElementById(`page-${pageId}`);
  if (pg) { void pg.offsetWidth; pg.classList.add("active"); }
  document.getElementById("pageTitle").textContent = pageTitles[pageId] || pageId;
  document.getElementById("sidebar").classList.remove("open");
  const ov = document.querySelector(".sidebar-overlay");
  if (ov) ov.classList.remove("active");
}

// ==========================================
// MODAL
// ==========================================

function openModal(title, bodyHTML) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalBody").innerHTML = bodyHTML;
  document.getElementById("modalOverlay").classList.add("active");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

// ==========================================
// CHARTS — Canvas
// ==========================================

function drawLineChart(canvasId, data) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  canvas.style.width = rect.width + "px"; canvas.style.height = rect.height + "px";
  const W = rect.width, H = rect.height;
  const pT = 30, pB = 40, pL = 50, pR = 20;
  const cW = W - pL - pR, cH = H - pT - pB;
  ctx.clearRect(0, 0, W, H);

  const maxV = 100;
  const ySteps = [0, 20, 40, 60, 80, 100];
  ctx.font = "11px Inter,sans-serif"; ctx.textAlign = "right";
  ySteps.forEach(v => {
    const y = pT + cH - (v / maxV) * cH;
    ctx.strokeStyle = "#e2e8f0"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pL, y); ctx.lineTo(W - pR, y); ctx.stroke();
    ctx.fillStyle = "#94a3b8"; ctx.fillText(v + "%", pL - 8, y + 4);
  });

  ctx.textAlign = "center";
  data.labels.forEach((l, i) => {
    const x = pL + (i / (data.labels.length - 1)) * cW;
    ctx.fillStyle = "#94a3b8"; ctx.fillText(l, x, H - 10);
  });

  const pts = data.values.map((v, i) => ({ x: pL + (i / (data.labels.length - 1)) * cW, y: pT + cH - (v / maxV) * cH }));

  // Gradient
  const grad = ctx.createLinearGradient(0, pT, 0, pT + cH);
  grad.addColorStop(0, "rgba(59,130,246,0.18)"); grad.addColorStop(1, "rgba(59,130,246,0.01)");
  ctx.beginPath(); ctx.moveTo(pts[0].x, pT + cH);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length - 1].x, pT + cH); ctx.closePath();
  ctx.fillStyle = grad; ctx.fill();

  // Line
  ctx.beginPath(); ctx.strokeStyle = "#3b82f6"; ctx.lineWidth = 2.5; ctx.lineJoin = "round"; ctx.lineCap = "round";
  pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.stroke();

  // Dots
  pts.forEach(p => {
    ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#3b82f6"; ctx.fill();
    ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke();
  });
}

function drawBarChart(canvasId, data) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  canvas.style.width = rect.width + "px"; canvas.style.height = rect.height + "px";
  const W = rect.width, H = rect.height;
  const pT = 20, pB = 50, pL = 50, pR = 20;
  const cW = W - pL - pR, cH = H - pT - pB;
  ctx.clearRect(0, 0, W, H);

  const maxV = 100;
  [0, 25, 50, 75, 100].forEach(v => {
    const y = pT + cH - (v / maxV) * cH;
    ctx.strokeStyle = "#e2e8f0"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pL, y); ctx.lineTo(W - pR, y); ctx.stroke();
    ctx.fillStyle = "#94a3b8"; ctx.font = "11px Inter,sans-serif"; ctx.textAlign = "right";
    ctx.fillText(v + "%", pL - 8, y + 4);
  });

  const barW = Math.min(40, cW / data.labels.length - 16);
  const colors = ["#3b82f6", "#8b5cf6", "#22c55e", "#06b6d4", "#f97316", "#ec4899"];

  data.labels.forEach((l, i) => {
    const x = pL + (i + 0.5) * (cW / data.labels.length) - barW / 2;
    const barH = (data.values[i] / maxV) * cH;
    const y = pT + cH - barH;

    // Bar gradient
    const grad = ctx.createLinearGradient(x, y, x, pT + cH);
    grad.addColorStop(0, colors[i % colors.length]);
    grad.addColorStop(1, colors[i % colors.length] + "80");
    ctx.fillStyle = grad;

    // Rounded rect
    const r = 6;
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.lineTo(x + barW - r, y);
    ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
    ctx.lineTo(x + barW, pT + cH); ctx.lineTo(x, pT + cH);
    ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath(); ctx.fill();

    // Value on top
    ctx.fillStyle = "#334155"; ctx.font = "600 11px Inter,sans-serif"; ctx.textAlign = "center";
    ctx.fillText(data.values[i] + "%", x + barW / 2, y - 6);

    // Label
    ctx.fillStyle = "#64748b"; ctx.font = "11px Inter,sans-serif";
    ctx.fillText(l, x + barW / 2, H - 10);
  });
}

function drawDonut(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  canvas.style.width = rect.width + "px"; canvas.style.height = rect.height + "px";
  const W = rect.width, H = rect.height;
  ctx.clearRect(0, 0, W, H);

  const cx = W / 2, cy = H / 2 - 10;
  const R = Math.min(cx, cy) - 20;
  const inner = R * 0.6;
  const slices = [
    { label: "Present (81%)", pct: 0.81, color: "#22c55e" },
    { label: "Absent (12%)", pct: 0.12, color: "#ef4444" },
    { label: "Late (7%)", pct: 0.07, color: "#f97316" },
  ];

  let start = -Math.PI / 2;
  slices.forEach(s => {
    const angle = s.pct * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx, cy, R, start, start + angle);
    ctx.arc(cx, cy, inner, start + angle, start, true);
    ctx.closePath();
    ctx.fillStyle = s.color;
    ctx.fill();
    start += angle;
  });

  // Center text
  ctx.fillStyle = "#0f172a"; ctx.font = "800 28px Inter,sans-serif"; ctx.textAlign = "center";
  ctx.fillText("81.3%", cx, cy + 4);
  ctx.fillStyle = "#64748b"; ctx.font = "500 12px Inter,sans-serif";
  ctx.fillText("Overall", cx, cy + 20);

  // Legend
  const legendY = H - 24;
  let lx = cx - 140;
  slices.forEach(s => {
    ctx.fillStyle = s.color;
    ctx.beginPath(); ctx.arc(lx, legendY, 5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#334155"; ctx.font = "600 11px Inter,sans-serif"; ctx.textAlign = "left";
    ctx.fillText(s.label, lx + 10, legendY + 4);
    lx += 100;
  });
}

// ==========================================
// TABLE POPULATIONS
// ==========================================

function populateRecentSessions() {
  const tb = document.querySelector("#recentSessionsTable tbody");
  tb.innerHTML = SESSIONS_DATA.slice(0, 5).map(s => `
    <tr>
      <td><strong>${s.id}</strong></td>
      <td>${s.class}</td>
      <td>${s.subject}</td>
      <td>${s.date}</td>
      <td>${s.teacher}</td>
      <td>${s.present}</td>
      <td>${statusBadge(s.status)}</td>
    </tr>
  `).join("");
}

function populateStudentsTable() {
  const tb = document.querySelector("#studentsTable tbody");
  tb.innerHTML = STUDENTS.map((s, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${studentCell(s.name)}</td>
      <td><strong>${s.id}</strong></td>
      <td>${s.class}</td>
      <td>${s.section}</td>
      <td style="font-size:0.82rem;color:var(--gray-500)">${s.email}</td>
      <td>${attBar(s.attendance)}</td>
      <td>
        <div class="action-btns">
          <button class="icon-btn edit" title="Edit" onclick="openStudentModal('edit','${s.id}')"><span class="material-icons-round">edit</span></button>
          <button class="icon-btn delete" title="Delete" onclick="deleteStudent('${s.name}')"><span class="material-icons-round">delete</span></button>
        </div>
      </td>
    </tr>
  `).join("");
}

function populateClassesTable() {
  const tb = document.querySelector("#classesTable tbody");
  tb.innerHTML = CLASSES_DATA.map(c => `
    <tr>
      <td><strong>${c.class} (${c.year})</strong></td>
      <td>${c.section}</td>
      <td>${c.students}</td>
      <td>
        <div class="action-btns">
          <button class="icon-btn edit" title="Edit"><span class="material-icons-round">edit</span></button>
          <button class="icon-btn delete" title="Delete"><span class="material-icons-round">delete</span></button>
        </div>
      </td>
    </tr>
  `).join("");
}

function populateSubjectsTable() {
  const tb = document.querySelector("#subjectsTable tbody");
  tb.innerHTML = SUBJECTS_DATA.map(s => `
    <tr>
      <td><strong>${s.name}</strong></td>
      <td><span class="badge badge-info">${s.code}</span></td>
      <td style="font-size:0.82rem;color:var(--gray-500)">${s.classes}</td>
      <td>
        <div class="action-btns">
          <button class="icon-btn edit" title="Edit"><span class="material-icons-round">edit</span></button>
          <button class="icon-btn delete" title="Delete"><span class="material-icons-round">delete</span></button>
        </div>
      </td>
    </tr>
  `).join("");
}

function populateAttendanceTable() {
  const tb = document.querySelector("#attendanceTable tbody");
  tb.innerHTML = ATTENDANCE_RECORDS.slice(0, 20).map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${studentCell(r.name)}</td>
      <td>${r.date}</td>
      <td>${r.subject}</td>
      <td>${statusBadge(r.status)}</td>
      <td>${confBar(r.confidence)}</td>
      <td>
        <button class="icon-btn edit" title="Edit"><span class="material-icons-round">edit</span></button>
      </td>
    </tr>
  `).join("");
}

function populateSessionsTable() {
  const tb = document.querySelector("#sessionsTable tbody");
  tb.innerHTML = SESSIONS_DATA.map(s => `
    <tr>
      <td><strong>${s.id}</strong></td>
      <td>${s.class}</td>
      <td>${s.subject}</td>
      <td>${s.teacher}</td>
      <td>${s.date}</td>
      <td>${s.time}</td>
      <td>${statusBadge(s.status)}</td>
      <td>
        <div class="action-btns">
          <button class="icon-btn view" title="View Details" onclick="showToast('Session ${s.id} details','info')"><span class="material-icons-round">visibility</span></button>
          <button class="icon-btn delete" title="Delete" onclick="showToast('Session ${s.id} deleted','error')"><span class="material-icons-round">delete</span></button>
        </div>
      </td>
    </tr>
  `).join("");
}

function populateReportTable() {
  const tb = document.querySelector("#reportTable tbody");
  const data = STUDENTS.map(s => {
    const total = Math.floor(Math.random() * 10) + 30;
    const present = Math.floor(s.attendance / 100 * total);
    return { ...s, totalClasses: total, presentCount: present };
  });
  tb.innerHTML = data.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${studentCell(r.name)}</td>
      <td>${r.class}</td>
      <td>${r.totalClasses}</td>
      <td>${r.presentCount}</td>
      <td>${attBar(r.attendance)}</td>
      <td>${statusBadge(r.attendance >= 75 ? "Good" : "Low")}</td>
    </tr>
  `).join("");
}

function populateAlertsTable() {
  const low = STUDENTS.filter(s => s.attendance < 75);
  const tb = document.querySelector("#alertsTable tbody");
  tb.innerHTML = low.map((s, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${studentCell(s.name)}</td>
      <td>${s.class}</td>
      <td>${attBar(s.attendance)}</td>
      <td style="font-size:0.82rem;color:var(--gray-500)">${s.email}</td>
      <td>
        <button class="btn btn-sm btn-accent send-alert-btn" data-name="${s.name}">
          <span class="material-icons-round">send</span> Send
        </button>
      </td>
    </tr>
  `).join("");

  document.querySelectorAll(".send-alert-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.disabled = true;
      btn.innerHTML = `<span class="material-icons-round">done</span> Sent`;
      btn.classList.remove("btn-accent");
      btn.classList.add("btn-success");
      showToast(`Alert sent to ${btn.dataset.name}`, "success");
    });
  });
}

// ==========================================
// MODALS
// ==========================================

function openStudentModal(mode, id) {
  const s = mode === 'edit' ? STUDENTS.find(st => st.id === id) : null;
  const title = mode === 'edit' ? 'Edit Student' : 'Add New Student';
  const html = `
    <div class="form-group"><label class="form-label">Full Name</label><input type="text" class="form-input" value="${s ? s.name : ''}" placeholder="Enter student name" /></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div class="form-group"><label class="form-label">Class</label>
        <select class="form-select"><option ${s?.class === 'CS-A (3rd Year)' ? 'selected' : ''}>CS-A (3rd Year)</option><option ${s?.class === 'CS-B (3rd Year)' ? 'selected' : ''}>CS-B (3rd Year)</option><option ${s?.class === 'IT-A (2nd Year)' ? 'selected' : ''}>IT-A (2nd Year)</option><option ${s?.class === 'IT-B (2nd Year)' ? 'selected' : ''}>IT-B (2nd Year)</option></select>
      </div>
      <div class="form-group"><label class="form-label">Section</label>
        <select class="form-select"><option ${s?.section === 'A' ? 'selected' : ''}>A</option><option ${s?.section === 'B' ? 'selected' : ''}>B</option></select>
      </div>
    </div>
    <div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input" value="${s ? s.email : ''}" placeholder="email@college.edu" /></div>
    <div class="form-group">
      <label class="form-label">Student Face Images (3–5 images)</label>
      <div class="modal-upload-grid">
        <div class="modal-upload-zone"><span class="material-icons-round">add_a_photo</span>Image 1</div>
        <div class="modal-upload-zone"><span class="material-icons-round">add_a_photo</span>Image 2</div>
        <div class="modal-upload-zone"><span class="material-icons-round">add_a_photo</span>Image 3</div>
        <div class="modal-upload-zone"><span class="material-icons-round">add_a_photo</span>Image 4</div>
        <div class="modal-upload-zone"><span class="material-icons-round">add_a_photo</span>Image 5</div>
      </div>
    </div>
  `;
  openModal(title, html);
}

function deleteStudent(name) {
  showToast(`${name} deleted`, "error");
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function setupEvents() {
  // Nav
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", e => { e.preventDefault(); navigateTo(item.dataset.page); });
  });

  // Mobile menu
  const sidebar = document.getElementById("sidebar");
  document.getElementById("menuToggle").addEventListener("click", () => {
    sidebar.classList.toggle("open");
    let ov = document.querySelector(".sidebar-overlay");
    if (!ov) {
      ov = document.createElement("div"); ov.className = "sidebar-overlay";
      document.body.appendChild(ov);
      ov.addEventListener("click", () => { sidebar.classList.remove("open"); ov.classList.remove("active"); });
    }
    ov.classList.toggle("active");
  });

  // Modal
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalCancel").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.getElementById("modalSave").addEventListener("click", () => {
    closeModal();
    showToast("Saved successfully!", "success");
  });

  // Add Student
  document.getElementById("btnAddStudent").addEventListener("click", () => openStudentModal("add"));

  // Add Class
  document.getElementById("btnAddClass").addEventListener("click", () => {
    openModal("Add Class", `
      <div class="form-group"><label class="form-label">Class Name</label><input type="text" class="form-input" placeholder="e.g. CS-C" /></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
        <div class="form-group"><label class="form-label">Year</label><select class="form-select"><option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option></select></div>
        <div class="form-group"><label class="form-label">Section</label><select class="form-select"><option>A</option><option>B</option><option>C</option></select></div>
      </div>
    `);
  });

  // Add Subject
  document.getElementById("btnAddSubject").addEventListener("click", () => {
    openModal("Add Subject", `
      <div class="form-group"><label class="form-label">Subject Name</label><input type="text" class="form-input" placeholder="e.g. Artificial Intelligence" /></div>
      <div class="form-group"><label class="form-label">Subject Code</label><input type="text" class="form-input" placeholder="e.g. CS501" /></div>
      <div class="form-group"><label class="form-label">Assign to Classes</label>
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px">
          <label style="display:flex;align-items:center;gap:8px;font-size:0.88rem;color:var(--gray-700)"><input type="checkbox" /> CS-A (3rd Year)</label>
          <label style="display:flex;align-items:center;gap:8px;font-size:0.88rem;color:var(--gray-700)"><input type="checkbox" /> CS-B (3rd Year)</label>
          <label style="display:flex;align-items:center;gap:8px;font-size:0.88rem;color:var(--gray-700)"><input type="checkbox" /> IT-A (2nd Year)</label>
          <label style="display:flex;align-items:center;gap:8px;font-size:0.88rem;color:var(--gray-700)"><input type="checkbox" /> IT-B (2nd Year)</label>
        </div>
      </div>
    `);
  });

  // Filters
  document.getElementById("btnFilterAtt").addEventListener("click", () => showToast("Filter applied", "info"));
  document.getElementById("btnGenReport").addEventListener("click", () => showToast("Report generated!", "success"));

  // Send All Alerts
  document.getElementById("btnSendAllAlerts").addEventListener("click", () => {
    document.querySelectorAll(".send-alert-btn:not(:disabled)").forEach(btn => {
      btn.disabled = true;
      btn.innerHTML = `<span class="material-icons-round">done</span> Sent`;
      btn.classList.remove("btn-accent"); btn.classList.add("btn-success");
    });
    showToast("All alerts sent!", "success");
  });

  // Threshold slider
  const slider = document.getElementById("thresholdSlider");
  const thVal = document.getElementById("thresholdValue");
  if (slider) {
    slider.addEventListener("input", () => { thVal.textContent = slider.value + "%"; });
  }

  // Settings save buttons
  document.querySelectorAll(".settings-body .btn-primary").forEach(btn => {
    btn.addEventListener("click", () => showToast("Settings saved!", "success"));
  });

  // Resize charts
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawAllCharts, 200);
  });
}

// ==========================================
// DRAW ALL CHARTS
// ==========================================
function drawAllCharts() {
  drawLineChart("trendChart", TREND_DATA);
  drawBarChart("classChart", CLASS_CHART_DATA);
  drawDonut("reportPieChart");
  drawBarChart("reportBarChart", CLASS_CHART_DATA);
}

// ==========================================
// INIT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  populateRecentSessions();
  populateStudentsTable();
  populateClassesTable();
  populateSubjectsTable();
  populateAttendanceTable();
  populateSessionsTable();
  populateReportTable();
  populateAlertsTable();

  setTimeout(drawAllCharts, 100);
  setupEvents();
});

// ==========================================
// 🔥 FIREBASE INIT (ADD ONCE)
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyC93KmyYCaNcRusdp97mo6jnxES-r4oxa0",
  authDomain: "campusmadad-dcd2d.firebaseapp.com",
  databaseURL: "https://campusmadad-dcd2d-default-rtdb.firebaseio.com",
  projectId: "campusmadad-dcd2d",
  storageBucket: "campusmadad-dcd2d.appspot.com",
  messagingSenderId: "932168645476",
  appId: "1:932168645476:web:4dd4b2a788d36490015871",
  measurementId: "G-WJEF83R2KR"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();


// ==========================================
// 🔹 NORMAL REPORTS
// ==========================================
function showNormalReports() {
  const reportsContainer = document.getElementById("reportsContainer");
  const anonymousReportsContainer = document.getElementById("anonymousReportsContainer");

  reportsContainer.innerHTML = "<p>Loading...</p>";
  anonymousReportsContainer.innerHTML = "";

  database.ref("reports").once("value", function (snapshot) {
    reportsContainer.innerHTML = "";

    const table = document.createElement("table");
    table.className = "data-table";

    table.innerHTML = `
      <thead>
        <tr>
          <th>Student</th>
          <th>Category</th>
          <th>Problem</th>
          <th>Description</th>
          <th>Severity</th>
        </tr>
      </thead>
    `;

    const tbody = document.createElement("tbody");

    snapshot.forEach(function (child) {
      const data = child.val();

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${data.student_name || "-"}</td>
        <td>${data.category || "-"}</td>
        <td>${data.problem || "-"}</td>
        <td>${data.description || "-"}</td>
        <td>${data.severity || "-"}</td>
      `;

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    reportsContainer.appendChild(table);
  });
}


// ==========================================
// 🔹 ANONYMOUS REPORTS
// ==========================================
function showAnonymousReports() {
  const reportsContainer = document.getElementById("reportsContainer");
  const anonymousReportsContainer = document.getElementById("anonymousReportsContainer");

  reportsContainer.innerHTML = "";
  anonymousReportsContainer.innerHTML = "<p>Loading...</p>";

  database.ref("anonymous_reports").once("value", function (snapshot) {
    anonymousReportsContainer.innerHTML = "";

    const table = document.createElement("table");
    table.className = "data-table";

    table.innerHTML = `
      <thead>
        <tr>
          <th>Category</th>
          <th>Problem</th>
          <th>Description</th>
          <th>Severity</th>
        </tr>
      </thead>
    `;

    const tbody = document.createElement("tbody");

    snapshot.forEach(function (child) {
      const data = child.val();

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${data.category || "-"}</td>
        <td>${data.problem || "-"}</td>
        <td>${data.description || "-"}</td>
        <td>${data.severity || "-"}</td>
      `;

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    anonymousReportsContainer.appendChild(table);
  });
}