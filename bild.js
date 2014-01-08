var imageSlider = document.getElementById("imageslider");
var pic = ["http://24.media.tumblr.com/c33ea2198eff48c0f02fcd6915e7f389/tumblr_mw9mfpjlKq1qhavevo1_500.jpg", "http://25.media.tumblr.com/58c110b041f40d154e46b23870259c51/tumblr_mwtwm1CPBI1qfltlro1_500.jpg", "http://31.media.tumblr.com/9efd842afbd8f86d7ed7f5a3d5c30896/tumblr_mxrh9ms8Qe1rpowflo1_500.jpg"];
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