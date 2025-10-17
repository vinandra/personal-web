export default function Navigasi() {
  return (
    <nav className="p-1 bg-white dark:bg-zinc-900 flex items-center gap-x-0.5 rounded-full shadow-md fixed bottom-4 md:bottom-auto md:top-12 left-1/2 -translate-x-1/2 z-10">
      <a
        href="#about"
        className="px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
      >
        <span className="md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="hidden md:inline">About</span>
      </a>
      <a
        href="#experiences"
        className="px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
      >
        <span className="md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 20V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V20M4 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V8C2 6.89543 2.89543 6 4 6Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="hidden md:inline">Experiences</span>
      </a>
      <a
        href="#skills"
        className="px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
      >
        <span className="md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.3 9.99999C8.17109 10.007 8.04274 9.97827 7.92916 9.91691C7.81557 9.85555 7.72116 9.76398 7.65637 9.65231C7.59159 9.54064 7.55894 9.41323 7.56205 9.28416C7.56517 9.1551 7.60391 9.02941 7.674 8.92099L11.4 2.99999C11.4585 2.89456 11.5433 2.80604 11.6462 2.74302C11.749 2.68 11.8663 2.64461 11.9869 2.64028C12.1074 2.63596 12.227 2.66284 12.334 2.71833C12.4411 2.77382 12.532 2.85603 12.598 2.95699L16.3 8.89999C16.373 9.00478 16.4159 9.12754 16.4241 9.25497C16.4323 9.3824 16.4055 9.50965 16.3466 9.62294C16.2877 9.73623 16.1989 9.83125 16.0899 9.89771C15.9808 9.96417 15.8557 9.99954 15.728 9.99999H8.3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55229 21 10 20.5523 10 20V15C10 14.4477 9.55229 14 9 14Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C15.567 14 14 15.567 14 17.5C14 19.433 15.567 21 17.5 21Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="hidden md:inline">Skills</span>
      </a>
      <a
        href="#projects"
        className="px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
      >
        <span className="md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55229 3.44772 10 4 10H20C20.5523 10 21 9.55229 21 9V4C21 3.44772 20.5523 3 20 3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55229 21 10 20.5523 10 20V15C10 14.4477 9.55229 14 9 14Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="hidden md:inline">Projects</span>
      </a>
      <a
        href="#contact"
        className="px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
      >
        <span className="md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29059 7.36579 9.51535C7.31256 9.74012 7.33878 9.97638 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="hidden md:inline">Contact</span>
      </a>
      <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800"></div>
      <button className="px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 5H22M20 3V7M20.985 12.486C20.8913 14.2221 20.2967 15.894 19.2731 17.2994C18.2495 18.7048 16.8407 19.7837 15.217 20.4055C13.5934 21.0274 11.8243 21.1656 10.1238 20.8035C8.42324 20.4414 6.86398 19.5945 5.63449 18.3652C4.40499 17.1358 3.55791 15.5766 3.19564 13.8761C2.83337 12.1756 2.97142 10.4065 3.5931 8.78282C4.21478 7.15909 5.29348 5.75019 6.6988 4.72644C8.10412 3.70268 9.77589 3.1079 11.512 3.014C11.917 2.992 12.129 3.474 11.914 3.817C11.1949 4.96755 10.887 6.32787 11.0405 7.67595C11.194 9.02403 11.7999 10.2803 12.7593 11.2397C13.7187 12.1991 14.975 12.805 16.3231 12.9585C17.6712 13.112 19.0315 12.8041 20.182 12.085C20.526 11.87 21.007 12.081 20.985 12.486Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
}
