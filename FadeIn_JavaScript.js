document.getElementById('add-to-list').onclick = function() {
  var list = document.getElementById('list');
  var newLI = document.createElement('li');
  newLI.innerHTML = 'A new item';
  list.appendChild(newLI);
  setTimeout(function() {
    newLI.className = newLI.className + " show";
  }, 10);
}
li {
  list-style: none;
  background: #d1703c;
  color: #fff;
  height: 0;
  line-height: 2em;
  margin: 0;
  padding: 0 0.5em;
  overflow: hidden;
  width: 10em;
}

li.show {
  height: 2em;
  margin: 2px 0;
}
.fade li {
  transition: all 0.4s ease-out;
  opacity: 0;
  height: 2em;
}
.fade li.show {
  opacity: 1;
}
