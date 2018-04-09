import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import {fetchAllCategories, fetchPostsByCat, fetchAllPosts} from '../actions'

import Modal from 'react-modal'
import Loading from 'react-loading'

import Cat from './Cat'
import Posts from './Posts'
import NewPost from './NewPost'
import Post from './Post'

class App extends React.Component {

  render() {
    return (<div>
        <Cat/>
      </div>)
  }
}

export default App;
//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
