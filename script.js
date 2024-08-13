// Navbar

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const productsLink = document.getElementById("products-link");
    const dropdown = document.getElementById("dropdown");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    productsLink.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
        if (!productsLink.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });
});

// about
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute("data-width");
                bar.style.width = width;
                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.5
    });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});


// Counting effect script
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // Adjust speed of counting

  counters.forEach(counter => {
    const animate = () => {
      const value = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = value / speed;

      if (count < value) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animate, 1);
      } else {
        counter.innerText = value;
      }
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counter.setAttribute('data-target', counter.innerText);
          counter.innerText = '0';
          animate();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(counter);
  });
});



// Auto slide services
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.service-card');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${slideIndex * -100}%)`;
        slides[i].style.opacity = '0';
    }
    slides[slideIndex].style.opacity = '1';

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}

//hero typewriter

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.typewriter');
  elements.forEach(el => {
    const texts = JSON.parse(el.getAttribute('data-text'));
    let index = 0;
    let charIndex = 0;
    let typing = true;

    function type() {
      const currentText = texts[index];
      const visibleText = currentText.substring(0, charIndex);

      el.textContent = visibleText;

      if (typing) {
        charIndex++;
        if (charIndex === currentText.length) {
          typing = false;
          setTimeout(type, 1000); // Wait before erasing
        } else {
          setTimeout(type, 100); // Typing speed
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          typing = true;
          index = (index + 1) % texts.length;
          setTimeout(type, 500); // Wait before typing the next text
        } else {
          setTimeout(type, 50); // Erasing speed
        }
      }
    }

    type();
  });
});

