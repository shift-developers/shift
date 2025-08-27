const Rocket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    fill="none"
    viewBox="0 0 35 35"
    {...props}
  >
    <path
      stroke="#062287"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.667"
      d="M6.563 24.063c-2.187 1.837-2.917 7.291-2.917 7.291s5.455-.729 7.292-2.916c1.036-1.225 1.021-3.107-.131-4.244a3.18 3.18 0 0 0-4.244-.131M17.5 21.875 13.125 17.5a32 32 0 0 1 2.917-5.76 18.78 18.78 0 0 1 16.041-8.824c0 3.967-1.137 10.938-8.75 16.042a32.6 32.6 0 0 1-5.833 2.917"
    ></path>
    <path
      stroke="#062287"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.667"
      d="M13.126 17.5H5.834s.802-4.419 2.917-5.833c2.362-1.575 7.291 0 7.291 0M17.5 21.876v7.291s4.419-.802 5.833-2.916c1.575-2.363 0-7.292 0-7.292"
    ></path>
  </svg>
);

export default Rocket;
