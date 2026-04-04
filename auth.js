/* ========================================
   EDU.i — Authentication Module
   Shared across all pages
   ======================================== */

const AUTH_CREDENTIALS = {
  student: {
    username: "student",
    password: "student123",
    role: "student",
    name: "Rohan Sharma",
    info: "CS-A · 3rd Year",
    initials: "RS",
    redirect: "student.html"
  },
  teacher: {
    username: "teacher",
    password: "teacher123",
    role: "teacher",
    name: "Prof. A. Kumar",
    info: "Computer Science Dept.",
    initials: "AK",
    redirect: "teacher.html"
  },
  admin: {
    username: "admin",
    password: "admin123",
    role: "admin",
    name: "Super Admin",
    info: "System Administrator",
    initials: "SA",
    redirect: "admin.html"
  }
};

const AUTH = {
  /** Attempt login with given credentials. Returns { success, role, user, error } */
  login(username, password) {
    const trimUser = (username || "").trim().toLowerCase();
    const trimPass = (password || "").trim();

    for (const key in AUTH_CREDENTIALS) {
      const cred = AUTH_CREDENTIALS[key];
      if (cred.username === trimUser && cred.password === trimPass) {
        const session = {
          role: cred.role,
          name: cred.name,
          info: cred.info,
          initials: cred.initials,
          loggedInAt: new Date().toISOString()
        };
        sessionStorage.setItem("edu_i_session", JSON.stringify(session));
        return { success: true, role: cred.role, user: session, redirect: cred.redirect };
      }
    }
    return { success: false, error: "Invalid username or password" };
  },

  /** Check if a user is currently logged in */
  isLoggedIn() {
    return sessionStorage.getItem("edu_i_session") !== null;
  },

  /** Get the current session data */
  getSession() {
    const raw = sessionStorage.getItem("edu_i_session");
    return raw ? JSON.parse(raw) : null;
  },

  /** Log out and redirect to login page */
  logout() {
    sessionStorage.removeItem("edu_i_session");
    window.location.href = "login.html";
  },

  /**
   * Guard a page — call on dashboard pages.
   * If not logged in or wrong role, redirects to login.
   * @param {string} requiredRole — "student" | "teacher" | "admin"
   */
  guard(requiredRole) {
    const session = this.getSession();
    if (!session || session.role !== requiredRole) {
      window.location.href = "login.html";
      return null;
    }
    return session;
  }
};
