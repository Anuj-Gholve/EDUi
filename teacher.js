/* ========================================
   EDU.i — Application Logic
   ======================================== */

// ==========================================
// DATA — All dummy / static data
// ==========================================

const STUDENTS = [
  { id: 1, name: "Aarav Sharma", roll: "CS3A-01", class: "CS-A (3rd Year)", email: "aarav.s@college.edu" },
  { id: 2, name: "Priya Patel", roll: "CS3A-02", class: "CS-A (3rd Year)", email: "priya.p@college.edu" },
  { id: 3, name: "Rohan Deshmukh", roll: "CS3A-03", class: "CS-A (3rd Year)", email: "rohan.d@college.edu" },
  { id: 4, name: "Sneha Kulkarni", roll: "CS3A-04", class: "CS-A (3rd Year)", email: "sneha.k@college.edu" },
  { id: 5, name: "Arjun Mehta", roll: "CS3A-05", class: "CS-A (3rd Year)", email: "arjun.m@college.edu" },
  { id: 6, name: "Diya Joshi", roll: "CS3A-06", class: "CS-A (3rd Year)", email: "diya.j@college.edu" },
  { id: 7, name: "Vivaan Reddy", roll: "CS3A-07", class: "CS-A (3rd Year)", email: "vivaan.r@college.edu" },
  { id: 8, name: "Ananya Iyer", roll: "CS3B-01", class: "CS-B (3rd Year)", email: "ananya.i@college.edu" },
  { id: 9, name: "Kabir Singh", roll: "CS3B-02", class: "CS-B (3rd Year)", email: "kabir.s@college.edu" },
  { id: 10, name: "Ishaan Gupta", roll: "CS3B-03", class: "CS-B (3rd Year)", email: "ishaan.g@college.edu" },
  { id: 11, name: "Meera Nair", roll: "IT2A-01", class: "IT-A (2nd Year)", email: "meera.n@college.edu" },
  { id: 12, name: "Aditya Verma", roll: "IT2A-02", class: "IT-A (2nd Year)", email: "aditya.v@college.edu" },
  { id: 13, name: "Kavya Rao", roll: "IT2A-03", class: "IT-A (2nd Year)", email: "kavya.r@college.edu" },
  { id: 14, name: "Ritika Chopra", roll: "CS3A-08", class: "CS-A (3rd Year)", email: "ritika.c@college.edu" },
  { id: 15, name: "Manav Tiwari", roll: "CS3A-09", class: "CS-A (3rd Year)", email: "manav.t@college.edu" },
  { id: 16, name: "Pooja Bhatt", roll: "CS3B-04", class: "CS-B (3rd Year)", email: "pooja.b@college.edu" },
  { id: 17, name: "Raj Malhotra", roll: "IT2A-04", class: "IT-A (2nd Year)", email: "raj.m@college.edu" },
  { id: 18, name: "Sara Khan", roll: "IT2A-05", class: "IT-A (2nd Year)", email: "sara.k@college.edu" },
];

const LOW_ATTENDANCE = [
  { name: "Rohan Deshmukh", class: "CS-A", attendance: 62, email: "rohan.d@college.edu", roll: "CS3A-03" },
  { name: "Arjun Mehta", class: "CS-A", attendance: 58, email: "arjun.m@college.edu", roll: "CS3A-05" },
  { name: "Kabir Singh", class: "CS-B", attendance: 71, email: "kabir.s@college.edu", roll: "CS3B-02" },
  { name: "Meera Nair", class: "IT-A", attendance: 65, email: "meera.n@college.edu", roll: "IT2A-01" },
  { name: "Aditya Verma", class: "IT-A", attendance: 55, email: "aditya.v@college.edu", roll: "IT2A-02" },
  { name: "Pooja Bhatt", class: "CS-B", attendance: 68, email: "pooja.b@college.edu", roll: "CS3B-04" },
  { name: "Sara Khan", class: "IT-A", attendance: 73, email: "sara.k@college.edu", roll: "IT2A-05" },
  { name: "Manav Tiwari", class: "CS-A", attendance: 60, email: "manav.t@college.edu", roll: "CS3A-09" },
  { name: "Ritika Chopra", class: "CS-A", attendance: 74, email: "ritika.c@college.edu", roll: "CS3A-08" },
  { name: "Kavya Rao", class: "IT-A", attendance: 70, email: "kavya.r@college.edu", roll: "IT2A-03" },
];

const RECOGNITION_RESULTS = [
  { name: "Aarav Sharma", roll: "CS3A-01", confidence: 96, status: "Present" },
  { name: "Priya Patel", roll: "CS3A-02", confidence: 91, status: "Present" },
  { name: "Rohan Deshmukh", roll: "CS3A-03", confidence: 87, status: "Present" },
  { name: "Sneha Kulkarni", roll: "CS3A-04", confidence: 93, status: "Present" },
  { name: "Arjun Mehta", roll: "CS3A-05", confidence: 45, status: "Unknown" },
  { name: "Diya Joshi", roll: "CS3A-06", confidence: 78, status: "Review" },
  { name: "Vivaan Reddy", roll: "CS3A-07", confidence: 94, status: "Present" },
  { name: "Unknown Face #1", roll: "—", confidence: 32, status: "Unknown" },
  { name: "Ananya Iyer", roll: "CS3B-01", confidence: 88, status: "Present" },
  { name: "Kabir Singh", roll: "CS3B-02", confidence: 72, status: "Review" },
  { name: "Ishaan Gupta", roll: "CS3B-03", confidence: 95, status: "Present" },
  { name: "Meera Nair", roll: "IT2A-01", confidence: 64, status: "Review" },
  { name: "Unknown Face #2", roll: "—", confidence: 28, status: "Unknown" },
  { name: "Aditya Verma", roll: "IT2A-02", confidence: 89, status: "Present" },
  { name: "Kavya Rao", roll: "IT2A-03", confidence: 82, status: "Present" },
  { name: "Ritika Chopra", roll: "CS3A-08", confidence: 90, status: "Present" },
  { name: "Manav Tiwari", roll: "CS3A-09", confidence: 76, status: "Review" },
  { name: "Unknown Face #3", roll: "—", confidence: 18, status: "Unknown" },
];

const REVIEW_DATA = STUDENTS.map(s => {
  const match = RECOGNITION_RESULTS.find(r => r.roll === s.roll);
  return {
    ...s,
    confidence: match ? match.confidence : 0,
    status: match ? (match.status === "Present" ? "Present" : "Absent") : "Absent"
  };
});

const REPORT_DATA = STUDENTS.map(s => {
  const total = Math.floor(Math.random() * 10) + 30;
  const present = Math.floor(Math.random() * total * 0.4) + Math.floor(total * 0.5);
  const pct = Math.round((present / total) * 100);
  return {
    ...s,
    totalClasses: total,
    presentCount: present,
    percentage: pct,
    status: pct >= 75 ? "Good" : "Low"
  };
});

const TREND_DATA = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  present: [210, 225, 198, 230, 212, 0, 0],
  absent: [38, 23, 50, 18, 36, 0, 0],
  total: 248
};

// ==========================================
// UTILITIES
// ==========================================

const avatarColors = [
  "#3b82f6", "#8b5cf6", "#ec4899", "#f97316",
  "#22c55e", "#06b6d4", "#6366f1", "#f43f5e"
];

function getInitials(name) {
  return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
}

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

function getConfidenceClass(val) {
  if (val >= 80) return "high";
  if (val >= 60) return "medium";
  return "low";
}

function getStatusBadge(status) {
  const map = {
    "Present": "badge-present",
    "Absent": "badge-absent",
    "Review": "badge-review",
    "Unknown": "badge-unknown",
    "Good": "badge-good",
    "Low": "badge-low",
  };
  return `<span class="badge ${map[status] || ''}">${status}</span>`;
}

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  const iconMap = { success: "check_circle", error: "error", info: "info" };
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="material-icons-round">${iconMap[type]}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "slideOutRight 0.3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================
// NAVIGATION
// ==========================================

const pageTitles = {
  dashboard: "Dashboard",
  session: "Start Attendance Session",
  results: "Recognition Results",
  review: "Review Attendance",
  reports: "Reports",
  alerts: "Alerts"
};

function navigateTo(pageId) {
  // Update active nav item
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  const activeNav = document.querySelector(`.nav-item[data-page="${pageId}"]`);
  if (activeNav) activeNav.classList.add("active");

  // Update pages
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const activePage = document.getElementById(`page-${pageId}`);
  if (activePage) {
    activePage.classList.remove("active");
    // Force reflow for animation
    void activePage.offsetWidth;
    activePage.classList.add("active");
  }

  // Update title
  document.getElementById("pageTitle").textContent = pageTitles[pageId] || pageId;

  // Close mobile sidebar
  document.getElementById("sidebar").classList.remove("open");
  const overlay = document.querySelector(".sidebar-overlay");
  if (overlay) overlay.classList.remove("active");
}

// ==========================================
// DASHBOARD — Chart + Low Attendance Table
// ==========================================

function drawTrendChart() {
  const canvas = document.getElementById("trendChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const container = canvas.parentElement;

  // High-DPI support
  const dpr = window.devicePixelRatio || 1;
  const rect = container.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  canvas.style.width = rect.width + "px";
  canvas.style.height = rect.height + "px";

  const W = rect.width;
  const H = rect.height;
  const padT = 30, padB = 40, padL = 50, padR = 20;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const data = TREND_DATA;
  const maxVal = 260;

  ctx.clearRect(0, 0, W, H);

  // Y-axis grid lines
  const ySteps = [0, 50, 100, 150, 200, 250];
  ctx.font = "11px Inter, sans-serif";
  ctx.textAlign = "right";
  ySteps.forEach(val => {
    const y = padT + chartH - (val / maxVal) * chartH;
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(W - padR, y);
    ctx.stroke();
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(val, padL - 8, y + 4);
  });

  // X-axis labels
  ctx.textAlign = "center";
  data.labels.forEach((label, i) => {
    const x = padL + (i / (data.labels.length - 1)) * chartW;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(label, x, H - 10);
  });

  // Draw gradient area + line for Present
  const presentPoints = data.present.map((val, i) => ({
    x: padL + (i / (data.labels.length - 1)) * chartW,
    y: padT + chartH - (val / maxVal) * chartH
  }));

  // Gradient fill
  const gradient = ctx.createLinearGradient(0, padT, 0, padT + chartH);
  gradient.addColorStop(0, "rgba(59, 130, 246, 0.2)");
  gradient.addColorStop(1, "rgba(59, 130, 246, 0.01)");

  ctx.beginPath();
  ctx.moveTo(presentPoints[0].x, padT + chartH);
  presentPoints.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(presentPoints[presentPoints.length - 1].x, padT + chartH);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Present line
  ctx.beginPath();
  ctx.strokeStyle = "#3b82f6";
  ctx.lineWidth = 2.5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  presentPoints.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.stroke();

  // Dots for present
  presentPoints.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#3b82f6";
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Absent line
  const absentPoints = data.absent.map((val, i) => ({
    x: padL + (i / (data.labels.length - 1)) * chartW,
    y: padT + chartH - (val / maxVal) * chartH
  }));

  ctx.beginPath();
  ctx.strokeStyle = "#f87171";
  ctx.lineWidth = 2.5;
  ctx.setLineDash([6, 4]);
  absentPoints.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.stroke();
  ctx.setLineDash([]);

  absentPoints.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#f87171";
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Legend
  ctx.font = "600 11px Inter, sans-serif";
  const legendY = 16;

  ctx.fillStyle = "#3b82f6";
  ctx.fillRect(W - 200, legendY - 5, 12, 3);
  ctx.fillStyle = "#334155";
  ctx.textAlign = "left";
  ctx.fillText("Present", W - 184, legendY);

  ctx.fillStyle = "#f87171";
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(W - 110, legendY - 3);
  ctx.lineTo(W - 98, legendY - 3);
  ctx.strokeStyle = "#f87171";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = "#334155";
  ctx.fillText("Absent", W - 94, legendY);
}

function populateLowAttendanceTable() {
  const tbody = document.querySelector("#lowAttendanceTable tbody");
  tbody.innerHTML = LOW_ATTENDANCE.slice(0, 7).map(s => `
    <tr>
      <td>
        <div class="student-cell">
          <div class="student-avatar" style="background:${getAvatarColor(s.name)}">${getInitials(s.name)}</div>
          <span>${s.name}</span>
        </div>
      </td>
      <td>${s.class}</td>
      <td>
        <div class="att-bar-wrapper">
          <div class="att-bar"><div class="att-bar-fill low" style="width:${s.attendance}%"></div></div>
          <span style="font-weight:600;color:var(--red-500)">${s.attendance}%</span>
        </div>
      </td>
      <td>${getStatusBadge("Low")}</td>
    </tr>
  `).join("");
}

// ==========================================
// START SESSION — Upload + Processing
// ==========================================

function setupUploadZones() {
  const zones = document.querySelectorAll(".upload-zone");
  let uploadCount = 0;

  zones.forEach(zone => {
    const input = zone.querySelector(".upload-input");

    // Drag and drop
    zone.addEventListener("dragover", e => {
      e.preventDefault();
      zone.style.borderColor = "var(--primary-400)";
      zone.style.background = "rgba(59, 130, 246, 0.06)";
    });

    zone.addEventListener("dragleave", () => {
      if (!zone.classList.contains("has-file")) {
        zone.style.borderColor = "";
        zone.style.background = "";
      }
    });

    zone.addEventListener("drop", e => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        handleFileUpload(zone, file);
      }
    });

    input.addEventListener("change", e => {
      const file = e.target.files[0];
      if (file) {
        handleFileUpload(zone, file);
      }
    });
  });

  function handleFileUpload(zone, file) {
    zone.classList.add("has-file");
    const icon = zone.querySelector(".upload-icon");
    icon.textContent = "check_circle";

    // Show preview
    const existingPreview = zone.querySelector(".upload-preview");
    if (existingPreview) existingPreview.remove();

    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.className = "upload-preview";
      zone.appendChild(img);
    };
    reader.readAsDataURL(file);

    zone.querySelector(".upload-text").textContent = file.name;
    zone.querySelector(".upload-hint").textContent = (file.size / 1024).toFixed(1) + " KB";

    // Check all zones
    const allDone = [...document.querySelectorAll(".upload-zone")].every(z => z.classList.contains("has-file"));
    document.getElementById("btnSubmitImages").disabled = !allDone;
  }
}

function setupProcessing() {
  const overlay = document.getElementById("processingOverlay");
  const progressBar = document.getElementById("processingProgress");
  const steps = [
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3")
  ];

  document.getElementById("btnSubmitImages").addEventListener("click", () => {
    overlay.classList.add("active");
    progressBar.style.width = "0%";
    steps.forEach(s => { s.className = "step"; });

    // Step 1 — Detecting faces
    setTimeout(() => {
      steps[0].classList.add("active");
      progressBar.style.width = "20%";
    }, 300);

    setTimeout(() => {
      steps[0].classList.remove("active");
      steps[0].classList.add("done");
      progressBar.style.width = "40%";
    }, 2000);

    // Step 2 — Matching students
    setTimeout(() => {
      steps[1].classList.add("active");
      progressBar.style.width = "55%";
    }, 2200);

    setTimeout(() => {
      steps[1].classList.remove("active");
      steps[1].classList.add("done");
      progressBar.style.width = "75%";
    }, 4000);

    // Step 3 — Generating attendance
    setTimeout(() => {
      steps[2].classList.add("active");
      progressBar.style.width = "90%";
    }, 4200);

    setTimeout(() => {
      steps[2].classList.remove("active");
      steps[2].classList.add("done");
      progressBar.style.width = "100%";
    }, 5500);

    // Navigate to results
    setTimeout(() => {
      overlay.classList.remove("active");
      navigateTo("results");
      showToast("Attendance processed successfully!", "success");
    }, 6200);
  });
}

// ==========================================
// RECOGNITION RESULTS TABLE
// ==========================================

function populateResultsTable() {
  const tbody = document.querySelector("#resultsTable tbody");
  tbody.innerHTML = RECOGNITION_RESULTS.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <div class="student-cell">
          <div class="student-avatar" style="background:${r.status === 'Unknown' ? 'var(--gray-400)' : getAvatarColor(r.name)}">
            ${r.status === 'Unknown' ? '?' : getInitials(r.name)}
          </div>
          <span>${r.name}</span>
        </div>
      </td>
      <td>${r.roll}</td>
      <td>
        <div class="confidence-bar-wrapper">
          <div class="confidence-bar">
            <div class="confidence-bar-fill ${getConfidenceClass(r.confidence)}" style="width:${r.confidence}%"></div>
          </div>
          <span class="confidence-value">${r.confidence}%</span>
        </div>
      </td>
      <td>${getStatusBadge(r.status)}</td>
      <td>
        <select class="action-select" data-index="${i}">
          <option ${r.status === 'Present' ? 'selected' : ''}>Present</option>
          <option ${r.status === 'Absent' ? 'selected' : ''}>Absent</option>
          <option ${r.status === 'Review' ? 'selected' : ''}>Review</option>
        </select>
      </td>
    </tr>
  `).join("");
}

// ==========================================
// REVIEW ATTENDANCE TABLE
// ==========================================

function populateReviewTable() {
  const tbody = document.querySelector("#reviewTable tbody");
  tbody.innerHTML = REVIEW_DATA.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <div class="student-cell">
          <div class="student-avatar" style="background:${getAvatarColor(r.name)}">${getInitials(r.name)}</div>
          <span>${r.name}</span>
        </div>
      </td>
      <td>${r.roll}</td>
      <td>
        <div class="confidence-bar-wrapper">
          <div class="confidence-bar">
            <div class="confidence-bar-fill ${getConfidenceClass(r.confidence)}" style="width:${r.confidence}%"></div>
          </div>
          <span class="confidence-value">${r.confidence}%</span>
        </div>
      </td>
      <td>${getStatusBadge(r.status)}</td>
      <td>
        <div class="status-toggle" data-index="${i}">
          <button class="status-toggle-btn ${r.status === 'Present' ? 'active-present' : ''}" data-val="Present">Present</button>
          <button class="status-toggle-btn ${r.status === 'Absent' ? 'active-absent' : ''}" data-val="Absent">Absent</button>
        </div>
      </td>
    </tr>
  `).join("");

  // Toggle handlers
  document.querySelectorAll(".status-toggle").forEach(toggle => {
    toggle.querySelectorAll(".status-toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        toggle.querySelectorAll(".status-toggle-btn").forEach(b => {
          b.classList.remove("active-present", "active-absent");
        });
        const val = btn.dataset.val;
        btn.classList.add(val === "Present" ? "active-present" : "active-absent");

        // Update badge in same row
        const row = btn.closest("tr");
        const badgeCell = row.querySelectorAll("td")[4];
        badgeCell.innerHTML = getStatusBadge(val);
      });
    });
  });
}

// ==========================================
// REPORTS TABLE
// ==========================================

function populateReportsTable() {
  const tbody = document.querySelector("#reportsTable tbody");
  tbody.innerHTML = REPORT_DATA.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <div class="student-cell">
          <div class="student-avatar" style="background:${getAvatarColor(r.name)}">${getInitials(r.name)}</div>
          <span>${r.name}</span>
        </div>
      </td>
      <td>${r.roll}</td>
      <td>${r.totalClasses}</td>
      <td>${r.presentCount}</td>
      <td>
        <div class="att-bar-wrapper">
          <div class="att-bar">
            <div class="att-bar-fill ${r.percentage >= 75 ? 'high' : 'low'}" style="width:${r.percentage}%"></div>
          </div>
          <span style="font-weight:600;color:${r.percentage >= 75 ? 'var(--green-600)' : 'var(--red-500)'}">${r.percentage}%</span>
        </div>
      </td>
      <td>${getStatusBadge(r.status)}</td>
    </tr>
  `).join("");
}

// ==========================================
// ALERTS TABLE
// ==========================================

function populateAlertsTable() {
  const tbody = document.querySelector("#alertsTable tbody");
  tbody.innerHTML = LOW_ATTENDANCE.map((s, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <div class="student-cell">
          <div class="student-avatar" style="background:${getAvatarColor(s.name)}">${getInitials(s.name)}</div>
          <span>${s.name}</span>
        </div>
      </td>
      <td>${s.roll}</td>
      <td>${s.class}</td>
      <td>
        <div class="att-bar-wrapper">
          <div class="att-bar">
            <div class="att-bar-fill low" style="width:${s.attendance}%"></div>
          </div>
          <span style="font-weight:600;color:var(--red-500)">${s.attendance}%</span>
        </div>
      </td>
      <td style="font-size:0.82rem;color:var(--gray-500)">${s.email}</td>
      <td>
        <button class="btn btn-sm btn-accent send-alert-btn" data-name="${s.name}">
          <span class="material-icons-round">send</span> Send
        </button>
      </td>
    </tr>
  `).join("");

  // Alert button handlers
  document.querySelectorAll(".send-alert-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      btn.disabled = true;
      btn.innerHTML = `<span class="material-icons-round">done</span> Sent`;
      btn.classList.remove("btn-accent");
      btn.classList.add("btn-success");
      showToast(`Alert sent to ${name}`, "success");
    });
  });
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  // Navigation
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      navigateTo(item.dataset.page);
    });
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    // Mobile overlay
    let overlay = document.querySelector(".sidebar-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "sidebar-overlay";
      document.body.appendChild(overlay);
      overlay.addEventListener("click", () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
      });
    }
    overlay.classList.toggle("active");
  });

  // Start Session button
  document.getElementById("btnStartSession").addEventListener("click", () => {
    const cls = document.getElementById("sessionClass").value;
    const sub = document.getElementById("sessionSubject").value;
    if (!cls || !sub) {
      showToast("Please select class and subject", "error");
      return;
    }
    showToast("Session started! Upload classroom images.", "info");
  });

  // Confirm Attendance (Results page)
  document.getElementById("btnConfirmAttendance").addEventListener("click", () => {
    showToast("Attendance saved successfully!", "success");
    setTimeout(() => navigateTo("review"), 800);
  });

  // Save Review
  document.getElementById("btnSaveReview").addEventListener("click", () => {
    showToast("Attendance updated successfully!", "success");
  });

  // Generate Report
  document.getElementById("btnGenerateReport").addEventListener("click", () => {
    showToast("Report generated!", "success");
  });

  // Send All Alerts
  document.getElementById("btnSendAllAlerts").addEventListener("click", () => {
    document.querySelectorAll(".send-alert-btn:not(:disabled)").forEach(btn => {
      btn.disabled = true;
      btn.innerHTML = `<span class="material-icons-round">done</span> Sent`;
      btn.classList.remove("btn-accent");
      btn.classList.add("btn-success");
    });
    showToast("All alerts sent successfully!", "success");
  });

  // Set default date
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 16);
  const dateInput = document.getElementById("sessionDate");
  if (dateInput) dateInput.value = dateStr;

  const reviewDateInput = document.getElementById("reviewDate");
  if (reviewDateInput) reviewDateInput.value = now.toISOString().slice(0, 10);

  // Window resize for chart
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(drawTrendChart, 200);
  });
}

// ==========================================
// INIT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Populate all tables
  populateLowAttendanceTable();
  populateResultsTable();
  populateReviewTable();
  populateReportsTable();
  populateAlertsTable();

  // Draw chart
  setTimeout(drawTrendChart, 100);

  // Setup interactions
  setupUploadZones();
  setupProcessing();
  setupEventListeners();
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