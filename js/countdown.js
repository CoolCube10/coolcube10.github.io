
$(function() {
  var currentDate = new Date();
  var goalDate = new Date("Aug 24, 2020 00:00:00").getTime();
  $('.time').countdown(goalDate.valueOf(), function(event)
	{
    $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span.'+event.type).html(event.value);
        break;
      case "finished":
        $this.fadeTo('slow', .5);
        break;
    }
  });
});
