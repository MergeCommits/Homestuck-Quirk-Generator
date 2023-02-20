import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import eslintPlugin from "@nabla/vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    build: {
        outDir: "build",
    },
    plugins: [react(), svgr(), tsconfigPaths(), eslintPlugin()],
});
