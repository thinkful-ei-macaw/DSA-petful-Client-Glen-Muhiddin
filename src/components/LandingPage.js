import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <main>
                    <header>
                        <h1>Welcome to GlenM Pet Adoption Page</h1>
                    </header>
                    <p>
                    The GlenM is the place for pet adoptions. 
                    We have a large selection of cats and dogs at our GlenM Campus. 
                    Our animals are spayed-neutered, microchipped and given age-appropriate vaccines.
                    </p>
                    <Link to="/adoption">
                        <button type="button">Enter site</button>
                    </Link>
                </main>
            </div>
        )
    }
}
