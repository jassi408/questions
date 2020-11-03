const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const parent = e.currentTarget.parentElement.parentElement;
        btns.forEach(function(item){
            const parentItem = item.parentElement.parentElement;
            console.log(parentItem);
            if(parentItem!==parent){
                parentItem.classList.remove('show-text');
            }
        });
        parent.classList.toggle('show-text');
    });
    
});

/*const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click',function(){
        questions.forEach(function(item){
            if(item!== question){
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});*/