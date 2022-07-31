
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import AchievementCard from './components/achievementCard';
import { useState } from 'react';

axios.defaults.baseURL = 'http://localhost:8000/';

const App = () => {

  var [achivements, setAchivements] = useState([]);
  var [wasSearchError, setWasSearchError] = useState(false);
  var [searchPending, setSearchPending] = useState(false);

  var onSearchSubmit = async (searchText) => {
    
      setSearchPending(true);
      setWasSearchError(false);

      let params = {}

      if (searchText.match(/^[0-9]{5,}$/) === null){
        params.userName = searchText;
      }else{
        params.userId = searchText;
      }
      
      const response = await axios.get('/getAchievementList', {
          params: params
      }).catch(error => {
          console.log(error);
          setWasSearchError(true);
      })

      setSearchPending(false);
      
      if (response !== undefined && response.data.achievements !== undefined) {
        setAchivements(response.data.achievements);
        
      }
  }

  return (
    <div className="App">
      <h1>Steam achivements lookup</h1>
      <SearchBar onSearchSubmit={onSearchSubmit}></SearchBar>

      {wasSearchError ? (
        <div class="ui secondary inverted red segment">
          <p>Lookup error. User name may be invalid.</p>
        </div>
      ) : null}

      {searchPending ? (
        <div class="ui secondary inverted blue segment">
          <p>Searching...</p>
        </div>
      ) : null}

      <div>
        {
          achivements.map(achivement => (<AchievementCard key={achivement.name} achievement={achivement}></AchievementCard>))
        }
      </div>
    </div>
  );
}

export default App;
