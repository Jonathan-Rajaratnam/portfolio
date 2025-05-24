import { useState, useEffect } from "react";

export const useTypeWriter = (
	words: string[],
	typingSpeed = 80,
	deletingSpeed = 70,
	delayBetweenWords = 1500
) => {
	const [displayText, setDisplayText] = useState("");
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		if (!words || words.length === 0) return;

		let timeout: ReturnType<typeof setTimeout>;
		const currentWord = words[currentWordIndex];

		if (isDeleting) {
			if (displayText === "") {
				setIsDeleting(false);
				setCurrentWordIndex((prev) => (prev + 1) % words.length);
			} else {
				timeout = setTimeout(() => {
					setDisplayText(
						currentWord.substring(0, displayText.length - 1)
					);
				}, deletingSpeed);
			}
		} else {
			if (displayText === currentWord) {
				timeout = setTimeout(() => {
					setIsDeleting(true);
				}, delayBetweenWords);
			} else {
				timeout = setTimeout(() => {
					setDisplayText(
						currentWord.substring(0, displayText.length + 1)
					);
				}, typingSpeed);
			}
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [
		displayText,
		isDeleting,
		currentWordIndex,
		typingSpeed,
		deletingSpeed,
		delayBetweenWords,
		words,
	]);

	return displayText;
};
