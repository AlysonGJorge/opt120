const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    console.log(token);
    console.log("vtnc")

    if (!token) {
        return res.status(401).json({ message: 'Token de autenticação não fornecido' });
    }

    jwt.verify(token, 'awdwadadawdawdwa', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        // Decodificado com sucesso
        req.userId = decoded.userId; // Adicione os dados do usuário decodificados ao objeto de solicitação, se necessário
        next();
    });
}

module.exports = verificarToken;
