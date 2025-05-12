import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePost } from "./context/PostContext";
import Input from "./Input";
import PostDisplay from "./PostDisplay";
import { FiSearch } from "react-icons/fi";
import { fadeInUp } from "@/utils/animation";
import { PostContextType } from "@/types/practical";

const Home = () => {
  const postContext = usePost();
  if (!postContext) {
    throw new Error("usePost must be used within a PostProvider");
  }

  const { posts, addPost, deletePost, editPost } =
    postContext as PostContextType;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");

  const handleCreatePost = () => {
    if (!title.trim() || !description.trim()) return;
    addPost(title, description);
    setTitle("");
    setDescription("");
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div {...fadeInUp()} className="mx-auto w-full max-w-md">
      <div className="mb-4 relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
        <input
          type="text"
          placeholder="Search posts by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 border border-neutral-300 dark:border-neutral-600 p-2 shadow-xl backdrop-blur-md bg-gray-100 dark:bg-neutral-700 dark:text-white"
        />
      </div>

      <Input
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        handleCreatePost={handleCreatePost}
      />

      <PostDisplay
        posts={filteredPosts}
        handleDeletePost={deletePost}
        handleEditPost={editPost}
      />
    </motion.div>
  );
};

export default Home;
