//Current video
var tabNum = 0;
//All video/caption groups
var figures;
//All headings
var selectors;
//All ucvideos
var ucvideos;
//All captions
var captions;

// TODO: make ucvideos, selectors etc. relative to current use case and loop through all use cases to support multiple use cases on one page

$(document).ready(function () {

    //Observer for starting and stopping use case ucvideos when they come into and goe out of view
    var observer = new IntersectionObserver(callback, { threshold: 0.8 });

    //Get all videos on a page
    var videos = document.getElementsByTagName("video")

    for (let item of videos) {
        observer.observe(item)
    }

    // $(videos).click(function() {
    //     if (this.paused === false) {
    //         this.pause();
    //     } else {
    //         this.play();
    //     }
    // });

    figures = document.getElementsByClassName("use-case-figure")
    selectors = document.getElementsByClassName("use-case-selector")
    ucvideos = document.getElementsByClassName("use-case-video")
    captions = document.getElementsByClassName("use-case-figcaption")

    console.log(selectors)

    if (selectors.length > 0) {
        //active style the first
        selectors[0].classList.add("active")

        //pause and hide all ucvideos and captions
        hide()

        //show the first video
        ucvideos[0].hidden = false
        $(captions[0]).show()

        //Click event for selectors
        $(".use-case-selector").click(function () {
            $(".active").removeClass("active")
            $(this).toggleClass("active")

            tabNum = $(".use-case-selector").index(this)
            hide()
            ucvideos[tabNum].hidden = false
            ucvideos[tabNum].currentTime = 0
            $(captions[tabNum]).show()
        })

        //Go to next video
        $('.use-case-video').on('ended', function () {
            tabNum++
            //Increment tabNum and use mod to wrap
            $(selectors[mod(tabNum)]).toggleClass("active")
            $(selectors[mod(tabNum-1)]).toggleClass("active")
            hide()
            ucvideos[mod(tabNum)].hidden = false
            $(captions[mod(tabNum)]).show()
        });
    }

    //
    // $("video").hover(function () {
    //     if(this.paused === false) {
    //         this.child().css("background-image", "url(../img/pause.svg)")
    //     } else {
    //         this.child().css("background-image", "url(../img/play.svg)")
    //     }
    // })

    //Wrap tabNum to support loop
    function mod(_tabNum) {
        // console.log(_tabNum % 5)
        return _tabNum % ucvideos.length
    }

    function hide() {
        for (var i = 0; i < ucvideos.length; i++) {
            ucvideos[i].pause()
            ucvideos[i].hidden = true
            $(captions[i]).hide()
        }
    }

    function callback(entries) {
        entries.forEach(function(entry){
            if (entry.intersectionRatio > 0.8) {
                entry.target.play()
            } else if (entry.intersectionRatio < 0.8 ){
                entry.target.pause()
            }
        })
    }
})