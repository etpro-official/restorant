function payment(){

		fetch("https://api.telegram.org/bot6820482086:AAEOuetibDWifOnFt4twgYt0BT0l1wAxqPs/getUpdates")
	.then(res => res.json())
	.then(data=>{

	    var data_geter = data.result.length-1;
		let action  = data.result[data_geter].message.text;
		document.getElementById("body").style.display=action;


	})
}







function open_menu(){
    document.getElementById("menu").style.width="100%";
    document.getElementById("img_card").style.display="none";
    document.getElementById("chf").style.display="none";
}
function close_menu(){
    document.getElementById("menu").style.width="0%";
    document.getElementById("img_card").style.display="block";
    document.getElementById("chf").style.display="block";
}



function send_message(url){
	url=`https://api.telegram.org/bot6820482086:AAEOuetibDWifOnFt4twgYt0BT0l1wAxqPs/getUpdates`
}



