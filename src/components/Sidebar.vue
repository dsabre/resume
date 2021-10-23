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
				<a href="#skills"
				   class="nav-link text-uppercase border-bottom border-2 rounded-0 fs-5 font-1"
				   @click="setLinkActive"
				>
					Skills
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

		<div class="row">
			<div id="theme-selector" class="col ms-2">
				<div class="row w-auto">
					<div class="col-4 w-auto p-0">
						<i class="fas fa-sun me-2"></i>
					</div>
					<div class="col-4 w-auto p-0">
						<div class="d-flex form-check form-switch">
							<input class="form-check-input" type="checkbox" role="switch" disabled>
						</div>
					</div>
					<div class="col-4 w-auto p-0">
						<i class="fas fa-moon"></i>
					</div>
				</div>
			</div>
			<div id="language-selector" class="col text-end">
				<nav style="--bs-breadcrumb-divider: '|';" aria-label="breadcrumb">
					<ol class="breadcrumb m-0 d-inline-flex">
						<li class="breadcrumb-item">
							<a href="#" class="text-decoration-none" @click="setSiteLanguage('it', $event)">ITA</a>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							<a href="#" class="text-decoration-none" @click="setSiteLanguage('en', $event)">ENG</a>
						</li>
					</ol>
				</nav>
			</div>
		</div>
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
		},
		setSiteLanguage: function (language: string, event: PointerEvent): void {
			event.preventDefault();

			// TODO
			console.log(language);
		}
	}
}
</script>

<style scoped lang="scss">

</style>
