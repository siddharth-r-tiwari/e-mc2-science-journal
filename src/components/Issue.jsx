import { Card } from 'flowbite-react'

export default function IssueCover({ image, year }) {
    return (
        <Card imgSrc={image}>
            <div class="relative">
                <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
                    <h3 class="text-xl text-white font-bold">
                        {year}</h3>
                    <a href={"/issues/" + year} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-maroon-100 rounded-lg hover:bg-white hover:text-maroon-100 focus:ring-4 focus:outline-none focus:ring-ghostly-black dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 opacity-70">
                        Read more
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1. 414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </Card>
    )
}