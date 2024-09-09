// Ex 3
export let getRandomColor = () => {
    let newColor;
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    newColor =  r * 0.299 + g * 0.587 + b * 0.114;
    if(newColor > 186) {
        newColor = 'black';
    } else {
        newColor = 'white';
    }
    return `rgb(${r}, ${g}, ${b})`;
};

