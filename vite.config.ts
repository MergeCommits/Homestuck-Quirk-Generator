import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import eslintPlugin from "@nabla/vite-plugin-eslint";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    build: {
        outDir: "build",
    },
    plugins: [react(), svgr(), tsconfigPaths(), eslintPlugin()]
});