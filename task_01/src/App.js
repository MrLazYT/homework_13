import { Routes, Route } from "react-router-dom";
import "./App.css";
import Posts from "./features/posts/Posts";
import PostPage from "./features/posts/PostPage";
import AddPost from "./features/posts/AddPost";
import EditPost from "./features/posts/EditPost";
import { Box } from "@mui/material";

function App() {
    return (
        <Box className="App">
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/post/:id/edit/" element={<EditPost />} />
                <Route path="/add-post" element={<AddPost />} />
            </Routes>
        </Box>
    );
}

export default App;
