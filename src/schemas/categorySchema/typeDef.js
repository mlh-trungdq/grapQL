import { gql } from 'apollo-server-express';

export const typeDef = gql`

    extend type Query {
        getAllCategories: [Category]
        getCategoryAndPosts(id: ID!): Category
    }

    extend type Mutation {
        createCategory(input: CategoryInput): Category
        deleteCategory(id: ID!): Category
        updateCategory(id: ID!, input: CategoryInput): Category
    }

    input CategoryInput {
        title: String,
        description: String
    }

    type Category {
        _id: ID
        id: ID,
        title: String,
        description: String,
        posts: [Post],
        create_date: String,
        update_date: String
    }
`;