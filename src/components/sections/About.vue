<template>
	<section id="about" class="page-section">
		<h1 class="mb-3 dark:text-gray-100">{{ $t('about.title') }}</h1>

		<p class="mb-3 dark:text-gray-100" v-html="$t('about.text').join('<br><br>')"></p>

		<dl class="grid grid-cols-2 gap-3 w-full md:w-1/2 bg-gray-100 dark:bg-gray-600 py-3 border dark:border-gray-500 shadow">
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
			<div v-for="(item, index) in interests"
				 :key="index"
				 :class="'p-3 text-center shadow-lg rounded sm:rounded-full bg-gradient-to-br ' + item.extraClasses"
				 data-aos="flip-left"
				 data-aos-duration="1000"
				 :data-aos-delay="delay + delay * index"
			>
				<i :class="item.icon + ' fa-2x block'"></i>
				<span>{{ item.label }}</span>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "About",
	data() {
		return {
			delay: 100
		};
	},
	computed: {
		interests: function () {
			return [
				{label: this.$t('about.interests.items.gaming'), extraClasses: 'from-pink-400 to-indigo-500', icon: 'fas fa-headset'},
				{label: this.$t('about.interests.items.coding'), extraClasses: 'from-green-400 to-green-700', icon: 'fas fa-code'},
				{label: this.$t('about.interests.items.photography'), extraClasses: 'from-blue-400 to-blue-700', icon: 'fas fa-camera'},
				{label: this.$t('about.interests.items.anime'), extraClasses: 'from-yellow-300 to-yellow-600', icon: 'fas fa-comments'},
				{label: this.$t('about.interests.items.tvSeries'), extraClasses: 'from-red-400 to-red-700', icon: 'fas fa-tv'},
				{label: this.$t('about.interests.items.films'), extraClasses: 'from-indigo-400 to-indigo-600', icon: 'fas fa-film'}
			];
		},
		age:       function () {
			const ageDifMs = Date.now() - 529369200000;
			const ageDate  = new Date(ageDifMs);
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		}
	}
}
</script>
