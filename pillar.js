var arrayOfPosts = [];

function createPost(post) {
  arrayOfPosts.unshift(post);
};
  
function listPosts(pArray) {
	var listOfPosts = "";
	for (var i = 0; i < pArray.length; i++) {
  	listOfPosts += i + "<br>";
  return listOfPosts;
