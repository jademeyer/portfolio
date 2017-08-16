var arrayOfPosts = [];

function createPost() {
	var post = prompt("What's bothering you?");
  listOfPosts.unshift(post);
};
  
function listPosts(pArray) {
	var listOfPosts = "";
	for (var i = 0; i < pArray.length; i++) {
  	listOfPosts += i + "<br>";
  return listOfPosts;
