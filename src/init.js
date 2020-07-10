$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    var lineup =
    $('body').append(dancer.$node);
    window.dancers.push(dancer)
  });

  $('.lineup').on('click', function() {
    var height = $("body").height();
    var width = $("body").width();
    var leftpad = 0;
    var numDancers = window.dancers.length;
    var spacing = width/numDancers;
    for (let dancer of window.dancers) {
      dancer.lineUp(height/2, leftpad);
      leftpad += spacing;
    }
  });
});

