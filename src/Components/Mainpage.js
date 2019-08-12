import React, { Component } from 'react';
import getContent from '../Controllers/LanguageController';
import Menu from './Menu';

export default class Mainpage extends Component {
    constructor() {
        super()

        this.state = {
            text: null,
            language: 'da',
            active: ''
        }

        this.changeLanguage = this.changeLanguage.bind(this)
        this.changeContent = this.changeContent.bind(this)
    }

    //change language for entire application.
    changeLanguage () {
        let lang = this.state.language;
        lang = lang === "da" ? "en" : "da";

        this.setState({ language: lang });
        let text = getContent(lang);
        this.setState({ text });
    }

    changeContent(event){
        let active = event.target.value
        this.setState({active})
    }

    componentWillMount(){
        let text = getContent(this.state.language)
        this.setState({text})
    }

    render() {
        let content = <h1>Hello World, this is Lene calling!</h1>

        return (
            <div>
                <Menu 
                    text={this.state.text}
                />
                {content}
            </div>
        )
    }
}