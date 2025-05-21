import logo from "/src/assets/img/dc-logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt={logo} />
      </div>
      <nav>
        <ul className="nav-links">
          <li>CHARACTERS</li>
          <li className="active">COMICS</li>
          <li>MOVIES</li>
          <li>TV</li>
          <li>GAMES</li>
          <li>COLLECTIBLES</li>
          <li>VIDEOS</li>
          <li>FANS</li>
          <li>NEWS</li>
          <li>SHOP</li>
        </ul>
      </nav>
    </header>
  );
}
