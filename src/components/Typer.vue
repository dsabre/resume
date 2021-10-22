<template>
	<p id="typer" ref="typer" class="fs-2"></p>
</template>

<script lang="ts">
import typer from 'typer-js';

/**
 * @see https://github.com/qodesmith/typer
 */
export default {
	name: "Typer",
	data(): unknown {
		return {
			options: {
				min: 80,
				max: 250
			},
			phrases: [
				{
					html: 'Web <span style="color: var(--bs-blue);">Developer</span>',
					back: [-4, 120],
					function: 'line',
					pause: 1000
				},
				{
					html: '<span style="color: var(--bs-indigo);">Designer</span>',
					back: ['all', 100],
					function: 'continue',
					pause: 1000
				},
				{
					html: '<span style="color: var(--bs-orange);">Frontend</span> Developer',
					back: ['all', 80],
					function: 'line',
					pause: 1000
				},
				{
					html: '<span class="font-monospace bg-dark" style="color: var(--bs-teal)">Programmer</span>',
					back: ['all', 100],
					function: 'line',
					pause: 1000
				},
				{
					html: '<span style="color: var(--bs-pink);">Gamer!</span>',
					back: ['all', 110],
					function: 'line',
					pause: 1500
				}
			]
		}
	},
	mounted(): void {
		const handler = typer(this.$refs.typer, this.options);

		if (this.phrases.length > 1) {
			this.phrases.forEach(phrase => {
				handler[phrase.function](phrase.html)
					.pause(phrase.pause)
					.back(...phrase.back);
			});

			handler.repeat(Infinity);
		} else {
			handler.line(this.phrases[0].html);
		}
	}
}
</script>

<style scoped>

</style>
