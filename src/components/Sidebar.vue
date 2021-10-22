<template>
	<div id="sidebar"
		 class="d-flex flex-column flex-shrink-0 p-3 min-vh-100 border-end"
		 v-bind:class="{'closed': closed}"
	>
		<div class="row">
			<div class="col-10 col-md-12 font-1 fs-4 text-uppercase">
				Menù
			</div>
			<div class="col-2 text-end d-block d-md-none">
				<i class="fas fa-times cursor-pointer" @click="toggle"></i>
			</div>
		</div>

		<hr>

		<ul id="menu" class="nav nav-pills flex-column mb-auto">
			<li v-for="n in 6" :key="n" class="nav-item mb-1">
				<a href="#"
				   class="nav-link text-end text-uppercase border-bottom border-2 rounded-0 fs-5 font-1"
				   @click="setLinkActive"
				>
					Link {{ n }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
export default {
	name: "Sidebar",
	data: function (): unknown {
		return {
			closed: true
		};
	},
	mounted(): void {
		this.$root.$on('sidebar-toggle', this.toggle);
	},
	methods: {
		toggle: function (): void {
			this.closed = !this.closed;
		},
		setLinkActive: function (event: PointerEvent): void {
			try {
				document.querySelector('#menu li a.active').classList.remove("active");
			} catch (err) {
				//
			}

			event.target.classList.add('active');
		}
	}
}
</script>

<style scoped lang="scss">

</style>
