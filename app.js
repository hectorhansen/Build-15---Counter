let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
const h1 = document.querySelector('h1');

btns.forEach(function (btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else if (styles.contains('random')){
            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            }
            count = getRndInteger(-1000,1000)
            h1.textContent = "Get to zero to calm down"
        }
        else{
            count=0;
            h1.textContent = "Counter"
        }

        if(count>0){
            value.style.color = "green";
        }else if(count<0){
            value.style.color = "red";
        }else{
            value.style.color = "gray";
        }
        value.textContent = count;
    })
});
