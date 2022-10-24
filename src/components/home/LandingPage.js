import React from "react";

import SnowPlower from "../../assets/snowplower.jpg";
import WeatherChange from "../../assets/weatherchange.jpg";

import { SnowTitle, WeatherTitle } from "../../articles/localData";

import { ArticleStyle, MainGrid, NewsGrid } from "./landingPageStyle";

function home() {
  return (
    <MainGrid>
      <aside>Aside</aside>
      <NewsGrid>
        <ArticleStyle>
          <img src={SnowPlower} />
          <h2>{SnowTitle}</h2>
        </ArticleStyle>
        <ArticleStyle>
          <img src={WeatherChange} />
          <h2>{WeatherTitle}</h2>
        </ArticleStyle>
      </NewsGrid>
      <aside>Aside</aside>
    </MainGrid>
  );
}

export default home;
