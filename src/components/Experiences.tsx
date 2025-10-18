export default function Experience() {
  return (
    <section id="experiences" className="space-y-6">
      <h3 className="text-sm uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-300">
        Experiences
      </h3>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-4/12">
          <span className="text-xs text-zinc-500 dark:text-zinc-300">
            2022 - Present
          </span>
        </div>
        <div className="w-full md:w-8/12">
          <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-1.5">
            computer science student
          </h4>
          <div className="text-zinc-500 dark:text-zinc-300 mb-2">
            Cumulative GPA: 3.66/4.0
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-300 loading-relaxed">
            Relevant Coursework: Algorithms; Data Structures; Clean Code and
            Design Pattern; Object-Oriented Programming; Database; machine
            learning;
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-4/12">
          <span className="text-xs text-zinc-500 dark:text-zinc-300">
            2022 - 2023
          </span>
        </div>
        <div className="w-full md:w-8/12">
          <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-1.5">
            Frontend Engineer
          </h4>
          <div className="text-zinc-500 dark:text-zinc-300 mb-2">
            Student Activity
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-300 loading-relaxed">
            Learned and practiced frontend engineering with attention to code
            quality and web performance (PHP); Awarded the Rector&apos;s
            scholarship by collaborating to build one internal web application
            for DNCC (React); Accelerate the learning process of new members by
            holding talks/workshops on essential frontend dev (HTML, CSS)
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-4/12">
          <span className="text-xs text-zinc-500 dark:text-zinc-300">
            2023 - 2024
          </span>
        </div>
        <div className="w-full md:w-8/12">
          <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-1.5">
            FullStack Web Dev
          </h4>
          <div className="text-zinc-500 dark:text-zinc-300 mb-2">
            DISKOMINFO SEMARANG
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-300 loading-relaxed">
            building a website using Laravel (PHP), integrating databases,
            implementing UI and UX, and maintaining information systems
          </p>
        </div>
      </div>
    </section>
  );
}
