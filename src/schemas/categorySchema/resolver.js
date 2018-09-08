import { categoryModel } from '../../models/categoryModel';

export const resolver = {
    Query: {
        getAllCategories: () => categoryModel.getAllCategories(),
        getCategoryAndPosts: (root, { id }) => categoryModel.getCategoryAndPosts(id)
    },
    Mutation: {
        createCategory(root, { input: CategoryInput}) {
            return categoryModel.createCategory(CategoryInput);
        },
        deleteCategory(root, { id }) {
            return categoryModel.deleteCategory(id);
        },
        updateCategory(root, { id, input: inputCategory }) {
            if (id) {
                return categoryModel.updateCategory(id, inputCategory);
            }
            return false;
        }
    }
}
