import React, { Component } from 'react';
class ContactDetails extends Component {

    constructor() {
        super();

        this.state = {
            beerDetail: {}
        }
    }
    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ beerDetail: data })
            });
    }

    render() {
        console.log(this.state.beerDetail.name)
        return (
            <section>{this.state.beerDetail.name}</section>
        );
    }
}

export default ContactDetails;