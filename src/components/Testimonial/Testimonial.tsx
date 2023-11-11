import testimonial from "../../assets/testimonials.jpg";

const TestimonialPage = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${testimonial.src})`,
				width: "100%",
				height: "70%",
				opacity: 0.8,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<p className="text-white">SIMPLY AMAZING PLACES</p>
			<h1 className="text-white">Testimonials</h1>
		</div>
	);
};

export default TestimonialPage;
