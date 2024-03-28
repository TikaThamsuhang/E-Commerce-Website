// JavaScript file for navigation functionality and smooth scrolling

// Smooth Scroll
const navBar = document.querySelector(".navigation");
const scrollLinks = document.querySelectorAll(".scroll-link");

Array.from(scrollLinks).forEach(link => {
  link.addEventListener("click", e => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const fixNav = navBar.classList.contains("fix__nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: "0",
      top: position,
    });

    // Close menu
    menu.style.left = "-40rem";
    document.body.classList.remove("active");
  });
});

// FixNav
window.addEventListener("scroll", () => {
  const navHeight = navBar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }
});
