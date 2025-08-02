document.querySelector('button[type="submit"]').addEventListener('click', function (e) {
    e.preventDefault(); // prevent actual form submission for now
    this.style.animation = 'success-glow 0.5s ease';
    setTimeout(() => {
      this.style.animation = '';
    }, 500);
  });

  document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the form from reloading the page

    // Get input values
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const firstName = form.querySelector('input[placeholder="First Name"]').value;
    const lastName = form.querySelector('input[placeholder="Last Name"]').value;

    // Example: Log values or send them to a server
    console.log({ email, password, firstName, lastName });

    // Optionally: Send to server
    // fetch('/api/signup', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password, firstName, lastName })
    // }).then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   }).catch(err => console.error(err));
  });
});

  