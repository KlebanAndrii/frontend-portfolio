import Home from "./Home";
import { PostProvider } from "./context/PostContext";

const BlogPost = () => (
  <PostProvider>
    <Home />
  </PostProvider>
);

export default BlogPost;
