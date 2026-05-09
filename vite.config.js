var _a;
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Update `base` to match your GitHub repo name (e.g. '/portfolio/').
// Set to '/' if you use a custom domain or deploy to <user>.github.io.
export default defineConfig({
    plugins: [react()],
    base: (_a = process.env.VITE_BASE_PATH) !== null && _a !== void 0 ? _a : '/portfolio/',
});
