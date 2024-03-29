import { mutatorAction } from 'satcheljs';
import { getBoardStore, IBoard } from 'store-board/store';

export const saveBoardsAction = mutatorAction(
	'SAVE_BOARD',
	(newBoards: IBoard[]) => {
		getBoardStore().boards = newBoards;
	},
);
