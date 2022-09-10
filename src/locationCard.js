import { locationCardTemplateCreator } from "./locationCardTemplateCreator"
import { localStorageKey } from "."

export function locationCard(location, locationsDOMElement) {

    const newLocationCard = document.createElement('div')
    newLocationCard.classList.add('location-card')

    // чтоб можно было перетаскивать
    newLocationCard.draggable = true

    newLocationCard.insertAdjacentHTML(
        'beforeend',
        locationCardTemplateCreator(location.city, location.country)
    )



    locationsDOMElement.insertAdjacentElement(
        'beforeend',
        newLocationCard
    )

    // обработчик иконки удаления карточки локации
    newLocationCard.querySelector('.delete-icon').addEventListener('click', () => {

        const locations = JSON.parse(localStorage[localStorageKey])
        const newLocatons = locations.filter(l => l.city !== location.city)
        console.log(newLocatons)
        newLocationCard.remove()

        // чистка хранилища, если не осталось локаций
        if (newLocatons.length === 0) {
            localStorage.removeItem(localStorageKey)
        } else {
            localStorage[localStorageKey] = JSON.stringify(newLocatons)
        }
    })



}