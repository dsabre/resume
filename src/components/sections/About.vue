<template>
	<section id="about" class="page-section">
		<h1 class="mb-3 dark:text-gray-100">{{ $t('about.title') }}</h1>

		<p class="mb-3 dark:text-gray-100" v-html="$t('about.text').join('<br><br>')"></p>

		<dl class="grid grid-cols-2 gap-3 w-full md:w-1/2 bg-gray-100 dark:bg-gray-600 py-3 border dark:border-gray-500">
			<dt class="text-right dark:text-gray-100">{{ $t('about.details.name.label') }}</dt>
			<dd class="dark:text-gray-100">Daniele</dd>

			<dt class="text-right dark:text-gray-100">{{ $t('about.details.surname.label') }}</dt>
			<dd class="dark:text-gray-100">Sabre</dd>

			<dt class="text-right dark:text-gray-100">{{ $t('about.details.age.label') }}</dt>
			<dd class="dark:text-gray-100">{{ age }}</dd>

			<dt class="text-right dark:text-gray-100">{{ $t('about.details.gender.label') }}</dt>
			<dd class="dark:text-gray-100">{{ $t('about.details.gender.value') }}</dd>

			<dt class="text-right dark:text-gray-100">{{ $t('about.details.nationality.label') }}</dt>
			<dd class="dark:text-gray-100">{{ $t('about.details.nationality.value') }}</dd>

			<dt class="text-right dark:text-gray-100">{{ $t('about.details.address.label') }}</dt>
			<dd class="dark:text-gray-100">{{ $t('about.details.address.value') }}</dd>
		</dl>

		<h2 class="mt-5 mb-1 dark:text-gray-100">{{ $t('about.interests.title') }}</h2>
		<div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
			<div class="p-3 text-center bg-gray-50 ring ring-pink-200 shadow">
				<i class="fas fa-headset fa-2x block"></i>
				<span>{{ $t('about.interests.items.gaming') }}</span>
			</div>
			<div class="p-3 text-center bg-gray-50 ring ring-green-200 shadow">
				<i class="fas fa-code fa-2x block"></i>
				<span>{{ $t('about.interests.items.coding') }}</span>
			</div>
			<div class="p-3 text-center bg-gray-50 ring ring-blue-200 shadow">
				<i class="fas fa-camera fa-2x block"></i>
				<span>{{ $t('about.interests.items.photography') }}</span>
			</div>
			<div class="p-3 text-center bg-gray-50 ring ring-yellow-200 shadow">
				<i class="fas fa-home fa-2x block"></i>
				<span>{{ $t('about.interests.items.anime') }}</span>
			</div>
			<div class="p-3 text-center bg-gray-50 ring ring-red-200 shadow">
				<i class="fas fa-tv fa-2x block"></i>
				<span>{{ $t('about.interests.items.tvSeries') }}</span>
			</div>
			<div class="p-3 text-center bg-gray-50 ring ring-gray-200 shadow">
				<i class="fas fa-film fa-2x block"></i>
				<span>{{ $t('about.interests.items.films') }}</span>
			</div>
		</div>
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
