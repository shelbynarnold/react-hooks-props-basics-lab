import React from "react";
import user from "../data/user";

function Links(props) {
    return (
        <div>
            <h3>
                Links
            </h3>
            <a href = {props.github}>
                {props.github}
            </a>
            <a href = {props.linkedin}>
                {props.linkedin}
            </a>
    </div>
        
    )
}

export default Links;





// Hint: make sure your <a> tags display the URL of the user's links as their text content so that it matches the demo image above