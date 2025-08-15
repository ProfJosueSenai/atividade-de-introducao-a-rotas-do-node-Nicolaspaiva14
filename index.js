const http = require('http');
const porta = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log('URL solicitada:', url);

    // Configura charset UTF-8
    const cabecalho = { 'Content-Type': 'text/html; charset=utf-8' };

    if (url === '/') {
        res.writeHead(200, 'OK', cabecalho);
        res.end(`
            <h1>Mercadinho da Juju</h1>
            <ul>
                <li><a href="/frutas">Frutas</a></li>
                <li><a href="/verduras">Verduras</a></li>
                <li><a href="/carnes">Carnes</a></li>
                <li><a href="/bebidas">Bebidas</a></li>
            </ul>
        `);
    } 
    else if (url === '/frutas') {
        res.writeHead(200, 'OK', cabecalho);
        res.end(`
            <h1>Frutas</h1>
            <ul>
                <li>maçã</li>
                <li>banana</li>
                <li>laranja</li>
            </ul>
            <a href="/">Voltar</a>
        `);
    } 
    else if (url === '/verduras') {
        res.writeHead(200, 'OK', cabecalho);
        res.end(`
            <h1>Verduras</h1>
            <ul>
                <li>alface</li>
                <li>rúcula</li>
            </ul>
            <a href="/">Voltar</a>
        `);
    } 
    else if (url === '/carnes') {
        res.writeHead(200, 'OK', cabecalho);
        res.end(`
            <h1>Carnes</h1>
            <ul>
                <li>frango</li>
                <li>carne bovina</li>
                <li>peixe</li>
            </ul>
            <a href="/">Voltar</a>
        `);
    } 
    else if (url === '/bebidas') {
        res.writeHead(200, 'OK', cabecalho);
        res.end(`
            <h1>Bebidas</h1>
            <ul>
                <li>água</li>
                <li>suco de laranja</li>
                <li>refrigerante</li>
            </ul>
            <a href="/">Voltar</a>
        `);
    }
    else {
        res.writeHead(404, 'Página não encontrada', cabecalho);
        res.end(`
            <h1>Página não encontrada</h1>
            <a href="/">Voltar para o início</a>
        `);
    }
});

server.listen(porta, () => {
    console.log('Servidor rodando');
    console.log(`Endereço: http://localhost:${porta}`);
});