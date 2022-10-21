import React from 'react';
import "./BackgroundBox.css";

const BackgroundBox = (key, record = "", latest) => {
    let classHolder
    if (key === latest) { classHolder = 'latest' } else { classHolder = 'backgroundBox'}
    return (<div id="backgroundBox" className={classHolder} key={key}
        {...React.useRef("backgroundBox" + key)}>{record}</div>);
};

export default BackgroundBox;