import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" className="nav-link">Home </Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
        <Link to="/cart" className="nav-link">Cart</Link>
        </li>
        <li className="nav-item">
        <Link to="/products" className="nav-link">Products</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

     );
}
 
export default Navbar;

// class TopBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             number: 0 
//         };
//     }

//     shouldComponentUpdate(nextProps,nextState){
//         console.log(nextState.number);
//         if(nextState.number>=0 && nextState.number <6)
//             return true;
//         else
//             return false
//     }


//     render() {
//         console.log(this.state.number)
//         return (

//             <div>
//                 <h1>{this.state.number}</h1>

//                 <button onClick={() => { this.setState({ number: this.state.number + 1 }) }}>Add</button>

//                 <button onClick={() => { this.setState({ number: this.state.number - 1 }) }}>Minus</button>

//             </div>
//         );
//     }
// }
// export default TopBar;


// class Movie extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             movies: [],
//             loader: true,
//             searchkey: ""

//         }
//     }

//     componentDidMount() {
//         axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
//             .then((res) => {
//                 this.setState({
//                     movies: res.data.Search,// new products
//                     loader: false,
//                 });
//             });
//     }
//     render() {

//         const { movies, loader, searchkey } = this.state;
//         // console.log(movies)
//         var searchMovies = movies.filter((item) => item.Year == searchkey);
//         // console.log(searchkey)

//         console.log(searchMovies)
//         // console.log(movies)
//         return (
//             <div>
//                 <div >
//                     <div className="main-title"><h1 >Movies</h1></div>
//                     <div className="searchbardiv">
//                     <input
//                         id="searchbar"
//                         placeholder="Search"
//                         onChange={(e) => this.setState({ searchkey: e.target.value })}
//                     />
//                     </div>
//                     {/* <button onClick={()=>{

//                     }}>Search</button> */}


//                 </div>

//                 {loader ? (
//                     <h1>Loading...</h1>
//                 ) : (
//                     searchMovies.length > 0 ? searchMovies.map(({ Title, Year, imdbID, Type, Poster }) => (
//                         <div onClick={() => { console.log(Title) }} id="movie">
//                             <h5 id="title">{Title}</h5>
//                             <img src={Poster} width={200} height={350} alt="Movie" />
//                             <h4 id="year">{Year}</h4>
//                         </div>
//                     ))

//                         :
//                         movies.map(({ Title, Year, imdbID, Type, Poster }) => (
//                             <div onClick={() => { console.log(Title) }} id="movie">
//                                 <h5 id="title">{Title}</h5>
//                                 <img src={Poster} width={200} height={350} alt="Movie" />
//                                 <h4 id="year">{Year}</h4>
//                             </div>
//                         ))
//                 )}

//             </div>
//         );
//     }

// }

// export default Movie;


// class Topbar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value_entered: '',
//             searchkey: ''
//         }
//     }

//     shouldComponentUpdate(nextProps,nextState){

//         console.log(this.state.searchkey)
//         console.log(this.state.value_entered)
//         if(nextState.searchkey!=nextState.value_entered)
//         {
//             nextState.value_entered=nextState.searchkey
//             return true;
//         }
            
//         else
//             return false;

//     }
//     render() {

        
//         return(
//             this.state.value_entered == ''?(
//                 <div>
//                     <input
//                         id="searchbar"
//                         placeholder=""
//                         onChange={(e) => this.setState({ searchkey: e.target.value })}
//                     />
//                     <button onClick={()=>this.setState({})}>Submit</button>
//                 </div>
//             ):(
                
//                 <div>
//                     {console.log("Else called")}
//                     <input
//                         id="searchbar"
//                         placeholder=""
//                         onChange={(e) => this.setState({ searchkey: e.target.value })}
//                     />
//                     <button onClick={()=>this.setState({})}>Submit</button>

//                     <h1>{this.state.value_entered}</h1>
//                 </div>
//             )

//         )
//     }

// }

//     export default Topbar;

