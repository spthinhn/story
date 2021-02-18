function backPage(page) {
  var pages = document.getElementsByClassName('page');
  for(var i = page-2; i < pages.length; i++) {
    pages[i].classList.remove('flipped');
  }
}

function removeFlipped() {
  var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('flipped');
  }
}

function addFlipped(page) {
 var pages = document.getElementsByClassName('page');
  for(var i = 0; i < (page+1); i++) {
    pages[i].classList.add('flipped');
  }
}


function initPageActions() {
  var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++)
      {
        var page = pages[i];
        if (i % 2 === 0)
          {
            page.style.zIndex = (pages.length - i);
          }
      }
    for(var i = 0; i < pages.length; i++)
    {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick=function()
        {
          if (this.pageNum == 2 || (this.pageNum+1) == end) {
            document.getElementById("pages").classList.remove('shadow');
          } else {
            document.getElementById("pages").classList.add('shadow');
          }
          if ((this.pageNum+1) == end) {
            document.getElementById("end").classList.add('shadow');
          }
          if (this.pageNum % 2 === 0)
            {
              backPage(this.pageNum);
            }
          else
            {
              removeFlipped();
              addFlipped(this.pageNum);
            }
         }
      }
}


function loadPage(page) {
  fetch("/pages/"+page+".html").then(function(response) {
      return response.text();
  }).then(function(string) {
    var elem = document.getElementById("pages");
    elem.insertAdjacentHTML( 'beforeend',string);
    if (page == first) {
      document.getElementById("start").classList.add('shadow');
    }
    if (page == end) {
      initPageActions();
    } else {
      loadPage(page+1);
    }
  }); 
}

function initPages() {
  document.getElementById("start").classList.add('shadow');
  // loadPage(first);
  initPageActions();
}