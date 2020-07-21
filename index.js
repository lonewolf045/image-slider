// const mainDiv = document.querySelector('#main-div');

// const imgUrl = [
//     `https://vignette.wikia.nocookie.net/naruto/images/9/9b/Ichiraku_Ramen.png/revision/latest/scale-to-width-down/300?cb=20110721140943`,
//     `https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F04%2Fnaruto-ramen-ichiraku-official-1.jpg?q=75&w=800&cbr=1&fit=max`,
//     `https://vignette.wikia.nocookie.net/naruto/images/b/be/Ichiraku_ramen.png/revision/latest?cb=20150703064830`,
//     `https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2019/04/Ramen-Ichiraku-Feature-Image.jpg`,
//     `https://i.pinimg.com/originals/f7/14/53/f714532a1d3ee470de6556b8ca23afd6.jpg`,
//     `https://qph.fs.quoracdn.net/main-qimg-b11e86dd42cba180731aa1f0a2ab451c.webp`,
//     `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7xLztROWPjnnD-9pmFM0bU1NLJe_96KSqBw&usqp=CAU`
// ];

module.exports = function imageSlider(mainDiv , imgUrl) {
    let i = 0;
    const sliderDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const leftArrow = document.createElement('button');
    const rightArrow = document.createElement('button');
    const dotDiv = document.createElement('div');
    for(let i = 0; i < imgUrl.length; i++) {
        dotDiv.innerHTML += `<span class="w3-badge demo w3-border w3-transparent w3-hover-white" id = '${i}' style = 'height: 20px; margin: 0px 5px; width: 20px;'></span>`;
    }
    const spans = dotDiv.querySelectorAll('span');
    leftArrow.innerHTML = '&#10094;';
    rightArrow.innerHTML = '&#10095;';
    imgDiv.setAttribute('id','image');
    imgDiv.innerHTML = `<img id = 'img' src = "${imgUrl[0]}">`;
    spans[0].classList.add('w3-white');
    // let timeRefernce;
    // const recur = () => {
    //     i = ((i + 1) % imgUrl.length);
    //     imgDiv.childNodes[0].src = imgUrl[i];
    //     timeRefernce = window.setTimeout(recur,5000);
    // }
    // recur();

    rightArrow.addEventListener('click', () => {
        
        // window.clearTimeout(timeRefernce);
        //console.log(i);
        i = ((i + 1) % imgUrl.length);
        //console.log(imgUrl.length);
        imgDiv.childNodes[0].src = imgUrl[i];
        //setTimeout(recur,5000);
        spans.forEach(span1 => {
            console.log('triggered');
            span1.classList.remove('w3-white');
        });
        spans[i].classList.add('w3-white');
        // window.setTimeout(recur,5000);
    });

    leftArrow.addEventListener('click', () => {
        // window.clearTimeout(timeRefernce);
        i = ((i - 1) % imgUrl.length);
        if(i < 0) {
            i = imgUrl.length - 1;
        }
        console.log(i);
        spans.forEach(span1 => {
            console.log('triggered');
            span1.classList.remove('w3-white');
        });
        spans[i].classList.add('w3-white');
        imgDiv.childNodes[0].src = imgUrl[i];
        // window.setTimeout(recur,10000);
    });

    
    spans.forEach(span => {
        span.hover = 0;
        span.addEventListener('click', () => {
            spans.forEach(span1 => {
                console.log('triggered');
                span1.classList.remove('w3-white');
            });
            imgDiv.childNodes[0].src = imgUrl[new Number(span.id)];
            span.classList.add('w3-white');
        });
        // span.addEventListener('mouseover', () => {
        //     span.hover = 1;
        //     // imgDiv.childNodes[0].src = imgUrl[new Number(span.id)];
        //     span.style.backgroundColor = 'white';
        // });
        // // if(span.hover == 1) {
        //     span.addEventListener('mouseout', () => {
        //         console.log('triggered');
        //         // imgDiv.childNodes[0].src = imgUrl[new Number(span.id)];
        //         span.style.background = 'none';
        //         span.hover = 0;
        //     });
        // // }
    });
    dotDiv.style.backgroundColor = 'rgba(0,0,0,0.7)';
    sliderDiv.style.display = 'flex';
    sliderDiv.style.position = 'relative';
    sliderDiv.style.width = '600px';
    sliderDiv.style.height = '300px';
    imgDiv.style.width = '600px';
    imgDiv.style.height = '300px';
    leftArrow.style.position = 'absolute';
    leftArrow.style.height = '300px';
    leftArrow.style.width = '50px';
    leftArrow.style.left = '0px';
    leftArrow.style.backgroundColor = `rgba(255,255,255,0)`;
    leftArrow.style.border = `none`;
    leftArrow.style.color = `white`;
    leftArrow.style.fontWeight = `900`;
    rightArrow.style.position = 'absolute';
    rightArrow.style.height = '300px';
    rightArrow.style.width = '50px';
    rightArrow.style.right = '0px';
    rightArrow.style.backgroundColor = `rgba(255,255,255,0)`;
    rightArrow.style.border = `none`;
    rightArrow.style.color = `white`;
    rightArrow.style.fontWeight = `900`;
    dotDiv.style.width = '600px';
    dotDiv.style.height = '300px';
    dotDiv.style.position = 'absolute';
    dotDiv.style.bottom = '0px';
    dotDiv.style.left = '0px';
    dotDiv.style.right = '0px';
    dotDiv.style.height = '40px';
    dotDiv.style.padding = '10px';
    dotDiv.style.display = 'flex';
    dotDiv.style.justifyContent = 'center';
    // mainDiv.appendChild(imgDiv);
    sliderDiv.appendChild(leftArrow);
    sliderDiv.appendChild(imgDiv);
    sliderDiv.appendChild(rightArrow);
    sliderDiv.appendChild(dotDiv);
    mainDiv.appendChild(sliderDiv);
    const img = imgDiv.querySelector('#img');
    img.style.width = '600px';
    img.style.height = '300px';
}

// module.exports = imageSlider;

// imageSlider(mainDiv,imgUrl);
