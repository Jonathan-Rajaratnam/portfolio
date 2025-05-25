import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
	{ name: "Home", path: "#hero" },
	{ name: "About", path: "#about" },
	{ name: "Skills", path: "#skills" },
	{ name: "Projects", path: "#projects" },
	{ name: "Contact", path: "#contact" },
];

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
			const scrollY = window.scrollY;
			if (scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={cn(
				"fixed w-full z-40 transition-all duration-300",
				isScrolled
					? "py-3 bg-background/80 backdrop-blur-none shadow-xs"
					: "py-5"
			)}>
			<div className="container flex items-center justify-between">
				<a
					className="text-xl font-bold text-primary flex items-center"
					href="#hero">
					<span className="relative z-10 ">
						<span className="text-glow text-primary">
							Jonathan.
						</span>
						<span className="text-glow text-foreground">Dev</span>
					</span>
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-8">
					{navItems.map((item, key) => (
						<a
							className="text-foreground/80 hover:text-primary transition-colors duration-300"
							key={key}
							href={item.path}>
							{item.name}
						</a>
					))}
				</div>

				{/* Mobile Navigation Controls */}
				<div className="md:hidden flex items-center space-x-3">
					{/* Theme Toggle for Mobile */}
					<ThemeToggle inline size={20} />

					{/* Menu Toggle */}
					<button
						onClick={() => setIsMenuOpen((prev) => !prev)}
						className="p-2 text-foreground z-50"
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu Overlay */}
				<div
					className={cn(
						"fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
						"transition-all duration-300 md:hidden",
						isMenuOpen
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					)}>
					<div className="flex flex-col space-y-8 text-xl">
						{navItems.map((item, key) => (
							<a
								className="text-foreground/80 hover:text-primary transition-colors duration-300"
								onClick={() => setIsMenuOpen(false)}
								key={key}
								href={item.path}>
								{item.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};
