
function bodyBackgroundChanger(){
    let colors = '0123456789ABCDEF';
    let has = '#';
    for(let i =0;i< colorLength;i++){
        has += colors.charAt(Math.floor(Math.random() * colors.length));
    }
    return has;
}
let colorLength =6;
const color = bodyBackgroundChanger(colorLength);
// console.log(color);
const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', ()=>{
    const colors = bodyBackgroundChanger();
    document.body.style.backgroundColor = colors; 

}
);

