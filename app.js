//let alertString;

//alertString = addString('WebCamp');

//alert(alertString);

//function addString(strA){
//  let addStr = "Hello " + strA;
//  return addStr;
//}

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

let js_hand = getJShand();

let judge = winLose(user_hand,js_hand);
alert("あなたが選んだ手は"+ user_hand + "です。\nJavaScriptの選んだ手は" + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
    let js_hand_num = Math.floor(Math.random() * 3);
    
    let hand_name;
    
    if(js_hand_num == 0){
        hand_name = "グー";
    }else if(js_hand_num == 1){
        hand_name = "チョキ";
    }else if(js_hand_num == 2){
        hand_name = "パー";
    }
    return hand_name;
}

function winLose(user,js){
    let winLoseStr;
    
    if(user == "グー"){
        if(js == "グー"){
            winLoseStr ="あいこ";
    }else if(js == "チョキ"){
        winLoseStr = "勝ち";
    }else if(js == "パー"){
        winLoseStr = "負け";
    }
}
}