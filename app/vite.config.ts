import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineSvelteConfig } from "./svelte.config.js";
import { router } from "sv-router/vite-plugin";

function customPrintUrls(): Plugin {
	return {
		name: "custom-print-urls",
		configureServer(server) {
			server.printUrls = () => {
				console.log(`App URL: http://localhost:${Deno.env.get("APP_PORT")}`);
			};
		},
	};
}

export default defineConfig(({ mode }) => {
	return {
		build: {
			target: "esnext",
		},
		plugins: [
			customPrintUrls(),
			tailwindcss(),
			svelte(defineSvelteConfig("vite.config", { mode })),
			router({
				allLazy: true,
				// Prevents components (files starting with an uppercase letter) to become routes.
				ignore: [/^[A-Z]/u],
			}),
		],
		server: {
			port: 4444,
			strictPort: true,
		},
		publicDir: "static",
		appType: "spa" as const,
	};
});
