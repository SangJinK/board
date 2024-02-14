import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Board from "../components/board";

const BoardDetail = () => {
    const { IDX } = useParams();
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState({});

    const getBoard = () => {
        fetch(`http://localhost:8080/board/${IDX}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => {

            setBoard(data[0]);
            setLoading(false);
        });
    }

    useEffect(() => {
        getBoard();
    }, [IDX])

    return (
        <div>
            {loading ? (
                <div>로딩중...</div>
            ) : (
                <div>
                  
                    <Board
                        idx={board.IDX}
                        title={board.TITLE}
                        contents={board.CONTENTS}
                        createdBy={board.CREATED_BY}
                    />
                </div>
            )}
        </div>
    );
}

export default BoardDetail;
