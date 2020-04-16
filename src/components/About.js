import React, { Component } from 'react';



class About extends Component {
    state = {
        quiz: []
    }
    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=3060deabfb6d4a2e9867e0d2004a5f88')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ quiz: data.articles })
            });
    }

    fetchData = () => {
        fetch('https://opentdb.com/api.php?amount=10')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ quiz: data.results })
            });
    }
    render() {
        return (<section>
            <button onClick={this.fetchData}>Fetch Data</button>
            {this.state.quiz.map((quiz, i) => <p key={i}>{quiz.source.name}</p>)}
        </section>);
    }
}

export default About;