import PricingCard from "./PricingCard";

export default function PricingList() {
  const pricingData = [
    {
      SvgComponent: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="121"
          height="134"
          viewBox="0 0 121 134"
          fill="none"
        >
          <g filter="url(#filter0_d_430_127)">
            <path
              d="M53.314 58.4914V43L43 59.5079L53.314 58.4914Z"
              fill="#BCD4F5"
            />
            <path
              d="M53.314 58.4914V43L63.6296 59.5079L53.314 58.4914Z"
              fill="#DDE8FA"
            />
            <path
              d="M43.0002 59.5079L53.3143 76.0157V58.4914L43.0002 59.5079Z"
              fill="#A7BDEB"
            />
            <path
              d="M63.6296 59.5079L53.314 76.0157V58.4914L63.6296 59.5079Z"
              fill="#B2CBF0"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_430_127"
              x="0"
              y="-9.53674e-06"
              width="120.63"
              height="133.016"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="7" dy="7" />
              <feGaussianBlur stdDeviation="25" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.490196 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_430_127"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_430_127"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      title: "Level 1 - Early Adopters",
      features: [
        "1 Instagram account",
        "Up to 5 Team Members",
        "Available Q4 2023",
        "Filters",
        "Scheduling",
      ],
      price: "$10",
      pricePeriod: "/mo",
    },
    {
      SvgComponent: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="137"
          height="135"
          viewBox="0 0 137 135"
          fill="none"
        >
          <g filter="url(#filter0_d_430_103)">
            <path
              d="M52.1345 60.5517L61.4202 43L70.7059 60.5517H52.1345Z"
              fill="#FFE2C9"
            />
            <path
              d="M61.4202 43L43 60.5517H52.1345L61.4202 43Z"
              fill="#FAD0AB"
            />
            <path
              d="M70.7059 60.5516L61.4202 77.1806L52.1345 60.5516H70.7059Z"
              fill="#F6C69B"
            />
            <path
              d="M61.4202 43L79.8404 60.5517H70.7058L61.4202 43Z"
              fill="#FAD0AB"
            />
            <path
              d="M43 60.5516L61.4202 77.1806L52.1345 60.5516H43Z"
              fill="#FFB682"
            />
            <path
              d="M79.8404 60.5516L61.4202 77.1806L70.7058 60.5516H79.8404Z"
              fill="#FFB682"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_430_103"
              x="0"
              y="0"
              width="136.84"
              height="134.181"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="7" dy="7" />
              <feGaussianBlur stdDeviation="25" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.490196 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_430_103"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_430_103"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      title: "Level 2 - Public",
      features: [
        "1 Instagram account",
        "Up to 5 Team Members",
        "Available Q1 2024",
        "Filters",
        "Scheduling",
      ],
      price: "$20",
      pricePeriod: "/mo",
    },
    {
      SvgComponent: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="132"
          viewBox="0 0 130 132"
          fill="none"
        >
          <g filter="url(#filter0_d_430_120)">
            <path
              d="M50.4668 58.5193L57.9348 43L65.4027 58.5193H50.4668Z"
              fill="#E0F8FF"
            />
            <path
              d="M65.4027 58.5193L57.9348 74.0385L50.4668 58.5193H65.4027Z"
              fill="#BDEBF7"
            />
            <path
              d="M72.8705 50.4383L65.4025 58.5193L57.9346 43L72.8705 50.4383Z"
              fill="#BDEBF7"
            />
            <path
              d="M57.9344 43L50.4664 58.5193L43 50.4383L57.9344 43Z"
              fill="#B4E3F0"
            />
            <path
              d="M43 66.6002L50.4664 58.5193L57.9344 74.0385L43 66.6002Z"
              fill="#B4E3F0"
            />
            <path
              d="M72.8705 66.6002L65.4025 58.5193L57.9346 74.0385L72.8705 66.6002Z"
              fill="#E0F8FF"
            />
            <path
              d="M43 50.4384V66.6002L50.4664 58.5193L43 50.4384Z"
              fill="#A3D0E6"
            />
            <path
              d="M72.8703 50.4384L65.4023 58.5193L72.8703 66.6002V50.4384Z"
              fill="#B4E3F0"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_430_120"
              x="0"
              y="0"
              width="129.871"
              height="131.039"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="7" dy="7" />
              <feGaussianBlur stdDeviation="25" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.490196 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_430_120"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_430_120"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      title: "Level 3 - Cross Platform",
      features: [
        "1 Inst, TT, YT, FB, Pinterest",
        "Up to 10 Team Members",
        "Available Q2 2024",
        "Filters and Scheduling",
        "Cross-Platform Reposting",
      ],
      price: "$30",
      pricePeriod: "/mo",
    },
  ];
  return (
    <>
      {pricingData.map((plan) => (
        <PricingCard key={plan.title} {...plan} />
      ))}
    </>
  );
}
