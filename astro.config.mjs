import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/** GitHub Pages 等项目页部署时设置环境变量，例如 ASTRO_BASE=/仓库名/ */
function astroBase() {
  const raw = process.env.ASTRO_BASE?.trim();
  if (!raw || raw === '/') return '/';
  const withSlash = raw.startsWith('/') ? raw : `/${raw}`;
  return withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
}

export default defineConfig({
  integrations: [tailwind({ configFile: './tailwind.config.cjs', applyBaseStyles: false })],
  output: 'static',
  base: astroBase(),
});
