window.addEventListener("DOMContentLoaded", function() {
  let buttons = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
                 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Delete',
                'CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter',
                'ShiftLeft','z','x','c','v','b','n','m',',','.','/','ArrowUp','ShiftRight',
                'ControlLeft','Meta','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight'];


window.addEventListener('keydown', (event)=>{
        if(event.shiftKey && event.altKey){
          buttons = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
                 'Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\',
                'CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter',
                'ShiftLeft','я','ч','с','м','и','т','ь','б','ю','ArrowUp','ShiftRight',
                'ControlLeft','Meta','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight'];
                console.log(buttons);
        }
        
      })              
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

   function addButtons(){
    
    for(let i= 0;i<buttons.length;i++){
      const key = document.createElement('button');
      const buttonsLineBreak = ['Backspace','Delete','Enter', 'ShiftRight'].indexOf(buttons[i]) !== -1;

      
      key.setAttribute("type", "button");
      key.classList.add('keyboard-key');
      key.textContent = buttons[i];
      if(buttons[i] === 'Backspace'){
        key.classList.add('wide-key');  
        key.innerHTML = createIcon("backspace");
      }
      if(buttons[i] === 'Tab'){
        key.innerHTML = createIcon("keyboard_tab");
      }
      if(buttons[i] === 'Delete'){
        key.classList.add('delete-key');
        key.textContent = 'Del';
      }
      if(buttons[i] === 'CapsLock'){
        key.innerHTML = createIcon("keyboard_capslock");
        key.classList.add('super-wide-key');
      }
      if(buttons[i] === 'Enter'){
        key.classList.add('super-wide-key');
      }
      if(buttons[i] === 'AltLeft' || buttons[i] === 'AltRight'){
        key.textContent = 'Alt';
      }
      if(buttons[i] === 'ArrowRight'){
        key.innerHTML = createIcon("keyboard_arrow_right");
      }
      if(buttons[i] === 'ArrowLeft'){
        key.innerHTML = createIcon("keyboard_arrow_left");
      }
      if(buttons[i] === 'ArrowDown'){
        key.innerHTML = createIcon("keyboard_arrow_down");
      }
      if(buttons[i] === 'ArrowUp'){
        key.innerHTML = createIcon("keyboard_arrow_up");
      }
      if(buttons[i] === 'Space'){
        key.classList.add('space-key')
        key.innerHTML = createIcon("space_bar");
      }
      if(buttons[i] === 'ShiftLeft'){
        key.classList.add('shift-key')
        key.textContent = 'Shift';
      }
      if(buttons[i] === 'ShiftRight'){
        key.classList.add('shiftRight-key')
        key.textContent = 'Shift';
      }
      if(buttons[i] === 'ControlLeft'){
        key.classList.add('ctrl-key')
        key.textContent = 'Ctrl';
      }
      if(buttons[i] === 'ControlRight'){
        key.classList.add('ctrlRight-key')
        key.textContent = 'Ctrl';
      }
      if(buttons[i] === 'Enter'){ 
        key.innerHTML = createIcon("keyboard_return");
      }
      if(buttons[i] === 'Meta'){ 
        key.textContent = 'Win';
      }

      keyboardKeys.append(key);
      if(buttonsLineBreak){
        keyboardKeys.appendChild(document.createElement('br'));
      }

      //----------------------Чтение кнопок с клавиатуры----------------------------//

      document.addEventListener('keydown', (event)=>{
        if(event.key === buttons[i] || event.code === buttons[i]){
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
          else if(event.code === 'Space'){
            textarea.textContent += ' ';
          }
          else if(event.key === 'Tab'){
            textarea.textContent += '   ';
          }
          else if(buttons[i] === 'CapsLock' || buttons[i] === 'ControlRight' || buttons[i] === 'ControlLeft'|| buttons[i] === 'ShiftRight' || buttons[i] === 'ShiftLeft' || buttons[i] === 'AltRight' || buttons[i] === 'AltLeft' || buttons[i] === 'Meta' || buttons[i] === 'ArrowDown' || buttons[i] === 'ArrowUp' || buttons[i] === 'ArrowLeft' || buttons[i] === 'ArrowRight'){
            textarea.textContent = textarea.textContent;
            event.preventDefault();
          }
          else{
            textarea.textContent += buttons[i];
          }
        }
        
      })
      document.addEventListener('keyup', ()=>{
        key.classList.remove('active');
      })

      //--------------------------------Чтение кнопок на экране--------------------//

      key.addEventListener('mousedown', () =>{
        key.classList.toggle('active');
        if(buttons[i] === 'Backspace'){
          textarea.textContent = textarea.textContent.substring(0, textarea.textContent.length-1);
        }
        else if(buttons[i] === 'Enter'){
          textarea.textContent += "\n";
        }
        else if(buttons[i]=== 'Space'){
          textarea.textContent += ' ';
        }
        else if(buttons[i] === 'Delete'){
          textarea.textContent = '';
        }
        else if(buttons[i]=== 'Tab'){
          textarea.textContent += '   ';
        }
        else if(buttons[i] === 'CapsLock' || buttons[i] === 'ControlRight' || buttons[i] === 'ControlLeft' || buttons[i] === 'ShiftRight' || buttons[i] === 'ShiftLeft' || buttons[i] === 'AltRight' || buttons[i] === 'AltLeft' || buttons[i] === 'Meta' || buttons[i] === 'ArrowDown' || buttons[i] === 'ArrowUp' || buttons[i] === 'ArrowLeft' || buttons[i] === 'ArrowRight'){
          textarea.textContent = textarea.textContent;
        }
        else{
          textarea.textContent += buttons[i];
        }
      })
      key.addEventListener('mouseup', ()=> {
        key.classList.remove('active');
      })
      
    };
      

   }
   addButtons();
   
})