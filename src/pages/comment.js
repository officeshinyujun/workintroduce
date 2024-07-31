import { db } from "../lib/firebase";
import { query, orderBy, onSnapshot , collection, addDoc } from "firebase/firestore";
import {useState, useEffect} from "react";

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
            setComments(commentsData);
        });

        return () => unsubscribe();
    }, []);

    return(
        <>
            <div>
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Comment"
                ></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )

}

export default Comment;