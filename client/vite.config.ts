import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePluginFonts({
			google: {
				families: [
					"Pacifico", // font-family: 'Pacifico', cursive;
					{
						name: "Josefin Sans",
						styles: "wght@200;400;700",
						defer: true,
						// font-family: 'Josefin Sans', sans-serif;
					},
				],
			},
		}),
	],
});
