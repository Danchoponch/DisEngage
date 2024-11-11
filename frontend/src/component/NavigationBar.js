//https://v1.tailwindcss.com/components/navigation#

function Navigationbar(){

    return(
        <nav class="flex items-center justify-between flex-wrap bg-violet-800 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img class="fill-current h-8 w-8 mr-2" width="100" height="54" viewBox="0 0 100 54" src="https://logos-world.net/wp-content/uploads/2021/09/NYU-Logo.png"></img>
        <span class="font-semibold text-xl tracking-tight">Evently</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
        <a href="/CategorySelect" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            CategorySelect component test
        </a>
        </div>
        <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Cart</a>
        </div>
    </div>
    </nav>
    )
}

export default Navigationbar;


