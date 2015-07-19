var clndr = {};

$( function() {

  // PARDON ME while I do a little magic to keep these events relevant for the rest of time...
  var currentMonth = moment().format('YYYY-MM');
  var nextMonth    = moment().add('month', 1).format('YYYY-MM');

  var events = [
    { date: currentMonth + '-' + '10', title: '10' + ' - ' + 'One Time Pickup - Completed', location: 'Hiranandani, Kharghar' },
    { date: currentMonth + '-' + '10', title: '10' + ' - ' + 'Weekly Pickup - Completed', location: 'Hiranandani, Kharghar' },
    { date: currentMonth + '-' + '19', title: '19' + ' - ' + 'Weekly Pickup - Scheduled', location: 'Jalvaayu, Kharghar' },
    { date: currentMonth + '-' + '23', title: '23' + ' - ' + 'Monthly Pickup - Scheduled', location: 'Haware Splendor, Kharghar' },
    { date: nextMonth + '-' + '07',    title: '07' + ' - ' + 'Small Cat Photo Session', location: 'Center for Cat Photography' }
  ];

  clndr = $('#full-clndr').clndr({
    template: $('#full-clndr-template').html(),
    events: events,
    forceSixRows: true
  });
  
  clndr = $('#full-clndr-sm').clndr({
    template: $('#full-clndr-sm-template').html(),
    events: events,
    forceSixRows: true
  });
  /*
  $('#mini-clndr').clndr({
    template: $('#mini-clndr-template').html(),
    events: events,
    clickEvents: {
      click: function(target) {
        if(target.events.length) {
          var daysContainer = $('#mini-clndr').find('.days-container');
          daysContainer.toggleClass('show-events', true);
          $('#mini-clndr').find('.x-button').click( function() {
            daysContainer.toggleClass('show-events', false);
          });
        }
      }
    },
    adjacentDaysChangeMonth: true,
    forceSixRows: true
  });

  $('#clndr-3').clndr({
    template: $('#clndr-3-template').html(),
    events: events,
    showAdjacentMonths: false
  });

  // $('#clndr-4').clndr({
  //   template: $('#clndr-4-template').html(),
  //   events: events,
  //   lengthOfTime: {
  //     days: 7,
  //     interval: 7
  //   }
  // });
  */
});