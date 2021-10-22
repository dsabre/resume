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
			<li class="nav-item mb-1">
				<a href="#home"
				   class="nav-link text-uppercase border-bottom border-2 rounded-0 fs-5 font-1"
				   @click="setLinkActive"
				>
					Home
				</a>
			</li>
			<li class="nav-item mb-1">
				<a href="#about"
				   class="nav-link text-uppercase border-bottom border-2 rounded-0 fs-5 font-1"
				   @click="setLinkActive"
				>
					About me
				</a>
			</li>
			<li class="nav-item mb-1">
				<a href="#resume"
				   class="nav-link text-uppercase border-bottom border-2 rounded-0 fs-5 font-1"
				   @click="setLinkActive"
				>
					Resume
				</a>
			</li>
			<li class="nav-item mb-1">
				<a href="#contact"
				   class="nav-link text-uppercase border-bottom border-2 rounded-0 fs-5 font-1"
				   @click="setLinkActive"
				>
					Contact
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
		close: function (): void {
			this.closed = true;
		},
		setLinkActive: function (event: PointerEvent): void {
			try {
				document.querySelector('#menu li a.active').classList.remove("active");
			} catch (err) {
				//
			}

			event.target.classList.add('active');

			this.close();
		}
	}
}
</script>

<style scoped lang="scss">

</style>
