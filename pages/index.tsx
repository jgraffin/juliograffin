/* eslint-disable react/display-name */
import { useState } from "react";
import type { NextPage } from "next";
import fm from "format-message";
import Image from "next/image";
import YouTube from "react-youtube";
import Modal from "react-modal";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";

import { Main, Container } from "../styles/global";
import { Section } from "../styles/home/styles";
import { useHeader } from "../hooks/useHeader";
import { eng } from "../locales/translate";
import Cover from "../public/images/background-image.jpeg";
import Photo from "../public/julio-graffin.png";
import Card from "../components/card";
import content from "../frontaid.content.json";
import { HiDocumentDownload } from "react-icons/hi";

type Options = {
  playerVars: {};
};

const modalStyles = {
  overlay: {
    zIndex: 12,
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: 0,
  },
};

const Home: NextPage = () => {
  const { language } = useHeader() as any;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.substring(videoUrl.lastIndexOf("/"));
  }

  const checkElapsedTime = (e: any) => {
    const duration = e.target.getDuration();
    const currentTime = e.target.getCurrentTime();
    if (currentTime / duration > 0.95) {
      setModalIsOpen(true);
    }
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
    setVideoUrl(fm("screen.home.video"));

    // if (language.currentLanguage === "pt-br") {
    //   setVideoUrl(fm("screen.home.video"));
    // } else {
    //   setVideoUrl(eng("screen.home.video"));
    // }
  };

  const opts: Options = {
    playerVars: { autoplay: 0, controls: 0, subtitles: true },
  };

  return (
    <Main>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
      >
        <YouTube
          videoId={videoCode}
          containerClassName="video-container"
          onStateChange={(e) => checkElapsedTime(e)}
          opts={opts}
        />
      </Modal>
      <Section className="intro">
        <Container>
          <div className="intro__text">
            <h1>
              {language.currentLanguage === "pt-br"
                ? fm.rich(fm("screen.home.intro.title"), {
                    br: () => <br key="br" />,
                  })
                : eng.rich(eng("screen.home.intro.title"), {
                    br: () => <br key="br" />,
                  })}
            </h1>
            <p>
              {language.currentLanguage === "pt-br"
                ? fm("screen.home.intro.description")
                : eng("screen.home.intro.description")}
            </p>
            <button
              className="intro-button intro-button--next"
              aria-label={
                language.currentLanguage === "pt-br"
                  ? fm("button.scroll.down")
                  : eng("button.scroll.down")
              }
              onClick={(e) => {
                let jobs = document.getElementById("jobs");
                e.preventDefault();
                jobs &&
                  jobs.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              <AiOutlineArrowDown />
            </button>
            <button
              onClick={handleOpenModal}
              className="btn intro-button intro-button--video"
            >
              <BsPlayFill />
              <span>0.53</span>
            </button>
          </div>
          <div
            onClick={handleOpenModal}
            className={`intro__video ${!Cover ? "is-hidden" : "is-shown"}`}
          >
            <BsPlayFill className="intro__video__icon" />
            <Image
              src={Cover}
              alt={
                language.currentLanguage === "pt-br"
                  ? fm("screen.home.videoAlt")
                  : eng("screen.home.videoAlt")
              }
              width={540}
              height={350}
              placeholder="blur"
            />
          </div>
        </Container>
      </Section>
      <Section className="content">
        <div id="jobs"></div>
        <div className="content__jobs">
          <div className="content__jobs__title">
            <h2>
              {language.currentLanguage === "pt-br"
                ? fm.rich(fm("title.jobs"), {
                    br: () => <br key="br" />,
                  })
                : eng.rich(eng("title.jobs"), {
                    br: () => <br key="br" />,
                  })}
            </h2>
          </div>
          <div className="content__jobs__cards">
            {content.pages.map((item: any) => (
              <Card
                key={item.id}
                slug={item.url}
                path={item.path}
                tags={item.tags}
                thumb={item.thumb}
                title={
                  language.currentLanguage === "pt-br"
                    ? item?.title
                    : item?.title_en
                }
                description={
                  language.currentLanguage === "pt-br"
                    ? item?.description
                    : item?.description_en
                }
              />
            ))}
          </div>
          <span id="curved-corner-bottomright"></span>
        </div>
        <div className="content__about">
          <div className="content__about__author">
            <div className="author__image">
              <Image
                src={Photo}
                alt="Julio Graffin"
                height={150}
                width={150}
                placeholder="blur"
              />
            </div>
            <div className="author__text">
              {language.currentLanguage === "pt-br"
                ? fm.rich(fm("author.text"), {
                    p: ({ children }: any) => <p>{children}</p>,
                    strong: ({ children }: any) => <strong>{children}</strong>,
                  })
                : eng.rich(eng("author.text"), {
                    p: ({ children }: any) => <p>{children}</p>,
                    strong: ({ children }: any) => <strong>{children}</strong>,
                  })}
            </div>
            <div className="author__actions">
              <button className="btn btn--download">
                <BsDownload />
                {language.currentLanguage === "pt-br"
                  ? fm("button.download")
                  : eng("button.download")}
              </button>
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
};

export default Home;
