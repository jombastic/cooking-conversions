var liters = function(gallons) {
  return 3.785411784 * gallons;
};

var kilograms = function(pounds) {
  return pounds * 0.45;
};

var centimeters = function(inches) {
  return inches * 2.54;
}

$(function() {
  $("#gallons").keyup(function() {
    var gallons = parseFloat($("#gallons").val());
    var result = liters(gallons).toPrecision(7);
    $("#liters").val(result);
  });

  $("#pounds").keyup(function() {
    var pounds = parseFloat($("#pounds").val());
    var result = kilograms(pounds);
    $("#kilograms").val(result);
  });

  $("#inches").keyup(function() {
    var inches = parseFloat($("#inches").val());
    var result = centimeters(inches);
    $("#centimeters").val(result);
  });
});
