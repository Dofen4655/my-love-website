document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    this.blur();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const moon = document.getElementById('moon');
const sun = document.querySelector('.sun');
const caption = document.getElementById('caption');
let hideTimeout;

// показываем с плавным fade + подъёмом
function showCaption(text) {
  clearTimeout(hideTimeout);
  caption.textContent = text;

  // если надпись не видна — запускаем анимацию появления
  if (caption.style.opacity === '0' || caption.style.opacity === '') {
    caption.style.display = 'block';
    caption.style.transition = 'none';
    caption.style.opacity = '0';
    caption.style.transform = 'translateX(-50%) translateY(15px)';

    // включаем переход на следующем кадре
    requestAnimationFrame(() => {
      caption.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      caption.style.opacity = '1';
      caption.style.transform = 'translateX(-50%) translateY(0)';
    });
  } else {
    // если уже видно — просто меняем текст
    caption.textContent = text;
  }
}

// плавно скрываем
function hideCaption() {
  clearTimeout(hideTimeout);
  caption.style.opacity = '0';
  caption.style.transform = 'translateX(-50%) translateY(15px)';
  hideTimeout = setTimeout(() => {
    caption.style.display = 'none';
  }, 400);
}

moon.addEventListener('mouseenter', () => showCaption('Я'));
sun.addEventListener('mouseenter', () => showCaption('Ты'));
moon.addEventListener('mouseleave', hideCaption);
sun.addEventListener('mouseleave', hideCaption);
