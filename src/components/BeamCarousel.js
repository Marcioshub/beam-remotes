import React from "react";
import Carousel from "react-material-ui-carousel";
import Paper from "@material-ui/core/Paper";
import hero1 from "../images/beamheroimage2.png";
import hero2 from "../images/beamheroimage3.png";

export default function BeamCarousel() {
  var items = [
    {
      image: hero1,
    },
    {
      image: hero2,
    },
  ];

  function Item(props) {
    return (
      <Paper>
        <img
          src={props.item.image}
          alt="hero"
          style={{ height: "75vh", width: "100%", objectFit: "cover" }}
        />
      </Paper>
    );
  }

  return (
    <Paper>
      <Carousel indicators={false}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Paper>
  );
}
