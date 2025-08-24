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
				"A calendar that shows a flower for each day of the year. It dynamically maps a flower for each day of the year and a user can view details about the specific flower.",
			image: "/projects/flower-calendar.png",
			tags: ["Vue.js"],
			demoUrl: "https://flower-calendar.vercel.app/",
			githubUrl: "https://github.com/Jonathan-Rajaratnam/flower-calendar",
		},
		{
			id: 2,
			title: "FoodLens",
			description:
				"A Mobile Application built to identify allergens in packaged food and suggest alternatives.",
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
			description:
				"A tool to generate APIs based off a Postman Collection and map them to the ESB.",
			image: "/projects/api-tool.png",
			tags: ["React", "Node.js", "Express.js", "Electron"],
			demoUrl: "",
			githubUrl: "",
		},
		{
			id: 5,
			title: "Project Management and Proposal Tool",
			description:
				"A tool to manage projects and generate project proposals for clients based off their requirements and technology stacks. It uses a dynamic pricing model to calculate the cost of the project based on the technology stack and the number of developers required.",
			image: "/projects/project-management.png",
			tags: ["React", "Tailwind CSS", "TypeScript"],
			demoUrl: "",
			githubUrl:
				"https://github.com/Jonathan-Rajaratnam/project-management",
		},
		{
			id: 6,
			title: "Shopping Platform",
			description: "A shopping platform for buying and selling products.",
			image: "/projects/shopping-platform.jpg",
			tags: ["Java", "Swing", "MySQL"],
			demoUrl: "",
			githubUrl:
				"https://github.com/Jonathan-Rajaratnam/Shopping-Platform",
		},
		{
			id: 7,
			title: "Theatre Booking System",
			description:
				"A system to book tickets for movies and events in a theatre.",
			image: "/projects/library-management.svg",
			tags: ["Python", "MySQL"],
			demoUrl: "",
			githubUrl: "",
		},
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
							className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
							{/* Project Image */}
							<div className="h-48 overflow-hidden relative">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>

							{/* Card Content */}
							<div className="p-6 flex flex-col flex-grow">
								{/* Title and Description */}
								<div className="flex-grow">
									<h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
										{project.title}
									</h3>
									<p className="text-muted-foreground text-sm mb-4 leading-relaxed">
										{project.description}
									</p>
								</div>

								{/* Tags */}
								<div className="flex flex-wrap gap-2 mb-6">
									{project.tags.map((tag, index) => (
										<span
											key={index}
											className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default">
											{tag}
										</span>
									))}
								</div>

								{/* Links - Always at bottom */}
								<div className="flex justify-between items-center pt-4 border-t border-border/50">
									<div className="flex space-x-4">
										{project.demoUrl && (
											<a
												href={project.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-105 transform">
												<ExternalLink size={18} />
												<span>Live Demo</span>
											</a>
										)}
										{project.githubUrl && (
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-105 transform">
												<Github size={18} />
												<span>Source</span>
											</a>
										)}
									</div>

									{/* Status indicator for links */}
									<div className="flex items-center gap-1">
										{project.demoUrl && (
											<div
												className="w-2 h-2 bg-green-500 rounded-full"
												title="Live demo available"></div>
										)}
										{project.githubUrl && (
											<div
												className="w-2 h-2 bg-blue-500 rounded-full"
												title="Source code available"></div>
										)}
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
