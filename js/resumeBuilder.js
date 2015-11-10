$('#main').append("Benjamin Clarke");

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$('#header').append(formattedName);
$('#header').append(formattedRole);