exports.paginaInicial = (req, res) =>{
    res.send(
        `<form action="/" method="POST">
        Nome do Cliente:<input type="text" name="nome"/>
        <button>Olá mundo</button>
        </form>`
    )
}

exports.trataPost= (req, res)=>{
    res.send('Nova rota')
}