import { actionCreator, orchestrator } from 'satcheljs';
import { putReorderCardApi } from 'api';
import { saveBoardsAction } from 'store-board/mutator-actions';

export const reorderCardAction = actionCreator(
	'REORDER_CARD',
	(boardId: string, startIndex: number, endIndex: number) => ({
		boardId,
		startIndex,
		endIndex,
	}),
);

orchestrator(reorderCardAction, async (actionMessage) => {
	try {
		const newBoards = await putReorderCardApi(actionMessage);
		saveBoardsAction(newBoards);
	} catch (error) {
		console.error(error);
	}
});