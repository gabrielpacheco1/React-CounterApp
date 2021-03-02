const apiKey='ZawrqsOUEvOtzQcBOG2zdRpaoh78YsDr';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp=>resp.json()) //retorna un apromesa, por eso tiene su then (el de abajo)
    .then(({data})=>{
        const {url}=data.images.original;
        //console.log(url)
        const img=document.createElement('img');
        img.src=url;

        document.body.append(img);
    })
    .catch(console.warn);