import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function ChallengeLayout({ children }) {
    return (
			<div>
				<Header name="User Name" />
				{children}
				<Footer />
			</div>
		);
}
