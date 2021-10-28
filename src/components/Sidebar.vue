<template>
	<div id="sidebar"
		 v-bind:class="{'closed': closed}"
		 class="left-0 flex flex-col fixed md:statica w-screen md:w-1/4 p-4 min-h-screen md:border-r md:border-gray-300 md:dark:border-gray-600 bg-gray-50 dark:bg-gray-800 z-20"
	>
		<div class="grid grid-cols-2 gap-0">
			<div class="font-1 text-2xl dark:text-gray-100">{{ $t('sidebar.title') }}</div>
			<div class="text-right md:hidden dark:text-gray-100"><i class="fas fa-times cursor-pointer" @click="toggle"></i></div>
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
				<i class="fas fa-sun dark:text-gray-100"></i>
				<input type="checkbox"
					   checked="checked"
					   class="toggle toggle-sm mx-1 -m-1"
					   v-model="dark"
					   @change="setTheme"
				>
				<i class="fas fa-moon dark:text-gray-100"></i>
			</div>
			<div id="language-selector" class="text-right text-gray-500 dark:text-gray-300">
				<a href="#" class="hover:text-black dark:hover:text-gray-100" data-locale="it" @click="setSiteLanguage">ITA</a>
				|
				<a href="#" class="hover:text-black dark:hover:text-gray-100" data-locale="en" @click="setSiteLanguage">ENG</a>
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
			isScrolling: null,
			dark: false
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

		this.dark = this.$parent.$data.theme === 'dark';

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
		setTheme: function () {
			const theme = this.dark ? 'dark' : 'light';

			Cookies.set('theme', theme);

			this.$root.$emit('app-theme', theme);
		}
	}
}
</script>
