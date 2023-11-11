import React from "react";
import footer from "../../assets/footer_1.jpg";
import sign from "../../assets/sign.svg";
import around from "../../assets/around.svg";
import trekking from "../../assets/trekking.svg";
import "./styles.css";
import Image from "next/image";

const FooterPage = () => {
	return (
		<div
			className="relative"
			style={{
				backgroundImage: `url(${footer.src})`,
				width: "100vw",
				height: "100vh",
				opacity: 1,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<div>
				<h1 className="text-white">
					Subscribe to our newsletter to get the latest trends & news
				</h1>
				<p className="text-white">Join our database NOW!</p>

				<input
					className="input-style"
					placeholder="Name"
					style={{
						width: "300px",
						height: "50px",
						marginRight: "20px",
						marginLeft: "20px",
						background: "rgba(255,255,255,0.5)",
					}}
				/>
				<input
					className="input-style"
					placeholder="Email"
					style={{
						width: "600px",
						height: "50px",
						background: "rgba(255,255,255,0.5)",
						marginRight: "20px",
					}}
				/>
				<button
					style={{
						width: "300px",
						color: "white",
						height: "50px",
						background: "rgba(255,255,255,0.5)",
					}}
				>
					Subscribe
				</button>
			</div>
			<div className="flex justify-around my-10">
				<div>
					<Image src={sign} width={100} height={100} alt="" />
					<h2 className="text-white">GIVE US A CALL</h2>
					<p className="text-white">Office Landline: +44 5567 32 664 567</p>
					<p className="text-white">Mobile: +44 5567 89 3322 332</p>
				</div>
				<div>
					<Image src={trekking} width={100} height={100} alt="" />
					<h2 className="text-white">GIVE US A CALL</h2>
					<p className="text-white">Office Landline: +44 5567 32 664 567</p>
					<p className="text-white">Mobile: +44 5567 89 3322 332</p>
				</div>
				<div>
					<Image src={around} width={100} height={100} alt="" />
					<h2 className="text-white">GIVE US A CALL</h2>
					<p className="text-white">Office Landline: +44 5567 32 664 567</p>
					<p className="text-white">Mobile: +44 5567 89 3322 332</p>
				</div>
			</div>
			<p className="text-white absolute bottom-0 left-0 right-0 text-center">
				Copyright ©2023 All rights reserved
			</p>
		</div>
	);
};

export default FooterPage;
