self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

// const cacheName = 'js13kPWA-v1';
// const appShellFiles = [
// '.',
// './script.js',
// './script1.js',
// './style.css',
// './style.js',
// ''
// ];

self.addEventListener('fetch', (e) => {
    // console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});