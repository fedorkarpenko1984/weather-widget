export const templateCreator = (options, city) => {

    const country = options.sys.country
    const icon = options.weather[0].icon
    const temperature = Math.floor(options.main.temp)
    const feelsLike = Math.floor(options.main.feels_like)
    let description = options.weather[0].description
    description = description.charAt(0).toUpperCase() + description.slice(1)

    const wind = options.wind.speed
    const pressure = options.main.pressure
    const humidity = options.main.humidity
    const visibility = options.visibility

    return `
    <div class="weather-widget">

        <div class="flex-box" style="margin-top: 6px;padding: 0 6px">
            <div class='city-and-country'>${city},${country}</div>
            <?xml version="1.0"?><svg class="weather-widget-settings" fill="#555555" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 9.6679688 2 L 9.1757812 4.5234375 C 8.3550224 4.8338012 7.5961042 5.2674041 6.9296875 5.8144531 L 4.5058594 4.9785156 L 2.1738281 9.0214844 L 4.1132812 10.707031 C 4.0445153 11.128986 4 11.558619 4 12 C 4 12.441381 4.0445153 12.871014 4.1132812 13.292969 L 2.1738281 14.978516 L 4.5058594 19.021484 L 6.9296875 18.185547 C 7.5961042 18.732596 8.3550224 19.166199 9.1757812 19.476562 L 9.6679688 22 L 14.332031 22 L 14.824219 19.476562 C 15.644978 19.166199 16.403896 18.732596 17.070312 18.185547 L 19.494141 19.021484 L 21.826172 14.978516 L 19.886719 13.292969 C 19.955485 12.871014 20 12.441381 20 12 C 20 11.558619 19.955485 11.128986 19.886719 10.707031 L 21.826172 9.0214844 L 19.494141 4.9785156 L 17.070312 5.8144531 C 16.403896 5.2674041 15.644978 4.8338012 14.824219 4.5234375 L 14.332031 2 L 9.6679688 2 z M 12 8 C 14.209 8 16 9.791 16 12 C 16 14.209 14.209 16 12 16 C 9.791 16 8 14.209 8 12 C 8 9.791 9.791 8 12 8 z"/></svg>
        </div>

        <div class="flex-box">
            <div class="weather-icon-wrapper">
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
            </div>
            <div class="temperature">${temperature}°</div>
        </div>

        <div>
            <p style="margin: 0 6px;text-align: center">Feels like ${feelsLike}°. ${description}.</p>
        </div>

        <div class="flex-box space-around">
            <div class="flex-box">
                <svg style="transform: rotate(-125deg) scaleY(0.7);" width="19px" height="20px" viewBox="0 0 19 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                        <g id="24-px-Icons" transform="translate(-219.000000, -122.000000)" stroke="#000000">
                            <g id="ic_send" transform="translate(216.000000, 120.000000)">
                                <g id="send">
                                    <g transform="translate(4.000000, 3.000000)" stroke-width="2">
                                        <polygon id="Path-32" points="0 0 17 9 0 18 5 9"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <p> ${wind} m/s</p> 
            </div>
            <div class="flex-box">
                <svg style="width: 15px;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve">
                    <g>
                        <path style="fill:#222222" d="M13.014,11.002c-1.107,0.008-2.008-0.884-2.016-1.987c-0.009-1.107,0.879-2.007,1.987-2.016
                            c0.166-0.001,0.324,0.023,0.478,0.06c1.156-0.905,2.667-2.085,2.839-2.208c0.298-0.211,0.64-0.236,0.883,0.007
                            c0.24,0.248,0.215,0.623-0.01,0.886c-0.077,0.091-1.295,1.622-2.229,2.798c0.034,0.143,0.056,0.291,0.057,0.444
                            C15.012,10.088,14.122,10.994,13.014,11.002z M0,21c0-0.553,0.448-1,1-1h9v-2.525C6.51,16.236,4,12.91,4,9c0-4.962,4.038-9,9-9
                            c4.963,0,9,4.038,9,9c0,3.91-2.51,7.236-6,8.475V20h9c0.553,0,1,0.447,1,1s-0.447,1-1,1H1C0.448,22,0,21.553,0,21z M13,15
                            c3.309,0,6-2.691,6-6s-2.691-6-6-6S7,5.691,7,9S9.691,15,13,15z M25,24H1c-0.552,0-1,0.447-1,1s0.448,1,1,1h24c0.553,0,1-0.447,1-1
                            S25.553,24,25,24z"/>
                    </g>
                </svg>
                <p> ${pressure} hPa</p>
            </div>
        </div>

        <p>Humidity: ${humidity}%</p>
        <p class="margin-bottom12">Visibility: ${visibility}km</p>


        
        <div class="settings-screen space-between">
            <div>
                <div class="flex-box space-between" style="padding: 0 6px">
                    <p>Settings</p>
                    <div class="close-icon">+</div>
                </div>
                <div class="locations"></div>
            </div>

            <div class="add-location margin-bottom12">
                <p class="margin-left6">Add location:</p>
                <div class="flex-box space-between">
                    <input type="text" class="weather-widget-input margin-left6">
                    <svg class="add-location-button" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="ic_fluent_arrow_enter_24_filled" fill="#212121" fill-rule="nonzero">
                                <path d="M21,4 C21.5128358,4 21.9355072,4.38604019 21.9932723,4.88337887 L22,5 L22,11.5 C22,13.3685634 20.5357224,14.8951264 18.6920352,14.9948211 L18.5,15 L5.415,15 L8.70710678,18.2928932 C9.06759074,18.6533772 9.09532028,19.2206082 8.79029539,19.6128994 L8.70710678,19.7071068 C8.34662282,20.0675907 7.77939176,20.0953203 7.38710056,19.7902954 L7.29289322,19.7071068 L2.29289322,14.7071068 C2.25749917,14.6717127 2.22531295,14.6343256 2.19633458,14.5953066 L2.12467117,14.4840621 L2.12467117,14.4840621 L2.07122549,14.371336 L2.07122549,14.371336 L2.03584514,14.265993 L2.03584514,14.265993 L2.0110178,14.1484669 L2.0110178,14.1484669 L2.00397748,14.0898018 L2.00397748,14.0898018 L2,14 L2.00278786,13.9247615 L2.00278786,13.9247615 L2.02024007,13.7992742 L2.02024007,13.7992742 L2.04973809,13.6878575 L2.04973809,13.6878575 L2.09367336,13.5767785 L2.09367336,13.5767785 L2.14599545,13.4792912 L2.14599545,13.4792912 L2.20970461,13.3871006 L2.20970461,13.3871006 L2.29289322,13.2928932 L2.29289322,13.2928932 L7.29289322,8.29289322 C7.68341751,7.90236893 8.31658249,7.90236893 8.70710678,8.29289322 C9.06759074,8.65337718 9.09532028,9.22060824 8.79029539,9.61289944 L8.70710678,9.70710678 L5.415,13 L18.5,13 C19.2796961,13 19.9204487,12.4051119 19.9931334,11.64446 L20,11.5 L20,5 C20,4.44771525 20.4477153,4 21,4 Z" id="🎨-Color"></path>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>

    </div>
    
    `
}