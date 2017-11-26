// 1
db.world.aggregate([
    {$match:{
        population:{$gte:200000000}
    }},
    {$project:{
        _id:0,
        name:1,
        "per capita GDP": {$divide: ['$gdp','$population']}
    }}
])

// 2
db.world.aggregate([
    {$match:{continent:'South America',area:{$ne:0}}},
    {$project:{
        _id:0,
        name:1,
        density: {$divide: ["$population","$area"]}
    }},
])

// 3
db.world.aggregate([
    {$match:{name:{$gt:'V'},area:{$ne:0}}},
    {$project:{
        _id:0,
        name:1,
        density: {$divide: ["$population","$area"]}
    }},
])

// 4
db.world.aggregate([
    {$match:{
         continent: 'South America'
    }},
    {$project:{
        _id:0,
        name:1,
        population: {$divide: ["$population", 1000000]}
    }}
])

// 5
db.world.aggregate([
    {$match:{
        name: {$in:['France','Germany','Italy']},
        population: {$ne: null},
        area: {$ne: 0}
    }},
    {$project:{
        _id:0,
        name:1,
        "population density": {$divide: ["$population", "$area"]}
    }}
])

// 6 
db.world.aggregate([
    {$group:{
        _id:"$continent",
        area:{$sum: "$area"}
    }},
    {$sort:{
        area: -1
    }},
    {$project:{
        _id:1,
        area:1
    }}
])

// 7
db.world.aggregate([
  {$group: {
      _id: "$continent",
      area: {$sum: "$area"}
  }},
  {$match:{
      area: {$gt: 25000000}
  }},
  {$sort: {
      area: -1
  }},
  {$project:{
      _id:1,
      area: 1
  }}
])

// 8
db.world.aggregate([
  {$group:{
      _id:"$continent",
      from: {$first:"$name"},
      to: {$last:"$name"}
  }},
  {$sort:{
      _id:1
  }},
  {$project: {
      _id: 1,
      from: 1,
      to: 1
  }}
])

// 9
db.world.aggregate([
    {$group:{
     _id:{$substr:['$name',0,1]},
    list: {$push: "$name"}
    }},
    {$match:{_id:{$gte:'U'}}},
    {$sort:{_id:1}},
    {$project:{_id: 1, list: 1}}
])

// 10
db.world.aggregate([
    {$group:{
        _id:{
            $cond: [{$eq:["$continent","North America"]},"America",
                {$cond: [{$eq:["$continent","South America"]},"America","$continent"]}]
        },
        area:{$sum: "$area"}
    }},
    {$sort:{
        area: -1
    }},
    {$project:{
        _id:1,
        area:1
    }}
])

// 11
db.world.aggregate([
    {$match:{
        name:{$regex:"^N"}
    }},
    {$project:{
        _id:0,
        name:1,
        continent: {$cond: [{$eq:["$continent","Oceania"]},"Australasia","$continent"]}
    }}
])

// 12
db.world.aggregate([
    {$match:{
        name:{$regex:"^[AB]"}
    }},
    {$project:{
        _id:0,
        name:1,
        continent: {
           $cond: [{$or:[{$eq:["$continent","North America"]}, {$eq:["$continent","South America"]}, {$eq:["$continent","Caribbean"]}]},"America",
            {$cond: [{$or:[{$eq:["$continent","Asia"]}, {$eq:["$continent","Europe"]}]},"Eurasia","$continent"]}]
        }
    }}
])

// 13
db.world.aggregate([
    
    {$project:{
        _id:0,
        name:1,
        "original": "$continent",
        new: {
           $cond: [{$eq:["$continent","Oceania"]},"Australasia",
            {$cond: [{$or:[{$eq:["$continent","Eurasia"]}, {$eq:["$name","Turkey"]}]},"Europe/Asia",
{$cond: [{$and:[{$eq:["$continent","Caribbean"]},{$eq:[{$substr:["$name",0,1]},"B"]}]},"North America",
{$cond: [{$and:[{$eq:["$continent","Caribbean"]}, {$ne: [{$substr:["$name",0,1]},"B"]}]},"South America","$continent"]}

]}
]}
]
        }
    }}
])
