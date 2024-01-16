/* eslint-disable @next/next/no-img-element */
import React from "react";

const Introduce = () => {
  return (
    <>
      <section className="relative mx-auto my-6 w-full lg:my-0">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-10 lg:px-24">
          <img
            src="/ResponsiveVector.webp"
            alt="Video background bloom"
            className="pointer-events-none absolute left-0 top-28 -z-10 w-full -translate-y-1/2 lg:hidden"
            height="10"
            width="10"
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-screen-xl items-center justify-center rounded-lg border border-white/10 bg-neutral-700 object-cover pt-[56.25%] text-center text-3xl font-bold lg:mb-[126px] lg:mt-[327px] lg:rounded-3xl lg:text-7xl">
          <div className="absolute top-[25%] h-28 w-28 sm:top-[30%] md:top-[35%] md:h-32 md:w-32 lg:top-[40%] hidden">
            {" "}
          </div>
          <div
            className="custom-video-player absolute left-0 top-0 select-none overflow-hidden rounded-lg lg:rounded-3xl"
            style={{ width: "100%", height: "100%" }}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <iframe
                allowFullScreen={true}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                title="Friday - Transcend the ordinary"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Wz0txN_tunk?autoplay=1&amp;mute=1&amp;controls=0&amp;origin=https%3A%2F%2Fwww.imagine.art&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;fs=0&amp;widget_referrer=https%3A%2F%2Fwww.imagine.art&amp;enablejsapi=1&amp;widgetid=1"
                id="widget2"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduce;
