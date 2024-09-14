const codeInput = document.getElementById('code');  
codeInput.addEventListener('keydown', function (e) {   
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {  
        e.preventDefault(); 
    }  
});  
codeInput.addEventListener('keyup', function (e) {  
   setTimeout(() => {  
          let input = this.value.replace(/\D/g, '');  
        
          let formattedInput ='';  
        for (let i = 0; i < input.length; i++) {  
            if (i > 0 && i % 1 === 0) {  
                formattedInput += '-';  
            }  
            formattedInput += input[i];  
        } 
        this.value = formattedInput;  
    }, 0);  
});
