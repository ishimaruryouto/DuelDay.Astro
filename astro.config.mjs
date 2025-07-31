
// import { defineConfig } from "astro/config";
// import react from "@astrojs/react";


// import { defineConfig } from 'astro/config';
// export default defineConfig({
//     output: 'server',
// });

import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
    output: "server",
    adapter: vercel(),
});