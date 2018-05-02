let doggos = [
  {
    "label": "golden retriever",
  	"name": "good boy",
  	"article": "a",
  	"description": "good boys r the most loyal of the doggos. they'll do anything to make a happy."
  },
  {
    "label": "pug",
  	"name": "doug",
  	"article": "a",
  	"description": "dougs like pizza. they also are chinese but they like pizza more than chinese food."
  },
  {
    "label": "german shepherd dog",
  	"name": "justice borker",
  	"article": "a",
  	"description": "shouldnt need this"
  },
  {
  	"label": "pit bull",
  	"name": "muscle boi",
  	"article": "a",
  	"description": "lookin like a mean. lovin like a love."
  },
  {
    "label": "shiba inu",
    "name": "classic doge",
    "article": "a",
    "description": "such special. wow. very detect."
  },
  {
  	"label": "maltese",
  	"name": "jabba boo",
  	"article": "a",
  	"description": "just a boo doin a shag."
  },
  {
    "label": "rottweiler",
    "name": "beef borkington",
    "article": "a",
    "description": "lookin for beef, doin a borkin"
  },
  {
    "label": "st bernard",
    "name": "rescue fluff",
    "article": "a",
    "description": "likes doin' a rescue. prefers the snoozins",
  },
  // labrador retriever works for black, yellow, and chocolate lab.
    {
    "label": "labrador retriever",
    "name": "bring backy friendo",
    "article": "a",
    "description": "im a friendo, of the nilla variety"
  },
    {
    "label": "siberian husky",
    "name": "snowy howler",
    "article": "a",
    "description": "when the skys doin a snow, i make a howl"
  },
   {
    "label": "standard poodle",
    "name": "foo foo poofer",
    "article": "a",
    "description": "just a poof doin a fancy"
  },
    {
    "label": "pomeranian",
    "name": "yippie puffler",
    "article": "a",
    "description": ""
  },
    {
    "label": "yorkshire terrier",
    "name": "cozy pipler",
    "article": "a",
    "description": ""
  },
    {
    "label": "chihuahua",
    "name": "tremblemeister",
    "article": "a",
    "description": ""
  },
    {
    "label": "shar pei",
    "name": "rip van wrinkler",
    "article": "a",
    "description": ""
  },
    {
    "label": "bulldog",
    "name": "power crumple",
    "article": "a",
    "description": ""
  },
      {
    "label": "puggle",
    "name": "sophistisquisher",
    "article": "a",
    "description": ""
  },
      {
    "label": "boxer",
    "name": "pummel thump",
    "article": "a",
    "description": ""
  },
      {
    "label": "jack russell terrier",
    "name": "smooth detecto",
    "article": "a",
    "description": ""
  },
      {
    "label": "french bulldog",
    "name": "Garcon Pierres",
    "article": "a",
    "description": ""
  },
       {
    "label": "dachshund",
    "name": "speed schweiner",
    "article": "a",
    "description": ""
  },
        {
    "label": "german shorthaired pointer",
    "name": "speckled finder",
    "article": "a",
    "description": ""
  },
        {
    "label": "dobermann",
    "name": "scary long boi",
    "article": "a",
    "description": ""
  },
        {
    "label": "great dane",
    "name": "heafty whopper",
    "article": "a",
    "description": ""
  },
        {
    "label": "shih tzu",
    "name": "bittle pip",
    "article": "a",
    "description": ""
  },
     {
    "label": "spaniel",
    "name": "royal wave boi",
    "article": "a",
    "description": ""
  },
    {
    "label": "australian shepherd",
    "name": "spotty rogue getter",
    "article": "a",
    "description": ""
  },
    {
    "label": "welsh corgi",
    "name": "loafie corgo",
    "article": "a",
    "description": ""
  },
    {
    "label": "newfoundland",
    "name": "floofie mlembo",
    "article": "a",
    "description": ""
  },
  
]

function getDoggo(label) {
  return new Promise(function(resolve, reject) {
    let doggo = doggos.find( function( result ){
      if (result.label == label) {
        result.found = true
        return resolve(result)
      }
    })
    
    if (!doggo) {
      return resolve({
        found: false
      })
    }
  });
}
