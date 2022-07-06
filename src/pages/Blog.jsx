import { motion } from "framer-motion";

import BlogPost from "../components/BlogPost";

export default function Blog(props) {
  // fetch(`/.netlify/functions/fetch-blog`).then((res) => {
  //   const data = res.json();
  //   console.log(data);
  // });

  const blogPostElements = props.blogPosts.map((post, index) => {
    return (
      <BlogPost
        key={index}
        index={index}
        id={post.id}
        datePosted={post.datePosted}
        snippet={post.snippet}
        imageURL={post.blogPostImage}
        title={post.blogPostTitle}
        text={post.blogPostText}
      />
    );
  });

  return (
    <>
      <div className="banner">
        <div className="banner-overlay">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: {
                ease: "linear",
                duration: 0.5,
              },
              x: {
                ease: "easeOut",
                duration: 0.4,
              },
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            Blog
          </motion.h1>
        </div>
      </div>
      <main className="blog">{blogPostElements}</main>
    </>
  );
}
