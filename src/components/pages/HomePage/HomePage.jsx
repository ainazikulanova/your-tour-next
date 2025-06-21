import Header from "./Header";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Feedback from "./Feedback";
import ChooseTour from "./ChooseTour";
export default function HomePage() {
  return (
    <>
      <Header />
      <ChooseTour />
      <Reviews />
      <Feedback />
      <Footer />
    </>
  );
}
