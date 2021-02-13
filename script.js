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
          if (this.pageNum % 2 === 0)
            {
              this.classList.remove('flipped');
              this.previousElementSibling.classList.remove('flipped');
            }
          else
            {
              this.classList.add('flipped');
              this.nextElementSibling.classList.add('flipped');
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
    if (page == end) {
      initPageActions();
    } else {
      loadPage(page+1);
    }
  }); 
}

function initPages() {
  loadPage(first);
}