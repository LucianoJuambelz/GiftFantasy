import React from "react";
import styles from "./Modal.module.css";
import detailStyles from "../../Pages/Detail/Detail.module.css";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

interface setModal {
  setModal: Function;
  url: string;
}

function Modal({ setModal, url }: setModal) {
  const handleCopyBoard = () => {
    navigator.clipboard.writeText(url);
    alert("The link was copy");
  };

  return (
    <article id={styles.wrapper}>
      <div id={styles.wrapperContainer} onClick={() => setModal(false)}>
        <p>Share</p>
        <div id={styles.iconsContainer}>
          <WhatsappShareButton
            url={url}
            separator=" "
            title="¡Look at this epic gif! Check more cool gifs in Gift Fantasy, ¿what are you waiting for?"
          >
            <WhatsappIcon size={50} round />
          </WhatsappShareButton>
          <TwitterShareButton
            url={url}
            title="¡Look at this epic gif! Check more cool gifs in Gift Fantasy, ¿what are you waiting for?"
          >
            <TwitterIcon size={50} round />
          </TwitterShareButton>
          <FacebookShareButton
            url={url}
            quote="¡Look at this epic gif! Check more cool gifs in Gift Fantasy, ¿what are you waiting for?"
          >
            <FacebookIcon size={50} round />
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title="¡Look at this epic gif! Check more cool gifs in Gift Fantasy, ¿what are you waiting for?"
            summary="¡Look at this epic gif! Check more cool gifs in Gift Fantasy, ¿what are you waiting for?"
          >
            <LinkedinIcon size={50} round />
          </LinkedinShareButton>
          <TelegramShareButton
            url={url}
            title="¡Look at this epic gif! Check more cool gifs in Gift Fantasy, ¿what are you waiting for?"
          >
            <TelegramIcon size={50} round />
          </TelegramShareButton>
          <PinterestShareButton
            media="gif"
            url={url}
            title="¡Look at this epic gif! Check more cool gifs in Gift Fantasy, ¿what are you waiting for?"
          >
            <PinterestIcon size={50} round />
          </PinterestShareButton>
          <EmailShareButton
            url={url}
            title="¡Look at this epic gif! Check more cool gifs in Gift Fantasy, ¿what are you waiting for?"
          >
            <EmailIcon size={50} round />
          </EmailShareButton>
          <div
            className={detailStyles.socialIconContainer}
            id={styles.clipboard}
            onClick={handleCopyBoard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              id={detailStyles.socialSideSvg}
            >
              <path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Modal;
