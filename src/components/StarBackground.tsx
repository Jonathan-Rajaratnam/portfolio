import { useState, useEffect } from "react";

interface Star {
	id: number;
	size: number;
	x: number;
	y: number;
	opacity: number;
	animationDuration: number;
}

interface Meteor {
	id: number;
	size: number;
	x: number;
	y: number;
	delay: number;
	animationDuration: number;
}

export const StarBackground = () => {
	const [stars, setStars] = useState<Star[]>([]);
	const [meteors, setMeteors] = useState<Meteor[]>([]);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		// Initially set the dark mode state based on the theme
		setIsDarkMode(document.documentElement.classList.contains("dark"));

		// Generate stars and meteors if in dark mode
		if (document.documentElement.classList.contains("dark")) {
			generateStars();
			generateMeteors();
		}

		// Set up mutation observer to watch for theme changes
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (
					mutation.type === "attributes" &&
					mutation.attributeName === "class" &&
					mutation.target === document.documentElement
				) {
					const isDark =
						document.documentElement.classList.contains("dark");
					setIsDarkMode(isDark);

					if (isDark) {
						// Generate stars and meteors when switching to dark mode
						generateStars();
						generateMeteors();
					} else {
						// Clear stars and meteors when switching to light mode
						setStars([]);
						setMeteors([]);
					}
				}
			});
		});

		observer.observe(document.documentElement, { attributes: true });

		const handleResize = () => {
			if (isDarkMode) {
				generateStars();
			}
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			observer.disconnect();
		};
	}, [isDarkMode]);

	const generateStars = () => {
		const noOfStars = Math.floor(
			(window.innerWidth * window.innerHeight) / 10000
		);

		const newStars: Star[] = [];

		for (let i = 0; i < noOfStars; i++) {
			newStars.push({
				id: i,
				size: Math.random() * 3 + 1,
				x: Math.random() * 100, //Position in percentage
				y: Math.random() * 100, //Position in percentage
				opacity: Math.random() * 0.5 + 0.5,
				animationDuration: Math.random() * 4 + 2,
			});
		}
		setStars(newStars);
	};

	const generateMeteors = () => {
		const noOfMeteors = 4;

		const newMeteors: Meteor[] = [];
		for (let i = 0; i < noOfMeteors; i++) {
			newMeteors.push({
				id: i,
				size: Math.random() * 2 + 1,
				x: Math.random() * 100,
				y: Math.random() * 20,
				delay: Math.random() * 15,
				animationDuration: Math.random() * 3 + 3,
			});
		}
		setMeteors(newMeteors);
	};

	if (!isDarkMode) {
		return null;
	}

	return (
		<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
			{stars.map((star) => (
				<div
					key={star.id}
					className="star animate-pulse-suble"
					style={{
						width: star.size + "px",
						height: star.size + "px",
						left: star.x + "%",
						top: star.y + "%",
						opacity: star.opacity,
						animationDuration: star.animationDuration + "s",
					}}
				/>
			))}
			{meteors.map((meteor) => (
				<div
					key={meteor.id}
					className="meteor animate-meteor"
					style={{
						width: meteor.size * 50 + "px",
						height: meteor.size * 2 + "px",
						left: meteor.x + "%",
						top: meteor.y + "%",
						animationDelay: meteor.delay + "s",
						animationDuration: meteor.animationDuration + "s",
					}}
				/>
			))}
		</div>
	);
};
