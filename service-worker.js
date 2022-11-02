self.addEventListener('install', (event) => {
  event.stopImmediatePropagation();
}); 
self.importScripts('https://static.mparticle.com/sdk/js/braze/service-worker-3.5.0.js');
