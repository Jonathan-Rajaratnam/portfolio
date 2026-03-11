import { useState } from "react";
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
  SiRedhat,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiSwagger,
  SiGrafana,
  SiPrometheus,
  SiApachespark,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

interface IconColors {
  [key: string]: string;
}

const iconColors: IconColors = {
  HTML: "#E34F26",
  RedHat: "#EE0000",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  "Node.js": "#339933",
  TypeScript: "#3178C6",
  MongoDB: "#47A248",
  Python: "#3776AB",
  Docker: "#2496ED",
  Kubernetes: "#326CE5",
  Git: "#F05032",
  MySQL: "#4479A1",
  PyCharm: "#FCF84A",
  Postman: "#FF6C37",
  Swagger: "#85EA2D",
  Angular: "#DD0031",
  Grafana: "#F46800",
  Prometheus: "#E6522C",
  "Apache Spark": "#E25A1C",
};

const categoryFilters = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "database", label: "Databases" },
  { key: "devops", label: "DevOps" },
  { key: "tools", label: "Tools" },
];

const categoryDisplayNames: Record<string, string> = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  mobile: "Mobile Development",
  database: "Databases",
  devops: "DevOps & Monitoring",
  tools: "Developer Tools",
};

const skills: Skill[] = [
  // Frontend Development
  { name: "HTML", icon: <SiHtml5 />, category: "frontend" },
  { name: "CSS", icon: <SiCss3 />, category: "frontend" },
  { name: "JavaScript", icon: <SiJavascript />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
  { name: "Angular", icon: <SiAngular />, category: "frontend" },
  { name: "React", icon: <SiReact />, category: "frontend" },
  {
    name: "VueJS",
    icon: (
      <img
        src="/logo/vue_logo.svg"
        alt="VueJS"
        className="w-8 h-8 md:w-12 md:h-12"
      />
    ),
    category: "frontend",
  },

  // Backend Development
  { name: "Node.js", icon: <SiNodedotjs />, category: "backend" },
  {
    name: "Express",
    icon: <SiExpress />,
    category: "backend",
  },
  {
    name: "Java",
    icon: (
      <img
        src="/logo/java-icon.svg"
        className="w-8 h-8 md:w-14 md:h-14"
        alt="Java"
      />
    ),
    category: "backend",
  },
  {
    name: "Python",
    icon: (
      <img
        src="/logo/python-logo.svg"
        className="w-8 h-10 md:w-12 md:h-14"
        alt="Python"
      />
    ),
    category: "backend",
  },
  { name: "Apache Spark", icon: <SiApachespark />, category: "backend" },

  // Mobile Development
  {
    name: "Flutter",
    icon: (
      <img
        src="/logo/icon_flutter.svg"
        className="w-8 h-8 md:w-12 md:h-12"
        alt="Flutter"
      />
    ),
    category: "mobile",
  },
  {
    name: "Dart",
    icon: (
      <img
        src="/logo/dart.svg"
        className="w-8 h-8 md:w-12 md:h-12"
        alt="Dart"
      />
    ),
    category: "mobile",
  },
  {
    name: "Swift",
    icon: (
      <img
        src="/logo/swift_logo_color.svg"
        className="w-8 h-8 md:w-12 md:h-12"
        alt="Swift"
      />
    ),
    category: "mobile",
  },

  // Databases
  { name: "MongoDB", icon: <SiMongodb />, category: "database" },
  { name: "MySQL", icon: <SiMysql />, category: "database" },

  // DevOps & Monitoring
  { name: "Docker", icon: <SiDocker />, category: "devops" },
  { name: "Kubernetes", icon: <SiKubernetes />, category: "devops" },
  { name: "RedHat", icon: <SiRedhat />, category: "devops" },
  { name: "Bash", icon: <SiGnubash />, category: "devops" },
  { name: "Grafana", icon: <SiGrafana />, category: "devops" },
  { name: "Prometheus", icon: <SiPrometheus />, category: "devops" },

  // Developer Tools
  { name: "Git", icon: <SiGit />, category: "tools" },
  { name: "Swagger", icon: <SiSwagger />, category: "tools" },
  {
    name: "VSCode",
    category: "tools",
    icon: (
      <img
        src="/logo/vscode.svg"
        className="w-8 h-8 md:w-12 md:h-12"
        alt="VSCode"
      />
    ),
  },
  {
    name: "PyCharm",
    icon: (
      <img
        src="/logo/PyCharm_icon.svg"
        className="w-8 h-8 md:w-12 md:h-12"
        alt="PyCharm"
      />
    ),
    category: "tools",
  },
  {
    name: "IntelliJ",
    icon: (
      <img
        src="/logo/IntelliJ_IDEA_icon.svg"
        className="w-8 h-8 md:w-12 md:h-12"
        alt="IntelliJ"
      />
    ),
    category: "tools",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    category: "tools",
  },
];

const SkillCard = ({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const brandColor = iconColors[skill.name] || "#a78bfa";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-card p-6 rounded-lg shadow-xs flex flex-col items-center w-20 h-20 md:w-28 md:h-28 relative group/skill cursor-pointer opacity-0 animate-fade-in"
      style={{
        animationDelay: `${index * 0.1}s`,
        transition: "transform 0.4s ease-out, box-shadow 0.4s ease-out",
        transform: isHovered ? "translateY(-3px)" : "none",
        boxShadow: isHovered
          ? `0 6px 20px ${brandColor}25, 0 0 15px ${brandColor}15`
          : undefined,
      }}
    >
      {/* Icon */}
      <div className="flex-grow flex items-center justify-center">
        <div
          className="text-4xl md:text-5xl flex items-center justify-center"
          style={{
            color: iconColors[skill.name],
          }}
        >
          {skill.icon}
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-2 px-3 rounded-md opacity-0 group-hover/skill:opacity-100 pointer-events-none whitespace-nowrap z-10 shadow-lg transition-opacity duration-300">
        {skill.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

const CategoryGroup = ({
  categoryKey,
  categorySkills,
}: {
  categoryKey: string;
  categorySkills: Skill[];
}) => {
  const title = categoryDisplayNames[categoryKey] || categoryKey;
  const words = title.split(" ");

  return (
    <div className="group">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
          {words.length > 1 ? (
            <>
              <span className="text-primary">{words[0]}</span>{" "}
              {words.slice(1).join(" ")}
            </>
          ) : (
            title
          )}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-10">
        {categorySkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Group skills by category
  const grouped = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  // Order in which categories are displayed
  const categoryOrder = [
    "frontend",
    "backend",
    "mobile",
    "database",
    "devops",
    "tools",
  ];

  const filteredCategories =
    activeFilter === "all"
      ? categoryOrder.filter((key) => grouped[key]?.length)
      : [activeFilter].filter((key) => grouped[key]?.length);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categoryFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === filter.key
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-foreground/70 hover:text-foreground hover:bg-card/80 hover:scale-105"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="space-y-18">
          {filteredCategories.map((categoryKey) => (
            <CategoryGroup
              key={categoryKey}
              categoryKey={categoryKey}
              categorySkills={grouped[categoryKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
