var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
}
console.log(cat);

//Add height and weight to Fluffy
cat.height = "6ft";
cat.weight = "60kg"
//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = "Fluffyy";
//List all the activities of Fluffyy’s catFriends.
for (i = 0; i < cat.catFriends.length; i++) {
    console.log(cat.catFriends[i].activities);
}
//Print the catFriends names

for (j = 0; j < cat.catFriends.length; j++) {
    console.log(cat.catFriends[j].name);
}
//Print the total weight of catFriends
var w = 0;
for (k = 0; k < cat.catFriends.length; k++) {
    w = w + cat.catFriends[k].weight
}
console.log(w);

//Print the total activities of all cats

var activ = cat.catFriends.map((item) => {
    return item.activities;
});
console.log(cat.activities, activ);

//Add 2 more activities to bar & foo cats

cat.catFriends[0].activities.push("reading");
cat.catFriends[1].activities.push("coading");


//Update the fur color of bar
cat.catFriends[0].furcolor = "black";
