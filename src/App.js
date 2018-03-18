import React, { Component } from 'react';
import './App.css';
import FetchForm from './components/FetchForm.js'
import ListItem from './components/ListItem'
import FilterForm from './components/FilterForm.js'
import Stats from './components/Stats.js'
import { sortComparator } from './utils.js'

const API_URL = 'https://sandbox-rkrajewski.firebaseio.com/photos.json?orderBy=%22id%22&startAt=0&endAt='

class App extends Component {

  state = {
    fetchedData: [],
    visibleData: [],
    filterFormValue: '',
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

    onChangeFilterForm = (e) => {
    const filterFormValue = e.target.value
    const { fetchedData } = this.state
    const visibleData = fetchedData.filter(item => {
        return item.title.toLowerCase()
          .indexOf(filterFormValue.toLowerCase()) !== -1
      })

    this.setState({
      visibleData,
      filterFormValue,
    })

  }

  render() {
    const { visibleData, filterFormValue } = this.state

    return (
      <div className="App">
        <FetchForm onSubmit={this.fetchData} />
        <FilterForm onChange={this.onChangeFilterForm}
                    value={filterFormValue} />
        <div>
          {visibleData.map(({ id , title, image, rating }) => (
            <ListItem key={id}
                      title={title}
                      image={image}
                      rating={rating} />
          ))}
        </div>

        {!!visibleData.length &&
          <Stats data={visibleData}/>
        }
      </div>
    );
  }
}

export default App;
