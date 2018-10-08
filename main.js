var main = document.createElement('main');
var pageBody = document.getElementsByTagName('body')[0];
var scriptTag = document.getElementsByTagName('script')[0];
pageBody.insertBefore(main, scriptTag);

var header = document.createElement('h1');
main.appendChild(header);

var unorderedList = document.createElement('ul');
main.appendChild(unorderedList);

var info = document.createElement('li');
unorderedList.appendChild(info);

var headerText = document.createTextNode('This is the header text!');
header.appendChild(headerText);

var listItemText = document.createTextNode('This is the list item!');
info.appendChild(listItemText);

header.classList.add('blue');

main.classList.add('text-center');

var link = document.createElement('a');
var linkListItem = document.createElement('li');
link.append('linkListItem');
linkListItem.append('unorderedList');
