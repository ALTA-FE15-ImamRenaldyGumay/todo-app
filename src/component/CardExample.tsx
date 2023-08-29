import React from 'react'

const CardExample = () => {
    return (
        <div className="p-4 mb-8 mx-8 w-80 bg-yellow-200 shadow-md rounded-xl">
            <picture className="rounded-lg block overflow-hidden ease-in duration-150">
                <img
                    className='hover:scale-125'
                    src="https://picsum.photos/360/240" />
            </picture>

            <h1 className="mt-4 mb-2 text-xl font-bold">Judul Card di sini</h1>
            <p className="text-sm text-gray-600">
                Keterangan pendek tentang card di sini. Biasanya panjangnya dua sampai tiga baris, biar terlihat rapi.
            </p>
        </div>
    )
}

export default CardExample