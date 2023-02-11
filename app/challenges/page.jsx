"use client"

import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroAnimate from "../../components/HeroAnimate";
import Main from "../../components/Main";
// import { useAuth } from '../contexts/AuthContext';

export default function Challenges() {
	// const { currentUser } = useAuth()
	return (
		<>
			<HeroAnimate title="NEXHunt" />
			<Main />
		</>
	);
}
