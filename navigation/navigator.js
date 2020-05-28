var chapters =
[
	{
		name: "Вступление",
		text: "navigation/chapter1/text.txt",
	},
];

function showChapters()
{
	container.innerHTML = '';
	chapters.forEach(function callback(item, index)
	{
		var node = makeChapter(item);
		container.appendChild(node);
	});
}

function makeChapter(chapter)
{
	var node = document.createElement("div");
	
	loadText(chapter.text, function(text)
	{
		node.innerHTML = chapter.name + "</br>" + text;
	});
	
	return node;
}