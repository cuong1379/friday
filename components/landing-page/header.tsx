'use client'

import React, { useState } from "react";
import Logo from "./logo";

const Header = () => {
  const [expand, setExpand] = useState(false);
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
            <button
              onClick={() => setExpand(!expand)}
              className="flex cursor-pointer items-center justify-center whitespace-nowrap text-center font-semibold shadow-none outline-none active:translate-y-[0.0625rem] active:transform disabled:active:translate-y-0 disabled:text-neutral-900 disabled:shadow-none disabled:cursor-default translate-y-0 [transition:color_500ms,background-color_500ms,border-color_500ms,text-decoration-color_500ms,fill_500ms,stroke_500ms,transform] disabled:opacity-50 dark:disabled:opacity-30 dark:disabled:text-neutral-0 bg-neutral-30 text-neutral-900 hover:bg-neutral-40 dark:bg-neutral-700 dark:text-neutral-0 dark:hover:bg-neutral-600 h-10 w-10 rounded-xl bg-[#3D3D41]"
            >
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
      <div
        className="h-0 bg-[#061721] mx-[-1rem] mobile-menu"
        style={expand ? { height: "300px" } : {}}
      >
        <div className="pt-2 py-0 px-[32px]">
          <div className="flex flex-row justify-between py-3.5">
            <a
              target="_self"
              className="text-lg font-medium text-neutral-0"
              href="/blogs"
            >
              Blog
            </a>
          </div>
          <div className="flex flex-row justify-between py-3.5">
            <a
              target="_self"
              className="text-lg font-medium text-neutral-0"
              href="#"
            >
              Community
            </a>
          </div>
          <div className="flex flex-row justify-between py-3.5">
            <a
              target="_blank"
              className="text-lg font-medium text-neutral-0"
              href="https://imagineart.tapfiliate.com/"
            >
              Affiliate
            </a>
          </div>
          <div className="flex flex-row justify-between py-3.5">
            <a
              target="_blank"
              className="text-lg font-medium text-neutral-0"
              href="https://platform.imagine.art/"
            >
              API
            </a>
          </div>
          <div className="flex flex-row gap-4 py-4">
            <a
              title="Follow us on Facebook"
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center justify-center whitespace-nowrap text-center font-semibold shadow-none outline-none active:translate-y-[0.0625rem] active:transform disabled:active:translate-y-0 disabled:text-neutral-900 disabled:shadow-none disabled:cursor-default translate-y-0 [transition:color_500ms,background-color_500ms,border-color_500ms,text-decoration-color_500ms,fill_500ms,stroke_500ms,transform] disabled:opacity-50 dark:disabled:opacity-30 dark:disabled:text-neutral-0 bg-neutral-30 text-neutral-900 hover:bg-neutral-40 dark:bg-neutral-700 dark:text-neutral-0 dark:hover:bg-neutral-600 h-10 w-10 rounded-xl"
              href=" https://www.facebook.com/groups/imagineai"
            >
              <svg
                width="20"
                height="21"
                fill="none"
                className="cursor-pointer text-white opacity-100 transition-all duration-500"
              >
                <path
                  d="M10.862 7.68v.334H13.38l-.224 2.158h-2.294v7.994H8.177v-7.994H6.583V8.014H8.177V5.853c0-.61.148-1.37.593-1.968.432-.582 1.173-1.052 2.456-1.052l2.149.009v2.076h-1.469c-.194 0-.455.047-.675.225-.233.188-.369.484-.369.877v1.66Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width=".667"
                ></path>
              </svg>
            </a>
            <a
              title="Follow us on Reddit"
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center justify-center whitespace-nowrap text-center font-semibold shadow-none outline-none active:translate-y-[0.0625rem] active:transform disabled:active:translate-y-0 disabled:text-neutral-900 disabled:shadow-none disabled:cursor-default translate-y-0 [transition:color_500ms,background-color_500ms,border-color_500ms,text-decoration-color_500ms,fill_500ms,stroke_500ms,transform] disabled:opacity-50 dark:disabled:opacity-30 dark:disabled:text-neutral-0 bg-neutral-30 text-neutral-900 hover:bg-neutral-40 dark:bg-neutral-700 dark:text-neutral-0 dark:hover:bg-neutral-600 h-10 w-10 rounded-xl"
              href="https://www.reddit.com/r/ImagineAiArt/"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="cursor-pointer text-white opacity-100 transition-all duration-500"
              >
                <g clip-path="url(#clip0_12295_80867)">
                  <path
                    d="M24 11.553a2.42 2.42 0 0 1-.384 1.348 2.551 2.551 0 0 1-.468.545c-.182.16-.386.294-.608.399a4.419 4.419 0 0 1 .012.569 4.423 4.423 0 0 1-.012.19c0 3.86-4.702 6.996-10.504 6.996-5.801 0-10.504-3.136-10.504-6.997a4.44 4.44 0 0 1-.01-.569c.001-.063.005-.126.01-.189a2.625 2.625 0 0 1-.902-.652 2.486 2.486 0 0 1-.532-.954 2.411 2.411 0 0 1-.065-1.08c.061-.36.203-.704.416-1.006.213-.303.492-.557.819-.746a2.744 2.744 0 0 1 2.195-.235c.361.115.692.304.97.554a13.078 13.078 0 0 1 3.351-1.551 13.375 13.375 0 0 1 3.676-.569l1.333-5.98a.548.548 0 0 1 .447-.417.587.587 0 0 1 .22.004l4.414.844c.445-.732 1.38-1.046 2.206-.74.826.304 1.298 1.138 1.113 1.966-.184.828-.97 1.406-1.854 1.362-.884-.043-1.605-.695-1.7-1.537l-3.855-.775-1.171 5.377a13.227 13.227 0 0 1 6.937 2.12 2.67 2.67 0 0 1 1.324-.656 2.74 2.74 0 0 1 1.484.138c.47.183.876.49 1.167.888.291.398.456.868.475 1.353ZM6.12 13.936c.09.209.223.399.39.559.168.16.366.287.585.374.218.086.453.13.69.13.728 0 1.385-.42 1.664-1.063a1.67 1.67 0 0 0-.39-1.878 1.862 1.862 0 0 0-1.964-.374c-.673.267-1.112.895-1.112 1.592 0 .226.046.45.137.66Zm10.319 4.137a.454.454 0 0 0 .008-.658.498.498 0 0 0-.341-.14.607.607 0 0 0-.358.12 5.968 5.968 0 0 1-1.79.833 6.165 6.165 0 0 1-1.976.218 6.16 6.16 0 0 1-2.896-.589 5.93 5.93 0 0 1-.851-.496.5.5 0 0 0-.653.03.452.452 0 0 0-.032.624 6.981 6.981 0 0 0 2.105 1.033 7.21 7.21 0 0 0 2.345.295 7.164 7.164 0 0 0 3.445-.724c.352-.174.677-.318.994-.546Zm-.33-2.936c.243.003.486-.042.711-.132.226-.09.43-.223.6-.39.17-.168.303-.367.39-.585a1.65 1.65 0 0 0 .118-.685c0-.697-.44-1.325-1.112-1.592a1.862 1.862 0 0 0-1.964.374 1.67 1.67 0 0 0-.39 1.878c.279.643.917 1.132 1.646 1.132Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </a>
            <a
              title="Follow us on Discord"
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center justify-center whitespace-nowrap text-center font-semibold shadow-none outline-none active:translate-y-[0.0625rem] active:transform disabled:active:translate-y-0 disabled:text-neutral-900 disabled:shadow-none disabled:cursor-default translate-y-0 [transition:color_500ms,background-color_500ms,border-color_500ms,text-decoration-color_500ms,fill_500ms,stroke_500ms,transform] disabled:opacity-50 dark:disabled:opacity-30 dark:disabled:text-neutral-0 bg-neutral-30 text-neutral-900 hover:bg-neutral-40 dark:bg-neutral-700 dark:text-neutral-0 dark:hover:bg-neutral-600 h-10 w-10 rounded-xl"
              href="https://discord.gg/imagine-ai"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="cursor-pointer text-white opacity-100 transition-all duration-500"
              >
                <path
                  d="M20.317 4.372a19.793 19.793 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.647 12.647 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.028C.533 9.048-.32 13.582.099 18.06a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.11 13.11 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292.044.032.04.1-.006.127-.598.35-1.22.645-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.837 19.837 0 0 0 6.002-3.029.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.03-.03ZM8.02 15.333c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              title="Follow us on Instagram"
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center justify-center whitespace-nowrap text-center font-semibold shadow-none outline-none active:translate-y-[0.0625rem] active:transform disabled:active:translate-y-0 disabled:text-neutral-900 disabled:shadow-none disabled:cursor-default translate-y-0 [transition:color_500ms,background-color_500ms,border-color_500ms,text-decoration-color_500ms,fill_500ms,stroke_500ms,transform] disabled:opacity-50 dark:disabled:opacity-30 dark:disabled:text-neutral-0 bg-neutral-30 text-neutral-900 hover:bg-neutral-40 dark:bg-neutral-700 dark:text-neutral-0 dark:hover:bg-neutral-600 h-10 w-10 rounded-xl"
              href="https://www.instagram.com/imagine_ai_app/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="cursor-pointer text-white opacity-100 transition-all duration-500"
              >
                <path
                  d="M11.9916 1.0106C7.48955 1.0106 3.21443 0.610121 1.58151 4.80093C0.907011 6.53181 1.00496 8.77972 1.00496 11.9985C1.00496 14.8229 0.91445 17.4775 1.58151 19.1947C3.21071 23.388 7.52055 22.9863 11.9891 22.9863C16.3002 22.9863 20.7451 23.4351 22.3979 19.1947C23.0736 17.4465 22.9745 15.2321 22.9745 11.9985C22.9745 7.70598 23.2113 4.93483 21.1295 2.85431C19.0217 0.746508 16.1712 1.0106 11.9866 1.0106H11.9916ZM11.0071 2.9907C20.398 2.97582 21.5932 1.93184 20.9336 16.4348C20.6993 21.5642 16.7936 21.0012 11.9928 21.0012C3.23923 21.0012 2.98754 20.7508 2.98754 11.9935C2.98754 3.13452 3.68187 2.99566 11.0071 2.98822V2.9907ZM17.8562 4.81457C17.1284 4.81457 16.5382 5.40475 16.5382 6.13256C16.5382 6.86037 17.1284 7.45056 17.8562 7.45056C18.584 7.45056 19.1742 6.86037 19.1742 6.13256C19.1742 5.40475 18.584 4.81457 17.8562 4.81457ZM11.9916 6.35574C8.87574 6.35574 6.3501 8.88263 6.3501 11.9985C6.3501 15.1143 8.87574 17.6399 11.9916 17.6399C15.1074 17.6399 17.6318 15.1143 17.6318 11.9985C17.6318 8.88263 15.1074 6.35574 11.9916 6.35574ZM11.9916 8.33584C16.8333 8.33584 16.8395 15.6611 11.9916 15.6611C7.15106 15.6611 7.14362 8.33584 11.9916 8.33584Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
