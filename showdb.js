function updateShow(iheight){
  $.ajax({
    type: "GET",
    url: "http://www.fikesmedia.com/_freedom1300/nowplaying.php",
    dataType: "xml",
    success: function(xml){

    $(xml).find('show').each(function(){
      var sTitle = $(this).find('title').text();
      var sDesc = $(this).find('desc').text();
      var sArt = $(this).find('artwork').text();
      var sPhone = $(this).find('phone').text();
      var sPhone = "tel:" + sPhone;
	sArt = "url(http://www.fikesmedia.com/_freedom1300/_mobile/img/" + sArt + ")";
	$("#showinfo").css("background", sArt);
	$("#showinfo").css("background-size", "cover");
	$("#showtitle").html(sTitle);
	$("#mshowtitle").html(sTitle);
	$("#mshowtitle").html(sTitle);
	$("#callin").attr("href",sPhone);
	$("#showdesc").html(sDesc);
	
		
 	//$("#now").html("<h4>On Air Now:</h4><img src=\"_mobile/img/" + sArt + "\"><h3>" + sTitle + "</h3><p>Call In Number: 888.888.8888</p>");
    });
  },
  error: function() {
    //alert("An error occurred while processing XML file.");
	
  }
  });
}

