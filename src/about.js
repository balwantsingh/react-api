import React from 'react'

class About extends React.Component {

    constructor() {
        super();
        
       
    }

    componentDidMount() {
        //console.warn("component did mount");
        console.warn("props", this.props.name)
    }

    componentDidUpdate() {
        //alert("data is updaed");
        console.warn("props in updated", this.props.name)
    }

    render () {
        console.warn("render");
        return(
            <div className="container">
            <h1 className="text-success display-4 font-weight-bold">About Us</h1>
            <p>Aynsoft is a web design and software development company that specializes in dynamic database driven websites and mobile apps.

We have been developing Web based software solutions since 2002 and since then, we continue to innovate and enable our customers to get the most business value from the latest technologies.</p>
        </div>)
    }
}

export default About;


//WE CAN USE THIS LIFECYCLE METHOD WITH CLASS COMPONENT

// constructor () {
// }

// componentDidMount() {
// }

// componentWillUnmount() {
// }

// componentDidUpdate() {
// }