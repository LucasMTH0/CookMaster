export interface Recipe {
    _id?: string,
    id?: string,
    name: string,
    category: string,
    description: string,
    ingredients: string[],
    prepare: string[],
    image: string,
    videoTutorial: string,
    idCreator: string,
    createdAt: string
}