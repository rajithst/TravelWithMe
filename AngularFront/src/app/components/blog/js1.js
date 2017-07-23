

$(document).ready(function() {
  $('.privacy-select').material_select();

  $('.chips-initial').material_chip({
  });
 var tagsArray = [];

  $('.chips').on('chip.add', function (e, chip) {
    // you have the added chip here
   
    tagsArray.push(chip)
    console.log(tagsArray)
  });

  $('.chips').on('chip.delete', function (e, chip) {
    // you have the deleted chip here
    tagsArray.pop(chip)
    console.log(tagsArray)
  });

  $('.chips').on('chip.select', function (e, chip) {
    // you have the selected chip here
  });

  module.exports = tagsArray
})

