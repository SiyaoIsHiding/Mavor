
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

var currentPagePostsNum = 0
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
            currentPagePostsNum = len
            refreshButtons()
        })
}

function previousPosts(){
    fetch("http://localhost:80/posts").then((response) => response.json())
        .then((data) => {
            posts = data.posts
            let len = 5
            let postsElements = new Array(len)

            for (let i = currentPostsInd-currentPagePostsNum-len; i < currentPostsInd-currentPagePostsNum; i++){
                postsElements[i] = React.createElement(aPost, {key: posts[i].time+posts[i].body, posttime: posts[i].time, postbody:posts[i].body})
            }
            const rootElement =
                React.createElement("table",{},
                    React.createElement("tbody", {}, postsElements)
                );
            ReactDOM.render(rootElement, document.getElementById("mainContainer"));
            currentPostsInd -= currentPagePostsNum
            currentPagePostsNum = len
            refreshButtons()
        })
}

function refreshButtons(){
    let nbtt = document.getElementById("nextButton")
    if (currentPostsInd == posts.length) {
        nbtt.style.display ='none'
    }else{
        nbtt.style.display = 'inline'
    }
    let pbtt= document.getElementById("previousButton")
    if (currentPostsInd <= 5) {
        pbtt.style.display = 'none'
    }else{
        pbtt.style.display = 'inline'
    }
}