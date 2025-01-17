import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-gray-200 py-10">
            <div className="container mx-auto px-4">
                {/* Main Footer Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h4 className="text-lg  text-green-400 mb-4">
                            BADJO Dibéa Koffi
                        </h4>
                        <p>
                            Ingénieur logiciel passionné par la création de solutions innovantes qui transforment 
                            les idées en réalité.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-lg  text-green-400 mb-4">
                            Navigation
                        </h4>
                        <ul className=" text-gray-400 space-y-2">
                            <li>
                                <a
                                    href="#/formations"
                                    className="hover:text-green-400 transition"
                                >
                                    Formations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#/about"
                                    className="hover:text-green-400 transition"
                                >
                                    À propos de moi
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Me Section */}
                    <div>
                        <h4 className="text-lg  text-green-400 mb-4">
                            Suivez-moi
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <LinkedInIcon className="text-green-400" />
                                <a
                                    href="https://www.linkedin.com/in/badjo-dib%C3%A9-koffi-b108b7175/"
                                    className="hover:text-green-400 transition"
                                >
                                    LinkedIn
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <GitHubIcon className="text-green-400" />
                                <a
                                    href="https://github.com/badjodibe"
                                    className="hover:text-green-400 transition"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-700" />

                {/* Footer Bottom */}
                <div className="text-center">
                    <p className="text-gray-400">
                        &copy; {currentYear} BADJO Dibéa Koffi. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
