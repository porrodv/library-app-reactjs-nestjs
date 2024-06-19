interface BookCardProps {
  title: string;
  author: string;
  summary: string;
  publishYear: number;
  imageUrl?: string;
}

export const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  summary,
  publishYear,
  imageUrl,
}: BookCardProps) => {
  return (
    <div
      id='book-container'
      className='relative overflow-hidden w-56 h-auto bg-stone-200 rounded-lg text-gray-700 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] group'
    >
      <div className='p-3'>
        <h1 className='italic text-lg font-bold'>{title}</h1>
        <div className='flex justify-between text-md mt-2'>
          <h2>{author}</h2>
          <p>{publishYear}</p>
        </div>
      </div>
      <div className='w-full h-64 rounded-lg'>
        {imageUrl !== undefined ? (
          <img
            src={imageUrl}
            className='h-full w-full object-scale-cover rounded-b-lg'
            alt='portada 1'
          />
        ) : (
          <div className='h-full w-full flex justify-center items-center bg-slate-900 rounded-b-lg text-white'>
            Imagen no disponible
          </div>
        )}
      </div>

      <div className='absolute transition-all rounded-md w-full left-0 bottom-0 bg-black opacity-85 text-white z-0 h-0 group-hover:h-full'>
        <div
          id='summary-section'
          className='h-full flex flex-col justify-between p-6'
        >
          <p className='line-clamp-[9]'>{summary}</p>
          <a
            href='#'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center'
          >
            Ver detalles
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
