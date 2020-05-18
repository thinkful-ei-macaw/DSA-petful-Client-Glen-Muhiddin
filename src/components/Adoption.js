import React, { Component } from 'react';
import PetfulContext from './PetfulContext';
import AdoptForm from './AdoptForm';
import Dog from './Dog';
import Cat from './Cat';



export default class Adoption extends Component {

    static contextType = PetfulContext;

    state = {
        currentUser: '',
        // currentCat: this.context.cats,
        userCanAdopt: false,
        interval: null,
    }

    componentWillUnmount = () => {
        clearInterval(this.state.interval);
    };


    addPerson = (person) => {
        this.setState({
            currentUser: person
        })
    }


    getInLine = () => {
        let count = 0;
        const interval = setInterval(() => {
            this.context.onDeletePerson();
            this.context.onRandomAdoption();
            if (this.context.people[1] === this.state.currentUser) {

                setInterval(() => {
                    if (count === 4) {
                        return clearInterval()
                    }
                    this.context.onQueuePerson()
                    count++
                    console.log(count)

                }, 2000);

            }
            this.userReady();
        }, 2000);
        this.setState({
            interval
        })

    }


    userReady = () => {
        if (this.context.people[1] === this.state.currentUser) {
            clearInterval(this.state.interval);
            this.setState({
                userCanAdopt: true
            });
        };

    }

    adoptCat = () => {

        this.context.onDeleteCat();
        this.context.onDeletePerson();
        this.props.history.push({
            pathname: '/success',
            state: this.context.cats
        })

    }

    adoptDog = () => {
        this.context.onDeleteDog();
        this.context.onDeletePerson();
        this.props.history.push({
            pathname: '/success',
            state: this.context.dogs
        })
    }


    render() {
        console.log(this.props.history)
        console.log(this.context.cats)
        return (
            <div>
                <h1>Get Ready to Adopt!</h1>
                <p>The following people are in line for adoption</p>
                <ul>
                    {this.context.people.map(person =>
                        <li key={this.context.people + Math.random()}>
                            {person}
                        </li>
                    )}
                </ul>
                {!this.state.currentUser && (
                    <AdoptForm add={this.addPerson}
                        queueLine={this.getInLine}
                    />
                )}

                {this.state.currentUser && !this.state.userCanAdopt && (
                    <p>
                        Excellent! Please wait in line. When your name appears, you will be able to adopt a pet!
                    </p>
                )}
                {this.state.userCanAdopt && <h2>Your turn!</h2>}
                <Dog adopt={this.state.userCanAdopt}
                    demoAdopt={this.adoptDog}
                />
                <Cat adopt={this.state.userCanAdopt}
                    demoAdopt={this.adoptCat}
                />

            </div>
        )
    }
}
