document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    // Создаем массив из всех дивов по классу
    let squares = Array.from(document.querySelectorAll('.grid__box'));
    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.querySelector('#start-button')
    const width = 10;

    const lShape = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [2, width+1, width*2, width*2+1],
        [width, width*2,width*2+1,width*2+1]
    ];
    const zShape = [
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1]
    ]
    const tShape = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ]
    const sqShape = [
      [0, 1, width, width+1],
      [0, 1, width, width+1],
      [0, 1, width, width+1],
      [0, 1, width, width+1],
    ]
    const rShape = [
        [1,width+1,width*2+1,width*3+1],
        [width, width+1, width+2, width+3],
        [1,width+1,width*2+1,width*3+1],
        [width, width+1, width+2, width+3],
    ]

    const theShapes = [lShape, zShape, tShape, sqShape, rShape]
    let currentPosition = 4;
    let current = theShapes [0][0];
    
     
});
 