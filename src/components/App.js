import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { getAllCategories, getPostsbyCategory } from "../actions";
import Posts from "./Posts";
import Post from "./Post";
import AddPost from "./AddPost";
import EditPost from "./EditPost";

class App extends React.Component {
  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {
    const { categories } = this.props;
    const categoriesList = [
      'all',
      ...categories.map(category => {
        return category.name;
      })
    ];

    return (
<React.Fragment>
    <header>
        <h1 className="display-2">Readable 评论页面</h1>
    </header>
    <hr className="side" />
    <main role="main" className="container">
        <div
            className="navbar"
            className="navbar navbar-expand navbar-fixed-top bg-light"
        >
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/newpost">
                        <button
                            type="button"
                            id="new-post"
                            className="btn btn-primary"
                        >
                            Create New Post
                        </button>
                    </Link>
                </div>
                <ul className="nav ml-auto">
                    {categoriesList.map(name => (
                        <li className="nav-item" key={name} as={Link}>
                            <Link
                                to={name === "all" ? "" : `/${name}`}
                                className="nav-link"
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/newpost" component={AddPost} />
            <Route exact path="/edit/:id" component={EditPost} />
            <Route exact path="/:category" component={Posts} />
            <Route exact path="/:category/:id" component={Post} />
        </Switch>
    </main>
</React.Fragment>
    );
  }
}

function mapStateToProps(categories) {
  return categories;
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCategories: () => dispatch(getAllCategories())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
