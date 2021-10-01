import { useRef, useState, useEffect } from "react";
import Link from "next/link";
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
  const [hasManyCards, setHasManyCards] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const handlePrev = (e: any) => {
    e.preventDefault();
    const scrolled = (carousel.current.scrollLeft -=
      carousel.current.offsetWidth);

    setHasNext(true);
    if (scrolled <= 0) {
      setHasPrevious(false);
    }
  };

  const handleNext = (e: any) => {
    e.preventDefault();
    const scrolled = (carousel.current.scrollLeft +=
      carousel.current.offsetWidth);
    const lengthCards = content.pages.length * 350 - 350;

    if (scrolled > 0) {
      setHasPrevious(true);
    }
  };

  useEffect(() => {
    if (content.pages.length > 5) {
      setHasManyCards(true);
    }
  }, []);
  return (
    <Main className={!page?.title ? "page-not-found" : ""}>
      <Section
        className="intro intro--inner"
        style={{ backgroundImage: `url(${page?.cover})` }}
      >
        <Container>
          <div className="intro--inner__hero">
            <h5>
              {page?.title
                ? language.currentLanguage === "pt-br"
                  ? fm("title.jobs")
                  : eng("title.jobs")
                : language.currentLanguage === "pt-br"
                ? fm("not.found")
                : eng("not.found")}
            </h5>
            {page?.title && (
              <>
                <h2>
                  {language.currentLanguage === "pt-br"
                    ? page?.title
                    : page?.title_en}
                </h2>
                <p>
                  {language.currentLanguage === "pt-br"
                    ? page?.description
                    : page?.description_en}
                </p>
              </>
            )}
          </div>
        </Container>
      </Section>
      {page?.title ? (
        <>
          <SectionArea className="content-area">
            <Container>
              <Hero style={{ backgroundImage: `url(${page?.cover})` }} />
              <ContentArea>
                <div
                  className="content-area__heading"
                  dangerouslySetInnerHTML={{
                    __html:
                      language.currentLanguage === "pt-br"
                        ? page?.heading
                        : page?.heading_en,
                  }}
                ></div>
                <div
                  className="content-area__post"
                  dangerouslySetInnerHTML={{
                    __html:
                      language.currentLanguage === "pt-br"
                        ? page?.content
                        : page?.content_en,
                  }}
                ></div>
              </ContentArea>
            </Container>
          </SectionArea>
          <SectionScreenShotArea>screenshot area</SectionScreenShotArea>
          <Carousel id="jobs">
            <div className={hasManyCards ? "has-many-cards" : ""}>
              <h2>
                {language.currentLanguage === "pt-br"
                  ? fm("title.other.jobs")
                  : eng("title.other.jobs")}
              </h2>
              <Container className="carousel" ref={carousel}>
                {content.pages.length === 0 ? (
                  <p>loading...</p>
                ) : (
                  content.pages
                    .filter((value: any) => {
                      if (value.id !== page?.id) {
                        return value;
                      }
                      return null;
                    })
                    .map((item: any) => {
                      return (
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
                      );
                    })
                )}
              </Container>
              {hasManyCards && (
                <CarouselButtons>
                  {hasPrevious && (
                    <button id="prev" onClick={handlePrev}></button>
                  )}
                  {hasNext && <button id="next" onClick={handleNext}></button>}
                </CarouselButtons>
              )}
            </div>
          </Carousel>
        </>
      ) : (
        <Container>
          <div className="not-found">
            <p>
              {language.currentLanguage === "pt-br"
                ? fm("not.found.text")
                : eng("not.found.text")}
            </p>
            <Link href="/" passHref>
              <a>
                {language.currentLanguage === "pt-br"
                  ? fm("button.go.back.home")
                  : eng("button.go.back.home")}
              </a>
            </Link>
          </div>
        </Container>
      )}
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
