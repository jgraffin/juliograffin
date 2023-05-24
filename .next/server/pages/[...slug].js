"use strict";
(() => {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 5912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "format-message"
var external_format_message_ = __webpack_require__(2219);
var external_format_message_default = /*#__PURE__*/__webpack_require__.n(external_format_message_);
// EXTERNAL MODULE: ./frontaid.content.json
var frontaid_content = __webpack_require__(956);
// EXTERNAL MODULE: ./styles/global.ts
var global = __webpack_require__(8364);
// EXTERNAL MODULE: ./styles/home/styles.ts
var styles = __webpack_require__(7030);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/details/styles.ts

const slideInUp = (0,external_styled_components_.keyframes)(["from{opacity:0;transform:translateY(4rem);}to{opacity:1;transform:translateY(0);}"]);
const Hero = external_styled_components_default().section.withConfig({
  displayName: "styles__Hero"
})(["animation:", " ease-in-out 0.5s forwards;background-color:#f4f4f4;background-position:center center;background-size:105%;border-radius:12px;box-shadow:0 5px 22px 4px rgba(0,0,0,0.2);display:block;height:200px;margin:-6rem 0 0 0;overflow:hidden;position:relative;width:100%;z-index:5;@media (min-width:769px){height:370px;}&::before{opacity:0.4;content:\"\";width:100%;height:100%;position:absolute;left:0;top:0;z-index:2;background-image:linear-gradient( 180deg,rgba(0,0,0,0.16) 0%,rgba(0,0,0,0.8) 100% );}"], slideInUp);
const ContentArea = external_styled_components_default().section.withConfig({
  displayName: "styles__ContentArea"
})(["width:100%;display:block;padding:3rem 2rem;@media (min-width:769px){padding:7rem 14rem;}.content-area__heading{display:block;width:100%;h2{display:block;font-family:\"jetbrains_mono_nlbold\";font-size:2rem;line-height:3rem;font-weight:normal;margin-bottom:2rem;@media (min-width:769px){font-size:3rem;line-height:4rem;}}}.content-area__post{display:block;width:100%;p{color:#222222;display:block;margin-bottom:2rem;font-family:\"Montserrat\";font-size:1.4rem;line-height:2.4rem;strong,a{font-family:\"Montserrat\";font-weight:700;}a{color:#f1c40f;text-decoration:underline;&:hover{text-decoration:none;}}}h2{font-family:\"jetbrains_mono_nlbold\";font-size:2rem;margin-bottom:1rem;}}"]);
const SectionArea = external_styled_components_default().section.withConfig({
  displayName: "styles__SectionArea"
})(["&.content-area{> div{display:flex;flex-direction:column;justify-content:center;padding:0 1.5rem;@media (min-width:769px){padding:0 6rem;}}}"]);
const SectionScreenShotArea = external_styled_components_default().section.withConfig({
  displayName: "styles__SectionScreenShotArea"
})(["display:block;width:100%;position:relative;height:100%;&.image-container{width:100%;> div{position:unset !important;}.image{object-fit:contain;width:100% !important;position:relative !important;height:unset !important;}}"]);
const Carousel = external_styled_components_default().section.withConfig({
  displayName: "styles__Carousel"
})(["width:100%;display:block;padding:2rem 0;@media (min-width:769px){padding:8rem 0;}> div{position:relative;width:100%;padding:0 15px;margin:0 auto;h2{font-size:2.5rem;font-family:\"jetbrains_mono_nlbold\";position:relative;z-index:6;display:block;padding:1.5rem 0 0 1.5rem;@media (min-width:769px){font-size:3rem;}}@media (min-width:768px){width:750px;}@media (min-width:992px){width:970px;}@media (min-width:1200px){width:1140px;}&::before,&::after{display:none;content:\"\";width:60px;height:100%;position:absolute;left:15px;top:0;background:rgb(255,255,255);background:linear-gradient( 90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100% );z-index:5;}&::after{left:auto;right:15px;background:linear-gradient( -90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100% );@media (min-width:769px){right:-15px;}}&.has-many-cards{&::before,&::after{display:block;}}}.carousel{display:flex;overflow-x:auto;scroll-behavior:smooth;&::-webkit-scrollbar{display:none;}.card-link{width:350px;margin-right:2rem;flex:none;padding-top:3rem;a{> div{&:first-child{box-shadow:0 5px 13px 0px rgb(0 0 0 / 37%);}}}&:last-of-type{margin-right:0;}}}"]);
const CarouselButtons = external_styled_components_default().div.withConfig({
  displayName: "styles__CarouselButtons"
})(["width:auto;position:absolute;right:0;top:0;z-index:6;margin:26.5rem 1.5rem 0 0;display:none;@media (min-width:769px){display:block;}button{cursor:pointer;background-color:#f1c40f;width:42px;height:42px;border-radius:90px;margin:0 0.5rem;&::before{content:\"\";width:42px;height:42px;display:block;background:url(\"../arrow.svg\") no-repeat center center;transform:rotate(90deg);background-size:17px;}&#next{&::before{transform:rotate(-90deg);}}}"]);
// EXTERNAL MODULE: ./hooks/useHeader.tsx
var useHeader = __webpack_require__(2465);
// EXTERNAL MODULE: ./components/card/index.tsx + 1 modules
var card = __webpack_require__(8714);
// EXTERNAL MODULE: ./locales/translate.ts + 2 modules
var translate = __webpack_require__(6937);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/[...slug].tsx














function Page({
  page
}) {
  const {
    language
  } = (0,useHeader/* useHeader */.g)();
  const carousel = (0,external_react_.useRef)(null);
  const {
    0: hasManyCards,
    1: setHasManyCards
  } = (0,external_react_.useState)(false);
  const {
    0: hasPrevious,
    1: setHasPrevious
  } = (0,external_react_.useState)(false);
  const {
    0: hasNext,
    1: setHasNext
  } = (0,external_react_.useState)(true);

  const handlePrev = e => {
    e.preventDefault();
    const scrolled = carousel.current.scrollLeft -= carousel.current.offsetWidth;
    setHasNext(true);

    if (scrolled <= 0) {
      setHasPrevious(false);
    }
  };

  const handleNext = e => {
    e.preventDefault();
    const scrolled = carousel.current.scrollLeft += carousel.current.offsetWidth;
    const lengthCards = frontaid_content/* pages.length */.L.length * 350 - 350;

    if (scrolled > 0) {
      setHasPrevious(true);
    }
  };

  (0,external_react_.useEffect)(() => {
    if (frontaid_content/* pages.length */.L.length >= 5) {
      setHasManyCards(true);
    }
  }, [language.currentLanguage]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(global/* Main */.or, {
    className: !(page !== null && page !== void 0 && page.title) ? "page-not-found" : "",
    children: [/*#__PURE__*/jsx_runtime_.jsx(styles/* Section */.$, {
      className: "intro intro--inner",
      style: {
        backgroundColor: page === null || page === void 0 ? void 0 : page.hex,
        backgroundImage: `url(${page === null || page === void 0 ? void 0 : page.cover})`
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(global/* Container */.W2, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "intro--inner__hero",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
            children: page !== null && page !== void 0 && page.title ? language.currentLanguage === "pt-br" ? external_format_message_default()("title.jobs") : (0,translate/* eng */.P)("title.jobs") : language.currentLanguage === "pt-br" ? external_format_message_default()("not.found") : (0,translate/* eng */.P)("not.found")
          }), (page === null || page === void 0 ? void 0 : page.title) && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: language.currentLanguage === "pt-br" ? page === null || page === void 0 ? void 0 : page.title : page === null || page === void 0 ? void 0 : page.title_en
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: language.currentLanguage === "pt-br" ? page === null || page === void 0 ? void 0 : page.description : page === null || page === void 0 ? void 0 : page.description_en
            })]
          })]
        })
      })
    }), page !== null && page !== void 0 && page.title ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SectionArea, {
        className: "content-area",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(global/* Container */.W2, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Hero, {
            style: {
              backgroundImage: `url(${page === null || page === void 0 ? void 0 : page.hero})`
            }
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentArea, {
            children: [language.currentLanguage === "pt-br" && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "content-area__heading",
                dangerouslySetInnerHTML: {
                  __html: page === null || page === void 0 ? void 0 : page.heading
                }
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "content-area__post",
                dangerouslySetInnerHTML: {
                  __html: page === null || page === void 0 ? void 0 : page.content
                }
              })]
            }), language.currentLanguage === "en-us" && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "content-area__heading",
                dangerouslySetInnerHTML: {
                  __html: page === null || page === void 0 ? void 0 : page.heading_en
                }
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "content-area__post",
                dangerouslySetInnerHTML: {
                  __html: page === null || page === void 0 ? void 0 : page.content_en
                }
              })]
            })]
          })]
        })
      }), (page === null || page === void 0 ? void 0 : page.screenshot) && /*#__PURE__*/(0,jsx_runtime_.jsxs)(SectionScreenShotArea, {
        className: "image-container",
        children: [(page === null || page === void 0 ? void 0 : page.screenshot[0]) && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: page === null || page === void 0 ? void 0 : page.screenshot[0],
          alt: page === null || page === void 0 ? void 0 : page.title,
          layout: "fill",
          placeholder: "blur",
          className: "image",
          blurDataURL: page === null || page === void 0 ? void 0 : page.screenshot[0]
        }), (page === null || page === void 0 ? void 0 : page.screenshot[1]) && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: page === null || page === void 0 ? void 0 : page.screenshot[1],
          alt: page === null || page === void 0 ? void 0 : page.title,
          layout: "fill",
          placeholder: "blur",
          className: "image",
          blurDataURL: page === null || page === void 0 ? void 0 : page.screenshot[1]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Carousel, {
        id: "jobs",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: hasManyCards ? "has-many-cards" : "",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: language.currentLanguage === "pt-br" ? external_format_message_default()("title.other.jobs") : (0,translate/* eng */.P)("title.other.jobs")
          }), /*#__PURE__*/jsx_runtime_.jsx(global/* Container */.W2, {
            className: "carousel",
            ref: carousel,
            children: frontaid_content/* pages.length */.L.length === 0 ? /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "loading..."
            }) : frontaid_content/* pages.filter */.L.filter(value => {
              if (value.id !== (page === null || page === void 0 ? void 0 : page.id)) {
                return value;
              }

              return null;
            }).map(item => {
              return /*#__PURE__*/jsx_runtime_.jsx(card/* default */.Z, {
                slug: item.url,
                path: item.path,
                tags: item.tags,
                thumb: item.thumb,
                title: language.currentLanguage === "pt-br" ? item.title : item.title_en,
                description: language.currentLanguage === "pt-br" ? item.description : item.description_en
              }, item.id);
            })
          }), hasManyCards && /*#__PURE__*/(0,jsx_runtime_.jsxs)(CarouselButtons, {
            children: [hasPrevious && /*#__PURE__*/jsx_runtime_.jsx("button", {
              id: "prev",
              onClick: handlePrev
            }), hasNext && /*#__PURE__*/jsx_runtime_.jsx("button", {
              id: "next",
              onClick: handleNext
            })]
          })]
        })
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(global/* Container */.W2, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "not-found",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: language.currentLanguage === "pt-br" ? external_format_message_default()("not.found.text") : (0,translate/* eng */.P)("not.found.text")
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: language.currentLanguage === "pt-br" ? external_format_message_default()("button.go.back.home") : (0,translate/* eng */.P)("button.go.back.home")
          })
        })]
      })
    })]
  });
}
async function getStaticPaths() {
  const paths = frontaid_content/* pages.map */.L.map(page => {
    const slug = page.path.split("/").slice(1);
    return {
      params: {
        slug
      }
    };
  });
  return {
    paths,
    fallback: true
  };
}
async function getStaticProps({
  params
}) {
  const currentPath = `/${params.slug.join("/")}`;
  const page = frontaid_content/* pages.find */.L.find(page => page.path === currentPath) || {
    notfound: true
  };
  return {
    props: {
      page
    }
  };
}

/***/ }),

/***/ 2219:
/***/ ((module) => {

module.exports = require("format-message");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [90,854,656,969], () => (__webpack_exec__(5912)));
module.exports = __webpack_exports__;

})();