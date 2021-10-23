<template>
	<div id="sidebar"
		 class="d-flex flex-column flex-shrink-0 p-3 min-vh-100 border-end"
		 v-bind:class="{'closed': closed}"
	>
		<div class="row">
			<div class="col-10 col-md-12 font-1 fs-4 text-uppercase">
				{{ $t('sidebar.title') }}
			</div>
			<div class="col-2 text-end d-block d-md-none">
				<i class="fas fa-times cursor-pointer" @click="toggle"></i>
			</div>
		</div>

		<hr>

		<ul id="menu" class="nav nav-pills flex-column mb-auto">
			<li class="nav-item mb-1">
				<a href="#home"
				   class="nav-link text-uppercase border-bottom border-2 rounded-0 fs-5 font-1 active"
				   @click="clickNavLink"
				   aria-current="page"
				>
					{{ $t('sidebar.home') }}
				</a>
			</li>
			<li class="nav-item mb-1">
				<a href="#about"
				   class="nav-link text-uppercase border-bottom border-2 rounded-0 fs-5 font-1"
				   @click="clickNavLink"
				>
					{{ $t('sidebar.about') }}
				</a>
			</li>
			<li class="nav-item mb-1">
				<a href="#resume"
				   class="nav-link text-uppercase border-bottom border-2 rounded-0 fs-5 font-1"
				   @click="clickNavLink"
				>
					{{ $t('sidebar.resume') }}
				</a>
			</li>
			<li class="nav-item mb-1">
				<a href="#skills"
				   class="nav-link text-uppercase border-bottom border-2 rounded-0 fs-5 font-1"
				   @click="clickNavLink"
				>
					{{ $t('sidebar.skills') }}
				</a>
			</li>
			<li class="nav-item mb-1">
				<a href="#contact"
				   class="nav-link text-uppercase border-bottom border-2 rounded-0 fs-5 font-1"
				   @click="clickNavLink"
				>
					{{ $t('sidebar.contact') }}
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
						<li class="breadcrumb-item" data-locale="it">
							<a href="#" class="text-decoration-none" @click="setSiteLanguage('it', $event)">ITA</a>
						</li>
						<li class="breadcrumb-item" data-locale="en">
							<a href="#" class="text-decoration-none" data-locale="en" @click="setSiteLanguage('en', $event)">ENG</a>
						</li>
					</ol>
				</nav>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Cookies from 'js-cookie'

export default {
	name: "Sidebar",
	data: function (): unknown {
		return {
			closed: true,
			linkClicked: false,
			isScrolling: null
		};
	},
	mounted(): void {
		this.$root.$on('sidebar-toggle', this.toggle);
		this.$root.$on('sidebar-locale', this.setLocale);

		this.initLinkActive();
		this.scrollspy();
	},
	methods: {
		toggle: function (): void {
			this.closed = !this.closed;
		},
		close: function (): void {
			this.closed = true;
		},
		clickNavLink: function (event: PointerEvent): void {
			this.linkClicked = true;

			const newActiveLink = event.target as Element;

			this.setLinkActive(newActiveLink);

			this.close();
		},
		setLinkActive: function (newActiveLink: Element): void {
			const currentActiveLink = document.querySelector('#menu li a.active');

			if (currentActiveLink) {
				currentActiveLink.removeAttribute('aria-current');
				currentActiveLink.classList.remove("active");
			}

			newActiveLink.setAttribute('aria-current', 'page');
			newActiveLink.classList.add('active');
		},
		initLinkActive: function (): void {
			// onload check if a section is requested, if so, set the corrispondent link nav active
			if (window.location.hash) {
				const newActiveLink = document.querySelector('#menu li a[href="' + window.location.hash + '"]');
				if (newActiveLink) {
					this.setLinkActive(newActiveLink);
				}
			}
		},
		scrollspy: function (): void {
			const section = document.querySelectorAll("section");
			const sections: Record<string, number> = {};

			for (let i = 0; i < section.length; i++) {
				sections[section[i].id] = section[i].offsetTop;
			}

			const sectionsKeys = Object.keys(sections).reverse();

			window.addEventListener('scroll', () => {
				if (this.linkClicked) {
					if (this.isScrolling) {
						window.clearTimeout(this.isScrolling);
					}
					this.isScrolling = setTimeout(this.setLinkClickedFalse, 66);

					return;
				}

				const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

				for (let i = 0; i < sectionsKeys.length; i++) {
					if (sections[sectionsKeys[i]] > scrollPosition) {
						continue;
					}

					const newActiveLink = document.querySelector('#menu li a:not(.active)[href="#' + sectionsKeys[i] + '"]');
					if (newActiveLink) {
						this.setLinkActive(newActiveLink);
					}

					break;
				}
			});
		},
		setLinkClickedFalse: function (): void {
			this.linkClicked = false;
		},
		setSiteLanguage: function (locale: string, event: PointerEvent): void {
			event.preventDefault();

			this.$i18n.locale = locale;

			this.setLinkLocaleActive(event.target.parentNode);

			Cookies.set('locale', locale);
		},
		setLinkLocaleActive: function (newActiveLink: Element): void{
			const currentActiveLink = document.querySelector('#language-selector li.active');
			if (currentActiveLink) {
				currentActiveLink.removeAttribute('aria-current');
				currentActiveLink.classList.remove("active");
			}

			newActiveLink.setAttribute('aria-current', 'page');
			newActiveLink.classList.add('active');
		},
		setLocale: function (locale: string): void {
			const newActiveLink = document.querySelector('#language-selector li[data-locale="' + locale + '"]');
			this.setLinkLocaleActive(newActiveLink);
		}
	}
}
</script>

<style scoped lang="scss">

</style>
