const players = ['adib', 'tawhid', 'nijhu', 'hoga'];
const oddFriends = players.filter(frnd => frnd.length % 2 === 1);/**filter usually return the elments that fulfill the consditions
here it checks if the length of the name is odd or not if its odd it will return the name */
console.log(oddFriends);

const heights = [56, 67, 45, 65, 72, 75, 60];

const selected = heights.filter(h => h >= 60)
console.log(selected)

//find
/**the main difference between filter and find is filters return all the elements that matches the consditions
 * but find returns only the 1st emement that matches the condition
 * filter will return an array but find will return only a element 
 */
const selected2=heights.find(h=> h>=70)/**here it is getting 72 at first so it is printing only 72 not 75 */
console.log(selected2)
