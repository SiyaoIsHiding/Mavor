
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
    nextPosts()
}

var currentPostsInd = 0
function nextPosts(){
    fetch("http://localhost:80/posts").then((response) => response.json())
        .then((data) => {
            posts = data.posts
            let len = Math.min(5, posts.length-currentPostsInd)
            let postsElements = new Array(len)

            for (let i = currentPostsInd; i < currentPostsInd+len; i++){
                postsElements[i] = React.createElement(aPost, {key: posts[i].time+posts[i].body, posttime: posts[i].time, postbody:posts[i].body})
            }
            const rootElement =
                React.createElement("table",{},
                    React.createElement("tbody", {}, postsElements)
                );
            ReactDOM.render(rootElement, document.getElementById("mainContainer"));
            currentPostsInd += len
            console.log(currentPostsInd)
            console.log(posts.length)
            if (currentPostsInd == posts.length) {
                let btt = document.getElementById("nextButton")
                btt.style.display = 'none'
            }
        })
}

function previousPosts(){
    fetch("http://localhost:80/posts").then((response) => response.json())
        .then((data) => {
            posts = data.posts
            let len = 5
            let postsElements = new Array(len)

            for (let i = currentPostsInd-len; i < currentPostsInd; i++){
                postsElements[i] = React.createElement(aPost, {key: posts[i].time+posts[i].body, posttime: posts[i].time, postbody:posts[i].body})
            }
            const rootElement =
                React.createElement("table",{},
                    React.createElement("tbody", {}, postsElements)
                );
            ReactDOM.render(rootElement, document.getElementById("mainContainer"));
            currentPostsInd -= len
            console.log(currentPostsInd)
            console.log(posts.length)
            if (currentPostsInd <= len) {
                let btt = document.getElementById("previousButton")
                btt.style.display = 'none'
            }
        })
}
// TODO: refresh previousButton and nextButton