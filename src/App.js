import Accordian from "./components/accordian";
import "./App.css";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={10} /> */}
      {/* <ImageSlider url={`https://picsum.photos/v2/list`} limit={`10`} /> */}
      <LoadMoreData />
    </div>
  );
}

export default App;
