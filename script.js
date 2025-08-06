// Карусель видео-секции
let videoIndex = 0;
const videoImages = [
  {src: "images/video1.jpg", title: "TheWashington - Главный создатель контента Washington Empire"},
  {src: "images/video2.jpg", title: "Majestic RP 2025: 10 Машин из Летнего Кейса"},
  {src: "images/video3.jpg", title: "EMS на Majestic RP в 2025: Стоит ли идти в медицину?"},
  {src: "images/video4.jpg", title: "Свежие обновления!"},
  {src: "images/video5.jpg", title: "Как заработать миллионы в GTA5RP?"},
  {src: "images/video6.jpg", title: "Работа пожарным на Majestic RP"}
];
function updateVideoMain(idx) {
  const img = document.getElementById("video-main-img");
  const title = document.getElementById("video-main-title");
  if (!img) return;
  img.src = videoImages[idx].src;
  title.innerText = videoImages[idx].title;
  document.querySelectorAll('.video-thumb img').forEach((el,i)=>{
    el.classList.toggle('active', i===idx);
  });
}
function carouselLeft() {
  videoIndex = (videoIndex + videoImages.length - 1) % videoImages.length;
  updateVideoMain(videoIndex);
}
function carouselRight() {
  videoIndex = (videoIndex + 1) % videoImages.length;
  updateVideoMain(videoIndex);
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.video-thumb img').forEach((el, i) => {
    el.addEventListener('click', () => {
      videoIndex = i;
      updateVideoMain(videoIndex);
    });
  });
  updateVideoMain(videoIndex);
});

// Модалки
function openModal(type) {
  document.getElementById('modal-' + type).style.display = "flex";
  document.body.style.overflow = "hidden";
}
function closeModal(type) {
  document.getElementById('modal-' + type).style.display = "none";
  document.body.style.overflow = "";
}
document.addEventListener("DOMContentLoaded", () => {
  ['criminal','law','apply'].forEach(type => {
    const form = document.getElementById('form-' + type);
    if (form) {
      form.onsubmit = function(e) {
        e.preventDefault();
        form.querySelectorAll('input, textarea, button').forEach(el => el.disabled = true);
        form.querySelector('.form-success').style.display = 'block';
        setTimeout(() => {
          closeModal(type);
          form.reset();
          form.querySelector('.form-success').style.display = 'none';
          form.querySelectorAll('input, textarea, button').forEach(el => el.disabled = false);
        }, 1700);
      }
    }
  });
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('mousedown', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });
});
