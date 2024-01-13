import * as React from 'react'
import Svg, { Circle, Path, Rect, SvgProps } from 'react-native-svg'

export interface IconProps extends SvgProps {
    size?: string | number;
    color?: string;
}

export const IconHome: React.FC<IconProps> = ({ size, color, ...props }) => {
  return (
    <Svg
      fill={color}
      height={size ?? '20px'}
      viewBox='0 1 511 511.999'
      width={size ?? '20px'}
      {...props}
    >
      <Path d='M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0' />
    </Svg>
  )
}


export const IconSearch: React.FC<IconProps> = ({ size, color, ...props }) => {
  return (
    <Svg
      height={size ?? "20px"}
      viewBox="0 0 16.39 16.23"
      width={size ?? "20px"}
      {...props}
    >
      <Circle cx={6.91} cy={6.91} fill="none" r={6.41} stroke="#ea1d2c" />
      <Rect
        fill="none"
        height={0.54}
        rx={0.22}
        stroke="#ea1d2c"
        strokeMiterlimit={10}
        transform="rotate(42.94 -19.033 74.849)"
        width={5.71}
        x={-39.59}
        y={7.49}
      />
    </Svg>
  )
}


export const IconProfile: React.FC<IconProps> = ({ size, color, ...props }) => {
  return (
    <Svg
      fill="#ea1d2c"
      height="20px"
      viewBox="0 0 24 24"
      width="20px"
      {...props}
    >
      <Path d="M12 12.5C9 12.5 6.5 10 6.5 7S9 1.5 12 1.5 17.5 4 17.5 7 15 12.5 12 12.5zM12 3C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm5 12.5c1.4 0 2.5 1.1 2.5 2.5v2.5h-15V18c0-1.4 1.1-2.5 2.5-2.5h10m0-1.5H7c-2.2 0-4 1.8-4 4v4h18v-4c0-2.2-1.8-4-4-4z" />
    </Svg>
  )
}

export const IconSettings: React.FC<IconProps> = ({ size, color, ...props }) => {
  return (
    <Svg
      fill="#ea1d2c"
      height="20px"
      viewBox="0 0 273.55 272"
      width="20px"
      {...props}
    >
      <Path
        d="M391.57 255.7a4.63 4.63 0 01.43-3.7v-20a8 8 0 00-7-7.94l-31.35-3.92q-1.45-3.9-3.27-7.8l19.43-25a8 8 0 00-.66-10.57l-33.95-33.91a8 8 0 00-10.57-.66l-25 19.4q-3.9-1.82-7.8-3.27L287.94 127a8 8 0 00-7.94-7h-48a8 8 0 00-7.94 7l-3.92 31.35q-3.9 1.45-7.8 3.27l-25-19.43a8 8 0 00-10.57.66l-33.91 33.95a7.66 7.66 0 00-1.28 1.87l.11-.44c-.09.13-.19.25-.29.37a5.25 5.25 0 01-.64 1.66 5.51 5.51 0 01-.42 1.79 4.24 4.24 0 010 .71.75.75 0 01.06.13 1.63 1.63 0 01.09.19l.13-.52a8.47 8.47 0 00.09 1.13 4 4 0 01.09.48 8.05 8.05 0 001.42 3.19l19.4 25q-1.82 3.9-3.27 7.8l-28 3.51a4.6 4.6 0 01-1.44.81 4.6 4.6 0 01-3.47 1.41h-.19a11.08 11.08 0 01-3.08 3.76.25.25 0 000 .08 3.66 3.66 0 01-.6 1.86c-.13.21-.32.43-.45.6s-.29.39-.45.57a1.14 1.14 0 01-.15.16 5.08 5.08 0 01-.5.44V280a8 8 0 007 7.94l31.35 3.92q1.45 3.9 3.27 7.8l-19.43 25a8 8 0 00.66 10.57l33.94 33.95a8 8 0 0010.57.65l25-19.39q3.9 1.82 7.8 3.27l3.88 31.29a8 8 0 007.94 7h48a8 8 0 007.94-7l3.92-31.35q3.9-1.45 7.8-3.27l25 19.42a8 8 0 0010.57-.65L368.34 336a13.26 13.26 0 001.57-5c.61-5.76-2.87-10-3.71-11l-15.8-20.34q1.82-3.9 3.27-7.8l31.33-3.92a8 8 0 007-7.94v-8h.76c.04-5.49.3-11-1.19-16.3zM376 272.94l-29.3 3.66a8 8 0 00-6.65 5.6 86.86 86.86 0 01-6.16 14.7 8 8 0 00.8 8.64l18.17 23.36-24 23.9-23.36-18.18a8 8 0 00-8.64-.8 86.86 86.86 0 01-14.7 6.16 8 8 0 00-5.6 6.65L272.94 376h-33.88l-3.66-29.3a8 8 0 00-5.6-6.65 87.69 87.69 0 01-14.7-6.16 8 8 0 00-8.64.8l-23.33 18.11-23.93-23.93 18.18-23.36a8 8 0 00.8-8.64 86.86 86.86 0 01-6.16-14.7 8 8 0 00-6.65-5.6L136 272.94v-33.88l29.3-3.66a8 8 0 006.65-5.6 87.69 87.69 0 016.16-14.7 8 8 0 00-.8-8.64l-18.11-23.33 23.93-23.93 23.36 18.18a8 8 0 008.64.8 86.86 86.86 0 0114.7-6.16 8 8 0 005.6-6.65l3.63-29.37h33.88l3.66 29.3a8 8 0 005.6 6.65 86.86 86.86 0 0114.7 6.16 8 8 0 008.64-.8l23.36-18.17 23.9 24-18.18 23.36a8 8 0 00-.8 8.64 86.86 86.86 0 016.16 14.7 8 8 0 006.65 5.6l29.37 3.62z"
        transform="translate(-119.71 -120)"
      />
      <Path d="M273.55 136L272.29 136" />
      <Path d="M272.29 153.15L272.29 152" />
      <Path
        d="M328 256a72 72 0 10-72 72 72.07 72.07 0 0072-72zm-72 56a56 56 0 1156-56 56 56 0 01-56 56zM130.33 223.65c-5.13.82-9.19 4-10.31 8.25a10.41 10.41 0 00.32 6"
        transform="translate(-119.71 -120)"
      />
    </Svg>
  )
}


export const IconLogo: React.FC<IconProps> = ({ size, color, ...props }) => {
  return (
    <Svg
      fill="#ea1d2c"
      height={size ?? "80px"}
      viewBox="0 0 80 43"
      width={size ?? "80px"}
      {...props}
    >
      <Path d="M0 24.258h6.09L9.498 7.472h-6.09L0 24.258zM3.947 4.836h6.087L11.016 0H4.922l-.975 4.836zm4.551 24.149h6.09l3.695-18.167h4.444l.7-3.346h-4.482l.154-.776c.286-1.431.751-3.096 3.047-3.096 1.361 0 2.665.148 3.93.68L26.77.744A13.22 13.22 0 0022.381 0c-4.894 0-8.265 2.914-9.499 7.472h-2.114l-.662 3.346h2.084L8.498 28.985z" />
      <Path d="M27.79 24.633c7.19 0 12.18-6.569 12.18-11.927 0-3.902-3.688-5.608-7.195-5.608-7.89 0-12.183 7.063-12.183 11.927 0 3.902 3.726 5.608 7.198 5.608zm19.21 0c7.192 0 12.181-6.569 12.181-11.927 0-3.902-3.696-5.608-7.199-5.608-7.886 0-12.186 7.063-12.186 11.927 0 3.902 3.73 5.608 7.202 5.608m22.084-.375h6.055L80 .374h-6.09l-1.451 7.097a12.51 12.51 0 00-2.46-.281c-5.966 0-11.391 7.588-11.391 13.011 0 2.231 1.45 4.43 3.912 4.43 3.5 0 5.921-1.712 6.932-3.317h.378l-.748 2.944zM50.322 36.91c-4.454 3.792-10.408 5.739-16.879 5.337-8.16-.502-13.816-6.82-14.954-13.227h.387c1.836 4.091 6.304 7.869 11.911 8.49 5.475.604 12.184-1.87 15.866-5.402l-4.13-3.124 12.263.036-2.639 12.983-1.825-5.093z" />
    </Svg>
  )
}

export const IconShopping: React.FC<IconProps> = ({ size, color, ...props }) => {
  return (
    <Svg
      fill="#ea1d2c"
      fillRule="evenodd"
      height="25px"
      viewBox="0 0 18 23"
      width="25px"
      {...props}
    >
      <Path d="M8.7.2c-1.1 0-2 .3-2.6.9-.6.6-1 1.4-1.2 2.2-.2.6-.3 1.1-.3 1.7H2C.9 5 0 5.9 0 7l.1 13c0 1.7 1.3 3 3 3H15c1.7 0 3-1.3 3-3V7c0-1.1-.9-2-2-2h-3.2c-.1-.6-.1-1.1-.3-1.6-.2-.8-.6-1.7-1.2-2.2-.7-.6-1.5-1-2.6-1zm2.7 6.3v2.6c0 .4.3.7.8.7.4 0 .7-.3.7-.8V6.4H16c.3 0 .5.2.5.5l-.1 13c0 .8-.7 1.5-1.5 1.5H3.1c-.8 0-1.5-.7-1.5-1.5L1.5 7c0-.3.2-.5.5-.5h2.5v2.6c0 .4.3.8.7.8.4 0 .8-.4.8-.8V6.5h5.4zM11.3 5c0-.4-.1-.8-.2-1.2-.2-.7-.4-1.2-.8-1.5-.4-.3-.8-.5-1.6-.5s-1.3.2-1.6.5c-.4.3-.6.8-.8 1.5-.1.4-.2.8-.2 1.2h5.2z" />
    </Svg>
  )
}
