import { ArrowDown } from "lucide-react";
import { TypeWriter } from "./TypeWriter";

export const HeroSection = () => {
	const roles = [
		"Software Engineer",
		"Bookworm",
		"Cloud Enthusiast",
		"Machine Learning Engineer",
	];

	return (
		<section
			id="hero"
			className="relative min-h-screen flex flex-col items-center justify-center px-4">
			<div className="container max-w-4xl mx-auto text-center z-10">
				<div className="space-y-6">
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
						<span className="opacity-0 animate-fade-in">I'm</span>
						<span className=" text-primary opacity-0 animate-fade-in-delay-1">
							{" "}
							Jonathan
						</span>
						<span className=" text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
							{" "}
							Rajaratnam
						</span>
					</h1>

					{/* Add the TypeWriter component */}
					<h2 className="text-2xl md:text-3xl font-semibold opacity-0 animate-fade-in-delay-3">
						I'm a{" "}
						<TypeWriter
							words={roles}
							className="text-primary inline-block min-w-[200px] text-left"
						/>
					</h2>

					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
						I'm a software engineer with a passion for building
						innovative solutions. I specialize in backend
						development, cloud computing, and DevOps.
					</p>
					<div className="opacity-0 animate-fade-in-delay-5">
						<a href="#projects" className="cosmic-button">
							View My Work
						</a>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
				<span className="text-sm text-muted-foreground mb-2">
					Scroll
				</span>
				<ArrowDown className="w-6 h-6 text-primary" />
			</div>
		</section>
	);
};
