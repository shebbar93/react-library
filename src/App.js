
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Books from './Components/Books'
import AddBook from './Components/AddBook';

function App() {

  return (
    <Router>
      <div className='container'>
        <Header />
        <div className='container-1'>
          <Route path='/addbook' component={AddBook} exact />
          <Route path='/editbook/:id/edit' component={AddBook} exact />
          <Route path='/' component={Books} exact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
