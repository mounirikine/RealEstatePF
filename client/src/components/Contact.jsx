import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <div className=""> 
<section
   className="relative z-10 overflow-hidden bg-gray-100 rounded-2xl md:mx-5 dark:bg-dark px-10 py-10 lg:py-[120px]"
  
   >
   <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4 lg:justify-between">
         <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
               <span className="block mb-4 text-base font-semibold ">
               Contact Us
               </span>
               <h2
                  className="text-dark dark:text-white mb-6 text-[20px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
                  >
                  GET IN TOUCH WITH US
               </h2>
               <p
                  className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9"
                  >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  adiqua minim veniam quis nostrud exercitation ullamco
               </p>
               <div className="mb-8 flex w-full max-w-[370px]">
                  <div
                     className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
                     >
                     <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                           d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                           fill="currentColor"
                           />
                     </svg>
                  </div>
                  <div className="w-full">
                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Our Location
                     </h4>
                     <p className="text-base text-body-color dark:text-dark-6">
                        99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                     </p>
                  </div>
               </div>
               <div className="mb-8 flex w-full max-w-[370px]">
                  <div
                     className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
                     >
                     <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <g clip-path="url(#clip0_941_17577)">
                           <path
                              d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                              fill="currentColor"
                              />
                           <path
                              d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                              fill="currentColor"
                              />
                           <path
                              d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                              fill="currentColor"
                              />
                        </g>
                        <defs>
                           <clipPath id="clip0_941_17577">
                              <rect width="32" height="32" fill="white" />
                           </clipPath>
                        </defs>
                     </svg>
                  </div>
                  <div className="w-full">
                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Phone Number
                     </h4>
                     <p className="text-base text-body-color dark:text-dark-6">
                        (+62)81 414 257 9980
                     </p>
                  </div>
               </div>
               <div className="mb-8 flex w-full max-w-[370px]">
                  <div
                     className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
                     >
                     <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                           d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                           fill="currentColor"
                           />
                     </svg>
                  </div>
                  <div className="w-full">
                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Email Address
                     </h4>
                     <p className="text-base text-body-color dark:text-dark-6">
                        info@yourdomain.com
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div
               className="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12"
               >
               <form>
                  <div className="mb-6">
                     <input
                        type="text"
                        placeholder="Your Name"
                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                        />
                  </div>
                  <div className="mb-6">
                     <input
                        type="email"
                        placeholder="Your Email"
                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                        />
                  </div>
                  <div className="mb-6">
                     <input
                        type="text"
                        placeholder="Your Phone"
                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                        />
                  </div>
                  <div className="mb-6">
                     <textarea
                        rows="6"
                        placeholder="Your Message"
                        className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                        ></textarea>
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="w-full p-3 text-white transition border rounded border-primary bg-[#782DF3] hover:bg-opacity-90"
                        >
                     Send Message
                     </button>
                  </div>
               </form>
               <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                     <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                           fill="#3056D3"
                           />
                     </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                     <svg
                        width="34"
                        height="134"
                        viewBox="0 0 34 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="31.9993"
                           cy="132"
                           r="1.66667"
                           transform="rotate(180 31.9993 132)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="117.333"
                           r="1.66667"
                           transform="rotate(180 31.9993 117.333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="102.667"
                           r="1.66667"
                           transform="rotate(180 31.9993 102.667)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="88"
                           r="1.66667"
                           transform="rotate(180 31.9993 88)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="73.3333"
                           r="1.66667"
                           transform="rotate(180 31.9993 73.3333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="45"
                           r="1.66667"
                           transform="rotate(180 31.9993 45)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="16"
                           r="1.66667"
                           transform="rotate(180 31.9993 16)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="59"
                           r="1.66667"
                           transform="rotate(180 31.9993 59)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="30.6666"
                           r="1.66667"
                           transform="rotate(180 31.9993 30.6666)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="1.66665"
                           r="1.66667"
                           transform="rotate(180 31.9993 1.66665)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="132"
                           r="1.66667"
                           transform="rotate(180 17.3333 132)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="117.333"
                           r="1.66667"
                           transform="rotate(180 17.3333 117.333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="102.667"
                           r="1.66667"
                           transform="rotate(180 17.3333 102.667)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="88"
                           r="1.66667"
                           transform="rotate(180 17.3333 88)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="73.3333"
                           r="1.66667"
                           transform="rotate(180 17.3333 73.3333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="45"
                           r="1.66667"
                           transform="rotate(180 17.3333 45)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="16"
                           r="1.66667"
                           transform="rotate(180 17.3333 16)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="59"
                           r="1.66667"
                           transform="rotate(180 17.3333 59)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="30.6666"
                           r="1.66667"
                           transform="rotate(180 17.3333 30.6666)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="1.66665"
                           r="1.66667"
                           transform="rotate(180 17.3333 1.66665)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="132"
                           r="1.66667"
                           transform="rotate(180 2.66536 132)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="117.333"
                           r="1.66667"
                           transform="rotate(180 2.66536 117.333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="102.667"
                           r="1.66667"
                           transform="rotate(180 2.66536 102.667)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="88"
                           r="1.66667"
                           transform="rotate(180 2.66536 88)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="73.3333"
                           r="1.66667"
                           transform="rotate(180 2.66536 73.3333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="45"
                           r="1.66667"
                           transform="rotate(180 2.66536 45)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="16"
                           r="1.66667"
                           transform="rotate(180 2.66536 16)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="59"
                           r="1.66667"
                           transform="rotate(180 2.66536 59)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="30.6666"
                           r="1.66667"
                           transform="rotate(180 2.66536 30.6666)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="1.66665"
                           r="1.66667"
                           transform="rotate(180 2.66536 1.66665)"
                           fill="#13C296"
                           />
                     </svg>
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                     <svg
                        width="107"
                        height="134"
                        viewBox="0 0 107 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="104.999"
                           cy="132"
                           r="1.66667"
                           transform="rotate(180 104.999 132)"
                           fill="#13C296"
                           />
                        <circle
                           cx="104.999"
                           cy="117.333"
                           r="1.66667"
                           transform="rotate(180 104.999 117.333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="104.999"
                           cy="102.667"
                           r="1.66667"
                           transform="rotate(180 104.999 102.667)"
                           fill="#13C296"
                           />
                        <circle
                           cx="104.999"
                           cy="88"
                           r="1.66667"
                           transform="rotate(180 104.999 88)"
                           fill="#13C296"
                           />
                        <circle
                           cx="104.999"
                           cy="73.3333"
                           r="1.66667"
                           transform="rotate(180 104.999 73.3333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="104.999"
                           cy="45"
                           r="1.66667"
                           transform="rotate(180 104.999 45)"
                           fill="#13C296"
                           />
                        <circle
                           cx="104.999"
                           cy="16"
                           r="1.66667"
                           transform="rotate(180 104.999 16)"
                           fill="#13C296"
                           />
                        <circle
                           cx="104.999"
                           cy="59"
                           r="1.66667"
                           transform="rotate(180 104.999 59)"
                           fill="#13C296"
                           />
                        <circle
                           cx="104.999"
                           cy="30.6666"
                           r="1.66667"
                           transform="rotate(180 104.999 30.6666)"
                           fill="#13C296"
                           />
                        <circle
                           cx="104.999"
                           cy="1.66665"
                           r="1.66667"
                           transform="rotate(180 104.999 1.66665)"
                           fill="#13C296"
                           />
                        <circle
                           cx="90.3333"
                           cy="132"
                           r="1.66667"
                           transform="rotate(180 90.3333 132)"
                           fill="#13C296"
                           />
                        <circle
                           cx="90.3333"
                           cy="117.333"
                           r="1.66667"
                           transform="rotate(180 90.3333 117.333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="90.3333"
                           cy="102.667"
                           r="1.66667"
                           transform="rotate(180 90.3333 102.667)"
                           fill="#13C296"
                           />
                        <circle
                           cx="90.3333"
                           cy="88"
                           r="1.66667"
                           transform="rotate(180 90.3333 88)"
                           fill="#13C296"
                           />
                        <circle
                           cx="90.3333"
                           cy="73.3333"
                           r="1.66667"
                           transform="rotate(180 90.3333 73.3333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="90.3333"
                           cy="45"
                           r="1.66667"
                           transform="rotate(180 90.3333 45)"
                           fill="#13C296"
                           />
                        <circle
                           cx="90.3333"
                           cy="16"
                           r="1.66667"
                           transform="rotate(180 90.3333 16)"
                           fill="#13C296"
                           />
                        <circle
                           cx="90.3333"
                           cy="59"
                           r="1.66667"
                           transform="rotate(180 90.3333 59)"
                           fill="#13C296"
                           />
                        <circle
                           cx="90.3333"
                           cy="30.6666"
                           r="1.66667"
                           transform="rotate(180 90.3333 30.6666)"
                           fill="#13C296"
                           />
                        <circle
                           cx="90.3333"
                           cy="1.66665"
                           r="1.66667"
                           transform="rotate(180 90.3333 1.66665)"
                           fill="#13C296"
                           />
                        <circle
                           cx="75.6654"
                           cy="132"
                           r="1.66667"
                           transform="rotate(180 75.6654 132)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="132"
                           r="1.66667"
                           transform="rotate(180 31.9993 132)"
                           fill="#13C296"
                           />
                        <circle
                           cx="75.6654"
                           cy="117.333"
                           r="1.66667"
                           transform="rotate(180 75.6654 117.333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="117.333"
                           r="1.66667"
                           transform="rotate(180 31.9993 117.333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="75.6654"
                           cy="102.667"
                           r="1.66667"
                           transform="rotate(180 75.6654 102.667)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="102.667"
                           r="1.66667"
                           transform="rotate(180 31.9993 102.667)"
                           fill="#13C296"
                           />
                        <circle
                           cx="75.6654"
                           cy="88"
                           r="1.66667"
                           transform="rotate(180 75.6654 88)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="88"
                           r="1.66667"
                           transform="rotate(180 31.9993 88)"
                           fill="#13C296"
                           />
                        <circle
                           cx="75.6654"
                           cy="73.3333"
                           r="1.66667"
                           transform="rotate(180 75.6654 73.3333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="73.3333"
                           r="1.66667"
                           transform="rotate(180 31.9993 73.3333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="75.6654"
                           cy="45"
                           r="1.66667"
                           transform="rotate(180 75.6654 45)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="45"
                           r="1.66667"
                           transform="rotate(180 31.9993 45)"
                           fill="#13C296"
                           />
                        <circle
                           cx="75.6654"
                           cy="16"
                           r="1.66667"
                           transform="rotate(180 75.6654 16)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="16"
                           r="1.66667"
                           transform="rotate(180 31.9993 16)"
                           fill="#13C296"
                           />
                        <circle
                           cx="75.6654"
                           cy="59"
                           r="1.66667"
                           transform="rotate(180 75.6654 59)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="59"
                           r="1.66667"
                           transform="rotate(180 31.9993 59)"
                           fill="#13C296"
                           />
                        <circle
                           cx="75.6654"
                           cy="30.6666"
                           r="1.66667"
                           transform="rotate(180 75.6654 30.6666)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="30.6666"
                           r="1.66667"
                           transform="rotate(180 31.9993 30.6666)"
                           fill="#13C296"
                           />
                        <circle
                           cx="75.6654"
                           cy="1.66665"
                           r="1.66667"
                           transform="rotate(180 75.6654 1.66665)"
                           fill="#13C296"
                           />
                        <circle
                           cx="31.9993"
                           cy="1.66665"
                           r="1.66667"
                           transform="rotate(180 31.9993 1.66665)"
                           fill="#13C296"
                           />
                        <circle
                           cx="60.9993"
                           cy="132"
                           r="1.66667"
                           transform="rotate(180 60.9993 132)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="132"
                           r="1.66667"
                           transform="rotate(180 17.3333 132)"
                           fill="#13C296"
                           />
                        <circle
                           cx="60.9993"
                           cy="117.333"
                           r="1.66667"
                           transform="rotate(180 60.9993 117.333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="117.333"
                           r="1.66667"
                           transform="rotate(180 17.3333 117.333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="60.9993"
                           cy="102.667"
                           r="1.66667"
                           transform="rotate(180 60.9993 102.667)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="102.667"
                           r="1.66667"
                           transform="rotate(180 17.3333 102.667)"
                           fill="#13C296"
                           />
                        <circle
                           cx="60.9993"
                           cy="88"
                           r="1.66667"
                           transform="rotate(180 60.9993 88)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="88"
                           r="1.66667"
                           transform="rotate(180 17.3333 88)"
                           fill="#13C296"
                           />
                        <circle
                           cx="60.9993"
                           cy="73.3333"
                           r="1.66667"
                           transform="rotate(180 60.9993 73.3333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="73.3333"
                           r="1.66667"
                           transform="rotate(180 17.3333 73.3333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="60.9993"
                           cy="45"
                           r="1.66667"
                           transform="rotate(180 60.9993 45)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="45"
                           r="1.66667"
                           transform="rotate(180 17.3333 45)"
                           fill="#13C296"
                           />
                        <circle
                           cx="60.9993"
                           cy="16"
                           r="1.66667"
                           transform="rotate(180 60.9993 16)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="16"
                           r="1.66667"
                           transform="rotate(180 17.3333 16)"
                           fill="#13C296"
                           />
                        <circle
                           cx="60.9993"
                           cy="59"
                           r="1.66667"
                           transform="rotate(180 60.9993 59)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="59"
                           r="1.66667"
                           transform="rotate(180 17.3333 59)"
                           fill="#13C296"
                           />
                        <circle
                           cx="60.9993"
                           cy="30.6666"
                           r="1.66667"
                           transform="rotate(180 60.9993 30.6666)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="30.6666"
                           r="1.66667"
                           transform="rotate(180 17.3333 30.6666)"
                           fill="#13C296"
                           />
                        <circle
                           cx="60.9993"
                           cy="1.66665"
                           r="1.66667"
                           transform="rotate(180 60.9993 1.66665)"
                           fill="#13C296"
                           />
                        <circle
                           cx="17.3333"
                           cy="1.66665"
                           r="1.66667"
                           transform="rotate(180 17.3333 1.66665)"
                           fill="#13C296"
                           />
                        <circle
                           cx="46.3333"
                           cy="132"
                           r="1.66667"
                           transform="rotate(180 46.3333 132)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="132"
                           r="1.66667"
                           transform="rotate(180 2.66536 132)"
                           fill="#13C296"
                           />
                        <circle
                           cx="46.3333"
                           cy="117.333"
                           r="1.66667"
                           transform="rotate(180 46.3333 117.333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="117.333"
                           r="1.66667"
                           transform="rotate(180 2.66536 117.333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="46.3333"
                           cy="102.667"
                           r="1.66667"
                           transform="rotate(180 46.3333 102.667)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="102.667"
                           r="1.66667"
                           transform="rotate(180 2.66536 102.667)"
                           fill="#13C296"
                           />
                        <circle
                           cx="46.3333"
                           cy="88"
                           r="1.66667"
                           transform="rotate(180 46.3333 88)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="88"
                           r="1.66667"
                           transform="rotate(180 2.66536 88)"
                           fill="#13C296"
                           />
                        <circle
                           cx="46.3333"
                           cy="73.3333"
                           r="1.66667"
                           transform="rotate(180 46.3333 73.3333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="73.3333"
                           r="1.66667"
                           transform="rotate(180 2.66536 73.3333)"
                           fill="#13C296"
                           />
                        <circle
                           cx="46.3333"
                           cy="45"
                           r="1.66667"
                           transform="rotate(180 46.3333 45)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="45"
                           r="1.66667"
                           transform="rotate(180 2.66536 45)"
                           fill="#13C296"
                           />
                        <circle
                           cx="46.3333"
                           cy="16"
                           r="1.66667"
                           transform="rotate(180 46.3333 16)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="16"
                           r="1.66667"
                           transform="rotate(180 2.66536 16)"
                           fill="#13C296"
                           />
                        <circle
                           cx="46.3333"
                           cy="59"
                           r="1.66667"
                           transform="rotate(180 46.3333 59)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="59"
                           r="1.66667"
                           transform="rotate(180 2.66536 59)"
                           fill="#13C296"
                           />
                        <circle
                           cx="46.3333"
                           cy="30.6666"
                           r="1.66667"
                           transform="rotate(180 46.3333 30.6666)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="30.6666"
                           r="1.66667"
                           transform="rotate(180 2.66536 30.6666)"
                           fill="#13C296"
                           />
                        <circle
                           cx="46.3333"
                           cy="1.66665"
                           r="1.66667"
                           transform="rotate(180 46.3333 1.66665)"
                           fill="#13C296"
                           />
                        <circle
                           cx="2.66536"
                           cy="1.66665"
                           r="1.66667"
                           transform="rotate(180 2.66536 1.66665)"
                           fill="#13C296"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </div> 
  )
}

export default Contact


//<section className="bg-white p-4 md:p-8">
    //   <div className="flex-col justify-center items-center lg:flex">
    //     <div className="text-center mb-6 lg:mb-0">
    //       <h1 className="text-black text-4xl font-bold">Contact Us</h1>
    //       <p className="text-gray-500 w-full lg:w-8/12 py-5 mx-auto text-lg font-semibold">
    //         Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
    //       </p>
    //     </div>
    //   </div>

    //   <motion.div className="lg:flex items-center" 
    //      initial={{x:5 ,opacity:0}}
    //      whileInView={{x:0,opacity:1 }}
    //      transition={{duration:0.8 ,delay:0.75}} 
    //   >
    //   <div className="w-full lg:w-6/12 shadow-xl p-4 md:p-8 border rounded-3xl">
    //         <form action="#" className="space-y-8 ">
    //       <div>
    //           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    //           <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
    //       </div>
    //       <div>
    //           <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
    //           <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
    //       </div>
    //       <div className="sm:col-span-2">
    //           <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
    //           <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
    //       </div>
    //       <button
    //           type="submit"
    //           className="secondary_color px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold"
    //         >
    //           Send message
    //         </button>      </form>
    //         </div>
    //     <div className="w-full lg:flex items-center justify-center hidden  lg:w-5/12 mb-8 lg:mb-0">
    //             <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="474.81823" height="590.59868" viewBox="0 0 674.81823 590.59868" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M295.15237,355.9586l-32.53806-18.32671a120.49146,120.49146,0,0,1,12.68417-56.56929c7.5018,34.04891,46.98122,50.24832,65.19652,79.97724a72.47584,72.47584,0,0,1,5.88427,62.54382l2.14,26.39926a121.44657,121.44657,0,0,1-76.24937-67.27817,117.31036,117.31036,0,0,1-8.13843-28.28193C279.30211,356.03721,295.15237,355.9586,295.15237,355.9586Z" transform="translate(-262.59088 -154.70066)" fill="#f2f2f2"/><path d="M880.07789,689.37078l.99775-22.43416a72.4554,72.4554,0,0,1,33.79562-8.555c-16.23146,13.27042-14.203,38.85123-25.20757,56.6968a43.58207,43.58207,0,0,1-31.95921,20.13989l-13.58307,8.31649A73.02986,73.02986,0,0,1,859.51425,684.356a70.543,70.543,0,0,1,12.96441-12.04606C875.73183,680.8879,880.07789,689.37078,880.07789,689.37078Z" transform="translate(-262.59088 -154.70066)" fill="#f2f2f2"/><polygon points="582.489 577.289 570.189 577.288 564.338 529.848 582.491 529.849 582.489 577.289" fill="#ffb6b6"/><path d="M848.2162,743.91183l-39.658-.00147v-.50161a15.43685,15.43685,0,0,1,15.436-15.43577h.001l7.24407-5.49573,13.51581,5.49657,3.46191.00014Z" transform="translate(-262.59088 -154.70066)" fill="#2f2e41"/><polygon points="525.348 577.289 513.049 577.288 507.198 529.848 525.351 529.849 525.348 577.289" fill="#ffb6b6"/><path d="M791.07593,743.91183l-39.658-.00147v-.50161a15.43685,15.43685,0,0,1,15.436-15.43577h.001l7.24407-5.49573,13.51581,5.49657,3.4619.00014Z" transform="translate(-262.59088 -154.70066)" fill="#2f2e41"/><path d="M782.6155,472.63086l80,2c15.19373,8.25247,15.42444,26.11377,10.44617,47.32025,0,0,1.68058,12.60446-1.68061,15.96565s-5.04179,3.36119-3.36119,9.24328-7.19878,15.48928-6.12029,16.56777,3.59939,6.96058,3.59939,6.96058l-8.403,47.897s-5.88209,83.18952-7.56268,84.87011-3.36119,0-1.6806,4.20149,3.36119,2.5209,1.6806,4.20149a61.88778,61.88778,0,0,0-4.20149,5.04179h-20.316s-1.53172-8.403-1.53172-9.24328-1.6806-5.88208-1.6806-6.72238,1.48541-2.32571,1.48541-2.32571a27.6452,27.6452,0,0,0,1.03548-5.237c0-1.68059,5.04179-66.38355,5.04179-66.38355l-10.08357-84.02981-24.36865,82.34922s0,72.26563-1.6806,73.94623-1.68059.8403-.84029,4.20149,4.20149,2.5209,1.68059,5.04179-3.36119-1.6806-2.52089,2.52089l.8403,4.2015-25.209.3606s-3.36119-7.083-1.68059-9.60388,1.57976-1.83278-.47057-5.95818-2.89063-4.9657-2.05033-5.806.8403-5.30976.8403-5.30976l4.20149-80.40065s.8403-84.87011.8403-87.391a8.38157,8.38157,0,0,0-.698-3.7803v-3.42178l3.21893-12.12478Z" transform="translate(-262.59088 -154.70066)" fill="#2f2e41"/><circle cx="568.08172" cy="126.72635" r="24.85645" fill="#ffb6b6"/><path d="M818.24437,322.71185c-5.355,3.18356-8.55835,9.03293-10.39722,14.98517a142.00821,142.00821,0,0,0-6.10242,33.92892l-1.94226,34.47532-24.05462,73.40765c20.84735,17.64,99.20941,4.00906,99.20941,4.00906s2.40545-.80179,0-3.20727-4.74722-.27435-2.34176-2.67984.74721.27435-.0546-2.13114,0-.80178.80181-1.60363-6.20727-8.01825-6.20727-8.01825L873.57,423.74118l8.01819-84.993c-9.62189-12.02732-28.97268-19.11734-28.97268-19.11734l-5-9-25,2Z" transform="translate(-262.59088 -154.70066)" fill="#e6e6e6"/><path d="M814.83523,266.83935a11.74568,11.74568,0,0,1,2.85009.374,40.56522,40.56522,0,0,0,5.57911.93554,25.8518,25.8518,0,0,1,23.14794,21.92774c1.44434-1.25928,4.731-3.57568,7.42481-1.42285h0c.041.03418.06494.05176.15967.00683,1.78906-.84863,4.96484-11.29492,5.061-20.49267.05078-4.88184-.71777-11.11572-4.666-13.08985l-.208-.104-.05469-.22607c-.26367-1.09815-3.21094-2.97266-8.333-4.43164-9.30859-2.65137-23.18418-7.81629-30.99766-.21521-.5913,2.5625-2.515,8.04626-4.45839,8.66784-2.15186.688-4.01026,1.28174-4.30322,3.92139a80.90954,80.90954,0,0,0,.05322,11.2793,11.51926,11.51926,0,0,1,4.09228-5.74854A8.11106,8.11106,0,0,1,814.83523,266.83935Z" transform="translate(-262.59088 -154.70066)" fill="#2f2e41"/><path d="M768.57014,404.1821l40.60315-26.00339-20.4505-27.18528-20.19359,24.84-62.91881,3.85893a11.99113,11.99113,0,1,0-.67121,17.67065Z" transform="translate(-262.59088 -154.70066)" fill="#ffb6b6"/><path d="M846.85849,341.88316c2.35656,14.26167-42.14558,41.49536-42.14558,41.49536-.0007-3.34743-26.56183,21.92349-27.76074,19.14726-3.40742-7.8903-5.80313-26.57884-10.56448-29.57011-2.72294-1.71066,16.39926-17.78078,16.39926-17.78078s10.00953-10.08383,23.14493-22.80307a30.64421,30.64421,0,0,1,28.38206-8.29616S844.50191,327.62151,846.85849,341.88316Z" transform="translate(-262.59088 -154.70066)" fill="#e6e6e6"/><path d="M930.54809,411.00762l-26.8573-40.04345-26.74616,21.02154,25.26206,19.66309,5.19033,62.823a11.99111,11.99111,0,1,0,17.68089.29689Z" transform="translate(-262.59088 -154.70066)" fill="#ffb6b6"/><path d="M866.60542,334.056c14.20857-2.658,42.37846,41.2575,42.37846,41.2575-3.34667.07157,22.481,26.09165,19.73078,27.34908-7.81638,3.57373-26.45,6.36462-29.33979,11.18824-1.65262,2.75855-18.124-16.01909-18.124-16.01909s-10.29352-9.79376-23.288-22.6569a30.64421,30.64421,0,0,1-8.89528-28.2S852.39687,336.714,866.60542,334.056Z" transform="translate(-262.59088 -154.70066)" fill="#e6e6e6"/><path d="M937.40912,744.10934a1.18647,1.18647,0,0,1-1.19007,1.19h-280.29a1.19,1.19,0,1,1,0-2.38h280.29A1.18651,1.18651,0,0,1,937.40912,744.10934Z" transform="translate(-262.59088 -154.70066)" fill="#ccc"/><path d="M677.75271,383.49276H337.58265a20.06844,20.06844,0,0,0-20.0458,20.04579V615.32674a20.06862,20.06862,0,0,0,20.0458,20.04579H677.75243a20.0685,20.0685,0,0,0,20.04607-20.04579V403.53855A20.06826,20.06826,0,0,0,677.75271,383.49276Z" transform="translate(-262.59088 -154.70066)" fill="#7af065"/><path d="M677.75271,383.49276H337.58265a20.06844,20.06844,0,0,0-20.0458,20.04579V615.32674a20.06862,20.06862,0,0,0,20.0458,20.04579H677.75243a20.0685,20.0685,0,0,0,20.04607-20.04579V403.53855A20.06826,20.06826,0,0,0,677.75271,383.49276Zm6.57844,152.13011A82.40625,82.40625,0,0,1,603.3127,617.7066c-34.51645.44931,19.0976.62451-22.53172.62451-95.19269,0-194.45228-.90963-231.48716-1.49943A18.67483,18.67483,0,0,1,331.00421,598.233V403.55426a6.60062,6.60062,0,0,1,6.57706-6.59332H677.73893a6.59993,6.59993,0,0,1,6.59222,6.57569Z" transform="translate(-262.59088 -154.70066)" fill="#3f3d56"/><path d="M635.87829,261.53846H376.70447a11.139,11.139,0,0,0-10.471,7.38381l-40.02762,112.2998a11.11665,11.11665,0,0,0,10.45539,14.84872l347.59461.61689h.01548a11.11649,11.11649,0,0,0,10.21729-15.4952l-.60607.25947.60607-.25947-48.393-112.91669A11.10292,11.10292,0,0,0,635.87829,261.53846Z" transform="translate(-262.59088 -154.70066)" fill="#3f3d56"/><path d="M695.38853,383.63116a11.14573,11.14573,0,0,1-.9,4.38l-48.39,86.92a11.14705,11.14705,0,0,1-10.22,6.73h-259.17a11.14664,11.14664,0,0,1-10.48-7.38l-40.02-86.3a11.10932,11.10932,0,0,1,6.74-14.2,10.93694,10.93694,0,0,1,3.71-.65l42.46-.07995,17.33-.03,228.04-.4,17.34-.03,42.43-.08h.01A11.12186,11.12186,0,0,1,695.38853,383.63116Z" transform="translate(-262.59088 -154.70066)" fill="#3f3d56"/><path d="M363.08446,542.35835c5.13935,0,75.714,4.31317,75.714,9.45252s-70.57469,9.15868-75.714,9.15868a9.3056,9.3056,0,1,1,0-18.6112Z" transform="translate(-262.59088 -154.70066)" fill="#3f3d56"/><path d="M619.73851,193.22119h-218.53a22.11557,22.11557,0,0,0-22.09,22.09v266.35h256.76a10.9775,10.9775,0,0,0,5.95-1.73v-264.62A22.11562,22.11562,0,0,0,619.73851,193.22119Z" transform="translate(-262.59088 -154.70066)" fill="#e6e6e6"/><path d="M536.32853,211.13116h-119.76a20.13965,20.13965,0,0,0-20.12,20.11005v250.42h228.04v-182.37A88.26188,88.26188,0,0,0,536.32853,211.13116Z" transform="translate(-262.59088 -154.70066)" fill="#fff"/><path d="M585.63853,459.4212h-150.34a4.9,4.9,0,1,0,0,9.8h150.34a4.9,4.9,0,1,0,0-9.8Z" transform="translate(-262.59088 -154.70066)" fill="#e4e4e4"/><path d="M585.63853,440.0412h-150.34a4.905,4.905,0,0,0,0,9.81h150.34a4.905,4.905,0,1,0,0-9.81Z" transform="translate(-262.59088 -154.70066)" fill="#e4e4e4"/><path d="M500.46849,420.6712h-65.17a4.9,4.9,0,1,0,0,9.8h65.17a4.9,4.9,0,1,0,0-9.8Z" transform="translate(-262.59088 -154.70066)" fill="#e4e4e4"/><path d="M585.63853,380.09119h-150.34a4.905,4.905,0,0,0,0,9.81h150.34a4.905,4.905,0,1,0,0-9.81Z" transform="translate(-262.59088 -154.70066)" fill="#e4e4e4"/><path d="M585.63853,360.72119h-150.34a4.9,4.9,0,1,0,0,9.8h150.34a4.9,4.9,0,1,0,0-9.8Z" transform="translate(-262.59088 -154.70066)" fill="#e4e4e4"/><path d="M500.46849,341.34119h-65.17a4.905,4.905,0,0,0,0,9.81h65.17a4.905,4.905,0,1,0,0-9.81Z" transform="translate(-262.59088 -154.70066)" fill="#e4e4e4"/><path d="M585.63853,300.76117h-150.34a4.905,4.905,0,0,0,0,9.81h150.34a4.905,4.905,0,1,0,0-9.81Z" transform="translate(-262.59088 -154.70066)" fill="#7af065"/><path d="M585.63853,281.39117h-150.34a4.905,4.905,0,0,0,0,9.81h150.34a4.905,4.905,0,1,0,0-9.81Z" transform="translate(-262.59088 -154.70066)" fill="#7af065"/><path d="M500.46849,262.01117h-65.17a4.905,4.905,0,0,0,0,9.81h65.17a4.905,4.905,0,1,0,0-9.81Z" transform="translate(-262.59088 -154.70066)" fill="#7af065"/><circle cx="371.0448" cy="38.16281" r="38.16282" fill="#7af065"/><path d="M628.42948,212.72544a4.24383,4.24383,0,0,1-3.39572-1.69838l-10.4114-13.8821a4.245,4.245,0,1,1,6.79214-5.09376l6.8115,9.0813,17.49444-26.24132a4.24516,4.24516,0,1,1,7.06438,4.70959L631.962,210.835a4.24687,4.24687,0,0,1-3.41438,1.88909C628.50825,212.72475,628.46887,212.72544,628.42948,212.72544Z" transform="translate(-262.59088 -154.70066)" fill="#fff"/></svg>
    //         </div>
            
    //     </motion.div>
    // </section>