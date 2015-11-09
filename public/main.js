var _visible = false;
console.log("loading main.js");
function toggleWidthAndHeightSettings()
{
	console.log("toggling: " + _visible);
	if (_visible)
	{
		$("#wrapper, #layer_1, #layer_1_imgViewer, #layer_2, #layer_2_webViewer").css({
			"width" : "1920px",
			"height" : "1080px"
		});
		_visible = false;
	}
	else
	{
		$("#wrapper, #layer_1, #layer_1_imgViewer, #layer_2, #layer_2_webViewer").css({
			"width" : "100%",
			"height" : "100%"
		});
		_visible = true;
	}
}

console.log("Adding onclick handler");
$("#toggleLink").on("click", toggleWidthAndHeightSettings);