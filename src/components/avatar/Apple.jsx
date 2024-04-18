import React from "react";

const Apple = ({width, height, fill, onClick}) => {
  return (
    <svg
    onClick={onClick}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        d="M0 0 C5.63142202 -0.29128045 9.10031709 -0.11798003 14 3 C16.375 5.1875 16.375 5.1875 18 7 C19.0828125 6.01 19.0828125 6.01 20.1875 5 C23.2154253 2.84680867 24.39251163 2.49895995 28 3 C29 4 29 4 29.4375 6.25 C28.78351207 10.36078125 26.2168735 11.57093226 23 14 C22.67 14.66 22.34 15.32 22 16 C22.85271484 15.74863281 22.85271484 15.74863281 23.72265625 15.4921875 C29.08560813 14.07758584 32.77721782 13.58948515 38 16 C43.62787441 21.62787441 45.29355878 26.32842244 45.375 34.1875 C45.28648582 45.40156582 41.75002671 51.81846424 34.21875 59.96875 C30.72821275 63.16431227 28.22645024 64.2765256 23.5 64.1875 C22.37078125 64.17783203 22.37078125 64.17783203 21.21875 64.16796875 C19 64 19 64 16.84375 63.42578125 C14.91896248 62.77510179 14.91896248 62.77510179 13 64 C8.51611994 64.54703337 4.979849 64.47032752 0.875 62.5 C-6.96443189 55.68310271 -12.29131427 48.90420629 -13.37890625 38.30859375 C-13.59907059 31.15680377 -13.60495496 24.77847573 -9 19 C-4.9 15 -4.9 15 -1 15 C-1.20625 14.01 -1.4125 13.02 -1.625 12 C-2.27862302 7.62162112 -1.25457789 4.20652588 0 0 Z M3 3 C1.77988609 4.00057979 1.77988609 4.00057979 1.8671875 5.99609375 C1.86976562 6.80175781 1.87234375 7.60742188 1.875 8.4375 C1.87242188 9.24058594 1.86984375 10.04367188 1.8671875 10.87109375 C1.86421674 13.05397931 1.86421674 13.05397931 3 15 C5.32156597 15.40729228 7.6568787 15.74438677 10 16 C8.15490111 12.22194036 6.2096601 8.57754493 4 5 C9.02470674 7.37277818 10.56030983 10.21097855 13 15 C13.66 14.34 14.32 13.68 15 13 C14.83730081 9.90871548 14.1906022 8.26391073 12.375 5.75 C9.28051087 3.46985012 6.79465168 3.2147916 3 3 Z M19 11 C20 13 20 13 20 13 Z M17 14 C18 17 18 17 18 17 Z M16 17 C17 19 17 19 17 19 Z M-8 23 C-10.9167771 28.43581186 -10.81952843 35.00221227 -10 41 C-7.31155617 48.83571351 -2.69620167 57.15189916 5 61 C9.14503661 61.24787017 9.14503661 61.24787017 13 60 C18.53846154 59.76923077 18.53846154 59.76923077 21 61 C24.16676797 61.6031939 26.18780285 61.50155601 28.9609375 59.7890625 C35.0278817 54.83787815 40.61705014 47.90257066 42 40 C42.53202866 33.31894785 42.4536758 27.83552119 39 22 C36.03762427 18.69906704 34.56633965 18.06394157 30.125 17.5625 C27.00183877 17.70260443 25.53513588 18.21130187 22.5625 19.5625 C18.06367617 21.37781488 14.66169238 21.14603528 10 20 C9.33097656 19.66226562 8.66195313 19.32453125 7.97265625 18.9765625 C1.51005641 15.77725565 -3.46294448 18.03084396 -8 23 Z "
        fill={fill}
        transform="translate(16,0)"
      />
      <path
        d="M0 0 C-0.33 0.99 -0.66 1.98 -1 3 C-1.78375 3.268125 -2.5675 3.53625 -3.375 3.8125 C-7.04086848 5.47086907 -7.59931583 7.28818696 -9 11 C-9.7136724 14.73771834 -9.7136724 14.73771834 -10 18 C-10.99 18 -11.98 18 -13 18 C-13.31378179 12.03814602 -12.89026484 8.26441096 -10 3 C-6.90427667 -0.30922149 -4.41209024 -0.30082433 0 0 Z "
        fill={fill}
        transform="translate(20,19)"
      />
    </svg>
  );
};

export default Apple;