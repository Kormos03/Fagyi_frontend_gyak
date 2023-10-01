
function buttonClick(e)
{
  let mail = document.getElementById('email').value;
  let textarea = document.getElementById('textarea').value;
  if(!mail.includes('@'))
  { 
    e.preventDefault();
    document.getElementById('error').textContent = 'Az email címnek tartalmaznia kell @ karaktert!';
    throw new Error('It has to contains @ character!');
  }
  else if (textarea.length < 10)
  {
    e.preventDefault(); 
    document.getElementById('error').textContent = 'Legalább 10 karakter szükséges a szöveges mezőbe az elküldéshez!';
    throw new Error('The minimum lenght of this text: 10 character');
  }
  else if (textarea.length >= 10 && mail.includes('@'))
  {
    document.getElementById('error').textContent = 'Legalább 10 karakter szükséges az elküldéshez!';
    console.log('siker :)');
    alert('Köszönjük az értékelést!')
  }
}

function frissit(e)
{
  let area = e.currentTarget.value;
  if(area.length < 50)
  {
    document.getElementById('form').style.backgroundColor = '#ff0000';
  }
  else if(area.length >= 50)
  {
    document.getElementById('form').style.backgroundColor = '#008000';
  }
}

function init()
{
  document.getElementById('submit').addEventListener('click', buttonClick);
  document.getElementById('textarea').addEventListener('input', frissit)
}

document.addEventListener('DOMContentLoaded', init);