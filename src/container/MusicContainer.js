import React, {Component} from 'react';
import MusicList from '../component/MusicList';
import Header from '../component/Header';

class MusicContainer extends Component{
   constructor(props){
       super(props)

       this.state = {
           songs: []
       }
   }

    componentDidMount() {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(data => this.setState({songs: data.feed.entry}))
    }


    render(){
        return(
            <div>
                <Header />
                <MusicList songs = {this.state.songs}/>
            </div>
        )
    }
}

export default MusicContainer
