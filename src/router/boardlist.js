import React,{useEffect, useState} from "react";



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
                        <li key={board.IDX}>{board.TITLE}</li>
                    )
                })}
            </ul>
        </div>
    )

}
export default BoardList;