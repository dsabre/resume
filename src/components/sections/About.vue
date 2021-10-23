<template>
	<section id="about">
		<h1>{{ $t('about.title') }}</h1>

		<p v-html="$t('about.text').join('<br><br>')"></p>

		<dl class="row">
			<dt class="col-4 col-md-3 text-end">{{ $t('about.details.name.label') }}</dt>
			<dd class="col-8 col-md-9">Daniele</dd>

			<dt class="col-4 col-md-3 text-end">{{ $t('about.details.surname.label') }}</dt>
			<dd class="col-8 col-md-9">Sabre</dd>

			<dt class="col-4 col-md-3 text-end">{{ $t('about.details.age.label') }}</dt>
			<dd class="col-8 col-md-9">{{ age }}</dd>

			<dt class="col-4 col-md-3 text-end">{{ $t('about.details.gender.label') }}</dt>
			<dd class="col-8 col-md-9">{{ $t('about.details.gender.value') }}</dd>

			<dt class="col-4 col-md-3 text-end">{{ $t('about.details.nationality.label') }}</dt>
			<dd class="col-8 col-md-9">{{ $t('about.details.nationality.value') }}</dd>

			<dt class="col-4 col-md-3 text-end">{{ $t('about.details.address.label') }}</dt>
			<dd class="col-8 col-md-9">{{ $t('about.details.address.value') }}</dd>
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
