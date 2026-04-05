import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      {/* ── About ─────────────────────────────────────────── */}
      <section id="About">
        <div className="about-grid">
          <div className="about-img">
            <Image
              className="avatar-img"
              src="/images/Bienvenu- BW Mugshot.jpg"
              alt="Bienvenu Cyuzuzo portrait"
              width={250}
              height={300}
              priority
            />
            <SocialLinks />
          </div>

          <div className="about-text">
            <h2 className="about-heading">Hi, I&apos;m Bienvenu Cyuzuzo</h2>
            <p>
              A software engineering student and web developer from Rwanda. My
              mission is to build inclusive digital solutions that work for
              everyone, regardless of their abilities. Through my focus on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
              >
                web accessibility (A11Y)
                <span className="sr-only"> opens in a new tab</span>
              </a>
              , I strive to create web experiences that ensure equal access to
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section id="Skills" className="skills">
        <h2>Skills</h2>
        <p>
          I specialize in frontend development with a strong foundation in these
          core technologies:
        </p>
        <ul>
          <li>
            Primary tools: HTML, CSS, Tailwind, JavaScript, React, TypeScript
          </li>
          <li>Supporting tools: Vite, Next.js, VS Code, npm, Git, GitHub</li>
        </ul>

        <div className="tools-icons">
          {/* HTML5 */}
          <span>
            <svg
              viewBox="-52.5 0 361 361"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              aria-label="HTML5"
            >
              <path
                d="M255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 Z"
                fill="#E44D26"
              />
              <path
                d="M128,337.950242 L212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 Z"
                fill="#F16529"
              />
              <path
                d="M82.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L56.530989,220.572835 L128,220.572835 L128,188.636132 L85.7389011,188.636132 Z"
                fill="#EBEBEB"
              />
              <path
                d="M90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 Z"
                fill="#EBEBEB"
              />
              <path
                d="M24.1807473,0 L40.4107253,0 L40.4107253,16.0351648 L55.2573187,16.0351648 L55.2573187,0 L71.488,0 L71.488,48.5584176 L55.258022,48.5584176 L55.258022,32.2981978 L40.4114286,32.2981978 L40.4114286,48.5584176 L24.1814505,48.5584176 Z"
                fill="#000000"
              />
              <path
                d="M92.8309451,16.1026813 L78.5427692,16.1026813 L78.5427692,0 L123.356835,0 L123.356835,16.1026813 L109.06233,16.1026813 L109.06233,48.5584176 L92.8316484,48.5584176 Z"
                fill="#000000"
              />
              <path
                d="M130.469275,0 L147.392703,0 L157.802901,17.061978 L168.202549,0 L185.132308,0 L185.132308,48.5584176 L168.969143,48.5584176 L168.969143,24.4901978 L157.802901,41.7554286 L157.523692,41.7554286 L146.349714,24.4901978 L146.349714,48.5584176 L130.469275,48.5584176 Z"
                fill="#000000"
              />
              <path
                d="M193.20967,0 L209.444571,0 L209.444571,32.5077802 L232.268659,32.5077802 L232.268659,48.5584176 L193.20967,48.5584176 Z"
                fill="#000000"
              />
              <path
                d="M127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L201.347516,197.212132 L202.126769,188.636132 L127.889582,188.636132 Z"
                fill="#FFFFFF"
              />
              <path
                d="M127.889582,155.854066 L205.032791,155.932132 L207.892396,123.994725 L127.889582,123.994725 Z"
                fill="#FFFFFF"
              />
            </svg>
          </span>

          {/* CSS */}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
              aria-label="CSS"
            >
              <path
                fill="#639"
                d="M0 0H840A160 160 0 0 1 1000 160V840A160 160 0 0 1 840 1000H160A160 160 0 0 1 0 840V0Z"
              />
              <path
                fill="#fff"
                d="m358.1,920c-64.23-.06-103.86-36.23-103.1-102.79,0,0,0-168.39,0-168.39,0-33.74,9.88-59.4,29.64-76.96,35.49-34.19,117.83-36.27,152.59.52,21.42,18.89,29.5,57.48,27.58,93.49h-73.72c.56-14.15-.19-35.58-8.51-43.65-10.81-14.63-39.36-12.91-46.91,2.32-4.64,8.26-6.96,20.49-6.96,36.67v146.18c0,30.65,10.65,46.15,31.96,46.49,9.96,0,17.53-3.62,22.68-10.85,7.19-8.58,8.31-27.58,7.73-41.32h73.72c5.04,70.07-36.32,119.16-106.71,118.29Zm234.04,0c-71.17.98-103.01-49.66-101.04-118.29h69.59c-1.93,29.92,8.35,57.17,32.99,55.27,10.99,0,18.73-3.44,23.2-10.33,8.5-12.59,10.09-48.95-2.06-63.02-8.49-13.55-39.03-25.51-55.16-33.57-23.03-11.02-39.61-24.1-49.75-39.26-22.87-33.64-20.75-107.48,11.34-137.4,31.18-36.92,112.61-38.62,143.82-.77,19.25,19.51,27.66,57.9,26.03,93.23h-67.02c.57-14.52-.8-37.95-6.44-46.49-3.95-7.23-11.43-10.85-22.42-10.85-19.59,0-29.38,11.71-29.38,35.12.21,24.86,9.9,35.06,32.48,45.45,29.24,11.36,66.42,30.76,79.9,54.24,40.2,71.54,12.62,180.82-86.09,176.65Zm224.76,0c-71.17.98-103.01-49.66-101.04-118.29h69.59c-1.93,29.92,8.35,57.17,32.99,55.27,10.99,0,18.73-3.44,23.2-10.33,8.5-12.59,10.09-48.95-2.06-63.02-8.49-13.55-39.03-25.51-55.16-33.57-23.03-11.02-39.61-24.1-49.75-39.26-22.87-33.64-20.75-107.48,11.34-137.4,31.18-36.92,112.61-38.62,143.82-.77,19.25,19.51,27.66,57.9,26.03,93.23h-67.02c.57-14.52-.8-37.95-6.44-46.49-3.95-7.23-11.43-10.85-22.42-10.85-19.59,0-29.38,11.71-29.38,35.12.21,24.86,9.9,35.06,32.48,45.45,29.24,11.36,66.42,30.76,79.9,54.24,40.2,71.54,12.62,180.82-86.09,176.65Z"
              />
            </svg>
          </span>

          {/* Tailwind */}
          <span>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="Tailwind CSS">
              <path
                d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                fill="#44a8b3"
              />
            </svg>
          </span>

          {/* JavaScript */}
          <span>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript">
              <rect x="2" y="2" width="28" height="28" fill="#FFCA28" />
              <path
                d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z"
                fill="#3E3E3E"
              />
              <path
                d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z"
                fill="#3E3E3E"
              />
            </svg>
          </span>

          {/* React */}
          <span>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="React"
              fill="currentColor"
            >
              <path d="M6,2h20c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H6c-2.2,0-4-1.8-4-4V6C2,3.8,3.8,2,6,2z" />
              <path
                fill="white"
                d="M27.5,16c0-1.6-1.9-2.9-4.7-3.8c0.7-2.9,0.4-5.2-0.9-5.9C21.5,6.1,21.2,6,20.8,6c-1.3,0-2.9,0.9-4.5,2.5 C14.6,6.9,13,6,11.7,6c-0.4,0-0.8,0.1-1.1,0.3C9.3,7,9,9.3,9.7,12.2C6.9,13.1,5,14.4,5,16s1.9,2.9,4.7,3.8c-0.7,2.9-0.5,5.2,0.9,6 c0.3,0.2,0.7,0.3,1.1,0.3c1.3,0,2.9-0.9,4.5-2.5c1.6,1.6,3.3,2.5,4.5,2.5c0.4,0,0.8-0.1,1.1-0.3c1.3-0.8,1.6-3.1,0.9-6 C25.6,18.9,27.5,17.5,27.5,16z M20.8,7.1c0.2,0,0.4,0,0.5,0.1c0.6,0.4,0.9,1.7,0.7,3.4c-0.1,0.4-0.1,0.9-0.2,1.3 c-0.9-0.2-1.9-0.4-2.9-0.5c-0.6-0.8-1.2-1.6-1.8-2.2C18.5,7.8,19.9,7.1,20.8,7.1z M19.3,17.8c-0.3,0.6-0.7,1.1-1,1.7 c-0.7,0-1.3,0.1-2,0.1s-1.4,0-2-0.1c-0.4-0.5-0.7-1.1-1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c0.3-0.6,0.6-1.2,0.9-1.8 c0.3-0.6,0.7-1.2,1.1-1.7c0.6,0,1.3-0.1,2-0.1s1.3,0,2,0.1c0.4,0.5,0.7,1.1,1.1,1.7c0.3,0.6,0.6,1.2,0.9,1.8 C20,16.6,19.6,17.2,19.3,17.8z M20.8,17.3c0.2,0.6,0.4,1.1,0.6,1.7c-0.6,0.1-1.2,0.2-1.8,0.3c0.2-0.3,0.4-0.6,0.6-1 C20.4,18,20.6,17.6,20.8,17.3z M16.2,22c-0.4-0.4-0.8-0.9-1.2-1.4c0.4,0,0.8,0,1.2,0c0.4,0,0.8,0,1.2,0C17,21.1,16.6,21.6,16.2,22z M12.8,19.3c-0.6-0.1-1.2-0.2-1.8-0.3c0.2-0.6,0.4-1.1,0.6-1.7c0.2,0.3,0.4,0.7,0.6,1C12.4,18.7,12.6,19,12.8,19.3z M11.7,14.7 c-0.2-0.6-0.4-1.2-0.6-1.7c0.6-0.1,1.2-0.2,1.8-0.3c-0.2,0.3-0.4,0.7-0.6,1C12,14,11.8,14.4,11.7,14.7z M16.2,10 c0.4,0.4,0.8,0.9,1.2,1.4c-0.4,0-0.8,0-1.2,0c-0.4,0-0.8,0-1.2,0C15.4,10.9,15.8,10.4,16.2,10z M20.2,13.7 c-0.2-0.4-0.4-0.7-0.6-1c0.6,0.1,1.2,0.2,1.8,0.3c-0.2,0.6-0.4,1.2-0.6,1.7C20.6,14.4,20.4,14,20.2,13.7z M10.5,10.6 c-0.2-1.7,0-3,0.7-3.4c0.1-0.1,0.3-0.1,0.5-0.1c0.9,0,2.3,0.7,3.8,2.2c-0.6,0.7-1.2,1.4-1.8,2.2c-1,0.1-2,0.3-2.9,0.5 C10.6,11.5,10.5,11,10.5,10.6z M8.7,18.2c-1.6-0.7-2.6-1.5-2.6-2.3c0-0.7,1-1.6,2.6-2.3c0.4-0.2,0.8-0.3,1.3-0.4 c0.3,0.9,0.6,1.8,1,2.7c-0.4,0.9-0.8,1.8-1,2.7C9.5,18.6,9.1,18.4,8.7,18.2z M11.2,24.8c-0.6-0.4-0.9-1.7-0.7-3.4 c0.1-0.4,0.1-0.9,0.3-1.4c0.9,0.2,1.8,0.4,2.8,0.5c0.6,0.8,1.2,1.6,1.9,2.3c-1.5,1.4-2.9,2.2-3.8,2.2 C11.5,24.9,11.3,24.9,11.2,24.8z M22,21.4c0.2,1.7,0,3-0.7,3.4c-0.1,0.1-0.3,0.1-0.5,0.1c-0.9,0-2.3-0.7-3.8-2.2 c0.6-0.7,1.3-1.4,1.9-2.3c1-0.1,2-0.2,2.8-0.5C21.8,20.5,21.9,21,22,21.4z M23.8,18.2c-0.4,0.2-0.8,0.3-1.3,0.5 c-0.3-0.9-0.6-1.8-1-2.7c0.4-0.9,0.8-1.9,1-2.7c0.5,0.1,0.9,0.3,1.3,0.4c1.6,0.7,2.6,1.5,2.6,2.3C26.4,16.7,25.4,17.6,23.8,18.2z"
              />
              <path
                fill="white"
                d="M16.3,18.1c1.2,0,2.1-0.9,2.1-2.1s-0.9-2.1-2.1-2.1s-2.1,0.9-2.1,2.1S15.1,18.1,16.3,18.1z"
              />
            </svg>
          </span>

          {/* TypeScript */}
          <span>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="TypeScript">
              <rect x="2" y="2" width="28" height="28" rx="1.5" fill="#3178c6" />
              <path
                fill="#fff"
                d="M17.15 22.42v2.48a6.54 6.54 0 0 0 1.6.56 8.64 8.64 0 0 0 1.92.2 8 8 0 0 0 1.86-.21 4.44 4.44 0 0 0 1.5-.68 3.24 3.24 0 0 0 1-1.2 4.23 4.23 0 0 0 .37-1.86 3.9 3.9 0 0 0-.2-1.28 3.2 3.2 0 0 0-.6-1 4.53 4.53 0 0 0-1-.83 11.08 11.08 0 0 0-1.38-.72 9.59 9.59 0 0 1-.93-.47 3.41 3.41 0 0 1-.61-.44 1.57 1.57 0 0 1-.34-.49 1.47 1.47 0 0 1-.11-.59 1.36 1.36 0 0 1 .14-.63 1.29 1.29 0 0 1 .4-.46 1.88 1.88 0 0 1 .63-.28 3.23 3.23 0 0 1 .82-.1 4.71 4.71 0 0 1 .76.07 5.42 5.42 0 0 1 .78.2 5.19 5.19 0 0 1 .74.34 4.35 4.35 0 0 1 .64.47v-2.32a7 7 0 0 0-1.4-.4 9.12 9.12 0 0 0-1.7-.14 7.58 7.58 0 0 0-1.84.22 4.43 4.43 0 0 0-1.49.69 3.26 3.26 0 0 0-1 1.18 3.79 3.79 0 0 0-.36 1.72 3.76 3.76 0 0 0 .77 2.44 5.82 5.82 0 0 0 2.37 1.58 12.3 12.3 0 0 1 1 .49 4 4 0 0 1 .67.48 1.72 1.72 0 0 1 .38.53 1.55 1.55 0 0 1 .12.63 1.43 1.43 0 0 1-.14.65 1.26 1.26 0 0 1-.42.48 2 2 0 0 1-.68.3 3.76 3.76 0 0 1-.92.1 4.91 4.91 0 0 1-1.76-.34 5.25 5.25 0 0 1-1.59-.97zM12 16.27H15.3v-2.13H6v2.13h3.29V25h2.71z"
              />
            </svg>
          </span>

          {/* Vite */}
          <span>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" aria-label="Vite">
              <path
                d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z"
                fill="url(#vite-grad-0)"
              />
              <path
                d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z"
                fill="url(#vite-grad-1)"
              />
              <defs>
                <linearGradient
                  id="vite-grad-0"
                  x1="6.0002"
                  y1="32.9999"
                  x2="235"
                  y2="344"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
                >
                  <stop stopColor="#41D1FF" />
                  <stop offset="1" stopColor="#BD34FE" />
                </linearGradient>
                <linearGradient
                  id="vite-grad-1"
                  x1="194.651"
                  y1="8.8182"
                  x2="236.076"
                  y2="292.989"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
                >
                  <stop stopColor="#FFEA83" />
                  <stop offset=".0833" stopColor="#FFDD35" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
              </defs>
            </svg>
          </span>

          {/* VS Code */}
          <span>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="VS Code">
              <path
                d="M21.0016 3.11679C21.0016 2.23783 20.0175 2.23782 19.5801 2.34769C20.1924 1.86426 20.9105 1.98147 21.1656 2.12796L27.079 5.02747C27.6424 5.30375 27.9998 5.8786 27.9998 6.50857V25.5831C27.9998 26.2215 27.6329 26.8025 27.058 27.0743L21.4937 29.7054C21.1109 29.8701 20.2799 30.2767 19.5801 29.7053C20.4549 29.8702 20.9287 29.2476 21.0016 28.8264V3.11679Z"
                fill="url(#vscode-grad-0)"
              />
              <path
                d="M19.6512 2.3319C20.1154 2.24017 21.0018 2.28271 21.0018 3.11685V9.68254L3.07359 23.2453C2.76022 23.4824 2.3192 23.443 2.05229 23.1542L0.204532 21.1548C-0.0849358 20.8416 -0.0646824 20.3513 0.249624 20.0633L19.5802 2.34775L19.6512 2.3319Z"
                fill="url(#vscode-grad-1)"
              />
              <path
                d="M21.0018 22.3708L3.07359 8.80801C2.76022 8.57094 2.3192 8.61028 2.05229 8.8991L0.204532 10.8985C-0.0849358 11.2117 -0.0646824 11.702 0.249624 11.9901L19.5802 29.7056C20.455 29.8704 20.9289 29.2478 21.0018 28.8266V22.3708Z"
                fill="url(#vscode-grad-2)"
              />
              <defs>
                <linearGradient id="vscode-grad-0" x1="23.79" y1="2" x2="23.79" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#32B5F1" />
                  <stop offset="1" stopColor="#2B9FED" />
                </linearGradient>
                <linearGradient id="vscode-grad-1" x1="21.0018" y1="5.53398" x2="1.0217" y2="22.3051" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0F6FB3" />
                  <stop offset="1" stopColor="#0F6DAD" />
                </linearGradient>
                <linearGradient id="vscode-grad-2" x1="1.15522" y1="9.98389" x2="21.0791" y2="26.4808" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1791D2" />
                  <stop offset="1" stopColor="#1173C5" />
                </linearGradient>
              </defs>
            </svg>
          </span>

          {/* npm */}
          <span>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="npm">
              <path d="M0 10V20H9V22H16V20H32V10H0Z" fill="#CB3837" />
              <path
                d="M5.46205 12H2V18H5.46205V13.6111H7.22344V18H8.98482V12H5.46205ZM10.7462 12V20H14.269V18H17.731V12H10.7462ZM15.9696 16.3889H14.269V13.6111H15.9696V16.3889ZM22.9545 12H19.4924V18H22.9545V13.6111H24.7158V18H26.4772V13.6111H28.2386V18H30V12H22.9545Z"
                fill="white"
              />
            </svg>
          </span>

          {/* Git */}
          <span>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Git">
              <path
                d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z"
                fill="#EE513B"
              />
              <path
                d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </section>

      {/* ── Background ────────────────────────────────────── */}
      <section className="background" id="Background">
        <h2>Background</h2>
        <div className="background-container">
          {/* Education */}
          <div className="education-container">
            <h3>Education</h3>
            <div className="details-container">
              <div>
                <span className="date">May 2024 – July 2027</span>
                <div className="role">BSc. (Hons) Software Engineering</div>
                <div className="place">
                  <a
                    target="_blank"
                    href="https://alueducation.com/"
                    rel="noopener noreferrer"
                  >
                    African Leadership University, Rwanda
                    <span className="sr-only"> opens in a new tab</span>
                  </a>
                </div>
                <p>
                  A software engineering program in partnership with Holberton
                  School, focusing on practical software engineering skills
                  through hands-on learning.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="experience-container">
            <h3>Experience</h3>
            <div className="details-container">
              <div>
                <span className="date">November 2024 – November 2025</span>
                <div className="role">Software Developer Trainee</div>
                <div className="place">
                  <a
                    target="_blank"
                    href="https://www.the-gym.rw/"
                    rel="noopener noreferrer"
                  >
                    The Gym, Rwanda
                    <span className="sr-only"> opens in a new tab</span>
                  </a>
                </div>
                <p>
                  An intensive software development training program focusing on
                  practical development skills with mentorship from international
                  senior developers. Selected for this program that emphasizes
                  practical learning and real-world project experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────── */}
      <section id="Projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-cards">
          <article>
            <h4>DriveKGL</h4>
            <p>
              A car rental website built for a client&apos;s business in Rwanda.
            </p>
            <div className="project-links">
              <a
                href="https://drivekgl.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site ↗<span className="sr-only"> opens in a new tab</span>
              </a>
              <Link href="/projects/drivekgl">Case Study →</Link>
            </div>
          </article>

          <article>
            <h4>Wasemac</h4>
            <p>
              A corporate website for a water and sewage solutions company in
              Rwanda. The site showcases their services and company expertise.
            </p>
            <div className="project-links">
              <a
                href="https://wasemacltd.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site ↗<span className="sr-only"> opens in a new tab</span>
              </a>
              <Link href="/projects/wasemac">Case Study →</Link>
            </div>
          </article>

          <article>
            <h4>Impact1000 Africa</h4>
            <p>
              A promotional website for the Impact 1000 Africa Initiative by
              Pulsepedia Group, designed to train and empower 1,000 businesses
              across Africa.
            </p>
            <div className="project-links">
              <a
                href="https://pulsepediagroup.com/impact1000-africa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site ↗<span className="sr-only"> opens in a new tab</span>
              </a>
              <Link href="/projects/impact1000">Case Study →</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
