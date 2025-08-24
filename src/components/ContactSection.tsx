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
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Feel free to reach out with any questions or opportunities.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="space-y-8 mt-10">
						<h3 className="text-2xl font-semibold mb-6">
							<span className="text-primary">Contact</span>{" "}
							Information
						</h3>

						{/* Contact Information Items */}
						<div className="space-y-6">
							{/* Email Section */}
							<div className="flex items-center justify-center">
								<div className="flex items-center w-50">
									<div className="w-6 flex justify-center mr-4">
										<Mail className="h-5 w-5 text-primary" />
									</div>
									<a
										href="mailto:joeraj08@gmail.com"
										className="text-muted-foreground hover:text-primary transition-colors duration-300">
										joeraj08@gmail.com
									</a>
								</div>
							</div>

							{/* Phone Section */}
							<div className="flex items-center justify-center">
								<div className="flex items-center w-50">
									<div className="w-6 flex justify-center mr-4">
										<Phone className="h-5 w-5 text-primary" />
									</div>
									<a
										href="tel:+947629364"
										className="text-muted-foreground hover:text-primary transition-colors duration-300">
										076 293 6764
									</a>
								</div>
							</div>

							{/* Location Section */}
							<div className="flex items-center justify-center">
								<div className="flex items-center w-50">
									<div className="w-6 flex justify-center mr-4">
										<MapPin className="h-5 w-5 text-primary" />
									</div>
									<span className="text-muted-foreground">
										Colombo, Sri Lanka
									</span>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="pt-8 text-center mr-4">
							<h4 className="font-medium text-xl mb-4">
								Connect With Me
							</h4>
							<div className="flex space-x-4 justify-center">
								<a
									href="https://www.linkedin.com/in/jonathan-rajaratnam-52323a218/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-primary transition-colors duration-300">
									<Linkedin className="h-5 w-5" />
								</a>
								<a
									href="https://github.com/Jonathan-Rajaratnam"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-primary transition-colors duration-300">
									<Github className="h-5 w-5" />
								</a>
								<a
									href=""
									target="_blank"
									className="text-muted-foreground hover:text-primary transition-colors duration-300">
									<Instagram className="h-5 w-5" />
								</a>
								<a
									href="https://x.com/itzmejohnny8"
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-primary transition-colors duration-300">
									<Twitter className="h-5 w-5" />
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
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
									placeholder="Your message here..."
									rows={3}
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
