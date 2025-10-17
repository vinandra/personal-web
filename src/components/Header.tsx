import Image from "next/image";
import About from "./About";

export default function Header() {
  return (
    <header className=" flex gap-x-8 flex-col md:flex-row">
      <Image
        className="size-[100px] rounded-full"
        src="/picture.jpeg"
        alt="picture of author"
        width={100}
        height={100}
      />
      <div>
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-50 mb-1.5">
          Vinandra
        </h1>
        <h2 className="text-lg font-light text-zinc-500 dark:text-zinc-300">
          Software Engineer // Frontend, JavaScript
        </h2>
        <div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
          <span className="text-zinc-500 dark:text-zinc-300">
            vinandra207@gmail.com
          </span>
          <a
            href="https://github.com/vinandra"
            target="_blank"
            className="text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-100 flex items-center gap-x-2.5"
          >
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 17V14C11.3543 13.0605 11.0849 12.1176 10.5 11.375C12.75 11.375 15 9.875 15 7.25C15.06 6.3125 14.7975 5.39 14.25 4.625C14.46 3.7625 14.46 2.8625 14.25 2C14.25 2 13.5 2 12 3.125C10.02 2.75 7.98 2.75 6 3.125C4.5 2 3.75 2 3.75 2C3.525 2.8625 3.525 3.7625 3.75 4.625C3.2039 5.38691 2.93885 6.31459 3 7.25C3 9.875 5.25 11.375 7.5 11.375C7.2075 11.7425 6.99 12.1625 6.8625 12.6125C6.735 13.0625 6.6975 13.535 6.75 14M6.75 14V17M6.75 14C3.3675 15.5 3 12.5 1.5 12.5"
                stroke="currentColor"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Github
          </a>
          <a
            href="#"
            className="text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-100 flex items-center gap-x-2.5"
          >
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.5C13.1935 6.5 14.3381 6.97411 15.182 7.81802C16.0259 8.66193 16.5 9.80653 16.5 11V16.25H13.5V11C13.5 10.6022 13.342 10.2206 13.0607 9.93934C12.7794 9.65804 12.3978 9.5 12 9.5C11.6022 9.5 11.2206 9.65804 10.9393 9.93934C10.658 10.2206 10.5 10.6022 10.5 11V16.25H7.5V11C7.5 9.80653 7.97411 8.66193 8.81802 7.81802C9.66193 6.97411 10.8065 6.5 12 6.5Z"
                stroke="currentColor"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 7.25H1.5V16.25H4.5V7.25Z"
                stroke="currentColor"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 5C3.82843 5 4.5 4.32843 4.5 3.5C4.5 2.67157 3.82843 2 3 2C2.17157 2 1.5 2.67157 1.5 3.5C1.5 4.32843 2.17157 5 3 5Z"
                stroke="currentColor"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://x.com/Auahgelapppppp_"
            target="_blank"
            className="text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-100 flex items-center gap-x-2.5"
          >
            <svg
              width="18"
              height="19"
              viewBox="0 0 396 396"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M301.026 37.125H355.608L236.362 173.415L376.645 358.875H266.805L180.774 246.395L82.335 358.875H27.72L155.265 213.098L20.691 37.125H133.32L211.084 139.937L301.026 37.125ZM281.869 326.205H312.114L116.886 68.079H84.4305L281.869 326.205Z"
                fill="white"
              />
            </svg>
            @Auahgelapppppp_
          </a>
        </div>
      </div>
    </header>
  );
}
