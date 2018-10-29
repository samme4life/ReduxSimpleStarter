import React, { Component } from 'react';
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBFm0235aK1H9dGF2h-gxWrkmfZ1zg5HLQ';

//Step 1: Create a new component. This component should produce some HTML
class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({key: API_KEY, term: 'got'},  (videos) => {
            this.setState({videos});
            //this.setState({videos : videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
            </div>);
    }
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));