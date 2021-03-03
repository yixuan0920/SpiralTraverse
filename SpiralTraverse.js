function spiralTraverse(array){

let result = []

let startRow = 0;
let endRow = array.length - 1;
let startCol = 0;
let endCol = array[0].length - 1; 
	while(startRow <= endRow && startCol <= endRow){
		// top border 1-2-3-4
		for(let col = startCol; col <= endCol; col++){
			result.push(array[startRow][col])
		}

		// right border 5-6-7
		for(let row = startRow + 1; row <= endRow; row++){
			result.push(array[row][emdCol])
		}

		// bottom 8-9-10
		for(let col = emdCol - 1; col >= startCol; col--){
			if(startRow === endRow) break;
			result.push(array[endRow][col])
		}

		// left 11-12
		for(let row = endRow - 1; row > startRow; row--){
			if(startCol === emdCol) break;
			result.push(array[row][startCol])
		}

		startRow++
		endRow--
		startCol++
		endCol--
	}
	return result
}

console.log(spiralTraverse([1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]));
/*
INPUT:
array = [
	[1, 2, 3, 4],
	[12, 13, 14, 5],
	[11, 16, 15, 6],
	[10, 9, 8, 7]
]
*/

// OUTPUT: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
