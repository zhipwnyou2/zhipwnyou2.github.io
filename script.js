$(document).ready(function() {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });

    // transitions not working...
    $("#nyc").hover(function() {
        $('#contentPage').css('background-image', 'url("' + 'https://images.solecollector.com/complex/images/c_fill,f_auto,fl_lossy,q_auto,w_800/mtnz7sidjsxxyuyqnogb/nike-air-max-1-og-sport-red-release-date-908375-103' + '")');
        // $('#contentPage').css("transition", "background - image 5 s cubic - bezier(0.4, 0, 1, 1)");
    }, function() {
        $("#contentPage").css('background-image', 'none');
        $('#contentPage').css("transition", "background-image 2s cubic-bezier(0.4, 0, 1, 1)");
    });
    $("#mediaArts").hover(function() {
        $('#contentPage').css('background-image', 'url("' + 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-2-retro-infrared-23-black-infrared-23-pr-pltnm-wht-011906_1.png' + '")');
    }, function() {
        $("#contentPage").css('background-image', 'none');
    });
    $("#creative").hover(function() {
        $('#contentPage').css('background-image', 'url("' + 'https://stockx.imgix.net/Nike-Air-Air-Jordan-3-JTH-Update.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=40' + '")');
    }, function() {
        $("#contentPage").css('background-image', 'none');
    });
    $("#design_text").hover(function() {
        $('#contentPage').css('background-image', 'url("' + 'https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/air-jordan-4-retro-og-hero_frnqkt.jpg' + '")');
    }, function() {
        $("#contentPage").css('background-image', 'none');
    });
    $("#thinking_text").hover(function() {
        $('#contentPage').css('background-image', 'url("' + 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-5-retro-gg-gs-hot-lava-wolf-grey-black-hot-lava-white-012231_1.jpg' + '")');
    }, function() {
        $("#contentPage").css('background-image', 'none');
    });
    $("#making_text").hover(function() {
        $('#contentPage').css('background-image', 'url("' + 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-6-retro-low-infrared-white-infrared-23-black-012255_1.jpg' + '")');
    }, function() {
        $("#contentPage").css('background-image', 'none');
    });
    $("#cool_text").hover(function() {
        $('#contentPage').css('background-image', 'url("' + 'https://cloudfront.sneakerdistrict.com/images2/Nike-Air-Max-97-Premium-Cool-Grey-Deep-Pewter-Mushroom-Movement-1600.jpg' + '")');
    }, function() {
        $("#contentPage").css('background-image', 'none');
    });
    //---
    $("#about").click(function() {
        if ($('#aboutPage').css('display') != "table-cell") {
            $("#aboutPage").toggle();
            var act = document.getElementsByClassName('active');
            $(act[0]).toggle();
            act[0].classList.remove('active');
            $("#aboutPage").addClass('active');
            $('.horiNav').css('visibility', 'hidden')
            $('#pageTitle').text("About");
        }

    });
    $("#photo").click(function() {
        if ($('#photoPage').css('display') != "block") {
            $("#photoPage").toggle();
            var act = document.getElementsByClassName('active');
            $(act[0]).toggle();
            act[0].classList.remove('active');
            $("#photoPage").addClass('active');
            $('.horiNav').css('visibility', 'visible')
            $('#pageTitle').text("Photo");

        } else {
            console.log('do nothing')
        }

    });
    $("#places").click(function() {
        if ($('#placesPage').css('display') != "block") {
            $("#placesPage").toggle();
            var act = document.getElementsByClassName('active');
            $(act[0]).toggle();
            act[0].classList.remove('active');
            $("#placesPage").addClass('active');
            $('#pageTitle').text("Photos/Places");

        } else {
            console.log('do nothing')
        }
    });
    $("#video").click(function() {
        if ($('#videoPage').css('display') != "block") {
            $("#videoPage").toggle();
            var act = document.getElementsByClassName('active');
            $(act[0]).toggle();
            act[0].classList.remove('active');
            $("#videoPage").addClass('active');
            $('.horiNav').css('visibility', 'hidden')
            $('#pageTitle').text("Video");
        } else {
            console.log('do nothing')
        }
    });
    // $("#contact").click(function() {
    //     if ($('#contactPage').css('display') != "block") {
    //         $("#contactPage").toggle(500);
    //         var act = document.getElementsByClassName('active');
    //         $(act[0]).toggle();
    //         act[0].classList.remove('active');
    //         $("#contactPage").addClass('active');
    //         $('.horiNav').css('visibility', 'hidden')
    //         $('#pageTitle').text("Contact");
    //     } else {
    //         console.log('do nothing')
    //     }
    // });

    $("#contact").click(function() {
        if ($('#contactPage').css('display') != "block") {
            $("#contactPage").toggle();
            var act = document.getElementsByClassName('active');
            $(act[0]).toggle();
            act[0].classList.remove('active');
            $("#contactPage").addClass('active');
            $('.horiNav').css('visibility', 'hidden')
            $('#pageTitle').text("Contact");
        } else {
            console.log('do nothing')
        }
    });

});