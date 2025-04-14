const form = document.getElementById('resumeForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const resume = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    skills: document.getElementById('skills').value,
    description: document.getElementById('description').value
  };

  let resumes = JSON.parse(localStorage.getItem('resumes')) || [];
  resumes.push(resume);
  localStorage.setItem('resumes', JSON.stringify(resumes));

  alert('رزومه با موفقیت ثبت شد!');
  form.reset();
});
