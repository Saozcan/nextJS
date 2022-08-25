import axios from "axios";
import MovieCard from "../../components/MovieCard";

export default function Movies({movies}) {

    return (
        <div className='style'>
            Movies
            <div>
                {movies.results.map((element, index) =>
                    <MovieCard movie={element} key={index}/>
                )}
            </div>
            <style jsx>
                {`
                      .style {
                        display: flex;
                        flex-direction: column;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;

                        div {
                          width: 80%;
                          height: 80%;
                          display: flex;
                          flex-wrap: wrap;
                          gap: 10px;

                        }
                      }
                    `}
            </style>
        </div>
    )
}


export async function getStaticProps() {

    const request = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=551b33576c3366ebcd5f453390daac0f&language=en-US&page=1');
    const movies = await request.data;

    return {props: {movies}}
}
