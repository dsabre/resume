import Vue  from 'vue';
import Vuex from 'vuex';
import i18n from '../i18n';

Vue.use(Vuex);

// vars names
const VARNAME_THEME  = 'theme';
const VARNAME_LOCALE = 'locale';

// setting for check if user has a pref color scheme or not
let themeDefault       = 'light';
let themeSwitchEnabled = true;
if (window.matchMedia('(prefers-color-scheme)').media !== 'not all' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeDefault       = 'dark';
    themeSwitchEnabled = false;
}

export default new Vuex.Store({
    state:     {
        theme:              themeSwitchEnabled ? localStorage.getItem(VARNAME_THEME) || themeDefault : themeDefault,
        locale:             localStorage.getItem(VARNAME_LOCALE) || i18n.fallbackLocale,
        themeSwitchEnabled: themeSwitchEnabled,
        sidebarOpen:        false
    },
    mutations: {
        changeTheme(state, theme) {
            // lock function if switch is disabled
            if (!themeSwitchEnabled) {
                return;
            }

            this.state.theme = theme;

            // save locale in local storage
            localStorage.setItem(VARNAME_THEME, theme);
        },
        changeLocale(state, locale) {
            this.state.locale = locale;

            // save locale in local storage
            localStorage.setItem(VARNAME_LOCALE, locale);
        }
    },
    actions:   {
        toggleSidebar() {
            this.state.sidebarOpen = !this.state.sidebarOpen;
        },
        closeSidebar() {
            this.state.sidebarOpen = false;
        },
        openSidebar() {
            this.state.sidebarOpen = true;
        }
    },
    modules:   {}
})
