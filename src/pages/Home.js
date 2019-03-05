import React, { Component } from "react";
import images from "../images.json";
import ImageCard from "../components/ImageCard"
import Wrapper from "../components/Wrapper"
import Title from "../components/Title"

class Home extends Component {
    state = {
        images
    }

render () {
    return (
        <Wrapper>
            <Title>Clicky Game!</Title>
            {this.state.images.map(image => (
                <ImageCard
                    id={image.id}
                    key={image.id}
                    name={image.name}
                    image={image.image}
                    />
            ))}
        </Wrapper>
    )
 }
}

export default Home;