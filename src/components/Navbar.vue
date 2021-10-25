<template>
	<nav class="tw-flex md:tw-hidden tw-sticky tw-top-0 tw-px-3 tw-py-2">
		<button class="tw-rounded-full tw-h-10 tw-w-10 tw-flex tw-items-center tw-justify-center" @click="toggleSidebar">
			<i class="fas fa-bars"></i>
		</button>
	</nav>
</template>

<script lang="ts">
export default {
	name:    "Navbar",
	methods: {
		toggleSidebar: function (): void {
			this.$root.$emit('sidebar-toggle');
		}
	}
}
</script>

<style scoped>

</style>
