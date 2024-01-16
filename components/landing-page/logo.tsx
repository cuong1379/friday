/* eslint-disable @next/next/no-img-element */

import React from "react";

const Logo = () => {
  return (
    <div>
      <a className="flex items-center" href="/">
        <img
          src="/friday-logo.gif"
          alt="Friday logo"
          className="h-10 w-10 rounded-xl"
        />
      </a>
    </div>
  );
};

export default Logo;
