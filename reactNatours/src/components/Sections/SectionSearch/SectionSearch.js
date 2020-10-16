import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import SearchbarAsync from "./Searchbar/SearchbarAsync";
import VideoBackground from "./Video-bg";

const SectionSearch = (props) => {
  return (
    <div className="section-stories">
      <VideoBackground></VideoBackground>
      <div className="u-text-center u-margin-bottom-big">
        <h1 className="heading-secondary">React Searchbar</h1>
      </div>
      <div className="row">
        <Searchbar></Searchbar>
          <SearchbarAsync></SearchbarAsync>
      </div>
    </div>
  );
};

export default SectionSearch;
