import { Code, Container, User } from "lucide-react";

export const AboutSection = () => {
	return (
		<section id="about" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-4xl font-bold text-center mb-12 ">
					About <span className="text-primary"> Me</span>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h3 className="text-2xl font-semibold">
							Passionate Full-Stack Developer
						</h3>
						<p className="text-muted-foreground">
							I am a passionate full stack developer with a strong
							background in building scalable and efficient web
							applications. I have experience in various
							technologies and frameworks, and I am always eager
							to learn new skills and improve my craft.
						</p>
						<p className="text-muted-foreground">
							I am also passionate about Dev Ops practices,
							ensuring smooth deployment and maintenance of
							applications. My goal is to create high-quality,
							user-friendly applications that solve real-world
							problems and provide a great user experience.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
							<a href="#contact" className="cosmic-button">
								Get in Touch
							</a>

							<a
								href="/documents/resume.pdf"
								className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
								Download CV
							</a>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6">
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="self-center p-3 rounded-full bg-primary/10">
									<Code className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">
										Back End Development
									</h4>
									<p className="text-muted-foreground">
										I specialize in building robust and
										scalable backend systems using modern
										technologies.
									</p>
								</div>
							</div>
						</div>
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="self-center p-3 rounded-full bg-primary/10">
									<User className=" h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">
										Full Stack Development
									</h4>
									<p className="text-muted-foreground">
										I specialize in creating dynamic and
										responsive web applications using the
										latest technologies.
									</p>
								</div>
							</div>
						</div>
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="self-center p-3 rounded-full bg-primary/10">
									<Container className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">
										Dev Ops Engineering
									</h4>
									<p className="text-muted-foreground">
										I specialize in Dev Ops practices,
										ensuring smooth deployment and
										maintenance of applications.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
