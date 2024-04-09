const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];

function createUserObjects(ids, names, images) {
    // Implement your function here
    let userObjects = ids.map((id, index) => ({
        id: id,
        name: names[index],
        image: images[index]
    }));
    return userObjects;
}

let obj = createUserObjects(ids, names, images);
console.log(obj);
