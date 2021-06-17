import { Link } from 'react-router-dom';


function NavBar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
				</li>
			</ul>

		</nav>
	);
}

export default NavBar;