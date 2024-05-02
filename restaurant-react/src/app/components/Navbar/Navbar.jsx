// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between">
                <div>
                    {/* Logo a la izquierda */}
                    <Link href="/">
                        <span className="flex items-center text-white">
                            <h1>Logo</h1>
                        </span>
                    </Link>
                </div>
                <div>
                    {/* Enlaces a la derecha */}
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/details">
                                <span className="text-white hover:text-gray-400">Details</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="text-white hover:text-gray-400">Home</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
