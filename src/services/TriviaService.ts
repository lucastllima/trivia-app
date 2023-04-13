import { CategoryOption, TriviaCategories } from "./models";

const API_URL = "https://the-trivia-api.com/api"

export const getCategories = async (): Promise<CategoryOption[]> => {
    try {
        const response = await fetch(`${API_URL}/categories`);
        const data: TriviaCategories = await response.json()
        return mapTriviaCategoriesResponse(data)
    } catch(error) {
        throw new Error("Failed to fetch categories");
    }
};

const mapTriviaCategoriesResponse = (triviaCategories: TriviaCategories) => {
    const transformedResponse: CategoryOption[] = []
    Object.keys(triviaCategories).forEach((key) => {
        const ampersandKey = triviaCategories[key].find((item) => item.includes('_'))
        const optionObj = {label: key, value: ampersandKey || triviaCategories[key][0] }
        transformedResponse.push(optionObj)
    })
    return transformedResponse
}