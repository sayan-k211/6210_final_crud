export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      external: ['@supabase/supabase-js']
    }
  }
});
