import { ArrowRight, ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
	interface Project {
		id: number;
		title: string;
		description: string;
		image: string;
		tags: string[];
		demoUrl?: string;
		githubUrl?: string;
	}

	const projects: Project[] = [
		{
			id: 1,
			title: "Flower Calendar",
			description:
				"A calendar that shows a flower for each day of the year.",
			image: "/projects/flower-calendar.png",
			tags: ["Vue"],
			demoUrl: "",
			githubUrl: "",
		},
		{
			id: 2,
			title: "FoodLens",
			description: "",
			image: "/projects/foodlens.png",
			tags: [
				"Flutter",
				"Dart",
				"Node.js",
				"Express.js",
				"MongoDB",
				"MongoDB",
				"Firebase",
			],
			demoUrl: "https://foodlens.netlify.app/",
			githubUrl: "",
		},
		// {
		// 	id: 3,
		// 	title: "APK Application Management Site",
		// 	description: "",
		// 	image: "",
		// 	tags: ["React", "Node.js", "Express.js", "MongoDB"],
		// 	demoUrl: "",
		// 	githubUrl: "",
		// },
		{
			id: 4,
			title: "API Generation and Mapping Tool",
			description: "",
			image: "/projects/api-tool.png",
			tags: ["React", "Node.js", "Express.js", "Electron"],
			demoUrl: "",
			githubUrl: "",
		},
		{
			id: 5,
			title: "Project Management and Project Proposal Tool",
			description:
				"A tool to manage projects and generate project proposals for clients .",
			image: "/projects/project-management.png",
			tags: ["React", "Tailwind CSS", "TypeScript"],
			demoUrl: "",
			githubUrl: "",
		},
		// {
		// 	id: 6,
		// 	title: "Shopping Platform",
		// 	description: "A shopping platform for buying and selling products.",
		// 	image: "/projects/shopping-platform.png",
		// 	tags: ["Java", "Swing", "MySQL"],
		// 	demoUrl: "",
		// 	githubUrl: "",
		// },
	];

	return (
		<section id="projects" className="py-24 px-4 relaitive">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Featured <span className="text-primary"> Projects</span>
				</h2>
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my recent projects. Each project was
					carefully crafted with attention to detail, performance, and
					user experience.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group bg-card  rounded-lg overflow-hidden shadow-xs card-hover">
							<div className="h-48 overflow-hidden ">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold mb-1">
									{" "}
									{project.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
											{tag}
										</span>
									))}
								</div>
								<div className="flex justify-between items-center">
									<div className="flex space-x-3">
										<a
											href={project.demoUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300">
											<ExternalLink size={20} />
										</a>
										<a
											href={project.githubUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300">
											<Github size={20} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/Jonathan-Rajaratnam">
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
