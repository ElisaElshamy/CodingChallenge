const getComments = () => {
  const comments = document.getElementById('comments');
  comments.innerHTML = '';
  
  axios.get('http://localhost:3001/comments')
  .then(function (response) {
    comments.innerHTML = generateHTML(response);
  })
  .catch(function (error) {
      comments.innerHTML = generateErrorHTML(error);
  });
}

const generateHTML = (response) => {
    const data = response.data;
    let html = '';
    data.reverse().forEach(comment => {
        html += `<div class="comment">
                    <span class="username">${comment.username}</span>
                    <p class="comment-text">${comment.body}</p>
                </div>`;
    });
    
    return html; 
}

const generateErrorHTML = (error) => {

    return  `<h4>Error Fetching data</h4>
        <h5>Message:</h5>
        <pre>${error.message}</pre>
        <h5>Status:</h5> 
        <pre>${error.response.status} ${error.response.statusText}</pre>
        <h5>Headers:</h5>
        <pre> ${JSON.stringify(error.response.headers, null, '\t')}</pre> 
        <h5>Data:</h5>
        <pre>${JSON.stringify(error.response.data, null, '\t')}</pre>`; 
}

function postComment(e) {
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment-text').value;
    const comments = document.getElementById('comments');
    const success = document.getElementById('success');
    const failed = document.getElementById('failed');
    comments.innerHTML = '';
    success.innerHTML = '';
    failed.innerHTML = '';

    axios.post('http://localhost:3001/comments', {
        body: comment,
        username: username
    })
    .then(function (response) {
        success.innerHTML = 'Comment posted! <3';
        success.style.display = "block";
        getComments();
    })
    .catch(function (error) {
        failed.innerHTML = 'Something went wrong :(';
        failed.style.display = "block";
        comments.innerHTML = generateErrorHTML(error);
    });
  
   e.preventDefault();
}

// This makes sure that getComments() is fired once the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  getComments();
});

document.getElementById('comment-form').addEventListener('submit', postComment);
