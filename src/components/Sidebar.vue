<template>
	<div id="sidebar"
		 v-bind:class="{'closed': closed}"
		 class="tw-left-0 tw-flex tw-flex-col tw-fixed md:tw-statica tw-w-screen md:tw-w-1/4 tw-p-4 tw-min-h-screen md:tw-border-r md:tw-border-gray-300 tw-bg-gray-50 tw-z-10"
	>
		<div class="tw-grid tw-grid-cols-2 tw-gap-4">
			<div class="font-1 tw-uppercase tw-text-2xl">{{ $t('sidebar.title') }}</div>
			<div class="tw-text-right md:tw-hidden"><i class="fas fa-times cursor-pointer" @click="toggle"></i></div>
		</div>

		<ul id="menu" class="tw-mb-auto">
			<li class="tw-mb-1">
				<a href="#home"
				   @click="clickNavLink"
				   v-bind:class="{'active': linkActive === '#home'}"
				   :aria-current="linkActive === '#home' ? 'page' : ''"
				>
					{{ $t('sidebar.home') }}
				</a>
			</li>
			<li class="tw-mb-1">
				<a href="#about"
				   @click="clickNavLink"
				   v-bind:class="{'active': linkActive === '#about'}"
				   :aria-current="linkActive === '#about' ? 'page' : ''"
				>
					{{ $t('sidebar.about') }}
				</a>
			</li>
			<li class="tw-mb-1">
				<a href="#resume"
				   @click="clickNavLink"
				   v-bind:class="{'active': linkActive === '#resume'}"
				   :aria-current="linkActive === '#resume' ? 'page' : ''"
				>
					{{ $t('sidebar.resume') }}
				</a>
			</li>
			<li class="tw-mb-1">
				<a href="#skills"
				   @click="clickNavLink"
				   v-bind:class="{'active': linkActive === '#skills'}"
				   :aria-current="linkActive === '#skills' ? 'page' : ''"
				>
					{{ $t('sidebar.skills') }}
				</a>
			</li>
			<li class="tw-mb-1">
				<a href="#contact"
				   @click="clickNavLink"
				   v-bind:class="{'active': linkActive === '#contact'}"
				   :aria-current="linkActive === '#contact' ? 'page' : ''"
				>
					{{ $t('sidebar.contact') }}
				</a>
			</li>
		</ul>

		<div class="tw-grid tw-grid-cols-2 tw-gap-4">
			<div>
				<i class="fas fa-sun tw-text-gray-500"></i>
				<i class="fas fa-moon tw-text-gray-500"></i>
			</div>
			<div id="language-selector" class="tw-text-right tw-text-gray-500">
				<a href="#" class="hover:tw-text-black" data-locale="it" @click="setSiteLanguage">ITA</a>
				|
				<a href="#" class="hover:tw-text-black" data-locale="en" @click="setSiteLanguage">ENG</a>
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
			linkActive: '#home',
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
		setSiteLanguage: function (event: PointerEvent): void {
			event.preventDefault();

			const target = event.target;

			if (!target) {
				return;
			}

			const locale = target.dataset.locale.trim();

			this.$i18n.locale = locale;

			this.setLinkLocaleActive(target);

			Cookies.set('locale', locale);
		},
		setLinkLocaleActive: function (newActiveLink: Element | EventTarget): void {
			const currentActiveLink = document.querySelector('[data-locale].active');
			if (currentActiveLink) {
				currentActiveLink.removeAttribute('aria-current');
				currentActiveLink.classList.remove("active");
			}

			newActiveLink.setAttribute('aria-current', 'page');
			newActiveLink.classList.add('active');
		},
		setLocale: function (locale: string): void {
			const newActiveLink = document.querySelector('[data-locale="' + locale + '"]');

			if (newActiveLink) {
				this.setLinkLocaleActive(newActiveLink);
			}
		}
	}
}
</script>

<style scoped lang="scss">
</style>
