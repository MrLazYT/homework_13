import { Link, useNavigate } from "react-router-dom";
import ReactionBtns from "./ReactionBtns";
import { useDispatch } from "react-redux";
import { deletePost } from "./postsSlice";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

export default function Post({ id, title, content }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const editPostOnClick = () => {
        navigate(`/post/${id}/edit`);
    };

    const deletePostOnClick = () => {
        dispatch(deletePost(id));
    };

    return (
        <Box className="post-block" key={id}>
            <Link to={`post/${id}`}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="subtitle1">{content}</Typography>
            </Link>

            <ButtonGroup className="button-group" variant="contained">
                <Button onClick={editPostOnClick}>Edit</Button>
                <Button onClick={deletePostOnClick}>Delete</Button>
            </ButtonGroup>

            <ReactionBtns id={id} />
        </Box>
    );
}
