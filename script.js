$(document).ready(function() {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });

    // transitions not working...
    $(function() {
        $('#nyc').hover(function() { 
            $('#div2').fadeIn(); 
        }, function() { 
            $('#div2').fadeOut(); 
        });
    });

    $("#nyc").hover(function() {
        $('#contentPage').css('background-image', 'url("' + 'https://images.solecollector.com/complex/images/c_fill,f_auto,fl_lossy,q_auto,w_800/mtnz7sidjsxxyuyqnogb/nike-air-max-1-og-sport-red-release-date-908375-103' + '")');
    }, function() {
        $("#contentPage").css('background-image', 'none');
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
    $("#home").click(function() {
        if ($('#aboutPage').css('display') != "table-cell") {
            $("#aboutPage").toggle();
            var act = document.getElementsByClassName('active_cont');
            $(act[0]).toggle();
            act[0].classList.remove('active_cont');
            $("#aboutPage").addClass('active_cont');
            $('.horiNav').css('visibility', 'hidden')
            $('#pageTitle').text("About");
        }

    });
    // start of photo functionalities
    $("#photo").click(function() {
        if ($('#photoPage').css('display') != "block") {
            $("#photoPage").toggle();
            var act = document.getElementsByClassName('active_cont');
            $(act[0]).toggle();
            act[0].classList.remove('active_cont');
            $("#photoPage").addClass('active_cont');
            $('.horiNav').css('visibility', 'visible')
            $('#pageTitle').text("Photo");

        }   

    });
    $("#places").click(function() {
        if ($('#placesPage').css('display') != "block") {
            $("#placesPage").toggle();
            var act = document.getElementsByClassName('active_cont');
            $(act[0]).toggle();
            act[0].classList.remove('active_cont');
            $("#placesPage").addClass('active_cont');
            $('#pageTitle').text("Photos/Places");

        } 
    });
    $("#faces").click(function() {
        if ($('#facesPage').css('display') != "block") {
            $("#facesPage").toggle();
            var act = document.getElementsByClassName('active_cont');
            $(act[0]).toggle();
            act[0].classList.remove('active_cont');
            $("#facesPage").addClass('active_cont');
            $('#pageTitle').text("Photos/Faces");

        } 
    });
    $("#spaces").click(function() {
        if ($('#spacesPage').css('display') != "block") {
            $("#spacesPage").toggle();
            var act = document.getElementsByClassName('active_cont');
            $(act[0]).toggle();
            act[0].classList.remove('active_cont');
            $("#spacesPage").addClass('active_cont');
            $('#pageTitle').text("Photos/Spaces");

        } 
    });
    $("#sneakers").click(function() {
        if ($('#placesPage').css('display') != "block") {
            $("#placesPage").toggle();
            var act = document.getElementsByClassName('active_cont');
            $(act[0]).toggle();
            act[0].classList.remove('active_cont');
            $("#placesPage").addClass('active_cont');
            $('#pageTitle').text("Photos/Sneakers");

        } 
    });
    $("#fashion").click(function() {
        if ($('#fashionPage').css('display') != "block") {
            $("#fashionPage").toggle();
            var act = document.getElementsByClassName('active_cont');
            $(act[0]).toggle();
            act[0].classList.remove('active_cont');
            $("#fashionPage").addClass('active_cont');
            $('#pageTitle').text("Photos/Fashion");

        } 
    });
    $("#others").click(function() {
        if ($('#othersPage').css('display') != "block") {
            $("#othersPage").toggle();
            var act = document.getElementsByClassName('active_cont');
            $(act[0]).toggle();
            act[0].classList.remove('active_cont');
            $("#othersPage").addClass('active_cont');
            $('#pageTitle').text("Photos/Others");

        } 
    });
    // end of photo functionalities. 
    $("#video").click(function() {
        if ($('#videoPage').css('display') != "block") {
            $("#videoPage").toggle();
            var act = document.getElementsByClassName('active_cont');
            $(act[0]).toggle();
            console.log('in video');
            console.log(act);

            act[0].classList.remove('active_cont');
            $("#videoPage").addClass('active_cont');
            $('.horiNav').css('visibility', 'hidden')
            $('#pageTitle').text("Video");
        } 
    });

    $("#project").click(function() {
        if ($('#projectPage').css('display') != "block") {
            $("#projectPage").toggle();
            var act = document.getElementsByClassName('active_cont');
            $(act[0]).toggle();
            console.log('in proj');
            console.log(act);

            act[0].classList.remove('active_cont');
            $("#projectPage").addClass('active_cont');
            $('.horiNav').css('visibility', 'hidden')
            $('#pageTitle').text("Project");
        } 
    });
    $('#vid-car').css("display", "block");

    $("#contact").click(function() {
        if ($('#contactPage').css('display') != "block") {
            $("#contactPage").toggle();
            var act = document.getElementsByClassName('active_cont');
            $(act[0]).toggle();
            console.log('in contact: ');
            console.log(act);
            act[0].classList.remove('active_cont');
            $("#contactPage").addClass('active_cont');
            $('.horiNav').css('visibility', 'hidden')
            $('#pageTitle').text("Contact");
        } 
    });

});