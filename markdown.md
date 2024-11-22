1. Requête GET sur les comments
- **Méthode** : GET
- **Description** : Récupère la liste de tous les commentaires.
Résultat 
```json
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\n"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at\n"
  },
]
2. Requête POST sur les todos
Méthode : POST
Paramètres (x-www-form-urlencoded) :

  userId : 1
  title : "Acheter du lait"
  completed : false
  Description : Crée une nouvelle tâche (todo).

Résultat 
json
{
  "userId": 1,
  "title": "Acheter du lait",
  "completed": false,
  "id": 201
}
3. Requête PATCH sur les posts
Méthode : PATCH
Paramètres (raw, JSON) :
json
{
  "title": "Nouveau titre",
  "body": "Nouveau contenu"
}
Description : Modifie un post existant (title et body).
Résultat
json
{
  "userId": 1,
  "id": 1,
  "title": "Nouveau titre",
  "body": "Nouveau contenu"
}
4. Requête GET pour les commentaires associés au post ayant l'ID 1
Méthode : GET
Description : Récupère les commentaires associés au post ID 1.
Résultat 
json
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\n"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at\n"
  },
]
5. Requête GET pour les photos liées à l'album numéro 2
Méthode : GET
Description : Récupère les photos de l'album ID 2.
Résultat
json
[
  {
    "albumId": 2,
    "id": 51,
    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
    "url": "https://via.placeholder.com/600/8e973b",
    "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
  },
  {
    "albumId": 2,
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "url": "https://via.placeholder.com/600/121fa4",
    "thumbnailUrl": "https://via.placeholder.com/150/121fa4"
  },
]