import React,{Component} from 'react';
import data from '../Shared/Constant/constantdata'

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  goToNextImage = () => {
    this.setState((prevState) => ({
      count: (prevState.count + 1) % this.images.length,
    }));
  };

  goToPreviousImage = () => {
    this.setState((prevState) => ({
      count:
        prevState.count === 0
          ? this.images.length - 1
          : prevState.count - 1,
    }));
  };

  images = [
    data.Aizen,
    data.Goku,
    data.Madara,
    data.Star,
    data.Galaxy,
    data.Tree,
    data.Naruto,
    data.Zoro,
    data.Aurora,
    data.Tanjiro
  ];

  render() {
    return (
      <div> 
      <button onClick={this.goToPreviousImage}>Previous</button>
       <img
          src={this.images[this.state.count]}
          alt={`Image ${this.state.count + 1}`} height="400px" width="400px"
        />
        <button onClick={this.goToNextImage}>Next</button>
      </div>
    );
  }
}

export default ImageCarousel;
