function printing() {
	console.log(1);
	setTimeout(() => console.log(2), 1000);
	setTimeout(() => console.log(3), 0);
	Promise.resolve().then(() => console.log(4));
	console.log(5);
}

printing();
setTimeout(() => console.log(6), 50);