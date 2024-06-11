interface BookCardProps {
  title: string;
  author: string;
  publishYear: number;
}

export const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  publishYear,
}: BookCardProps) => {
  return <div>asd</div>;
};
