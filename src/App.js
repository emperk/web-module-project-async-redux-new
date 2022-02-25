import React, { useState } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getWordResults } from './actions';
// import Results from './components/Results'


function App({ 
  dispatch, 
  searches=[], 
  error, 
  isFetching
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [type, setType] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getWordResults(searchTerm, type))
  }

  function handleChange(e) {
    setSearchTerm(e.target.value)
  }

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
   
    return (
      <>
        <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="spin" />
        <h2>Fetching results for ya!</h2>
      </>
  )}

  return (
    <div className="App">
      <div className="Header">
        <h1>The World of Words</h1>
        <p>Get selected information on random words I guess</p>
      </div>
      <form>
        <span>Type a Word Here:</span>
        <input value={searchTerm} onChange={handleChange} />
        <label htmlFor="type">Choose a word category:</label>
        <select onChange={e => setType(e.target.value)} name="type" id="type">
          <option value="also">Also</option>
          <option value="regionOf">Region Of</option>
          <option value="memberOf">Member Of</option>
          <option value="similarTo">Similar To</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {/* <Results searchest={searches} /> */}

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searches: state.searches,
    isFetching: state.isFetching,
    error: state.error
  };
}

export default connect(mapStateToProps)(App);
