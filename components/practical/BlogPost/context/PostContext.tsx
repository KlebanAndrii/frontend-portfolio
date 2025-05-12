import React, { createContext, useContext, useEffect, useState } from "react";
import { PostContextType, Post } from "@/types/practical";

// We create a context for posts (null by default)
const PostContext = createContext<PostContextType | null>(null);

// A context provider that wraps the tree of components
export const PostProvider = ({ children }: React.PropsWithChildren<object>) => {
  // A state for an array of posts
  const [posts, setPosts] = useState<Post[]>([]);

  // The state for the search term
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Check box to verify whether the LocalStorage is already initialized
  const [isInitialized, setIsInitialized] = useState(false);

  // At the first render we download posts from LocalStorage
  useEffect(() => {
    const stored = localStorage.getItem("posts");
    if (stored) {
      setPosts(JSON.parse(stored));
    }
    setIsInitialized(true); // Mark that initialization is completed
  }, []);

  // We keep posts in LocalStorage only after initialization
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts, isInitialized]);

  // We add a new post
  const addPost = (title: string, description: string): void => {
    setPosts((prev) => [...prev, { id: Date.now(), title, description }]);
  };

  // We delete the post for ID
  const deletePost = (id: number): void => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  // Edit post for ID
  const editPost = (id: number, title: string, description: string): void => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, title, description } : post
      )
    );
  };

  return (
    // We transmit data and functions to the context
    <PostContext.Provider
      value={{
        posts,
        addPost,
        deletePost,
        editPost,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

// Huk to conveniently use context
export const usePost = () => {
  return useContext(PostContext);
};
