import { useTypeWriter } from "../hooks/useTypeWriter";

interface TypeWriterProps {
	words: string[];
	typingSpeed?: number;
	deletingSpeed?: number;
	delayBetweenWords?: number;
	className?: string;
}

export const TypeWriter = ({
	words,
	typingSpeed,
	deletingSpeed,
	delayBetweenWords,
	className,
}: TypeWriterProps) => {
	const text = useTypeWriter(
		words,
		typingSpeed,
		deletingSpeed,
		delayBetweenWords
	);

	return (
		<span className={className}>
			{text}
			<span className="animate-pulse">|</span>
		</span>
	);
};
