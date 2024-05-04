"use client";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";

export default function Translation() {
  const pathName = usePathname();
  const router = useRouter();

  const handleChangeLanguage = (lang: string) => {
    // Extract the current path without the language segment
    const pathWithoutLang = pathName.replace(/\/[a-z]{2}\b/i, "");

    // Redirect to the selected language route appended with the current route path
    router.push(`/${lang}${pathWithoutLang}`);
    router.refresh();
  };
  return (
    <Menu>
      <MenuHandler className="dark:text-white">
        <IconButton
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          variant="text"
        >
          <World />
        </IconButton>
      </MenuHandler>
      <MenuList
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="flex flex-col gap-2"
      >
        <MenuItem
          onClick={() => handleChangeLanguage("en")}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="flex items-center gap-4 py-2 pl-2 pr-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <rect
              x="1"
              y="4"
              width="30"
              height="24"
              rx="4"
              ry="4"
              fill="#fff"
            ></rect>
            <path
              d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z"
              fill="#a62842"
            ></path>
            <path
              d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z"
              fill="#a62842"
            ></path>
            <path fill="#a62842" d="M2 11.385H31V13.231H2z"></path>
            <path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path>
            <path fill="#a62842" d="M1 18.769H31V20.615H1z"></path>
            <path
              d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
              fill="#a62842"
            ></path>
            <path
              d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z"
              fill="#a62842"
            ></path>
            <path
              d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z"
              fill="#102d5e"
            ></path>
            <path
              d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
              opacity=".15"
            ></path>
            <path
              d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
              fill="#fff"
              opacity=".2"
            ></path>
            <path
              fill="#fff"
              d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"
            ></path>
            <path
              fill="#fff"
              d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"
            ></path>
            <path
              fill="#fff"
              d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"
            ></path>
            <path
              fill="#fff"
              d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"
            ></path>
            <path
              fill="#fff"
              d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"
            ></path>
            <path
              fill="#fff"
              d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"
            ></path>
            <path
              fill="#fff"
              d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"
            ></path>
            <path
              fill="#fff"
              d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"
            ></path>
            <path
              fill="#fff"
              d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"
            ></path>
            <path
              fill="#fff"
              d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"
            ></path>
            <path
              fill="#fff"
              d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"
            ></path>
            <path
              fill="#fff"
              d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"
            ></path>
            <path
              fill="#fff"
              d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"
            ></path>
            <path
              fill="#fff"
              d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"
            ></path>
            <path
              fill="#fff"
              d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"
            ></path>
            <path
              fill="#fff"
              d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"
            ></path>
            <path
              fill="#fff"
              d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"
            ></path>
            <path
              fill="#fff"
              d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"
            ></path>
          </svg>
          English
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeLanguage("fr")}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="flex items-center gap-4 py-2 pl-2 pr-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path fill="#fff" d="M10 4H22V28H10z"></path>
            <path
              d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
              fill="#092050"
            ></path>
            <path
              d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
              transform="rotate(180 26 16)"
              fill="#be2a2c"
            ></path>
            <path
              d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
              opacity=".15"
            ></path>
            <path
              d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
              fill="#fff"
              opacity=".2"
            ></path>
          </svg>
          French
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeLanguage("ar")}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="flex items-center gap-4 py-2 pl-2 pr-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              d="M19,4h12V28h-12c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
              transform="rotate(180 23 16)"
              fill="#fff"
            ></path>
            <path
              d="M5,4h11V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
              fill="#2b6536"
            ></path>
            <path
              d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
              opacity=".15"
            ></path>
            <path
              fill="#c22b38"
              d="M19.091 17.427L20.769 19.737 20.769 16.882 23.483 16 20.769 15.118 20.769 12.263 19.091 14.573 16.376 13.691 18.054 16 16.376 18.309 19.091 17.427z"
            ></path>
            <path
              d="M14.345,20.907c-2.71-2.17-3.148-6.126-.978-8.836,2.17-2.71,6.126-3.148,8.836-.978,.361,.289,.689,.617,.978,.978-2.17-3.758-6.976-5.046-10.734-2.876-3.758,2.17-5.046,6.976-2.876,10.734,2.17,3.758,6.976,5.046,10.734,2.876,1.195-.69,2.187-1.682,2.876-2.876-2.17,2.71-6.126,3.148-8.836,.978Z"
              fill="#c22b38"
            ></path>
            <path
              d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
              fill="#fff"
              opacity=".2"
            ></path>
          </svg>
          Arabic
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function World() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}
