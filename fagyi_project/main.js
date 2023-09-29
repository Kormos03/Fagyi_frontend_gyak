function submit(e)
{
  let mail = document.getElementById('email').value;
  let textarea = document.getElementById('textarea').value;
  if(!mail.includes('@'))
  {
    console.log('aaaaa');
   e.preventDefault();   
    throw new Error('It has to contains @ character!');
  }
  else if (textarea.length < 10)
  {
    throw new Error('The minimum lenght of this text: 10 character');
  }
  else
  {
    console.log('siker :)');
  }
}

function init()
{
  document.getElementById('submitbtn').addEventListener('sub', submit);
  document.getElementById('email').addEventListener('sub', submit);
  document.getElementById('textarea').addEventListener('sub', submit);
}

document.addEventListener('DOMContentLoaded', init);