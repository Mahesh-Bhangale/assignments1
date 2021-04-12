var chatroom1 = new Map();
chatroom1.set('A', 'Hello All');
chatroom1.set('B', 'Hi All');
chatroom1.set('C', 'Hi c');
console.log(chatroom1);
var chatroom2 = new Map();
chatroom2.set('a', 'how are you');
chatroom2.set('b', 'Good Morning');
chatroom2.set('c', 'Where are you');
console.log(chatroom2);
function users(chatroom_name) {
    chatroom_name.forEach(function (value, key) {
        console.log('${key}');
    });
}
function messages(chatroom_name) {
    chatroom_name.forEach(function (value, key) {
        console.log('${value}');
    });
}
users(chatroom1);
messages(chatroom1);
users(chatroom2);
messages(chatroom2);
