//Create a variable with an array of city abbreviations.
var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD']                                        

// When the page loads,
// loop through the array,
// populate the list with the abbreviations and
// clear the array so not to display multiple copies of the abbreviations.
$('#city-type').ready(function(){
  cities.forEach(function(cityName){
    $('#city-type').append("<option>" + cityName + "</option>")
  })
  cities = []
})

// When the drop down box is clicked
// and the selected value is equal to one of the array variables
// change the background image to that cities image. 
// If not, change to the default image.
$('#city-type').change(function(){
  console.log($('#city-type').val())
  if ($('#city-type').val() === 'NYC') {            
    $('body').css('background-image', 'url(images/nyc.jpg)')
  } else if ($('#city-type').val() === 'SF') {            
      $('body').css('background-image', 'url(images/sf.jpg)')
    } else if ($('#city-type').val() === 'LA') {            
        $('body').css('background-image', 'url(images/la.jpg)')
      } else if ($('#city-type').val() === 'ATX') {            
          $('body').css('background-image', 'url(images/austin.jpg)')
        } else if ($('#city-type').val() === 'SYD') {            
            $('body').css('background-image', 'url(images/sydney.jpg)')
          } else {
            $('body').css('background-image', 'url(images/citipix_skyline.jpg)')
          }
})