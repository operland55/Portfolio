import * as path from "path";
import { defineConfig } from "vite";
import alias from "@rollup/plugin-alias";
import react from "@vitejs/plugin-react";

const projectRootDir = path.resolve(__dirname);
const resolve = (p: string) => path.resolve(projectRootDir, p);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		alias({
			entries: [
				{
					find: "@",
					replacement: resolve("src"),
				},
			],
		}),
		react(),
	],
});
