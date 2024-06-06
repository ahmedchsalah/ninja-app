import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <Image src='/ninja.png' alt='logo' width={103} height={94}/>
            </div>
            <Link href='/'> Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/ninjas'>Ninja Listing</Link>
        </nav>
    )
}
export default Navbar
