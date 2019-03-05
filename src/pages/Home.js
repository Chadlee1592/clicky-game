import React, { Component } from "react";
import image from "../images.json";
import ImageCard from "../components/ImageCard"
import Wrapper from "../components/Wrapper"
import Title from "../components/Title"

const handleRandomize = image => {
    for (let i = 0; i < image.length -1; i++) {
        const e = i + Math.floor(Math.random() * (image.length - i));

        const imageTwo = image[e];
        image[e] = image[i];
        image[i] = imageTwo;
    }        
    return image;
};

let imageClicked = [];

class Home extends Component {
    state = {
        score: 0,
        highScore: 0,
        image: image,
        randomImage: image
    };

    radomImage = handleRandomize(image);

    pickImage = id => {
        if(imageClicked.indexOf(id) === -1) {
            imageClicked.push(id);
            this.setState({
                score: this.state.score + 1,
            });
        if (this.state.score >= this.state.highScore) {
            this.setState({
                highScore: this.state.score + 1
            })
        }    
        this.setState({
            randomImage: handleRandomize(image)
        });
        } else {
            this.setState({
                score: 0,
                randomImage: handleRandomize(image)
            });
            alert("You Lose!");
            imageClicked = [];
        }
        console.log(imageClicked)
    };


    render () {
        return (
            <Wrapper>
                <Title
                score={this.state.score}
                highScore={this.state.highScore}    
                >Clicky Game!</Title>
                {this.state.image.map(image => (
                    <ImageCard
                        id={image.id}
                        key={image.id}
                        name={image.name}
                        image={image.image}
                        pickImage={this.pickImage}
                        />
                ))}
            </Wrapper>
        )
    }
}

export default Home;