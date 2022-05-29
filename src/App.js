import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Introduction from './Component/Introduction/Introduction';
import Services from './Component/Services/Services';
import SliderBanner from './Component/SliderBanner/SliderBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <SliderBanner />
      <Introduction />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
