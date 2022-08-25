import Image from "next/image";
import Link from "next/link";

const MovieCard = ({movie}) => {

    const img = {
        opacity: 0.5,
    }

    const onClick = (e) => {
        console.log(movie.name)
    }

    return (<>
            <div className='movieCard' onClick={onClick}>
                <Link href={`/Movies/${movie.id}`}>
                    <a>
                        <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}></img>
                        <h2>{movie.name}</h2>
                    </a>
                </Link>
                <style jsx>{`
                  .movieCard {
                    width: calc(25% - 10px);
                    height: 400px;
                    position: relative;
                    background: rgb(2, 0, 36);
                    background: linear-gradient(135deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);

                    h2 {
                      position: absolute;
                      bottom: 0;
                      color: bisque;
                    }

                    img {
                      width: 100%;
                      height: 100%;
                      transition: opacity 1s;

                      &:hover {
                        background-color: black;
                        opacity: 0.5;
                      }
                    }


                  }
                `}</style>
            </div>
        </>)
}

export default MovieCard