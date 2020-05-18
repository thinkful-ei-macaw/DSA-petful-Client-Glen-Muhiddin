import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class AdoptSuccess extends Component {

    render() {
        console.log(this.props.location.state)
        const { imageURL, name } = this.props.location.state
        return (
            <main>
                <h2>Here is your new pet!</h2>
                <p>You have adopted {name}</p>
                <img src={imageURL} alt="a brand new pet!" />
                <Link to="/adoption">Return to adoption page</Link>
            </main>
        )
    }
}


