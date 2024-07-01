//declarative way
//ReactDOM.render(<h1>Hello From React!</h1>,document.getElementById("root"))

//imperative way (using pure vanilla JS)
// const h1=document.createElement("h1")
// h1.textContent="This is an imperative way to program"
// h1.className="header"
// document.getElementById("root").append(h1);

function MyContent(){
    return (
    <h2>This is composibility means making a big task done in small componants</h2>
    )
}
ReactDOM.render(
    <div>
        <MyContent />
    </div>,
    document.getElementById("root")
)

//JSX - it is like html that can be written and run in JS file. It is neither a string nor a HTML. It comes with the full power of JavaScript. JSX simply returns plaine javascript objects
//like-
const Myname="saran"
const ele= <h1>Hello from JSX, this is {Myname}</h1> //this is JSX
const page=(
    <div>
        {ele}
        <p>we can write HTML code in JS file</p>
    </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
)