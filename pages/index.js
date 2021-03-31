import React, { Component } from 'react';

import api from './api/unsplash';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Unsplash Search',
      imageSearch: '',
    };
  }

  imageSearchChanged(event) {
    this.setState({
      imageSearch: event.target.value,
    });
  }

  formSubmitted(event) {
    event.preventDefault();

    api.search(this.state.imageSearch);
  }

  render() {
    const { title, imageSearch } = this.state;
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
        <section className="images" />
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
