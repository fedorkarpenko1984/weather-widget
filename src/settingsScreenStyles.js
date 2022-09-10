export const settingScreenStyles = `
.settings-screen {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    background-color: rgb(254, 254, 252);
    z-index: 100

    display: flex;
    flex-direction: column;
    border-radius: 10px;
}

.close-icon {
    font-family: Arial;
    font-size: 30px;
    transform: rotate(45deg);
    cursor: pointer;
}

.weather-widget-input {
    width: 70%;
    outline: none;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 5px;
    font-size: 16px;
}

.locations {
    height: 170px;
    overflow-y: scroll;
}
.location-card {
    margin: 4px auto;
    width: calc(100% - 12px);
    background-color: rgb(228, 228, 228);
    border-radius: 5px;
    height: 30px;
    display: flex;
    align-items: center;
}

.burger-icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    margin: 0px 6px;
    cursor: move;
}

.burger-icon {
    position: relative;
    height: 3px;
    width: 18px;
    background-color: dimgray;
}

.burger-icon::before {
    content: '';
    height: 3px;
    width: 18px;
    background-color: dimgray;
    position: absolute;
    top: -5px;
}

.burger-icon::after {
    content: '';
    height: 3px;
    width: 18px;
    background-color: dimgray;
    position: absolute;
    top: 5px;
}

.delete-icon {
    margin-left: auto;
    margin-right: 6px;
    cursor: pointer;
}
.add-location-button {
    cursor: pointer;
    margin-right: 6px;
}

.selected {
  opacity: 0.6;
}
`