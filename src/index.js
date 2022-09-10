import { styles } from './styles'
import { render } from './render'
import { loaderStyles } from './loader'
import { settingScreenStyles } from './settingsScreenStyles'

// глобальная переменная для хранения текущей локации
let currentLocationWeatherWidget = null

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



// console.log(ymaps)
// const getMapInit = city => function init() {
//     ymaps.geocode(city, {
//         results: 1
//     }).
//     then(function(res) {
//         const firstGeoObject = res.geoObjects.get(0)
//         const coords = firstGeoObject.geometry.getCoordinates()
//         console.log(firstGeoObject)
//     });
// }
// const init = getMapInit(input.value)
// console.log(init)
// ymaps.ready(init)