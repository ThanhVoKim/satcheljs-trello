import { editCardAction } from 'store-board/actions/edit-card.action';

export interface ICard {
	id?: string;
	title?: string;
	content?: string;
}

export interface IBoard {
	id?: string;
	title?: string;
	cards?: ICard[];
}

export interface IBoardStore {
	boards: IBoard[];
}

export type TEditCardAction = ReturnType<typeof editCardAction>;
