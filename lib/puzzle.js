// select button in  a variable
const hintButton = document.querySelector('#show-hint');
//select hint element in a variable
const hint = document.querySelector('.hint');

// add an microphone on hint button (eventlistener)

hintButton.addEventListener('click', () => {
  hint.classList.toggle('active');
})

const canMove = (tile) => {
  const tileRow = tile.cellIndex;
  // console.log(tileRow);
  const tileColumn = tile.parentElement.rowIndex;
  // console.log(tileColumn);
  const emptyTile = document.querySelector('.empty');
  const emptyTileRow = emptyTile.cellIndex;
  const emptyTileColumn = emptyTile.parentElement.rowIndex;

  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
        (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
        (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
        (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
};
// 1. Select all tiles
// 2. For each tiles
  // a. Listen if clicked
  // b. if clicked and if empty neighbor swap with empty neighbor
// check if player wins by number in right order

const moveTile = (tile) => {
  // Select empty tile
  const emptyTile = document.querySelector('.empty');
  // replace its content of empty tile by 'tile'
  emptyTile.innerHTML = tile.innerHTML;
  // remove 'tile' content
  tile.innerHTML = "";
  // remove class 'empty'
  emptyTile.classList.remove('empty');
  // add empty class on 'tile'
  tile.classList.add('empty');
};

const checkplayerwins = () => {
  // store in variable current tile order
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(element => Number.parseInt(element.innerHTML, 10));
  // console.log(tilesOrder);
  // verify if order correspond to a given spec
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You Win!");
  }

}

const tiles = document.querySelectorAll('td');

tiles.forEach((tile) => {
  tile.addEventListener('click', ()=>{
    if (canMove(tile)) {
      moveTile(tile);
      checkplayerwins();
    };
  })
})
