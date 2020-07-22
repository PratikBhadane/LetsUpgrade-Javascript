console.log('hey');
color=['black','blue','yellow','green']


color.forEach(element => {
    
      setTimeout(function(){
        document.body.style.backgroundColor=element;
      },3000);
    });
