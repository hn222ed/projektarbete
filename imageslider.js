
var imageSlider = document.getElementById("imageslider");
var pic = ["arc_photos/DSC04400.jpg", "arc_photos/DSC04405.jpg", "arc_photos/DSC04409.jpg", "arc_photos/DSC04412.jpg", "arc_photos/DSC04413-2.jpg"];
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
