"use client";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import LoginCard from "../components/LoginCard";
import PreEvent from "../components/PreEvent";

import { eventStart } from "../components/Time";

export default function Login() {
	const [event, setEvent] = useState(false);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const difference = eventStart - now;

			const d = Math.floor(difference / (1000 * 60 * 60 * 24));
			setDays(d);

			const h = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			setHours(h);

			const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			setMinutes(m);

			const s = Math.floor((difference % (1000 * 60)) / 1000);
			setSeconds(s);

			if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
				setEvent(true);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return event ? (
		// <div>
		// 	<LoginCard />
		// 	<Footer />
		// </div>
		<img
			className="notfound_img_img"
			src="assets/images/404_img.png"
			alt="error"
		/>
	) : (
		// <PreEvent days={days} hours={hours} minutes={minutes} seconds={seconds} />
		<img
			className="notfound_img_img"
			src="assets/images/404_img.png"
			alt="error"
		/>
	);
}
