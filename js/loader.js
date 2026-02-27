// Centralized script loader for sebastiennight.com
// Manages third-party integrations: Plausible Analytics and Weglot translation.
// Add this file to the <head> of every page — it is the single place to update
// script versions, API keys, and initialization options.
(function () {

    // --- Plausible Analytics (privacy-friendly) ---
    var plausibleScript = document.createElement('script');
    plausibleScript.async = true;
    plausibleScript.src = 'https://plausible.io/js/pa-FRdp9GbpC0zGzWoS0TqRh.js';
    document.head.appendChild(plausibleScript);

    window.plausible = window.plausible || function () {
        (plausible.q = plausible.q || []).push(arguments);
    };
    plausible.init = plausible.init || function (i) { plausible.o = i || {}; };
    plausible.init();

    // --- Weglot (multilingual translation) ---
    var weglotScript = document.createElement('script');
    weglotScript.type = 'text/javascript';
    weglotScript.src = 'https://cdn.weglot.com/weglot.min.js';
    weglotScript.onload = function () {
        Weglot.initialize({
            api_key: 'wg_0cff3a1c7d3169d7b33fdfb61b3077e61'
        });
    };
    document.head.appendChild(weglotScript);

}());
