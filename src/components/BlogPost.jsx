import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

export default function BlogPost(props) {
  const animationDelay = 0.2 * (props.index + 1);

  return (
    <Link to={`/blog/article/${props.id}`}>
      <motion.section
        className="blog-post"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: {
            ease: "linear",
            duration: 0.5,
            delay: animationDelay,
          },
          y: {
            ease: "easeOut",
            duration: 0.4,
            delay: animationDelay,
          },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <img
          className="blog-post__image"
          src={`${props.imageURL}`}
          alt={props.title}
        />
        <div className="blog-post__content">
          <h2>{props.title}</h2>

          <ReactMarkdown className="blog-post__content__text">
            {props.snippet}
          </ReactMarkdown>
          <p className="blog-post__content__read-more">Read Full Article</p>
        </div>
        <p className="blog-post__date">{props.datePosted}</p>
      </motion.section>
    </Link>
  );
}
