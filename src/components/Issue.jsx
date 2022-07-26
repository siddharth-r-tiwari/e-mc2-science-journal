import { Card } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

export default function IssueCover({ image, year }) {

    const navigate = useNavigate();

    return (
        <Card imgSrc={image}>
            <div class="relative">
                <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-silver opacity-90">
                    <h3 class="text-xl text-white font-serif font-bold">
                        {year}</h3>
                    <button onClick={() => navigate("/issues/" + year)} class="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-white bg-maroon-200 border-4 border-silver rounded-lg hover:bg-maroon-200 hover:text-white hover:border-transparent focus:ring-4 focus:outline-none focus:ring-ghostly-black ">
                        See Gallery
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </Card>
    )
}