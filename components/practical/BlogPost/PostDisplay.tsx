import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Post } from "@/types/practical";
import { fadeInUp, fadeSlideExit } from "@/utils/animation";
import { PostDisplayProps } from "@/types/practical";

const PostDisplay = ({
  posts,
  handleDeletePost,
  handleEditPost,
}: PostDisplayProps) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const startEditing = (post: Post) => {
    setEditingId(post.id);
    setEditTitle(post.title);
    setEditDescription(post.description);
  };

  const saveEdit = () => {
    if (editingId !== null) {
      handleEditPost(editingId, editTitle, editDescription);
      setEditingId(null);
    }
  };

  return (
    <motion.div {...fadeInUp(0.1)}>
      <AnimatePresence>
        {posts.length > 0 ? (
          posts.map((post) => (
            <motion.article
              key={post.id}
              {...fadeSlideExit()}
              className="mb-4 rounded-xl border border-neutral-300 backdrop-blur-md bg-white/50 p-2 lg:p-4 shadow-md dark:border-neutral-600 dark:bg-neutral-800/50"
            >
              {editingId === post.id ? (
                <>
                  <input
                    aria-label="Edit post title"
                    className="mb-2 w-full rounded border p-2 dark:bg-neutral-700 dark:text-white"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <textarea
                    aria-label="Edit post description"
                    className="mb-2 w-full rounded border p-2 dark:bg-neutral-700 dark:text-white"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      aria-label="Save post"
                      onClick={saveEdit}
                      className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      aria-label="Cancel post"
                      onClick={() => setEditingId(null)}
                      className="rounded bg-gray-400 px-3 py-1 text-white hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <motion.button
                      type="button"
                      aria-label="Edit post"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => startEditing(post)}
                      className="rounded bg-yellow-500 px-4 py-1 lg:py-1.5 text-white hover:bg-yellow-600"
                    >
                      Edit
                    </motion.button>
                    <motion.button
                      type="button"
                      aria-label="Delete post"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleDeletePost(post.id)}
                      className="rounded bg-red-500 px-4 py-1 lg:py-1.5 text-white hover:bg-red-600"
                    >
                      Delete
                    </motion.button>
                  </div>
                </>
              )}
            </motion.article>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 italic dark:text-gray-400"
          >
            No posts found.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PostDisplay;
