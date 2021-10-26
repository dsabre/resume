<template>
	<section id="about" class="page-section">
		<h1>{{ $t('about.title') }}</h1>

		<p class="my-4" v-html="$t('about.text').join('<br><br>')"></p>

		<dl class="grid grid-cols-2 gap-3 w-full md:w-1/2 bg-gray-100 py-3">
			<dt class="text-right">{{ $t('about.details.name.label') }}</dt>
			<dd>Daniele</dd>

			<dt class="text-right">{{ $t('about.details.surname.label') }}</dt>
			<dd>Sabre</dd>

			<dt class="text-right">{{ $t('about.details.age.label') }}</dt>
			<dd>{{ age }}</dd>

			<dt class="text-right">{{ $t('about.details.gender.label') }}</dt>
			<dd>{{ $t('about.details.gender.value') }}</dd>

			<dt class="text-right">{{ $t('about.details.nationality.label') }}</dt>
			<dd>{{ $t('about.details.nationality.value') }}</dd>

			<dt class="text-right">{{ $t('about.details.address.label') }}</dt>
			<dd>{{ $t('about.details.address.value') }}</dd>
		</dl>
	</section>
</template>

<script>
export default {
	name: "About",
	computed: {
		age: function () {
			const ageDifMs = Date.now() - 529369200000;
			const ageDate = new Date(ageDifMs);
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		}
	}
}
</script>

<style scoped>

</style>
