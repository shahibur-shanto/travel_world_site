import Image from "next/image";
import beach from "../../assets/beach.svg";
import wallet from "../../assets/wallet.svg";
import suitcase from "../../assets/suitcase.svg";
const IntroSectionPage = () => {
	return (
		<div className=" bg-sky-50 flex justify-center mt-36 pt-12 pb-32 truncate">
			<div className="flex justify-around w-4/5 lg:w-4/5">
				<div>
					<div className="flex-row items-end justify-content-start">
						<div>
							<Image width={100} height={100} src={beach} alt="" />
						</div>
						<div>
							<div>Top Destinations</div>
							<div>
								<p>Nulla pretium tincidunt felis, nec.</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="flex-row items-end justify-content-start">
						<div>
							<Image width={100} height={100} src={wallet} alt="" />
						</div>
						<div>
							<div>The Best Prices</div>
							<div>
								<p>Sollicitudin mauris lobortis in.</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="flex-row items-end justify-content-start">
						<div>
							<Image width={100} height={100} src={suitcase} alt="" />
						</div>
						<div>
							<div>Amazing Services</div>
							<div>
								<p>Nulla pretium tincidunt felis, nec.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IntroSectionPage;
