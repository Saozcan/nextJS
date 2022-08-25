import {useRouter} from "next/router";
import axios from "axios";
import Image from "next/image";


export default function FilmDetay({returnData}) {

    console.log(returnData)


    return <>
        <div className='filmPosters'>
            <div className='cover'
                 style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${returnData.backdrop_path})`}}>
            </div>
            <h3>{returnData.name}</h3>
            <p>{returnData.overview}</p>
            <style jsx>{`
              .filmPosters {
                width: 1200px;
                height: 500px;
                margin: 20px auto;
                position: relative;

                .summary {
                  font-size: 18px;
                  color: #666;
                  line-height: 1.7;
                }

                .cover {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 500px;
                  background-size: cover;
                  opacity: .5;
                  z-index: -1;

                  &::before {
                    content: '';
                    background: linear-gradient(to bottom, transparent, #ddd);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                  }
                }

                h3 {
                  display: flex;
                  justify-content: center;
                  height: 100%;
                  width: 100%;
                }
              }

            `}</style>
        </div>
    </>
}

export async function getServerSideProps({params}) {
    const url = `https://api.themoviedb.org/3/tv/130392?api_key=551b33576c3366ebcd5f453390daac0f&language=en-US`
    const request = await axios.get(url);
    const returnData = await request.data
    return {
        props: {
            returnData
        }
    }
}
