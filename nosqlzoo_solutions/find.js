// 1
db.world.find({name:'Germany'})

// 2
db.world.find({continent:'Eurasia'}).pretty()

// 3
db.world.find({area:43094}).pretty()

// 4
db.world.find(
    {population:{$gt:250000000}},
    {name:1,_id:0}
).pretty()

// 5
db.world.find(
  {name: {$gt: "S"}},
  {name: 1, _id: 0}
).pretty()

// 6
db.world.find(
  {population: {$gt: 70000000}},
  {name: 1, capital: 1, _id: 0}
).pretty()

// 7
db.world.find({$or:[{population:{$gt: 200000000}},
                    {population:{$lt: 20000}}]},
              {name:1,population:1,_id:0})
