export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')];

			export const server_loads = [];

			export const dictionary = {
	"/": [2],
	"/diagnosticos/nuevo": [3],
	"/diagnosticos/paciente": [4],
	"/diagnosticos/resultados": [5],
	"/diagnosticos/[id]": [6],
	"/login": [7],
	"/signup": [8]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};