import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		const theme =
			localStorage.getItem("theme") ||
			(window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light");

		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			document.body.setAttribute("data-theme-mode", "dark");
			setIsDarkMode(true);
		}
		if (theme === "light") {
			document.documentElement.classList.remove("dark");
			document.body.setAttribute("data-theme-mode", "light");
			setIsDarkMode(false);
		}
	}, []);

	const toggleTheme = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);

		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setTimeout(() => {
				setIsDarkMode(false);
				setIsTransitioning(false);
			}, 350);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setTimeout(() => {
				setIsDarkMode(true);
				setIsTransitioning(false);
			}, 350);
		}
	};

	if (!isMounted) return null;

	return (
		<button
			onClick={toggleTheme}
			className={cn(
				"fixed max-sm:hidden top-5 right-5 z-50 rounded-full transition-all duration-500",
				"focus:outlin-hidden"
			)}>
			<div className="relative w-6 h-6 transition-transform duration-500">
				{isDarkMode ? (
					<Sun className="absolute inset-0 h-6 w-6 text-yellow-300 animate-spin-slow" />
				) : (
					<Moon className="absolute inset-0 h-6 w-6 text-blue-900" />
				)}
			</div>
		</button>
	);
};
