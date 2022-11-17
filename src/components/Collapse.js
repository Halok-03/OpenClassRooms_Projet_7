import Chevron from '../assets/images/chevron.svg'
import React, { useState, useRef, useEffect } from 'react';

const Collapse = (props) => {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    }

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const typeOfDescription = () => {
        if (typeof props.description === 'object') {
            return <ul>
                {props.description.map((e, index) => (
                    <li
                        key={index}
                        aria-hidden={toggle ? "true" : "false"}
                        className="description-item"
                    >{e}</li>
                ))}
            </ul>
        } else {
            return <p
                aria-hidden={toggle ? "true" : "false"}
                className="description"
            >
                {props.description}</p>
        }
    }

    return (
        <div className="collapse">
            <div
                onClick={toggleState}
                className="collapse-visible">
                <h2>{props.title}</h2>
                <img
                    src={Chevron}
                    alt="chevron"
                    className={toggle ? "chevron chevron-rotate" : "chevron"} />
            </div>
            <div
                ref={refHeight}
                className={
                    toggle ? "collapse-toggle animated" : "collapse-toggle"
                }
                style={{ height: toggle ? `${heightEl}` : "0px" }}
            >
                {typeOfDescription()}
            </div>
        </div>
    );
};

export default Collapse;