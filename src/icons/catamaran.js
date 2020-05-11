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
        d="M468.1 328.8c8.4 0 15.3-6.8 15.3-15.3v-55.8c0-6.5-3.6-12.6-9.3-15.7L336 167.5c-2.6-1.4-5.5-2.1-8.5-2.1h-45.9c-9.7 0-17.6 7.8-17.8 17.5 0 2.7-.1 5.7-.2 8.9-.3 18.2-.7 43.3-.8 67.1H30.2c-3.8 0-6.9 3.1-6.9 6.9v56.1c0 3.8 3.1 6.9 6.9 6.9h437.9zM318.7 217h33.8l41.9 41.9h-75.8V217z"
      />
      <path
        d="M249.1 225.3H89V245h159.8c.1-6.3.2-12.9.3-19.7zM38.7 225.3h27V245h-27zM481.7 384.2c-7.2 0-13.6-.6-19.4-1.8-.5-.1-1-.2-1.4-.3v-39.3h-412v20.6c-4.3-.5-8.8-.7-13.6-.7-3.9 0-7 3.1-7 7s3.1 7 7 7c4.6 0 8.8.2 12.8.7 12.6 1.5 20.5 5.3 28.8 9.3 11.7 5.6 23.8 11.4 47.7 11.4 23.9 0 36-5.8 47.7-11.4 10.7-5.2 20.9-10.1 41.6-10.1 20.7 0 30.9 4.9 41.6 10.1 11.7 5.6 23.8 11.4 47.7 11.4 23.9 0 36-5.8 47.7-11.4 10.7-5.2 20.9-10.1 41.6-10.1 20.7 0 30.9 4.9 41.6 10 7.3 3.5 14.8 7.1 25.5 9.4 6.8 1.4 14 2.1 22.2 2.1 3.9 0 7-3.1 7-7s-3.2-6.9-7.1-6.9zM249.8 181.2c.7-10.8 6.8-20.1 15.6-25.3l-21.9-11.1-7.4 9.6-7.9 10.2 21.6 16.6zM195.4 152.9c1.3 1 2.8 1.5 4.3 1.5 2.1 0 4.2-.9 5.5-2.7l6-7.8 9.5 7.4 4.3-5.5 4.3-5.5-9.5-7.4 6-7.7c2.4-3.1 1.8-7.5-1.3-9.8-3.1-2.4-7.4-1.8-9.8 1.3l-20.6 26.6c-2.3 2.8-1.8 7.2 1.3 9.6z"
      />
    </svg>
  )
}

export default SvgComponent
