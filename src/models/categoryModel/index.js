import { Category } from '../../connectors';

export const categoryModel = {
    getAllCategories: () => Category.find(),
    getCategoryAndPosts: id => {
        if (id) {
            return Category.findOne({ id }).populate('posts');
        }
        return false;
    },
    createCategory: dataCategoryInput => {
        if (dataCategoryInput) {
            return Category.create(dataCategoryInput);
        }
        return false;
    },
    deleteCategory: id => {
        if (id) {
            return Category.findOneAndRemove({ id });
        }
        return false;
    },
    updateCategory: (id, inputCategory) => {
        // console.log(inputCategory);
        if (id) {
            return Category.findOneAndUpdate({ id }, {$set: { inputCategory }}, { new: true });
        }
        return false;
    }
}