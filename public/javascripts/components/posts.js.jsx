var BlogPost = React.createClass({
  getInitialState: function () {
    return {showPost: false}
  },
  showPost: function () {
    this.state.showPost === false ? this.setState({showPost: true}) : this.setState({showPost: false});
  },
  render: function () {
    return (
      <div className="blog-post">
        <div className="post-heading" onClick={this.showPost}>
          <h2>Test Post</h2>
        </div>
        {this.state.showPost ?
        <p>asdfoihd spoihwe poawefih apwoefiwapfoia wefpoiaw efpoiawef owenf pawoieff pawoen awpofnefopnaw fepoinwe fpowineef paoweinf pwoefin wpeofin we</p>
        : ''}
      </div>
    )
  }
});

React.render(
  <BlogPost />,
  document.getElementById('content')
);
