export default function Header() {
    return (
      <div>
        <nav className="nav-items">
          <div className="site-info">
          <img className="nav-img"
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
          ></img>
          <h1>ReactFacts</h1>
          </div>
          <ul className="list-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    );
  }