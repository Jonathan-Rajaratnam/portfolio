import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
	className?: string;
	size?: number;
	inline?: boolean;
}

export const ThemeToggle = ({
	className,
	size = 24,
	inline = false,
}: ThemeToggleProps) => {
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

	const baseClasses = "transition-all duration-500 focus:outline-hidden";
	const defaultClasses = inline
		? "p-2 text-foreground z-50"
		: "fixed z-[60] top-5 right-5 rounded-full";

	return (
		<button
			onClick={toggleTheme}
			className={cn(baseClasses, defaultClasses, className)}
			aria-label="Toggle theme">
			<div
				className={`relative transition-transform duration-500`}
				style={{ width: size, height: size }}>
				{isDarkMode ? (
					<Sun
						className={`absolute inset-0 text-yellow-300 ${
							inline ? "" : "animate-spin-slow"
						}`}
						size={size}
					/>
				) : (
					<Moon
						className="absolute inset-0 text-blue-900"
						size={size}
					/>
				)}
			</div>
		</button>
	);
};
