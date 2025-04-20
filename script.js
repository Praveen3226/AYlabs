// particles.js config
particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#00ffe1" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffe1",
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
    },
    retina_detect: true,
  });
  
  // Menu toggle
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
  });
  
  // Toast close
  document.querySelector(".toast-close").addEventListener("click", () => {
    document.getElementById("toast").classList.add("hidden");
  });
  