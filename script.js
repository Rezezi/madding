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
  