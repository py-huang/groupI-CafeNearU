import { Chip } from "@material-tailwind/react";

function Icon({ type }) {
    if (type === "plug") {
        return (
            <svg
                viewBox="0 -0.5 17 17"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="si-glyph si-glyph-socket"
                fill="#000000"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>1040</title> <defs> </defs>{" "}
                    <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        {" "}
                        <g
                            transform="translate(1.000000, 0.000000)"
                            fill="#434343"
                        >
                            {" "}
                            <g>
                                {" "}
                                <path
                                    d="M7.969,12.979 C5.229,12.979 3.002,10.751 3.002,8.011 C3.002,5.272 5.229,3.04 7.969,3.04 C10.708,3.04 12.938,5.271 12.938,8.011 C12.938,10.751 10.708,12.979 7.969,12.979 L7.969,12.979 Z M8.008,3.903 C5.761,3.903 3.933,5.749 3.933,8.017 C3.933,10.285 5.761,12.13 8.008,12.13 C10.252,12.13 12.082,10.284 12.082,8.017 C12.082,5.749 10.252,3.903 8.008,3.903 L8.008,3.903 Z"
                                    className="si-glyph-fill"
                                >
                                    {" "}
                                </path>{" "}
                                <path
                                    d="M15.916,15.918 L0,15.918 L0,0 L15.916,0 L15.916,15.918 L15.916,15.918 Z M0.969,15.031 L15.031,15.031 L15.031,0.937 L0.969,0.937 L0.969,15.031 L0.969,15.031 Z"
                                    className="si-glyph-fill"
                                >
                                    {" "}
                                </path>{" "}
                            </g>{" "}
                            <rect
                                x="6"
                                y="7"
                                width="0.969"
                                height="1.812"
                                className="si-glyph-fill"
                            >
                                {" "}
                            </rect>{" "}
                            <rect
                                x="9"
                                y="7"
                                width="0.969"
                                height="1.812"
                                className="si-glyph-fill"
                            >
                                {" "}
                            </rect>{" "}
                        </g>{" "}
                    </g>{" "}
                </g>
            </svg>
        );
    }
    if (type === "wifi") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#4f4f4f"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                        d="M1.33309 8.07433C0.92156 8.44266 0.886539 9.07485 1.25487 9.48638C1.62319 9.89791 2.25539 9.93293 2.66691 9.5646L1.33309 8.07433ZM21.3331 9.5646C21.7446 9.93293 22.3768 9.89791 22.7451 9.48638C23.1135 9.07485 23.0784 8.44266 22.6669 8.07433L21.3331 9.5646ZM12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21V19ZM12.01 21C12.5623 21 13.01 20.5523 13.01 20C13.01 19.4477 12.5623 19 12.01 19V21ZM14.6905 17.04C15.099 17.4116 15.7315 17.3817 16.1031 16.9732C16.4748 16.5646 16.4448 15.9322 16.0363 15.5605L14.6905 17.04ZM18.0539 13.3403C18.4624 13.7119 19.0949 13.682 19.4665 13.2734C19.8381 12.8649 19.8082 12.2324 19.3997 11.8608L18.0539 13.3403ZM7.96372 15.5605C7.55517 15.9322 7.52524 16.5646 7.89687 16.9732C8.2685 17.3817 8.90095 17.4116 9.3095 17.04L7.96372 15.5605ZM4.60034 11.8608C4.19179 12.2324 4.16185 12.8649 4.53348 13.2734C4.90511 13.682 5.53756 13.7119 5.94611 13.3403L4.60034 11.8608ZM2.66691 9.5646C5.14444 7.34716 8.41371 6 12 6V4C7.90275 4 4.16312 5.54138 1.33309 8.07433L2.66691 9.5646ZM12 6C15.5863 6 18.8556 7.34716 21.3331 9.5646L22.6669 8.07433C19.8369 5.54138 16.0972 4 12 4V6ZM12 21H12.01V19H12V21ZM12 16C13.0367 16 13.9793 16.3931 14.6905 17.04L16.0363 15.5605C14.9713 14.5918 13.5536 14 12 14V16ZM12 11C14.3319 11 16.4546 11.8855 18.0539 13.3403L19.3997 11.8608C17.4466 10.0842 14.8487 9 12 9V11ZM9.3095 17.04C10.0207 16.3931 10.9633 16 12 16V14C10.4464 14 9.02872 14.5918 7.96372 15.5605L9.3095 17.04ZM5.94611 13.3403C7.54544 11.8855 9.66815 11 12 11V9C9.15127 9 6.55344 10.0842 4.60034 11.8608L5.94611 13.3403Z"
                        fill="#4f4f4f"
                    ></path>{" "}
                </g>
            </svg>
        );
    }
    if (type === "cat") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0196 14.9374C11.7284 14.9374 11.4307 14.9818 11.1784 15.0796C11.0546 15.1275 10.9032 15.2031 10.7699 15.3252C10.6361 15.4479 10.4632 15.6749 10.4632 15.9999C10.4632 16.3249 10.6361 16.5519 10.7699 16.6745C10.9032 16.7967 11.0546 16.8722 11.1784 16.9202C11.4307 17.018 11.7284 17.0624 12.0196 17.0624C12.3109 17.0624 12.6085 17.018 12.8609 16.9202C12.9846 16.8722 13.136 16.7967 13.2693 16.6745C13.4032 16.5519 13.5761 16.3249 13.5761 15.9999C13.5761 15.6749 13.4032 15.4479 13.2693 15.3252C13.136 15.2031 12.9846 15.1275 12.8609 15.0796C12.6085 14.9818 12.3109 14.9374 12.0196 14.9374Z"
                        fill="#4f4f4f"
                    ></path>{" "}
                    <path
                        d="M14.0365 12.6464C14.2015 12.38 14.5274 12.0625 15.0163 12.0625C15.5051 12.0625 15.831 12.38 15.996 12.6464C16.1681 12.9243 16.2501 13.2612 16.2501 13.5938C16.2501 13.9263 16.1681 14.2632 15.996 14.5411C15.831 14.8075 15.5051 15.125 15.0163 15.125C14.5274 15.125 14.2015 14.8075 14.0365 14.5411C13.8644 14.2632 13.7824 13.9263 13.7824 13.5938C13.7824 13.2612 13.8644 12.9243 14.0365 12.6464Z"
                        fill="#4f4f4f"
                    ></path>{" "}
                    <path
                        d="M9.01634 12.0625C8.52751 12.0625 8.20161 12.38 8.03658 12.6464C7.86445 12.9243 7.78247 13.2612 7.78247 13.5938C7.78247 13.9263 7.86445 14.2632 8.03658 14.5411C8.20161 14.8075 8.52751 15.125 9.01634 15.125C9.50518 15.125 9.83108 14.8075 9.9961 14.5411C10.1682 14.2632 10.2502 13.9263 10.2502 13.5938C10.2502 13.2612 10.1682 12.9243 9.9961 12.6464C9.83108 12.38 9.50518 12.0625 9.01634 12.0625Z"
                        fill="#4f4f4f"
                    ></path>{" "}
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.09485 4.25C5.48148 4.25 4.77463 4.42871 4.20882 4.91616C3.62226 5.4215 3.27004 6.18781 3.27004 7.1875V9.0625L3.27005 9.06545C3.2712 9.35941 3.3211 9.94757 3.4888 10.4392C3.54365 10.6001 3.63129 10.8134 3.77764 11.0058C3.49364 11.5688 3.35904 12.1495 3.29787 12.7095C3.2468 13.1771 3.24611 13.6679 3.25424 14.1211C2.5932 14.3507 1.90877 14.6349 1.5932 14.8387C1.24524 15.0634 1.14534 15.5277 1.37006 15.8756C1.59478 16.2236 2.05903 16.3235 2.40698 16.0988C2.5234 16.0236 2.86686 15.8664 3.31867 15.6939C3.38755 16.173 3.52716 16.6095 3.7221 17.0063C3.56621 17.1035 3.42847 17.1935 3.31889 17.2652C3.27694 17.2926 3.23912 17.3173 3.20599 17.3387C2.85803 17.5634 2.75813 18.0277 2.98285 18.3756C3.20757 18.7236 3.67182 18.8235 4.01978 18.5988C4.0609 18.5722 4.10473 18.5436 4.15098 18.5134C4.28216 18.4278 4.43287 18.3294 4.59701 18.2288C5.18653 18.8313 5.91865 19.2964 6.67916 19.6462C8.45998 20.4654 10.569 20.75 12.0001 20.75C13.4311 20.75 15.5402 20.4654 17.321 19.6462C18.0815 19.2964 18.8136 18.8313 19.4031 18.2288C19.5673 18.3294 19.718 18.4278 19.8491 18.5134C19.8954 18.5436 19.9392 18.5722 19.9803 18.5988C20.3283 18.8235 20.7925 18.7236 21.0173 18.3756C21.242 18.0277 21.1421 17.5634 20.7941 17.3387C20.761 17.3173 20.7232 17.2926 20.6812 17.2652C20.5716 17.1935 20.4339 17.1035 20.2781 17.0063C20.473 16.6095 20.6127 16.173 20.6815 15.6938C21.1335 15.8663 21.4771 16.0236 21.5936 16.0988C21.9415 16.3235 22.4058 16.2236 22.6305 15.8756C22.8552 15.5277 22.7553 15.0634 22.4074 14.8387C22.0917 14.6349 21.4071 14.3506 20.7459 14.121C20.7541 13.6678 20.7534 13.177 20.7023 12.7095C20.6412 12.1495 20.5065 11.5688 20.2225 11.0058C20.3689 10.8134 20.4565 10.6001 20.5114 10.4392C20.6791 9.94758 20.729 9.35941 20.7301 9.06545L20.7302 9.0625V7.18761C20.7302 6.18792 20.3779 5.42162 19.7914 4.91628C19.2256 4.42882 18.5187 4.25011 17.9054 4.25011C17.4969 4.25011 17.0744 4.40685 16.7337 4.56076C16.3726 4.72392 15.9952 4.9359 15.6558 5.13136C15.5828 5.17339 15.5119 5.21444 15.443 5.25432L15.441 5.25548C15.177 5.4084 14.9427 5.5441 14.7339 5.65167C14.6042 5.7185 14.5035 5.7643 14.4285 5.79206C14.3969 5.80377 14.3767 5.80966 14.3663 5.81242C14.1129 5.81102 13.9514 5.79033 13.7181 5.76044C13.6681 5.75403 13.6147 5.74719 13.5564 5.74003C13.2098 5.69743 12.7722 5.65636 12.0001 5.65636C11.228 5.65636 10.7905 5.69743 10.4438 5.74003C10.3855 5.74719 10.3322 5.75403 10.2821 5.76044C10.0489 5.79033 9.88738 5.81102 9.63388 5.81242C9.62352 5.80966 9.60332 5.80376 9.57174 5.79206C9.49678 5.7643 9.39604 5.71849 9.26633 5.65166C9.05755 5.54408 8.82331 5.40842 8.55926 5.25548C8.48975 5.21523 8.41818 5.17377 8.34446 5.13132C8.00502 4.93584 7.62764 4.72384 7.26652 4.56067C6.92587 4.40675 6.50329 4.25 6.09485 4.25ZM6.16192 17.6138C6.49595 17.8657 6.8808 18.0879 7.30604 18.2835C8.83694 18.9877 10.7179 19.25 12.0001 19.25C13.2823 19.25 15.1632 18.9877 16.6941 18.2835C17.1194 18.0879 17.5042 17.8657 17.8382 17.6138C17.4858 17.5524 17.2179 17.245 17.2179 16.875C17.2179 16.4608 17.5537 16.125 17.9679 16.125C18.2951 16.125 18.6295 16.2068 18.9399 16.3204C19.0985 15.9885 19.1959 15.625 19.2226 15.2271C18.9249 15.1544 18.7193 15.125 18.6134 15.125C18.1992 15.125 17.8634 14.7892 17.8634 14.375C17.8634 13.9608 18.1992 13.625 18.6134 13.625C18.8081 13.625 19.0284 13.6542 19.2504 13.6974C19.2505 13.4213 19.2415 13.1502 19.2112 12.8724C19.1407 12.227 18.958 11.6541 18.5269 11.1447C18.3727 10.9625 18.1809 10.7813 17.9402 10.6045C17.6063 10.3594 17.5344 9.88999 17.7796 9.55611C18.0247 9.22224 18.4941 9.15031 18.828 9.39546C18.9471 9.48292 19.0597 9.57282 19.1659 9.66506C19.2099 9.43686 19.2295 9.19817 19.2302 9.06087V7.18761C19.2302 6.56231 19.0238 6.23486 18.8123 6.0527C18.5801 5.85266 18.2496 5.75011 17.9054 5.75011C17.835 5.75011 17.659 5.78868 17.3513 5.92771C17.064 6.0575 16.7432 6.23612 16.4043 6.43125C16.3407 6.4679 16.2759 6.50544 16.2106 6.54328C15.9428 6.69843 15.666 6.85883 15.4209 6.98509C15.2663 7.06473 15.1052 7.14099 14.9495 7.19867C14.8058 7.25192 14.607 7.3125 14.3941 7.3125C14.0223 7.3125 13.7617 7.27877 13.5115 7.2464C13.4654 7.24043 13.4196 7.23449 13.3735 7.22883C13.0848 7.19336 12.7084 7.15636 12.0001 7.15636C11.2919 7.15636 10.9154 7.19336 10.6267 7.22883C10.5807 7.23449 10.5349 7.24042 10.4887 7.24639C10.2386 7.27877 9.97796 7.3125 9.6061 7.3125C9.39326 7.3125 9.19445 7.25191 9.05069 7.19866C8.89497 7.14098 8.73386 7.06471 8.57928 6.98506C8.33423 6.8588 8.05742 6.69839 7.78968 6.54325C7.72435 6.50539 7.65955 6.46784 7.59589 6.43118C7.25702 6.23603 6.93614 6.05741 6.64888 5.92761C6.34115 5.78856 6.16522 5.75 6.09485 5.75C5.75062 5.75 5.42007 5.85254 5.18787 6.05259C4.97643 6.23475 4.77004 6.56219 4.77004 7.1875V9.06088C4.7707 9.19819 4.79025 9.43686 4.83425 9.66506C4.94053 9.57281 5.05309 9.48292 5.1722 9.39546C5.50608 9.15031 5.97547 9.22224 6.22062 9.55612C6.46577 9.88999 6.39385 10.3594 6.05997 10.6045C5.81926 10.7813 5.62748 10.9625 5.47331 11.1447C5.04223 11.6541 4.85949 12.227 4.789 12.8724C4.75865 13.1502 4.74966 13.4213 4.74975 13.6975C4.97192 13.6543 5.19231 13.625 5.38719 13.625C5.80141 13.625 6.13719 13.9608 6.13719 14.375C6.13719 14.7892 5.80141 15.125 5.38719 15.125C5.28121 15.125 5.07549 15.1544 4.77758 15.2271C4.80434 15.625 4.90168 15.9885 5.06027 16.3203C5.37069 16.2068 5.70504 16.125 6.03224 16.125C6.44646 16.125 6.78224 16.4608 6.78224 16.875C6.78224 17.245 6.51433 17.5524 6.16192 17.6138Z"
                        fill="#4f4f4f"
                    ></path>{" "}
                </g>
            </svg>
        );
    }
    if (type === "smoking_area") {
        return (
            <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#4f4f4f"
                stroke="#4f4f4f"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                        fill="var(--ci-primary-color, #4f4f4f)"
                        d="M16,240V360H360V240H16Zm312,88H48V272H328Z"
                        className="ci-primary"
                    ></path>{" "}
                    <rect
                        width="32"
                        height="120"
                        x="384"
                        y="240"
                        fill="var(--ci-primary-color, #4f4f4f)"
                        className="ci-primary"
                    ></rect>{" "}
                    <rect
                        width="32"
                        height="120"
                        x="440"
                        y="240"
                        fill="var(--ci-primary-color, #4f4f4f)"
                        className="ci-primary"
                    ></rect>{" "}
                    <path
                        fill="var(--ci-primary-color, #4f4f4f)"
                        d="M385.428,173.3a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L385.377,48H348.8l-1.82,1.3,18.207,25.49a31.807,31.807,0,0,1-1.736,39.265,64.1,64.1,0,0,0-4.649,76.993L364.77,200h38.46Z"
                        className="ci-primary"
                    ></path>{" "}
                    <path
                        fill="var(--ci-primary-color, #4f4f4f)"
                        d="M457.428,173.3a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L457.377,48H420.8l-1.82,1.3,18.207,25.49a31.807,31.807,0,0,1-1.736,39.265,64.1,64.1,0,0,0-4.649,76.993L436.77,200h38.46Z"
                        className="ci-primary"
                    ></path>{" "}
                </g>
            </svg>
        );
    }

    if (type === "dog") {
        return (
            <svg
                width="256px"
                height="256px"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#4f4f4f"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                        d="M74 211.658C99.0457 142.251 155.836 87.1314 226.717 108.765C276.177 123.861 255.428 151.992 274.648 170.486C285.492 178.829 314.933 167.631 322.548 178.047C329.28 187.259 324.416 204.065 322.548 215.097C315.179 258.597 265.313 265 223.065 265"
                        stroke="#4f4f4f"
                        stroke-opacity="0.9"
                        stroke-width="16"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>{" "}
                    <path
                        d="M325 194C321.518 187.392 313.572 181.214 304 176"
                        stroke="#4f4f4f"
                        stroke-opacity="0.9"
                        stroke-width="16"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>{" "}
                    <path
                        d="M132.242 181.22C129.728 194.908 90.9731 288.143 131.095 296.086C205.608 306.73 196.665 221.971 196.665 169"
                        stroke="#4f4f4f"
                        stroke-opacity="0.9"
                        stroke-width="16"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>{" "}
                    <path
                        d="M234 168V173"
                        stroke="#4f4f4f"
                        stroke-opacity="0.9"
                        stroke-width="16"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>{" "}
                </g>
            </svg>
        );
    }
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"
                    fill="#4f4f4f"
                ></path>{" "}
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"
                    fill="#4f4f4f"
                ></path>{" "}
            </g>
        </svg>
    );
}

export default function Equipments({ service_and_equipment }) {
    console.log(service_and_equipment);
    return (
        <>
            <div className="self-start m-4 mb-2 ml-0 text-xl font-light border-0 border-l-4 border-l-[#D0B8A8] pl-2 text-gray-800 flex flex-row gap-4 items-center">
                <div>設備與服務 &nbsp; </div>
            </div>
            <div className="col-span-8 flex flex-row flex-wrap justify-start gap-4 mr-6 items-start ml-3 mt-4">
                {service_and_equipment.map(
                    (item) =>
                        item.content && (
                            // eslint-disable-next-line react/jsx-key
                            <div>
                                <Chip
                                    className="font-normal text-lg px-4"
                                    variant="ghost"
                                    value={`${item.type} `}
                                    icon={<Icon type={item.icon} />}
                                />
                            </div>
                        )
                )}
            </div>
        </>
    );
}
