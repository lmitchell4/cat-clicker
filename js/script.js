
var numOfCats = 5;
var catNames = ["Chloe","Whiskers","Fred","Sprite","Jack and Jill"];
var catPics = ["cat-1-300.png","cat-2-300.png","cat-3-250.png",
               "cat-4-300.png","cat-5-300.png"];
var counters = [];
var currentCat;


function createCat(num) {
  var cat = "<div id='cat'>";
  cat += "<h2>" + catNames[num] + "</h2>";
  cat += "<a href='#'><img id='cat-img-" + num + "' src='images/" + catPics[num] + "'></a>";
  cat += "<div>";
  cat += "<h2 class='inline'></h2>";
  cat += "<h2 class='inline'> clicks:</h2>";
  cat += "<h2 id='cat-counter-" + num + "' class='inline'>" + counters[num] + "</h2>";
  cat += "</div>";
  cat += "</div>";
  return cat;
}

// var catList = [];
var catList = $("#cat-list");
for(var i = 0; i < numOfCats; i++) {
  var item = "<li>";
  item += "<a id='cat-name-" + i + "' href='#' class='cat-name'>";
  item += catNames[i];
  item += "</a>";
  item += "</li>";
  catList.append(item);

  // Set up the counter for this cat:
  counters[i] = 0;
  
  // Display the selected cat:
  $("#cat-name-" + i).click(function(catNum) {
    return function() {
      // Create an element for this cat:
      var catElem = createCat(catNum);

      if(catNum != currentCat) {
        currentCat = catNum;
        $("#cat").remove();
        $("#cat-container").append(catElem);
      }

      // Keep track of clicks:
      $("#cat-img-" + catNum).click(function(catNum) {
        return function() {
          counters[catNum]++;
          console.log("ok");
          $("#cat-counter-" + catNum).text(counters[catNum]);
        };
      }(catNum));

    }
  }(i));
}

// var catOneName = "Chloe's";
// $("#cat-1-name").text(catOneName);
// var counter1 = 0;
// $("#cat-1").click(function(e) {
  // counter1++;
  // $("#count-1").text(counter1);
// });

// var catTwoName = "Kitty's";
// $("#cat-2-name").text(catTwoName);
// var counter2 = 0;
// $("#cat-2").click(function(e) {
  // counter2++;
  // $("#count-2").text(counter2);
// });


// var nums = [1,2,3];

// // Let's loop over the numbers in our array
// for (var i = 0; i < nums.length; i++) {

  // // This is the number we're on...
  // var num = nums[i];

  // // We're creating a DOM element for the number
  // var elem = document.createElement('div');
  // elem.textContent = num;

  // // ... and when we click, alert the value of `num`
  // elem.addEventListener('click', (function(numCopy) {
      // return function() {
          // alert(numCopy);
      // };
  // })(num));

  // document.body.appendChild(elem);
// };





// function loadData() {

    // var $body = $("body");
    // var $wikiHeaderElem = $("#wikipedia-header");
    // var $wikiElem = $("#wikipedia-links");
    // var $nytHeaderElem = $("#nytimes-header");
    // var $nytElem = $("#nytimes-articles");
    // var $greeting = $("#greeting");

    // // clear out old data before new request
    // $wikiElem.text("");
    // $nytElem.text("");

    // // load streetview
    // var streetStr = $("#street").val();
    // var cityStr = $("#city").val();
    // var address = streetStr + "," + cityStr;

    // $greeting.text("So, you want to live at " + address + "?");

    // streetViewStr = '<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x400&location=';
    // streetViewStr += address + '">';
    // $body.append(streetViewStr);


    // // // load NY Times articles:
    // // var nytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    // // nytUrl += "?" + $.param({
      // // "api-key": nytimes_api_key
    // // });

    // // $.getJSON(nytUrl, function(data) {

      // // $nytHeaderElem.text("New York Times Articles About " + cityStr);

      // // var articles = data.response.docs;
      // // var items = [];
      // // $.each(articles, function(key, article) {
        // // var article_item = "<li class='article'>";
        // // article_item += "<a href='" + article.web_url + "'>";
        // // article_item += article.headline.main;
        // // article_item += "</a>";
        // // article_item += "<p>" + article.snippet + "</p>";
        // // article_item += "</li>";
        // // items.push(article_item);
      // // });

      // // var final_list = items.join("");
      // // $nytElem.append(final_list);

      // // // $("<ul/>", {
        // // // // "id": "nytimes-articles",
        // // // "class": "my-new-list",
        // // // html: items.join("")
      // // // }).appendTo($("#nytimes-articles"));

    // // }).done(function() {
    // // }).fail(function() {
        // // $nytHeaderElem.text("New York Times Articles Could Not Be Loaded");
    // // });


    // // load Wikipedia articles:
    // var wikiRequestTimeout = setTimeout(function() {
      // $wikiElem.text("Failed to get Wikipedia resources");
    // }, 8000);

    // $.ajax({
      // url: "http://en.wikipedia.org/w/api.php",
      // data: {
        // action: "query",
        // list: "search",
        // srsearch: cityStr,
        // format: "json"
      // },
      // dataType: "jsonp",
      // // jsonp: "callback",
      // success: function (data) {

        // $wikiHeaderElem.text("Wikipedia Articles About " + cityStr);
        // var articles = data.query.search;
        // console.log(data);

        // var items = [];
        // $.each(articles, function(key, article) {
          // url = "http://en.wikipedia.org/wiki/" + article.title;
          // var article_item = "<a href='" + url + "'>";
          // article_item += article.title;
          // article_item += "</a>";
          // items.push(article_item);
        // });

        // var final_list = items.join("");
        // $wikiElem.append(final_list);

        // clearTimeout(wikiRequestTimeout);
      // }
    // });

  // return false;
// };
// // $('#form-container').submit(loadData);
// $('#submit-btn').click(loadData);
