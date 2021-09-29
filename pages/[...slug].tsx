import { useRef } from "react";
import fm from "format-message";
import content from "../frontaid.content.json";
import { Main, Container } from "../styles/global";
import { Section } from "../styles/home/styles";
import {
  Hero,
  ContentArea,
  SectionArea,
  SectionScreenShotArea,
  Carousel,
  CarouselButtons,
} from "../styles/details/styles";
import { useHeader } from "../hooks/useHeader";
import Card from "../components/card";
import { eng } from "../locales/translate";

export default function Page({ page }: any) {
  const { language } = useHeader() as any;
  const carousel = useRef(null);
  const handlePrev = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleNext = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  return (
    <Main>
      <Section
        className="intro intro--inner"
        style={{ backgroundImage: `url(${page.cover})` }}
      >
        <Container>
          <div className="intro--inner__hero">
            <h5>
              {language.currentLanguage === "pt-br"
                ? fm("title.jobs")
                : eng("title.jobs")}
            </h5>
            <h2>
              {language.currentLanguage === "pt-br"
                ? page.title
                : page.title_en}
            </h2>
            <p>
              {language.currentLanguage === "pt-br"
                ? page.description
                : page.description_en}
            </p>
          </div>
        </Container>
      </Section>
      <SectionArea className="content-area">
        <Container>
          <Hero style={{ backgroundImage: `url(${page.cover})` }} />
          <ContentArea>
            <div
              className="content-area__heading"
              dangerouslySetInnerHTML={{
                __html:
                  language.currentLanguage === "pt-br"
                    ? page.heading
                    : page.heading_en,
              }}
            ></div>
            <div
              className="content-area__post"
              dangerouslySetInnerHTML={{
                __html:
                  language.currentLanguage === "pt-br"
                    ? page.content
                    : page.content_en,
              }}
            ></div>
          </ContentArea>
        </Container>
      </SectionArea>
      <SectionScreenShotArea>screenshot area</SectionScreenShotArea>
      <Carousel>
        <Container className="carousel" ref={carousel}>
          {content.pages.map((item: any) => (
            <Card
              key={item.id}
              slug={item.url}
              path={item.path}
              tag={item.tag}
              thumb={item.thumb}
              title={
                language.currentLanguage === "pt-br"
                  ? item.title
                  : item.title_en
              }
              description={
                language.currentLanguage === "pt-br"
                  ? item.description
                  : item.description_en
              }
            />
          ))}
        </Container>
        <CarouselButtons>
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </CarouselButtons>
      </Carousel>
    </Main>
  );
}

export async function getStaticPaths() {
  const paths = content.pages.map((page: any) => {
    const slug = page.path.split("/").slice(1);
    return { params: { slug } };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  const currentPath = `/${params.slug.join("/")}`;
  const page = content.pages.find((page: any) => page.path === currentPath) || {
    notfound: true,
  };
  return { props: { page } };
}
