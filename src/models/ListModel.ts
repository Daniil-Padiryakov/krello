import Card from '@/models/CardModel.ts';

export default interface List {
    id: number;
    title: string;
    cards: Array<Card>
};
