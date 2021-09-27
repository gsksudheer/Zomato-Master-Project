import React from "react";
import classnames from "classnames";

const InfoButtons = (props) => {
    return (
        <>
            <button className={classnames(
                "px-3 py-2 border border-zred-400 rounded-md flex items-center gap-1",
                {
                    "text-white bg-zred-400 hover:bg-zred-500 ":props.isAcitve,
                }
                )}
            >
                {props.children}
            </button>
            
        </>
    );
};

export default InfoButtons;