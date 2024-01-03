import { useMutation, gql } from "@apollo/client"
import { useState } from "react";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT);
    
    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "캔디",
                createProductInput: {
                    name: "사탕",
                    detail: "들장미 맛",
                    price: 10000
                }
            }
        });
        console.log(result);
    };

    return (
        <div>
            <button onClick={onClickSubmit}>GraphQL API request</button>
        </div>
    );
};