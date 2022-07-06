import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function Article(props) {
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
            Article
          </motion.h1>
        </div>
      </div>
      <motion.main
        className="article"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: {
            ease: "linear",
            duration: 0.5,
            delay: 0.2,
          },
          y: {
            ease: "easeOut",
            duration: 0.4,
            delay: 0.2,
          },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <h2 className="article__header">{props.post.blogPostTitle}</h2>
        <p className="article__date">{props.post.datePosted}</p>
        <img
          className="article__image"
          src={props.post.blogPostImage}
          alt={props.post.blogPostTitle}
        />
        <div className="article__text">
          <ReactMarkdown>{props.post.blogPostText}</ReactMarkdown>
        </div>
      </motion.main>
    </>
  );
}
