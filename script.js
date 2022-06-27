fetch("https://apicovid19indonesia-v2.vercel.app/api/indonesia")
    .then((response) => response.json())
    .then((response)=>{
        const res= response;

        let dirawat = document.querySelector('#dirawat'),
        sembuh = document.querySelector('#sembuh'),
        positif = document.querySelector('#positif'),
        meninggal = document.querySelector('#meninggal'),
        lastUpdate = document.querySelector('.lastUpdate').innerHTML = new Date(`${res.lastUpdate}`)


        

        dirawat.querySelector('h5').innerHTML = `${res.dirawat} Jiwa`
        sembuh.querySelector('h5').innerHTML = `${res.sembuh} Jiwa`
        positif.querySelector('h5').innerHTML = `${res.positif} Jiwa`
        meninggal.querySelector('h5').innerHTML = `${res.meninggal} Jiwa`
    })