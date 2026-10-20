const express = require('express');
const app = express();
const PORT = 8081;

// Configurar o EJS como motor de visualização (view engine)
app.set('view engine', 'ejs');

// Configurar a pasta pública para arquivos estáticos (CSS, imagens)
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
    res.render('index');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em: http://localhost:${PORT}`);
});