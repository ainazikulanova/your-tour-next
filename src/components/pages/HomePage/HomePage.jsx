import Header from "./Header";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Feedback from "./Feedback";
import ChooseTour from "./ChooseTour";
import Stories from "./Stories";

export default function HomePage() {
  return (
    <>
      <Header />
      <ChooseTour />
      <Reviews />
      <Stories />
      <Feedback />
      <Footer />
    </>
  );
}
