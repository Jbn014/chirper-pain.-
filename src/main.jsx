import Chirp from './chirp.jsx'
import React, { Component }  from 'react';

class Feed extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: ' ',
            placeholder: 'Write Chirp Here',
            chirp: ' ',
        }

    }
    render() {
            return (<div>
                <Chirp />
            </div>
            )
        }




    }




export default Feed
