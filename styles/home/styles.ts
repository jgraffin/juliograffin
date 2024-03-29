import styled, { keyframes } from "styled-components";

const scaleUp = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
`;

const scaleDown = keyframes`
    from {
        transform: scale(1.1);
    }
    to {
        transform: scale(1);
    }
`;

const scaleIntro = keyframes`
    from {
        transform: scale(1.1);
    }
    to {
        transform: scale(1);
    }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Section = styled.section`
    &.intro {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
            height: 90vh;
        }

        h1 {
            font-size: 3.5rem;
            color: #ffffff;
            width: 100%;
            font-family: "jetbrains_mono_nlextrabold";

            @media (max-width: 768px) {
                font-size: 2.5rem;
                line-height: 3.5rem;
                margin-bottom: 1.5rem;
            }

            @media (max-width: 375px) {
                margin-top: 5rem;
            }

            @media (min-width: 991px) {
                font-size: 5rem;
            }
        }

        p {
            font-size: 1.6rem;
            line-height: 3rem;
            color: #ffffff;

            @media (min-width: 992px) {
                margin-bottom: 2rem;
            }
        }

        &::before,
        &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
            background-image: linear-gradient(
                180deg,
                #000000 0%,
                rgba(0, 0, 0, 0.8) 100%
            );
        }

        > div {
            display: flex;
            justify-content: center;
            z-index: 3;
            flex-direction: column;
            text-align: center;

            @media (min-width: 992px) {
                flex-direction: row;
            }
        }

        .intro__text {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            margin-bottom: 2rem;
            text-align: center;

            @media (min-width: 600px) and (max-width: 991px) {
                margin: 0 auto 2rem auto;
                width: 54rem;
            }

            @media (min-width: 992px) {
                width: 48.55rem;
                margin-bottom: 0;
            }

            .intro-button--next {
                cursor: pointer;
                margin-right: 4rem;
                background: transparent;
                transition: ease-in-out 0.3s;
                margin: 3rem auto 0 auto;

                @media (min-width: 992px) {
                    display: inline-block;
                }

                &:hover {
                    transform: translateY(0.5rem);
                }

                svg {
                    fill: #f1c40f;
                    width: 3rem;
                    height: 3rem;
                    transform: translateY(-0.5rem);
                }
            }

            .intro-button--video {
                margin-top: 2rem;
                display: none;

                @media (min-width: 992px) {
                    display: flex;
                    margin-top: 0;
                }

                &:hover {
                    background: #ffffff;
                }

                svg {
                    fill: #111111;
                    width: 2.7rem;
                    height: 2.7rem;
                    margin-right: 1rem;
                }

                span {
                    font-family: "jetbrains_mono_nlextrabold";
                    font-size: 1.3rem;
                }
            }
        }

        .intro__video {
            cursor: pointer;
            position: relative;
            margin: 0 auto;
            width: 80%;
            border-radius: 12px;
            overflow: hidden;

            &.is-hidden {
                opacity: 0;
            }

            &.is-shown {
                animation-name: ${fadeIn};
                animation-duration: 2s;
                animation-delay: 5ms;
                animation-fill-mode: forwards;
            }

            @media (min-width: 661px) {
                width: 60%;
            }

            @media (min-width: 600px) and (max-width: 991px) {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            @media (min-width: 992px) {
                width: 50rem;
            }

            &::before,
            &::after {
                animation: ${scaleDown} ease-in-out 0.3s forwards;
                content: "";
                width: 6.6rem;
                height: 6.6rem;
                background-color: #ffffff;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: -3.3rem;
                margin-left: -3.3rem;
                z-index: 5;
                border-radius: 90px;
            }

            &::after {
                z-index: 4;
                width: 10.4rem;
                height: 10.4rem;
                margin-top: -5.2rem;
                margin-left: -5.2rem;
                opacity: 0.3;
            }

            &__icon {
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: -2rem;
                margin-left: -2rem;
                z-index: 5;
                width: 4rem;
                height: 4rem;
                fill: #f1c40f;
            }

            &:hover {
                &::after {
                    animation: ${scaleUp} ease-in-out 0.3s forwards;
                }

                &::before {
                    animation: ${scaleUp} ease-in-out 0.3s forwards;
                    animation-delay: 0.1s;
                }
            }

            > div {
                &::before {
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 3;
                    background-image: linear-gradient(
                        206deg,
                        rgba(215, 207, 91, 0.5) 10%,
                        rgba(0, 0, 0, 0.5) 100%
                    );
                    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.5);
                    border-radius: 12px;
                }
            }

            img {
                border-radius: 12px;
            }
        }
    }

    &.intro.intro--inner {
        background-size: cover;
        background-position: top center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: auto;

        &::after {
            display: none;
        }

        &::before {
            opacity: 0.8;
        }

        .intro--inner__hero {
            display: block;
            padding: 10rem 0 10rem;
            width: 100%;

            @media (min-width: 769px) {
                padding: 15rem 0 10rem;
                width: 60rem;
            }

            h5 {
                display: block;
                color: #ffffff;
                font-size: 1.6rem;
                margin-bottom: 1rem;

                @media (min-width: 769px) {
                    font-size: 2rem;
                }
            }

            h2 {
                color: #f1c40f;
                font-family: "jetbrains_mono_nlextrabold";
                font-size: 3rem;
                line-height: 5.2rem;
                margin-bottom: 1rem;

                @media (min-width: 769px) {
                    font-size: 5rem;
                }
            }

            p {
                font-size: 1.5rem;
            }
        }
    }

    &.content {
        align-items: flex-start;
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: relative;
        flex-direction: column;

        #jobs {
            display: block;
            position: relative;
            transform: translateY(-78px);
        }

        @media (min-width: 769px) {
            flex-direction: row;
        }

        &::after {
            content: "";
        }

        .content__jobs {
            justify-content: flex-end;
            display: flex;
            flex-wrap: wrap;
            background: rgb(241, 196, 15);
            padding: 2rem 15px 4rem 15px;
            width: 100%;
            position: relative;

            @media (min-width: 769px) {
                border-top-right-radius: 60px;
                padding: 6rem 6rem 8rem 0;
                width: 60%;
            }

            .content__jobs__title {
                width: 100%;

                @media (min-width: 769px) {
                    padding-left: 1.5rem;
                    width: 39rem;
                }

                @media (min-width: 992px) {
                    padding-left: 0;
                    width: 51.5rem;
                }

                @media (min-width: 1199px) {
                    width: 65.5rem;
                }

                h2 {
                    font-size: 2.5rem;
                    font-family: "jetbrains_mono_nlextrabold";
                    margin-bottom: 2rem;
                    width: 100%;

                    @media (min-width: 769px) {
                        font-size: 3rem;
                        width: 40rem;
                    }
                }
            }
        }

        .content__jobs__cards {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 3rem;
            width: 100%;

            @media (min-width: 550px) and (max-width: 768px) {
                grid-template-columns: 1fr 1fr;
            }

            @media (min-width: 769px) {
                padding-left: 1.5rem;
                width: 39rem;
            }

            @media (min-width: 992px) {
                padding-left: 0;
                grid-template-columns: 1fr 1fr;
                width: 51.5rem;
            }

            @media (min-width: 1199px) {
                width: 65.5rem;
            }
        }

        .content__about {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-right: auto;
            position: relative;

            @media (min-width: 769px) {
                padding-left: 1.5rem;
                width: 29rem;
            }

            @media (min-width: 992px) {
                width: 37rem;
            }

            @media (min-width: 1199px) {
                width: 42rem;
            }

            &__author {
                display: flex;
                flex-direction: column;
                padding: 3rem 1.5rem 2rem 1.5rem;

                @media (min-width: 769px) {
                    align-items: flex-start;
                    padding: 6rem 0 0 3rem;
                }

                .author__image {
                    margin: 0 auto 2rem 0;
                    position: relative;
                    height: 64px;
                    width: 64px;

                    img {
                        border-radius: 90px;
                    }
                }

                .author__text {
                    display: block;
                    width: 100%;

                    p {
                        font-size: 1.4rem;
                        font-family: "Montserrat";
                        font-weight: 300;
                        line-height: 2.6rem;
                        margin-bottom: 1.5rem;
                        color: #111111;

                        strong {
                            font-family: "Montserrat";
                            font-weight: 700;
                        }
                    }
                }

                .author__actions {
                    .btn--download {
                        font-family: "jetbrains_mono_nlextrabold";
                        width: auto;
                        padding: 0.4rem 2rem;
                        border: 1px solid transparent;
                        transition: none;
                        font-size: 1.4rem;
                        margin-bottom: 4rem;
                        display: none;

                        svg {
                            font-size: 2rem;
                            margin-right: 1rem;
                        }

                        &:hover {
                            background: #ffffff;
                            color: #f1c40f;
                            border: 1px solid #f1c40f;

                            svg {
                                fill: #f1c40f;
                            }
                        }
                    }
                }
            }
        }
    }
`;
