import { useRef } from "react";
import { useRouter } from "next/router";

const NewMealForm = () => {
    const mealNameInputRef = useRef();
    const router = useRouter();
    const mealImagePathInputRef = useRef();
    const mealNumberOfDishInputRef = useRef();
    const chefInputRef = useRef();

    //Implement the newMealHandler function
    const newMealHandler = async (event) => {
        event.preventDefault();
    
        //store the meal dat in an object
        const mealData = {
            name: mealNameInputRef.current.value,
            image_path: mealImagePathInputRef.current.value,
            dishes: mealNumberOfDishInputRef.current.value,
            chef: chefInputRef.current.value,
        };

        //use the Fetch API to make request to the new-meal-api
        //then get back to response
        const response = await fetch("/api/new-meal",{
            method: "POST", 
            body: JSON.stringify(mealData),
            headers: {
                "content-Type":"application/json",
            },
        });

        // parses JSON response into native JavaScript objects
        const data = await response.json();
        console.log(data)

        router.replace("/");
    }
    const INPUT_STYLE = "my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md";

  return (
    <div className="flex-col px-12 py-12 max-w-3x1 mx-auto shadow-x1 rounded-2x1">
        <h1 className="font-light text-4x1">Add a new meal</h1>
        <form onSubmit={newMealHandler}>
            <input type="text" placeholder="Meal Name" required ref={mealNameInputRef} className={INPUT_STYLE}/>
            <input type="text" placeholder="Image Path" required ref={mealImagePathInputRef} className={INPUT_STYLE} />
            <input type="number" max="5" min="1" placeholder="Number of Dishes" required ref={mealNumberOfDishInputRef} className={INPUT_STYLE} />
            <input type="text" placeholder="Name of chef" required ref={chefInputRef} className={INPUT_STYLE} />
            <button type="submit" className="bg-yellow-500 text-gray-800 font-medium text-x1 inline-flex w-full items-center px-4 py-4">Add Now</button>
        </form>
    </div>
  )
}

export default NewMealForm