
class aPost extends React.Component {
    render(){
        return (
            React.createElement("tr", {},
                React.createElement("td", {className: "time"}, this.props.posttime),
                React.createElement("td",{className:"postBody"},this.props.postbody)
                )
        )
    }
}

function start() {
    fetch("http://localhost:80/posts").then((response) => response.json())
        .then((data) => {
            posts = data.posts
            console.log(posts)
            let postsElements = new Array(posts.length)
            for (let i = 0; i < posts.length; i++){
                postsElements[i] = React.createElement(aPost, {key: posts[i].time+posts[i].body, posttime: posts[i].time, postbody:posts[i].body})
            }
            const rootElement =
                React.createElement("table",{},
                    React.createElement("tbody", {}, postsElements)
                );
            ReactDOM.render(rootElement, document.getElementById("mainContainer"));
        })
}

