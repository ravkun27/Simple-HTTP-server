import { FC } from "react";
import Posts from "./Posts"; // Ensure the path is correct
import type { Address } from "viem";
import type { PostDetails } from "../types/posts/types"; // Ensure the path is correct

interface PostFormProps {
    posts: PostDetails[]; // Expecting posts prop
    account: Address | undefined; // Expecting account prop
}

const PostForm: FC<PostFormProps> = ({ account, posts }) => {
    return (
        <div>
            {/* Your form logic (e.g., a form to create a new post) */}
            <h2>Create a new post</h2>
            {/* Example input for post creation can go here */}

            {/* Render the Posts component */}
            <Posts posts={posts} account={account} />
        </div>
    );
};

export default PostForm;
