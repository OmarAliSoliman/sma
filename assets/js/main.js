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
  $(".dasboard-content").niceScroll({
    cursorcolor: "rgb(152, 147, 147)",
    cursorwidth: "8px",
    cursorborder: "1px solid rgb(152, 147, 147)",
    // horizrailenabled:false,
  });
});
