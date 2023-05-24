"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 8714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ card)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/card/styles.ts

const Article = external_styled_components_default().article.withConfig({
  displayName: "styles__Article"
})(["will-change:contents;transition:ease-in-out 0.3s;div{display:flex;flex-direction:column;&:first-child{position:relative;border-radius:12px;overflow:hidden;img{border-radius:12px;object-fit:cover;}.card-link__tags{position:absolute;right:0;bottom:0;margin:2rem;z-index:3;display:flex;li{font-family:\"jetbrains_mono_nlXBdIt\";font-size:1.4rem;color:#ffffff;margin-left:1rem;}}svg{transition:ease-in-out 0.3s;position:absolute;left:0;bottom:0;fill:#ffffff;font-size:3.6rem;margin:1.6rem;z-index:3;}> div{> div{&::before{border-radius:12px;content:\"\";width:100%;height:100%;position:absolute;top:0;left:0;z-index:2;opacity:0.6;background-image:linear-gradient( 180deg,rgba(0,0,0,0.1) 0%,#000000 110% );}}}}&:last-child{margin-top:3rem;h3{display:block;text-transform:uppercase;font-size:1.6rem;font-family:\"jetbrains_mono_nlXBdIt\";margin-bottom:2rem;}p{font-family:\"Montserrat\";font-weight:300;font-size:1.4rem;line-height:2.2rem;}}}&:hover{opacity:0.8;div{&:first-child{svg{transform:rotate(90deg);}}}}"]);
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var index_esm = __webpack_require__(3854);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/card/index.tsx







const Card = ({
  path,
  slug,
  title,
  thumb,
  description,
  tags
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Article, {
    className: "card-link",
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "[...slug]",
      as: path,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        "aria-label": title,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* HiPlusSm */.Yat, {}), /*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "card-link__tags",
            children: tags === null || tags === void 0 ? void 0 : tags.map(i => /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: i.item
            }, i.item))
          }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: thumb,
            alt: title,
            width: 350,
            height: 190,
            placeholder: "blur",
            blurDataURL: thumb
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: title
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: description
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const card = (Card);

/***/ }),

/***/ 7030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const scaleUp = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{transform:scale(1);}to{transform:scale(1.1);}"]);
const scaleDown = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{transform:scale(1.1);}to{transform:scale(1);}"]);
const scaleIntro = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{transform:scale(1.1);}to{transform:scale(1);}"]);
const fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{opacity:0;}to{opacity:1;}"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "styles__Section"
})(["&.intro{overflow:hidden;position:relative;width:100%;height:90vh;display:flex;align-items:center;justify-content:center;@media (max-width:768px){height:90vh;}h1{font-size:3.5rem;color:#ffffff;width:100%;font-family:\"jetbrains_mono_nlextrabold\";@media (max-width:768px){font-size:2.5rem;line-height:3.5rem;margin-bottom:1.5rem;}@media (max-width:375px){margin-top:5rem;}@media (min-width:991px){font-size:5rem;}}p{font-size:1.6rem;line-height:3rem;color:#ffffff;@media (min-width:992px){margin-bottom:2rem;}}&::before,&::after{content:\"\";width:100%;height:100%;position:absolute;left:0;top:0;z-index:2;background-image:linear-gradient( 180deg,#000000 0%,rgba(0,0,0,0.8) 100% );}> div{display:flex;justify-content:center;z-index:3;flex-direction:column;text-align:center;@media (min-width:992px){flex-direction:row;}}.intro__text{display:flex;flex-wrap:wrap;width:100%;margin-bottom:2rem;text-align:center;@media (min-width:600px) and (max-width:991px){margin:0 auto 2rem auto;width:54rem;}@media (min-width:992px){width:48.55rem;margin-bottom:0;}.intro-button--next{cursor:pointer;margin-right:4rem;background:transparent;transition:ease-in-out 0.3s;margin:3rem auto 0 auto;@media (min-width:992px){display:inline-block;}&:hover{transform:translateY(0.5rem);}svg{fill:#f1c40f;width:3rem;height:3rem;transform:translateY(-0.5rem);}}.intro-button--video{margin-top:2rem;display:none;@media (min-width:992px){display:flex;margin-top:0;}&:hover{background:#ffffff;}svg{fill:#111111;width:2.7rem;height:2.7rem;margin-right:1rem;}span{font-family:\"jetbrains_mono_nlextrabold\";font-size:1.3rem;}}}.intro__video{cursor:pointer;position:relative;margin:0 auto;width:80%;border-radius:12px;overflow:hidden;&.is-hidden{opacity:0;}&.is-shown{animation-name:", ";animation-duration:2s;animation-delay:5ms;animation-fill-mode:forwards;}@media (min-width:661px){width:60%;}@media (min-width:600px) and (max-width:991px){align-items:center;display:flex;justify-content:center;}@media (min-width:992px){width:50rem;}&::before,&::after{animation:", " ease-in-out 0.3s forwards;content:\"\";width:6.6rem;height:6.6rem;background-color:#ffffff;position:absolute;left:50%;top:50%;margin-top:-3.3rem;margin-left:-3.3rem;z-index:5;border-radius:90px;}&::after{z-index:4;width:10.4rem;height:10.4rem;margin-top:-5.2rem;margin-left:-5.2rem;opacity:0.3;}&__icon{position:absolute;left:50%;top:50%;margin-top:-2rem;margin-left:-2rem;z-index:5;width:4rem;height:4rem;fill:#f1c40f;}&:hover{&::after{animation:", " ease-in-out 0.3s forwards;}&::before{animation:", " ease-in-out 0.3s forwards;animation-delay:0.1s;}}> div{&::before{content:\"\";width:100%;height:100%;position:absolute;left:0;top:0;z-index:3;background-image:linear-gradient( 206deg,rgba(215,207,91,0.5) 10%,rgba(0,0,0,0.5) 100% );box-shadow:0 6px 16px 0 rgba(0,0,0,0.5);border-radius:12px;}}img{border-radius:12px;}}}&.intro.intro--inner{background-size:cover;background-position:top center;background-repeat:no-repeat;background-attachment:fixed;height:auto;&::after{display:none;}&::before{opacity:0.8;}.intro--inner__hero{display:block;padding:10rem 0 10rem;width:100%;@media (min-width:769px){padding:15rem 0 10rem;width:60rem;}h5{display:block;color:#ffffff;font-size:1.6rem;margin-bottom:1rem;@media (min-width:769px){font-size:2rem;}}h2{color:#f1c40f;font-family:\"jetbrains_mono_nlextrabold\";font-size:3rem;line-height:5.2rem;margin-bottom:1rem;@media (min-width:769px){font-size:5rem;}}p{font-size:1.5rem;}}}&.content{align-items:flex-start;display:flex;justify-content:space-between;width:100%;position:relative;flex-direction:column;#jobs{display:block;position:relative;transform:translateY(-78px);}@media (min-width:769px){flex-direction:row;}&::after{content:\"\";}.content__jobs{justify-content:flex-end;display:flex;flex-wrap:wrap;background:rgb(241,196,15);padding:2rem 15px 4rem 15px;width:100%;position:relative;@media (min-width:769px){border-top-right-radius:60px;padding:6rem 6rem 8rem 0;width:60%;}.content__jobs__title{width:100%;@media (min-width:769px){padding-left:1.5rem;width:39rem;}@media (min-width:992px){padding-left:0;width:51.5rem;}@media (min-width:1199px){width:65.5rem;}h2{font-size:2.5rem;font-family:\"jetbrains_mono_nlextrabold\";margin-bottom:2rem;width:100%;@media (min-width:769px){font-size:3rem;width:40rem;}}}}.content__jobs__cards{display:grid;grid-template-columns:1fr;grid-gap:3rem;width:100%;@media (min-width:550px) and (max-width:768px){grid-template-columns:1fr 1fr;}@media (min-width:769px){padding-left:1.5rem;width:39rem;}@media (min-width:992px){padding-left:0;grid-template-columns:1fr 1fr;width:51.5rem;}@media (min-width:1199px){width:65.5rem;}}.content__about{display:flex;flex-direction:column;width:100%;margin-right:auto;position:relative;@media (min-width:769px){padding-left:1.5rem;width:29rem;}@media (min-width:992px){width:37rem;}@media (min-width:1199px){width:42rem;}&__author{display:flex;flex-direction:column;padding:3rem 1.5rem 2rem 1.5rem;@media (min-width:769px){align-items:flex-start;padding:6rem 0 0 3rem;}.author__image{margin:0 auto 2rem 0;position:relative;height:64px;width:64px;img{border-radius:90px;}}.author__text{display:block;width:100%;p{font-size:1.4rem;font-family:\"Montserrat\";font-weight:300;line-height:2.6rem;margin-bottom:1.5rem;color:#111111;strong{font-family:\"Montserrat\";font-weight:700;}}}.author__actions{.btn--download{font-family:\"jetbrains_mono_nlextrabold\";width:auto;padding:0.4rem 2rem;border:1px solid transparent;transition:none;font-size:1.4rem;margin-bottom:4rem;display:none;svg{font-size:2rem;margin-right:1rem;}&:hover{background:#ffffff;color:#f1c40f;border:1px solid #f1c40f;svg{fill:#f1c40f;}}}}}}}"], fadeIn, scaleDown, scaleUp, scaleUp);

/***/ })

};
;