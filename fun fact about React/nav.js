const navbar=(
    <nav>
        <h1>Badminton Smashers</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

//older way of rendering (till react 17)
ReactDOM.render(navbar,document.getElementById("root"))

//newer way (react 18+)
// const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );

// root.render(navbar)