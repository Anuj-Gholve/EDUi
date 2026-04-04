/* ========================================
   EDU.i — Student Dashboard Logic
   ======================================== */

// ==========================================
// DATA
// ==========================================

const SUBJECTS = [
  { name: "Machine Learning", code: "CS401", total: 32, attended: 24, pct: 75 },
  { name: "Data Structures", code: "CS201", total: 28, attended: 22, pct: 79 },
  { name: "Operating Systems", code: "CS301", total: 30, attended: 16, pct: 53 },
  { name: "Computer Networks", code: "IT301", total: 26, attended: 18, pct: 69 },
  { name: "Database Systems", code: "CS202", total: 24, attended: 16, pct: 67 },
];

const DAYS = ["Mon 24 Mar","Tue 25 Mar","Wed 26 Mar","Thu 27 Mar","Fri 28 Mar","Sat 29 Mar","Sun 30 Mar","Mon 31 Mar","Tue 1 Apr","Wed 2 Apr","Thu 3 Apr","Fri 4 Apr"];
const TREND_VALUES = [1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0]; // 1=present, 0=absent

const ATTENDANCE_LOG = [];
(function generateLog() {
  const subjects = ["Machine Learning","Data Structures","Operating Systems","Computer Networks","Database Systems"];
  const times = ["09:00 AM","10:30 AM","12:00 PM","02:00 PM","03:30 PM"];
  const dates = [];
  const now = new Date(2026, 3, 4);
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    if (d.getDay() !== 0) dates.push(d.toISOString().slice(0, 10));
  }
  dates.forEach(date => {
    const numSessions = Math.floor(Math.random() * 3) + 1;
    for (let j = 0; j < numSessions; j++) {
      ATTENDANCE_LOG.push({
        date,
        subject: subjects[Math.floor(Math.random() * subjects.length)],
        time: times[j],
        status: Math.random() > 0.3 ? "Present" : "Absent",
        confidence: Math.floor(Math.random() * 25) + 75
      });
    }
  });
})();

const ALERTS = [
  { id: 1, type: "critical", icon: "warning", title: "Attendance Below 75%", message: "Your overall attendance has dropped to 68.5%. You need to attend at least 20 more classes to reach the minimum requirement. Please prioritize your attendance.", time: "2 hours ago", read: false },
  { id: 2, type: "critical", icon: "gpp_bad", title: "OS Subject — Critical Low", message: "Your Operating Systems attendance is only 53%. Immediate action required to avoid detention.", time: "5 hours ago", read: false },
  { id: 3, type: "warning", icon: "info", title: "Computer Networks Warning", message: "Your Computer Networks attendance is 69%, approaching the threshold. Consider attending more lectures.", time: "1 day ago", read: false },
  { id: 4, type: "warning", icon: "schedule", title: "Weekly Summary Available", message: "Your weekly attendance report for March 24–30 is ready to view. You attended 72% of classes this week.", time: "2 days ago", read: true },
  { id: 5, type: "info", icon: "event", title: "Attendance Session Recorded", message: "Your attendance for Machine Learning (April 3) has been marked as Present with 92% confidence.", time: "3 days ago", read: true },
  { id: 6, type: "info", icon: "event", title: "Attendance Session Recorded", message: "Your attendance for Data Structures (April 2) has been marked as Present with 88% confidence.", time: "4 days ago", read: true },
  { id: 7, type: "warning", icon: "notification_important", title: "Database Systems Alert", message: "Your Database Systems attendance is 67%. Please attend upcoming classes.", time: "5 days ago", read: true },
  { id: 8, type: "info", icon: "check_circle", title: "Profile Updated", message: "Your student profile photo has been updated successfully for face recognition.", time: "1 week ago", read: true },
];

// ==========================================
// UTILITIES
// ==========================================

function showToast(msg, type = "info") {
  const c = document.getElementById("toastContainer");
  const icons = { success: "check_circle", error: "error", info: "info" };
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="material-icons-round">${icons[type]}</span> ${msg}`;
  c.appendChild(t);
  setTimeout(() => { t.style.animation = "slideOutRight .3s ease forwards"; setTimeout(() => t.remove(), 300); }, 3000);
}

function statusBadge(st) {
  return `<span class="badge badge-${st.toLowerCase()}">${st}</span>`;
}

function confBar(pct) {
  const cls = pct >= 85 ? "high" : pct >= 70 ? "medium" : "low";
  return `<div class="confidence-bar-wrapper"><div class="confidence-bar"><div class="confidence-bar-fill ${cls}" style="width:${pct}%"></div></div><span class="confidence-value">${pct}%</span></div>`;
}

function attBar(pct) {
  const cls = pct >= 75 ? "high" : "low";
  const color = pct >= 75 ? "var(--green-600)" : "var(--red-500)";
  return `<div class="att-bar-wrapper"><div class="att-bar"><div class="att-bar-fill ${cls}" style="width:${pct}%"></div></div><span style="font-weight:700;color:${color}">${pct}%</span></div>`;
}

// ==========================================
// NAVIGATION
// ==========================================

const pageTitles = {
  dashboard: "Dashboard",
  attendance: "Attendance Details",
  subjects: "Subject-wise Attendance",
  reports: "Reports",
  alerts: "Alerts & Notifications"
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
// CHART — Canvas attendance heatmap-style
// ==========================================

function drawTrendChart() {
  const canvas = document.getElementById("trendChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  canvas.style.width = rect.width + "px"; canvas.style.height = rect.height + "px";
  const W = rect.width, H = rect.height;
  const pT = 30, pB = 50, pL = 50, pR = 20;
  const cW = W - pL - pR, cH = H - pT - pB;
  ctx.clearRect(0, 0, W, H);

  // Use rolling attendance % instead of binary
  const rolling = [];
  let attended = 0;
  TREND_VALUES.forEach((v, i) => {
    attended += v;
    rolling.push(Math.round((attended / (i + 1)) * 100));
  });

  const maxV = 100;
  const ySteps = [0, 25, 50, 75, 100];
  ctx.font = "11px Inter,sans-serif"; ctx.textAlign = "right";
  ySteps.forEach(v => {
    const y = pT + cH - (v / maxV) * cH;
    ctx.strokeStyle = "#e2e8f0"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pL, y); ctx.lineTo(W - pR, y); ctx.stroke();
    ctx.fillStyle = "#94a3b8"; ctx.fillText(v + "%", pL - 8, y + 4);
  });

  // 75% threshold line
  const threshY = pT + cH - (75 / maxV) * cH;
  ctx.strokeStyle = "#ef444488"; ctx.lineWidth = 1.5; ctx.setLineDash([6, 4]);
  ctx.beginPath(); ctx.moveTo(pL, threshY); ctx.lineTo(W - pR, threshY); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "#ef4444"; ctx.font = "600 10px Inter,sans-serif"; ctx.textAlign = "left";
  ctx.fillText("75% threshold", pL + 4, threshY - 6);

  // X-axis labels
  ctx.textAlign = "center"; ctx.font = "11px Inter,sans-serif";
  DAYS.forEach((l, i) => {
    const x = pL + (i / (DAYS.length - 1)) * cW;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(l.split(" ")[0], x, H - 24);
    ctx.fillText(l.split(" ").slice(1).join(" "), x, H - 10);
  });

  const pts = rolling.map((v, i) => ({
    x: pL + (i / (DAYS.length - 1)) * cW,
    y: pT + cH - (v / maxV) * cH
  }));

  // Gradient fill
  const grad = ctx.createLinearGradient(0, pT, 0, pT + cH);
  grad.addColorStop(0, "rgba(59,130,246,0.15)");
  grad.addColorStop(1, "rgba(59,130,246,0.01)");
  ctx.beginPath(); ctx.moveTo(pts[0].x, pT + cH);
  pts.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(pts[pts.length - 1].x, pT + cH); ctx.closePath();
  ctx.fillStyle = grad; ctx.fill();

  // Line
  ctx.beginPath(); ctx.strokeStyle = "#3b82f6"; ctx.lineWidth = 2.5;
  ctx.lineJoin = "round"; ctx.lineCap = "round";
  pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
  ctx.stroke();

  // Dots
  pts.forEach((p, i) => {
    ctx.beginPath(); ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
    const below = rolling[i] < 75;
    ctx.fillStyle = below ? "#ef4444" : "#3b82f6";
    ctx.fill();
    ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke();
  });
}

// ==========================================
// POPULATE — Dashboard subject bars
// ==========================================

function populateSubjectBars() {
  const el = document.getElementById("subjectBars");
  el.innerHTML = SUBJECTS.map(s => {
    const cls = s.pct >= 75 ? "good" : "low";
    return `
      <div class="subject-bar-item">
        <div class="subject-bar-top">
          <span class="subject-bar-name">${s.name}</span>
          <span class="subject-bar-pct ${cls}">${s.pct}%</span>
        </div>
        <div class="subject-bar-track">
          <div class="subject-bar-fill ${cls}" style="width:${s.pct}%"></div>
        </div>
      </div>`;
  }).join("");
}

// ==========================================
// POPULATE — Attendance Table
// ==========================================

function populateAttendanceTable() {
  const tb = document.querySelector("#attendanceTable tbody");
  tb.innerHTML = ATTENDANCE_LOG.slice(0, 30).map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${r.date}</td>
      <td>${r.subject}</td>
      <td>${r.time}</td>
      <td>${statusBadge(r.status)}</td>
      <td>${confBar(r.confidence)}</td>
    </tr>
  `).join("");
  document.getElementById("recordCount").textContent = `Showing ${Math.min(30, ATTENDANCE_LOG.length)} records`;
}

// ==========================================
// POPULATE — Subjects Table
// ==========================================

function populateSubjectsTable() {
  // Stats cards
  const good = SUBJECTS.filter(s => s.pct >= 75).length;
  const low = SUBJECTS.filter(s => s.pct < 75).length;
  const best = SUBJECTS.reduce((a, b) => a.pct > b.pct ? a : b);

  document.getElementById("subjectStatsCards").innerHTML = `
    <div class="mini-stat-card"><span class="material-icons-round mini-stat-icon green">check_circle</span><div><span class="mini-stat-value">${good}</span><span class="mini-stat-label">Subjects ≥ 75%</span></div></div>
    <div class="mini-stat-card"><span class="material-icons-round mini-stat-icon red">warning</span><div><span class="mini-stat-value">${low}</span><span class="mini-stat-label">Subjects Below 75%</span></div></div>
    <div class="mini-stat-card"><span class="material-icons-round mini-stat-icon blue">star</span><div><span class="mini-stat-value">${best.name}</span><span class="mini-stat-label">Best Subject (${best.pct}%)</span></div></div>
  `;

  const tb = document.querySelector("#subjectsTable tbody");
  tb.innerHTML = SUBJECTS.map(s => `
    <tr>
      <td><strong>${s.name}</strong></td>
      <td><span class="badge badge-info">${s.code}</span></td>
      <td>${s.total}</td>
      <td>${s.attended}</td>
      <td style="color:var(--red-500);font-weight:600">${s.total - s.attended}</td>
      <td>${attBar(s.pct)}</td>
    </tr>
  `).join("");
}

// ==========================================
// POPULATE — Reports Table
// ==========================================

function populateReportTable() {
  const tb = document.querySelector("#reportTable tbody");
  tb.innerHTML = ATTENDANCE_LOG.slice(0, 40).map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${r.date}</td>
      <td>${r.subject}</td>
      <td>${statusBadge(r.status)}</td>
    </tr>
  `).join("");
}

// ==========================================
// POPULATE — Alerts
// ==========================================

function populateAlerts() {
  const el = document.getElementById("alertsList");
  el.innerHTML = ALERTS.map(a => `
    <div class="alert-item ${a.read ? '' : 'unread'}" data-id="${a.id}">
      <div class="alert-dot ${a.read ? 'read' : a.type}"></div>
      <div class="alert-icon-wrap ${a.type}">
        <span class="material-icons-round">${a.icon}</span>
      </div>
      <div class="alert-body">
        <div class="alert-title">${a.title}</div>
        <div class="alert-message">${a.message}</div>
        <div class="alert-meta">
          <span class="alert-time">${a.time}</span>
          <span class="alert-status-badge ${a.read ? 'read' : 'unread'}">${a.read ? 'Read' : 'Unread'}</span>
        </div>
      </div>
    </div>
  `).join("");

  // Click to mark read
  el.querySelectorAll(".alert-item.unread").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.remove("unread");
      item.querySelector(".alert-dot").className = "alert-dot read";
      item.querySelector(".alert-status-badge").className = "alert-status-badge read";
      item.querySelector(".alert-status-badge").textContent = "Read";
      updateAlertBadge();
    });
  });
}

function updateAlertBadge() {
  const unread = document.querySelectorAll(".alert-item.unread").length;
  const badge = document.getElementById("alertBadge");
  const topBadge = document.querySelector(".notif-badge");
  badge.textContent = unread;
  topBadge.textContent = unread;
  if (unread === 0) {
    badge.style.display = "none";
    topBadge.style.display = "none";
  }
}

// ==========================================
// EVENTS
// ==========================================

function setupEvents() {
  // Nav
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", e => {
      const page = item.dataset.page;
      if (!page) return;
      e.preventDefault();
      navigateTo(page);
    });
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

  // Dismiss warning
  document.getElementById("dismissWarning").addEventListener("click", () => {
    document.getElementById("warningBanner").classList.add("hidden");
  });

  // Filter
  document.getElementById("btnFilterAtt").addEventListener("click", () => {
    showToast("Filter applied", "info");
  });

  // Download report
  document.getElementById("btnDownloadReport").addEventListener("click", () => {
    showToast("Report downloaded!", "success");
  });

  // Mark all read
  document.getElementById("btnMarkAllRead").addEventListener("click", () => {
    document.querySelectorAll(".alert-item.unread").forEach(item => {
      item.classList.remove("unread");
      item.querySelector(".alert-dot").className = "alert-dot read";
      item.querySelector(".alert-status-badge").className = "alert-status-badge read";
      item.querySelector(".alert-status-badge").textContent = "Read";
    });
    updateAlertBadge();
    showToast("All notifications marked as read", "success");
  });

  // Notification bell -> alerts page
  document.getElementById("notifBtn").addEventListener("click", () => {
    navigateTo("alerts");
  });

  // Resize chart
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawTrendChart, 200);
  });
}

// ==========================================
// INIT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  populateSubjectBars();
  populateAttendanceTable();
  populateSubjectsTable();
  populateReportTable();
  populateAlerts();

  setTimeout(drawTrendChart, 100);
  setupEvents();
});
