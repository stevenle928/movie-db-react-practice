import React, {Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

//this is a control component
//when user types something in this component 
//we want to have full control of input field
class SearchBar extends Component{
    state = {
        value: ''
    }

    timeout = null;

    doSearch = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout); //we need this so there won't be a search everytime user types something
        
        /*
        for this segment of code, after clearing out our timeout variable
        we use our callback function from props and send in value we search for
        the value is in our state as 'value'

        The following number, 500, it gives us half a second before the search function
        fires.
        */
        this.timeout = setTimeout( () => {
            this.props.callback(this.state.value)
        }, 500);
    }

    render(){
        return(
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
                    <input
                        type="text"
                        className="rmdb-searchbar-input"
                        placeholder="Search"
                        onChange={this.doSearch}//call back funciton we will create called "doSearch"
                        value={this.state.value}//grab value from state
                    />
                </div>
                
            </div>
        )
    }
}

export default SearchBar;