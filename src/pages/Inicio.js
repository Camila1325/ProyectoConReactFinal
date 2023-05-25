import GridBooks from "../components/products/products";
import Slider from "../components/Annoucement/slider";
import NewInfo from "../components/NewInfo/NewInfo";
import Footer from "../components/Footer/footer";

const Inicio = () => {
  return (
    <div>
      <Slider />
      <GridBooks />
      <NewInfo />
      <Footer />
    </div>
  );
};
export default Inicio;
