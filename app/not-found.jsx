"use client"
import React from "react";
import Bear from "../components/Bear";
// import error from "../images/404_img.png"
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound404() {
	return (
		<div className="pagenotfound_comp">
			<Header name="User Name" />
			{/* <NotFound404 /> */}

			<div className="notfound_comp">
				<div className="notfound_img_div">
					<img
						className="notfound_img_img"
						src="assets/images/404_img.png"
						alt="error"
					/>
				</div>
				<div className="notfound_desc">
					<div className="nox_notfound">
						<Bear spin_eye_animate="spin_animate" spin_eyes="spin_eyes" />
					</div>
					<div className="notfound_desc">
						<div className="notfound_heading_404">404</div>
						<h1 className="notfound_heading">Page Not Found</h1>
						<div className="notfound_cont">
							<div>We looked everywhere for this page.</div>
							<div>Are you sure the website URL is correct</div>
							<div>Get in touch with the site owner</div>
							<Link className="notfound_btn" href="/challenges">
								Go to Challenges
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
