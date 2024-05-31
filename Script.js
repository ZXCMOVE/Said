var task_4_var = 0;
function task_4(){
    task_4_var++;
    if(task_4_var > 3){
        task_4_var = 0;
    };
    let img = document.getElementById("task_4_img");
    let src = "";
    if(task_4_var==0){
        src = "https://i.pinimg.com/originals/3a/8c/95/3a8c957d7a6a6540510c45b99c8ff3d5.jpg";
    }
    else if(task_4_var==1){
        src = `https://i.ytimg.com/vi/qwvGy57GSfs/sddefault.jpg`;
    }
    else if(task_4_var==2){
        src = `https://masterpiecer-images.s3.yandex.net/e20f6b1a7f4511ee9008baea8797b5f2:upscaled`;
    }
    else if(task_4_var==3){
        src = `https://rdrc.ru/d/story/dc/11228/c10a4328.jpg`;
    };
    img.setAttribute("src",src)
}

var task_4_var = 0;
function task_5(){
    task_4_var--;
    if(task_4_var > 3){
        task_4_var = 0;
    };
    let img = document.getElementById("task_4_img");
    let src = "";
    if(task_4_var==0){
        src = "https://avcdn.av.by/journalarticlepreviewbig/0002/7982/5158.jpg";
    }
    else if(task_4_var==1){
        src = `https://i.ytimg.com/vi/qwvGy57GSfs/sddefault.jpg`;
    }
    else if(task_4_var==2){
        src = `https://masterpiecer-images.s3.yandex.net/e20f6b1a7f4511ee9008baea8797b5f2:upscaled`;
    }
    else if(task_4_var==3){
        src = `https://rdrc.ru/d/story/dc/11228/c10a4328.jpg`;
    };
    img.setAttribute("src",src)
}
