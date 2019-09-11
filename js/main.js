document.addEventListener("visibilitychange", function() {
	var s = document.visibilityState + " at " + new Date().toLocaleTimeString();
	console.log(s);
	var node = document.createElement('p');
	var text = document.createTextNode(s);
	node.appendChild(text);
	document.getElementById('content').appendChild(node);
});
