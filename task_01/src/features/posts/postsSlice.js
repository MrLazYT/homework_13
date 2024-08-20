import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
    {
        id: nanoid(),
        author: "Will Smit",
        publishing_date: "2024-08-17",
        title: "The Future of AI in Healthcare",
        content:
            "AI is revolutionizing healthcare by providing more accurate diagnoses, personalized treatment plans, and even predicting patient outcomes. Imagine a world where AI-driven robots assist in surgeries, reducing human error, or AI algorithms that detect diseases in their earliest stages. While there are ethical concerns and challenges to address, the potential benefits are immense. What are your thoughts on AI's role in the future of healthcare?",
        reactions: {
            thumbsUp: 10,
            thumbsDown: 4,
        },
        comments: [
            {
                id: nanoid(),
                author: "John Doe",
                content:
                    "I think AI will revolutionize healthcare by providing more accurate diagnoses and personalized treatment plans",
            },
        ],
    },
    {
        id: nanoid(),
        author: "Denys Gladan",
        publishing_date: "2024-08-16",
        title: "Top Hidden Gems to Visit in 2024",
        content:
            "Tired of the usual tourist spots? Here are some hidden gems to add to your travel list for 2024. Explore the pristine beaches of Comporta, Portugal, hike through the breathtaking landscapes of Svaneti, Georgia, or immerse yourself in the rich history of Matera, Italy. These off-the-beaten-path destinations offer unique experiences without the overwhelming crowds. Where's your next adventure?",
        reactions: {
            thumbsUp: 1,
            thumbsDown: 5,
        },
    },
    {
        id: nanoid(),
        author: "Tom Stone",
        publishing_date: "2024-08-16",
        title: "Minimalism: The Key to a Stress-Free Life?",
        content:
            "In a world filled with constant distractions and endless consumerism, minimalism offers a breath of fresh air. By focusing on what truly matters and decluttering our lives, we can reduce stress and find more happiness in simplicity. Whether it’s decluttering your home or cutting down on unnecessary commitments, embracing minimalism might be the key to a more fulfilling life. Have you tried minimalism?",
        reactions: {
            thumbsUp: 3,
            thumbsDown: 0,
        },
    },
    {
        id: nanoid(),
        author: "James Gates",
        publishing_date: "2024-08-15",
        title: "The Importance of Protecting Our Oceans",
        content:
            "Oceans cover over 70% of our planet, yet they are under constant threat from pollution, overfishing, and climate change. Protecting our oceans is crucial for maintaining biodiversity, regulating climate, and supporting millions of people who depend on marine resources. From reducing plastic use to supporting sustainable fishing practices, there are many ways we can help. What steps are you taking to protect our oceans?",
        reactions: {
            thumbsUp: 26,
            thumbsDown: 12,
        },
    },
    {
        id: nanoid(),
        author: "Bill Allen",
        publishing_date: "2024-08-13",
        title: "Investing in a Volatile Market: Tips for Success",
        content:
            "With market volatility on the rise, investing can feel like a rollercoaster ride. However, by diversifying your portfolio, focusing on long-term goals, and staying informed, you can navigate the ups and downs. Consider investing in stable assets like bonds or exploring new opportunities in emerging markets. Remember, patience and discipline are key. How do you manage your investments during turbulent times?",
        reactions: {
            thumbsUp: 45,
            thumbsDown: 24,
        },
    },
];

export const postsSlice = createSlice({
    name: "postsSlice",
    initialState: initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        deletePost: (state, action) => {
            return state.filter((post) => post.id !== action.payload);
        },
        editPost: (state, action) => {
            return state.map((post) => (post.id === action.payload.id ? action.payload : post));
        },
        addPostReaction: (state, action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.find((post) => post.id === postId);

            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        },
    },
});

export const { addPost, deletePost, editPost, addPostReaction } = postsSlice.actions;

export default postsSlice.reducer;
