let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);
secretMessage.pop();

console.log(secretMessage.length);
secretMessage.push('to','Program');

const easily =secretMessage.indexOf('easily');
secretMessage[easily] = 'right';
console.log(secretMessage[easily]);

console.log(secretMessage[0]);
secretMessage.shift();
console.log(secretMessage[0]);

secretMessage.unshift('Programming');
console.log(secretMessage[0]);


console.log(secretMessage.indexOf('get'));
secretMessage.splice(6, 5, 'know' );
console.log(secretMessage.join());