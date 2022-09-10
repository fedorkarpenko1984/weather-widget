export const styles = `
.flex-box {
    display: flex;
    align-items: center;
}

.margin-bottom12 {
    margin-bottom: 12px !important;
}

.margin-left6 {
    margin-left: 6px !important;
}

.space-around {
    justify-content:space-around;
}

.space-between {
    justify-content: space-between;
}

.flex-box > * + p {
    margin-left: 5px !important;
}

.weather-widget {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 270px;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 10px;
    box-sizing: border-box;
    transition: all 0.5s;
    background-color: rgb(254, 254, 252);
}

.weather-widget:hover {
    box-shadow: 0px 0px 1px 1px rgb(211, 211, 211);
    transition: all 0.5s;
}

.weather-widget>* { 
    font-family: Roboto;
    font-weight: 600;
    font-size: 14px;
    color: #111111;
}

.weather-widget>p {
    line-height: 100%;
    text-align: center;
}

.weather-widget p {
    margin: 0;
}

.weather-icon-wrapper {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: column;
    flex-direction: row;
}

.weather-widget-settings {
    margin-left: auto;
    cursor: pointer;
}

.weather-icon-wrapper img {
    width: 100%;
    height: 100%;
}

.temperature {
    margin: 0 auto;
    text-align: center;
    font-size: 36px;
    margin: 0 auto;
}
.selected {
    opacity: 0.6;
}
`