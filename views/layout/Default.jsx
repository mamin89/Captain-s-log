const React = require('react')
const myStyle = {
    color: 'pink',
    backgroundColor: 'white',
};
class DefaultLayOut extends React.Component{
    render(){
        return(
            <html style={myStyle}>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}
module.exports = DefaultLayOut