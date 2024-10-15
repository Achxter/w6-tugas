export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@picocss/pico/css/pico.min.css',
  ],
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; img-src 'self' data:; script-src 'self'; style-src 'self' 'unsafe-inline';",
      'X-Content-Type-Options': 'nosniff', // Include this if not already done
      'X-Frame-Options': 'DENY', // Include this if not already done
      'X-XSS-Protection': '1; mode=block', // Include this if not already done
      'Referrer-Policy': 'no-referrer', // Include this if not already done
    },
  },
})
