import { db } from "../lib/firebase";
import { query, orderBy, onSnapshot , collection, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import "../design/coment.css"
import {Link} from "react-router-dom";

function Comment() {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment.trim()) {
            await addDoc(collection(db, "comments"), {
                text: comment,
                createdAt: new Date()
            });
            setComment("");
        }
    };

    useEffect(() => {
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

    return(
        <div className="comment">
            <Link to="/workintroduce/"
                style={{
                    position: "absolute",
                    top: 10,
                    left : 10,
                    textDecoration:"none",
                    color: "black",
                }}

            > X </Link>
            <h1>comment</h1>
            <div style={{width:'100%', marginBottom:"30px"}}>
                {comments.map((comment) => (
                    <div key={comment.id} className="comment-list">
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="comment-form">
                <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Comment..."
                ></input>
                <div>
                    <button type="submit">+</button>
                </div>
            </form>
        </div>
    )

}

export default Comment;