import React from "react";
import './ChainList.css'

function ChainList(props) {
    return(
        <section>
            {props.children}
        </section>
    );
}

export { ChainList };