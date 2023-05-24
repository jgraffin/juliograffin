exports.id = 656;
exports.ids = [656];
exports.modules = {

/***/ 2465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ HeaderProvider),
/* harmony export */   "g": () => (/* binding */ useHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const HeaderContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

const HeaderProvider = ({
  children
}) => {
  const {
    0: language,
    1: setLanguage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    currentLanguage: getLanguageFromLocalStorage()
  });

  const switchLanguage = lang => {
    if (lang === "pt-br") {
      setLanguage({
        currentLanguage: "pt-br"
      });
    } else {
      setLanguage({
        currentLanguage: "en-us"
      });
    }
  };

  function getLanguageFromLocalStorage() {
    if (false) {}
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    localStorage.setItem("currentLanguage", String(language.currentLanguage));
  }, [language.currentLanguage]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(HeaderContext.Provider, {
    value: {
      switchLanguage,
      language
    },
    children: children
  });
};

const useHeader = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(HeaderContext);

  if (!context) {
    throw new Error("useHeader must be used within an HeaderProvider");
  }

  return context;
};



/***/ }),

/***/ 6937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ eng)
});

// EXTERNAL MODULE: external "format-message"
var external_format_message_ = __webpack_require__(2219);
var external_format_message_default = /*#__PURE__*/__webpack_require__.n(external_format_message_);
;// CONCATENATED MODULE: ./locales/pt-BR/translation.json
const translation_namespaceObject = JSON.parse('{"application":"Julio Graffin","screen.home.intro.title":"Olá! <br/>Eu sou o Julio!","screen.home.intro.description":"Trabalho como desenvolvedor front-end e busco entregar sempre um bom produto digital. Estes são alguns principais trabalhos.","screen.home.video":"https://youtu.be/hmHXtyneUYU","screen.home.videoAlt":"Vídeo apresentação","title.jobs":"trabalhos","title.other.jobs":"outros trabalhos","title.contact":"contato","button.download":"baixar CV","button.go.back.home":"voltar para home","button.scroll.down":"Scrollar tela para seção trabalhos","text.rights":"juliograffin.com / Todos os direitos reservados","not.found":"nada encontrado aqui 😞","not.found.text":"Opaaa! Parece que você digitou algo errado, ou essa página já não existe mais.","author.text":"<p>Sou <strong>Julio Cezar Ferreira</strong>. Iniciei minhas atividades na área de TI em 2010, atuando primeiramente como web designer, em uma agência de publicidade que se chamava <strong>Refinaria Ilimitada</strong>.</p><p>Fiz layouts institucionais, landing pages, hotsites para campanhas publicitárias e portais. Até então tinha pouca experiência na parte de codificação, o que mudou quando comecei a dar manutenção em alguns sites que a agência me passava como tarefa.</p><p>Depois iniciei com programação visual dos elementos de tela, nesse caso, o Javascript(lado cliente), a tecnologia que “dá a vida” ao que visualizamos em tela e interagimos.</p><p>Atuei no Centro Educacional de EAD <strong>Uninter</strong>, onde desenvolvi uma plataforma de estudos que antes era feita em Flash, onde transcrevi todo o código para HTML.</p><p>Após isso, trabalhei na <strong>Aliens Design</strong>, uma agência de plublicidade de Curitiba, onde aprendi muito e pude entregar muito valor nos projetos da empresa.</p><p>Trabalhei na <strong>Sabion Digital</strong>, empresa que fica em São Paulo. Atuei no cliente deles, a <strong>Bradesco Seguros</strong>, como designer UI, e também na agência, como desenvolvedor frontend.</p><p>Hoje estou na <strong>Objective Solutions</strong>, uma grande empresa de software do Brasil. Trabalho dentro do cliente deles, a <strong>Liferay</strong>. Atuo na plataforma Liferay DXP, onde lido com tecnologias diversas, como Java e outros frameworks Javascript.</p>"}');
;// CONCATENATED MODULE: ./locales/en-US/translation.json
const en_US_translation_namespaceObject = JSON.parse('{"application":"Julio Graffin","screen.home.intro.title":"Hi! <br/>I am Julio!","screen.home.intro.description":"I work as front-end developer and I always try to deliver a good digital product. These are some main projects I\'ve worked.","screen.home.video":"https://youtu.be/SBjQ9tuuTJQ","screen.home.videoAlt":"Presentation video","title.jobs":"jobs","title.other.jobs":"other jobs","title.contact":"contact","button.download":"download CV","button.go.back.home":"go back to home","button.scroll.down":"Scroll screen to work section","text.rights":"juliograffin.com / All Rights Reserved","not.found":"nothing found here 😞","not.found.text":"Ooops! Seems you\'ve type something wrong, or this page no longer exists.","author.text":"<p>I\'m Julio Graffin. I started my activities in IT area in 2010, acting firstly as web designer, in an advertise agency called <strong>Refinaria Ilimitada</strong>, the place where I\'ve learned a lot, and it was the beginning of my passion with website development.</p><p>I built some institutional layouts, landing pages, hotsites for advertise campaigns and portals. At this point I used to have a bit of experience as trainee in coding, what it changed when I started to code as mantainer of some sites that agency have passed me as tasks.</p><p>After that, I started with interactions, in this case, Javascript(client side), tecnology that \'gives life\' to elements in the screen.</p><p>I worked at <strong>Uninter EAD Educational Center</strong>, where I\'ve re-write a studies platform that was made with Flash, where my objective it was to switch everything up to HTML code.</p><p>After that I\'ve worked at <strong>Aliens Design</strong>, an advertise agency at Curitiba, where I\'ve learned a bunch of things and where I could deliver a lot of value to the company\'s projects aswell.</p><p>I\'ve worked at <strong>Sabion Digital</strong>, a digital agency based in São Paulo. I acted in its client, <strong>Bradesco Seguros</strong> as designer UI, and also in the agency as developer frontend.</p><p>Nowadays I\'m at <strong>Objective Solutions</strong>, a big software company at Brasil. I work in its client, <strong>Liferay</strong>. I act in Liferay DXP, where I usually handle with some tecnologies like Java, and other Javascript frameworks.</p>"}');
;// CONCATENATED MODULE: ./locales/translate.ts



const eng = external_format_message_default().namespace();
external_format_message_default().setup({
  locale: "pt",
  translations: {
    pt: translation_namespaceObject
  },
  missingTranslation: "ignore"
});
eng.setup({
  locale: "en",
  translations: {
    en: en_US_translation_namespaceObject
  },
  missingTranslation: "ignore"
});


/***/ }),

/***/ 8364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "or": () => (/* binding */ Main),
/* harmony export */   "W2": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*{margin:0;padding:0;outline:0;border:0;box-sizing:border-box;scrollbar-width:thin;font-family:\"jetbrains_monothin\";font-weight:normal;list-style-type:none;}.ReactModal__Overlay{padding:15px !important;}.ReactModal__Body--open{*{cursor:url(\"../window-close.svg\") 30 30,move;}}.ReactModal__Content{border-radius:8px !important;padding:0 !important;@media (max-width:992px){position:relative !important;margin-right:0 !important;}}.video-container{@media (max-width:992px){position:relative;padding-bottom:56.25%;padding-top:0;height:0;overflow:hidden;}}.video-container iframe,.video-container object,.video-container embed{@media (max-width:992px){position:absolute;top:0;left:0;width:100%;height:100%;}}button{background-color:transparent;}.btn{cursor:pointer;background:#f1c40f;display:inline-flex;align-items:center;justify-content:center;border-radius:90px;height:4.2rem;width:11.3rem;padding:0.5rem 1.4rem;transition:ease-in-out 0.3s;}html,body{font-size:62.5%;}body::-webkit-scrollbar{width:1em;}body::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,0.3);}body::-webkit-scrollbar-thumb{background-color:#f1c40f;outline:1px solid #f1c40f;}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);
const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default().main.withConfig({
  displayName: "global__Main"
})(["display:flex;flex-direction:column;min-height:100vh;&.page-not-found{min-height:100%;margin-bottom:10%;.not-found{display:flex;width:100%;flex-direction:column;padding:5rem 25rem 0 25rem;p{display:block;font-size:2.3rem;margin-bottom:3rem;}a{font-family:\"jetbrains_mono_nlextrabold\";width:28rem;padding:1rem 0 1rem 2rem;transition:none;font-size:1.8rem;background-color:#f1c40f;text-align:center;display:block;position:relative;border:1px solid transparent;border-radius:90px;&::before{content:\"\";width:20px;height:20px;position:absolute;left:0;top:0;z-index:2;background:url(\"../arrow.svg\") no-repeat center center;background-size:16px;transform:rotate(90deg);margin:1.5rem 1.6rem 0 2.5rem;}&:hover{background:#ffffff;color:#111111;border:1px solid #111111;}}}}"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "global__Container"
})(["display:flex;width:100%;padding:0 15px;margin:0 auto;@media (min-width:768px){width:750px;}@media (min-width:992px){width:970px;}@media (min-width:1200px){width:1140px;}"]);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 956:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"L":[{"id":"0","url":"bradesco-seguros-app","path":"/bradesco-seguros-app","tags":[{"item":"#layout"},{"item":"#frontend"}],"thumb":"/screenshots/bradesco-seguros-thumb.jpeg","cover":"/screenshots/bradesco-seguros-thumb.jpeg","hero":"/screenshots/bradesco-seguros-app-cover.png","title":"Aplicativo - Empresa de Seguros Bradesco Seguros Celular","title_en":"App - Insurance company Bradesco Seguros Celular","hex":"#C10F45","heading":"<h2>A experiência que tive ao trabalhar em uma das maiores empresas financeiras de seguros do Brasil.</h2>","heading_en":"<h2>The experience I had working in one of the biggests insurance financial at Brazil.</h2>","content":"<p>Trabalhei na agência <a href=\'http://sabion.com.br/\' target=\'_blank\' rel=\'noopener noreferrer\'>Sabion Digital</a>, e tive o privilégio de atuar em um dos seus grandes clientes e uma das maiores seguradoras do Brasil, a <strong>Bradesco Seguros</strong>.<p>Iniciei no final de 2017 e atuei primeiramente no time de design UI. Obtive muita experiência desenhando as telas do app atual da empresa, e atuando na implementação de novas funcionalidades.</p><h2>O desafio do design</h2><p>Tive junto do time de design UI e UX o desafio de trabalhar no novo conceito da experiência digital da empresa, e durante o processo de ideação e criação, continuar dando suporte e desenvolver as novas funcionalidades dentro do app atual.</p><p>Esse sem dúvida foi pra mim um projeto do qual adquiri muita experiência em <strong>design atômico</strong>, <strong>tokenização</strong>, <strong>design sprint</strong> e as melhores práticas de desenvolvimento de software, onde o único objetivo era a entrega de valor ao produto para o cliente final.</p><h2>Conceitos base</h2><p>Trabalho focado no conceito <a href=\'https://bradfrost.com/blog/post/atomic-web-design/\' target=\'_blank\' rel=\'noopener noreferrer\'>Atomic Design</a>, onde basicamente o layout, a sua parte visual foi desenvolvida respeitando o conceito atômico, onde tudo e qualquer elemento de tela é subdivido em partes menores.</p><p>Dessa forma é possível reutilizar esses elementos visuais, juntá-los em diferentes contextos, contudo mantendo a mesma linguagem visual da empresa, tendo assim uma experiência <strong>ominichannel</strong>.</p><h2>O desafio do frontend</h2><p>Após muito trabalho feito no setor de design, surgiu uma oportunidade de trabalhar na área de TI. Como já tinha experiência nas telas que havia criado, foi bem fácil de dar continuidade no trabalho de codificação.</p><p>Atuei com um time super profissional, onde adquiri bastante experiência no desenvolvimento de software de ponta-a-ponta.</p>","content_en":"<p>I\'ve worked at <a href=\'http://sabion.com.br/\' target=\'_blank\' rel=\'noopener noreferrer\'>Sabion Digital</a> agency, and I had the privilege to act in one of them big clients and one of the biggests insurance financial at Brazil, <strong>Bradesco Seguros</strong>.<p>I started at the end of 2017 and I\'ve acted firstly in design UI team. I had a bunch of experience drawing some screens to the current company\'s app, and implementing new features aswell.</p><h2>The design challenge</h2><p>I got with design UI and UX team the challenge to work in a new digital experience concept of the company, and throughout the idea and creation, keep giving support and develop new features within current app.</p><p>This one it was no doubt a project in which I got a lot of experience by working with <strong>atomic design</strong>, <strong>tokenization</strong>, <strong>design sprint</strong> and the best software development practices, where the only objective it was to delivering the value within a product to the final customer.</p><h2>Basic concepts</h2><p>Work focused in <a href=\'https://bradfrost.com/blog/post/atomic-web-design/\' target=\'_blank\' rel=\'noopener noreferrer\'>Atomic Design</a> concept, where basically the layout, in its visual was developed respecting the atomic concept, where everything and any element on the screen is subdividedin small pieces.</p><p>So it is possible re-use these visual elements, join them in different contexts, however holding on the same visual language of the company, having an <strong>ominichannel</strong> experience.</p><h2>The frontend challenge</h2><p>After a lot of work at design sector, an opportunity at IT sector has been raised. As I already had experience on screens, it was easier to carry on code work.</p><p>I acted with a super professional team, where I got a bunch of experience in software end-to-end development.</p>","description":"A experiência que tive ao trabalhar em uma das maiores empresas financeiras de seguros do Brasil.","description_en":"The experience I had working in one of the biggests insurance financial at Brazil.","screenshot":""},{"id":"1","url":"atlas-da-acidentalidade-volvo","path":"/atlas-da-acidentalidade-volvo","tags":[{"item":"#frontend"}],"thumb":"/screenshots/volvo-atlas-thumb.png","cover":"/screenshots/volvo-atlas-cover.png","hero":"/screenshots/volvo-atlas-hero.png","title":"Volvo - Atlas da Acidentalidade no Transporte Brasileiro","title_en":"Volvo - Atlas of Accidents in Brazilian Transport","hex":"#EFEFEF","heading":"<h2>Um projeto da Volvo com o objetivo de indicar as rodovias com os índices de acidentes em todo o Brasil.</h2>","heading_en":"<h2>A Volvo\'s project with an objective of indicate a summary road accidents througout Brazil.</h2>","content":"<p>Um dos primeiros projetos em que atuei na agência <a href=\'https://www.aliensdesign.com.br/\' target=\'_blank\' rel=\'noopener noreferrer\'>Aliens Design</a>, onde o desafio foi desenvolver toda a parte frontend do website do Grupo Volvo, o <strong>Atlas da Acidentalidade no Transporte Brasileiro</strong>.</p><p>Trabalhei com um time de desenvolvimento com o intuito de escrever o código dos componentes do site, e por fim juntá-los aplicando-os às páginas e montando o fluxo de navegação.</p><p>De acordo com a agência, o projeto é o mais completo material sobre acidentes rodoviários já publicado no Brasil. No site é possível fazer cruzamentos estatísticos de acidentes a partir de 2007 em diante, tendo atualizações anuais.</p><p>Esse estudo foi desenvolvido pelo programa <strong>Volvo de Segurança no Trânsito</strong>.</p>","content_en":"<p>One of the first projects that I\'ve worked at <a href=\'https://www.aliensdesign.com.br/\' target=\'_blank\' rel=\'noopener noreferrer\'>Aliens Design</a> agency, in which the challenge was to develop all of the frontend part from the Volvo Group, the <strong>Atlas of Accidents in Brazilian Transport</strong>.</p><p>I\'ve worked with a development team in order to write the components code of the site, and by the end joining them applying to the pages and then building the navigation flux.</p><p>According to agency, this project is the most complete material about road accidents ever published in Brazil. In this website it is possible to make statistic crossing accidents from 2007 and so on, getting anual updates.</p><p>This study was developed by <a href=\'https://pvst.com.br/\' target=\'_blank\' rel=\'noopener noreferrer\'>Volvo de Segurança no Trânsito</a>.</p>","description":"Projeto realizado pela Aliens Design, atuei como desenvolvedor na parte de codificação de alguns componentes e páginas do site.","description_en":"Project made by Aliens Design. I acted as developer by building some pages and components of the site.","screenshot":["/screenshots/volvo-atlas-screenshot-1.png","/screenshots/volvo-atlas-screenshot-2.png"]},{"id":"2","url":"voam-volvo-odontologia-e-assistencia-medica","path":"/voam-volvo-odontologia-e-assistencia-medica","tags":[{"item":"#frontend"}],"thumb":"/screenshots/voam-cover.jpg","cover":"/screenshots/voam-cover.jpg","hero":"/screenshots/voam-hero.png","title":"Volvo - Voam Odontologia e Assistência Médica","title_en":"Volvo - Voam Dentistry and Medical Assistance","hex":"#A0776A","heading":"<h2>Plano de saúde para funcionários e dependentes da Volvo</h2>","heading_en":"<h2>Healthy insurance to employees and dependants in Volvo</h2>","content":"<p>Na agência <a href=\'https://www.aliensdesign.com.br/\' target=\'_blank\' rel=\'noopener noreferrer\'>Aliens Design</a>, o Voam, plano de saúde da Volvo para funcionários e dependentes foi desenvolvido para servir de ferramenta e também institucional dos serviços prestados para seus colaboradores.</p><p>Trabalhei em conjunto com um excelente time de desenvolvimento e web design, com o propósito de entregar a melhor experiência e produto para uma das maiores empresas de referência em segurança no mundo.</p><p>Atuamos na parte de componentização do projeto, onde o layout era entregue de forma particionada e montávamos parte por parte, a fim de estruturar o website da melhor forma possível, obtendo performance e aplicando as melhores práticas da web para um desenvolvimento escalável e simples manutenção.</p><p>Foi usado o CMS próprio da <strong>Aliens Design</strong>, o que facilitava no gerenciamento de conteúdo do site.</p>","content_en":"<p>In <a href=\'https://www.aliensdesign.com.br/\' target=\'_blank\' rel=\'noopener noreferrer\'>Aliens Design</a> agency, Voam, the Volvo\'s insurance healthy to employees and dependants was developed to provide a tool and also a institutional of services delivered to its colaborators.</p><p>I\'ve worked with an excellent development and design team, with an objective to deliver the best experience and product to one of the biggest insurance companies in the world.</p><p>We\'ve acted in the project componentization, where the layout was delivered as partials and we use to build bit by bit, in order to structure the website with the best possible strategy, gaining performance and applying the best practices of the web, in order to have a scalable development and a simple maintainment.</p><p>It was used the <strong>Aliens Design</strong> CMS, what turned easy the website management.</p>","description":"Website institucional que também compõe um serviço de busca na área de odontologia.","description_en":"Institutional website that also provides a query service in dentistry area.","screenshot":["/screenshots/voam-screenshot-1.png","/screenshots/voam-screenshot-2.png"]},{"id":"3","url":"guandalini-sampaio-advogados","path":"/guandalini-sampaio-advogados","tags":[{"item":"#layout"}],"thumb":"/screenshots/guandalini-cover.png","cover":"/screenshots/guandalini-cover.png","hero":"/screenshots/guandalini-hero.png","title":"Guandalini Sampaio Advogados","title_en":"Guandalini Sampaio Lawyers","hex":"#242325","heading":"<h2>Firma de advocacia em Curitiba</h2>","heading_en":"<h2>Law firm at Curitiba</h2>","content":"<p>Recebi a proposta de desenvolver um layout para uma firma de advocacia.<br>Foi um projeto bem curto e de rápida aplicação. Recebi apenas o logotipo e iniciei os trabalhos de pesquisa de cores, referências visuais e como poderia de forma rápida e simples explicar os conceitos de trabalho em apenas uma tela.</p><p>O layout foi desenvolvido com o intuito de servir de template para o <strong>WordPress</strong>, portanto as áreas já estavam pré-definidas em como deveria ser estruturado. Acabou sendo um caso de estudo para templates institucionais, o que achei bem interessante ao construir.</p><p>Nessa visão do layout temos apenas um <strong>Lorem Ipsum</strong> que nada mais é do que um \'teste\' para textos no sentido comportamental, assim como também as imagens adicionadas ao site. Assim, já estavam pré-definidas as áreas que seriam aplicados os conteúdos dinâmicos do website.</p>","content_en":"<p>I accepted a deal to develop a layout to a law firm.<br> It was a very short and quick project. I got only the logo, then I started the job by making color researches, visual references and how I could do that in a simple and straightforward way to explain the work concepts at just one screen.</p><p>The layout was developed with an intention to serve as a <strong>WordPress</strong> template, hence the areas were already pre-defined in how to be structured. It turned out a study case for institutional template, in which I figured insteresting to build.</p><p>In this layout vision we have just a <strong>Lorem Ipsum</strong> in which is a \'test\' for texts in behaviour sense, as well as the images added to the site. Thus, the areas that would be applied to the website\'s dynamic content were already pre-defined.</p>","description":"Aceitei a proposta de desenvolver um layout para uma firma de advocacia. Foi um projeto bem curto e rápido.","description_en":"I accepted a deal to develop a layout to a law firm. It was a very short and quick project.","screenshot":["/screenshots/guandalini-full-page.png"]},{"id":"4","url":"rick-and-morty-api","path":"/rick-and-morty-api","tags":[{"item":"#studies"}],"thumb":"/screenshots/rick-and-morty-cover.jpeg","cover":"/screenshots/rick-and-morty-cover.jpeg","hero":"/screenshots/rick-and-morty-hero.png","title":"API Rick and Morty","title_en":"Rick and Morty API","hex":"#14163D","heading":"<h2>O caso de estudo</h2>","heading_en":"<h2>The study case</h2>","content":"<p>Gosto muito das aventuras de Ricky And Morty e melhor ainda foi poder brincar com a <a href=\'https://rickandmortyapi.com\' target=\'_blank\' rel=\'noopener noreferrer\'>api</a> deles.<br>Trata-se de um retorno de dados de todos os personagens da série.</p><p>Nessa pequena aplicação, faço uma listagem de cards de todos os personagens com uma paginação. Ao clicar no card, abre os detalhes do personagem em si, onde é possível acessar um accordion que lista todos os episódios e temporadas em que o personagem aparece se o mesmo de fato tiver muitas aparições.</p><p><strong>Vale lembrar que:</strong> Para quem ainda estiver assistindo a série, é possível que a api dê algum spoiler na lista de acontecimentos do mesmo personagem, cuidado! haha.</p><p>Acesse o <a href=\'https://rickandmortyapicasestudy.netlify.app\' target=\'_blank\' rel=\'noopener noreferrer\'>aqui</a> o link para vê-lo em ação.</p><h2>O que é uma API (Application Programing Interface)</h2><p>É basicamente uma estrutura de dados que disponibiliza de forma fácil, rápida e segura qualquer conteúdo web. Isso torna a vida do desenvolvedor muito mais fácil, já que é possível utilizar a mesma base de dados para uso tanto em sites quanto em aplicativos híbridos, como Ionic por exemplo.<br>Dessa forma, independente da plataforma em que o usuário estiver utilizando, o mesmo conteúdo será mostrado.</p><p>Alguns outros exemplos de API\'s famosas a serem listadas são: <a href=\'https://developer.marvel.com\' target=\'_blank\' rel=\'noopener noreferrer\'>Marvel API</a>, <a href=\'https://pokeapi.co/\' target=\'_blank\' rel=\'noopener noreferrer\'>Poke API</a>.</p><h2>Ferramentas de desenvolvimento</h2><p>Utilizei <strong>ReactJS</strong>, uma biblioteca de componentes criada pelo <strong>Facebook</strong> (atual Meta Platforms, Inc.), cujo objetivo primário era melhorar a performance da rede social, no entanto, tornou-se tão famosa entre os desenvolvedores que acabou se tornando um ótimo modelo de desenvolvimento de aplicações web. Hoje é utilizado tanto para <strong>websites</strong> quanto para <strong>apps</strong> (React Native).</p><p>Como é uma estrutura simples, não precisei desenhar de fato nada, ao invés montei todo o visual direto no código, utilizando <a href=\'https://styled-components.com\' target=\'_blank\' rel=\'noopener noreferrer\'>Styled Components</a>, uma biblioteca que combina Javascript e CSS, usando uma técnica chamada CSS-in-JS. Nela é possível escrever funções, exportá-las e reutiliza-las se necessário de forma rápida e prática, tornando o CSS muito mais dinâmico.</p>","content_en":"<p>I like a lot Rick And Morty adventures and better than this it was playing with their <a href=\'https://rickandmortyapi.com\' target=\'_blank\' rel=\'noopener noreferrer\'>api</a>.<br>It\'s about data returning of the serie\'s character.</p><p>In this small application, I do a cards list of all characters with a pagination. By clicking on a card, it open the character details, where is possible to access an accordion that list all of the episodes as well as the seasons in which the character has been appeared if the same one in fact has many apparitions.</p><p><strong>Just a reminder:</strong> For those who still watching the serie, it\'s possible that the api give it some spoiler in the list of events of the same character, look out! haha.</p><p>Access o <a href=\'https://rickandmortyapicasestudy.netlify.app\' target=\'_blank\' rel=\'noopener noreferrer\'>here</a> the link to see it in action.</p><h2>What is an API (Application Programing Interface)</h2><p>It\'s basically a data structure that provides in a easy, fast and secure way any web content. This turns out easier the developer\'s life, cuz is possible to use the same base structure, whatever is sites or hybrid apps, like Ionic for instance.<br>Hence, regardless the platform in which the user is using, the same content will be shown.</p><p>Some other API examples to be listed are: <a href=\'https://developer.marvel.com\' target=\'_blank\' rel=\'noopener noreferrer\'>Marvel API</a>, <a href=\'https://pokeapi.co/\' target=\'_blank\' rel=\'noopener noreferrer\'>Poke API</a>.</p><h2>Development tools</h2><p>I\'ve used <strong>ReactJS</strong>, a components library created by <strong>Facebook</strong> (current Meta Platforms, Inc.), in which first goal it was to improve the social network\'s performance, however, it became so famous among developers that turns out a great development model of web applications. Today is used to <strong>websites</strong> as well as <strong>apps</strong> (React Native).</p><p>As a simple structure, I did not draw anything, instead I\'ve built all the visual right in the code, using <a href=\'https://styled-components.com\' target=\'_blank\' rel=\'noopener noreferrer\'>Styled Components</a>, a library that combine Javascript and CSS, using a technique called CSS-in-JS. In it, it\'s possible to write functions, export them and re-use them if necessary in a straightforward way, turning out CSS much more dynamic.</p>","description":"Este foi um exercício que gostei muito de fazer. Caso de estudo da API Ricky and Morty.","description_en":"This one it was an excercise that I liked a lot doing. Study case of Ricky and Morty API.","screenshot":["/screenshots/rick-and-morty-full-page.png"]}]}');

/***/ })

};
;