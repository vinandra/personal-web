import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experiences';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navigasi from '@/components/Navigasi';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
	return (
		<div>
			<Navigasi />
			<div className="max-w-3xl mx-auto px-4 pt-8 pb-24 md:px-8 md:pt-40 space-y-12">
				<Header />
				<hr className="border-zinc-200 dark:border-zinc-800" />
				<About />
				<hr className="border-zinc-200 dark:border-zinc-800" />
				<Experience />
				<hr className="border-zinc-200 dark:border-zinc-800" />
				<Skills />
				<hr className="border-zinc-200 dark:border-zinc-800" />
				<Projects />
				<hr className="border-zinc-200 dark:border-zinc-800" />
				<Contact />
				<hr className="border-zinc-200 dark:border-zinc-800" />
				<Footer />
			</div>
		</div>
	);
}
