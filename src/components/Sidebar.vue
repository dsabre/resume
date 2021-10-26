<template>
	<div id="sidebar"
		 v-bind:class="{'closed': closed}"
		 class="left-0 flex flex-col fixed md:statica w-screen md:w-1/4 p-4 min-h-screen md:border-r md:border-gray-300 bg-gray-50 dark:bg-gray-800 z-10"
	>
		<div class="grid grid-cols-2 gap-0">
			<div class="font-1 uppercase text-2xl">{{ $t('sidebar.title') }}</div>
			<div class="text-right md:hidden"><i class="fas fa-times cursor-pointer" @click="toggle"></i></div>
		</div>

		<ul id="menu" class="mb-auto">
			<li class="mb-1">
				<a href="#home"
				   @click="clickNavLink"
				   v-bind:class="{'active': linkActive === '#home'}"
				   :aria-current="linkActive === '#home' ? 'page' : ''"
				>
					{{ $t('sidebar.home') }}
				</a>
			</li>
			<li class="mb-1">
				<a href="#about"
				   @click="clickNavLink"
				   v-bind:class="{'active': linkActive === '#about'}"
				   :aria-current="linkActive === '#about' ? 'page' : ''"
				>
					{{ $t('sidebar.about') }}
				</a>
			</li>
			<li class="mb-1">
				<a href="#resume"
				   @click="clickNavLink"
				   v-bind:class="{'active': linkActive === '#resume'}"
				   :aria-current="linkActive === '#resume' ? 'page' : ''"
				>
					{{ $t('sidebar.resume') }}
				</a>
			</li>
			<li class="mb-1">
				<a href="#skills"
				   @click="clickNavLink"
				   v-bind:class="{'active': linkActive === '#skills'}"
				   :aria-current="linkActive === '#skills' ? 'page' : ''"
				>
					{{ $t('sidebar.skills') }}
				</a>
			</li>
			<li class="mb-1">
				<a href="#contact"
				   @click="clickNavLink"
				   v-bind:class="{'active': linkActive === '#contact'}"
				   :aria-current="linkActive === '#contact' ? 'page' : ''"
				>
					{{ $t('sidebar.contact') }}
				</a>
			</li>
		</ul>

		<div class="grid grid-cols-2 gap-0">
			<div>
				<button class="rounded-full h-8 w-8 items-center justify-center text-gray-300 hover:text-gray-500 hover:bg-gray-300"
						v-bind:class="{'hidden': theme === 'light'}">
					<i class="fas fa-sun" data-theme="light" @click="setTheme"></i>
				</button>

				<button class="rounded-full h-8 w-8 items-center justify-center text-gray-500 hover:bg-gray-300"
						v-bind:class="{'hidden': theme === 'dark'}"
				>
					<i class="fas fa-moon" data-theme="dark" @click="setTheme"></i>
				</button>
			</div>
			<div id="language-selector" class="text-right text-gray-500 dark:text-gray-300">
				<a href="#" class="hover:text-black dark:hover:text-white" data-locale="it" @click="setSiteLanguage">ITA</a>
				|
				<a href="#" class="hover:text-black dark:hover:text-white" data-locale="en" @click="setSiteLanguage">ENG</a>
			</div>
		</div>
	</div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
	name: "Sidebar",
	data: function () {
		return {
			closed: true,
			linkClicked: false,
			linkActive: '#home',
			isScrolling: null
		};
	},
	computed: {
		theme: function () {
			return this.$parent.$data.theme;
		}
	},
	mounted() {
		this.$root.$on('sidebar-toggle', this.toggle);
		this.$root.$on('sidebar-locale', this.setLocale);

		this.initLinkActive();
		this.scrollspy();
	},
	methods: {
		toggle: function () {
			this.closed = !this.closed;
		},
		close: function () {
			this.closed = true;
		},
		clickNavLink: function (event) {
			this.linkClicked = true;

			this.setLinkActive(event.target);

			this.close();
		},
		setLinkActive: function (newActiveLink) {
			const currentActiveLink = document.querySelector('#menu li a.active');

			if (currentActiveLink) {
				currentActiveLink.removeAttribute('aria-current');
				currentActiveLink.classList.remove("active");
			}

			newActiveLink.setAttribute('aria-current', 'page');
			newActiveLink.classList.add('active');
		},
		initLinkActive: function () {
			// onload check if a section is requested, if so, set the corrispondent link nav active
			if (window.location.hash) {
				const newActiveLink = document.querySelector('#menu li a[href="' + window.location.hash + '"]');
				if (newActiveLink) {
					this.setLinkActive(newActiveLink);
				}
			}
		},
		scrollspy: function () {
			const section = document.querySelectorAll("section");
			const sections = {};

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
		setLinkClickedFalse: function () {
			this.linkClicked = false;
		},
		setSiteLanguage: function (event) {
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
		setLinkLocaleActive: function (newActiveLink) {
			const currentActiveLink = document.querySelector('[data-locale].active');
			if (currentActiveLink) {
				currentActiveLink.removeAttribute('aria-current');
				currentActiveLink.classList.remove("active");
			}

			newActiveLink.setAttribute('aria-current', 'page');
			newActiveLink.classList.add('active');
		},
		setLocale: function (locale) {
			const newActiveLink = document.querySelector('[data-locale="' + locale + '"]');

			if (newActiveLink) {
				this.setLinkLocaleActive(newActiveLink);
			}
		},
		setTheme: function (event) {
			if (!(event.target instanceof HTMLElement)) {
				return;
			}

			const theme = event.target.dataset.theme || 'light';

			Cookies.set('theme', theme);

			this.$root.$emit('app-theme', theme);
		}
	}
}
</script>
