const ol = document.getElementById('ol');
const p = document.createElement('ol');
p.textContent = 'hello, World!';
ol.before('before');
p.textContent = 'hello, JavaScript!';
ol.after(p1);
