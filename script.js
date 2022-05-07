window.addEventListener("DOMContentLoaded", function() {
  let buttons = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
                 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Delete',
                'CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter',
                'ShiftLeft','z','x','c','v','b','n','m',',','.','/','ArrowUp','ShiftRight',
                'ControlLeft','Meta','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight'];

  let rusButtons = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
                 'Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Delete',
                'CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter',
                'ShiftLeft','я','ч','с','м','и','т','ь','б','ю','/','ArrowUp','ShiftRight',
                'ControlLeft','Meta','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight'];
               
  let capsLock = false;   
  let lang = 'en';      
  
           
  const body = document.querySelector('body');
  body.classList.add('body');

  const createIcon = (icon_name) => {
    return `<i class="material-icons">${icon_name}</i>`;
  };
  
  const wrapper =  document.createElement('div');
  wrapper.classList.add('wrapper');
  body.appendChild(wrapper);

   let h1 = document.createElement('h1');
   h1.classList.add('title');
   h1.textContent = 'RSS Virtual Keyboard';

   let textarea = document.createElement('textarea');

   let keyboard = document.createElement('div');
   keyboard.classList.add('keyboard');
   wrapper.append(h1,textarea,keyboard);

   let keyboardKeys = document.createElement('div');
   keyboardKeys.classList.add('keyboard-keys');
   keyboard.appendChild(keyboardKeys);
   

   function addButtons(condition){
   
     for(let i= 0;i<condition.length;i++){
      const key = document.createElement('button');
      
      
      key.setAttribute("type", "button");
      key.classList.add('keyboard-key');
      key.textContent = condition[i];
      if(condition[i] === 'Backspace'){
        key.classList.add('wide-key');  
        key.innerHTML = createIcon("backspace");
        
      }
      if(condition[i] === 'Tab'){
        key.innerHTML = createIcon("keyboard_tab");
    
      }
      if(condition[i] === 'Delete'){
        key.classList.add('delete-key');
        key.textContent = 'Del';
      }
      if(condition[i] === 'CapsLock'){
        key.innerHTML = createIcon("keyboard_capslock");
        key.classList.add('super-wide-key');
      }
      if(condition[i] === 'Enter'){
        key.classList.add('super-wide-key');
        
      }
      if(condition[i] === 'AltLeft' || buttons[i] === 'AltRight'){
        key.textContent = 'Alt';
      }
      if(condition[i] === 'ArrowRight'){
        key.innerHTML = createIcon("keyboard_arrow_right");
      }
      if(condition[i] === 'ArrowLeft'){
        key.innerHTML = createIcon("keyboard_arrow_left");
      }
      if(condition[i] === 'ArrowDown'){
        key.innerHTML = createIcon("keyboard_arrow_down");
      }
      if(condition[i] === 'ArrowUp'){
        key.innerHTML = createIcon("keyboard_arrow_up");
      }
      if(condition[i] === 'Space'){
        key.classList.add('space-key')
        key.innerHTML = createIcon("space_bar");
      }
      if(condition[i] === 'ShiftLeft'){
        key.classList.add('shift-key')
        key.textContent = 'Shift';
      }
      if(condition[i] === 'ShiftRight'){
        key.classList.add('shiftRight-key')
        key.textContent = 'Shift';
      }
      if(condition[i] === 'ControlLeft'){
        key.classList.add('ctrl-key')
        key.textContent = 'Ctrl';
      }
      if(condition[i] === 'ControlRight'){
        key.classList.add('ctrlRight-key')
        key.textContent = 'Ctrl';
      }
      if(condition[i] === 'Enter'){ 
        key.innerHTML = createIcon("keyboard_return");
      }
      if(condition[i] === 'Meta'){ 
        key.textContent = 'Win';
      }

      keyboardKeys.append(key);
     
      //----------------------Чтение кнопок с клавиатуры----------------------------//

      document.addEventListener('keydown', (event)=>{
        if(event.key === condition[i] || event.code === condition[i]){
          key.classList.toggle("active");
          if(event.key === 'Backspace'){
            textarea.textContent = textarea.textContent.substring(0, textarea.textContent.length-1);
          }
          else if(event.key === 'Enter'){
            textarea.textContent += "\n";
          }
          else if(event.key === 'Delete'){
            textarea.textContent = '';
          }
          else if(event.key === 'CapsLock'){
            textarea.textContent += '';
          }
          else if(event.code === 'Space'){
            textarea.textContent += ' ';
          }
          else if(event.key === 'Tab'){
            textarea.textContent += '   ';
          }
          else if(condition[i] === 'ControlRight' || condition[i] === 'ControlLeft'|| condition[i] === 'ShiftRight' || condition[i] === 'ShiftLeft' || condition[i] === 'AltRight' || condition[i] === 'AltLeft' || condition[i] === 'Meta' || condition[i] === 'ArrowDown' || condition[i] === 'ArrowUp' || condition[i] === 'ArrowLeft' || condition[i] === 'ArrowRight'){
            textarea.textContent += '';
            event.preventDefault();
          }
          else{
            textarea.textContent += condition[i];
          }
        }
        
      })
      document.addEventListener('keyup', ()=> {
        key.classList.remove('active');
      })

      //--------------------------------Чтение кнопок на экране--------------------//

      key.addEventListener('mousedown', () =>{
        key.classList.toggle('active');
        if(condition[i] === 'Backspace'){
          textarea.textContent = textarea.textContent.substring(0, textarea.textContent.length-1);
        }
        else if(condition[i] === 'Enter'){
          textarea.textContent += "\n";
        }
        else if(condition[i]=== 'Space'){
          textarea.textContent += ' ';
        }
        else if(condition[i] === 'Delete'){
          textarea.textContent = '';
        }
        else if(condition[i]=== 'Tab'){
          textarea.textContent += '   ';
        }
        else if(condition[i] === 'CapsLock' || condition[i] === 'ControlRight' || condition[i] === 'ControlLeft' || condition[i] === 'ShiftRight' || condition[i] === 'ShiftLeft' || condition[i] === 'AltRight' || condition[i] === 'AltLeft' || condition[i] === 'Meta' || condition[i] === 'ArrowDown' || condition[i] === 'ArrowUp' || condition[i] === 'ArrowLeft' || condition[i] === 'ArrowRight'){
          textarea.textContent += '';
        }
        else{
          textarea.textContent += condition[i];
        }
      })
      key.addEventListener('mouseup', ()=> {
        key.classList.remove('active');
      })
      
      }
    }
   
   
   addButtons(buttons);
   function setValueLanguage() {
    localStorage.setItem('nowLanguage', lang)
 }
  

   window.addEventListener('keydown', (event) => {
   if(event.shiftKey && event.ctrlKey){

    let allButtons = document.querySelectorAll('.keyboard-key');
    allButtons.forEach(el => {
         el.remove();
       })

      if(lang === 'en'){
        addButtons(rusButtons);
        lang = 'ru';
        setValueLanguage();
      }
      else if(lang === 'ru'){
        addButtons(buttons);
        lang = 'en';
        setValueLanguage();
      }
   
  }});
    window.addEventListener('keydown', (event) => {
      if(event.key === 'CapsLock'){
        capsLock = !capsLock;
       if(capsLock) {let allButtons = document.querySelectorAll('.keyboard-key');
        allButtons.forEach((element) => element.toUpperCase());}
  
          
          console.log(capsLock);
       
    }});
    
     
       

       
     
   
   
})