var dataString = '[{"Id":0,"Category":"घारातिल माणसे","Word":"बहीण","English Translation":"Sister"},{"Id":1,"Category":"घारातिल माणसे","Word":"काका","English Translation":"Paternal Uncle"},{"Id":2,"Category":"घारातिल माणसे","Word":"काकू","English Translation":"Paternal Uncles Wife"},{"Id":3,"Category":"घारातिल माणसे","Word":"मावशी","English Translation":"Maternal Aunt"},{"Id":4,"Category":"घारातिल माणसे","Word":"भाऊ","English Translation":"Brother"},{"Id":5,"Category":"खेळणी व खेळाची साधने","Word":"गोट्या","English Translation":"Marbles"},{"Id":6,"Category":"खेळणी व खेळाची साधने","Word":"झोपाळा","English Translation":"Swing"},{"Id":7,"Category":"खेळणी व खेळाची साधने","Word":"घसरगुंडी","English Translation":"Slide"},{"Id":8,"Category":"फराळाचे पदार्थ","Word":"खाऊ","English Translation":"Snacks"},{"Id":9,"Category":"फराळाचे पदार्थ","Word":"चिवडा","English Translation":"Chivda"},{"Id":10,"Category":"फराळाचे पदार्थ","Word":"शेव","English Translation":"Sev"},{"Id":11,"Category":"फराळाचे पदार्थ","Word":"चकली","English Translation":"Chakli"},{"Id":12,"Category":"फराळाचे पदार्थ","Word":"आईस्क्रीम","English Translation":"Ice-Cream"},{"Id":13,"Category":"कपडे","Word":"परकर","English Translation":"petticoat"},{"Id":14,"Category":"कपडे","Word":"पोलके","English Translation":"blouse"},{"Id":15,"Category":"कपडे","Word":"साडी","English Translation":"sari"},{"Id":16,"Category":"कपडे","Word":"खिसा","English Translation":"pocket"},{"Id":17,"Category":"प्राणी","Word":"मासा","English Translation":"fish"},{"Id":18,"Category":"प्राणी","Word":"साप","English Translation":"snake"},{"Id":19,"Category":"प्राणी","Word":"सिंह","English Translation":"lion"},{"Id":20,"Category":"प्राणी","Word":"उंदीर","English Translation":"rat"},{"Id":21,"Category":"प्राणी","Word":"शेपूट / शेपटी","English Translation":"tail"},{"Id":22,"Category":"प्राणी","Word":"शिंग","English Translation":"horn"},{"Id":23,"Category":"प्राणी","Word":"सोंड","English Translation":"snout"},{"Id":24,"Category":"पक्षी","Word":"बदक","English Translation":"duck"},{"Id":25,"Category":"पक्षी","Word":"कोंबडा","English Translation":"chicken"},{"Id":26,"Category":"पक्षी","Word":"कबूतर","English Translation":"pigeon"},{"Id":27,"Category":"पक्षी","Word":"बगळा","English Translation":"egret"},{"Id":28,"Category":"पक्षी","Word":"चोच","English Translation":"beak"},{"Id":29,"Category":"पक्षी","Word":"पीस","English Translation":"feather"},{"Id":30,"Category":"फळे","Word":"नारळ","English Translation":"coconut"},{"Id":31,"Category":"फळे","Word":"फणस","English Translation":"jackfruit"},{"Id":32,"Category":"फळे","Word":"अननस","English Translation":"pineapple"},{"Id":33,"Category":"फळे","Word":"कलिंगड","English Translation":"watermelon"},{"Id":34,"Category":"फळे","Word":"पपई","English Translation":"papaya"},{"Id":35,"Category":"फळे","Word":"मोसंब","English Translation":"sweet lemon"},{"Id":36,"Category":"फळे","Word":"सीताफळ","English Translation":"custard apple"},{"Id":37,"Category":"फळे","Word":"बी","English Translation":"seed"},{"Id":38,"Category":"फळे","Word":"साल","English Translation":"skin"},{"Id":39,"Category":"फळे","Word":"रस","English Translation":"juice"},{"Id":40,"Category":"वाहने","Word":"टॅक्सी","English Translation":"taxi"},{"Id":41,"Category":"वाहने","Word":"चाक","English Translation":"wheel"},{"Id":42,"Category":"वाहने","Word":"रास्ता","English Translation":"road"},{"Id":43,"Category":"वाहने","Word":"आकाश","English Translation":"sky"}]'
var data = JSON.parse(dataString);

var words = []
var categoryWords = {}
for(var i = 0; i < data.length; i++) {
    var obj = data[i];
    words[data[i].Word] = data[i]
}

function playAudio() {

	var playBackSpeed = parseFloat($('input[name=playback_speed]:checked').val())
	console.log("playback toggle " +playBackSpeed)

	audio_player = document.getElementById("audio_player")
	console.log(audio_player)
	audio_player.load()
	audio_player.defaultPlaybackRate = playBackSpeed
	audio_player.playbackRate = playBackSpeed
	audio_player.play()

}


window.addEventListener('load', function() {
	
	params={};
	location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){params[k]=v})
	wordParam = decodeURI(params['word'])
	console.log(wordParam)
	console.log(words[wordParam])

	var marathiWord = document.getElementById("marathi_word")
	var englishWord = document.getElementById("english_word")
	marathiWord.innerHTML = words[wordParam]['Word']
	englishWord.innerHTML = words[wordParam]['English Translation']

	var audioSource = document.getElementById("audio_player").getElementsByTagName('source')[0]
	audioSource.setAttribute('src','audio/' + (words[wordParam]['Id']+1) + ".mp3")
	var playButton = document.getElementById("play_button").addEventListener('click',playAudio)



	//Images
	var allImageNodes = document.getElementsByClassName('img-thumbnail')
	for(i =0;i<allImageNodes.length;i++)
	{
		imageName = "images_resized/" + words[wordParam]['Id']+ "_" +  words[wordParam]['English Translation'] + i + ".jpeg"
		allImageNodes[i].setAttribute('src',imageName)
	}



})