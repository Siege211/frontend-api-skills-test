interface Recipe {
    uuid: string
    title: string
    description: string
    images: {
        full: string
        medium: string
        small: string
    }
    servings: number
    prepTime: number
    cookTime: number
    postDate: string
    editDate: string
    ingredients: Array<{
        uuid: string;
        amount: number;
        measurement: string;
        name: string;
    }>
    directions: Array<{
        instructions: string
        optional: boolean
    }>
}

interface Special {
    geo: string
    ingredientId: string
    text: string
    title: string
    type: string
    uuid: string
}

interface idMap {
    [index: string]: number
  }

export {
    Recipe,
    Special,
    idMap
  }