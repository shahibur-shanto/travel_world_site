import FooterPage from "@/components/Footer/Footer";
import HomeSearchPage from "@/components/HomeSearch/HomeSearch";
import IntroSectionPage from "@/components/IntroSection/IntroSection";
import NavbarPage from "@/components/Navbar/NavbarPage";
import NewsSectionPage from "@/components/News/News";
import PopularSectionPage from "@/components/PopularSection/PopularSection";
import SloganPage from "@/components/Slogan/Slogan";
import TestimonialPage from "@/components/Testimonial/Testimonial";
import backgroundImage from "../../assets/background.jpg";
import Loading from "../loading";
import ErrorPage from "../error";
import { useDestinationsQuery } from "@/redux/api/destinationApi";

const HomePage = () => {
	const style = {
		// backgroundImage: `url(${backgroundImage.s	rc})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		width: "100vw",
		height: "100vh",
		opacity: 1.5,
	};
	return (
		<div style={style}>
			<h1>HI</h1>
			<h2>Hello</h2>
			{/* <NavbarPage />
			<SloganPage />
			<HomeSearchPage />
			<IntroSectionPage /> */}
			<PopularSectionPage />

			{/* <TestimonialPage />
			<NewsSectionPage />
			<FooterPage /> */}
		</div>
	);
};

export default HomePage;
