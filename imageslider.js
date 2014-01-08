
var imageSlider = document.getElementById("imageslider");
var pic = ["http://www.imagenestop.com/anime1/anime-jpg-76153.jpg", "http://upload.wikimedia.org/wikipedia/commons/4/4b/Europa-bei-nacht_1-1024x768.jpg", "http://upload.wikimedia.org/wikipedia/commons/d/db/Nil_in_Luxor,_1995_(1,_1024x768).jpg"];
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
