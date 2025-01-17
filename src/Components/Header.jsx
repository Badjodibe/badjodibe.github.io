import { useState, useEffect } from "react";

const clickFunction = (url) => {
    window.open(url, "_self");
};

const BlogMenu = () => {
    return (
        <div className="absolute top-full left-0 w-48 bg-white shadow-md rounded-lg mt-2 p-4 z-50">
            <div className="mb-4">
                <h3
                    className="text-lg font-bold text-gray-800 cursor-pointer hover:text-green-600"
                    onClick={() => clickFunction("#/posts/developers")}
                >
                    Pour les développeurs
                </h3>
                <p className="text-sm text-gray-600">
                    Articles pour rester à jour et apprendre.
                </p>
            </div>
            <div>
                <h3
                    className="text-lg font-bold text-gray-800 cursor-pointer hover:text-green-600"
                    onClick={() => clickFunction("#/posts/company")}
                >
                    Pour les entreprises
                </h3>
                <p className="text-sm text-gray-600">
                    Découvrez comment tirer profit de la technologie.
                </p>
            </div>
        </div>
    );
};

export default function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible);
    const toggleMobileMenu = () => setIsMobileMenuVisible(!isMobileMenuVisible);

    // Fermer les menus lorsque l'on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".menu") && !event.target.closest(".mobile-menu")) {
                setIsMenuVisible(false);
                setIsMobileMenuVisible(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <header className="bg-white shadow-md  z-50">
            {/* Desktop & Tablet Navigation */}
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8">
                    <a
                        href="#/"
                        className="text-gray-800 hover:text-green-600 font-medium"
                    >
                        Accueil
                    </a>
                    <a
                        href="#/formations"
                        className="text-gray-800 hover:text-green-600 font-medium"
                    >
                        Formations
                    </a>
                    <div className="relative menu">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-green-600 font-medium"
                        >
                            Ressources
                        </button>
                        {isMenuVisible && <BlogMenu />}
                    </div>
                    <a
                        href="#/about"
                        className="text-gray-800 hover:text-green-600 font-medium"
                    >
                        À propos de moi
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-gray-800 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuVisible && (
                <div className="md:hidden bg-white shadow-md p-4 space-y-4 mobile-menu">
                    <a
                        href="#/"
                        className="block text-gray-800 hover:text-green-600 font-medium"
                    >
                        Accueil
                    </a>
                    <a
                        href="#/formations"
                        className="block text-gray-800 hover:text-green-600 font-medium"
                    >
                        Formations
                    </a>
                    <div className="relative">
                        <button
                            onClick={toggleMenu}
                            className="block text-gray-800 hover:text-green-600 font-medium"
                        >
                            Ressources
                        </button>
                        {isMenuVisible && <BlogMenu />}
                    </div>
                    <a
                        href="#/about"
                        className="block text-gray-800 hover:text-green-600 font-medium"
                    >
                        À propos de moi
                    </a>
                </div>
            )}
        </header>
    );
}
