const loaderStyles = `

.ww-loader {
    position: relative;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 270px;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 10px;
    box-sizing: border-box;
    background-color: rgb(254, 254, 252);
}

.ww-loader .spining {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: conic-gradient(white, black, white, black, white);
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    animation-duration: 2s;
    animation-name: spin;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.ww-loader .spining .central-circle {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
        width: 50px;
        height: 50px;
    }
    50% {
        width: 40px;
        height: 40px;
    }
    100% {
        transform: rotate(360deg);
        width: 50px;
        height: 50px;
    }
}
`

const loaderTemplate = `
    <div class="ww-loader">
        <div class="spining">
            <div class="central-circle"></div>
        </div>
    </div>
`

export { loaderStyles, loaderTemplate }