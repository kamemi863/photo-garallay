document.addEventListener("DOMContentLoaded", () => {
  const targets = document.getElementsByClassName("fade");
  for (let i = targets.length; i--; ) {
    let observer = new IntersectionObserver((entries, observer) => {
      for (let j = entries.length; j--; ) {
        const entry = entries[j];
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
        //} else {
        //entries[j].target.classList.remove("active");
        //}
      }
    });
    observer.observe(targets[i]);
  }
  const backToTopButton = document.getElementById("back-to-top");
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const topTarget = document.getElementById("top-target");
  let topObserver = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
  topObserver.observe(topTarget);
});
