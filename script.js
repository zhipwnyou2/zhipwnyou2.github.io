$(document).ready(function() {
  $(".main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true
  });

  const videoLinks = ["https://player.vimeo.com/video/284213823?portrait=0"];
  function createVideo(index) {
    console.log("in func");
    const link = videoLinks[index];
    const html = `
    <div id="carouselVid" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <iframe src=${link} width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
        </div>
    </div>
    `;
    return html;
  }

  function resetDOM(divID) {
    while (divID.firstChild) {
      divID.removeChild(divID.firstChild);
    }
  }

  function makeVisible() {
    if ($("#projContPage").css("display") != "block") {
      $("#projContPage").toggle();
      var act = document.getElementsByClassName("active_cont");

      $(act[0]).toggle();
      console.log(act[0]);

      $(act[0]).removeClass("active_cont");
      $("#projContPage").addClass("active_cont");
      $(".horiNav").css("visibility", "hidden");
    }
  }
  // transitions not working...
  $(function() {
    $("#nyc").hover(
      function() {
        $("#div2").fadeIn();
      },
      function() {
        $("#div2").fadeOut();
      }
    );
  });

  $("#nyc").hover(
    function() {
      $("#contentPage").css(
        "background-image",
        'url("' +
          "https://images.solecollector.com/complex/images/c_fill,f_auto,fl_lossy,q_auto,w_800/mtnz7sidjsxxyuyqnogb/nike-air-max-1-og-sport-red-release-date-908375-103" +
          '")'
      );
    },
    function() {
      $("#contentPage").css("background-image", "none");
    }
  );
  $("#mediaArts").hover(
    function() {
      $("#contentPage").css(
        "background-image",
        'url("' +
          "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-2-retro-infrared-23-black-infrared-23-pr-pltnm-wht-011906_1.png" +
          '")'
      );
    },
    function() {
      $("#contentPage").css("background-image", "none");
    }
  );
  $("#creative").hover(
    function() {
      $("#contentPage").css(
        "background-image",
        'url("' +
          "https://stockx.imgix.net/Nike-Air-Air-Jordan-3-JTH-Update.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=40" +
          '")'
      );
    },
    function() {
      $("#contentPage").css("background-image", "none");
    }
  );
  $("#design_text").hover(
    function() {
      $("#contentPage").css(
        "background-image",
        'url("' +
          "https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/air-jordan-4-retro-og-hero_frnqkt.jpg" +
          '")'
      );
    },
    function() {
      $("#contentPage").css("background-image", "none");
    }
  );
  $("#thinking_text").hover(
    function() {
      $("#contentPage").css(
        "background-image",
        'url("' +
          "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-5-retro-gg-gs-hot-lava-wolf-grey-black-hot-lava-white-012231_1.jpg" +
          '")'
      );
    },
    function() {
      $("#contentPage").css("background-image", "none");
    }
  );
  $("#making_text").hover(
    function() {
      $("#contentPage").css(
        "background-image",
        'url("' +
          "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-6-retro-low-infrared-white-infrared-23-black-012255_1.jpg" +
          '")'
      );
    },
    function() {
      $("#contentPage").css("background-image", "none");
    }
  );
  $("#cool_text").hover(
    function() {
      $("#contentPage").css(
        "background-image",
        'url("' +
          "https://cloudfront.sneakerdistrict.com/images2/Nike-Air-Max-97-Premium-Cool-Grey-Deep-Pewter-Mushroom-Movement-1600.jpg" +
          '")'
      );
    },
    function() {
      $("#contentPage").css("background-image", "none");
    }
  );
  //---
  $("#home").click(function() {
    if ($("#aboutPage").css("display") != "table-cell") {
      $("#aboutPage").toggle();
      var act = document.getElementsByClassName("active_cont");
      $(act[0]).toggle();
      act[0].classList.remove("active_cont");
      $("#aboutPage").addClass("active_cont");
      $(".horiNav").css("visibility", "hidden");
      $("#pageTitle").text("About");
    }
  });
  // start of photo functionalities
  $("#photo").click(function() {
    if ($("#photoPage").css("display") != "block") {
      $("#photoPage").toggle();
      var act = document.getElementsByClassName("active_cont");
      $(act[0]).toggle();
      act[0].classList.remove("active_cont");
      $("#photoPage").addClass("active_cont");
      $(".horiNav").css("visibility", "visible");
      $("#pageTitle").text("Photo");
    }
  });
  $("#places").click(function() {
    if ($("#placesPage").css("display") != "block") {
      $("#placesPage").toggle();
      var act = document.getElementsByClassName("active_cont");
      $(act[0]).toggle();
      act[0].classList.remove("active_cont");
      $("#placesPage").addClass("active_cont");
      $("#pageTitle").text("Photos/Places");
    }
  });
  $("#faces").click(function() {
    if ($("#facesPage").css("display") != "block") {
      $("#facesPage").toggle();
      var act = document.getElementsByClassName("active_cont");
      $(act[0]).toggle();
      act[0].classList.remove("active_cont");
      $("#facesPage").addClass("active_cont");
      $("#pageTitle").text("Photos/Faces");
    }
  });
  $("#spaces").click(function() {
    if ($("#spacesPage").css("display") != "block") {
      $("#spacesPage").toggle();
      var act = document.getElementsByClassName("active_cont");
      $(act[0]).toggle();
      act[0].classList.remove("active_cont");
      $("#spacesPage").addClass("active_cont");
      $("#pageTitle").text("Photos/Spaces");
    }
  });
  $("#sneakers").click(function() {
    if ($("#placesPage").css("display") != "block") {
      $("#placesPage").toggle();
      var act = document.getElementsByClassName("active_cont");
      $(act[0]).toggle();
      act[0].classList.remove("active_cont");
      $("#placesPage").addClass("active_cont");
      $("#pageTitle").text("Photos/Sneakers");
    }
  });
  $("#fashion").click(function() {
    if ($("#fashionPage").css("display") != "block") {
      $("#fashionPage").toggle();
      var act = document.getElementsByClassName("active_cont");
      $(act[0]).toggle();
      act[0].classList.remove("active_cont");
      $("#fashionPage").addClass("active_cont");
      $("#pageTitle").text("Photos/Fashion");
    }
  });
  $("#others").click(function() {
    if ($("#othersPage").css("display") != "block") {
      $("#othersPage").toggle();
      var act = document.getElementsByClassName("active_cont");
      $(act[0]).toggle();
      act[0].classList.remove("active_cont");
      $("#othersPage").addClass("active_cont");
      $("#pageTitle").text("Photos/Others");
    }
  });
  // end of photo functionalities.
  $("#video").click(function() {
    if ($("#videoPage").css("display") != "block") {
      $("#videoPage").toggle();
      var act = document.getElementsByClassName("active_cont");
      $(act[0]).toggle();
      //   console.log("in video");
      //   console.log(act);

      act[0].classList.remove("active_cont");
      $("#videoPage").addClass("active_cont");
      $(".horiNav").css("visibility", "hidden");
      $("#pageTitle").text("Video");
    }
  });

  $("#project").click(function() {
    if ($("#projectPage").css("display") != "block") {
      $("#projectPage").toggle();
      var act = document.getElementsByClassName("active_cont");
      $(act[0]).toggle();
      console.log("in proj");
      console.log(act);

      act[0].classList.remove("active_cont");
      $("#projectPage").addClass("active_cont");
      $(".horiNav").css("visibility", "hidden");
      $("#pageTitle").text("Project");
    }
  });
  $("#vid-car").css("display", "block");

  $("#contact").click(function() {
    if ($("#contactPage").css("display") != "block") {
      $("#contactPage").toggle();
      var act = document.getElementsByClassName("active_cont");
      $(act[0]).toggle();
      console.log("in contact: ");
      console.log(act);
      act[0].classList.remove("active_cont");
      $("#contactPage").addClass("active_cont");
      $(".horiNav").css("visibility", "hidden");
      $("#pageTitle").text("Contact");
    }
  });

  let htmlTemplate;
  let contPage = document.getElementById("projContPage");
  $("#but").click(function() {
    $("#pageTitle").text("Project // BROOKLYN UNITED TIES");
    resetDOM(contPage);
    htmlTemplate = createVideo(0);
    contPage.innerHTML += htmlTemplate;
    makeVisible();
  });
  $("#he").click(function() {
    $("#pageTitle").text("Project // HERBAL ESSENCES");
    resetDOM(contPage);
    htmlTemplate = `
    <div class="row">
        <div class="col colPhoto">
            <a href="img/Herbal Essences/he1.jpg" data-lightbox="Herbal Essences" data-title="Herbal Essences"> <img src="img/Herbal Essences/he1.jpg"></a>
        </div>
        <div class="col colPhoto">
            <a href="img/Herbal Essences/he2.jpg" data-lightbox="Herbal Essences" data-title="Herbal Essences"> <img src="img/Herbal Essences/he2.jpg"></a>
        </div>
        <div class="col colPhoto">
            <a href="img/Herbal Essences/he3.jpg" data-lightbox="Herbal Essences" data-title="Herbal Essences"> <img src="img/Herbal Essences/he3.jpg"></a>
        </div>
    </div>
    `;
    console.log(htmlTemplate);
    contPage.innerHTML += htmlTemplate;
    makeVisible();
  });
  $("#el").click(function() {
    $("#pageTitle").text("Project // ESTEE LAUDER");
    resetDOM(contPage);
    htmlTemplate = `
    <div class="row">
        <div class="col colPhoto">
            <a href="img/estee/el1.png" data-lightbox="Estee Lauder" data-title="Herbal Essences"> <img src="img/estee/el1.png"></a>
        </div>
        <div class="col colPhoto">
            <a href="img/estee/el2.jpg" data-lightbox="Estee Lauder" data-title="Herbal Essences"> <img src="img/estee/el2.png"></a>
        </div>
    </div>
    `;
    contPage.innerHTML += htmlTemplate;
    makeVisible();
  });
  $("#bprc").click(function() {
    $("#pageTitle").text("Project // BELT PARKWAY RUN CLUB");
    resetDOM(contPage);
    htmlTemplate = `
    <div class="row">
        <div class="col colPhoto">
            <a href="img/estee/el1.png" data-lightbox="Estee Lauder" data-title="Estee Lauder"> <img src="img/estee/el1.png"></a>
        </div>
        <div class="col colPhoto">
            <a href="img/estee/el2.jpg" data-lightbox="Estee Lauder" data-title="Estee Lauder"> <img src="img/estee/el2.png"></a>
        </div>
    </div>
    `;
    contPage.innerHTML += htmlTemplate;
    makeVisible();
  });
});
