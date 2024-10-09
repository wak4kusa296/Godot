import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// SvelteKitで使用されるプリプロセッサを設定
	preprocess: vitePreprocess(),

	kit: {
		// Renderなどでのデプロイに対応するため、Node.jsアダプターを使用
		adapter: adapter({
			out: 'build', // 出力先を 'build' フォルダに指定
			precompress: false, // 必要に応じて、gzip圧縮などのプリコンプレスを有効にできます
			env: {
				port: process.env.PORT || 3000 // デフォルトでポート3000を使用
			}
		})
	}
};

export default config;
