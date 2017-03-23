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
  };


  var octopus = {
    getCats: function() {
      return model.getAllCats();
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
    }
  };
  
 
  var viewDisplay = {
    currentCatID: null,     
    init: function() {
      this.catDisplay = $("#cat-display");
    },
    render: function(cat) {
      if(this.currentCatID != cat.id) {
        this.currentCatID = cat.id;
        
        this.catDisplay.empty();
        
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
    }
  };

  
  octopus.init();
});
