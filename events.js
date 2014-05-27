//Insert News Feed
var xml;
$( "#eventspage" ).on( "pagecreate", function( event ) {
    $.ajax({
        type: "GET",
        url: "http://fikesmedia.com/_freedom1300/events.xml",
        dataType: "xml",
        success: xmlParser
    });
	
    function xmlParser(data) {
    
    xml = data;

    $('#eload').fadeOut();

    $(xml).find("item").each(function () {
        var etitle = $(this).find("title").text();
        var edate = $(this).find("pubDate").text();
        var edesc = $(this).find("description").text();
        var elink = $(this).find("link").text();

        $("#elist").append('<li><h3 id="etitle">' + etitle + '</h3><p>' + edesc + '</p><p>' + edate + '<br><a href="' + elink + '">Read More</a></p></li>');

        $('#elist').listview('refresh'); 
    });
}

});