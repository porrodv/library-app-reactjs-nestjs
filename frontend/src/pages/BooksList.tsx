import { BookCard } from '../components/BookCard';

export const BooksList: React.FC = () => {
  return (
    <div>
      <div>
        <input type='text' />
      </div>
      <section>
        <BookCard
          title='Los perros negros'
          author='Alexander Porro'
          publishYear={2020}
        />
      </section>
    </div>
  );
};
