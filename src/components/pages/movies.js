import React from "react";
import axios from "axios";
class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        items: [],
        isLoaded: false,
        error: null
        }
    }
    componentDidMount() {
        axios('http://localhost:4000/movies')
        .then(response => {
        this.setState({items: response.data, isLoaded: true})
        })
        .catch(error => {
        this.setState({
            isLoaded: true,
            error
        })
        })
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Loading...</div>;
        } else {
        return (
            <ul>
            {items.map(item => (
                <li key={item.id}>
                {item.name}
                </li>
            ))}
            </ul>
        );
        }
    }
}

export default Movies;
    
    
    
    
    