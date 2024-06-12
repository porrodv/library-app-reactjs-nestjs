import { BookCard } from '../components/BookCard';

export const BooksList: React.FC = () => {
  return (
    <div className='p-4 px-10'>
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
        <div>ACÁ IRAN FILTROS</div>
      </div>
      <section className='w-full grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <div className='grid place-items-center'>
          <BookCard
            title='Los perros negros'
            author='Alexander Porro'
            publishYear={2020}
            imageUrl='public/portada1.jpg'
          />
        </div>
      </section>
    </div>
  );
};
