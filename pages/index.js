import { MongoClient } from 'mongodb';
import React from 'react'
import MealList from '../components/MealList';

const HomePage = (props) => {
  return  <MealList meals={props.mealList} />
};

export async function getStaticProps() {
  const DATABASE_NAME = "foodapp";
  const DATABASE_PASSWORD ="12345abc";

  const client = await MongoClient.connect(
    `mongodb+srv://user:${DATABASE_PASSWORD}@foodapp.rjiol.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`
    );
  const db = client.db();
  const mealsCollection = db.collection("meals");
  const meals = await mealsCollection.find().toArray();
  client.close();

  return {
    props: {
      mealList: meals.map((meal) => ({
        id: meal._id.toString(),
        name: meal.name,
        image: meal.image_path,
        dish: meal.dishes,
        chef: meal.chef,
      })),
    },
  };

}

export default HomePage;