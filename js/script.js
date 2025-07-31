 // Countdown Timer
        function updateCountdown() {
              const weddingDate = new Date('2025-08-03T11:00:00+07:00').getTime(); // Indonesia time
            const now = new Date().getTime();
            const distance = weddingDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

            if (distance < 0) {
                document.getElementById('days').textContent = '00';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
            }
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('visible');
            } else {
                navbar.classList.remove('visible');
            }
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });


        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Welcome message
        setTimeout(() => {
            console.log('💕 Selamat datang di undangan pernikahan Sarah & Ahmad! 💕');
        }, 1000);
      
      
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("rsvp-form");
  const loadingMsg = document.getElementById("loadingMsg");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Cegah reload halaman

    // Tampilkan loading, sembunyikan pesan sukses
    loadingMsg.style.display = "block";
    successMsg.style.display = "none";

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      loadingMsg.style.display = "none";      // Sembunyikan loading
      successMsg.style.display = "block";     // Tampilkan pesan sukses
      alert("✅ Terima kasih! Konfirmasi berhasil dikirim."); // Alert
      form.reset();                           // Kosongkan form
    })
    .catch(error => {
      loadingMsg.style.display = "none";
      alert("❌ Gagal mengirim data. Silakan coba lagi.");
      console.error("Submit error:", error);
    });
  });
});
