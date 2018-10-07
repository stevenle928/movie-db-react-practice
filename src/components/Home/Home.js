import React, { Component } from 'react';//in this syntax we are importing Component itself
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import './Home.css';

//This Home.js file will be a stateful class component
//This is why we are importing Component by itself
/*
Here's why
*/

class Home extends Component { //if we DIDN'T import { Component } by itself, we have to write React.Component instead. It's preference how you do it
    state = ({
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    })

    componentDidMount() {
        this.setState({ loading: true });
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        this.fetchItems(endpoint);
    }

    loadMoreItems = () => {
        let endpoint = '';
        this.setState({ loading: true });

        if (this.state.searchTerm === '') {
            endpoint = `${API_URL}movie/popular$api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        } else{
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            console.log(result);
            this.setState({
                movies:[...this.state.movies, ...result.results], //This line takes old movie array and appends the new movie results onto it.
                heroImage: this.state.heroImage || result.results[0],
                loading: false,
                currentPage: result.page,
                totalPages: result.total_pages//total_pages variable comes from results you can find in console.log if you have logged it. or check TMDB API page
            })
        })
    }

    render() {
        return (
            <div className="rmdb-home">
            {this.state.heroImage ? //This checks if heroImage (defined in Home's state)
            //if heroImage is not null, meaning there is one then we return it. Otherwise, it will return nothing.
                <div>
                    <HeroImage 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
                        title={this.state.heroImage.original_title}//These are predefined properties from movie db API
                        text={this.state.heroImage.overview}
                    />
                    <SearchBar />
                </div> : null }
                <FourColGrid />
                <Spinner />
                <LoadMoreBtn />
            </div>
        )
    }
}

export default Home;