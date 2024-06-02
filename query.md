```graphql

query ExampleQuery($id:ID!){
    review(id:$id){
        rating,
        content
    }
    game(id:$id){
        title,
        platform
    }
}
------------------

    {
        "id":"1"
        }
```