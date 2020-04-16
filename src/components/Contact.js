import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Contact extends Component {
    state = {
        beer: []
    }
    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ beer: data })
            });
    }
    showBeer = (id) => {
        console.log(id)
    }
    render() {
        return (<section>{this.state.beer.map(elt => <Link key={elt._id} id={elt._id} to={`/contact/${elt._id}`}> <img
            src={elt.image_url}
        /></Link>)}</section>);
    }
}

export default Contact;