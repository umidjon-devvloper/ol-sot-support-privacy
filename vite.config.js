import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const page = (path) => fileURLToPath(new URL(path, import.meta.url));

// Ko'p sahifali (MPA) sayt: har bir HTML alohida entry.
// Build natijasida URL'lar: /, /support/, /privacy/
export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: page('./index.html'),
        support: page('./support/index.html'),
        privacy: page('./privacy/index.html'),
        deleteAccount: page('./delete-account/index.html'),
      },
    },
  },
});
