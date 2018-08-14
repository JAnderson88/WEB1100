let postsJSON = require('../posts.json')

exports.test = (req, res) =>{
  res.render('test', {
    title: "Test",
  })
}

exports.home = (req, res) => {
  const posts = postsJSON.posts
  
  res.render('home', {
    title: "Posts",
    posts: posts
  })
}