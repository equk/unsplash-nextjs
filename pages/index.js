import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Unsplash Search</h1>
        <form>
          <label htmlFor="searchTerm">Image Search</label>
          <input
            className="searchBox"
            type="text"
            id="searchTerm"
            name="searchTerm"
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
