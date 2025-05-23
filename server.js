const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const login = query.login || 'невідомо';

  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`
    <h1>Ваші дані:</h1>
    <p>Логін: ${login}</p>
    <p>Прізвище: Іваненко</p>
    <p>Ім’я: Олександр</p>
    <p>Курс: 3</p>
    <p>Група: КН-31</p>
  `);
}).listen(3000, () => console.log('Сервер запущено на http://localhost:3000'));
