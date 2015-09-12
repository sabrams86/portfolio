var PostHeading = React.createClass({
  render: function () {
    return (
      <div className="post-heading">
        <h2>Test Post</h2>
      </div>
    )
  }
});

var BlogPost = React.createClass({
  render: function () {
    return (
      <div className="blog-post">
        <h2>My Post</h2>
        <p>asdfoihd spoihwe poawefih apwoefiwapfoia wefpoiaw efpoiawef owenf pawoieff pawoen awpofnefopnaw fepoinwe fpowineef paoweinf pwoefin wpeofin we</p>
      </div>
    )
  }
});

React.render(
  <PostHeading />,
  document.getElementById('content')
);
