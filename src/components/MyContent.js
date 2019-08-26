import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';

class MyContent extends React.Component {

    constructor(props){
        super(props);
        console.log('HELL: '+JSON.stringify(this.props));
        this.state = {
            compName: this.props.name
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps, this.props='+this.props.name
        +', nextProps='+nextProps.name);

        if(this.props.name !== nextProps.name){ 
            this.setState({
                compName: nextProps.name
            });
        }
    }

    render() {
        let component = '';
        if(this.state.compName === "about"){
            component = (<About />);
        } else if(this.state.compName === "home") {
            component = (<Home />);
        } else if(this.state.compName === "skills"){
            component = (<Skills />);
        }
        
        return(
           <div className="myContent">
                {component}
           </div>
        );
    }
}

export default MyContent;