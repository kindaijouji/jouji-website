import React from 'react'

function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-[400px] md:w-96 md:rounded-none md:rounded-s-lg"
                    src="/img/image1.png"
                    alt="Technology acquisitions"
                />
                <div className="flex flex-col justify-between p-8 leading-normal">
                    <h5 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        部員募集中！
                    </h5>
                    <p className="mb-3 text-xl text-gray-700 dark:text-gray-400">
                        部員を募集しています！
                    </p>
                </div>
            </a>
        </div>
    )
}

export default Home