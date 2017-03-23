$(function(){

  // Hard-coding this for now.
  catNames = ["Chloe","Whiskers","Fred","Sprite","Jack and Jill"];
  catPics = ["images/cat-1-300.png","images/cat-2-300.png",
             "images/cat-3-250.png","images/cat-4-300.png",
             "images/cat-5-300.png"];

  function Cat(id, name, picture) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.counter = 0;
  }
  
  
  var model = {
    currentCat: null,
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
    addClick: function() {
      this.currentCat.counter++;
    }
  };


  var octopus = {
    getCurrentCat: function() {
      return model.currentCat;
    },
    setCurrentCat: function(cat) {
      model.currentCat = cat;
    },
    getCats: function() {
      return model.getAllCats();
    },
    getCat: function(id) {
      return model.getCatByID(id);
    },
    addClick: function() {
      model.addClick();
      viewDisplay.render();
    },
    displayCat: function() {
      viewDisplay.render();
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
          octopus.setCurrentCat(innerCat);
          octopus.displayCat();
        }
      }(cat));
    },
    init: function() {
      this.catList = $("#cat-list");
      this.render();
    },
    render: function() {
      var cats = octopus.getCats();
      for(var i = 0; i < cats.length; i++) {
        this.createListItem(cats[i]);
      }
    }
  };
  
 
  var viewDisplay = {
    init: function() {
      this.catDisplay = $("#cat-display");
      this.catName = $("#cat-name");
      this.catImg = $("#cat-img");
      this.catCounter = $("#cat-counter");
      
      this.catImg.click(function() {
        octopus.addClick();
      });
    },
    render: function(cat) {
      var currentCat = octopus.getCurrentCat();
      this.catName.text(currentCat.name);
      this.catImg.attr("src", currentCat.picture);
      this.catCounter.text(currentCat.counter);
    }
  };

  
  octopus.init();
});
