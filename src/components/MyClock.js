import React from 'react';

class MyClock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            time: new Date().toLocaleString()
        };
    }

    componentDidMount() {
        // setup interval function to update time every second
        // If you don't use something in render(), it shouldn't be in the state. Hence used this here
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    componentWillUnmount() {
        // clear interval function when component is unmounted to clean memory
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <p className="my-clock">
                {this.state.time}
            </p>
        );
    }
}

export default MyClock;