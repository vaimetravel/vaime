import * as React from "react"

function SvgComponent({ size, ...props }) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      height={size}
      width={size}
      {...props}
    >
      <path
        d="M105.2 342.3h331.5v55.4H105.2zM230.3 268.4c.4 0 1.1-.2 1.8-.6.7-.4 1.5-.8 2.4-1.3 2.1-1.3 4.8-2.8 8.1-3.5 7.2-1.5 13.8 2 17.6 4.1 6.2 3.3 12 3.9 17.3 1.8.6-.3 1.3-.4 2-.5L247 244.5l-15.2-11.2c-13.9.7-26.4 6.6-35.7 15.9-9.9 9.9-16 23.5-16 38.6 0 16.1 7 30.5 18 40.5h162.5L286.8 274c.7 3.3-1 6.6-4.2 8-3.8 1.5-7.7 2.3-11.7 2.3-5.8 0-11.7-1.6-17.5-4.7-2.9-1.5-6.1-3.1-8.2-2.7-1 .2-2.4 1-3.8 1.9-1 .6-2.1 1.2-3.3 1.8-6.3 3.1-12.8 2.6-17-1.3-2.8-2.6-3-7.1-.4-9.9 2.7-2.9 6.8-3.2 9.6-1zm-10.1 36.1c1.8-3.4 6-4.8 9.4-3.1 4.2 2.2 7 3.4 10.1 3 2.8-.4 5.7-1.6 8.8-2.8.5-.2 1.1-.4 1.6-.6 4.6-1.8 9.7-3.5 15.2-3.2 6.2.3 11.4 2.9 16 5.2l1.8.9c4.9 2.4 8.9 3.3 13.6 3 .6 0 1-.1 1.4-.2 1.1-2.8 3.9-4.6 7.1-4.4 3.8.3 6.7 3.7 6.4 7.6-.4 4.9-4.3 10.4-14.1 11-.8 0-1.6.1-2.4.1-6.1 0-11.8-1.4-18.1-4.5-.6-.3-1.3-.6-1.9-1-3.7-1.8-7.1-3.6-10.4-3.7-2.7-.1-5.8.8-9.4 2.3-.5.2-1.1.4-1.6.6-3.6 1.4-7.6 3.1-12.1 3.7-7.6 1-13.6-2-18.4-4.4-3.4-1.8-4.7-6-3-9.5zM121.2 218.3c4.4 1 8.4.1 11.6-.7l1.1-.2c3.3-.7 4.3-.4 4.6-.2.3.2.9 1.1 1 2.6 0 .4-.3 1.7-.5 2.5-.7 2.7-1.6 6.4-.3 10.1 1 2.9 3.7 4.7 6.6 4.7.8 0 1.6-.1 2.3-.4 3.5-1.2 5.4-5 4.4-8.5 0-.5.3-1.7.5-2.4.5-2 1-4.2.9-6.6-.3-6.1-3.3-11.4-8-14.1-5-2.9-10.4-2.2-14.6-1.3l-1.2.3c-2.2.5-4.2.9-5.4.7-1-.2-2-1.5-2-2.5s1-2.3 2-2.5c3.8-.9 6.1-4.7 5.2-8.4s-4.7-6.1-8.4-5.2c-7.3 1.7-12.8 8.7-12.7 16.2 0 7.4 5.6 14.3 12.9 15.9zM112.9 269.7c3.2 2.3 7.2 3.5 11.5 3.5 1.6 0 3.1-.2 4.8-.5 4.7-.9 8.7-2.9 12.3-4.7 3.5-1.7 4.9-5.9 3.1-9.4-1.7-3.5-5.9-4.9-9.4-3.1-3 1.5-5.9 3-8.7 3.5-2.2.4-4.2.2-5.4-.7-1.2-.9-2.3-2.8-3.2-6l-.6-2.1c-.9-3.2-2-6.8-4.1-10.2-4.9-7.8-14.4-10.6-23.6-6.9-4.7 1.9-8.4 4.9-11.6 7.5-3 2.4-3.4 6.9-1 9.8 2.4 3 6.9 3.4 9.9 1 2.7-2.2 5.3-4.3 7.9-5.4 1.4-.6 4.8-1.5 6.6 1.4 1.1 1.7 1.8 4.1 2.5 6.6.2.8.5 1.6.7 2.4 1.1 4 3.3 9.7 8.3 13.3zM351.1 136.3l-.3.6C293 110 222.3 126.6 183 180l72.4 53.3 127.8 94.1 1.3.9h28.1c25.5-45.2 22.7-100.3-4.9-142.3.2-.1.4-.2.6-.4 8.6-7.3 13.5-17.9 13.5-29.1 0-21.1-17.1-38.2-38.2-38.2-13.3 0-25.5 6.7-32.5 18zm-57.7 27.2c-20.8 0-40.6 6.3-57.2 18.3-1.2.9-2.7 1.3-4.1 1.3-2.2 0-4.3-1-5.7-2.9-2.3-3.1-1.6-7.5 1.6-9.8 18.9-13.7 41.6-20.9 65.4-20.9 3.9 0 7 3.1 7 7s-3.2 7-7 7zm90.2-31.2c13.3 0 24.2 10.9 24.2 24.2 0 7-3 13.6-8.3 18.2-7.1-8.8-15.5-16.8-25-23.8-3.7-2.7-7.4-5.2-11.2-7.4 4.4-7.1 11.9-11.2 20.3-11.2zM322.9 424.3c-20.6 0-38.1 9.5-44.2 22.6l-110.8-7c-9.9-.6-18.3 7.3-18.3 17.2 0 10 8.4 17.8 18.3 17.2l110.8-7c6.1 13.1 23.5 22.6 44.2 22.6 25.7 0 46.4-14.7 46.4-32.8s-20.7-32.8-46.4-32.8zM173 71.7l112.2-7.1 5.7-.4c2.9 9.1 9.5 16.6 18 20.6 0 0 9.3 1.2 14.3 1.2h39.7c3.9 0 7.1-3.3 7-7.2-.1-3.8-3.5-6.8-7.3-6.8h-39.4c-4 0-7.8-.8-11.3-2.5-1.7-.8-2.9-2.5-2.9-4.4v-4h55.2c3.8 0 7.2-3 7.3-6.8.1-4-3.1-7.2-7-7.2H309v-7.7c1 0 2-.2 3-.7 3.6-1.7 7.4-2.5 11.3-2.5h39.4c3.8 0 7.2-3 7.3-6.8.1-4-3.1-7.2-7-7.2h-39.7c-4.9 0-14.3 1.2-14.3 1.2-3.6 1.7-6.9 4-9.7 6.8-4 4-7 9-8.6 14.6l-5.5-.3L173 37.3c-9.9-.6-18.3 7.3-18.3 17.2-.1 10 8.3 17.9 18.3 17.2z"
      />
    </svg>
  )
}

export default SvgComponent
