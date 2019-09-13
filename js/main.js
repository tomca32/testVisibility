document.addEventListener("visibilitychange", function() {
	var s = document.visibilityState + " at " + new Date().toLocaleTimeString();
	console.log(s);
	var node = document.createElement('p');
	var text = document.createTextNode(s);
	node.appendChild(text);
	document.getElementById('content').appendChild(node);
	if (document.visibilityState === 'hidden') {
		saveToStorage(s);
		fetchVisibilityChange();
	}
});

window.addEventListener('beforeunload', function(e) {
	console.log('BEFORE UNLOAD FIRED');
	saveToStorage(new Date().toLocaleTimeString());
	fetchUnload();
});


function fetchVisibilityChange() {
	fetch('/visibility_change_fetch', {
      method: 'POST',
      keepalive: true,
      mode: 'same-origin',
      body: JSON.stringify({
      	number: 42
      }),
    });
}

function fetchUnload() {
	fetch('/unload_fetch', {
      method: 'POST',
      keepalive: true,
      mode: 'same-origin',
      body: JSON.stringify({
      	number: 42
      }),
    });
}

function saveToStorage(s) {
	localStorage.setItem('time', s);
}
