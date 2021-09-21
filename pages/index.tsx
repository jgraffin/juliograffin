import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import YouTube from "react-youtube";
import Modal from "react-modal";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";

import { Main, Container } from "../styles/global";
import { Section } from "./styles";
import { postsLangPt, postsLangEn } from "../pages/api/posts";
import { useHeader } from "../hooks/useHeader";
import Cover from "../public/images/background-image.jpeg";
import Card from "../components/card";

type Options = {
  width: string;
  height: string;
  playerVars: {};
};

const modalStyles = {
  overlay: {
    zIndex: 9,
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
  const [videoUrl, setVideoUrl] = useState("https://youtu.be/hmHXtyneUYU");
  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.substring(videoUrl.lastIndexOf("/"));
  }

  const checkElapsedTime = (e: any) => {
    console.log(e.target.playerInfo.playerState);
    const duration = e.target.getDuration();
    const currentTime = e.target.getCurrentTime();
    if (currentTime / duration > 0.95) {
      setModalIsOpen(true);
    }
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const opts: Options = {
    width: "1024",
    height: "576",
    playerVars: { autoplay: 0, controls: 0 },
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
          containerClassName="embed embed-youtube"
          onStateChange={(e) => checkElapsedTime(e)}
          opts={opts}
        />
      </Modal>
      <Section className="intro">
        <Container>
          <div className="intro__text">
            <h1>
              Olá!
              <br />
              Eu sou o Julio!
            </h1>
            <p>
              Trabalho como desenvolvedor front-end e busco entregar sempre um
              bom produto digital. Quer saber mais? Assista o vídeo!
            </p>

            <button className="intro-button intro-button--next">
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
          <div onClick={handleOpenModal} className="intro__video">
            <BsPlayFill className="intro__video__icon" />
            <Image
              src={Cover}
              alt="Vídeo apresentação"
              width={540}
              height={350}
              placeholder="blur"
            />
          </div>
        </Container>
      </Section>
      <Section className="content">
        <div className="content__jobs">
          <div className="content__jobs__title">
            <h2>trabalhos</h2>
          </div>
          <div className="content__jobs__cards">
            {language === "pt-br"
              ? postsLangPt.map((item: any) => (
                  <Card
                    key={item.id}
                    url={item.url}
                    tag={item.tag}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                ))
              : postsLangEn.map((item: any) => (
                  <Card
                    key={item.id}
                    url={item.url}
                    tag={item.tag}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                ))}
          </div>
        </div>
        <div className="content__about">
          <div className="content__about__author">
            <div className="author__image">
              <Image
                src="/julio-graffin.png?download=true"
                alt="Julio Graffin"
                width={64}
                height={64}
              />
            </div>
            <div className="author__text">
              <p>
                Sed consectetur nibh sit amet dictum feugiat. Nullam justo
                tellus, dictum sed eros non, ullamcorper dictum metus. Maecenas
                in ligula id mi tristique pharetra vel ut ex. Duis rutrum urna
                at erat condimentum, non gravida mauris mollis.
              </p>
              <p>
                Phasellus pulvinar tortor id neque congue, et semper nisl
                congue. Pellentesque pellentesque nibh sed tellus auctor
                scelerisque. Duis dignissim nunc suscipit finibus vulputate.
                Suspendisse potenti. Donec ante tortor, accumsan in ultrices
                non, viverra vitae est.
              </p>
            </div>
            <div className="author__actions">
              <button className="btn btn--download">
                <BsDownload />
                download CV
              </button>
            </div>
          </div>
          <span id="curved-corner-bottomleft"></span>
        </div>
      </Section>
    </Main>
  );
};

export default Home;
