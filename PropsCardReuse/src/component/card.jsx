import React from 'react'

function Card({user,btnText}){
    console.log(user);
    
    return(
        <>
        <div>Card</div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300" alt="Card Image"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
                This is some content inside the card. You can include text, images, or any other elements.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Action</button>
            <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400 ml-2">Cancel</button>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 ml-2">Confirm</button>
        </div>
    </div>
    </>
    )
}

export default Card