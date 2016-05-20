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
          fillColor: 'BD3333',
        fillOpacity: 0.5,
        mapKey: 'locks',
        scaleMap: true,
        onMouseover: function (e) {
            document.getElementById(e.key).style.color = "#14DCEB";
        },
        onMouseout: function (e) {
             document.getElementById(e.key).style.color = "#ffffff";
         },
         onClick: function(e){
           if (e.selected) {
        document.getElementById(e.key).className = "";
          document.getElementById(e.key).className = "fa fa-lock";

           }else{
  document.getElementById(e.key).className = "";
        document.getElementById(e.key).className = "fa fa-unlock";

           }

         },
         areas: [
     {
         key: 'K1',
         selected: true
     },
     {
         key: 'K2',
         selected: true
     },
     {
       key: 'K3',
       selected:true
     },
     {
       key: 'B1',
       selected:true
     },
     {
       key: 'LR1',
       selected:true
     },
     {
       key: 'LR2',
       selected:true
     } ]
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
