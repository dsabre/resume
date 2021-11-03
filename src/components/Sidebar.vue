<template>
	<div id="sidebar"
		 ref="sidebar"
		 v-bind:class="{'closed': !open}"
		 class="left-0 top-0 flex flex-col fixed w-screen md:w-1/4 p-4 min-h-screen md:border-r md:border-gray-300 md:dark:border-gray-600 bg-gray-50 dark:bg-gray-800 z-20"
	>
		<div class="grid grid-cols-2 gap-0">
			<div class="font-1 text-2xl dark:text-gray-100">{{ $t('sidebar.title') }}</div>
			<div class="text-right md:hidden dark:text-gray-100">
				<i class="fas fa-times cursor-pointer" @click="closeSidebar"></i></div>
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
					   class="toggle toggle-sm mx-1 -m-1"
					   v-model="dark"
					   @change="toggleTheme"
				>
				<i class="fas fa-moon dark:text-gray-100"></i>
			</div>
			<div class="text-right dark:text-gray-100">
				ENG
				<input type="checkbox"
					   class="toggle toggle-sm mx-1 -m-1"
					   @change="toggleLocale"
					   :checked="locale === 'it'"
				>
				ITA
			</div>
		</div>
	</div>
</template>

<script>
import Swipe from "../classes/Swipe";

export default {
	name:     "Sidebar",
	data:     function () {
		return {
			linkClicked: false,
			linkActive:  '#home',
			isScrolling: null,
			dark:        false
		};
	},
	computed: {
		locale: function () {
			return this.$store.state.locale;
		},
		open:   function () {
			const open = this.$store.state.sidebarOpen;

			if (open) {
				// lock body scroll when sidebar is open
				document.body.style.top      = `-${window.scrollY}px`;
				document.body.style.position = 'fixed';
			} else {
				// restore old position and body styles when sidebar is closed

				// this to avoid smooth scrolling when restoring body previous scroll
				document.documentElement.style.scrollBehavior = 'auto';

				// restore body scroll
				const scrollY                = document.body.style.top;
				document.body.style.position = '';
				document.body.style.top      = '';
				window.scrollTo(0, parseInt(scrollY || '0') * -1);

				// restore scroll behavior
				document.documentElement.style.scrollBehavior = 'smooth';
			}

			return open;
		}
	},
	mounted() {
		this.dark = this.$store.state.theme === 'dark';

		this.initLinkActive();
		this.scrollspy();
		this.swipeToClose();
		this.swipeToOpen();
	},
	methods: {
		swipeToOpen:         function () {
			const swiper = new Swipe(document, 50);
			swiper.onRight(() => {
				this.$store.dispatch('openSidebar');
			});
			swiper.run();
		},
		swipeToClose:        function () {
			const swiper = new Swipe(this.$refs.sidebar, 50);
			swiper.onLeft(() => {
				this.closeSidebar();
			});
			swiper.run();
		},
		closeSidebar:        function () {
			this.$store.dispatch('closeSidebar');
		},
		clickNavLink:        function (event) {
			this.linkClicked = true;

			this.setLinkActive(event.target);

			this.closeSidebar();
		},
		setLinkActive:       function (newActiveLink) {
			const currentActiveLink = document.querySelector('#menu li a.active');

			if (currentActiveLink) {
				currentActiveLink.removeAttribute('aria-current');
				currentActiveLink.classList.remove("active");
			}

			newActiveLink.setAttribute('aria-current', 'page');
			newActiveLink.classList.add('active');
		},
		initLinkActive:      function () {
			// onload check if a section is requested, if so, set the corrispondent link nav active
			if (window.location.hash) {
				const newActiveLink = document.querySelector('#menu li a[href="' + window.location.hash + '"]');
				if (newActiveLink) {
					this.setLinkActive(newActiveLink);
				}
			}
		},
		scrollspy:           function () {
			const section  = document.querySelectorAll("section");
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
		toggleLocale:        function () {
			// get new locale
			const locale = this.$i18n.availableLocales.filter(l => l !== this.$i18n.locale)[0];

			// set locale
			this.$i18n.locale = locale;

			// save locale to vuex
			this.$store.commit('changeLocale', locale);
		},
		toggleTheme:         function () {
			// save theme to vuex
			this.$store.commit('changeTheme', this.dark ? 'dark' : 'light');
		}
	}
}
</script>
