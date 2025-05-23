const http = require('http');
const url = require('url');

const userData = {
    ivanenko: {
        surname: "Іваненко",
        name: "Олег",
        course: "3",
        group: "ІС-45"
    },
    petrenko: {
        surname: "Петренко",
        name: "Ірина",
        course: "2",
        group: "ІС-22"
    },
    taracenko: {
        surname: "Тарасенко",
        name: "Катерина",
        course: "4",
        group: "ІС-02"
    }
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const login = parsedUrl.query.login;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if (!login) {
        res.end(`
            <html>
                <head><title>Введення логіна</title></head>
                <body>
                    <h2>Введіть логін у Moodle:</h2>
                    <form method="GET">
                        <input type="text" name="login" placeholder="Логін" required />
                        <button type="submit">Пошук</button>
                    </form>
                </body>
            </html>
        `);
    } else if (userData[login]) {
        const user = userData[login];
        res.end(`
            <html>
                <head><title>Дані користувача</title></head>
                <body>
                    <h2>Дані для логіна: ${login}</h2>
                    <p><strong>Прізвище:</strong> ${user.surname}</p>
                    <p><strong>Ім'я:</strong> ${user.name}</p>
                    <p><strong>Курс:</strong> ${user.course}</p>
                    <p><strong>Група:</strong> ${user.group}</p>
                    <a href="/">Повернутись</a>
                </body>
            </html>
        `);
    } else {
        res.end(`
            <html>
                <head><title>Користувача не знайдено</title></head>
                <body>
                    <h2>Користувача з логіном "${login}" не знайдено.</h2>
                    <a href="/">Спробувати ще раз</a>
                </body>
            </html>
        `);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
