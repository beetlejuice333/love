document.getElementById("envelope").addEventListener("click", function () {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Пути к изображениям сердечек
  const heartImages = [
    "./images/heart3.jpg",
    "./images/heart4.png",
    "./images/heart5.png",
    "./images/heart6.png",
    "./images/heart7.png",
    "./images/heart8.jpg",
    "./images/heart9.jpg",
    // Добавьте пути к вашим изображениям сердечек
  ];

  // Выбор случайного изображения
  const randomImage =
    heartImages[Math.floor(Math.random() * heartImages.length)];
  heart.style.background = `url('${randomImage}') center/cover no-repeat`;

  document.querySelector(".envelope").appendChild(heart);

  const randomOffset = Math.random() > 0.5 ? -1 : 1;
  heart.style.left = `calc(50% + ${randomOffset * Math.random() * 10}%)`;
  heart.style.setProperty(
    "--random-offset",
    `${randomOffset * Math.random() * 50}px`
  );

  heart.addEventListener("animationend", function () {
    heart.remove();
  });
});
