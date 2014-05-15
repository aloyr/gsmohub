jQuery.each(
  $('blockquote:contains("GSMO#"), blockquote:contains("gsmo#"), p:contains("GSMO#"), p:contains("gsmo#")'),
  function(i,val) {
    $(val).html($(val).html().replace(
      /(gsmo#)([\d]*)/i,
      function(a,b,c){
        return '<a href="http://gsmo.hidglobal.com/global-services/node/'+c+'" target="_blank">'+b+c+'</a>';
      }
    ));
  }
);
