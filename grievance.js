/* ========================================
   EDU.i — Grievance Reporting Logic
   ======================================== */

// ==========================================
// FIREBASE CONFIG (EXACT — DO NOT MODIFY)
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
// FIREBASE STATUS CHECK
// ==========================================

function checkFirebaseConnection() {
  const statusEl = document.getElementById("firebaseStatus");
  const connectedRef = firebase.database().ref(".info/connected");
  connectedRef.on("value", (snap) => {
    if (snap.val() === true) {
      statusEl.className = "firebase-status connected";
      statusEl.querySelector(".status-text").textContent = "Firebase Connected";
    } else {
      statusEl.className = "firebase-status error";
      statusEl.querySelector(".status-text").textContent = "Disconnected";
    }
  });
}

// ==========================================
// CATEGORY → PROBLEM MAPPING
// ==========================================

const CATEGORY_PROBLEMS = {
  "Academic": ["Exam Issue", "Assignment Issue", "Grade Issue", "Curriculum Issue", "Teacher Issue"],
  "Classroom": ["Desk Issue", "Chair Issue", "Whiteboard Issue", "Temperature Issue", "Lighting Issue"],
  "Library": ["Book Availability", "Noise Level", "Facility Issue"],
  "Canteen": ["Food Quality", "Service Issue", "Cleanliness"],
  "Parking": ["Space Availability", "Security Issue"],
  "Fees": ["Payment Issue", "Financial Aid Issue"],
  "Organization": ["Event Organization Issue", "Membership Issue"],
  "Ragging": ["Verbal Abuse", "Physical Abuse"],
  "Harassment": ["Bullying", "Sexual Harassment", "Discrimination"],
  "Other": ["Other"]
};

// ==========================================
// POPULATE CATEGORIES
// ==========================================

function populateCategories(selectId) {
  const sel = document.getElementById(selectId);
  Object.keys(CATEGORY_PROBLEMS).forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    sel.appendChild(opt);
  });
}

function handleCategoryChange(categorySelectId, problemSelectId) {
  const catSel = document.getElementById(categorySelectId);
  const probSel = document.getElementById(problemSelectId);

  catSel.addEventListener("change", () => {
    const cat = catSel.value;
    probSel.innerHTML = '<option value="">Select problem</option>';

    if (cat && CATEGORY_PROBLEMS[cat]) {
      probSel.disabled = false;
      CATEGORY_PROBLEMS[cat].forEach(p => {
        const opt = document.createElement("option");
        opt.value = p;
        opt.textContent = p;
        probSel.appendChild(opt);
      });
    } else {
      probSel.disabled = true;
    }
  });
}

// ==========================================
// FILE UPLOAD PREVIEW
// ==========================================

function setupUploadZone(inputId, previewId, zoneId, type) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  const zone = document.getElementById(zoneId);

  // Drag events
  zone.addEventListener("dragenter", (e) => { e.preventDefault(); zone.classList.add("dragover"); });
  zone.addEventListener("dragover", (e) => { e.preventDefault(); zone.classList.add("dragover"); });
  zone.addEventListener("dragleave", () => { zone.classList.remove("dragover"); });
  zone.addEventListener("drop", (e) => { e.preventDefault(); zone.classList.remove("dragover"); });

  input.addEventListener("change", () => {
    preview.innerHTML = "";
    const files = input.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const item = document.createElement("div");
      item.className = "preview-item";
      const icon = type === "photo" ? "image" : "movie";
      const size = (file.size / 1024).toFixed(1) + " KB";
      item.innerHTML = `
        <span class="material-icons-round">${icon}</span>
        <span>${file.name} (${size})</span>
        <button type="button" class="preview-remove" title="Remove">
          <span class="material-icons-round" style="font-size:14px">close</span>
        </button>
      `;
      item.querySelector(".preview-remove").addEventListener("click", () => {
        item.remove();
      });
      preview.appendChild(item);
    }
  });
}

// ==========================================
// SUBMIT — NORMAL REPORT (EXACT LOGIC)
// ==========================================

function submitNormalReport(event) {
    event.preventDefault();

    const btn = document.getElementById("normalSubmitBtn");
    btn.disabled = true;
    btn.classList.add("loading");
    btn.innerHTML = '<span class="spinner"></span><span class="btn-text-content"><span class="material-icons-round">send</span> Submit Report</span>';

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key.replace(/\[|\]/g, '_')] = value;
    });

    database.ref("reports").push(data)
        .then(() => {
            btn.disabled = false;
            btn.classList.remove("loading");
            btn.innerHTML = '<span class="material-icons-round">send</span> Submit Report';
            event.target.reset();
            clearPreviews("normal");
            resetProblemSelect("normal_problem");
            showSuccess("Report Submitted!", "Your grievance has been recorded and will be reviewed by the administration shortly.");
        })
        .catch((err) => {
            btn.disabled = false;
            btn.classList.remove("loading");
            btn.innerHTML = '<span class="material-icons-round">send</span> Submit Report';
            alert("Error submitting report: " + err.message);
        });
}

// ==========================================
// SUBMIT — ANONYMOUS REPORT (EXACT LOGIC)
// ==========================================

function submitAnonymousReport(event) {
    event.preventDefault();

    const btn = document.getElementById("anonSubmitBtn");
    btn.disabled = true;
    btn.classList.add("loading");
    btn.innerHTML = '<span class="spinner"></span><span class="btn-text-content"><span class="material-icons-round">send</span> Submit Anonymously</span>';

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key.replace(/\[|\]/g, '_')] = value;
    });

    database.ref("anonymous_reports").push(data)
        .then(() => {
            btn.disabled = false;
            btn.classList.remove("loading");
            btn.innerHTML = '<span class="material-icons-round">send</span> Submit Anonymously';
            event.target.reset();
            clearPreviews("anon");
            resetProblemSelect("anon_problem");
            showSuccess("Anonymous Report Submitted!", "Your identity has been protected. The grievance will be reviewed without any personal information.");
        })
        .catch((err) => {
            btn.disabled = false;
            btn.classList.remove("loading");
            btn.innerHTML = '<span class="material-icons-round">send</span> Submit Anonymously';
            alert("Error submitting report: " + err.message);
        });
}

// ==========================================
// HELPERS
// ==========================================

function clearPreviews(prefix) {
  document.getElementById(prefix + "PhotoPreview").innerHTML = "";
  document.getElementById(prefix + "VideoPreview").innerHTML = "";
}

function resetProblemSelect(id) {
  const sel = document.getElementById(id);
  sel.innerHTML = '<option value="">Select problem</option>';
  sel.disabled = true;
}

function showSuccess(title, message) {
  document.getElementById("successTitle").textContent = title;
  document.getElementById("successMessage").textContent = message;
  document.getElementById("successOverlay").classList.add("active");
}

// ==========================================
// TAB SWITCHING
// ==========================================

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      const tabId = "tab-" + btn.dataset.tab;
      const tabEl = document.getElementById(tabId);
      if (tabEl) { void tabEl.offsetWidth; tabEl.classList.add("active"); }
    });
  });
}

// ==========================================
// RESET FORMS ON TAB SWITCH (clear previews)
// ==========================================

function setupFormResets() {
  document.getElementById("normalForm").addEventListener("reset", () => {
    setTimeout(() => { clearPreviews("normal"); resetProblemSelect("normal_problem"); }, 0);
  });
  document.getElementById("anonymousForm").addEventListener("reset", () => {
    setTimeout(() => { clearPreviews("anon"); resetProblemSelect("anon_problem"); }, 0);
  });
}

// ==========================================
// INIT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Firebase
  checkFirebaseConnection();

  // Categories
  populateCategories("normal_category");
  populateCategories("anon_category");

  // Dynamic problem mapping
  handleCategoryChange("normal_category", "normal_problem");
  handleCategoryChange("anon_category", "anon_problem");

  // Upload zones
  setupUploadZone("normalPhotoInput", "normalPhotoPreview", "normalPhotoZone", "photo");
  setupUploadZone("normalVideoInput", "normalVideoPreview", "normalVideoZone", "video");
  setupUploadZone("anonPhotoInput", "anonPhotoPreview", "anonPhotoZone", "photo");
  setupUploadZone("anonVideoInput", "anonVideoPreview", "anonVideoZone", "video");

  // Tabs
  setupTabs();

  // Form resets
  setupFormResets();

  // Success close
  document.getElementById("successClose").addEventListener("click", () => {
    document.getElementById("successOverlay").classList.remove("active");
  });
  document.getElementById("successOverlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) document.getElementById("successOverlay").classList.remove("active");
  });
});
