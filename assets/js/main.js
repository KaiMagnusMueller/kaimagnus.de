$(function () {


    //Observer for starting and stopping use case ucvideos when they come into and goe out of view
    const observer = new IntersectionObserver(callback, {threshold: 0.8});

    //Get all videos on a page
    const videos = document.getElementsByTagName("video")

    for (let item of videos) {
        observer.observe(item)
    }


    //console.log($(".use-case-figure-group").find(">:first-child"))

    try {
        const firstFigure = $(".use-case-figure-group").find(">:first-child")


        firstFigure.addClass("active")
        firstFigure.children().show()

        const video = firstFigure.find(">:first-child").get(0).play()

    } catch (e) {
        console.log(e)
        console.log("no use case")
    }


    // console.log("test")
    // video.load()
    //
    // video.getAttribute("src")
    //
    // fetchVideoAndPlay(video, video.getAttribute("src"))
    //
    //


    const firstSelector = $(".use-case-selector-group").find(">:first-child")

    firstSelector.addClass("active")

// TODO: add active to all use cases


    $(".use-case-selector").on("click", function () {

        if (!$(this).hasClass("active")) {
            $(this).addClass("active")

            $(this).siblings().removeClass("active")

            const index = $(this).index();
            // console.log(index)

            const figGroup = $(this).parent().parent().find(".use-case-figure-group")
            //console.log(figGroup)

            //activeFig is the current selected figure
            const activeFig = $(figGroup).children().get(index)
            // console.log(activeFig)


            $(activeFig).addClass("active")
            $(activeFig).siblings().removeClass("active")


            $(activeFig).children().show()
            $(activeFig).siblings().children().hide()

            $(activeFig).find(">:first-child").get(0).currentTime = 0
            $(activeFig).find(">:first-child").get(0).play()
            $(activeFig).siblings().find(">:first-child").get(0).pause()


        }
    })

    $('.use-case-video').on('ended', function () {
        const index = $(this).parent().index();
        console.log(index);
        //console.log($(this).parent());

        const figGroup = $(this).parent().parent()
        // console.log(figGroup)

        const length = figGroup.children().length;
        // console.log(length);

        //activeFig is the next figure to play
        const activeFig = $(figGroup).children().get(mod(index + 1, length))
        // console.log(activeFig)


        $(activeFig).addClass("active")
        $(activeFig).siblings().removeClass("active")


        $(activeFig).children().show()
        $(activeFig).siblings().children().hide()

        $(activeFig).find(">:first-child").get(0).currentTime = 0
        $(activeFig).find(">:first-child").get(0).play()
        $(activeFig).siblings().find(">:first-child").get(0).pause()


        const selectorGroup = $(figGroup).parent().find(".use-case-selector-group")

        // console.log(selectorGroup)
        // console.log($(selectorGroup).children())
        // console.log(mod(index + 1, length))


        $(selectorGroup).children().removeClass("active")
        $(selectorGroup).children().eq(mod(index + 1, length)).addClass("active")


    });


    //Wrap tabNum to support loop
    function mod(_ucIndex, ucLength) {
        // console.log(_tabNum % 5)
        return _ucIndex % ucLength
    }


    function findRootFromClick(_elem) {

    }

    function findRootFromEnd(_elem) {

    }

    function updateUseCase(_index) {

    }


    function callback(entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0.8) {
                entry.target.play()
            } else if (entry.intersectionRatio < 0.8) {
                entry.target.pause()
            }
        })
    }

    function fetchVideoAndPlay(video, videoURL) {
        console.log(video)
        console.log(videoURL)

        fetch(videoURL)
            .then(response => response.blob())
            .then(blob => {
                video.srcObject = blob;
                return video.play();
            })
            .then(_ => {
                // Video playback started ;)
            })
            .catch(e => {
                // Video playback failed ;(
            })
    }

})

function decode(a) {
    // ROT13 : a Caesar cipher
    // letter -> letter' such that code(letter') = (code(letter) + 13) modulo 26
    return a.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    })
};

function openMailer(element) {
    console.log(element.getAttribute("data-address").toString())
    var y = decode(element.getAttribute("data-address"));
    element.setAttribute("href", "mailto:" + y);
    element.setAttribute("onclick", "");
};

// function hide(elem) {
//     // console.log(elem)
//     elem.classList.toggle("hidden")
//     if (localStorage.getItem("devBoxHidden") === "true") {
//         localStorage.setItem("devBoxHidden", "false")
//     } else {
//         localStorage.setItem("devBoxHidden", "true")
//     }
//
//     console.log("toggled")
// }
//
// function setup(elem) {
//     console.log("setup")
//     if (localStorage.getItem("devBoxHidden") === "true") {
//         document.getElementById("dev-box").classList.add("hidden")
//     }
// }


// //Current video
// var tabNum = 0;
// //All video/caption groups
// var figures;
// //All headings
// var selectors;
// //All ucvideos
// var ucvideos;
// //All captions
// var captions;
//
// // TODO: make ucvideos, selectors etc. relative to current use case and loop through all use cases to support multiple use cases on one page
//
// $(document).ready(function () {
//
//     //Observer for starting and stopping use case ucvideos when they come into and goe out of view
//     var observer = new IntersectionObserver(callback, { threshold: 0.8 });
//
//     //Get all videos on a page
//     var videos = document.getElementsByTagName("video")
//
//     for (let item of videos) {
//         observer.observe(item)
//     }
//
//     // $(videos).click(function() {
//     //     if (this.paused === false) {
//     //         this.pause();
//     //     } else {
//     //         this.play();
//     //     }
//     // });
//
//     figures = document.getElementsByClassName("use-case-figure")
//     selectors = document.getElementsByClassName("use-case-selector")
//     ucvideos = document.getElementsByClassName("use-case-video")
//     captions = document.getElementsByClassName("use-case-figcaption")
//
//     console.log(selectors)
//
//     if (selectors.length > 0) {
//         //active style the first
//         selectors[0].classList.add("active")
//
//         //pause and hide all ucvideos and captions
//         hide()
//
//         //show the first video
//         ucvideos[0].hidden = false
//         $(captions[0]).show()
//
//         //Click event for selectors
//         $(".use-case-selector").click(function () {
//             $(".active").removeClass("active")
//             $(this).toggleClass("active")
//
//             tabNum = $(".use-case-selector").index(this)
//             hide()
//             ucvideos[tabNum].hidden = false
//             ucvideos[tabNum].currentTime = 0
//             $(captions[tabNum]).show()
//         })
//
//         //Go to next video
//         $('.use-case-video').on('ended', function () {
//             tabNum++
//             //Increment tabNum and use mod to wrap
//             $(selectors[mod(tabNum)]).toggleClass("active")
//             $(selectors[mod(tabNum-1)]).toggleClass("active")
//             hide()
//             ucvideos[mod(tabNum)].hidden = false
//             $(captions[mod(tabNum)]).show()
//         });
//     }
//
//     //
//     // $("video").hover(function () {
//     //     if(this.paused === false) {
//     //         this.child().css("background-image", "url(../img/pause.svg)")
//     //     } else {
//     //         this.child().css("background-image", "url(../img/play.svg)")
//     //     }
//     // })
//
//     //Wrap tabNum to support loop
//     function mod(_tabNum) {
//         // console.log(_tabNum % 5)
//         return _tabNum % ucvideos.length
//     }
//
//     function hide() {
//         for (var i = 0; i < ucvideos.length; i++) {
//             ucvideos[i].pause()
//             ucvideos[i].hidden = true
//             $(captions[i]).hide()
//         }
//     }
//
//     function callback(entries) {
//         entries.forEach(function(entry){
//             if (entry.intersectionRatio > 0.8) {
//                 entry.target.play()
//             } else if (entry.intersectionRatio < 0.8 ){
//                 entry.target.pause()
//             }
//         })
//     }
// })
