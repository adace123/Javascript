// 1
db.world.mapReduce(
   function(){emit(this.continent,this.population);},
   function(k,v){return Array.sum(v);},
   {out:{inline:1}}
)

// 2
db.world.mapReduce(
   function(){emit(1,this.population);},
   function(k,v){return Array.sum(v);},
   {out:{inline:1}}
)

// 3
db.world.mapReduce(
   function(){emit(this.continent,1);},
   function(k,v){return Array.sum(v);},
   {out:{inline:1}}
)

// 4
db.world.mapReduce(
   function(){emit(this.name[0],1);},
   function(k,v){return Array.sum(v);},
   {out:{inline:1}}
)

// 5
db.world.mapReduce(
   function(){if(this.population>100000000) emit(1,1);},
   function(k,v){return Array.sum(v);},
   {out:{inline:1}}
)

// 6
db.world.mapReduce(
   function(){emit(this.continent, this.name);},
   function(k,v){return v[0];},
   {out:{inline:1}}
)

// 7
db.world.mapReduce(
   function(){if(this.name[0] === "M" || this.capital[0] === "M") emit(1,1);},
   function(k,v){return Array.sum(v);},
   {out:{inline:1}}
)

// 8
db.world.mapReduce(
   function(){if(this.name[0] === "M" && this.capital[0] === "M") emit(1,2); else if(this.name[0] === "M" || this.capital[0] === "M") emit(1,1);},
   function(k,v){return Array.sum(v);},
   {out:{inline:1}}
)

// 9
db.world.mapReduce(
   function(){emit(this.continent,this.capital);},
   function(k,v){return v.sort()[0];},
   {out:{inline:1}}
)

// 10
db.world.mapReduce(
   function(){
     if(this.population >= 0 && this.population <= 999999)
     emit("0 TO 999,999",1);
     else if(this.population >= 1000000 && this.population <= 499999999)
     emit("1,000,000 TO 499,999,999",1);
     else emit("500,000,000 OR MORE",1)
   },
   function(k,v){return Array.sum(v);},
   {out:{inline:1}}
)
