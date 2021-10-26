<template>
	<section id="about" class="page-section">
		<h1>{{ $t('about.title') }}</h1>

		<p class="my-4" v-html="$t('about.text').join('<br><br>')"></p>

		<dl class="grid grid-cols-2 gap-3 w-full md:w-1/2 bg-gray-100 py-3 border">
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

		<h2 class="mt-5 mb-1">My Interests</h2>
		<div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
			<div class="p-3 text-center bg-gray-50 ring ring-pink-200 rounded-sm shadow">
				<i class="fas fa-headset fa-2x block"></i>
				<span class="font-2">Gaming</span>
			</div>
			<div class="p-3 text-center bg-gray-50 ring ring-green-200 rounded-sm shadow">
				<i class="fas fa-code fa-2x block"></i>
				<span class="font-2">Coding</span>
			</div>
			<div class="p-3 text-center bg-gray-50 ring ring-blue-200 rounded-sm shadow">
				<i class="fas fa-camera fa-2x block"></i>
				<span class="font-2">Photography</span>
			</div>
			<div class="p-3 text-center bg-gray-50 ring ring-yellow-200 rounded-sm shadow">
				<i class="fas fa-home fa-2x block"></i>
				<span class="font-2">Anime</span>
			</div>
			<div class="p-3 text-center bg-gray-50 ring ring-red-200 rounded-sm shadow">
				<i class="fas fa-tv fa-2x block"></i>
				<span class="font-2">TV series</span>
			</div>
			<div class="p-3 text-center bg-gray-50 ring ring-gray-200 rounded-sm shadow">
				<i class="fas fa-film fa-2x block"></i>
				<span class="font-2">Films</span>
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
