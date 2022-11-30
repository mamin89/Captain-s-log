
const React = require("react");

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>New log</h1>
                <nav>
                    <a href="/log">logs Page</a>
                </nav><br />
                <form action="/log" method="POST">
                    Name:  <input type="text" name="name" /><br />
                    log:  <input type="text" name="log" /><br /><br /><br />
                    <input type="submit" value="Create log"></input>
                </form>
            </div>
        )
    }
}

module.exports = New