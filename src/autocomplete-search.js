import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY, POSTER_API } from './constants/api';
import MoviesList from './movies-list';
import SearchDropdown from './search-dropdown';
import { Icon, Button, Input, AutoComplete } from 'antd';
import './App.css';

const Option = AutoComplete.Option;

function onSelect(value) {
  console.log('onSelect', value);
}

class AutocompleteSearch extends Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
  const dataSource = ['12345', '23456', '34567'];
    return(
      <AutoComplete dataSource={dataSource} />
    )
  }
}

export default AutocompleteSearch;