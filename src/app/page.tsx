import { redirect } from "next/navigation";
import backgroundImage from "../assets/background.jpg";
import NavbarPage from "@/components/Navbar/NavbarPage";
import SloganPage from "@/components/Slogan/Slogan";
import HomeSearchPage from "@/components/HomeSearch/HomeSearch";
import IntroSectionPage from "@/components/IntroSection/IntroSection";
import PopularSectionPage from "@/components/PopularSection/PopularSection";
import TestimonialPage from "@/components/Testimonial/Testimonial";
import NewsSectionPage from "@/components/News/News";
import FooterPage from "@/components/Footer/Footer";

export default function Home() {
	const style = {
		backgroundImage: `url(${backgroundImage.src})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		width: "100vw",
		height: "100vh",
		opacity: 1.5,
	};
	return (
		<div style={style}>
			<NavbarPage />
			<SloganPage />
			<HomeSearchPage />
			<IntroSectionPage />
			<PopularSectionPage />
			<TestimonialPage />
			<NewsSectionPage />
			<FooterPage />
		</div>
	);
}
