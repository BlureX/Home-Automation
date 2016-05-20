$(function(){
   //Your code

var resizeTime = 100;     // total duration of the resize effect, 0 is instant
var resizeDelay = 100;    // time to wait before checking the window size again
                          // the shorter the time, the more reactive it will be.
                          // short or 0 times could cause problems with old browsers.
    $(document).ready(
    function()
    {
        $('img').mapster({
          fillColor: 'FFF269',
        fillOpacity: 0.5,
        mapKey: 'Room',
        scaleMap: true,
        areas: [
    {
        key: 'Kitchen',
        selected: true
    },
    {
        key: 'Hallway',
        selected: true
    },
    {
      key: 'Bathroom',
      selected:true
    }
  ]
        });

    }

);


$( document ).ready( onWindowResize );
// Resize the map to fit within the boundaries provided

function resize(maxWidth,maxHeight) {
     var image =  $('img');

     imgWidth = image.width();
     imgHeight = image.height();


            imgHeight = maxWidth / 1.85;
            imgWidth = maxWidth;




        newWidth=0,
        newHeight=0;

    if (imgWidth/maxWidth>imgHeight/maxHeight) {
        newWidth = maxWidth;
    } else {
        newHeight = maxHeight;
    }
    image.mapster('resize',newWidth,newHeight,resizeTime);
}

// Track window resizing events, but only actually call the map resize when the
// window isn't being resized any more

function onWindowResize() {

  console.log("testing");

    var curWidth = $(".MapWrapper").width(),
        curHeight = $(".MapWrapper").height(),
        checking=false;
    if (checking) {
        return;
            }
    checking = true;
    window.setTimeout(function() {
        var newWidth = $(".MapWrapper").width(),
           newHeight = $(".MapWrapper").height();


            resize(newWidth,newHeight);

        checking=false;
    },resizeDelay );
}

$(window).bind('resize',onWindowResize);
})



// Without JQuery
var slider = new Slider('#ex1', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
