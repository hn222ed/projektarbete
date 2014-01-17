var imageSlider = document.getElementById("imageslider");
var pic = ["arc_photos/DSC03932.jpg", "arc_photos/DSC03945.jpg", "arc_photos/DSC03951.jpg", "arc_photos/DSC03957.jpg", "arc_photos/DSC03966.jpg"];
var counter = 0;
var displayPic;

        function delay() {
                setInterval(function() {
                        display();

                        if(counter < pic.length - 1) {
                                counter++;
                        } else {
                                counter = 0;
                        }
                }, 5000);
        }        

        function display(displayPic) {
                displayPic = imageSlider.src = pic[counter];
        };

        window.onload = delay();