document.querySelector('button').addEventListener('click', function () {
    this.style.animation = 'success-glow 0.5s ease';
    setTimeout(() => {
      this.style.animation = '';
    }, 500);
  });
  const userType = document.querySelector('input[name="userType"]:checked').value;
console.log(userType); // "student", "employee", or "tpo"
const selectedRole = document.querySelector('input[name="userType"]:checked').value;
console.log("Logged in as:", selectedRole);

// Handle Sign Up Redirection
  const signupLink = document.getElementById("signup-link");

  signupLink.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const userType = document.querySelector('input[name="userType"]:checked').value;

    // Redirect to respective signup page
    if (userType === "student") {
      window.location.href = "stu_signup.html";
    } else if (userType === "employee") {
      window.location.href = "employee_registration.html";
    } else if (userType === "tpo") {
      window.location.href = "tpo_Signup.html";
    }
  });
