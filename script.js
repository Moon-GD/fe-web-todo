function onDisplay(){
    if(confirm("선택한 카드를 삭제할까요?")){
        alert("삭제");
    }
    else{
        alert("취소");
    }
}

function SideMenuShow(){
    const sidemenu = document.getElementsByClassName('SideMenu')[0];

    if(sidemenu.style.visibility !== 'visible'){
        sidemenu.style.visibility = 'visible';
    }
}

function SideMenuHide(){
    const sidemenu = document.getElementsByClassName('SideMenu')[0];

    if(sidemenu.style.visibility !== 'hidden'){
        sidemenu.style.visibility = 'hidden';
    }
}

function ModifyCard(){
    prompt("수정할 내용 입력하세요");
}

const titleform = document.getElementById('BoxTitleInput');
const contentform = document.getElementById('BoxContentInput');
const registerbutton = document.getElementById('RegisterButton');

const registeractive = () => {
    let titlevalue = titleform.ariaValueMax();
}