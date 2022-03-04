// import React from "react";
// import axios from "axios";

// const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

// class Movies extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         items: [],
//         isLoaded: false,
//         error: null
//         }
//     }
//     componentDidMount() {
//         axios('http://localhost:4000/movies')
//         .then(response => {
//             console.log(response);
//         this.setState({items: response.data, isLoaded: true})
//         })
//         .catch(error => {
//         this.setState({
//             isLoaded: true,
//             error
//         })
//         })
//     }
//     render() {
//         const { error, isLoaded, items } = this.state;
//         if (error) {
//         return <div>Error: {error.message}</div>;
//         } else if (!isLoaded) {
//         return <div>Loading...</div>;
//         } else {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     {items.map((movie) =>(
//                         <div>
//                             <img src={getImage(movie.poster_path)}/>
//                             <p>{movie.original_title}</p>
//                         </div>
//                     ))}
//                 </header>
//             </div>   
//         );
//         }
//     }
// }

// export default Movies;
    
import React, { Button, useEffect, useState } from "react";
import axios from "axios";
import "./movie.css";

const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function App() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  const getUpcoming = api.get("movie/upcoming", { params: { api_key } });

  useEffect(() => {
    getUpcoming.then((res) => {
      setData(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="grid">
          {data.map((movie) => (
            <div className="item">
              <img src={getImage(movie.poster_path)} />
              <p>{movie.original_title}</p>
            </div>
          ))}
        </div>
      </header>
    </div>

  );
}

export default App;
    
    
    