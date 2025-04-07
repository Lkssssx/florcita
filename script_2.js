function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const size = Math.random() * 20 + 10;
  const duration = Math.random() * 2 + 3;

  heart.style.setProperty('--size', `${size}px`);
  heart.style.setProperty('--duration', `${duration}s`);


  heart.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 300);
