//Import
import fetch from 'node-fetch';
import express from 'express';
const app = express();

app.get('/count', async (req, res) => {
    res.set({
        'content-type': 'image/png',
        'cache-control': 'max-age=0, no-cache, no-store, must-revalidate'
    })

    const img = await ((await fetch('"https://counter2.optistats.ovh/private/compteurdevisite.php?c=dnam55dyx74mjjfxd96ft86wupxljs4b'))).arrayBuffer();

    res.end(new Uint8Array(img), 'binary');
});

app.listen(3000, () => console.log('Ready!'));
