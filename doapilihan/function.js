function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function resizeText(multiplier) {
	if (document.getElementById('pText').style.fontSize == "") {
		document.getElementById('pText').style.fontSize = "2.0em";
		}
		document.getElementById('pText').style.fontSize = parseFloat(document.getElementById('pText').style.fontSize) + (multiplier * 0.05) + "em";
	}
	
function resizeText2(multiplier) {
	var paragraphs = document.getElementsByTagName("p");　　　　
	for (var i = 0; i < paragraphs.length; i++) {　　　　
		if (paragraphs[i].style.fontSize == '') {
			paragraphs[i].style.fontSize = "2.0em";
		}
		paragraphs[i].style.fontSize = parseFloat(paragraphs[i].style.fontSize) + (multiplier * 0.05) + "em";
	}
}

var bookmarks = [];
	bookmarks.push({"title":"","url":""});
	
function bookmark(){
	
	var url = window.location.href;
	var title = document.title;
	var title_song = document.getElementsByClassName("title")[0].innerText;
	//alert(title_song);
		
	var index;
	var data = {"title":title,"title_song":title_song,"url":url};
	
	
	bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
	//alert(bookmarks.length);
	
	if(bookmarks !=null){
		for(var i=0;i<bookmarks.length;i++){
			if(bookmarks[i].url === window.location.href){
				index = i;
				break;
			}
			
		}
		if(index > -1){
			console.log("exist");
			alert("Lagu ini sudah di simpan");
		}else{
			bookmarks.push(data);
			localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
			console.log("not exist");
		}
		
	}else{
		bookmarks = [{"title":"","url":""}];
		bookmarks.push(data);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}
	
	console.log(bookmarks);
	//*/
	
}