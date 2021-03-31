import React, { Component } from 'react';

import api from './api/unsplash';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Unsplash Search',
      imageSearch: '',
      loading: false,
      images: [],
    };
  }

  imageSearchChanged(event) {
    this.setState({
      imageSearch: event.target.value,
    });
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      loading: true,
      images: [],
    });

    api.search(this.state.imageSearch).then((images) => {
      this.setState({
        loading: false,
        images,
      });
    });
  }

  render() {
    const { title, imageSearch, loading, images } = this.state;
    return (
      <div className="App">
        <h1>{title}</h1>
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="imageSearch">Image Search</label>
          <input
            className="searchBox"
            type="text"
            id="imageSearch"
            name="imageSearch"
            value={imageSearch}
            onChange={(event) => this.imageSearchChanged(event)}
          />
          <button type="submit">Search</button>
        </form>
        {loading ? (
          <img
            src="img/loading.svg"
            alt="api_loading"
            className="api_loading"
          />
        ) : (
          ''
        )}
        <section className="images">
          {images.map((image) => (
            <>
              <div className="ImageResult">
                <img key={image.id} src={image.urls.regular} alt="" />
                <a
                  href={image.links.html}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="view_link"
                >
                  View on Unsplash
                </a>
                <a
                  href={image.user.links.html}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="user_link"
                >
                  Photo by: {image.user.name}
                </a>
              </div>
            </>
          ))}
        </section>
        <div className="createdby">
          <p>
            created by <a href="https://github.com/equk">equk</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
