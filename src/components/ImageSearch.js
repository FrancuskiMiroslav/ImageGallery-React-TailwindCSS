import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden px-6 my-5 mx-auto bg-orange-500 border-b border-b-2 border-teal-500">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center py-2">
                    <input onChange={e => setText(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full text-teal-500 focus:outline-none placeholder-orange-300" placeholder="search for image..."/>
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Search
                    </button>  
                </div>
            </form>
        </div>
    )
}


export default ImageSearch;
