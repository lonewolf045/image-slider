<h1>@lonewolf045/imageslider</h1>


[![npm (scoped)](https://img.shields.io/npm/v/imageslider?style=for-the-badge)](https://github.com/lonewolf045/image-slider)

<p>I have made a package to add an image slider if it is provided with a container division and an array containing image urls. Example is given below</p>

<pre><code>
    import imageSlider from '@lonewolf045/image-slider';
    const mainDiv = document.querySelector('#main-div');
    const imgUrl = [
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`https://vignette.wikia.nocookie.net/naruto/images/9/9b/Ichiraku_Ramen.png/revision/latest/scale-to-width-down/300?cb=20110721140943`,
        `https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F04%2Fnaruto-ramen-ichiraku-official-1.jpg?q=75&w=800&cbr=1&fit=max`,
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`https://vignette.wikia.nocookie.net/naruto/images/b/be/Ichiraku_ramen.png/revision/latest?cb=20150703064830`,
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2019/04/Ramen-Ichiraku-Feature-Image.jpg`,
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`https://i.pinimg.com/originals/f7/14/53/f714532a1d3ee470de6556b8ca23afd6.jpg`,
        `https://qph.fs.quoracdn.net/main-qimg-b11e86dd42cba180731aa1f0a2ab451c.webp`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7xLztROWPjnnD-9pmFM0bU1NLJe_96KSqBw&usqp=CAU`
    ];
    imageSlider(mainDiv,imgUrl);
</code></pre>

<div>
You just have to pass refernce to container and the array for urls of images and it generates a image slider with a pre determined style.
</div>