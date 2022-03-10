const handleClick = event => {
    const $target = $(event.target).next()
    $target.toggleClass("myDIV")
    $("div").each(function() {
      if ($(this)[0] !== $target[0]) {
        $(this).addClass("myDIV")
      }
    })
  }
  
  $(".button").on("click", handleClick)