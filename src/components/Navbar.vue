<template>
	<nav class="flex md:hidden sticky top-0 px-3 py-2 bg-gray-50 dark:bg-gray-800 z-10">
		<button class="styled rounded-full h-10 w-10 flex items-center justify-center dark:text-gray-100" @click="toggleSidebar">
			<i class="fas fa-bars"></i>
		</button>

		<div class="text-right w-full inline-block table">
			<span class="font-1 dark:text-gray-100 table-cell align-middle">
				{{ appHeight }} - Daniele Sabre
			</span>
		</div>
	</nav>
</template>

<script>
export default {
	name:     "Navbar",
	data(){
		return {
			appHeight: null
		};
	},
	mounted() {
		this.getAppHeight();
		window.addEventListener('resize', this.getAppHeight);
	},
	methods:  {
		toggleSidebar: function () {
			this.$store.dispatch('toggleSidebar');
		},
		getAppHeight:  function () {
			this.appHeight = getComputedStyle(document.documentElement).getPropertyValue('--app-height').trim();
		}
	}
}
</script>
