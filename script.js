const body = document.querySelector('body');
body.classList.add('body');
// body.innerHTML = `<div class="wrapper">
// <h1>RSS Virtual Keyboard</h1>
// <textarea></textarea>
// <div class="keyboard"><div class="keyboard-keys">
// <button type="button" class="keyboard-key">\`</button>
// <button type="button" class="keyboard-key">1</button>
// <button type="button" class="keyboard-key">2</button>
// <button type="button" class="keyboard-key">3</button>
// <button type="button" class="keyboard-key">4</button>
// <button type="button" class="keyboard-key">5</button>
// <button type="button" class="keyboard-key">6</button>
// <button type="button" class="keyboard-key">7</button>
// <button type="button" class="keyboard-key">8</button>
// <button type="button" class="keyboard-key">9</button>
// <button type="button" class="keyboard-key">0</button>
// <button type="button" class="keyboard-key">-</button>
// <button type="button" class="keyboard-key">=</button>
// <button type="button" class="keyboard-key wide-key">Backspace</button>  
// <br>
// <button type="button" class="keyboard-key wide-key">Tab</button>
// <button type="button" class="keyboard-key">q</button>
// <button type="button" class="keyboard-key">w</button>
// <button type="button" class="keyboard-key">e</button>
// <button type="button" class="keyboard-key">r</button>
// <button type="button" class="keyboard-key">t</button>
// <button type="button" class="keyboard-key">y</button>
// <button type="button" class="keyboard-key">u</button>
// <button type="button" class="keyboard-key">i</button>
// <button type="button" class="keyboard-key">o</button>
// <button type="button" class="keyboard-key">p</button>
// <button type="button" class="keyboard-key">[</button>
// <button type="button" class="keyboard-key">]</button>
// <button type="button" class="keyboard-key">\\</button>
// <br>
// <button type="button" class="keyboard-key wide-key">Caps Lock</button>
// <button type="button" class="keyboard-key">a</button>
// <button type="button" class="keyboard-key">s</button>
// <button type="button" class="keyboard-key">d</button>
// <button type="button" class="keyboard-key">f</button>
// <button type="button" class="keyboard-key">g</button>
// <button type="button" class="keyboard-key">h</button>
// <button type="button" class="keyboard-key">j</button>
// <button type="button" class="keyboard-key">k</button>
// <button type="button" class="keyboard-key">l</button>
// <button type="button" class="keyboard-key">;</button>
// <button type="button" class="keyboard-key">'</button>
// <button type="button" class="keyboard-key wide-key">Enter</button>
// <br>
// <button type="button" class="keyboard-key wide-key">Shift</button>
// <button type="button" class="keyboard-key">z</button>
// <button type="button" class="keyboard-key">x</button>
// <button type="button" class="keyboard-key">c</button>
// <button type="button" class="keyboard-key">v</button>
// <button type="button" class="keyboard-key">b</button>
// <button type="button" class="keyboard-key">n</button>
// <button type="button" class="keyboard-key">m</button>
// <button type="button" class="keyboard-key">,</button>
// <button type="button" class="keyboard-key">.</button>
// <button type="button" class="keyboard-key">/</button> 
// <button type="button" class="keyboard-key wide-key">Shift</button>
// <br>
// <button type="button" class="keyboard-key">Ctrl</button>
// <button type="button" class="keyboard-key">Win</button>
// <button type="button" class="keyboard-key">Alt</button>
// <button type="button" class="keyboard-key">Space</button>
// <button type="button" class="keyboard-key">Alt</button>
// <button type="button" class="keyboard-key">Leftarr</button> 
// <button type="button" class="keyboard-key">Botarr</button>
// <button type="button" class="keyboard-key">Rightarr</button>
// <button type="button" class="keyboard-key">Ctrl</button>

// </div>
// </div>
// </div>`
const buttons = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
                 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\',
                'Caps Lock','a','s','d','f','g','h','j','k','l',';','\'','Enter',
                'Shift','z','x','c','v','b','n','m',',','.','Arrup','Shift',
                'Ctrl','Win','Alt','Space','Alt','Arrleft','Arrdown','Arrright','Ctrl'];

document.addEventListener("DOMContentLoaded", () => {
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
     let button = document.createElement('button');
     button.classList.add('keyboard-key')
   }
})