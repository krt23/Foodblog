const arr = [{
  id: 1,
  "first_name": "Gian",
  "last_name": "Lammerich",
  "email": "glammerich0@cam.ac.uk",
  "photo": "https://robohash.org/cumquenonqui.bmp?size=50x50&set=set1"
}, {
  id: 2,
  "first_name": "Winny",
  "last_name": "Cleaveland",
  "email": "wcleaveland1@wordpress.org",
  "photo": "https://robohash.org/utquisquamad.jpg?size=50x50&set=set1"
}, {
  id: 3,
  "first_name": "Ginnie",
  "last_name": "Kewley",
  "email": "gkewley2@gov.uk",
  "photo": "https://robohash.org/etipsamet.bmp?size=50x50&set=set1"
}, {
  id: 4,
  "first_name": "Chadd",
  "last_name": "Bolesma",
  "email": "cbolesma3@ehow.com",
  "photo": "https://robohash.org/etmagnamipsum.png?size=50x50&set=set1"
}, {
  id: 5,
  "first_name": "Jena",
  "last_name": "Donnison",
  "email": "jdonnison4@arizona.edu",
  "photo": "https://robohash.org/voluptatemetcorporis.png?size=50x50&set=set1"
}, {
  id: 6,
  "first_name": "Lay",
  "last_name": "Haquin",
  "email": "lhaquin5@illinois.edu",
  "photo": "https://robohash.org/rerumquidelectus.bmp?size=50x50&set=set1"
}, {
  id: 7,
  "first_name": "Bambi",
  "last_name": "Bidgod",
  "email": "bbidgod6@vkontakte.ru",
  "photo": "https://robohash.org/voluptatemquosearum.bmp?size=50x50&set=set1"
}, {
  id: 8,
  "first_name": "Mandi",
  "last_name": "Laurenson",
  "email": "mlaurenson7@scribd.com",
  "photo": "https://robohash.org/molestiasullammolestiae.jpg?size=50x50&set=set1"
}, {
  id: 9,
  "first_name": "Carolyn",
  "last_name": "Klee",
  "email": "cklee8@dot.gov",
  "photo": "https://robohash.org/temporeoptiosuscipit.jpg?size=50x50&set=set1"
}, {
  id: 10,
  "first_name": "Rachelle",
  "last_name": "Lawless",
  "email": "rlawless9@printfriendly.com",
  "photo": "https://robohash.org/maximeperferendisesse.png?size=50x50&set=set1"
}]

//виводить парні об'єкти з масиву, створюючи новий масив
const newArr = arr.filter((item) => 
item.id % 2 === 0).map((item) => 
`${item.first_name} ${item.last_name}`);
console.log(newArr);

//виводить об'єкт з масиву, якщо перша буква імені дорівнює С
const newArr = arr.filter((item) => 
item.first_name[0] === 'C').map((item) => 
`${item.first_name} ${item.last_name}`);
console.log(newArr);

//виводить об'єкт з масиву, якщо співпадає firstName
const newArr = arr
.find((item) => item.first_name === 'Carolyn');
console.log(newArr);

//сортування з быльшого до меншого за id
arr.sort((a, b) => b.id - a.id);
console.log(arr);