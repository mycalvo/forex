module.exports = async (req, res) => {
    const { url, username, password } = req.query;

    if (url && username && password) {
        const redirectUrl = `${url}/get.php?username=${username}&password=${password}&type=m3u_plus`;
        res.writeHead(303, { Location: redirectUrl });
        res.end();
    } else {
        res.status(400).send('Faltan parámetros en la solicitud');
    }
};