$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  // const answer = currentDir == 'rtl' ? true:false;
  // console.log(answer);

  if ($(".sma-team-slider").length) {
    $(".sma-team-slider").slick({
      dots: false,
      // centerMode: true,
      // centerPadding: '60px',
      cssEase: "linear",
      focusOnSelect: true,
      infinite: false,
      speed: 300,
      rtl: currentDir == "rtl" ? true : false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      arrows: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  }

  if($('.dasboard-content').length){
    $(".dasboard-content").niceScroll({
      cursorcolor: "rgb(152, 147, 147)",
      cursorwidth: "8px",
      cursorborder: "1px solid rgb(152, 147, 147)",
      // horizrailenabled:false,
    });
  }


  if ($(".funcy-box-media").length) {
    $(".funcy-box-media").fancybox({
      transitionIn: "none",
      transitionOut: "none",
      titlePosition: "over",
      titleFormat: function (title, currentArray, currentIndex, currentOpts) {
        return (
          '<span id="fancybox-title-over">Image ' +
          (currentIndex + 1) +
          " / " +
          currentArray.length +
          (title.length ? " &nbsp; " + title : "") +
          "</span>"
        );
      },
    });
  }

  tinymce.init({
    selector: '#textareatexteditopr'
  });


});
