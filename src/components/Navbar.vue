<template>
	<nav id="navbar" class="d-flex d-md-none navbar sticky-top">
		<div class="container-fluid">
			<!--			<span class="navbar-brand mb-0 h1">Navbar</span>-->
			<button id="menu-hamburger" class="btn rounded-circle" @click="toggleSidebar">
				<i class="fas fa-bars"></i>
			</button>
		</div>
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
