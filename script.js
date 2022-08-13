const button = document.getElementById('click');



// function to get digimon and populate it
const getData = async()=>{
  const query = document.getElementById('search').value;
  await fetch(`https://digimon-api.vercel.app/api/digimon/name/${query}`)
  .then(res=>res.json())
  .then(res=>{
    console.log(res)

    if(res.ErrorMsg){
      document.getElementById('show_error').classList.add('show')
      document.getElementById('show_error').classList.remove('hidden')
      return
    }
    
    document.getElementById('show_error').classList.remove('show')
    document.getElementById('show_error').classList.add('hidden')
    document.getElementById("digi-img").setAttribute('src',res[0].img);
    document.getElementById("digi-name").innerHTML=`${res[0].name}`;
    document.getElementById("digi-level").innerHTML=`Level: ${res[0].level}`;
    
  })
  }
  
  
  
  button.addEventListener('click',()=>getData())

