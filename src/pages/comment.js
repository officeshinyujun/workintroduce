import { db } from "../lib/firebase";
import { query, orderBy, onSnapshot, collection, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import "../design/coment.css";
import { Link } from "react-router-dom";

function Comment() {
    const [comment, setComment] = useState(""); // 댓글 텍스트 상태
    const [name, setName] = useState(""); // 이름 상태
    const [comments, setComments] = useState([]); // 댓글 목록 상태

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 댓글과 이름이 모두 입력되어야 댓글을 추가
        if (comment.trim() && name.trim()) {
            await addDoc(collection(db, "comments"), {
                text: comment,
                name: name,
                createdAt: new Date()
            });
            setComment(""); // 댓글 입력 필드 초기화
            setName(""); // 이름 입력 필드 초기화
        }
    };

    useEffect(() => {
        // 댓글을 작성일자 기준으로 내림차순 정렬하여 가져오기
        const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const commentsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log("Comments fetched: ", commentsData);  // 데이터가 제대로 가져와지는지 확인
            setComments(commentsData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="comment">
            <Link to="/workintroduce/"
                  style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      textDecoration: "none",
                      color: "black",
                  }}
            > X </Link>
            <h1>댓글</h1>
            <div style={{ width: '100%', marginBottom: "30px" }}>
                {comments.map((comment) => (
                    <div key={comment.id} className="comment-list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path
                                d="M21.2777 23.5C21.2777 19.8181 18.293 16.8333 14.6111 16.8333H12.3888C8.70694 16.8333 5.72217 19.8181 5.72217 23.5M17.9444 7.94444C17.9444 10.399 15.9545 12.3889 13.4999 12.3889C11.0453 12.3889 9.0555 10.399 9.0555 7.94444C9.0555 5.48985 11.0453 3.5 13.4999 3.5C15.9545 3.5 17.9444 5.48985 17.9444 7.94444Z"
                                stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p><strong>{comment.name}</strong> : {comment.text}</p> {/* 이름과 댓글 텍스트 표시 */}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="comment-form">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름..."
                />
                <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="댓글..."
                />
                <div>
                    <button type="submit">+</button>
                </div>
            </form>
        </div>
    )
}

export default Comment;
