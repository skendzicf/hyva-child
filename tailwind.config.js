const path = require('path');

module.exports = {
  content: [
    './src/**/*.phtml',
    './src/**/*.html',
    './src/**/*.js',
    './app/design/frontend/Bold/hyva-child/**/*.phtml',
    './vendor/hyva-themes/**/*.phtml',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // --- AlpineJS Plugins ---
    require('./hyva-ui-2.6.1/plugins/alpine-collapse'),
    require('./hyva-ui-2.6.1/plugins/alpine-dialog'),
    require('./hyva-ui-2.6.1/plugins/alpine-snap-slider'),

    // --- Tailwind UI Design Tokens ---
    require('./hyva-ui-2.6.1/plugins/tailwind-v3-design-tokens'),
    require('./hyva-ui-2.6.1/plugins/tailwind-v4'),

    // --- Sticky Header behavior (koristi ga Header C-stacked) ---
    require('./hyva-ui-2.6.1/plugins/sticky-header'),

    // --- (Optional) SplideJS ako koristiš slider komponente ---
    require('./hyva-ui-2.6.1/plugins/splidejs'),
  ],
};
