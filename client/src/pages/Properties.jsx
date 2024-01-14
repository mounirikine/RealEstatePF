import { useScroll, motion, useSpring } from "framer-motion";
import Header from "../components/Header";
import Residential from "../components/Residential";

const Properties = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Header />
      <section>
        <div className="px-20 py-20">
          <div className="py-10">
            <h1 className="text-center font-bold text-4xl py-5">
              Property Types
            </h1>
            <p className="text-center w-8/12 mx-auto text-gray-300">
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:px-20 sm:px-20 px-0 gap-2 w-12/12 mx-auto">
            <span className=" cursor-pointer hover:bg-white text-white hover:text-black secondary_color flex flex-col items-center bg-white p-3 border border-emerald-500 rounded-lg">
              <div>
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 22L2 22"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 22V9.5"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M20 9.5V13.5M20 22V17.5"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-black text-center font-semibold">Home</h1>
                <p className="text-black">122 Element</p>
              </div>
            </span>
            <span className="cursor-pointer hover:bg-white text-white hover:text-black secondary_color flex flex-col items-center bg-white p-3 border border-emerald-500 rounded-lg">
              <div>
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-black text-center font-semibold">Cars</h1>
                <p className="text-black">122 Element</p>
              </div>
            </span>
            <span className="cursor-pointer hover:bg-white text-white hover:text-black secondary_color flex flex-col items-center bg-white p-3 border border-emerald-500 rounded-lg">
              <div>
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19Z"
                    fill="#0F1729"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.23417 1L9.28281 1.00001C9.2904 1 9.298 1 9.30559 1.00001H14.6944C14.702 1 14.7096 1 14.7172 1.00001L14.7658 1C14.7898 1 14.813 0.999997 14.8357 1.00001H15C15.0164 1.00001 15.0327 1.0004 15.0489 1.00118C15.1351 1.00243 15.2118 1.00496 15.2841 1.01011C17.2693 1.15145 18.8486 2.73075 18.9899 4.71593C19.0001 4.85862 19 5.01839 19 5.23416L19 17.212C19 18.0305 19 18.7061 18.9544 19.2561C18.9069 19.8274 18.805 20.3523 18.5497 20.8439C18.1702 21.5745 17.5745 22.1702 16.8439 22.5497C16.3523 22.805 15.8274 22.9069 15.2561 22.9544C14.7061 23 14.0306 23 13.2121 23H10.7879C9.96946 23 9.29391 23 8.74394 22.9544C8.17259 22.9069 7.64775 22.805 7.15611 22.5497C6.42554 22.1702 5.82986 21.5745 5.45035 20.8439C5.19497 20.3523 5.09311 19.8274 5.04566 19.2561C4.99998 18.7061 4.99999 18.0305 5.00001 17.212L5 5.23417C4.99997 5.0184 4.99995 4.85862 5.01011 4.71593C5.15145 2.73075 6.73075 1.15145 8.71593 1.01011C8.78824 1.00496 8.86493 1.00243 8.95107 1.00118C8.96729 1.0004 8.9836 1.00001 9.00001 1.00001H9.16434C9.18696 0.999997 9.21023 1 9.23417 1ZM9.27151 3.00001C9.00219 3.00001 8.91996 3.00064 8.85797 3.00506C7.86538 3.07573 7.07573 3.86538 7.00506 4.85797C7.00064 4.91996 7.00001 5.00219 7.00001 5.27151V17.17C7.00001 18.041 7.00081 18.6331 7.0388 19.0906C7.07579 19.536 7.1428 19.7634 7.22518 19.922C7.41493 20.2872 7.71277 20.5851 8.07806 20.7748C8.23664 20.8572 8.46402 20.9242 8.90946 20.9612C9.36687 20.9992 9.95899 21 10.83 21H13.17C14.041 21 14.6331 20.9992 15.0906 20.9612C15.536 20.9242 15.7634 20.8572 15.922 20.7748C16.2872 20.5851 16.5851 20.2872 16.7748 19.922C16.8572 19.7634 16.9242 19.536 16.9612 19.0906C16.9992 18.6331 17 18.041 17 17.17V5.27151C17 5.00219 16.9994 4.91996 16.995 4.85797C16.9243 3.86538 16.1346 3.07573 15.142 3.00506C15.0801 3.00064 14.9978 3.00001 14.7285 3.00001C14.6616 3.00001 14.6541 3.00017 14.6491 3.00037C14.5206 3.00524 14.3989 3.05943 14.3094 3.15168C14.3058 3.1553 14.3007 3.16075 14.256 3.21046L13.7673 3.75343L13.7548 3.76722C13.7489 3.77362 13.7374 3.78609 13.7227 3.80087C13.6914 3.83231 13.6352 3.88538 13.5553 3.93802C13.4595 4.00108 13.3541 4.04803 13.2432 4.07701C13.1506 4.1012 13.0735 4.10751 13.0293 4.1097C13.0084 4.11073 12.9914 4.11096 12.9828 4.11104L12.9642 4.11112H11.0359L11.0172 4.11104C11.0086 4.11096 10.9916 4.11073 10.9708 4.1097C10.9265 4.10751 10.8494 4.1012 10.7568 4.07701C10.6459 4.04803 10.5405 4.00108 10.4447 3.93802C10.3648 3.88538 10.3086 3.83231 10.2773 3.80087C10.2627 3.78609 10.2511 3.77362 10.2452 3.76722L10.2327 3.75343L9.74405 3.21046C9.69932 3.16075 9.69418 3.1553 9.69066 3.15168C9.60108 3.05943 9.47941 3.00524 9.35092 3.00037C9.34587 3.00017 9.33838 3.00001 9.27151 3.00001Z"
                    fill="#0F1729"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-black text-center font-semibold">Phones</h1>
                <p className="text-black">122 Element</p>
              </div>
            </span>
            <span className="cursor-pointer hover:bg-white text-white hover:text-black secondary_color flex flex-col items-center bg-white p-3 border border-emerald-500 rounded-lg">
              <div>
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>

                  <g id="office_chair" data-name="office chair">
                    <path
                      class="cls-1"
                      d="M10.09,1.5h3.82a3.82,3.82,0,0,1,3.82,3.82V13a0,0,0,0,1,0,0H6.27a0,0,0,0,1,0,0V5.32A3.82,3.82,0,0,1,10.09,1.5Z"
                    />

                    <path
                      class="cls-1"
                      d="M6.75,13h10.5a2.39,2.39,0,0,1,2.39,2.39v0a1.43,1.43,0,0,1-1.43,1.43H5.8a1.43,1.43,0,0,1-1.43-1.43v0A2.39,2.39,0,0,1,6.75,13Z"
                    />

                    <line class="cls-1" x1="12" y1="16.77" x2="12" y2="20.59" />

                    <circle class="cls-1" cx="8.18" cy="21.55" r="0.95" />

                    <circle class="cls-1" cx="15.82" cy="21.55" r="0.95" />

                    <line
                      class="cls-2"
                      x1="8.18"
                      y1="20.59"
                      x2="15.82"
                      y2="20.59"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="text-black text-center font-semibold">
                  Offices
                </h1>
                <p className="text-black">122 Element</p>
              </div>
            </span>
            <span className="cursor-pointer hover:bg-white text-white hover:text-black secondary_color flex flex-col items-center bg-white p-3 border border-emerald-500 rounded-lg">
              <div>
                <svg
                  fill="#000000"
                  height="50px"
                  width="50px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 484 484"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M478,151.859H335.48v-5h11.486c2.665,0,5.011-1.758,5.759-4.316c0.748-2.558-0.281-5.303-2.526-6.739L245.889,69.086
		c-1.973-1.261-4.494-1.261-6.467,0l-104.311,66.718c-2.245,1.436-3.274,4.181-2.526,6.739c0.748,2.558,3.094,4.316,5.759,4.316
		h11.496v5H6c-3.313,0-6,2.687-6,6v252c0,3.313,2.687,6,6,6h472c3.313,0,6-2.687,6-6v-252C484,154.546,481.313,151.859,478,151.859z
		 M344,403.859H140v-10h204V403.859z M311.5,348.859h-12v-172h12V348.859z M264.5,381.859v-27c0-2.795-1.914-5.136-4.5-5.803
		v-25.197h27.5v25.197c-2.586,0.667-4.5,3.009-4.5,5.803v27H264.5z M196.5,201.859H224v25h-27.5V201.859z M196.5,238.859H224v16
		h-27.5V238.859z M196.5,266.859H224v4h-27.5V266.859z M196.5,282.859H224v29h-27.5V282.859z M196.5,349.056v-25.197H224v25.197
		c-2.586,0.667-4.5,3.009-4.5,5.803v27H201v-27C201,352.065,199.086,349.723,196.5,349.056z M231.5,360.859h21v21h-21V360.859z
		 M260,201.859h27.5v25H260V201.859z M260,238.859h27.5v16H260V238.859z M260,266.859h27.5v4H260V266.859z M260,282.859h27.5v29H260
		V282.859z M287.5,189.859H260v-13h27.5V189.859z M248,348.859h-12v-172h12V348.859z M224,189.859h-27.5v-13H224V189.859z
		 M184.5,348.859h-12v-172h12V348.859z M160.5,349.056c-2.586,0.667-4.5,3.009-4.5,5.803v6H12v-169h148.5V349.056z M168,360.859h21
		v21h-21V360.859z M295,381.859v-21h21v21H295z M323.5,349.056V191.859H472v169H328v-6C328,352.065,326.086,349.723,323.5,349.056z
		 M472,163.859v16H323.5v-3h5.98c3.313,0,6-2.687,6-6v-7H472z M242.655,81.264l83.795,53.596H158.86L242.655,81.264z
		 M323.48,146.859v18H311.5h-12h-12H260h-12h-12h-12h-27.5h-12h-12h-10.66v-18H323.48z M149.84,163.859v7c0,3.313,2.687,6,6,6h4.66
		v3H12v-16H149.84z M12,372.859h144v9h-22c-3.313,0-6,2.687-6,6v16H12V372.859z M356,403.859v-16c0-3.313-2.687-6-6-6h-22v-9h144v31
		H356z"
                    />
                    <path
                      d="M44.155,258.859h33c3.313,0,6-2.687,6-6v-48c0-3.313-2.687-6-6-6h-33c-3.313,0-6,2.687-6,6v48
		C38.155,256.173,40.842,258.859,44.155,258.859z M50.155,246.859v-20h21v20H50.155z M71.155,210.859v4h-21v-4H71.155z"
                    />
                    <path
                      d="M104.155,258.859h33c3.313,0,6-2.687,6-6v-48c0-3.313-2.687-6-6-6h-33c-3.313,0-6,2.687-6,6v48
		C98.155,256.173,100.842,258.859,104.155,258.859z M110.155,246.859v-20h21v20H110.155z M131.155,210.859v4h-21v-4H131.155z"
                    />
                    <path
                      d="M44.155,349.859h33c3.313,0,6-2.687,6-6v-48c0-3.313-2.687-6-6-6h-33c-3.313,0-6,2.687-6,6v48
		C38.155,347.173,40.842,349.859,44.155,349.859z M50.155,337.859v-20h21v20H50.155z M71.155,301.859v4h-21v-4H71.155z"
                    />
                    <path
                      d="M104.155,349.859h33c3.313,0,6-2.687,6-6v-48c0-3.313-2.687-6-6-6h-33c-3.313,0-6,2.687-6,6v48
		C98.155,347.173,100.842,349.859,104.155,349.859z M110.155,337.859v-20h21v20H110.155z M131.155,301.859v4h-21v-4H131.155z"
                    />
                    <path
                      d="M348.155,258.859h33c3.313,0,6-2.687,6-6v-48c0-3.313-2.687-6-6-6h-33c-3.313,0-6,2.687-6,6v48
		C342.155,256.173,344.842,258.859,348.155,258.859z M354.155,246.859v-20h21v20H354.155z M375.155,210.859v4h-21v-4H375.155z"
                    />
                    <path
                      d="M408.155,258.859h33c3.313,0,6-2.687,6-6v-48c0-3.313-2.687-6-6-6h-33c-3.313,0-6,2.687-6,6v48
		C402.155,256.173,404.842,258.859,408.155,258.859z M414.155,246.859v-20h21v20H414.155z M435.155,210.859v4h-21v-4H435.155z"
                    />
                    <path
                      d="M348.155,349.859h33c3.313,0,6-2.687,6-6v-48c0-3.313-2.687-6-6-6h-33c-3.313,0-6,2.687-6,6v48
		C342.155,347.173,344.842,349.859,348.155,349.859z M354.155,337.859v-20h21v20H354.155z M375.155,301.859v4h-21v-4H375.155z"
                    />
                    <path
                      d="M408.155,349.859h33c3.313,0,6-2.687,6-6v-48c0-3.313-2.687-6-6-6h-33c-3.313,0-6,2.687-6,6v48
		C402.155,347.173,404.842,349.859,408.155,349.859z M414.155,337.859v-20h21v20H414.155z M435.155,301.859v4h-21v-4H435.155z"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="text-black text-center font-semibold">Villa</h1>
                <p className="text-black">122 Element</p>
              </div>
            </span>
            <span className="cursor-pointer hover:bg-white text-white hover:text-black secondary_color flex flex-col items-center bg-white p-3 border border-emerald-500 rounded-lg">
              <div>
                <svg
                  fill="#000000"
                  height="50px"
                  width="50px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 287.321 287.321"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M143.66,165.679c-15.469,0-28.052,12.796-28.052,28.521v64.6c0,15.727,12.583,28.521,28.052,28.521
		c15.469,0,28.052-12.795,28.052-28.521v-64.6C171.711,178.475,159.128,165.679,143.66,165.679z"
                    />
                    <path
                      d="M230.82,0h-34.865c-5.579,0-10.102,4.523-10.102,10.102c0,5.657-16.019,16.046-42.192,16.046
		c-26.175,0-42.193-10.389-42.193-16.046C101.466,4.523,96.943,0,91.364,0H56.501C50.923,0,46.4,4.523,46.4,10.102v15.319
		c0,5.579,4.523,10.102,10.102,10.102c5.579,0,10.103-4.522,10.103-10.102v-5.217h16.92c6.326,13.629,25.368,23.567,50.033,25.711
		v26.057h-24.762c-4.685,0-8.755,3.222-9.831,7.781c-1.076,4.56,1.123,9.262,5.314,11.356l29.278,14.641v26.338
		c-27.314,2.951-48.653,26.141-48.653,54.227V224.5H73.933c-5.579,0-10.103,4.523-10.103,10.102c0,5.578,4.523,10.102,10.103,10.102
		h10.971v7.33c0,5.579,4.523,10.102,10.102,10.102c5.578,0,10.102-4.522,10.102-10.102v-65.72c0-18.938,15.408-34.346,34.348-34.346
		h8.408c18.939,0,34.348,15.407,34.348,34.346v65.72c0,5.579,4.523,10.102,10.102,10.102c5.579,0,10.103-4.522,10.103-10.102
		v-42.192h10.971c5.579,0,10.103-4.523,10.103-10.102s-4.523-10.103-10.103-10.103h-10.971v-3.322
		c0-28.086-21.339-51.275-48.654-54.227V105.75l29.279-14.641c4.191-2.095,6.391-6.797,5.314-11.356
		c-1.076-4.56-5.146-7.781-9.831-7.781h-24.763V45.915c24.665-2.144,43.707-12.082,50.033-25.711h16.923v5.217
		c0,5.579,4.523,10.102,10.103,10.102c5.578,0,10.102-4.522,10.102-10.102V10.102C240.921,4.523,236.398,0,230.82,0z"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="text-black text-center font-semibold">
                  Bycicles
                </h1>
                <p className="text-black">122 Element</p>
              </div>
            </span>
          </div>
        </div>
        <div className=" px-6 lg:flex sm:flex lg:px-20 gap-1">
          <div className="lg:w-4/12">
            <div className="bg-white rounded-xl py-10">
              <h1 className="text-black text-center font-bold text-2xl py-5">
                Filter Property
              </h1>
              <form className="px-3">
                <select
                  id="countries"
                  className="bg-gray-50 border py-5  border-gray-300 mb-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected disabled>
                    Location
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select
                  id="countries"
                  className="bg-gray-50 border py-5 border-gray-300 mb-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected disabled>
                    Type
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select
                  id="countries"
                  className="bg-gray-50 border py-5 border-gray-300 mb-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected disabled>
                    Transaction
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select
                  id="countries"
                  className="bg-gray-50 border py-5 border-gray-300 mb-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected disabled>
                    Facility
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>

                <button
                  type="reset"
                  className="text-black px-10 py-3 rounded-xl secondary_color"
                >
                  Reset Filter{" "}
                </button>
              </form>
            </div>
          </div>
          <motion.div className="w-9/12">
            <Residential />
            <div className="py-10">
          <div className="join grid grid-cols-2 w-4/12 mx-auto  ">
            <button className="join-item btn btn-primary">Previous page</button>
            <button className="join-item btn btn-primary">Next</button>
          </div>
        </div>
          </motion.div>
          
        </div>
    
      </section>
    </>
  );
};

export default Properties;
