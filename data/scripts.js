var id=document.getElementById('cur_id').innerHTML
var did;

function update_timer()
{
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
	if (ajax.readyState == 4 && ajax.status == 200)
            document.getElementById('timer').innerHTML = ajax.responseText;
    }
    ajax.open("GET", "/app.sh?route=timer", true);
    ajax.send();
}

function reload_player()
{
    location.reload()
}

function update_id()
{
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
	if (ajax.readyState == 4 && ajax.status == 200) {
	    did = ajax.responseText.replaceAll("\n", "")
	    if (did != id) {
		reload_player();
	    }
	}
    }
    ajax.open("GET", "/app.sh?route=current_id", true);
    ajax.send();
}

setInterval(function(){ update_timer(); update_id(); }, 5000);

document.getElementById('ytinput').addEventListener('change', function (evt) {
    try {
        document.getElementById('ytinput').value=this.value.replace(/.*?watch\?v=(.*)?/i, '$1').replace(/&.*/,'');
    } catch {

    }
});