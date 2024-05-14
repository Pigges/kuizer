import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), pageInsight()]
});