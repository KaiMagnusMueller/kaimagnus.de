$(function () {
    console.log("document ready")

    //Observer for starting and stopping use case ucvideos when they come into and goe out of view
    const observer = new IntersectionObserver(callback, { threshold: 0.8 });

    //Get all videos on a page
    const videos = document.getElementsByTagName("video")

    for (let item of videos) {
        observer.observe(item)
    }


    //console.log($(".use-case-figure-group").find(">:first-child"))

    if ($(".use-case-container").css("display") !== "none") {
        try {
            const firstFigure = $(".use-case-figure-group").find(">:first-child")

            firstFigure.show()
            firstFigure.addClass("active")
            firstFigure.children().show()

            const video = firstFigure.find("video").get(0).play()
            const firstSelector = $(".use-case-selector-group").find(">:first-child")
            firstSelector.addClass("active")
        } catch (e) {
            console.log("no use case")
        }
    } else {
        console.log("use case hidden")
    }


    // console.log("test")
    // video.load()
    //
    // video.getAttribute("src")
    //
    // fetchVideoAndPlay(video, video.getAttribute("src"))
    //
    //

    // TODO: add active to all use cases


    $(".use-case-selector").on("click", function () {

        if (!$(this).hasClass("active")) {
            $(this).addClass("active")

            $(this).siblings().removeClass("active")

            const index = $(this).index();
            // console.log(index)

            //TODO: make more flexible to changes of html relationships
            const figGroup = $(this).parent().parent().parent().find(".use-case-figure-group")
            //console.log(figGroup)

            //activeFig is the current selected figure
            const activeFig = $(figGroup).children().get(index)
            // console.log(activeFig)


            $(activeFig).addClass("active")
            $(activeFig).show()
            $(activeFig).siblings().removeClass("active")


            $(activeFig).children().show()
            $(activeFig).siblings().children().hide()
            $(activeFig).siblings().hide()

            $(activeFig).find("video").get(0).currentTime = 0
            $(activeFig).find("video").get(0).play()
            $(activeFig).siblings().find("video").get(0).pause()


        }
    })

    $('.use-case-video').on('ended', function () {
        const index = $(this).parent().parent().index();
        // console.log(index);
        //console.log($(this).parent());

        const figGroup = $(this).parent().parent().parent()
        // console.log(figGroup)

        const length = figGroup.children().length;
        // console.log(length);

        //activeFig is the next figure to play
        const activeFig = $(figGroup).children().get(mod(index + 1, length))
        // console.log(activeFig)


        $(activeFig).addClass("active")
        $(activeFig).siblings().removeClass("active")
        $(activeFig).show()


        $(activeFig).children().show()
        $(activeFig).siblings().children().hide()
        $(activeFig).siblings().hide()

        $(activeFig).find("video").get(0).currentTime = 0
        $(activeFig).find("video").get(0).play()
        $(activeFig).siblings().find("video").get(0).pause()


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


// HAMBURGER
let hamburger = document.getElementById('hamburger');
let nav = document.getElementById('nav');
hamburger.addEventListener('click', function () {

    if (hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    } else {
        hamburger.classList.add('open');
        nav.classList.add('open');
    }
});

// let projectEexpand = document.getElementById("projects-expand")
// let projects = document.getElementById("projects")
// console.log("test")
// projectEexpand.addEventListener("click", () => {
//     console.log("test")
//
//     if (projectEexpand.classList.contains('open')) {
//         projectEexpand.classList.remove('open');
//         projects.classList.remove('open');
//     } else {
//         projectEexpand.classList.add('open');
//         projects.classList.add('open');
//     }
// })


const randomBtn = document.getElementById('random-button');
if (randomBtn) {
    randomBtn.addEventListener('click', () => {

        //get and parse data attr as JSON
        const sites = $(randomBtn).data("sites")
        //get number of existing keys
        const objKeys = Object.keys(sites);
        //get random number according to existing key count
        const rndIndex = Math.floor(Math.random() * (objKeys.length))
        //get the value of a random key 
        const rndUrl = sites[objKeys[rndIndex]]

        //navigate to value as url
        window.location.href = rndUrl
    })
}

if (!window.matchMedia("(pointer: coarse)").matches) {

let openLightbox 

    $(".lightbox-source").on("click", (e) => {
        // console.log(e.currentTarget)
        //get lightbox div of eleement

        let lightbox = $(e.currentTarget).parent().parent().children(".lightbox")
        let lightboxGroup = $(e.currentTarget).parent().parent().children(".lightbox").children(".lightbox-group")


        openLightbox = $(e.currentTarget).parent().parent().children(".lightbox")
        // console.log(lightbox)
        let lightboxImg = lightboxGroup.children(".lightbox-img")
        // console.log(lightboxImg)

        let lbImageSrc = lightboxImg.data("src")

        $(lightboxImg).attr("src", lbImageSrc);

        if (this.complete) {
            loaded(lightbox)
        } else {
            this.addEventListener('load', loaded(lightbox))
            this.addEventListener('error', function () {
                alert('error')
            })
        }
    })

    $(".lightbox").on("click", (e) => {

        $(e.currentTarget).removeClass("open")

        $(e.currentTarget).css({
            'visibility': 'hidden'
        });

        openLightbox = null
    })

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            closeLightbox(openLightbox)
        }
    };

    const lb = document.getElementsByClassName("lightbox-img")

    // console.log(lb)

    function loaded(elem) {

        elem.addClass("open")
        $(elem).css({
            'visibility': 'visible'
        });
        console.log("loaded")
    }

    function closeLightbox(e) {

       e.removeClass("open")

       e.css({
            'visibility': 'hidden'
        });

        openLightbox = null
    }
}



if (!window.matchMedia("(pointer: coarse)").matches) {

    console.log(window.matchMedia("(pointer: coarse)"));
    console.log("----- video player");
    const videos = document.getElementsByClassName("player-video")
    const videoPlayers = document.getElementsByClassName("player-controls")
    const playerWrappers = document.getElementsByClassName("player-wrapper")
    const playerControls = document.getElementsByClassName("player-control")

    for (let element of videos) {
        element.controls = false
    }

    for (let element of videoPlayers) {
        element.style.display = "flex"
    }

    const playpause = document.getElementsByClassName('playpause');
    const progress = document.getElementsByClassName('progress');
    const mute = document.getElementsByClassName('mute');
    const fullscreen = document.getElementsByClassName('fullscreen');

    let focusedPlayer

    for (let elem of playerWrappers) {
        elem.addEventListener('mouseenter', (e) => {
            const progressBar = $(e.target).find(".progress")[0]
            const playerControls = $(e.target).find(".player-controls")
            const video = $(e.target).find("video")[0]

            if (playerControls.hasClass("faded")) playerControls.toggleClass("faded")

            progressBar.value = video.currentTime;
            updateProgressBar(progressBar)

        })

        elem.addEventListener('mouseleave', (e) => {
            const playerControls = $(e.target).find(".player-controls")
            if (!playerControls.hasClass("faded")) playerControls.toggleClass("faded")

        })

    }

    for (let elem of videos) {
        elem.addEventListener('loadedmetadata', (e) => {
            const playerWrapper = $(e.target).parents(".player-wrapper")
            const progressBar = playerWrapper.find(".progress")[0]
            progressBar.setAttribute('max', e.target.duration)
        })

        elem.addEventListener('click', (e) => {
            if (elem.paused || elem.ended) {
                // updateButton("startPlay", thisButton)
                elem.play()
                console.log("play");
            } else {
                // updateButton("startPause", thisButton)
                elem.pause()
                console.log("pause");
            }
        })

        elem.addEventListener('timeupdate', (e) => {
            const playerWrapper = $(e.target).parents(".player-wrapper")
            const playerControls = playerWrapper.find(".player-controls")

            if (!playerControls.hasClass("faded")) {
                const progressBar = playerWrapper.find(".progress")[0]
                if (!progressBar.getAttribute('max')) progressBar.setAttribute('max', e.target.duration);

                const currentTime = e.target.currentTime
                const duration = progressBar.getAttribute("max")

                // console.log(currentTime);

                progressBar.value = currentTime;
                updateProgressBar(progressBar)
            }
        });
    }

    // for (const elem of playpause) {
    //     elem.addEventListener('click', (e) => {
    //         // console.log(e.target);
    //         // console.log($(e.target).parents(".player-wrapper"))

    //         const thisButton = e.target

    //         const playerWrapper = $(e.target).parents(".player-wrapper")
    //         const video = playerWrapper.find("video")[0]

    //         if (video.paused || video.ended) {
    //             // updateButton("startPlay", thisButton)
    //             video.play()
    //             console.log("play");
    //         } else {
    //             // updateButton("startPause", thisButton)
    //             video.pause()
    //             console.log("pause");
    //         }
    //     });
    // }

    for (const elem of progress) {
        elem.addEventListener('mousedown', (e) => {
            console.log("mousedown");
            const playerWrapper = $(e.target).parents(".player-wrapper")
            const video = playerWrapper.find("video")[0]
            const button = playerWrapper.find(".playpause")[0]

            // updateButton("startPause", button)
            video.pause()
        })

        elem.addEventListener('mouseup', (e) => {
            console.log("mouseup");
            const playerWrapper = $(e.target).parents(".player-wrapper")
            const video = playerWrapper.find("video")[0]
            const button = playerWrapper.find(".playpause")[0]

            // updateButton("startPlay", button)
            video.play()
        })

        elem.addEventListener('input', (e) => {
            const progressBar = e.target
            const playerWrapper = $(e.target).parents(".player-wrapper")
            const video = playerWrapper.find("video")[0]

            video.currentTime = progressBar.value

            updateProgressBar(progressBar)
            // console.log(video.currentTime);
        });
    }

    // for (const elem of mute) {
    //     // const playerWrapper = $(elem).parents(".player-wrapper")
    //     // const video = playerWrapper.find("video")[0]

    //     // console.log(video.audioTracks);  
    //     // console.log(video.audioTracks[0]);  
    //     // console.log(video.audioTracks.length); 

    //     // if (!video.audioTracks[0]) { elem.disabled = true}

    //     // if (video.muted) {
    //     //     updateButton("startMute", elem)
    //     // } else {
    //     //     updateButton("startUnute", elem)
    //     // }
    //     // console.log("muted");


    //     elem.addEventListener('click', (e) => {
    //     console.log("muted");

    //         const thisButton = e.target

    //         const playerWrapper = $(e.target).parents(".player-wrapper")
    //         const video = playerWrapper.find("video")[0]

    //         if (video.muted) {
    //             video.muted = false
    //             updateButton("startUnmute", thisButton)

    //             console.log("mute: off");
    //         } else {
    //             video.muted = true
    //             updateButton("startMute", thisButton)
    //             console.log("mute: on");
    //         }
    //     });
    // }

    // for (const elem of fullscreen) {
    //     elem.addEventListener('click', (e) => {
    //         const thisButton = e.target
    //         const playerWrapper = $(e.target).parents(".player-wrapper")

    //         handleFullscreen(playerWrapper);

    //     });
    // }

    function updateButton(e, source) {
        switch (e) {
            case "startPause":
                source.innerHTML = "Play"
                break;
            case "startPlay":
                source.innerHTML = "Pause"
                break;
            case "startMute":
                source.innerHTML = "X"
                break;
            case "startUnmute":
                source.innerHTML = "O"
                break;
            default:
                break;
        }
    }

    for (let elem of videos) {
        elem.addEventListener('pause', (e) => {
            const playerWrapper = $(e.target).parents(".player-wrapper")
            const button = playerWrapper.find(".playpause")[0]
            // updateButton("startPause", button)
        })
    }

    for (let elem of videos) {
        elem.addEventListener('play', (e) => {
            const playerWrapper = $(e.target).parents(".player-wrapper")
            const button = playerWrapper.find(".playpause")[0]
            // updateButton("startPlay", button)
        })
    }

    for (let elem of videos) {
        elem.addEventListener('error', (e) => {
            console.log(e);
        })
    }

    for (let elem of videos) {
        elem.addEventListener('waiting', (e) => {
            //console.log(e);
        })
    }

    for (let elem of videos) {
        elem.addEventListener('abort', (e) => {
            console.log(e);
        })
    }

    for (let elem of videos) {
        elem.addEventListener('ended', (e) => {
            console.log(e);
        })
    }

    for (let elem of videos) {
        elem.addEventListener('stalled', (e) => {
            console.log(e);
        })
    }

    for (let elem of videos) {
        elem.addEventListener('suspend', (e) => {
            // console.log(e);
        })
    }

    var handleFullscreen = function (playerWrapper) {
        if (isFullScreen()) {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
            else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
            setFullscreenData(playerWrapper, false);
        }
        else {
            if (playerWrapper.requestFullscreen) playerWrapper.requestFullscreen();
            else if (playerWrapper.mozRequestFullScreen) playerWrapper.mozRequestFullScreen();
            else if (playerWrapper.webkitRequestFullScreen) playerWrapper.webkitRequestFullScreen();
            else if (playerWrapper.msRequestFullscreen) playerWrapper.msRequestFullscreen();
            setFullscreenData(playerWrapper, true);
        }
    }
    var isFullScreen = function () {
        return !!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
    }

    var setFullscreenData = function (playerWrapper, state) {
        console.log(playerWrapper[0]);
        playerWrapper[0].setAttribute('data-fullscreen', !!state);
    }
}

function updateProgressBar(bar) {
    const value = (bar.value - bar.min) / (bar.max - bar.min) * 100
    bar.style.background = 'linear-gradient(to right, #000 0%, #000 ' + value + '%, #fff ' + value + '%, #fff 100%)'

}


// console.log("test");
// const titleObserver = new IntersectionObserver(titleObsCallback, { threshold: 1 });

// let helperElem = document.getElementsByClassName("sticky-helper")
// let titleElem = document.getElementsByClassName("header-title")

// titleObserver.observe(helperElem[0])

// function titleObsCallback(elems) {
//     console.log(elems);

//     elems.forEach(function (elem) {
//     console.log(elem.intersectionRatio);
//     console.log(titleElem[0].classList.contains("floating"));
//     console.log(titleElem[0].classList);

//         if (elem.intersectionRatio < 1 && titleElem[0].classList.contains("floating") == false ) {
//             console.log("intersect");
//             titleElem[0].classList.toggle('floating')
//         } else if (elem.intersectionRatio == 1 && titleElem[0].classList.contains("floating") == true ){
//             console.log("intersect");
//             titleElem[0].classList.toggle('floating')
//         }
//     })
// }

const titleObserver = new IntersectionObserver(titleObsCallback, { threshold: 0.5 });

let titleMediaElem = document.getElementsByClassName("header-media")
let titleElem = document.getElementsByClassName("header-title")

titleObserver.observe(titleMediaElem[0])

function titleObsCallback(elems) {
    console.log(elems);
}