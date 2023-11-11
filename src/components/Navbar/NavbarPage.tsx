"use client";
import Image from "next/image";
import logo from "../../assets/travel_logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { Row, Space, Spin } from "antd";
import { authKey } from "@/constants/storageKey";

const NavbarPage = () => {
	const [isUserMenuOpen, setUserMenuOpen] = useState(false);
	const userLoggedIn = isLoggedIn();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const toggleUserMenu = () => {
		setUserMenuOpen(!isUserMenuOpen);
	};
	useEffect(() => {
		setIsLoading(true);
	}, [router, isLoading, userLoggedIn]);

	const logOut = () => {
		removeUserInfo(authKey);
		router.push("/");
	};

	if (!isLoading) {
		return (
			<Row
				justify="center"
				align="middle"
				style={{
					height: "100vh",
				}}
			>
				<Space>
					<Spin tip="Loading" size="large"></Spin>
				</Space>
			</Row>
		);
	}

	return (
		<div>
			<nav
				className="bg-sky-800/50"
				// style={{
				// 	background: "rgba(24,24,24,0.6)",
				// 	zIndex: 10,
				// }}
			>
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								type="button"
								className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="absolute -inset-0.5"></span>
								<span className="sr-only">Open main menu</span>

								<svg
									className="block h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
								<svg
									className="hidden h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex flex-shrink-0 items-center">
								<Image
									width={500}
									height={400}
									className="h-8 w-auto"
									src={logo}
									alt="Your Company"
								/>
							</div>
							<div className="hidden sm:ml-6 sm:block">
								<div className="flex space-x-4">
									{userLoggedIn && (
										<Link
											href="/super_admin"
											className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 text-lg font-medium"
											aria-current="page"
										>
											Dashboard
										</Link>
									)}
									<Link
										href="#"
										className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 text-lg font-medium"
									>
										Home
									</Link>
									<Link
										href="/about_us"
										className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 text-lg font-medium"
									>
										About Us
									</Link>
									<Link
										href="/services"
										className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 text-lg font-medium"
									>
										Services
									</Link>
									<Link
										href="/news"
										className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 text-lg font-medium"
									>
										News
									</Link>
									<Link
										href="/contact"
										className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 text-lg font-medium"
									>
										Contact
									</Link>
									{!userLoggedIn && (
										<Link
											href="/login"
											className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 text-lg font-medium"
										>
											Login
										</Link>
									)}
									{userLoggedIn && (
										<Link
											onClick={logOut}
											href="/"
											className=" text-white hover:bg-gray-700 rounded-md px-3 py-2 text-lg font-medium"
										>
											Log out
										</Link>
									)}
								</div>
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<div className="relative ml-3">
								<div>
									<button
										type="button"
										className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
										id="user-menu-button"
										aria-expanded="false"
										aria-haspopup="true"
										onClick={toggleUserMenu}
									>
										<span className="absolute -inset-1.5"></span>
										<span className="sr-only">Open user menu</span>
										<Image
											width={500}
											height={400}
											className="h-8 w-8 rounded-full"
											src={logo}
											alt=""
										/>
									</button>
								</div>
								{isUserMenuOpen && (
									<div
										className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="user-menu-button"
									>
										<Link
											href="#"
											className="block px-4 py-2 text-sm text-gray-700"
											role="menuitem"
											id="user-menu-item-0"
										>
											Your Profile
										</Link>
										<Link
											href="#"
											className="block px-4 py-2 text-sm text-gray-700"
											role="menuitem"
											id="user-menu-item-1"
										>
											Settings
										</Link>
										<Link
											href="#"
											className="block px-4 py-2 text-sm text-gray-700"
											role="menuitem"
											id="user-menu-item-2"
										>
											Sign out
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* <div className="sm:hidden" id="mobile-menu">
					<div className="space-y-1 px-2 pb-3 pt-2">
						<Link
							href="#"
							className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
							aria-current="page"
						>
							Dashboard
						</Link>
						<Link
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
						>
							Team
						</Link>
						<Link
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
						>
							Projects
						</Link>
						<Link
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
						>
							Calendar
						</Link>
					</div>
				</div> */}
			</nav>
		</div>
	);
};

export default NavbarPage;
