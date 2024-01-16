import React from "react";
import Logo from "./logo";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="header-dashboard bg-[rgba(0, 0, 0, 0.08)] sticky top-0 z-10 overflow-hidden bg-opacity-5 px-4 pb-[1px] pt-[5px] transition-all duration-500 md:px-6 lg:px-10">
      <div className="mx-auto flex h-16 w-full max-w-full items-center justify-between overflow-hidden">
        <Logo />
        <nav className="lg:absolute lg:inset-0 lg:mx-auto lg:h-full lg:w-fit">
          <div className="hidden h-full items-center gap-3 px-[18px] lg:flex">
            <a
              target="_self"
              className="relative flex h-full items-center justify-center px-4 text-sm font-semibold transition-all duration-500 after:absolute after:inset-x-0 after:bottom-[1px] after:mx-auto after:h-0.5 after:max-w-[calc(100%-32px)] after:rounded-t-xl after:bg-neutral-0 after:opacity-0 after:transition-all after:content-[''] after:duration-500 hover:after:opacity-100 disabled:pointer-events-none disabled:opacity-70"
              data-state="closed"
              href="/blogs"
            >
              Blog
            </a>
            <a
              target="_self"
              className="relative flex h-full items-center justify-center px-4 text-sm font-semibold transition-all duration-500 after:absolute after:inset-x-0 after:bottom-[1px] after:mx-auto after:h-0.5 after:max-w-[calc(100%-32px)] after:rounded-t-xl after:bg-neutral-0 after:opacity-0 after:transition-all after:content-[''] after:duration-500 hover:after:opacity-100 disabled:pointer-events-none disabled:opacity-70"
              data-state="closed"
              href="#"
            >
              Community
            </a>
            <a
              target="_blank"
              className="relative flex h-full items-center justify-center px-4 text-sm font-semibold transition-all duration-500 after:absolute after:inset-x-0 after:bottom-[1px] after:mx-auto after:h-0.5 after:max-w-[calc(100%-32px)] after:rounded-t-xl after:bg-neutral-0 after:opacity-0 after:transition-all after:content-[''] after:duration-500 hover:after:opacity-100 disabled:pointer-events-none disabled:opacity-70"
              data-state="closed"
              href="https://imagineart.tapfiliate.com/"
            >
              Affiliate
            </a>
            <a
              target="_blank"
              className="relative flex h-full items-center justify-center px-4 text-sm font-semibold transition-all duration-500 after:absolute after:inset-x-0 after:bottom-[1px] after:mx-auto after:h-0.5 after:max-w-[calc(100%-32px)] after:rounded-t-xl after:bg-neutral-0 after:opacity-0 after:transition-all after:content-[''] after:duration-500 hover:after:opacity-100 disabled:pointer-events-none disabled:opacity-70"
              data-state="closed"
              href="https://platform.imagine.art/"
            >
              API
            </a>
            <button
              className="cursor-pointer whitespace-nowrap text-center shadow-none outline-none active:transform disabled:active:translate-y-0 disabled:text-neutral-900 disabled:shadow-none disabled:cursor-default translate-y-0 [transition:color_500ms,background-color_500ms,border-color_500ms,text-decoration-color_500ms,fill_500ms,stroke_500ms,transform] disabled:opacity-50 dark:disabled:opacity-30 dark:disabled:text-neutral-0 relative flex h-full items-center justify-center px-4 text-sm font-semibold transition-all duration-500 after:absolute after:inset-x-0 after:bottom-[1px] after:mx-auto after:h-0.5 after:max-w-[calc(100%-32px)] after:rounded-t-xl after:bg-neutral-0 after:opacity-0 after:transition-all after:content-[''] after:duration-500 hover:after:opacity-100 active:translate-y-0"
              data-state="closed"
            >
              Desktop App
            </button>
          </div>
          <div className="dark flex items-center justify-center gap-2 lg:hidden">
            <button className="flex cursor-pointer items-center justify-center whitespace-nowrap text-center font-semibold shadow-none outline-none active:translate-y-[0.0625rem] active:transform disabled:active:translate-y-0 disabled:text-neutral-900 disabled:shadow-none disabled:cursor-default translate-y-0 [transition:color_500ms,background-color_500ms,border-color_500ms,text-decoration-color_500ms,fill_500ms,stroke_500ms,transform] disabled:opacity-50 dark:disabled:opacity-30 dark:disabled:text-neutral-0 bg-neutral-30 text-neutral-900 hover:bg-neutral-40 dark:bg-neutral-700 dark:text-neutral-0 dark:hover:bg-neutral-600 h-10 w-10 rounded-xl bg-[#3D3D41]">
              <div className="flex flex-col gap-1.5">
                <div className="bg-white h-0.5 w-5 rounded-full transition-all duration-500"></div>
                <div className="bg-white h-0.5 w-5 rounded-full transition-all duration-500"></div>
              </div>
            </button>
            <a
              className="flex cursor-pointer items-center justify-center whitespace-nowrap text-center font-semibold shadow-none outline-none active:translate-y-[0.0625rem] active:transform disabled:active:translate-y-0 disabled:text-neutral-900 disabled:shadow-none disabled:cursor-default translate-y-0 [transition:color_500ms,background-color_500ms,border-color_500ms,text-decoration-color_500ms,fill_500ms,stroke_500ms,transform] disabled:opacity-50 dark:disabled:opacity-30 dark:disabled:text-neutral-0 bg-[#03d2fe] text-neutral-0 hover:bg-[#5fe3ff] hover:shadow-[0_4px_15px_rgba(107,109,216,0.35)] dark:bg-[#03d2fe] dark:text-neutral-0 dark:hover:bg-[#5fe3ff] disabled:bg-neutral-30 dark:disabled:bg-neutral-700 h-10 rounded-[10px] px-4 py-2.5 text-sm min-w-[112px]"
              href="/settings"
            >
              Launch App
            </a>
          </div>
        </nav>
        <div className="hidden h-full flex-row items-center justify-center gap-2 lg:flex">
          <a
            className="relative flex h-full items-center justify-center px-4 py-2.5 text-sm font-semibold transition-all duration-500 after:absolute after:inset-x-0 after:bottom-[1px] after:mx-auto after:h-0.5 after:max-w-[calc(100%-32px)] after:rounded-t-xl after:bg-neutral-0 after:opacity-0 after:transition-all after:content-[''] after:duration-500 hover:after:opacity-100"
            href="/auth/login"
          >
            Sign in
          </a>
          <a
            className="cursor-pointer items-center justify-center whitespace-nowrap text-center font-semibold shadow-none outline-none active:translate-y-[0.0625rem] active:transform disabled:active:translate-y-0 disabled:text-neutral-900 disabled:shadow-none disabled:cursor-default translate-y-0 [transition:color_500ms,background-color_500ms,border-color_500ms,text-decoration-color_500ms,fill_500ms,stroke_500ms,transform] disabled:opacity-50 dark:disabled:opacity-30 dark:disabled:text-neutral-0 bg-primary text-neutral-0 hover:bg-primary-90 hover:shadow-[0_4px_15px_rgba(107,109,216,0.35)] dark:bg-primary dark:text-neutral-0 dark:hover:bg-primary-90 disabled:bg-neutral-30 dark:disabled:bg-neutral-700 h-10 rounded-[10px] px-4 py-2.5 text-sm hidden lg:block"
            href="/settings"
          >
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
