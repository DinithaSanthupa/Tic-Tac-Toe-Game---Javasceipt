export default class gameView {

    updateBoard(game) {
        
        this.updateTurn(game);
        for( let i =0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.textContent = game.board[i]; 
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-X");
        let playerO = document.querySelector(".player-O");
        
        if (game.turn == 'X'){
            playerX.classList.add('active');
        }
    }
}