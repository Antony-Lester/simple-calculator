import "./Background.css";
import BackGroundBox from "./BackgroundBox.js";

const Background = ({ value }) => {
    return (<div id="background">
        {value.record.map((record, i) => BackGroundBox(i, record, value.index))}
    </div>);
};

export default Background;