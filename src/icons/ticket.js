import * as React from "react"

function SvgComponent({ size, ...props }) {
  return (
    <svg viewBox="0 0 512 512"
      height={size}
      width={size}
      {...props}>
      <path
        d="M38 130.3v23.8c10.9 0 19.7 8.8 19.7 19.7 0 10.9-8.8 19.7-19.7 19.7V209c10.9 0 19.7 8.8 19.7 19.7 0 10.9-8.8 19.7-19.7 19.7v15.5c10.9 0 19.7 8.8 19.7 19.7s-8.8 19.7-19.7 19.7v15.5c10.9 0 19.7 8.8 19.7 19.7s-8.8 19.7-19.7 19.7V382h436V130.3H38zM182 344h-74.3c-3.9 0-7-3.1-7-7s3.1-7 7-7H182c3.9 0 7 3.1 7 7s-3.1 7-7 7zm0-54h-74.3c-3.9 0-7-3.1-7-7s3.1-7 7-7H182c3.9 0 7 3.1 7 7s-3.1 7-7 7zm0-54h-74.3c-3.9 0-7-3.1-7-7s3.1-7 7-7H182c3.9 0 7 3.1 7 7s-3.1 7-7 7zm0-54h-74.3c-3.9 0-7-3.1-7-7s3.1-7 7-7H182c3.9 0 7 3.1 7 7s-3.1 7-7 7zm55 172c0 3.9-3.1 7-7 7s-7-3.1-7-7v-33.9c0-3.9 3.1-7 7-7s7 3.1 7 7V354zm0-54c0 3.9-3.1 7-7 7s-7-3.1-7-7v-33.9c0-3.9 3.1-7 7-7s7 3.1 7 7V300zm0-54.1c0 3.9-3.1 7-7 7s-7-3.1-7-7V212c0-3.9 3.1-7 7-7s7 3.1 7 7v33.9zm0-54c0 3.9-3.1 7-7 7s-7-3.1-7-7V158c0-3.9 3.1-7 7-7s7 3.1 7 7v33.9zm199.1-4.2l-1.9 20c-.4 3.9-2.3 7.6-5.4 10.1l-20.1 16.6 27 69.3-14.2 14.2-51.5-51.5-25.8 21.3 13.1 45.9-7.1 7.1-33.5-33.5c-4.4.5-9-.9-12.3-4.3-3.4-3.3-4.8-7.9-4.3-12.3l-33.5-33.5 7.1-7.1 45.9 13.1 21.3-25.8-51.5-51.5 14.2-14.2 69.3 27 16.6-20c2.5-3.1 6.2-5 10.1-5.3l20-1.9c9.5-.9 17.3 6.9 16.5 16.3z"
      />
    </svg>
  )
}

export default SvgComponent
