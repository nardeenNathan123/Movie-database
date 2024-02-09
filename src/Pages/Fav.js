
// import { useState } from "react";
// import MovieDetails from "./MovieDetails";
// function Fav(){
//     const { movieid } = useParams();  
//     const [movieInfo, setMovieInfo] = useState({});

//     useEffect(() => {
//         axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=86d95abed199237571d3f60c37a2d91b`)
//             .then((res) => {
//                 setMovieInfo(res.data);  
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, [movieid]);
//     return(
//         <>
//             <h3 className="my-4">Release Date: {movieInfo.release_date}</h3>

//         </>
//     )

// }
// export default Fav();