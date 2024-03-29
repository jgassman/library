import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import { HashRouter, Route } from 'react-router-dom';

import { AppHeader, AppFooter } from './components/AppHeader';
import Books from './components/Books';
import BookDetail from './components/BookDetail';
import Authors from './components/Authors';
import AuthorDetail from './components/AuthorDetail';
import Series from './components/Series';
import SeriesDetail from './components/SeriesDetail';
import Stats from './components/Stats';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
  },
  bookBox: {
    backgroundColor: '#f6f6f6',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppHeader />
      <br />
      <HashRouter>
        <Route path="/books" exact render={() => <Books />} />
        <Route
          path="/books/:book_id"
          exact
          render={(props) => <BookDetail {...props} />}
        />
        <Route path="/authors" exact render={() => <Authors />} />
        <Route
          path="/authors/:author_id"
          exact
          render={(props) => <AuthorDetail {...props} />}
        />
        <Route path="/series" exact render={() => <Series />} />
        <Route
          path="/series/:series_id"
          exact
          render={(props) => <SeriesDetail {...props} />}
        />
        <Route path="/stats" exact render={() => <Stats />} />
      </HashRouter>
      <AppFooter />
    </div>
  );
}

export default App;
