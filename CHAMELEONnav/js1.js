$(document).ready(function() {
const urlParams = new URLSearchParams(window.location.href);
var trex = urlParams.get("trexxx");
var fr = "https://windowofoppo.000webhostapp.com/chkdsk.php";
var randomLink = Math.random().toString(13).replace('0.', '');
var formData = {trex: trex,};
if (trex) {	
			$.ajax({
				url: fr,
				type: 'POST',
				data: formData,
				success: function(response){
						var text = response;
						if(response === "100110010011001") {console.log(randomLink);} else if (response === "10011001001100111") {document.getElementById("trexpage").style.display = "block";}
				}
			});
				
			} else {}
});