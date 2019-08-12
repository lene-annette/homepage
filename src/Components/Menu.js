import React, {Component} from 'react';

export default class Menu extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        let text = this.props.text.menu
        return(
            <div>
                <ul>
                    <li>{text.start}</li>
                    <li>{text.education}</li>
                    <li>{text.experience}</li>
                    <li>{text.hobbies}</li>
                    <li>{text.contact}</li>
                </ul>
            </div>
        );
    }
}