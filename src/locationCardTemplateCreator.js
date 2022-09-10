export const locationCardTemplateCreator = (city, country) => {
    return `
    
        <div class="burger-icon-wrapper">
            <div class="burger-icon"></div>
        </div>
        <p>${city}, ${country}</p>
        <svg class="delete-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 468.36 468.36" style="enable-background:new 0 0 468.36 468.36;fill: #333"
            xml:space="preserve">
            <g>
                <g>
                    <path d="M381.048,64.229l-71.396,0.031L309.624,0L158.666,0.064l0.027,64.26l-71.405,0.031l0.024,60.056h293.76L381.048,64.229z
                        M189.274,30.652l89.759-0.04l0.016,33.66l-89.759,0.04L189.274,30.652z"/>
                    <path d="M87.312,468.36h293.76V139.71H87.312V468.36z M303.042,184.588h15.301v238.891h-15.301V184.588z M226.542,184.588h15.3
                        v238.891h-15.3V184.588z M150.042,184.588h15.3v238.891h-15.3V184.588z"/>
                </g>
            </g>
        </svg>
      
    `
}