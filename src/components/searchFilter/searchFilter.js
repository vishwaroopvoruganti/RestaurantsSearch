import React from 'react';

export class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event);
    }

    handleKeyDown(event) {
        if(event.key === "Enter"){
            this.props.onClickHandler(event);
        }
    }

    render() {
        return(
            <div>
            <h1 className="mainHeading" > RESTAURANTS </h1>     
            <div>
                <input type="text" id="txtFilter" onChange={ this.handleChange} onKeyDown={this.handleKeyDown}/>
                <button id="txtFilterSubmit"  onClick={(e) => this.props.onClickHandler(e)}> Search </button>
            </div>
            </div>
        )
    }
}