document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (loginForm) {
    loginForm.addEventListener("submit", async e => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      localStorage.setItem("username", username);
      localStorage.setItem("token", "fake-jwt-for-" + username);
      alert("Logged in!");
      window.location.href = "/";
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", async e => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      localStorage.setItem("username", username);
      localStorage.setItem("token", "fake-jwt-for-" + username);
      alert("Signed up!");
      window.location.href = "/";
    });
  }
});
