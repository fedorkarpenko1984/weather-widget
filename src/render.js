import { settingsScreen } from './settingScreen'
import { templateCreator } from './templateCreator'
import { localStorageKey } from '.'
import { loaderTemplate } from './loader'

// глобальная переменная для хранения текущей локации
export let currentLocationGLobalVariable = null


const geolocation = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        pos => resolve(pos),
        err => reject(err)
    )
})


const weatherUrlCreator = (latitude, longitude, lang = 'en') => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&units=metric&lon=${longitude}&lang=${lang}&appid=3d70f3c90fb210f3a6d80e0221e4b2fb`
}

// component - экземпляр вебкомпонента, который передаётся из index.js
export function render(component) {

    // loader

    component.innerHTML = loaderTemplate;

    geolocation
        .then(position => {
            // координаты сохраняются в отдельные переменные
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude

            // если в localstorage уже есть сохранённые координаты, то переменные перезаписываются
            if (localStorage[localStorageKey]) {
                const location = JSON.parse(localStorage[localStorageKey])[0]
                latitude = location.coords[0]
                longitude = location.coords[1]
                currentLocationGLobalVariable = location;
            }

            const url = weatherUrlCreator(latitude, longitude)
            return fetch(url)
        })
        .then(result => result.json())
        .then(result => {
            component.innerHTML = templateCreator(result, currentLocationGLobalVariable.city);

            if (!localStorage[localStorageKey]) {
                const locations = [{
                    city: result.name,
                    coords: [result.coord.lat, result.coord.lon],
                    country: result.sys.country
                }]
                localStorage[localStorageKey] = JSON.stringify(locations)
            }


            // кнопка перехода на экран настроек
            const settingsButton = document.querySelector('.weather-widget-settings')
            settingsButton.addEventListener('click', () => settingsScreen(component))
        })
}