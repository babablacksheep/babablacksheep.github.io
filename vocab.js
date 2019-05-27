var dataString = '[{"Id":0,"Category":"घारातिल माणसे","Word":"बहीण","English Translation":"Sister"},{"Id":1,"Category":"घारातिल माणसे","Word":"काका","English Translation":"Paternal Uncle"},{"Id":2,"Category":"घारातिल माणसे","Word":"काकू","English Translation":"Paternal Uncles Wife"},{"Id":3,"Category":"घारातिल माणसे","Word":"मावशी","English Translation":"Maternal Aunt"},{"Id":4,"Category":"घारातिल माणसे","Word":"भाऊ","English Translation":"Brother"},{"Id":5,"Category":"खेळणी व खेळाची साधने","Word":"गोट्या","English Translation":"Marbles"},{"Id":6,"Category":"खेळणी व खेळाची साधने","Word":"झोपाळा","English Translation":"Swing"},{"Id":7,"Category":"खेळणी व खेळाची साधने","Word":"घसरगुंडी","English Translation":"Slide"},{"Id":8,"Category":"फराळाचे पदार्थ","Word":"खाऊ","English Translation":"Snacks"},{"Id":9,"Category":"फराळाचे पदार्थ","Word":"चिवडा","English Translation":"Chivda"},{"Id":10,"Category":"फराळाचे पदार्थ","Word":"शेव","English Translation":"Sev"},{"Id":11,"Category":"फराळाचे पदार्थ","Word":"चकली","English Translation":"Chakli"},{"Id":12,"Category":"फराळाचे पदार्थ","Word":"आईस्क्रीम","English Translation":"Ice-Cream"},{"Id":13,"Category":"कपडे","Word":"परकर","English Translation":"petticoat"},{"Id":14,"Category":"कपडे","Word":"पोलके","English Translation":"blouse"},{"Id":15,"Category":"कपडे","Word":"साडी","English Translation":"sari"},{"Id":16,"Category":"कपडे","Word":"खिसा","English Translation":"pocket"},{"Id":17,"Category":"प्राणी","Word":"मासा","English Translation":"fish"},{"Id":18,"Category":"प्राणी","Word":"साप","English Translation":"snake"},{"Id":19,"Category":"प्राणी","Word":"सिंह","English Translation":"lion"},{"Id":20,"Category":"प्राणी","Word":"उंदीर","English Translation":"rat"},{"Id":21,"Category":"प्राणी","Word":"शेपूट / शेपटी","English Translation":"tail"},{"Id":22,"Category":"प्राणी","Word":"शिंग","English Translation":"horn"},{"Id":23,"Category":"प्राणी","Word":"सोंड","English Translation":"snout"},{"Id":24,"Category":"पक्षी","Word":"बदक","English Translation":"duck"},{"Id":25,"Category":"पक्षी","Word":"कोंबडा","English Translation":"chicken"},{"Id":26,"Category":"पक्षी","Word":"कबूतर","English Translation":"pigeon"},{"Id":27,"Category":"पक्षी","Word":"बगळा","English Translation":"egret"},{"Id":28,"Category":"पक्षी","Word":"चोच","English Translation":"beak"},{"Id":29,"Category":"पक्षी","Word":"पीस","English Translation":"feather"},{"Id":30,"Category":"फळे","Word":"नारळ","English Translation":"coconut"},{"Id":31,"Category":"फळे","Word":"फणस","English Translation":"jackfruit"},{"Id":32,"Category":"फळे","Word":"अननस","English Translation":"pineapple"},{"Id":33,"Category":"फळे","Word":"कलिंगड","English Translation":"watermelon"},{"Id":34,"Category":"फळे","Word":"पपई","English Translation":"papaya"},{"Id":35,"Category":"फळे","Word":"मोसंब","English Translation":"sweet lemon"},{"Id":36,"Category":"फळे","Word":"सीताफळ","English Translation":"custard apple"},{"Id":37,"Category":"फळे","Word":"बी","English Translation":"seed"},{"Id":38,"Category":"फळे","Word":"साल","English Translation":"skin"},{"Id":39,"Category":"फळे","Word":"रस","English Translation":"juice"},{"Id":40,"Category":"वाहने","Word":"टॅक्सी","English Translation":"taxi"},{"Id":41,"Category":"वाहने","Word":"चाक","English Translation":"wheel"},{"Id":42,"Category":"वाहने","Word":"रास्ता","English Translation":"road"},{"Id":43,"Category":"वाहने","Word":"आकाश","English Translation":"sky"}]'

var data = JSON.parse(dataString);

var categories = []
var categoryWords = {}
for(var i = 0; i < data.length; i++) {
    var obj = data[i];
    categories.push(obj.Category)
    categoryWords[obj.Category] = []
}

for(var i = 0; i < data.length; i++) {
	var obj = data[i];
	categoryWords[obj.Category].push(obj.Word);
}

var uniqueCategories = Array.from(new Set(categories))
function populateWordListForCategory(cat) {
	console.log("Selected element" + cat)
	//$('#words_for_category').on('click','.list-group-item', function() { populateWordListForCategory($(this).attr('word_category'))})
 	
 	var wordList = document.getElementById("words_for_category")
    wordList.innerHTML = ""
    //$('#words_for_category').on('click','.list-group-item', function() { populateWordListForCategory($(this).attr('word_category'))})
    //console.log("Word for this cat " + categoryW)
 	
	for(var i=0;i<categoryWords[cat].length;i++)
	{
		var newWordNode = document.createElement("a")
    	newWordNode.setAttribute("class","list-group-item list-group-item-action")
    	newWordNode.innerHTML = categoryWords[cat][i]
    	newWordNode.setAttribute("href","#")
    	newWordNode.setAttribute("word",categoryWords[i])
    	newWordNode.setAttribute("list_type","word_list")
    	encodedWord = encodeURI(categoryWords[cat][i])
    	newWordNode.setAttribute("href" ,"word_display.html?word=" + encodedWord)
    	wordList.appendChild(newWordNode)
	}
	//console.log(cat)
}


window.addEventListener('load', function() {
    console.log('All assets are loaded')
    console.log(categoryWords)
    //console.log(data)
    var categoryList = document.getElementById("word_categories")
    categoryList.innerHTML = ""
    $('#word_categories').on('click','.list-group-item', function() { populateWordListForCategory($(this).attr('word_category'))})

    for(var i =0 ;i<uniqueCategories.length;i++)
    {
    	/*<li class="list-group-item d-flex justify-content-between align-items-center">First item</li>*/
    	//categoryList.innerHTML += '<a href="#" class="list-group-item list-group-item-action">' + uniqueCategories[i] + '</a>'
    	var newCategoryNode = document.createElement("a")
    	newCategoryNode.setAttribute("class","list-group-item list-group-item-action")
    	newCategoryNode.innerHTML = uniqueCategories[i]
    	newCategoryNode.setAttribute("href","#")
    	newCategoryNode.setAttribute("word_category",uniqueCategories[i])
    	newCategoryNode.setAttribute("list_type","category_list")

    /*	newCategoryNode.addEventListener("click", function() {
    					var catIndex = i
  						populateWordListForCategory(catIndex);
				};)*/

    	categoryList.appendChild(newCategoryNode)
    }

    var wordList = document.getElementById("words_for_category")
    wordList.innerHTML = "" 

})

