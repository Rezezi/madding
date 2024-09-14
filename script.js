// Fungsi untuk menampilkan dan menyembunyikan teks
function toggleText() {
  const textBox = document.querySelector('.text-box');
  const introText = document.querySelectorAll('.intro-text');
  const button = document.querySelector('.reveal-btn');

  if (textBox.classList.contains('hidden')) {
    textBox.classList.remove('hidden');
    button.textContent = "Tutup";
    introText.forEach((text, index) => {
      setTimeout(() => {
        text.classList.add('show-text');
      }, 300 * index);
    });
  } else {
    textBox.classList.add('hidden');
    button.textContent = "Selengkapnya";
    introText.forEach((text) => {
      text.classList.remove('show-text');
    });
  }
}

// Fungsi animasi ketikan untuk "Introvert Itu Keren"
function typeWriter(text, element, delay) {
  let i = 0;
  element.innerHTML = ''; // Hapus teks sebelumnya
  const typingEffect = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingEffect);
    }
  }, delay);
}

// Fungsi animasi fade-in dari atas
function fadeInTop(element) {
  element.style.opacity = 0;
  element.style.transform = "translateY(-50px)";

  setTimeout(() => {
    element.style.transition = "opacity 2s ease, transform 2s ease";
    element.style.opacity = 1;
    element.style.transform = "translateY(0)";
  }, 100); // Beri sedikit delay agar transisi berjalan lancar
}

// Saat halaman dimuat, jalankan animasi ketikan dan efek fade-in dari atas
window.onload = function() {
  const titleElement = document.querySelector('.typewriter h1');
  
  // Jalankan animasi ketikan
  typeWriter("Introvert Itu Keren", titleElement, 100);
  
  // Efek fade-in dari atas setelah ketikan dimulai
  setTimeout(() => {
    fadeInTop(titleElement);
  }, 500); // Delay sesuai dengan efek ketikan
};
