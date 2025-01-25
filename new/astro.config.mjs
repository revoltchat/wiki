// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Revolt Wiki',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ru: {
					label: 'Русский',
					lang: 'ru-RU'
				}
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
				{
					label: 'API Reference',
					link: 'https://developers.revolt.chat/developers/api/reference.html'
				}
			],
		}),
	],
});
