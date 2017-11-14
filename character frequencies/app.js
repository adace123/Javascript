// write your code here!
let wordSplitUnique = [];

d3.select('form').on('submit',function(){
   d3.event.preventDefault();
   let word = d3.select('input').property('value');
   d3.select('#phrase').text('Analysis of: ' + word);
   wordSplitUnique = Array.from(new Set(word.split("")));
   
   d3.select('#count').text("(Unique characters: " + wordSplitUnique.length + ")");
   d3.select('#letters').selectAll("div").remove()
   
    d3.select('#letters').selectAll("div")
   .data(wordSplitUnique.sort())
   .enter()
   .append("div")
   .classed('letter',true)
   .style('width','20px')
   .style('margin-right','5px')
   .style('line-height','20px')
   .style('height', function(letter) {
       return count(word.split(""),letter) * 20 + 'px'
   })
   .text(function(letter){
       return letter;
   })
   .property('title', function(letter) {
       return count(word.split(""),letter) + " occurrence(s)";
   })

});

function count(arr, element) {
    return arr.filter(e => e === element).length;
}
