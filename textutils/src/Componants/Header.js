export default function Header() {
    return (
      <div>
        <nav className="nav-items">
          <img className="nav-img"
            src="https://img.icons8.com/color/512/react-native.png"
          ></img>
          <ul className="list-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <h1>Fun Fact About React</h1>
      </div>
    );
  }