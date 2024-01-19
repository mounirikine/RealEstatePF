import { useState } from "react";
import Header from "../components/Header";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function About() {
  const [counterState, setCounterState] = useState(false);
  return (
    <>
      <Header />
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <section>
          <div className="px-5 lg:px-20 py-14 bg-white  ">
            <div className="pt-14 ">
              <h1 className="text-center font-semibold text-lg text-black primary_text">
                About Us
              </h1>
              <h1 className="text-center text-black text-5xl py-5 font-bold">
                About the company
              </h1>
              <p className="text-gray-500 text-center font-bold text-lg">
                Embodying sustainable practices for the future
              </p>
            </div>
          </div>
          <div className="rounded-xl lg:px-20 lg:flex items-center py-6 gap-5">
            <div className=" w-11/12 lg:w-5/12 px-10 py-10 bg-white rounded-3xl shadow-xl text-black">
              <h1 className="text-5xl py-10 font-semibold primary_text">
                We've created a real and lasting impact
              </h1>

              <div className="grid grid-cols-2 items-center gap-4 pt-5 pb-20">
                <span className="text-center">
                  <h1 className="text-5xl font-bold py-3 ">
                    {counterState && (
                      <CountUp start={0} end={100} delay={0}></CountUp>
                    )}
                    +
                  </h1>
                  <h1 className="text-lg font-semibold text-gray-500">
                    Years in business
                  </h1>
                </span>
                <span className="text-center">
                  <h1 className="text-5xl font-bold py-3 ">
                    <CountUp start={0} end={195} delay={0}></CountUp>
                  </h1>
                  <h1 className="text-lg font-semibold text-gray-500">
                    Countries
                  </h1>
                </span>
                <span className="text-center">
                  <h1 className="text-5xl font-bold py-3 ">
                    <CountUp start={0} end={35} delay={0.5}></CountUp>+
                  </h1>
                  <h1 className="text-lg font-semibold text-gray-500">
                    Integration partners
                  </h1>
                </span>
                <span className="text-center">
                  <h1 className="text-5xl font-bold py-3 ">
                    <CountUp start={0} end={4} delay={0.7}></CountUp>M+
                  </h1>
                  <h1 className="text-lg font-semibold text-gray-500">Users</h1>
                </span>
              </div>
            </div>
            <div className="w-4/12 hidden lg:flex  px-4 py-7">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  width="526.68103"
                  height="573.95115"
                  viewBox="0 0 826.68103 573.95115"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <circle
                    id="b8f08c5c-b476-40dd-b664-770adaae3509"
                    data-name="Ellipse 182"
                    cx="93.108"
                    cy="55.964"
                    r="4.354"
                    fill="#fff"
                  />
                  <circle
                    id="eee44b09-a27a-4be3-8c5b-6b6370df12ff"
                    data-name="Ellipse 183"
                    cx="109.63299"
                    cy="55.964"
                    r="4.354"
                    fill="#fff"
                  />
                  <circle
                    id="a2d5f093-6500-400f-8de1-66712a079cc1"
                    data-name="Ellipse 184"
                    cx="126.15799"
                    cy="55.964"
                    r="4.354"
                    fill="#fff"
                  />
                  <rect
                    id="e14e0169-ef8c-4de3-8e3e-1fb1636d9038"
                    data-name="Rectangle 266"
                    x="82.52899"
                    y="66.19301"
                    width="552.89899"
                    height="3.073"
                    fill="#fff"
                  />
                  <rect
                    id="ffd44901-e4e1-4980-b03e-373b3661f4a7"
                    data-name="Rectangle 246"
                    x="0.271"
                    y="0.36"
                    width="635.63098"
                    height="407.086"
                    fill="#e6e6e6"
                  />
                  <rect
                    id="e89f9aca-511f-49ec-bc12-8613d3bd0166"
                    data-name="Rectangle 264"
                    width="635.63098"
                    height="27.004"
                    fill="#7af065"
                  />
                  <rect
                    id="ad9dc5de-4949-4eac-9eb5-22ff577a9f6a"
                    data-name="Rectangle 247"
                    x="18.972"
                    y="48.785"
                    width="599.28003"
                    height="155.185"
                    fill="#fff"
                  />
                  <rect
                    id="b859c105-7eee-4028-bc04-8285f6faca7e"
                    data-name="Rectangle 259"
                    x="19.351"
                    y="229.47099"
                    width="599.28003"
                    height="155.185"
                    fill="#fff"
                  />
                  <g
                    id="aa41527c-9c03-4708-86c5-0d027f971362"
                    data-name="Group 31"
                  >
                    <rect
                      id="b2d77c21-275f-42a7-94e0-5b816ba20a4e"
                      data-name="Rectangle 250"
                      x="221.34"
                      y="83.11501"
                      width="324.33099"
                      height="14.455"
                      fill="#e6e6e6"
                    />
                    <rect
                      id="b25a2924-64e6-4438-87d6-1fb43933af96"
                      data-name="Rectangle 251"
                      x="221.34"
                      y="119.25201"
                      width="115.639"
                      height="14.455"
                      fill="#e6e6e6"
                    />
                    <rect
                      id="b8fe27c9-e561-42fa-9287-e7ff86698f34"
                      data-name="Rectangle 252"
                      x="221.34"
                      y="155.38901"
                      width="230.375"
                      height="14.455"
                      fill="#e6e6e6"
                    />
                  </g>
                  <path
                    id="a368706a-11d6-41a2-bd00-6a6054248d43-97"
                    data-name="Path 952"
                    d="M383.60648,469.29342a53.91011,53.91011,0,0,1-8.813,29.627,52.688,52.688,0,0,1-3.965,5.325,54.42663,54.42663,0,0,1-11.617,10.322q-1.773,1.175-3.645,2.2a53.73885,53.73885,0,0,1-21.057,6.485c-1.68.164-3.388.242-5.111.242a53.98535,53.98535,0,0,1-13.988-1.829,51.93768,51.93768,0,0,1-7.567-2.627q-1.879-.812-3.673-1.765a53.39286,53.39286,0,0,1-8.165-5.289q-1.783-1.388-3.438-2.926a54.2,54.2,0,1,1,91.039-39.764Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#7af065"
                  />
                  <g
                    id="a0fe7a2e-49bf-4761-b17e-3d52136366c5"
                    data-name="Group 32"
                  >
                    <rect
                      id="a077c903-9ff8-47f6-8a24-46120c36a494"
                      data-name="Rectangle 273"
                      x="139.42002"
                      y="280.96602"
                      width="6.645"
                      height="50.592"
                      fill="#fff"
                    />
                    <rect
                      id="a4f09271-2c50-4e11-a9a3-c26018ed4477"
                      data-name="Rectangle 274"
                      x="117.44601"
                      y="302.94002"
                      width="50.592"
                      height="6.645"
                      fill="#fff"
                    />
                  </g>
                  <g
                    id="bd7f0843-9709-4a5c-8b0e-26656563f0b3"
                    data-name="Group 33"
                  >
                    <rect
                      id="e4567469-258f-4b3a-88b2-7a234fbc5498"
                      data-name="Rectangle 250-2"
                      x="213.20901"
                      y="263.80101"
                      width="324.33099"
                      height="14.455"
                      fill="#e6e6e6"
                    />
                    <rect
                      id="b26a9710-740f-4201-9a9a-df254658921a"
                      data-name="Rectangle 251-2"
                      x="213.20901"
                      y="299.93801"
                      width="115.639"
                      height="14.455"
                      fill="#e6e6e6"
                    />
                    <rect
                      id="a1758efc-04f7-4da1-846b-fd169401f4c2"
                      data-name="Rectangle 252-2"
                      x="213.20901"
                      y="336.07501"
                      width="230.375"
                      height="14.455"
                      fill="#e6e6e6"
                    />
                  </g>
                  <circle
                    id="f2fdcd7e-077f-47c5-987d-3f56ec08fcb2"
                    data-name="Ellipse 194"
                    cx="42.03901"
                    cy="13.433"
                    r="4.467"
                    fill="#fff"
                  />
                  <circle
                    id="bb8af87f-8865-4134-a554-08faac1a89d0"
                    data-name="Ellipse 195"
                    cx="58.995"
                    cy="13.433"
                    r="4.467"
                    fill="#fff"
                  />
                  <circle
                    id="bd4c0ca0-b96c-4f92-a965-84f83cdee98a"
                    data-name="Ellipse 246"
                    cx="25.03901"
                    cy="13.433"
                    r="4.467"
                    fill="#fff"
                  />
                  <path
                    d="M361.89764,332.99559a92.63323,92.63323,0,0,0-14.78027-6.22l-.6499-7.19-26.35987-2.84-3.35009,9.19-9.46,3.55a4.60508,4.60508,0,0,0-.96.5h-.01025a4.68728,4.68728,0,0,0-2,3.12,4.79191,4.79191,0,0,0,.07031,1.88l.5,2.05c.71973.43,1.46.84,2.19971,1.23l.47021.24c1.08008.56,2.18018,1.09,3.31006,1.58.23.1.48.2.71.3.02.01.02979.01.04981.02.53027.22,1.06006.43,1.6001.63a52.55665,52.55665,0,0,0,5.41992,1.74,55.736,55.736,0,0,0,14.37011,1.88c1.77,0,3.52-.08,5.25-.25a55.5142,55.5142,0,0,0,11.64014-2.35c.00977,0,.02-.01.02979-.01a54.63376,54.63376,0,0,0,6.99023-2.77c.00977-.01.02979-.01.04-.02.50977-.24,1-.5,1.5-.75l.23975-.12c.3999-.21.80029-.42,1.20019-.64,1-.55,1.98-1.13,2.94971-1.75.27-.16.53027-.33.80029-.51.37988-.25.75977-.51,1.12988-.78C363.86737,334.10558,362.89764,333.53557,361.89764,332.99559Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M312.42743,337.42559l-1.64991-7.45h-4.31a1.03123,1.03123,0,0,0-.12989.01h-.01025a9.34,9.34,0,0,0-4.33984,1.5,9.61244,9.61244,0,0,0-2.31983,2.08c1.27979.97,2.60986,1.87,3.98,2.73l.06006.03c.38965.24.79.48,1.18994.71.71973.43,1.46.84,2.19971,1.23l.47021.24c1.08008.56,2.18018,1.09,3.31006,1.58.23.1.48.2.71.3.02.01.02979.01.04981.02.53027.22,1.06006.43,1.6001.63Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#3f3d56"
                  />
                  <circle
                    cx="145.59357"
                    cy="130.1909"
                    r="18.9846"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M319.507,283.96832c1.96521,2.32571,5.2911,2.982,8.35908,3.25106a78.72929,78.72929,0,0,0,21.3799-1.74579c.43456,4.21215-.75033,8.75386,1.73065,12.21878a56.72341,56.72341,0,0,0,2.01543-12.85906,12.30836,12.30836,0,0,0-.71236-5.50748,5.06532,5.06532,0,0,0-4.315-3.18122,10.81453,10.81453,0,0,1,4.824-2.06237l-6.028-3.02932,1.548-1.58925-10.9134-.66783,3.16092-2.0081a68.541,68.541,0,0,0-14.35962-.45328c-2.22394.16384-4.54909.47685-6.351,1.7654s-2.84312,3.84955-1.72449,5.74139a8.33635,8.33635,0,0,0-6.35307,5.04089,13.45779,13.45779,0,0,0-.48225,6.46877,45.854,45.854,0,0,0,2.40422,10.17111Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M385.63739,272.63555a55.70923,55.70923,0,1,0-96.27,52.92c.5.63,1.02,1.26,1.55029,1.87.04.04.06983.08.10986.12a54.03482,54.03482,0,0,0,4.14991,4.28c.38037.35.78027.71,1.18017,1.05.75977.68,1.54,1.32995,2.3501,1.95.31982.25.62988.5.96.74,1.27979.97,2.60986,1.87,3.98,2.73l.06006.03c.38965.24.79.48,1.18994.71.71973.43,1.46.84,2.19971,1.23l.47021.24c1.08008.56,2.18018,1.09,3.31006,1.58.23.1.48.2.71.3.02.01.02979.01.04981.02.53027.22,1.06006.43,1.6001.63a52.55665,52.55665,0,0,0,5.41992,1.74,55.736,55.736,0,0,0,14.37011,1.88c1.77,0,3.52-.08,5.25-.25a55.5142,55.5142,0,0,0,11.64014-2.35c.00977,0,.02-.01.02979-.01a54.63376,54.63376,0,0,0,6.99023-2.77c.00977-.01.02979-.01.04-.02.50977-.24,1-.5,1.5-.75l.23975-.12c.3999-.21.80029-.42,1.20019-.64,1-.55,1.98-1.13,2.94971-1.75.27-.16.53027-.33.80029-.51.37988-.25.75977-.51,1.12988-.78.48975-.34.98-.69,1.46-1.05.1499-.11.31-.22.46-.34a55.68949,55.68949,0,0,0,18.91992-62.68Zm-20.75977,60.25c-.33008.26-.66992.51-1.01025.74-.33008.25-.65967.49-1,.71-.29.21-.58008.41-.87988.6l-.08985.06c-.22021.15-.43994.29-.66015.43q-1.24512.77994-2.52,1.5c-.08985.05-.18018.1-.27.15-.37989.21-.75977.41-1.13965.61005-.05029.03-.11035.05-.16016.07995l-.06006.03c-.48.25-.97021.49-1.46.72a49.05046,49.05046,0,0,1-5.83008,2.36005c-.26025.09-.52.18-.77978.26a52.45359,52.45359,0,0,1-11.02,2.24c-1.64014.15-3.30029.23-4.97022.23a51.94932,51.94932,0,0,1-13.58984-1.78,49.3821,49.3821,0,0,1-6.66992-2.26c-.11035-.05-.23047-.09-.34033-.14-.11963-.05-.23-.09-.33985-.14-.12011-.05-.23-.1-.35009-.16-.93995-.41-1.87012-.86005-2.77979-1.33l-.43994-.23c-1.11035-.58-2.2002-1.2-3.26025-1.86005-.31006-.19-.62989-.38995-.93018-.6-.07959-.05-.1499-.1-.23-.15-.71-.47-1.41992-.96-2.10986-1.47-.46973-.35-.93995-.7-1.39991-1.06-.77-.58-1.51025-1.2-2.23-1.84-.37988-.32-.75-.67-1.10986-1a50.81071,50.81071,0,0,1-4.02-4.16c-.41992-.48-.83008-.96-1.22021-1.46a3.80668,3.80668,0,0,1-.25-.31,52.65908,52.65908,0,1,1,73.12011,9.23Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M859.72772,539.99559a55.70922,55.70922,0,1,0-96.27,52.92c.5.63,1.02,1.26,1.54981,1.87.04.04.06982.08.10986.12a54.13689,54.13689,0,0,0,4.15039,4.28c.37988.35.77978.71,1.17969,1.05.76025.68,1.54,1.33,2.35009,1.95a54.77547,54.77547,0,0,0,4.93995,3.47l.06005.03c1.10987.69,2.23975,1.32995,3.39014,1.94l.46973.24c1.08008.56,2.18017,1.09,3.31006,1.58.23.1.48.2.71.3.02.01.03027.01.05029.02a54.1164,54.1164,0,0,0,7.02,2.37,55.73234,55.73234,0,0,0,14.36963,1.88c1.77,0,3.52-.07995,5.25-.25a55.5075,55.5075,0,0,0,11.64014-2.35c.01025,0,.02-.01.02978-.01a54.60616,54.60616,0,0,0,6.99023-2.77c.00977-.01.03028-.01.04-.02.50977-.24,1-.5,1.5-.75l.24024-.12c.3999-.21.7998-.42,1.19971-.64,1-.55,1.98-1.13,2.95019-1.75.27-.16.52979-.33.79981-.51.87988-.58,1.75-1.2,2.58984-1.83.15039-.11.31006-.22.46045-.34a55.69208,55.69208,0,0,0,18.91992-62.68Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#fff"
                  />
                  <circle
                    id="ee9bd31a-9b73-4888-9087-fea26d3b2b97"
                    data-name="Ellipse 188"
                    cx="638.84182"
                    cy="409.89654"
                    r="8.349"
                    fill="#2f2e41"
                  />
                  <path
                    id="e473f415-6540-4896-b89f-76a5ac7ad60a-98"
                    data-name="Path 969"
                    d="M827.82735,564.802a8.35,8.35,0,0,1,7.35,12.312,8.347,8.347,0,1,0-13.868-9.172,8.32915,8.32915,0,0,1,6.519-3.14Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#2f2e41"
                  />
                  <circle
                    id="f79ae9d5-f4b5-4dd5-badc-cc4d2f5593dd"
                    data-name="Ellipse 189"
                    cx="623.23982"
                    cy="385.35254"
                    r="24.526"
                    fill="#2f2e41"
                  />
                  <path
                    id="f9880a76-ad0b-4c2a-99b0-b23c20a810bd-99"
                    data-name="Path 970"
                    d="M790.65029,533.16a24.522,24.522,0,0,1,33.99-2.572c-.2-.191-.4-.383-.607-.568a24.526,24.526,0,0,0-32.73016,36.5354q.06985.06254.14013.12457c.208.185.422.36.635.537a24.522,24.522,0,0,1-1.427-34.057Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#2f2e41"
                  />
                  <circle
                    id="b01904a1-9532-4133-8cbd-470829617487"
                    data-name="Ellipse 190"
                    cx="623.03182"
                    cy="393.87454"
                    r="15.796"
                    fill="#a0616a"
                  />
                  <path
                    d="M837.9577,598.05559v5.3c-.97021.62-1.95019,1.2-2.95019,1.75-.39991.22-.79981.43-1.19971.64l-.24024.12c-.5.25-.99023.51-1.5.75-.00976.01-.03027.01-.04.02a54.60616,54.60616,0,0,1-6.99023,2.77c-.00977,0-.01953.01-.02978.01a55.5075,55.5075,0,0,1-11.64014,2.35c-1.73.17005-3.48.25-5.25.25a55.73234,55.73234,0,0,1-14.36963-1.88,54.1164,54.1164,0,0,1-7.02-2.37c-.02-.01-.03027-.01-.05029-.02-.23-.1-.48-.2-.71-.3-1.12989-.49-2.23-1.02-3.31006-1.58l-.46973-.24c-1.15039-.61005-2.28027-1.25-3.39014-1.94l-.06005-.03a54.77547,54.77547,0,0,1-4.93995-3.47c-.81005-.62-1.58984-1.27-2.35009-1.95-.39991-.34-.79981-.7-1.17969-1.05a54.13689,54.13689,0,0,1-4.15039-4.28,20.22982,20.22982,0,0,1,.76025-3.07l.00977-.01a4.48859,4.48859,0,0,1,.21-.5,3.988,3.988,0,0,1,.18994-.42c1.79-3.35,5.03027-4.18,9.05029-4.36,2.27-.1,4.77979.01,7.43018-.02,1.3999-.01,2.84961-.06,4.2998-.19,9.14991-.83,7.49024-6.23,7.89991-9.14.41015-2.82,2.95019-.38,3.12011-.22l.00977.01a32.27147,32.27147,0,0,0,16.6001,2.91c.98-.12,1.96-.19,2.93994-.22,2.58008-.03,2.02.71,1.13037,1.32a11.18308,11.18308,0,0,1-1.3501.76s-.41015,2.5-.83008,6.24c-.3999,3.58,6.46,5.26,7.02979,5.39a.06082.06082,0,0,0,.04.01,13.7734,13.7734,0,0,1,7.61035.2h.00976A9.018,9.018,0,0,1,837.9577,598.05559Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#7af065"
                  />
                  <path
                    d="M786.82733,604.48558c0,.74-.01953,1.45-.04981,2.12-.00976.4-.02978.79-.0498,1.16-.02-.01-.03027-.01-.05029-.02-.23-.1-.48-.2-.71-.3-1.12989-.49-2.23-1.02-3.31006-1.58l-.46973-.24c-1.15039-.61005-2.28027-1.25-3.39014-1.94.02979-.35.08008-.7.12989-1.05005.10986-.77.20019-1.55.26025-2.31995a32.18362,32.18362,0,0,0-2.8501-15.76v-.01c-.20019-.4-.31982-.62-.31982-.62s2.90967-2.5,7.05957,0a2.49767,2.49767,0,0,1,.69043.6C786.26776,587.47557,786.94745,597.39556,786.82733,604.48558Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M832.23749,603.1256c-.04,1.12-.1001,2.29-.16993,3.48v.01c-.00976.01-.03027.01-.04.02a54.60616,54.60616,0,0,1-6.99023,2.77c-.00977,0-.01953.01-.02978.01l-.10987-2.81-.01025-.37-.52979-13.68a2.29521,2.29521,0,0,1,2.29-2.4h5.06983c.25,0,.43017.51.55029,1.43v.01A86.66135,86.66135,0,0,1,832.23749,603.1256Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#2f2e41"
                  />
                  <path
                    id="a05c59bd-0311-408b-a800-ed606f18fbbf-100"
                    data-name="Path 975"
                    d="M796.18129,537.154v15.8h3.658l4.655-4.988-.623,4.988h16.17l-1-4.988,2,4.988h2.578v-15.8Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#2f2e41"
                  />
                  <ellipse
                    id="af122121-1c1b-4817-a566-2298b147ce18"
                    data-name="Ellipse 191"
                    cx="607.02782"
                    cy="390.54954"
                    rx="1.247"
                    ry="2.286"
                    fill="#a0616a"
                  />
                  <ellipse
                    id="bec83a12-853e-4dd5-94d0-e2c2a5b21156"
                    data-name="Ellipse 192"
                    cx="639.03682"
                    cy="390.54954"
                    rx="1.247"
                    ry="2.286"
                    fill="#a0616a"
                  />
                  <path
                    d="M841.34735,601.01555c-.83984.63-1.71,1.25-2.58984,1.83-.27.18-.52979.35-.79981.51-.97021.62-1.95019,1.2-2.95019,1.75-.39991.22-.79981.43-1.19971.64v-11.02s1.59961,1.28,4.1499,3.41c.31982.27.6499.55005,1,.85C839.69745,599.60558,840.49774,600.28557,841.34735,601.01555Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#7af065"
                  />
                  <path
                    d="M859.72772,539.99559a55.70922,55.70922,0,1,0-96.27,52.92c.5.63,1.02,1.26,1.54981,1.87.04.04.06982.08.10986.12a54.13689,54.13689,0,0,0,4.15039,4.28c.37988.35.77978.71,1.17969,1.05.76025.68,1.54,1.33,2.35009,1.95a54.77547,54.77547,0,0,0,4.93995,3.47l.06005.03c1.10987.69,2.23975,1.32995,3.39014,1.94l.46973.24c1.08008.56,2.18017,1.09,3.31006,1.58.23.1.48.2.71.3.02.01.03027.01.05029.02a54.1164,54.1164,0,0,0,7.02,2.37,55.73234,55.73234,0,0,0,14.36963,1.88c1.77,0,3.52-.07995,5.25-.25a55.5075,55.5075,0,0,0,11.64014-2.35c.01025,0,.02-.01.02978-.01a54.60616,54.60616,0,0,0,6.99023-2.77c.00977-.01.03028-.01.04-.02.50977-.24,1-.5,1.5-.75l.24024-.12c.3999-.21.7998-.42,1.19971-.64,1-.55,1.98-1.13,2.95019-1.75.27-.16.52979-.33.79981-.51.87988-.58,1.75-1.2,2.58984-1.83.15039-.11.31006-.22.46045-.34a55.69208,55.69208,0,0,0,18.91992-62.68Zm-20.76025,60.25c-.33008.26-.66993.51-1.00977.74-.33008.25-.66016.49-1,.71-.29.21-.58008.41-.88037.6-.25.17-.5.33-.75.49q-1.24438.78-2.51953,1.5c-.09033.05-.18018.1-.27051.15-.37988.21-.75977.41-1.13965.61-.05029.03-.11035.05-.16015.08l-.06006.03c-.48.25-.96973.49-1.46.72a49.0281,49.0281,0,0,1-5.83008,2.36c-.25977.09-.52.18-.77979.26a52.456,52.456,0,0,1-11.02,2.24c-1.64013.15-3.30029.23-4.97021.23a51.952,51.952,0,0,1-13.58985-1.78,49.3912,49.3912,0,0,1-6.66992-2.26c-.23-.09-.46-.19-.68017-.28-.11963-.05-.23-.1-.3501-.16-.93994-.41-1.86963-.86-2.77979-1.33l-.43994-.23c-1.10986-.58-2.20019-1.2-3.26025-1.86-.38965-.24-.77979-.49-1.15967-.75-1.20019-.79-2.37012-1.64-3.51025-2.53-.77-.58-1.50977-1.2-2.23-1.84-.37989-.32-.75-.67-1.10987-1a50.88266,50.88266,0,0,1-4.02-4.16c-.41992-.48-.83007-.96-1.22021-1.46a3.8008,3.8008,0,0,1-.25-.31,52.65906,52.65906,0,1,1,73.12012,9.23Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M856.59068,535.62753a10.05576,10.05576,0,0,0,5.277-14.48823L885.22657,494.096l-18.41436-2.39689-19.35886,26.04828a10.11028,10.11028,0,0,0,9.13733,17.88018Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M988.25479,541.34205a10.05578,10.05578,0,0,0-2.36252-15.23726l7.42514-34.95492-17.2882,6.77876-4.40057,32.15453a10.11027,10.11027,0,0,0,16.62615,11.25889Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#ffb8b8"
                  />
                  <polygon
                    points="717.931 560.49 705.671 560.489 699.839 513.201 717.933 513.202 717.931 560.49"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M907.71708,735.39841l-39.53052-.00146v-.5A15.38605,15.38605,0,0,1,883.573,719.51072h.001l24.1438.001Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#2f2e41"
                  />
                  <polygon
                    points="777.931 560.49 765.671 560.489 759.839 513.201 777.933 513.202 777.931 560.49"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M967.71708,735.39841l-39.53052-.00146v-.5A15.38605,15.38605,0,0,1,943.573,719.51072h.001l24.1438.001Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M905.86794,698.82212l-17.35474-.69434a4.51414,4.51414,0,0,1-4.31787-4.63379l4.8894-160.37891.31934-.11523c30.41626-11.00293,55.57837-10.1709,76.926,2.54l.23877.14258,2.929,156.20215a4.49958,4.49958,0,0,1-4.49927,4.585h-14.634a4.51,4.51,0,0,1-4.41577-3.63184L926.01369,591.42856a1.49977,1.49977,0,0,0-2.9607.10938L910.51491,694.868a4.52553,4.52553,0,0,1-4.46924,3.957C905.98683,698.82505,905.92726,698.82407,905.86794,698.82212Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#2f2e41"
                  />
                  <circle
                    cx="736.09192"
                    cy="204.88216"
                    r="24.56103"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M864.891,516.10573a4.50563,4.50563,0,0,1-2.09059-1.68576l-4.74579-7.10153a4.5147,4.5147,0,0,1,.11894-5.16939l19.132-25.96774,11.98589-57.511a14.49652,14.49652,0,1,1,27.01713,10.52l-5.66482,36.60153a46.37351,46.37351,0,0,1-16.02389,28.44079L869.43477,515.367a4.50493,4.50493,0,0,1-3.52808,1.00768A4.45458,4.45458,0,0,1,864.891,516.10573Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M987.20607,518.71151a4.50565,4.50565,0,0,1-2.68308.11591l-8.25447-2.195a4.51467,4.51467,0,0,1-3.32625-3.95888l-2.7964-32.13311-29.00182-51.08888a14.49652,14.49652,0,1,1,27.23067-9.95419l19.93124,31.2171a46.37344,46.37344,0,0,1,6.76343,31.93587l-4.94074,32.50445a4.505,4.505,0,0,1-1.98249,3.08748A4.45459,4.45459,0,0,1,987.20607,518.71151Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M895.88673,411.52384a41.82248,41.82248,0,0,1,33.53711-13.55957q.616.03809,1.227.08593h.00049a41.73426,41.73426,0,0,1,30.15967,16.64649,42.362,42.362,0,0,1,7.5249,34.14453,132.361,132.361,0,0,0,3.49659,67.876l6.58886,20.459a4.49851,4.49851,0,0,1-4.042,5.87207l-33.68506,1.811-8.62012-14.88971v15.35315l-40.94091,2.20111c-.08155.00488-.1626.00683-.24317.00683a4.5,4.5,0,0,1-4.48388-4.86132l4.62744-57.38184-5.8042-38.97266A42.08921,42.08921,0,0,1,895.88673,411.52384Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M939.82124,391.35358c-2.274,1.30843-11.26246,2.176-11.90278-.36827l-.01371-.05589c-.44576-1.86412-.0756-3.81069.05232-5.72308s-.05925-4.01327-1.36174-5.41938c-2.428-2.62114-6.74756-1.23164-10.25844-1.89439a8.6643,8.6643,0,0,1-6.74007-9.25291c.05-.3975.12841-.79545.21633-1.19316a6.67288,6.67288,0,0,0-6.92675-8.08129c-3.5481.20288-7.378,1.27789-10.31357-1.35012-2.2701-2.03223-2.824-7.32235-1.82654-10.20133,1.67623-4.8383,12.4137-7.37125,17.10186-8.76367a40.62028,40.62028,0,0,1,34.43036,5.64954c2.96118,2.08725,5.72661,4.70984,6.98873,8.10576s.65322,7.6803-2.19278,9.92206a18.332,18.332,0,0,1,4.24619,17.80643C949.915,385.06333,943.2062,389.40591,939.82124,391.35358Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M1012.34052,736.97557h-213a1,1,0,0,1,0-2h213a1,1,0,0,1,0,2Z"
                    transform="translate(-186.65948 -163.02443)"
                    fill="#ccc"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
}
