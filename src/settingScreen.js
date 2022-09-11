import { localStorageKey } from './index'
import { render, currentLocationGLobalVariable } from './render'
import { locationCard } from './locationCard'


function addLocation(input, locationsDOMElement) {

    if (input.value.trim() === '') return
    const city = input.value.trim()
    fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&lang=en_RU&apikey=%Yandex Maps API key%&geocode=${city}`)
        .then(response => response.json())
        .then(response => {
            const data = response.response.GeoObjectCollection.featureMember[0].GeoObject
            console.log(data)
            const coords = [data.Point.pos.split(' ')[1], data.Point.pos.split(' ')[0]]
            const city = data.name
            const country = data.metaDataProperty.GeocoderMetaData.Address.country_code

            const locations = JSON.parse(localStorage[localStorageKey])
            locations.push({ city, coords, country })
            console.log({ city, coords, country })
            locationCard({ city, coords, country }, locationsDOMElement)
            input.value = ''
            localStorage[localStorageKey] = JSON.stringify(locations)
        })
}




export function settingsScreen(component) {
    const settingScreenDOMElement = component.querySelector('.settings-screen')
    const input = settingScreenDOMElement.querySelector('.weather-widget-input')

    settingScreenDOMElement.style.display = 'flex'


    // отрисовка карточек с локациями
    const locations = JSON.parse(localStorage[localStorageKey])
    const locationsDOMElement = settingScreenDOMElement.querySelector('.locations')


    for (let location of locations) {
        locationCard(location, locationsDOMElement)
    }


    // реализация drug'n'drop для карточек локаций
    locationsDOMElement.addEventListener(`dragstart`, event => {
        const targetClassList = event.explicitOriginalTarget.classList
        const targetMainClass = targetClassList && targetClassList.length > 0 ?
            targetClassList[0] : ''

        if (targetMainClass.indexOf('burger-icon') === -1) {
            event.preventDefault();
            return
        }
        event.target.classList.add(`selected`);
    })




    locationsDOMElement.addEventListener(`dragover`, event => {
        event.preventDefault();

        // перемещаемый элемент
        const moveableCard = locationsDOMElement.querySelector(`.selected`);

        // цель перемещения
        const target = event.target;

        // проверка на то что перемещаемый элемент и конечная цель это не один объект
        // и что конечная цель имеет класс .location-card
        const isMoveable = moveableCard !== target &&
            target.classList.contains(`location-card`);

        // если нет, то выполнение функции прерывается
        if (!isMoveable) {
            return;
        }

        // Находим элемент, перед которым будем вставлять
        const nextCard = (target === moveableCard.nextElementSibling) ?
            target.nextElementSibling :
            target;


        // Вставляем activeElement перед nextElement
        locationsDOMElement.insertBefore(moveableCard, nextCard);
    });


    // удаление класса .selected с перемещённого элемента
    locationsDOMElement.addEventListener(`dragend`, event => {
        const locations = JSON.parse(localStorage[localStorageKey])

        let newLocations = []
        for (let locationCard of locationsDOMElement.children) {
            const locationCardCity = locationCard.querySelector('p').textContent.split(',')[0]
            newLocations.push(locations.find(location => location.city === locationCardCity))
        }
        localStorage[localStorageKey] = JSON.stringify(newLocations)

        event.target.classList.remove(`selected`);
    });




    // обработчик для кнопки добавления локации
    settingScreenDOMElement.querySelector('.add-location-button').addEventListener('click', async() => {
            addLocation(input, locationsDOMElement)
        })
        // обработчик Enter для input(добавление локации)
    input.addEventListener('keydown', event => {
        if (event.keyCode === 13 && input.value.trim() !== '') addLocation(input, locationsDOMElement)
    })



    // обработчик перехода на главный экран
    settingScreenDOMElement.querySelector('.close-icon').addEventListener('click', () => {
        //locationsDOMElement.innerHTMl = ''
        while (locationsDOMElement.firstChild) {
            locationsDOMElement.removeChild(locationsDOMElement.firstChild);
        }
        const firstLocationCity = JSON.parse(localStorage[localStorageKey])[0].city
        settingScreenDOMElement.style.display = 'none'
        if (!localStorage[localStorageKey] || currentLocationGLobalVariable.city !== firstLocationCity) {
            component.innerHTMl = ''
            render(component)
        }

    })

}
