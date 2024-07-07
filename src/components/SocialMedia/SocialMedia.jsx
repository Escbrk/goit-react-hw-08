import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";
import css from './SocialMedia.module.css'

const SocialMedia = () => {
  return (
    <>
      <h3>Follow me:</h3>
      <ul className={css.social_list}>
        <li>
          <a
            href="https://www.instagram.com/escbrk/"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Escobrk/"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/paul-yakymenko/"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Escbrk"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia