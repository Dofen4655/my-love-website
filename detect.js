window.addEventListener("load", () => {

  // если ширина окна меньше 768px — считаем телефоном
  const isMobile = window.innerWidth <= 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // функции загрузки файлов
  function loadCSS(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href + "?v=" + Date.now(); // обходим кэш
    document.head.appendChild(link);
  }

  function loadJS(src) {
    const script = document.createElement("script");
    script.src = src + "?v=" + Date.now();
    document.body.appendChild(script);
  }

  // подключаем версии
  if (isMobile) {
    console.log("📱 Мобильная версия включена");
    loadCSS("styles-mobile.css");
    loadJS("script-mobile.js");
  } else {
    console.log("💻 ПК версия включена");
    loadCSS("styles.css");
    loadJS("script.js");
  }
});
