$(function(){
  var model = {
    // Hard-coding the data:
    catNames: ["Chloe","Whiskers","Fred","Sprite","Jack and Jill"],
    catPics: ["cat-1-300.png","cat-2-300.png","cat-3-250.png",
              "cat-4-300.png","cat-5-300.png"],
    counters: [0,0,0,0,0],

    init: function() {
      if (!localStorage.notes) {
        localStorage.notes = JSON.stringify([]);
      }
    },
    add: function(obj) {
      var data = JSON.parse(localStorage.notes);
      data.push(obj);
      localStorage.notes = JSON.stringify(data);
    },
    getAllNotes: function() {
      return JSON.parse(localStorage.notes);
    }
  };


  var octopus = {
    addNewNote: function(noteStr) {
      model.add({
        

        
        // cat name, clickCount, image url
        content: noteStr,
        dateSubmitted: Date.now()
      });
      view.render();
    },

    getNotes: function() {
      return model.getAllNotes();
      // return model.getAllNotes().reverse();
    },

    init: function() {
      model.init();
      view.init();
    }
  };


  var view = {
    init: function() {
      this.noteList = $('#notes');
      var newNoteForm = $('#new-note-form');
      var newNoteContent = $('#new-note-content');
      newNoteForm.submit(function(e){
          octopus.addNewNote(newNoteContent.val());
          newNoteContent.val('');
          e.preventDefault();
      });
      view.render();
    },
    render: function(){
      var htmlStr = '';
      octopus.getNotes().forEach(function(note){
            htmlStr += '<li class="note">';
            htmlStr += '<span class="note-date">';
            htmlStr += new Date(note.dateSubmitted).toString();
            htmlStr += '</span>';
            htmlStr += note.content + '</li>';
      });
      this.noteList.html( htmlStr );
    }
  };

  octopus.init();
  console.log(model.catNames);
});





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
