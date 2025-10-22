import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="space-y-6 pt-24">
      <h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">
        projects
      </h3>
      <div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
        <Image
          alt="image"
          src="https://is3.cloudhost.id/godspeed-you-black-emeperor/courses/belajar-tailwind-v4/pasted_image_1760287503420_8en5f7.png"
          className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
          width={800}
          height={500}
        />
        <div className="w-full">
          <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
            Component Library
          </h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-300 loading-relaxed">
            Open-source React component library with TypeScript support.
            Features 50+ components with comprehensive documentation and
            Storybook integration.
          </p>
          <div className="flex items-center gap-x-2.5 mt-2">
            <span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
              React
            </span>
            <span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
              Tailwind
            </span>
            <span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
              Base UI
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
        <Image
          alt="gambar"
          src="https://is3.cloudhost.id/godspeed-you-black-emeperor/courses/belajar-tailwind-v4/pasted_image_1760288967623_unmf3m.png"
          className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
          width={800}
          height={500}
        />
        <div className="w-full">
          <h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
            Portfolio Website
          </h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
            Minimalist portfolio showcasing design and development work. Built
            with performance and accessibility in mind.
          </p>
          <div className="flex items-center gap-x-2.5 mt-2">
            <span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
              Tailwind CSS
            </span>
            <span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
              React
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
