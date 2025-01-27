let d = Date();

d = new Date(2021, 6, 10, 12, 5, 3);

d = new Date();

d = d.getMonth() + 1;

let x;

let z = new Date();

x = z.getFullYear();
x = z.getMonth() + 1;

x = Intl.DateTimeFormat('en-US').format(z);

x = z.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});

console.log(x);
