import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyBFm0235aK1H9dGF2h-gxWrkmfZ1zg5HLQ';

//Step 1: Create a new component. This component should produce some HTML
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('got');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term},  (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]});
            //this.setState({videos : videos});
        });
    }

    render() {
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch }/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>);
    }
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
