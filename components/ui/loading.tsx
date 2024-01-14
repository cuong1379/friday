"use client";

export interface ILoading {
  isLoading: boolean;
  isFullWidth?: boolean;
  showLoadingIcon?: boolean;
  showLoadingBackground?: boolean;
  loadingText?: string;
}

export function Loading({
  isLoading,
  isFullWidth,
  showLoadingIcon = true,
  showLoadingBackground = true,
  loadingText
}: ILoading) {
  return !isLoading ? null : (
    <div
      className={`loading-overlay is-active ${
        isFullWidth ? "is-full-page" : ""
      }`}
    >
      {showLoadingBackground && <div className="loading-background" />}
      {showLoadingIcon && <div className="loading-icon" />}
      {loadingText && <div className="loading-text ml-2">{loadingText}</div>}
      <style jsx>{`
        .loading-overlay {
          bottom: 0;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          align-items: center;
          display: none;
          justify-content: center;
          overflow: hidden;
          z-index: 999;

          .loading-background {
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            background: hsla(0, 0%, 100%, 0.5);
          }

          .loading-icon {
            position: relative;
            width: 48px;
            height: 48px;

            border: 3px solid var(--primary);
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;

            &:after {
              content: "";
              box-sizing: border-box;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 56px;
              height: 56px;
              border-radius: 50%;
              border: 3px solid;
              border-color: var(--primary) transparent;
            }
          }

          &.is-active {
            display: flex;
          }

          &.is-full-page {
            position: fixed;

            .loading-icon:after {
              top: calc(50% - 40px);
              left: calc(50% - 40px);
              width: 72px;
              height: 72px;
            }
          }
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
