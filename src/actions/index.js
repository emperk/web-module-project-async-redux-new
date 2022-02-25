import axios from 'axios'

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";


const getOptions = url => ({
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_WORDS_API_KEY,
    'x-rapidapi-host': process.env.REACT_APP_WORDS_HOST
  },
  url
});

export const getWordResults = (searchTerm, type) => {
  return (dispatch) => {
      //1. Fetch_Start
      dispatch(fetchStart());
      
      //2. fetch data from api
      const url = `https://wordsapiv1.p.rapidapi.com/words/${searchTerm}/${type}`
  
      axios.request(getOptions(url))
      .then(function(response) {
        console.log(response.data);
        console.log("url", )

        const payload = { 
          word: response.data.word,
          results: response.data[type],
          type,
        }
        dispatch(fetchSuccess(payload))
      }).catch(function (error) {
        fetchFail(error)
        console.error(error);
      });
    }
  }


export const fetchStart = () => {
  return ({ type: FETCH_START });
}

export const fetchSuccess = (searches) => {
  return ({ type: FETCH_SUCCESS, payload:searches });
}

export const fetchFail = (error) => {
  return ({ type: FETCH_FAIL, payload:error })
}

