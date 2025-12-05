import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/**
 * @param {"vite.config" | "svelte.config"} from
 * @param {{ mode: string }} options
 * @returns {import('@sveltejs/vite-plugin-svelte').SvelteConfig}
 */
export function defineSvelteConfig(from, { mode }) {
	/** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig["vitePlugin"]} */
	const vitePlugin = {
		inspector: mode === "development",
		dynamicCompileOptions({ filename }) {
			if (filename.includes("node_modules")) {
				return { runes: undefined };
			}
			return {};
		},
	};

	return {
		...(from === "vite.config" ? vitePlugin : { vitePlugin }),
		compilerOptions: {
			dev: mode === "development",
			hmr: mode === "development",
			experimental: {
				async: true,
			},
			runes: true,
		},
		preprocess: [
			vitePreprocess({
				style: true,
				script: true,
			}),
		],
	};
}

export default defineSvelteConfig("svelte.config", { mode: "development" });
