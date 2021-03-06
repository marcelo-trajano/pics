import React from "react";
import unsplashAPI from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { imgs: [] };

  onSearchSubmit = async (term) => {
    const res = await unsplashAPI.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ imgs: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui list">
          <ImageList list={this.state.imgs} />
        </div>
      </div>
    );
  }
}

export default App;
