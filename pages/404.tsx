export default function NotFound() {
    return (
        <div className='flex flex-col w-screen h-screen items-center'>
            <div className='flex-2 flex-auto flex items-end my-0 text-7xl font-extrabold'>
                <h1>404 - Page Not Found</h1>
            </div>
            <div className='flex-1 mt-4'>
                <a href='/' className='text-indigo-400 underline'>
                    返回首页
                </a>
            </div>
        </div>
    )
}
