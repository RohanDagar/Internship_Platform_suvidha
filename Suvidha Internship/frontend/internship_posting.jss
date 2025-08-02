document.getElementById('internshipForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const company = document.getElementById('company').value;

  alert(`Internship "${title}" at "${company}" has been posted successfully!`);

  this.reset(); // Reset form after submission
});
