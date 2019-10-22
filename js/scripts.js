$(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hi!</li>");
    $("ul#webpage").prepend("<li>Wassup?</li>");

    $('ul#user').children("li").first().click(function() {
    alert('Fuck off!');
    });
    $('ul#webpage').children("li").first().click(function() {
    alert('Error');
    });
  });
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>See ya!</li>");
    $('ul#user').children("li").first().click(function() {
    alert('Read much??');
    });
    $('ul#webpage').children("li").first().click(function() {
    alert('Can not compute');
    });
});

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop!</li>");
    $("ul#webpage").prepend("<li>Turn down for what?!</li>");
    $('ul#user').children("li").first().click(function() {
    alert('How many times......');
  });
    $('ul#webpage').children("li").first().click(function() {
    alert("You've angered Skynet");
    });
  });
});
