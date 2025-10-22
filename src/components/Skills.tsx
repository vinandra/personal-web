export default function Skills() {
  return (
    <section id="skills" className="space-y-6 pt-24">
      <h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">
        Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
          <div className="size-[45px] rounded-xl flex items-center justify-center shrink-0 bg-linear-to-b from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 18.5L22.5 12.5L16.5 6.5M8.5 6.5L2.5 12.5L8.5 18.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-full">
            <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-1.5">
              JavaScript & Typescript
            </h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
              Expert in modern JavaScript (ES6+) and TypeScript for building
              type-safe applications.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
          <div className="size-[45px] rounded-xl flex items-center justify-center shrink-0 bg-linear-to-b from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.8 10.5001C8.67109 10.5071 8.54274 10.4783 8.42916 10.417C8.31557 10.3556 8.22116 10.264 8.15637 10.1524C8.09159 10.0407 8.05894 9.91329 8.06205 9.78422C8.06517 9.65516 8.10391 9.52947 8.174 9.42105L11.9 3.50005C11.9585 3.39462 12.0433 3.3061 12.1462 3.24308C12.249 3.18006 12.3663 3.14467 12.4869 3.14034C12.6074 3.13602 12.727 3.1629 12.834 3.21839C12.9411 3.27388 13.032 3.35609 13.098 3.45705L16.8 9.40005C16.873 9.50484 16.9159 9.6276 16.9241 9.75503C16.9323 9.88246 16.9055 10.0097 16.8466 10.123C16.7877 10.2363 16.6989 10.3313 16.5899 10.3978C16.4808 10.4642 16.3557 10.4996 16.228 10.5001H8.8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 14.5H4.5C3.94772 14.5 3.5 14.9478 3.5 15.5V20.5001C3.5 21.0523 3.94772 21.5001 4.5 21.5001H9.5C10.0523 21.5001 10.5 21.0523 10.5 20.5001V15.5C10.5 14.9478 10.0523 14.5 9.5 14.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 21.5001C19.933 21.5001 21.5 19.933 21.5 18.0001C21.5 16.0671 19.933 14.5 18 14.5C16.067 14.5 14.5 16.0671 14.5 18.0001C14.5 19.933 16.067 21.5001 18 21.5001Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-full">
            <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-1.5">
              UI/UX Design
            </h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
              Creating intuitive user interfaces with a focus on accessibility
              and user experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
          <div className="size-[45px] rounded-xl flex items-center justify-center shrink-0 bg-linear-to-b from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5 5.5C21.5 7.15685 17.4706 8.5 12.5 8.5C7.52944 8.5 3.5 7.15685 3.5 5.5M21.5 5.5C21.5 3.84315 17.4706 2.5 12.5 2.5C7.52944 2.5 3.5 3.84315 3.5 5.5M21.5 5.5V19.5C21.5 20.2956 20.5518 21.0587 18.864 21.6213C17.1761 22.1839 14.8869 22.5 12.5 22.5C10.1131 22.5 7.82387 22.1839 6.13604 21.6213C4.44821 21.0587 3.5 20.2956 3.5 19.5V5.5M3.5 12.5C3.5 13.2956 4.44821 14.0587 6.13604 14.6213C7.82387 15.1839 10.1131 15.5 12.5 15.5C14.8869 15.5 17.1761 15.1839 18.864 14.6213C20.5518 14.0587 21.5 13.2956 21.5 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-full">
            <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-1.5">
              Backend Integration
            </h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
              Working with RESTful APIs, GraphQL, and modern backend services
              for full-stack development.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
          <div className="size-[45px] rounded-xl flex items-center justify-center shrink-0 bg-linear-to-b from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 11.5V15.5C7.5 16.0304 7.71071 16.5391 8.08579 16.9142C8.46086 17.2893 8.96957 17.5 9.5 17.5H13.5M5.5 3.5H9.5C10.6046 3.5 11.5 4.39543 11.5 5.5V9.5C11.5 10.6046 10.6046 11.5 9.5 11.5H5.5C4.39543 11.5 3.5 10.6046 3.5 9.5V5.5C3.5 4.39543 4.39543 3.5 5.5 3.5ZM15.5 13.5H19.5C20.6046 13.5 21.5 14.3954 21.5 15.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H15.5C14.3954 21.5 13.5 20.6046 13.5 19.5V15.5C13.5 14.3954 14.3954 13.5 15.5 13.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-full">
            <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-1.5">
              Tooling & Automation
            </h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
              Setting up build tools, CI/CD pipelines, and development workflows
              for efficient delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
