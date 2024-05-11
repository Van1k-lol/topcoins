let gameImgNode = document.querySelector(`.game_img`);
let moneyNode = document.querySelector(`#money`)
let money = 0;
gameImgNode.addEventListener('click', function(){
  money += 1;
  moneyNode.innerHTML = `На Балансе: ` +money+ ` $TOP`;
});

let changeThemeNode = document.querySelector(`#change_theme`);
let wrapperNode = document.querySelector(`.wrapper`);
let footerNode = document.querySelector(`.footer`);
let gameRulesNode = document.querySelector(`.game_rules`);

changeThemeNode.addEventListener('click', function() {
  wrapperNode.classList.toggle(`light`);
  gameRulesNode.classList.toggle(`light_games_rules`);
  footerNode.classList.toggle(`light_footer`);
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let restartNode = document.querySelector(`#restart`)
restartNode.addEventListener('click', function(){
  money = 0;
  moneyNode.innerHTML = `На Балансе: 0 $TOP`;
});

