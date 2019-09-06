const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = [
"var1",
"var2",
"var3",
"var4",
"var5",
"var6",
"speech"
]

function getFormValues () {
	let obj = {};
	fields.forEach(function(field) {
		obj[field] = $("input[name=" + field + "]")[0].value 
	});
	return obj;
}

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  .getJSON(dataURL, handleData);
  $("form").hide();
}

function handleData(data) {
	let message = "";

	let obj = getFormValues();

	data["text"].forEach(function(item) {
		for (key in obj) {
			item = item.replace("{" + key + "}", obj[key]);
		}
		message = message + item + "<br>";
	});
	
	$("div#result").html(message);
	
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
