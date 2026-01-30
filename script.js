const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

document.addEventListener('DOMContentLoaded', () => {
  const nameText = "Harshini";
  const roleText = "Frontend Developer | Tech Enthusiast";

  function typeWriter(element, text, delay = 100, callback) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    } else {
      element.classList.add('stop-caret'); // Remove caret after typing
      if (callback) callback();
    }
  }
  typing();
}


  const nameElement = document.getElementById('typewriter-name');
  const roleElement = document.getElementById('typewriter-role');
  const downloadBtn = document.querySelector('.dwn-btn');
  const socialIcons = document.querySelectorAll('.social-icons a');
  const downArrow = document.querySelector('.down i');

  // Start typing name
  typeWriter(nameElement, nameText, 150, () => {
    // Then type role
    typeWriter(roleElement, roleText, 50, () => {
      // After typing, fade & scale in button and social icons
      downloadBtn.classList.add('fade-scale-in');
      socialIcons.forEach((icon, index) => {
        setTimeout(() => {
          icon.classList.add('fade-scale-in');
        }, index * 150);
      });
      // Fade in down arrow
      downArrow.classList.add('fade-scale-in');
    });
  });
});


 window.addEventListener("load", () => {
    document.querySelectorAll(".social-icons a").forEach((icon, i) => {
      setTimeout(() => icon.style.opacity = "1", i * 150);
    });
  });