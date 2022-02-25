// import React, { useState } from "react";
// import { connect } from "react-redux";
// import axios from "axios";

// const getOptions = url => ({
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': process.env.REACT_APP_WORDS_API_KEY,
//     'x-rapidapi-host': process.env.REACT_APP_WORDS_HOST
//   },
//   url
// });

//   const initialState = {
//     searches: [{
//       word: "canada",
//       type: "regionOf"
//     }]
//   }
// const WordForm = (props, isFetching) => {

//   const { word, isFetching, error } = props;

//   const [searchTerm, setSearchTerm] = useState('')
//   const [type, setType] = useState('')
//   const [data, setData] = useState({})

//   console.log('searchTerm', searchTerm)
//   console.log('type', type)
//   console.log('data', data)

//   function handleSubmit(e) {
//     e.preventDefault();
//     const url = `https://wordsapiv1.p.rapidapi.com/words/${searchTerm}/${type}`
  
//     axios.request(getOptions(url))
//     .then(function(response) {
//       //set to redux store
//       setData({ 
//           word: response.data.word,
//           results: response.data[type],
//           type,
//         })
//       console.log(response.data);
//     }).catch(function (error) {
//       console.error(error);
//     });
//   }

//   const handleChange = e => setSearchTerm(e.target.value)

//   return (
//     <div className="form-container">
//       <form>
//         <span>Type a Word Here:</span>
//         <input value={searchTerm} onChange={handleChange} />
//         <label htmlFor="type">Choose a word category:</label>
//         <select onChange={e => setType(e.target.value)} name="type" id="type">
//           <option value="also">Also</option>
//           <option value="regionOf">Region Of</option>
//           <option value="memberOf">Member Of</option>
//           <option value="similarTo">Similar To</option>
//         </select>
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//       <div>
//         <span>Last 5 searches</span>
//       </div>
//       <div>{data?.type}</div>
//       <div>
//         {data?.results && data.results.map(item => <div>{item}</div>)}
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = () => {
//   return {
//     word: state.word,
//     isFetching: state.isFetching,
//     error: state.error
//   }
// }

// const mapDispatchToProps = () => {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(WordForm);