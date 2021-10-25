<template>
	<section id="about">
		<h1>{{ $t('about.title') }}</h1>

		<p class="tw-my-4" v-html="$t('about.text').join('<br><br>')"></p>

		<dl class="tw-grid tw-grid-cols-2 tw-gap-3 tw-w-full md:tw-w-1/2 tw-bg-gray-100 tw-py-3">
			<dt class="tw-text-right">{{ $t('about.details.name.label') }}</dt>
			<dd>Daniele</dd>

			<dt class="tw-text-right">{{ $t('about.details.surname.label') }}</dt>
			<dd>Sabre</dd>

			<dt class="tw-text-right">{{ $t('about.details.age.label') }}</dt>
			<dd>{{ age }}</dd>

			<dt class="tw-text-right">{{ $t('about.details.gender.label') }}</dt>
			<dd>{{ $t('about.details.gender.value') }}</dd>

			<dt class="tw-text-right">{{ $t('about.details.nationality.label') }}</dt>
			<dd>{{ $t('about.details.nationality.value') }}</dd>

			<dt class="tw-text-right">{{ $t('about.details.address.label') }}</dt>
			<dd>{{ $t('about.details.address.value') }}</dd>
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
