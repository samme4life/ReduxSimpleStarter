import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = {term: 'Hello'};
    }

    render() {
        return (
            <div className="search-bar">
            <input
                value={this.state.term}
                onChange={ event => this.setState({term: event.target.value})} />
                <br />
                Value of the input: {this.state.term}
            </div>

        );
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;