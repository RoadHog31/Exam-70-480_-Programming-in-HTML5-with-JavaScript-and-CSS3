
//  <script>
   $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
$(window).load(function() {
var choices = [];

$('.rsltLink').each(function( index ) {
  choices.push($( this ).attr('id'));
});

$('#searchForCarehome').autoComplete({
    minChars: 3,
    source: function(term, suggest){
        term = term.toLowerCase();
        // var choices = ['Defoe Court', 'Highfield', '<i>...</i>'];
        var matches = [];
        for (i=0; i < choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    },
    onSelect: function(e, term, item){
	console.log(term);
	$("[id='" + term + "']")[0].click();
    }
});
  
});
// </script>

{/* <div id="search-results-list" class="container">
  <div class="row home-list"></div> */}