/*
 * Serve JSON to our AngularJS client
 */

var data = {
  'posts' : [
    {
      'title': 'Lorem Ipsum',
      'text': 'Was immer du auch tust, wen immer du bestichst; sieh mir in die Augen, mich kriegst du nicht.'
    },
    {
      'title': 'Lorem Ipsum',
      'text': 'Was immer du auch tust, wen immer du bestichst; sieh mir in die Augen, mich kriegst du nicht.'
    },
    {
      'title': 'Lorem Ipsum',
      'text': 'Was immer du auch tust, wen immer du bestichst; sieh mir in die Augen, mich kriegst du nicht.'
    },
    {
      'title': 'Lorem Ipsum',
      'text': 'Was immer du auch tust, wen immer du bestichst; sieh mir in die Augen, mich kriegst du nicht.'
    }
  ]
};

// GET
exports.posts = function(req, res){
  var posts = [];
  data.posts.forEach(function(post, i){
    posts.push({
      id: i,
      title: post.title,
      text: post.text
    });
  });
  res.json({ posts: posts });
};

// GET
exports.post = function(req, res) {
  var id = req.params.id;
  if(id >= 0 && id < data.posts.length) {
    res.json({ post: data.posts[id] });
  } else {
    res.json(false);
  }
};

// POST
exports.addPost = function(req, res) {
  data.posts.push(req.body);
  res.json(req.body)
};

// PUT
exports.editPost = function(req, res) {
  var id = req.params.id;

  if(id >= 0 && id < data.posts.length) {
    data.posts[id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
};

// DELETE
exports.deletePost = function(req, res) {
  var id = req.params.id;

  if(id >= 0 && id < data.posts.length) {
    data.posts.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};
