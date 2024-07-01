// componants are like specific parts for doing specific tasks. Since it become messy to store everything at one place so we use some different componants for doing specific tasks

/*
//functional componants
function Page() {
  return (
    <div>
      <img
        src="https://img.icons8.com/color/512/react-native.png"
        width="40px"
      ></img>
      <h1>Fun Fact About React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
} 

//1st way
// ReactDOM.render(Page(),document.getElementById('root'))

//2nd way
//ReactDOM.render(<Page />, document.getElementById("root"));
*/

//Since it become messy to store everything at one place so we use some different componants for doing specific tasks

function Header() {
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

function MainContent() {
  return (
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  );
}

function Footer() {
  return <p className="footer">copywrite @C all Rights reserved</p>;
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
