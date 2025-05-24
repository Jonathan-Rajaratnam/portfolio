import React, { useState } from "react";
import {
	Github,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Send,
	Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/useToast";

export const ContactSection = () => {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setTimeout(() => {
			toast({
				title: "Message Sent",
				description:
					"Thank you for reaching out! I'll get back to you soon.",
			});
			setIsSubmitting(false);
		}, 1500);
	};

	return (
		<section id="contact" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Get In <span className="text-primary ">Touch</span>
				</h2>
				<p className="text-centered text-muted-foreground mb-12 max-w-2xl mx-auto"></p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<h3 className="text-2xl font-semibold mb-6">
							Contact Information
						</h3>

						{/* Email Section */}
						<div className="space-y-6">
							<div className="flex items-center space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Mail className="h-6 w-6 text-primary" />
								</div>
								{/* Center align the content */}
								<div className="font-medium flex-grow text-center">
									<h4>Email</h4>
									<a
										href="mailto:joeraj08@gmail.com"
										className="text-muted-foreground hover:text-primary transition-colors duration-300">
										joeraj08@gmail.com
									</a>
								</div>
								{/* Add an invisible element to balance the layout */}
								<div className="w-[52px] flex-shrink-0"></div>
							</div>
						</div>

						<div className="space-y-6 justify-center">
							<div className="flex items-center space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Phone className="h-6 w-6 text-primary" />
								</div>
								{/* Center align the content */}
								<div className="font-medium flex-grow text-center">
									<h4>Phone</h4>
									<a
										href="tel:+947629364"
										className="text-muted-foreground hover:text-primary transition-colors duration-300">
										076 293 6764
									</a>
								</div>
								{/* Add an invisible element to balance the layout */}
								<div className="w-[52px] flex-shrink-0"></div>
							</div>
						</div>

						<div className="space-y-6 justify-center">
							<div className="flex items-center space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<MapPin className="h-6 w-6 text-primary" />
								</div>
								{/* Center align the content */}
								<div className="font-medium flex-grow text-center">
									<h4>Location</h4>
									<span className="text-muted-foreground">
										Colombo, Sri Lanka
									</span>
								</div>
								{/* Add an invisible element to balance the layout */}
								<div className="w-[52px] flex-shrink-0"></div>
							</div>
						</div>

						<div className="pt-8">
							<h4 className="font-medium mb-4">
								Connect With Me
							</h4>
							<div className="flex space-x-4 justify-center">
								<a href="" target="_blank">
									<Linkedin />
								</a>
								<a href="" target="_blank">
									<Github />
								</a>
								<a href="" target="_blank">
									<Instagram />
								</a>
								<a href="" target="_blank">
									<Twitter />
								</a>
							</div>
						</div>
					</div>

					<div className="bg-card p-8 rounded-lg shadow-xs">
						<h3 className="text-2xl font-semibold mb-6">
							Send a Message
						</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2 ">
									Name{" "}
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
									placeholder="Jonathan Rajaratnam"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2 ">
									Email{" "}
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
									placeholder="joeraj08@gmail.com"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2 ">
									Message{" "}
								</label>
								<textarea
									id="message"
									name="message"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
									placeholder="Your message here..."
									rows={2}
								/>
							</div>
							<button
								type="submit"
								disabled={isSubmitting}
								className={cn(
									"cosmic-button w-full flex items-center justify-center gap-2"
								)}>
								<Send size={16} />
								{isSubmitting ? "Sending..." : "Send Message"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
