<template>
	<nav class="flex md:hidden sticky top-0 px-3 py-2">
		<button class="rounded-full h-10 w-10 flex items-center justify-center" @click="toggleSidebar">
			<i class="fas fa-bars"></i>
		</button>
	</nav>
</template>

<script>
export default {
	name:    "Navbar",
	methods: {
		toggleSidebar: function () {
			this.$root.$emit('sidebar-toggle');
		}
	}
}
</script>
