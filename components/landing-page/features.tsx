import React from "react";

const Features = () => {
  return (
    <section className="relative mx-auto my-16 w-full max-w-screen-2xl px-4 md:pt-4 lg:my-[120px] lg:py-0">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-6 tablet:flex-row tablet:gap-[18px] xl:gap-2.5">
        <div className="h-full max-h-[253px] w-full max-w-[358px] border border-white border-opacity-[.15] bg-white/5 p-10 backdrop-blur-lg tablet:min-h-[209px] tablet:max-w-[238px] tablet:px-6 tablet:py-[18px] xl:max-h-[321px] xl:max-w-[367px] xl:px-[52px] xl:py-[38px]">
          <div className="flex flex-col justify-between">
            <div className="mb-16 font-medium text-neutral-40 xl:mb-[119px]">
              User Base
            </div>
            <div className="text-7xl font-bold uppercase leading-none xl:text-[102px]">
              <span>6M</span>
            </div>
          </div>
        </div>
        <div className="h-full max-h-[253px] w-full max-w-[358px] border border-white border-opacity-[.15] bg-white/5 p-10 backdrop-blur-lg tablet:min-h-[209px] tablet:max-w-[238px] tablet:px-6 tablet:py-[18px] xl:max-h-[321px] xl:max-w-[367px] xl:px-[52px] xl:py-[38px]">
          <div className="flex flex-col justify-between">
            <div className="mb-16 font-medium text-neutral-40 xl:mb-[119px]">
              Discord Community
            </div>
            <div className="text-7xl font-bold uppercase leading-none xl:text-[102px]">
              <span>38K</span>
            </div>
          </div>
        </div>
        <div className="h-full max-h-[253px] w-full max-w-[358px] border border-white border-opacity-[.15] bg-white/5 p-10 backdrop-blur-lg tablet:min-h-[209px] tablet:max-w-[238px] tablet:px-6 tablet:py-[18px] xl:max-h-[321px] xl:max-w-[367px] xl:px-[52px] xl:py-[38px]">
          <div className="flex flex-col justify-between">
            <div className="mb-16 font-medium text-neutral-40 xl:mb-[119px]">
              Images Processed
            </div>
            <div className="text-7xl font-bold uppercase leading-none xl:text-[102px]">
              <span>70M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
