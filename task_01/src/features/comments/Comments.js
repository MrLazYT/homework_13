import { useSelector } from "react-redux";
import Comment from "./Comment";
import { Box, Typography } from "@mui/material";

export default function Comments({ postId }) {
    const comments = useSelector((state) => state.comments);
    const commentsOfPost = comments.filter((comment) => comment.postId === postId);

    return (
        <Box className="comments-block">
            <Typography variant="h6">Comments:</Typography>

            {commentsOfPost.map((comment) => {
                return <Comment key={comment.id} author={comment.author} content={comment.content} />;
            })}
        </Box>
    );
}
