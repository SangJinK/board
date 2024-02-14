import React from "react";
const Board = ({idx,title,contents,createdBy}) => {
    return(
        <div>
            <h1>{idx}</h1>
            <h2>{title}</h2>
            <h5>{createdBy}</h5>
            <hr />
            <p>{contents}</p>
        </div>
    )
};
export default Board;