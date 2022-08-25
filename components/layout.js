import Link from "next/link";


export default function Layout() {


    return (
        <div className='layout'>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/Movies'><a>Movies</a></Link>
            <style jsx>{`
              .layout {
              display: flex;
              flex-direction: column;
              gap: 10px;
              }
              a {
                color: black;

              }
            `}</style>
        </div>
    )
}