import React from 'react';
import { connect } from 'react-redux';
import { restautaApiActions } from '../redux/restaurant-details/restaurant-actions'
import { Restaurants } from '../components/table/restaurantDetailTable';
import { SearchFilter } from '../components/searchFilter/searchFilter';
import { Pagination } from '../components/pagination/pagination';

class RestaurantDetailContainer extends React.Component {     
    constructor(props) {
        super(props);
        this.state = {
          searchFilter: '',
          gridData: [],
          currentPage: 1,
          dataPerPage:10
        };
   
    }
    
    componentDidMount() {
        this.props.setRestaurants();
    }
        
    onChange = (e) => {
        const data = e.target.value;
        this.setState({searchFilter: data});
        if(data === "" || data === undefined) {
            this.setState({gridData: this.props.Restaurants})
        }
    }

    onClickHandler = () => {
        if(this.state.searchFilter) {
            const data = this.state.gridData.filter(row => row.name.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) > -1 ||
            row.city.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) > -1 ||
            row.genre.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) > -1)
            if(data.length > 0) {
                this.setState({gridData: data})
            } else {
                this.setState({gridData: []})
            }
        } 
    }

    paginate = pageNumber => {
        this.setState({currentPage: pageNumber})
    }

    componentWillReceiveProps(nextProps){
        this.setState({ gridData: nextProps.Restaurants })
    }
    render() {
            // Get current data
    const {currentPage, dataPerPage} = this.state;
    const indexOfLastPost = currentPage * dataPerPage;
    const indexOfFirstPost = indexOfLastPost - dataPerPage;
    const currentGridData = this.state.gridData.slice(indexOfFirstPost, indexOfLastPost);
    return(
        <div>
            <SearchFilter onChange={(e) => {this.onChange(e)}} onClickHandler={this.onClickHandler}/>
            {currentGridData.length > 0 ?   <Restaurants Restaurants={currentGridData}/> : <p>No Results Found</p>}
            <Pagination
                dataPerPage={dataPerPage}
                totaldata={this.state.gridData.length}
            paginate={this.paginate}
            currentPage={currentPage}
            />
        </div>
    )
    }
}

export const RestaurentAndSearchContainer = connect(
    state => ({
        Restaurants: state.fetchRestaurantData.Restaurants
    }),
    {
        setRestaurants: restautaApiActions.fetchRestaurantServiceDetails
    }
)(RestaurantDetailContainer);
