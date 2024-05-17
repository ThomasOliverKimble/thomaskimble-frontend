import React from "react";

function Page({ pageType, children }) {
  let typeClasses;

  switch (pageType) {
    case "page-home":
      typeClasses = "max-w-[150rem]";
      break;
    case "page-project":
      typeClasses = "";
      break;
    case "page-about":
      typeClasses = "max-w-7xl";
      break;
    default:
      typeClasses = "";
  }

  return (
    <div
      className={`relative z-0 w-full 2xl:w-[calc(100%-5rem)] mx-auto px-5 md:px-20 2xl:px-0 2xl:pl-60 py-20 md:py-24 2xl:py-10 transition-all duration-300 ease-in-out ${typeClasses}`}
    >
      {children}
    </div>
  );
}

export default Page;
