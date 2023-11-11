import Image from "next/image";
import news1 from "../../assets/news_1.jpg";
import tarvel from "../../assets/travello.jpg";
import news2 from "../../assets/news_2.jpg";
import news3 from "../../assets/news_3.jpg";

const NewsSectionPage = () => {
	return (
		<div className="grid grid-row-3 grid-flow-col gap-4 my-20 mx-10">
			<div className="col-span-2">
				<div className="flex">
					<div>
						<Image width={600} height={600} alt="" src={news1} />
					</div>
					<div className="mx-10">
						<p>02 JUNE</p>
						<h2>Best tips to travel light</h2>
						<p>LIFESTYLE & TRAVEL</p>
						<p>
							Pellentesque sit amet elementum ccumsan sit amet mattis eget,
							tristique at leo. Vivamus massa.Tempor massa et laoreet.
						</p>
					</div>
				</div>
			</div>
			<div className="col-span-2">
				<div className="flex">
					<div>
						<Image width={600} height={600} alt="" src={news2} />
					</div>
					<div className="mx-10">
						<p>02 JUNE</p>
						<h2>Best tips to travel light</h2>
						<p>LIFESTYLE & TRAVEL</p>
						<p>
							Pellentesque sit amet elementum ccumsan sit amet mattis eget,
							tristique at leo. Vivamus massa.Tempor massa et laoreet.
						</p>
					</div>
				</div>
			</div>
			<div className="col-span-2">
				<div className="flex">
					<div>
						<Image width={600} height={600} alt="" src={news3} />
					</div>
					<div className="mx-10">
						<p>02 JUNE</p>
						<h2>Best tips to travel light</h2>
						<p>LIFESTYLE & TRAVEL</p>
						<p>
							Pellentesque sit amet elementum ccumsan sit amet mattis eget,
							tristique at leo. Vivamus massa.Tempor massa et laoreet.
						</p>
					</div>
				</div>
			</div>
			<div className="row-span-3 mr-10">
				<div style={{ width: "100%", height: "100%", position: "relative" }}>
					<Image
						// width="0"
						// height="0"
						// sizes="100vw 100vh"
						className="w-full h-full"
						alt=""
						src={tarvel}
					/>
				</div>
			</div>
		</div>
	);
};

export default NewsSectionPage;
