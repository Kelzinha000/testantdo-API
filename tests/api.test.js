const axios = require('axios')

async function ApiBibliaRandom() {
    const response = await axios.get('https://www.abibliadigital.com.br/api/books')

    return response.data
}

test('Verifica se otém os dados corretamente', async ()=>{
    const data = await ApiBibliaRandom();
    expect(data).toBeDefined();
})                                          