$(function(){

  // Hard-coding this for now.
  catNames = ["Chloe","Whiskers","Fred","Sprite","Jack and Jill"];
  catPics = ["cat-1-300.png","cat-2-300.png","cat-3-250.png",
             "cat-4-300.png","cat-5-300.png"];

  function Cat(id, name, picture) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.counter = 0;
  }
  
  
  var model = {
    cats: [],
    init: function() {
      // Handling id locally since the cats are being stored in a database.
      for(var i = 0; i < catNames.length; i++) {
        this.cats[i] = new Cat(id=i, name=catNames[i], picture=catPics[i]);
      }
    },
    getAllCats: function() {
      return this.cats;
    },
    getCatByID: function(id) {
      return this.cats[id];
    },
    addClick: function(id) {
      var cat = this.getCatByID(id);
      cat.counter++;
      return cat.counter;
    }
    // ,
    // getCountById: function(id) {
      // var cat = this.getCatById;
      // return cat.counter;
    // }
  };


  var octopus = {
    getCats: function() {
      return model.getAllCats();
      // return model.getAllNotes().reverse();
    },
    getCat: function(id) {
      return model.getCatByID(id);
    },
    addClick(id) {
      var counter = model.addClick(id);
      return counter;
    },
    getCount(id) {
      model.getCountById(id);
    },
    displayCat(cat) {
      viewDisplay.render(cat);
    },
    init: function() {
      model.init();
      viewList.init();
      viewDisplay.init();
    }
  };


  var viewList = {
    createListItem: function(cat) {
      // Generate an item for the list of cat names:
      var htmlStr = "<li>";
      htmlStr += "<a id='cat-name-" + cat.id + "' href='#' class='cat-name'>";
      htmlStr += cat.name;
      htmlStr += "</a>";
      htmlStr += "</li>";
      this.catList.append(htmlStr);

      // Add listener to display the selected cat:
      $("#cat-name-" + cat.id).click(function(innerCat) {
        return function() {
          octopus.displayCat(innerCat);
        }
      }(cat));
    },
    init: function() {
      this.catList = $("#cat-list");
      viewList.render();
    },
    render: function() {
      var cats = octopus.getCats();
      for(var i = 0; i < cats.length; i++) {
        this.createListItem(cats[i]);
      }

      // for(var i = 0; i < catNames.length; i++) {
        // htmlStr += this.createListItem(cats[i]);
      // }
      // this.catList.append(htmlStr);
      
      // octopus.getCats().forEach(function(cat) {
        // // var self = this;
        // htmlStr += self.createListItem(cat);
      // });
    }
  };
  
 
  var viewDisplay = {
    currentCat: null,     
    init: function() {
      this.catDisplay = $("#cat-display");
      this.catElem = $("#cat");
    },
    render: function(cat) {
      this.catElem.remove();
      
      var htmlStr = "<h2>" + cat.name + "</h2>";
      htmlStr += "<a href='#'>";
      htmlStr += "<img id='cat-img-" + cat.id + "' src='images/";
      htmlStr += cat.picture + "'></a>";
      htmlStr += "<div>";
      htmlStr += "<h2 class='inline'></h2>";
      htmlStr += "<h2 class='inline'>clicks:</h2>";
      htmlStr += "<h2 id='cat-counter' class='inline'>";
      htmlStr += cat.counter + "</h2>";
      htmlStr += "</div>";
      this.catDisplay.append(htmlStr);

      $("#cat-img-" + cat.id).click(function(innerCat) {
        return function() {
          var newClick = octopus.addClick(cat.id);
          $("#cat-counter").text(newClick);
        };
      }(cat));
    }
  };

  
  octopus.init();
  // console.log(model.cats);
});





// var numOfCats = 5;
// var catNames = ["Chloe","Whiskers","Fred","Sprite","Jack and Jill"];
// var catPics = ["cat-1-300.png","cat-2-300.png","cat-3-250.png",
               // "cat-4-300.png","cat-5-300.png"];
// var counters = [];
// var currentCat;


// function createCat(num) {
  // var cat = "<div id='cat'>";
  // cat += "<h2>" + catNames[num] + "</h2>";
  // cat += "<a href='#'><img id='cat-img-" + num + "' src='images/" + catPics[num] + "'></a>";
  // cat += "<div>";
  // cat += "<h2 class='inline'></h2>";
  // cat += "<h2 class='inline'> clicks:</h2>";
  // cat += "<h2 id='cat-counter-" + num + "' class='inline'>" + counters[num] + "</h2>";
  // cat += "</div>";
  // cat += "</div>";
  // return cat;
// }

// // var catList = [];
// var catList = $("#cat-list");
// for(var i = 0; i < numOfCats; i++) {
  // var item = "<li>";
  // item += "<a id='cat-name-" + i + "' href='#' class='cat-name'>";
  // item += catNames[i];
  // item += "</a>";
  // item += "</li>";
  // catList.append(item);

  // // Set up the counter for this cat:
  // counters[i] = 0;
  
  // // Display the selected cat:
  // $("#cat-name-" + i).click(function(catNum) {
    // return function() {
      // // Create an element for this cat:
      // var catElem = createCat(catNum);

      // if(catNum != currentCat) {
        // currentCat = catNum;
        // $("#cat").remove();
        // $("#cat-container").append(catElem);
      // }

      // // Keep track of clicks:
      // $("#cat-img-" + catNum).click(function(catNum) {
        // return function() {
          // counters[catNum]++;
          // console.log("ok");
          // $("#cat-counter-" + catNum).text(counters[catNum]);
        // };
      // }(catNum));

    // }
  // }(i));
// }








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
