### Структура проекта
****
**index.js**
Точка входа в приложение. В этом файле описан и зарегестрирован веб-компонент weather-widget. В конструкторе подключаются необходимые CSS-стили и шрифты. В методе connectedCallback вызывается функция render, в которую передаётся экземпляр этого веб-компонента.

**render.js**
Функция render пределяет местонахождения пользователя по Geolocation API(если в local storage нет сохраннных локаций). По координатам с помойщью сервиса *https://openweathermap.org* получает метеоданные и с далее с, используя функцию templateCreator, добавляет шаблон разметки с данными в веб-компонент.

**settingsScreen.js**
Вспомогательная функция addLocation добавляет новую локацию в список локаций с помощью Yandex Maps API и карточку локации в список на экране настроек. В основной функции settingsScreen отрисовываются карточки локации по данным из local storage. Так же в функции описана вся необходимая логика для перетаскивания карточек локаций и обработчики для кнопки перехода на главный экран и кнопки добавления карточки локации в список.

**locationCard.js**
Отрисовывает карточку локации. Функция принимает данные локации и контейнер для отрисовки.

**templateCreator.js**
Функция templateCreator принимает метеоданные и название города, вставляет их в html-шаблон и возвращает html-разметку веб-компонента(кроме карточек и загрузчика)

**locationCardTemplateCreator.js**
Функция locationCardTemplateCreator принимает данные локации, вставляет их в html-шаблон и возвращает HTML-разметку карточки локации. Шаблон карточки локации реализован отдельным модулем для более удобного использования при динамическом добавлении карточек локаций

**styles.js**
CSS стили для главного экрана, вынесенные в строковую константу

**settingsScreenStyles.js**
CSS стили для экрана настроек, вынесенные в строковую константу(включая стили карточки локации)

**loader.js**
Экспортирует объект с HTML-шаблоном и CSS-стилями для загрузчика
