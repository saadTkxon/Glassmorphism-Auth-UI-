
    const loginSection = document.getElementById("loginSection");
    const signupSection = document.getElementById("signupSection");
    const goToSignup = document.getElementById("goToSignup");
    const goToLogin = document.getElementById("goToLogin");
    const loginPassword = document.getElementById("loginPassword");
    const signupPassword = document.getElementById("signupPassword");
    const toggleLoginPassword = document.getElementById("toggleLoginPassword");
    const toggleSignupPassword = document.getElementById("toggleSignupPassword");
    const cursor = document.getElementById("cursor");

    goToSignup.addEventListener("click", () => {
      loginSection.classList.add("SA-hidden");
      signupSection.classList.remove("SA-hidden");
    });

    goToLogin.addEventListener("click", () => {
      signupSection.classList.add("SA-hidden");
      loginSection.classList.remove("SA-hidden");
    });

    toggleLoginPassword.addEventListener("click", () => {
      const type = loginPassword.type === "password" ? "text" : "password";
      loginPassword.type = type;
      toggleLoginPassword.textContent = type === "password" ? "👁️" : "🙈";
    });

    toggleSignupPassword.addEventListener("click", () => {
      const type = signupPassword.type === "password" ? "text" : "password";
      signupPassword.type = type;
      toggleSignupPassword.textContent = type === "password" ? "👁️" : "🙈";
    });

    document.getElementById("loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login Successful! (Demo)");
    });

    document.getElementById("signupForm").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Signup Successful! (Demo)");
    });

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    });