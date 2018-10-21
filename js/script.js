$(function() {
  // Fade out element over 2000ms
  $(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(2000);

  // Fade back in over 1000ms
  $(".red-box").fadeIn(1000);
  $(".green-box").fadeIn(1000);

  // Fade element to specific opacity (here 50%)
  $(".red-box").fadeTo(1800, 0.2);
  $(".green-box").fadeTo(2000, 0.5);
  $(".blue-box").fadeTo(3000, 0.75);

  // Fade element in or out, depending on current status
  $(".blue-box").fadeToggle();
  $(".blue-box").fadeToggle();

  // Use show/hide as animations (not very commonly used)
  $(".orange-box").show(3000);
  $(".orange-box").hide(2000);

  // Toggle visibility depending on whether element is shown or hidden
  $(".orange-box").fadeToggle();

  // Slide element up to hide (over 2s)
  $(".orange-box, .blue-box").slideUp(2000);

  // Slide element down to show (over 2s)
  $(".orange-box, .blue-box").slideDown(2000);

  // Slide Toggle will hide the element
  $(".blue-box").slideToggle(2000);

  // Move orange box to the far right
  $(".orange-box").animate({
      "margin-left": "200px"
    }, 1000);

  // Move orange box back while making it disappear and get smaller
  $(".orange-box").animate({
      "margin-left": "5px",
      "opacity": "0",
      "width": "50px",
      "height": "50px",
      "margin-top": "25px"
    }, 1000);
});

$(function() {
  // Hide all paragraphs and then slide down to show them
  $("h2").hide();
  $("h2").slideDown(5000);
  // Increase paragraph font size to 30px over 1sec
  $("h2").animate({
      "font-size": "30px"
    }, 1000);
});

$(function() {
  // Hide all paragraphs and then slide down to show them
  $("p").hide();
  $("p").slideDown(5000);
  // Increase paragraph font size to 20px over 1sec
  $("p").animate({
      "font-size": "20px"
    }, 1000);
});

// Delaying and Chaining animation
 $(function() {
   $('.red-box').fadeTo(1000, 0.2);
   $('.green-box').delay(1000).fadeTo(1000, 0.5);
   //Chaining example
   $('.blue-box').delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();
});

// Call back function
//$(function () {
  // Fade out red box over 1 second
  //$(".red-box").fadeTo(1000, 0, function() {
    // This callback function is executed once outer animation finishes, green box starts fading out
    //$(".green-box").fadeTo(1000, 0, function() {
      // The green box finishes fading out (after 2 seconds)
      //$(".blue-box").fadeTo(1000, 0);
    //});
  //});
//});

//Creating sign up Lightbox- most of the work is in the HTML and CSS, the JQuery is simple
//$(function() {
  //$('.lightbox').delay(500).fadeIn(1000);
//});

//$(function () {

  // Select all paragraph tags
  //var p = $("p");
  //highlight(p);

  // Select all elements with the class .red-box (only one in this case)
  //var redBoxes = $(".red-box");
  //highlight(redBoxes);

  // Select the unique element with ID "list"
  //var list = $("#list");
  //highlight(list);

  // Select all h2, p, and input tags
  //var elements = $("h2, p, input");
  //highlight(elements);

  // Select only the last <li> on the page
  //var lastItem = $("li:last");
  //highlight(lastItem);

  // Select all even list items on the page (every second list item)
  //var everySecondItem = $("li:even");
  //highlight(everySecondItem);

  // Select all odd list items (every other list item)
  //var everyOtherItem = $("li:odd");
  //highlight(everyOtherItem);

  // Select all input elements that are checked/selected
  // Checkboxes and radio buttons don't have background-color
  //var selected = $("input:checked");
  //console.log(selected.length);

  // Select all input elements of type email
  //var emails = $("input[type=email]");
  //highlight(emails);

//});

// Helper function which highlights the given element with yellow background
//function highlight(element) {
  //element.css("background-color", "rgba(180, 180, 30, 0.8)");
//}

//$(function () {

  // NOTE: Some of the selectors below overlap. To see the exact effect of one
  // of them, please comment out all others.

  // Select the #list and find all <li> tags it contains
  // This contains even indirect children further down in the hierarchy
  //var items = $("#list").find("li");
  //highlight(items);

  // Select the #list and find only <li> that are *direct* children
  // Note that this will still produce a yellow background around the whole list
  // because the direct children <li> have enough height to contain their children
  //var children = $("#list").children("li");
  //highlight(children);

  // Search for even non-direct parents
  //var body = $("#list").parents("body");
  //highlight(body);

  // Select the (unique) direct parent of an element
  //var content = $("#list").parent();
  //highlight(content);

  // Search through siblings on the same level in the HTML hierarchy
  //var siblingHeadlines = $("#list").siblings(":header");
  //highlight(siblingHeadlines);

  // Select the previous sibling of a selected element
  //var previous = $("#list").prev();
  //highlight(previous);

  // Select the next sibling of a selected element
  //var next = $("#list").next();
  //highlight(next);
//});

//**
//$(function () {

  // NOTE: Some of the selectors below overlap. To see the exact effect of one
  // of them, please comment out all others.

  // Select all <li> tags and then filter out all odd ones (keep only even ones)
  // Same as $("#list > li:even"), using more advanced CSS
  //var everySecondItem = $("#list").children("li").filter(":even");
  //highlight(everySecondItem);

  // The filter can even be a function that gets the index of an element and
  // returns true (to keep the element) or false (to filter it out).
  // For instance, to select only every third sub list item, we can do this:
  //var everyThirdItem = $("li li").filter(function(index) {
    //return index % 3 == 0;
  //});
  //highlight(everyThirdItem);

  // Keep only the first item of a selection
  //var first = $("li").first();
  //highlight(first);

  // Keep only the last item of a selection
  //var last = $("li").last();
  //highlight(last);

  // Keep only the item at a specific index of a selection
  // For instance, keep only the 5th item (thus index 4):
  //var fifth = $("li").eq(4);
  //highlight(fifth);

  // Keep only the second last item (index -2):
  //var secondLast = $("li").eq(-2);
  //highlight(secondLast);

//});

// Helper function which highlights the given element with yellow background
//function highlight(element) {
  //element.css("background-color", "rgba(180, 180, 30, 0.8)");
//}

$(function() {
  //$("ul ul:first").append("<li>I'm appened in");
  $("<li>Appended Sub Item</li>").appendTo("ul ul:first");

  // 2) Prepending elements to existing elements.
  // -> This adds elements as the first children of a given element
  // Prepend a new list item to the start of the first sub list
  $("ul ul:first").prepend("<li>First sub item</li>");

  // Other way to achieve the same effect
  $("<li>Very first sub item</li>").prependTo("ul ul:first");

  // 3) Adding elements as siblings of existing elements

  // Add a new elements after an existing one (as next sibling)
  $(".red-box").after("<div class='red-box'>Red 2</div>");

  // Add a new elements before an existing one (as previous sibling)
  $(".blue-box").before("<div class='blue-box'>Blue 2</div>");

  // You can also use a callback function to construct more complex
  // elements to add to the DOM
  $(".green-box").after(function() {
    // Maybe more complex string of new element(s)
    return "<div class='green-box'>Green 2</div>";
  });

  // 4) Add existing elements to other existing elements
  // -> This will move the added element, so the original vanishes

  // For instance, add the #list after the first paragraph (removes it from its
  // original position).
  // In case it's added to multiple elements, jQuery must clone the added element.
  $("p:first").after($("#list"));
});

//$(function () {

  // Replace each selected item with another one.
  // For instance, replace all <p> tags with another one.
  //$("p:first").replaceWith("<p>I've been replaced.</p>")

  // Again, to construct more complex elements, you may want
  // to do that in a callback function:
  //$("p:last").replaceWith(function() {
    //return "<p>Complex new paragraph...</p>";
  //});

  // Also, you can again replace an element with another existing
  // element which will remove it from its original position.
  //$(".red-box").replaceWith($(".blue-box"));

  // You can also replace multiple items at the same time.
  //$("li:first, li:last").replaceWith("<li>First or last list item</li>");

//});

//$(function () {

  // You can remove an existing element simply with remove().
  // For instance, the first main item:
  //$("li:first").remove();

  // If you want to reuse/re-display the element later, you should
  // use detach(). This also keeps all attached event handlers alive.
  // First, this removes the element from the DOM:
  //var detached = $("p:first").detach();
  // Next, this will re-attach the element to the DOM (at another position):
  //$("#list").after(detached);

  // To remove all elements *inside* a given elements, you can use empty().
  // The element itself remains in the DOM, so in this case the <form>.
  //$("form").empty();

//});

$(function () {

  // 1) Attributes with attr()

  // To read the current value of an attribute, use attr() with only
  // one argument: the name of the attribute you want to read.
  var link = $("#link");
  // Retrieve the value of the href attribute of the <a> tag
  // This is logged into the console. To see it, press F12 in Firefox/Chrome
  // to open the Developer Tools and click on the Console tab.
  console.log(link.attr("href"));
  // Log the value of the title attribute
  console.log(link.attr("title"));

  // To set the value of an attribute, you call the attr() function with two
  // arguments: first, the name of the attribute you want to change, and second
  // the new value:
  link.attr("href", "http://petersommerhoff.com");

  // 2) Properties with prop()

  // To read the *current* value of a checkbox for instance, you must use the
  // prop() function:
  var radioButton = $("input[type=radio]:first");
  console.log(radioButton.prop("checked"));  // false
  console.log(radioButton.attr("checked"));  // undefined

  // 3) Values with val()
  // -> Read or set the value attribute of input elements

  // To retrieve the value of an input element, simply call val()
  var email = $("input[type=email]").val();
  console.log(email);  // i@mine.me
  var number = $("input[type=range]").val();
  console.log(number);  // 3

  // To set a new value, pass the new value as an argument to val():
  $("input[type=text]").val("Peter Sommerhoff");
  $("input[type=range]").val(9);

  // If you have multiple elements selected, using val() will implicitly
  // always call first() beforehand, so only change the first input element:
  var value = $("input").val();
  console.log(value);  // Peter Sommerhoff

});

$(function () {

  // Select the <img> inside the gallery to manipulate it later
  var galleryImage = $(".gallery").find("img").first();

  // Initialize an array of all images for the gallery
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  // Now, we want to cycle through all images we have and show one after the
  // other in our gallery. For this, we create a variable i: the index of the
  // image we want to currently show.
  var i = 0;

  // setInterval will call whatever code is inside the callback function every
  // 2 seconds. This way, we can change the shown image every 2 seconds.
  setInterval(function() {
    // First, we update the index i to the next image.
    // However, we cannot simply do i = i+1 because that would quickly result in
    // indexes i = 3, 4, 5 etc which are invalid for our array.
    // So we constrain the sequence to the range 0..2 by using modulo 3 (i % 3).
    i = (i + 1) % images.length;  // i = 1, 2, 0, 1, 2, 0, ...

    // Now, we just have to change the src attribute of the <img> to the next
    // image we want to show.
    // To achieve a smooth transition, we'll actually first fadeOut the old,
    // then update the src attribute behind the scenes, and then fade it back in.
    galleryImage.fadeOut(function() {
      // Inside the callback, "this" refers to the galleryImage
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });

    // Log current image path for debugging
    console.log(galleryImage.attr("src"));

  }, 2000);

});
