import * as React from "react"

function SvgComponent({size, ...props}) {
  return (
    <svg height={size} viewBox="0 0 800 800" width={size} {...props}>
      <g>
        <path d="M231.224 521.992c-49.917 0-90.529 40.611-90.529 90.528 0 49.916 40.612 90.513 90.529 90.513 49.916 0 90.512-40.597 90.512-90.513-.001-49.916-40.596-90.528-90.512-90.528zm0 152.046c-33.931 0-61.534-27.588-61.534-61.518s27.604-61.534 61.534-61.534 61.518 27.604 61.518 61.534-27.588 61.518-61.518 61.518zM597.513 521.992c-49.916 0-90.528 40.611-90.528 90.528 0 49.916 40.612 90.513 90.528 90.513 49.917 0 90.513-40.597 90.513-90.513-.001-49.916-40.596-90.528-90.513-90.528zm0 152.046c-33.929 0-61.533-27.588-61.533-61.518s27.604-61.534 61.533-61.534c33.931 0 61.518 27.604 61.518 61.534s-27.588 61.518-61.518 61.518zM773.749 96.967h-449.23c-1.456 0-2.896.211-4.288.647-208.969 64.851-212.415 85.562-213.887 94.396-.13.793-.194 1.586-.194 2.379v16.714c0 7.945 6.391 14.416 14.336 14.498l48.541.566H773.75c8.01 0 14.497-6.489 14.497-14.498V111.465c-.001-8.01-6.488-14.498-14.498-14.498zm-14.497 100.205H169.188l-30.889-.356c23.315-14.87 111.062-46.761 188.42-70.854h432.532v71.21z" />
        <path d="M772.648 515.066h-12.054V324.624c0-32.166-26.164-58.347-58.347-58.347H237.064c-33.089 0-163.68 111.32-191.413 163.163-10.712 20.048-9.967 55.061-6.375 85.626H26.251c-8.01 0-14.497 6.488-14.497 14.498v58.768c0 8.008 6.487 14.497 14.497 14.497h81.613c6.941 0 12.912-4.92 14.239-11.732 10.145-52.035 56.032-89.816 109.12-89.816 53.071 0 98.975 37.781 109.119 89.816a14.49 14.49 0 0014.224 11.732h119.879c6.942 0 12.913-4.92 14.239-11.732 10.145-52.035 56.033-89.816 109.12-89.816 53.071 0 98.975 37.781 109.12 89.816 1.328 6.813 7.28 11.732 14.223 11.732h51.501c8.01 0 14.499-6.489 14.499-14.497v-58.768c0-8.009-6.489-14.498-14.499-14.498zm-14.497 58.768h-25.58c-17.039-59.496-71.905-101.549-134.767-101.549-62.878 0-117.744 42.053-134.766 101.549h-97.05c-17.038-59.496-71.905-101.549-134.766-101.549-62.877 0-117.744 42.053-134.766 101.549h-55.71v-29.772h15.129c4.224 0 8.252-1.845 11.003-5.064a14.462 14.462 0 003.316-11.634c-6.148-40.029-5.775-71.533 1.036-84.251 25.81-48.266 146.612-144.863 165.834-147.84h465.184c16.197 0 29.352 13.171 29.352 29.351v204.94c0 8.008 6.505 14.497 14.498 14.497h12.054v29.773z" />
        <path d="M310.766 318.896c-.729-.033-17.814-1.133-34.998-1.133-26.616 0-35.24 2.541-40.531 6.618-8.333 6.423-48.218 48.799-60.256 61.63a14.477 14.477 0 00-2.718 15.663 14.489 14.489 0 0013.3 8.737l123.57.08h.015c7.945 0 14.4-6.391 14.498-14.334l.68-62.635c.079-7.701-5.874-14.125-13.56-14.626zm-15.97 62.603l-75.578-.05c15.031-15.76 28.17-29.189 32.7-33.234 2.022-.469 8.155-1.457 23.85-1.457 6.796 0 13.688.195 19.417.404l-.389 34.337zM664.823 381.499h-285.81v-48.461c0-8.009-6.487-14.497-14.497-14.497-8.009 0-14.497 6.488-14.497 14.497v62.958c0 8.01 6.488 14.497 14.497 14.497h300.307c8.009 0 14.498-6.487 14.498-14.497 0-7.994-6.489-14.497-14.498-14.497z" />
      </g>
    </svg>
  )
}

export default SvgComponent
