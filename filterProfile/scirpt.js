let  input = document.querySelector('input');

var data = [
    {
        name:'srishty',
        src:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww"
    },
    {
        name:'sakshi',
        src:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
        name:'ankita',
        src:"https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
        name:'sneha',
        src:"https://images.pexels.com/photos/15567872/pexels-photo-15567872/free-photo-of-side-portrait-of-a-young-brunette.png?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name:'himanshu',
        src:"https://images.pexels.com/photos/18355732/pexels-photo-18355732/free-photo-of-black-and-white-photo-of-a-young-man-posing-in-elegant-blazer-and-pants.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name:'manish',
        src:"https://images.pexels.com/photos/18788611/pexels-photo-18788611/free-photo-of-portrait-of-man-wearing-jumper-in-a-shadow.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name:'awanish',
        src:"https://images.pexels.com/photos/18593901/pexels-photo-18593901/free-photo-of-man-sitting-and-posing-in-black-jacket.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name:'virendra',
        src:"https://images.pexels.com/photos/18170644/pexels-photo-18170644/free-photo-of-studio-shot-of-a-young-man-with-a-stubble.jpeg?auto=compress&cs=tinysrgb&w=600"
    }


]

var pers ="";
data.forEach((elem)=>{
    pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
})

document.querySelector('.people').innerHTML = pers;



input.addEventListener('input',()=>{
   var matching = data.filter((e)=>{
        return e.name.startsWith(input.value);
    })
 
    let  newUsers = '';
    matching.forEach((elem)=>{
        newUsers += `<div class="person">
                        <div class="img">
                            <img src="${elem.src}" alt="">
                        </div>
                        <h4>${elem.name}</h4>
                    </div>`
    })
    document.querySelector('.people').innerHTML = newUsers;
   
})
