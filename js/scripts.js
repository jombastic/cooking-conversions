var liters = function(gallons) {
  return 3.785411784 * gallons;
};

$(function() {
  $("#gallons").keyup(function() {
    var gallons = parseFloat($("#gallons").val());
    var result = liters(gallons).toPrecision(7);
    $("#liters").val(result);
  });
});
