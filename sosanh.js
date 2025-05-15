
const scrollTopBtn = document.getElementById('scrollTopBtn');
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // Cuộn xuống 300px thì hiện nút
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });