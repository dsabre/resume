<template>
	<section id="about">
		<h1>About Me</h1>

		<p>Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.</p>
		<p>Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.</p>

		<dl class="row">
			<dt class="col-4 col-md-3 text-end">Name</dt>
			<dd class="col-8 col-md-9">Daniele</dd>

			<dt class="col-4 col-md-3 text-end">Surname</dt>
			<dd class="col-8 col-md-9">Sabre</dd>

			<dt class="col-4 col-md-3 text-end">Age</dt>
			<dd class="col-8 col-md-9">{{ age }}</dd>

			<dt class="col-4 col-md-3 text-end">Gender</dt>
			<dd class="col-8 col-md-9">Male</dd>

			<dt class="col-4 col-md-3 text-end">Nationality</dt>
			<dd class="col-8 col-md-9">Italy</dd>

			<dt class="col-4 col-md-3 text-end">Address</dt>
			<dd class="col-8 col-md-9">Turin</dd>
		</dl>
	</section>
</template>

<script lang="ts">
export default {
	name: "About",
	computed: {
		age: function (): number {
			const ageDifMs = Date.now() - 529369200000;
			const ageDate = new Date(ageDifMs);
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		}
	}
}
</script>

<style scoped>

</style>
