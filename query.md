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
query ReviewQuery($id:ID!){
  review(id:$id){
    rating,
    game{
      title,
      platform,
      reviews {
        rating,
        content
      }
    },
    author {
      name,
      verified
    }
  }
}

mutation deleteMutation($id:ID!){
  deleteGame(id:$id){
    id,
    title,
    platform
  }
}

mutation AddMutation($game:AddGameInput!){
  addGame(game:$game){
    id,
    title,
    platform
  }
}
{
  "game":{
    "title":"state of decay 2",
    "platform":"xbox"
  }
}
mutation EditMutation($edits:EditGameInput!, $id:ID!){
  updateGame(edits:$edits, id:$id){
    title,
    platform
  }
}
{
  "edits":{
    "title":"state of decay 2",
  },
  "id":"3"
}
```
