import { useState, useEffect } from "react";
import PostForm from "../../components/PostForm";
import styles from "../../styles/Custom.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import type { PostDetails } from "../../types/posts/types"; // Adjust the import path as necessary
import type { Address } from "viem"; // Import Address type

const Forum = () => {
    const { address, isConnected } = useAccount();
    const [account, setAccount] = useState<Address | undefined>(undefined);
    const [posts, setPosts] = useState<PostDetails[]>([]); // Initialize posts as an empty array

    useEffect(() => {
        if (isConnected) {
            setAccount(address);
        } else {
            setAccount(undefined);
        }
    }, [address, isConnected]);

    // Example of how to set posts; replace with actual data fetching logic
    useEffect(() => {
        // Fetch or set your posts data here
        const fetchedPosts: PostDetails[] = []; // Replace with actual fetch logic
        setPosts(fetchedPosts);
    }, []);

    return (
        <div className={styles.main}>
            <header>
                <nav>
                    <ConnectButton
                        label={account === undefined ? "Connect Wallet To Post" : ""}
                    />
                </nav>
            </header>

            <div>
                <PostForm account={account} posts={posts} /> {/* Ensure posts are passed */}
            </div>
        </div>
    );
};

export default Forum;
