function Navbar() {
	return (
		<nav className="navbar">
			<a href="/" className="navbar__logo-link"><div className="navbar__logo">Da LADNO! Bar</div></a>
			<ul className="navbar__ul">
				<li className="navbar__li">
					<a href="#" className="navbar__li-link">Кальяны</a>
				</li>
				<li className="navbar__li">
					<a href="#" className="navbar__li-link">Алкоголь</a>
				</li>
				<li className="navbar__li">
					<a href="#" className="navbar__li-link">Закуски</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;