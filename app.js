
const image = document.querySelector("img");
const h1 = document.querySelector("#render");


function toss(btn) {
  let ab = Math.floor(Math.random() * 2);
  if(ab === 1){
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSps3cYu-cuR8hAIOxHGO1oRLJR39KEja6ptNCQ_h0uyQ&s";
  }else{
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtNSK-R4JGo4hZRfY0YTgHh24EoJEkAIS1T05tPmAQQ&s";
  }




  if (btn === "heads" && ab === 1 || btn === "tails" && ab === 0) {
    console.log('win', btn);
    h1.innerHTML = `you win the toss`
  } else {
    console.log('lose', btn);
    h1.innerHTML = `you lose the toss`
  }
  console.log(ab);
}



