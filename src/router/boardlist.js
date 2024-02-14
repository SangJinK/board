import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom";


const BoardList = () => {
    const [boardList, setBoardList] = useState([]);


    const getBoardList = () => {
        fetch("http://localhost:8080/board",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => {
             setBoardList(data);

        });
     
    }

    useEffect(() => {
        getBoardList();
    }, [])




    return (
         <div>
            <h1>게시글 목록</h1>
            <ul>
                {boardList.map((board) => {
                    return (
                        <li key={board.IDX}>
                          <Link to={`/board/${board.IDX}`}>{board.TITLE}</Link>  
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}
export default BoardList;