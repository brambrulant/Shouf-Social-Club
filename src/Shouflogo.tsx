import React from "react";

// create a svg react component with props
export const Shouflogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="56"
      height="18"
      viewBox="0 0 56 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0H5.75H0V5.25V10H7V15H0V18H10V13V7.75H2L10 0Z"
        fill="black"
      />
      <path
        d="M14 0H11V5.25V18H14V9L18 12V18H21V13V0H18V8L14 5V0Z"
        fill="black"
      />
      <path d="M35 0H33V18H44V13V0H42V14.75H35V0Z" fill="black" />
      <path d="M24 0H22V18H32V0L30 2V15H24L32 0H24Z" fill="black" />
      <path d="M45 0V18H47V13L56 5H47V2H56V0H45Z" fill="black" />
    </svg>
  );
};
export default Shouflogo;
