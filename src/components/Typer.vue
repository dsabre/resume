<template>
	<p id="typer" ref="typer" class="tw-text-4xl tw-h-12 font-2"></p>
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
					html: 'Web <span class="tw-text-blue-500">Developer</span>',
					back: [-4, 120],
					function: 'line',
					pause: 1000
				},
				{
					html: '<span class="tw-text-indigo-500">Designer</span>',
					back: ['all', 100],
					function: 'continue',
					pause: 1000
				},
				{
					html: '<span class="tw-text-yellow-500">Frontend</span> Developer',
					back: ['all', 80],
					function: 'line',
					pause: 1000
				},
				{
					html: '<span class="tw-font-mono tw-bg-black tw-text-green-400">Programmer</span>',
					back: ['all', 100],
					function: 'line',
					pause: 2000
				},
				{
					html: '<span class="tw-text-pink-500">Gamer! <span class="tw-inline-block animate__animated animate__backInDown"><span class="tw-inline-block font-invaders animate__animated animate__tada animate__delay-2s">B</span></span></span>',
					back: ['all', 110],
					function: 'line',
					pause: 3000
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
