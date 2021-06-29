import classes from './map.module.scss'
import React from "react";

function Map() {
    return <div className={classes.map}>
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae88b77e269b98d1b23339d6b105f14fb363c3ae0cbe3ac3bbac021780ae8e3af&amp;source=constructor"
            width="100%" height="320" frameBorder="0"></iframe>
    </div>
}

export default Map