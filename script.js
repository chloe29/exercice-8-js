function valid(){
  var age = document.getElementById('age').value;
    if(isNaN(age) || age < 1){
      alert('En chiffre !');
  }else{
    if (age >= 18){
      alert('Vous êtes majeur !');
    }else{
      alert('Vous êtes mineur !');
    }
  }
}
