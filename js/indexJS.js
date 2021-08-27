let togle = true;
const dag = document.querySelector('#dai');
const lin = document.querySelector('#line');
function tick(){
    if(togle){
        dag.style.display = "block";
        lin.style.stroke = 'rgb(247, 132, 0)';
        document.body.style.overflow = 'hidden';
        togle = false;
    }
    else{
        dag.style.display = "none";
        lin.style.stroke = 'rgb(0, 0, 0)';
        document.body.style.overflow = 'inherit';
        togle = true;
    }
}