import React, { Component } from 'react';
import './App.css';
import FetchForm from './components/FetchForm'
import ListItem from './components/ListItem'
import FilterInput from './components/FilterInput'
import Stats from './components/Stats'
import { sortComparator } from './utils.js'

const API_URL = 'https://sandbox-rkrajewski.firebaseio.com/photos.json?orderBy=%22id%22&startAt=0&endAt='

class App extends Component {

    state = {
        fetchedData: [],
        visibleData: [],
    }

    fetchData = (numberOfItemsToFetch) => {
        fetch(API_URL + numberOfItemsToFetch)
            .then(response => response.json())
            .then(Object.values)
            .then(fetchedData => fetchedData.sort(sortComparator))
            .then(fetchedData => {
                this.setState({
                    fetchedData,
                    visibleData: fetchedData,
                })
                console.log(fetchedData)
            })
    }

    filter = (filterbyText) => {
        const { fetchedData } = this.state
        const visibleData = fetchedData.filter(item => {
            return item.title.toLowerCase()
                .indexOf(filterbyText.toLowerCase()) !== -1
        });
        console.log(visibleData)
        this.setState({
            visibleData
        })
    }

    render() {
        const { visibleData } = this.state

        return (
            <div className="App">
                <FetchForm onSubmit={this.fetchData} />
                {this.state.fetchedData.length > 0 &&
                <FilterInput onSubmit={this.filter} />}
                <div>
                    {visibleData.map(({ id , title, image, rating }) => (
                        <ListItem key={id}
                                  title={title}
                                  image={image}
                                  rating={rating} />
                    ))}
                </div>

                {visibleData.length > 0 && <Stats data={visibleData} />}

            </div>
        );
    }
}

export default App;