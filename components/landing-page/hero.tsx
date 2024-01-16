/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute left-0 right-0 top-56 z-0 hidden overflow-x-hidden lg:block">
        <img
          src="/heroSection.webp"
          alt="Hero section background globe"
          className="mx-auto w-full object-none object-top "
        />
      </div>
      <div className="mx-auto my-16 max-w-[672px] lg:mb-[110px] lg:mt-40 lg:max-w-[944px]">
        <h1 className="mx-auto mb-6 w-fit text-center text-4xl font-semibold md:text-5xl lg:text-6xl">
          Transcend the ordinary with our Virtual Assistant
        </h1>
        <p className="mx-auto mb-7 hidden px-4 text-center text-lg font-normal text-neutral-40 lg:mb-6 lg:block lg:text-xl">
          Friday - Virtual Assistant, where modernity and cutting-edge
          technology converge to create an unparalleled experience. We are your
          reliable companion, ready to assist you anytime, anywhere.
        </p>
        <p className="mx-auto mb-7 block px-4 text-center text-lg font-normal text-neutral-40 lg:hidden">
          {`Friday is not just a smart tool; it's a true companion in your digital
          life. Enjoy convenience with artificial intelligence and seamless
          interaction, helping you tackle every issue and challenge with ease.`}
        </p>
        <div className="flex justify-center md:mb-28 lg:hidden">
          <button className="flex cursor-pointer items-center justify-center whitespace-nowrap text-center font-semibold shadow-none outline-none active:translate-y-[0.0625rem] active:transform disabled:active:translate-y-0 disabled:text-neutral-900 disabled:shadow-none disabled:cursor-default translate-y-0 [transition:color_500ms,background-color_500ms,border-color_500ms,text-decoration-color_500ms,fill_500ms,stroke_500ms,transform] disabled:opacity-50 dark:disabled:opacity-30 dark:disabled:text-white bg-[linear-gradient(180deg,#03d2fe,#0c7d95)] text-white hover:bg-primary-90 hover:shadow-[0_4px_15px_rgba(107,109,216,0.35)] dark:bg-primary dark:text-white dark:hover:bg-primary-90 disabled:bg-neutral-30 dark:disabled:bg-neutral-700 h-12 rounded-xl px-5 py-3 text-base w-full max-w-[283px]">
            Sign up for FREE
            <svg
              width="21"
              height="20"
              fill="none"
              className="ml-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.668 10h11.667M10.5 4.167 16.333 10 10.5 15.834"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <form>
          <div className="relative top-0 mx-auto hidden w-full max-w-screen-lg items-center lg:flex">
            <div className="flex w-full items-center justify-center rounded-[34px] bg-white bg-opacity-20 p-2.5 backdrop-blur-[6px]">
              <label
                className="flex w-full cursor-text items-center justify-center gap-3 rounded-[24px] border-2 border-neutral-40 bg-white py-3 pl-4 pr-2.5"
                htmlFor="prompt"
              >
                <div className="Typewriter" data-testid="typewriter-wrapper">
                  <span className="Typewriter__wrapper"></span>
                  <span className="Typewriter__cursor">|</span>
                </div>
                <textarea
                  rows={1}
                  className="hide-scrollbar flex h-full w-full resize-none items-center justify-center border-none bg-white pl-0 text-justify text-sm font-medium leading-5 text-black outline-none transition-all duration-500 focus:placeholder-transparent focus:ring-0 dark:bg-white dark:text-neutral-900 dark:placeholder-black"
                  id="home-prompt-input"
                  placeholder="Transcend the ordinary with our Friday"
                ></textarea>
                <button
                  className="flex cursor-pointer items-center justify-center whitespace-nowrap text-center font-semibold shadow-none outline-none active:translate-y-[0.0625rem] active:transform disabled:active:translate-y-0 disabled:text-neutral-900 disabled:shadow-none disabled:cursor-default translate-y-0 [transition:color_500ms,background-color_500ms,border-color_500ms,text-decoration-color_500ms,fill_500ms,stroke_500ms,transform] disabled:opacity-50 dark:disabled:opacity-30 dark:disabled:text-white bg-[linear-gradient(180deg,#03d2fe,#0c7d95)] hover:shadow-[0px_4px_15px_0px_rgba(148,79,255,0.35)] text-white disabled:bg-neutral-30 dark:disabled:bg-neutral-700 disabled:[background-image:none] h-12 rounded-xl px-5 py-3 text-base gap-2"
                  type="submit"
                >
                  <svg width="17" height="16" fill="none" viewBox="0 0 17 16">
                    <path
                      fill="currentColor"
                      d="M6.154 6.513c.429-.096.763-.43.86-.859l.665-2.995c.195-.879 1.447-.879 1.642 0l.666 2.995c.096.429.43.763.858.86l2.996.665c.879.195.879 1.447 0 1.642l-2.995.666c-.429.096-.763.43-.86.858l-.665 2.996c-.195.879-1.447.879-1.642 0l-.666-2.995a1.134 1.134 0 0 0-.859-.86L3.16 8.822c-.879-.195-.879-1.447 0-1.642l2.995-.666Z"
                    ></path>
                  </svg>
                  Generate
                </button>
              </label>
            </div>
          </div>
          <div className="hidden lg:inline-block"></div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
