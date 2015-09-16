var BlogList = React.createClass({
  getInitialState: function () {
    return {posts: []}
  },
  componentDidMount: function () {
    $.ajax({
      url: '/posts',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({posts: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/posts', status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    var blogPosts = this.state.posts.map(function (e) {
      return (<BlogPost title={e.title} content={e.body} date={e.date}/>)
    });
    return (
      <div>
        {blogPosts}
      </div>
    )
  }
})


var BlogPost = React.createClass({
  getInitialState: function () {
    return {showPost: false}
  },
  showPost: function () {
    this.state.showPost === false ? this.setState({showPost: true}) : this.setState({showPost: false});
  },
  render: function () {
    var rawMarkup = marked(this.props.content, {sanitize: true});
    return (
      <div className="blog-post">
        <div className="post-heading" onClick={this.showPost}>
          <h2>{this.props.title}</h2>
          <h3>{this.props.date}</h3>
        </div>
        {this.state.showPost ?
        <div dangerouslySetInnerHTML={{__html: rawMarkup}}></div>
        : ''}
      </div>
    )
  }
});

React.render(
  <BlogList />,
  document.getElementById('content')
);
