import React, { Component } from 'react';


class FilterInput extends Component {

    state = {
        value: ''
    }

    submit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.value)
    }

    change = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input type="text"
                       value={this.state.value}
                       onChange={this.change} />
                <input type="submit" value="Filter Results"/>
            </form>
        );
    }
}

export default FilterInput;