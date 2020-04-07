import React, { Component } from 'react';



class About extends Component {
    state = {
        quiz: []
    }
    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=10')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ quiz: data.results })
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
            {this.state.quiz.map((quiz, i) => <p key={i}>{quiz.question}</p>)}
        </section>);
    }
}

export default About;