import React, { Component } from 'react';
import * as _ from 'lodash';

export class Restaurants extends Component{

    constructor(props) {
        super(props);
        this.state = {
            // finalRests: null, 
            stateFilter: '',
            genreFilter: '',
            txtFiter: '',
            txtFilterActive: false,
            nameSort: -1
        };

        this.keyDownTxtFilter = this.keyDownTxtFilter.bind(this);
    }

    filterAndSort(){
        let newRests = [...this.props.Restaurants];

        // Apply state filter
        if(this.state.stateFilter.trim()){
            newRests = newRests.filter( rest => {
                return rest.state.toUpperCase().includes(this.state.stateFilter.trim().toUpperCase());
            });            
        }

        // Genre filter
        if(this.state.genreFilter.trim()){
            newRests = newRests.filter( rest => {
                return rest.genre.toUpperCase().includes(this.state.genreFilter.trim().toUpperCase());
            });
        }

        // Apply Text filter
        if(this.state.txtFilterActive){
            newRests = newRests.filter( rest => {
                return (
                    rest.name.toUpperCase().includes(this.state.txtFiter.trim().toUpperCase())
                    || rest.state.toUpperCase().includes(this.state.txtFiter.trim().toUpperCase())
                    || rest.genre.toUpperCase().includes(this.state.txtFiter.trim().toUpperCase())
                );
            });
            this.setState({txtFilterActive: false});
        }


        // Apply genre
        if(this.state)

        // sort by Name
        newRests.sort(this.sortByName(this.state.nameSort));

        // text filter empty

        return newRests;
    }

    sortByName(order){ // order for asc: -1, dsc: 1, none 0
        return (ra,rb) => {
            let nameA = ra.name.toUpperCase();
            let nameB = rb.name.toUpperCase();

            if(nameA < nameB)
                return 1*order
            if(nameA > nameB)
                return -1*order
            return 0
        }
    }
    
    keyDownTxtFilter(event){
        if(event.key === 'Enter'){
            this.setState({txtFilterActive: true});
        }
    }

    render (){
        console.log("searchFilter",this.state.searchFilter)
        return(
        <div className="Restaurants">
            { this.props.Restaurants && <table className="app-table" >
                <thead>
                    <tr>
                        <th>
                            Name 
                        </th>
                        <th>City</th>
                        <th>
                            State <br></br>
                            <input type="text" id="stateFilter" value={this.state.stateFilter} onChange={e=>this.setState({stateFilter: e.target.value})} />
                        </th>
                        <th>Phone</th>
                        <th>
                            Genres<br></br>
                            <input type="text" id="genreFilter" value={this.state.genreFilter} onChange={e=>this.setState({genreFilter: e.target.value})} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.Restaurants && this.filterAndSort().map( (rest,index) => (
                        <tr key={rest.id}>
                            <td>{rest.name}</td>
                            <td>{rest.city}</td>
                            <td>{rest.state}</td>
                            <td>{rest.telephone}</td>
                            <td>{rest.genre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
        )  
    };
}
