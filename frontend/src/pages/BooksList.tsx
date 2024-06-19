import { useQuery } from '@tanstack/react-query';
import { BookCard } from '../components/BookCard';
import { booksService } from '../services/book.services';

export const BooksList: React.FC = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['books'],
    queryFn: booksService,
  });

  // const

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='p-4 px-10 scroll-m-2'>
      <div className='w-full mb-4 flex justify-between'>
        <div>
          <label
            htmlFor='search-input'
            className='block mb-1 text-sm font-medium'
          >
            Buscar
          </label>
          <input
            type='text'
            id='search-input'
            className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500'
          ></input>
        </div>
        <div>Próximamente: filtros</div>
      </div>
      <section className='w-full grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {data.map((book) => (
          <div key={book._id} className='grid place-items-center'>
            <BookCard
              title={book.title}
              author={book.author}
              summary={book.summary}
              publishYear={book.year}
              image={book.image}
            />
          </div>
        ))}
      </section>
    </div>
  );
};
