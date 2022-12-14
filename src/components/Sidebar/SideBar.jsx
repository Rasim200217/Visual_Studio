import React from "react";

import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import "../../scss/Navbar.scss";
import Formbar from "./Formbar";

import LogoFreska from "../../assets/logo/freskaLogo.svg";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

const SideBar = () => {
  const [isVs21, setIsVs21] = React.useState(true);
  const [isSubMenuOne, setIsSubMenuOne] = React.useState(false);
  const [isSubMenuTwo, setIsSubMenuTwo] = React.useState(false);

  return (
    <div className="navbar">
      <div>
        <ul>
          <li
            onClick={() => setIsVs21(true)}
            className="cursor-pointer logo_active_vs21"
          >
            <NavLink to="/" className={isVs21 ? "active" : "pb-9 pt-2 px-4"}>
              <svg
                className="inline-block"
                width="80"
                height="60"
                viewBox="0 0 757 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0228271 0.612658H44.8521C45.6456 0.612658 48.4887 10.4645 53.3816 30.1683C79.9618 130.009 94.1776 184.029 96.029 192.228H97.2191C99.0705 183.633 115.931 119.761 147.801 0.612658H193.225C189.919 14.6301 165.323 109.38 119.435 284.862H74.4078C73.7466 284.862 70.1761 271.771 63.6963 245.587C24.6856 96.2882 3.46106 14.6301 0.0228271 0.612658Z"
                  fill="#ffffff"
                />
                <path
                  d="M287.248 0.0175781H295.777C327.647 0.0175781 352.31 3.65418 369.766 10.9274V56.9468C345.83 49.4092 319.052 45.6403 289.43 45.6403C271.842 45.6403 260.271 53.4425 254.717 69.0468C253.923 70.6337 253.527 73.0801 253.527 76.3861V78.5681C253.527 95.7593 265.494 109.446 289.43 119.629C324.606 131.133 348.541 148.258 361.236 171.004C366.922 181.98 369.766 192.559 369.766 202.741V211.866C369.766 243.603 360.443 264.696 341.797 275.143C329.234 281.622 314.291 284.862 296.967 284.862H287.843C251.741 284.862 225.889 281.226 210.284 273.953V227.933C244.402 235.471 271.379 239.24 291.215 239.24C305.629 239.24 316.473 233.553 323.746 222.181C325.994 217.817 327.118 213.254 327.118 208.494V206.907C327.118 190.509 316.275 177.153 294.587 166.838C257.031 155.201 233.492 143.432 223.971 131.53C214.847 120.29 210.284 105.876 210.284 88.2877V81.5435C210.284 27.1929 235.939 0.0175781 287.248 0.0175781Z"
                  fill="#ffffff"
                />
                <path
                  d="M533.35 0.414298H540.887C575.534 0.414298 601.255 12.382 618.049 36.3174C624.265 48.4835 627.372 60.8479 627.372 73.4107C627.372 101.049 622.413 121.612 612.495 135.101C609.718 139.597 606.346 143.63 602.379 147.201L511.728 238.446H627.372V284.862H435.757L435.558 243.405L556.161 117.05C567.401 103.561 572.691 90.4697 572.03 77.7746C570.311 58.5999 558.938 48.9463 537.912 48.8141C513.58 51.3267 490.372 61.0463 468.288 77.973C469.478 80.3533 458.634 68.055 435.757 41.0781C447.526 24.9448 467.494 12.911 495.661 4.97657C509.15 1.93506 521.713 0.414298 533.35 0.414298Z"
                  fill="#FFF212"
                />
                <path
                  d="M708.501 0.811017L756.108 0.215938V284.862H708.501V58.3354L679.938 86.1057C679.541 86.1057 670.086 76.6506 651.572 57.7403C672.598 36.1852 691.575 17.2088 708.501 0.811017Z"
                  fill="#FFF212"
                />
              </svg>
            </NavLink>
          </li>
          {/* vs21 */}
          {isVs21 ? (
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <li>
                <NavLink to="/">
                  <HashLink to="/#header">??????????????</HashLink>
                </NavLink>
              </li>

              <div>
                <li
                  className="flex items-center cursor-pointer"
                  onClick={() => setIsSubMenuOne((old) => !old)}
                >
                  {isSubMenuOne ? (
                    <IoMdArrowDropdown />
                  ) : (
                    <IoMdArrowDropright />
                  )}
                  ????????
                </li>
                {isSubMenuOne ? (
                  <div className="ml-6">
                    <li className="-mt-2">
                      <NavLink to="/vs21/cyclorama">??????????????????</NavLink>
                    </li>
                    <li className="-mt-2">
                      <NavLink to="/vs21/chromakey">????????????????</NavLink>
                    </li>

                    <li className="-mt-2">
                      <NavLink to="/vs21/loft">????????</NavLink>
                    </li>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div>
                <li
                  className="flex items-center cursor-pointer"
                  onClick={() => setIsSubMenuTwo((old) => !old)}
                >
                  {isSubMenuTwo ? (
                    <IoMdArrowDropdown />
                  ) : (
                    <IoMdArrowDropright />
                  )}
                  ????????????
                </li>
                {isSubMenuTwo ? (
                  <div className="ml-6">
                    <li className="-mt-2">
                      <a
                        href="https://telegra.ph/Aktualnye-ceny-Prajs-list-VS21ART-2022-12-08"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Price List
                      </a>
                    </li>
                    <li className="-mt-2">
                      <NavLink to="vs21/retouch">????????????</NavLink>
                    </li>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <li>
                <NavLink to="vs21/portfolio">??????????????????</NavLink>
              </li>
              <li>
                <HashLink to="#location">????????????????</HashLink>
              </li>
              {/* <li>
            <HashLink to="#team">??????????????</HashLink>
          </li>
          <li>
            <a href="#location">?????? ?????</a>
          </li> */}
            </motion.ul>
          ) : (
            ""
          )}

          <li
            onClick={() => setIsVs21(false)}
            className="cursor-pointer logo_active"
          >
            <NavLink to="/render" className="pb-4 pt-2 px-4">
              <svg
                className="inline-block"
                width="100"
                height="45"
                viewBox="0 0 757 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M62.8996 108.885C63.5106 109.946 65.6898 112.874 66.4912 113.63L84.3226 138.241C85.0547 139.25 85.1816 139.353 85.8042 140.31C86.8073 141.844 88.0526 143.4 89.1364 144.778C89.9147 145.77 91.5347 148.347 92.4571 149.2L276.928 149.119C277.262 146.156 277.286 77.9149 276.865 75.2744C276.582 73.5103 276.346 67.3186 276.542 65.5718C277.862 67.261 278.796 68.9847 280.133 70.6566L312.55 118.184C314.96 121.902 317.48 125.223 319.786 128.688C321.913 131.876 324.329 135.583 326.969 139.296C327.753 140.391 332.988 149.039 334.331 149.2L372 149.212L371.85 0.265006L331.708 0.351483L331.621 63.3695C331.639 70.0109 332.405 77.0328 332.227 83.8241C331.368 83.213 323.245 70.9506 321.019 67.7971C320.754 67.4224 320.743 67.359 320.466 66.9439L317.382 62.5567C316.632 61.4671 316.28 60.66 315.612 59.7145C315.093 58.9881 314.447 58.2271 313.796 57.2586L303.004 41.4161C296.743 32.1632 287.691 18.2636 281.465 9.66208C280.312 8.07092 278.813 5.95514 277.799 4.44469C277.199 3.54534 276.64 2.49033 276 1.6025C275.181 0.461019 274.979 0.270772 273.256 0.241946C238.365 -0.317266 201.607 0.316892 166.296 0.259241C159.793 0.247711 135.32 -0.0520729 130.864 0.339952L130.806 140.097L96.9769 95.2735C97.8705 94.7662 98.8102 94.5529 99.7326 94.1147C108.709 89.8486 117.368 81.6794 121.012 72.4207C130.345 48.6917 124.753 20.3332 101.606 7.98445C93.074 3.43003 87.084 2.34043 77.9637 0.789629C73.5246 0.0344034 67.5923 0.357248 62.9226 0.259241C42.4105 -0.178905 21.4083 0.91646 0.994141 0.218886L1.02297 149.206L40.508 149.114L40.6636 101.154L57.2267 101.148L62.8938 108.891L62.8996 108.885ZM418.063 34.6133C422.087 34.5326 426.215 34.6076 430.25 34.6076C434.124 34.6076 438.379 34.2098 442.126 34.8382C449.569 36.0892 453.541 36.1584 460.488 40.5629C467.245 44.8521 469.614 49.2278 472.249 56.2209C472.468 56.8031 472.808 57.6737 472.964 58.3366C474.607 65.3412 474.572 67.088 474.543 74.7268C474.515 82.8786 474.342 88.3093 471.471 95.6655C470.387 98.4328 468.507 101.442 466.962 103.281C463.238 107.709 455.888 112.465 449.88 113.526L447.523 113.929C440.264 115.469 426.146 114.909 418.017 114.823L418.063 34.6018V34.6133ZM554.073 34.6133L620.181 34.7402L620.14 114.846L554.038 114.731L554.107 91.3994L615.609 91.359L615.563 56.7339C612.19 56.3535 590.162 56.659 584.777 56.6648C579.566 56.6705 574.354 56.6244 569.148 56.659C566.162 56.6821 556.275 56.9991 554.038 56.4284L554.067 34.6133H554.073ZM660.11 34.596C672.395 34.8728 692.354 31.7423 699.946 40.1997C706.277 47.2446 705.642 66.1541 689.662 68.0566C680.553 69.1404 669.916 68.3679 660.087 68.6158L660.104 34.596H660.11ZM716.481 95.1928C723.791 92.6446 727.907 88.8973 733.142 83.8298C735.275 81.7602 738.515 76.8368 739.812 74.1733C742.003 69.6996 744.193 61.9456 744.493 56.9588C745.243 44.5754 743.899 30.9756 736.145 21.0539C728.956 11.8586 724.563 9.02793 713.771 4.66953C709.834 3.08413 700.154 0.887635 695.997 0.605146C694.308 0.489844 692.337 0.432194 690.861 0.322657C684.127 -0.178905 675.554 0.247711 668.619 0.259241H558.137C552.378 0.247711 516.951 -0.127019 514.374 0.414898C513.809 8.56672 514.322 18.7478 514.322 27.1245L514.346 50.5826C514.374 52.5197 514.42 52.8022 513.734 53.4421C509.826 41.3297 510.858 40.1593 503.075 28.5369C499.754 23.579 500.919 25.6256 497.875 22.0166C495.107 18.7305 488.841 13.5477 484.776 11.3455C483.376 10.5903 482.24 9.89269 480.879 9.16052C477.293 7.22922 472.699 5.39016 468.605 4.05266C463.959 2.53068 453.576 0.524435 448.37 0.466784L401.477 0.253476C394.017 0.316892 385.519 -0.167374 378.105 0.316892L378.203 149.16C385.698 149.511 394.253 149.275 401.828 149.2C409.629 149.125 417.469 149.2 425.275 149.2C433.046 149.2 441.181 149.477 448.733 149.021C457.756 148.474 469.447 146.219 477.414 142.138C480.032 140.795 482.482 139.647 485.076 138.085C497.085 130.861 506.649 118.622 511.169 105.224L513.181 98.3232C513.192 98.2713 513.498 97.3143 513.51 97.2855C514.034 96.2305 513.561 96.8877 514.328 96.1325L514.374 149.206H660.069L660.214 101.16L676.788 101.212L712.042 149.212L756.9 149.171C756.611 147.632 751.117 141.227 749.434 138.881C744.977 132.666 738.676 125.235 734.231 118.899C731.124 114.471 717.663 97.6775 716.481 95.2101V95.1928ZM170.753 53.0558L170.787 34.6249L237.057 34.6133L237.109 114.84L170.799 114.834L170.764 91.3878H232.237L232.306 56.8089L170.764 56.6648V53.0501L170.753 53.0558ZM40.531 34.5845C46.1924 34.5326 65.9608 34.3366 70.2673 35.1091C79.2608 36.7234 84.017 42.2175 84.0055 51.6319C83.994 60.7522 78.8169 66.9151 70.1117 68.0393C61.6831 69.1289 49.8935 68.5639 40.5195 68.5812L40.531 34.5845Z"
                  fill="#C50C07"
                />
              </svg>
            </NavLink>
          </li>

          <li
            onClick={() => setIsVs21(false)}
            className="cursor-pointer logo_active"
          >
            <a href="http://freskatm.uz/" target="_blank" rel="noreferrer">
              <img src={LogoFreska} alt="" width={100} className="mx-auto" />
            </a>
          </li>
        </ul>
      </div>

      <Formbar />
    </div>
  );
};

export default SideBar;
