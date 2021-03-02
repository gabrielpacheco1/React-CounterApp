const getImagen=async()=>{ //el await debe estar dentro de un async

    try {
        const apiKey='ZawrqsOUEvOtzQcBOG2zdRpaoh78YsDr';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data}= await respuesta.json();
        const {url}=data.images.original;
        console.log(url);

        const img=document.createElement('img');
        img.src=url;

        document.body.append(img);
    } catch (error) {
        //manejo de error
    }
    
}

getImagen();

