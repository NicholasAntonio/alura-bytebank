async function conectaAPI(){
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    const conectaFormatado = await conecta.json();
    postMessage(conectaFormatado.USDBRL);
}

addEventListener('message', () =>{
    conectaAPI();
    setInterval(()=> conectaAPI(), 5000);
})