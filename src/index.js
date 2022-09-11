import { styles } from './styles'
import { render } from './render'
import { loaderStyles } from './loader'
import { settingScreenStyles } from './settingsScreenStyles'


// ключ для local storage
export const localStorageKey = 'weather-widget-local-storage-key'


class WeatherWidget extends HTMLElement {
    constructor() {
        super();
        document.head.insertAdjacentHTML('beforeend', `<link href="http://fonts.cdnfonts.com/css/roboto" rel="stylesheet">`)
        document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`)
        document.head.insertAdjacentHTML('beforeend', `<style>${loaderStyles}</style>`)
        document.head.insertAdjacentHTML('beforeend', `<style>${settingScreenStyles}</style>`)

    }

    async connectedCallback() {
        render(this)
    }
}

// регистрация компонента
window.customElements.define("weather-widget", WeatherWidget);
