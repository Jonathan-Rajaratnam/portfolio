import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiNodedotjs,
	SiTypescript,
	SiMongodb,
	SiDocker,
	SiKubernetes,
	SiGit,
	SiMysql,
	SiAngular,
} from "react-icons/si";

const iconColors = {
	HTML: "#E34F26",
	CSS: "#1572B6",
	JavaScript: "#F7DF1E",
	React: "#61DAFB",
	"Node.js": "#339933",
	Express: "#FFFFFF",
	TypeScript: "#3178C6",
	MongoDB: "#47A248",
	Python: "#3776AB",
	Docker: "#2496ED",
	Kubernetes: "#326CE5",
	Git: "#F05032",
	MySQL: "#4479A1",
	PyCharm: "#FCF84A",
	Postman: "#FF6C37",
	PostgreSQL: "#336791",
};

const skills = [
	{ name: "HTML", icon: <SiHtml5 />, category: "frontend" },
	{ name: "CSS", icon: <SiCss3 />, category: "frontend" },
	{ name: "JavaScript", icon: <SiJavascript />, category: "frontend" },
	{ name: "Angular", icon: <SiAngular />, category: "frontend" },
	{ name: "React", icon: <SiReact />, category: "frontend" },
	{
		name: "Flutter",
		icon: <img src="/logo/icon_flutter.svg" className="w-12 h-full" />,
		category: "frontend",
	},
	{
		name: "VueJS",
		icon: (
			<img
				src="/logo/vue_logo.svg"
				alt="VueJS"
				className="w-full h-full"
			/>
		),
		category: "frontend",
	},
	{ name: "Node.js", icon: <SiNodedotjs />, category: "backend" },
	{ name: "TypeScript", icon: <SiTypescript />, category: "backend" },
	{
		name: "Express",
		icon: (
			<img src="public/logo/express-dark.svg" className="w-full h-full" />
		),
		category: "backend",
	},
	{
		name: "Dart",
		icon: <img src="/logo/dart.svg" className="w-full h-full" />,
		category: "backend",
	},
	{
		name: "Python",
		icon: <img src="/logo/python-logo.svg" className="w-full h-full" />,
		category: "backend",
	},
	{ name: "MongoDB", icon: <SiMongodb />, category: "database" },
	{ name: "MySQL", icon: <SiMysql />, category: "database" },
	{ name: "Docker", icon: <SiDocker />, category: "devops" },
	{ name: "Kubernetes", icon: <SiKubernetes />, category: "devops" },
	{
		name: "Bash",
		icon: <img src="/logo/bash.svg" className="w-full h-full" />,
		category: "devops",
	},
	{ name: "Git", icon: <SiGit />, category: "tools" },
	{
		name: "VSCode",
		category: "tools",
		icon: <img src="/logo/vscode.svg" className="w-full h-full" />,
	},
	{
		name: "PyCharm",
		icon: <img src="/logo/PyCharm_icon.svg" className="w-full h-full" />,
		category: "tools",
	},
	{
		name: "IntelliJ",
		icon: (
			<img src="/logo/IntelliJ_IDEA_icon.svg" className="w-full h-full" />
		),
		category: "tools",
	},
	{
		name: "Postman",
		icon: <img src="/logo/postman.svg" className="w-full h-full" />,
		category: "tools",
	},
];

export const SkillsSection = () => {
	const groupedSkills = skills.reduce((acc, skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = [];
		}
		acc[skill.category].push(skill);
		return acc;
	}, {});

	// Reorganize skills into these categories
	const displayCategories = {
		"Frontend Technologies": groupedSkills.frontend || [],
		"Backend Technologies": groupedSkills.backend || [],
		Databases: groupedSkills.database || [],
		"Deployment & Pipelines": groupedSkills.devops || [],
		"IDEs & Platforms": groupedSkills.tools || [],
	};

	const renderCategoryTitle = (title: string) => {
		const words = title.split(" ");
		if (words.length <= 1) return title;
		return (
			<>
				<span className="text-primary">{words[0]}</span>{" "}
				{words.slice(1).join(" ")}
			</>
		);
	};

	return (
		<section id="skills" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
					My <span className="text-primary">Skills</span>
				</h2>

				<div className="space-y-18">
					{Object.entries(displayCategories).map(
						([title, categorySkills]) => (
							<div key={title} className="group">
								<div className="text-center mb-10">
									<h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
										{renderCategoryTitle(title)}
									</h3>
								</div>

								<div className="flex flex-wrap justify-center gap-8 md:gap-10">
									{categorySkills.map((skill, index) => (
										<div
											key={skill.name}
											className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center opacity-0 animate-fade-in w-28 h-28"
											style={{
												animationDelay: `${
													index * 0.1
												}s`,
											}}>
											{/* Icon with original brand color */}
											<div
												className="text-4xl flex-grow flex items-center md:text-6xl mb-4"
												style={{
													color: iconColors[
														skill.name
													],
												}}>
												{skill.icon}
											</div>
										</div>
									))}
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};
