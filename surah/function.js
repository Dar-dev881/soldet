var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 

function pauseAudio() { 
    x.pause(); 
}


var x = document.getElementById("myAudio"); 

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};


    function chngimg() {
        var img = document.getElementById('play').src;
        if (img.indexOf('play.png')!=-1) {
            document.getElementById('play').src  = 'images/stop.png';
        }
         else {
           document.getElementById('play').src = 'images/play.png';
       }

    }



function myArti() {
    var x = document.getElementsByClassName("arti");
    var i;
    for (i = 0; i < x.length; i++) {

		if (x[i].style.display === "none") {
	        x[i].style.display = "block";
	    } else {
	        x[i].style.display = "none";
	    }

    }
}


function myBacaan() {
    var x = document.getElementsByClassName("bacaan");
    var i;
    for (i = 0; i < x.length; i++) {

		if (x[i].style.display === "none") {
	        x[i].style.display = "block";
	    } else {
	        x[i].style.display = "none";
	    }

    }
}

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
	if (document.getElementsByClassName('ayat').style.fontSize == "") {
		document.getElementsByClassName('ayat').style.fontSize = "2.0em";
		}
		document.getElementsByClassName('ayat').style.fontSize = parseFloat(document.getElementsByClassName('arabic').style.fontSize) + (multiplier * 0.05) + "em";
	}
	
function resizeText2(multiplier) {
	var paragraphs = document.getElementsByClassName("ayat");　　　　
	for (var i = 0; i < paragraphs.length; i++) {　　　　
		if (paragraphs[i].style.fontSize == '') {
			paragraphs[i].style.fontSize = "28px";
		}
		paragraphs[i].style.fontSize = parseFloat(paragraphs[i].style.fontSize) + (multiplier * 1) + "px";
	}
}


function resizeText3(multiplier) {
	var paragraphs = document.getElementsByClassName("arti");　　　　
	for (var i = 0; i < paragraphs.length; i++) {　　　　
		if (paragraphs[i].style.fontSize == '') {
			paragraphs[i].style.fontSize = "20px";
		}
		paragraphs[i].style.fontSize = parseFloat(paragraphs[i].style.fontSize) + (multiplier * 1) + "px";
	}
}


function resizeText4(multiplier) {
	var paragraphs = document.getElementsByClassName("bacaan");　　　　
	for (var i = 0; i < paragraphs.length; i++) {　　　　
		if (paragraphs[i].style.fontSize == '') {
			paragraphs[i].style.fontSize = "18px";
		}
		paragraphs[i].style.fontSize = parseFloat(paragraphs[i].style.fontSize) + (multiplier * 1) + "px";
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



