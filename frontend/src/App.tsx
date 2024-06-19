import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BooksList } from './pages/BooksList';
import { Layout } from './components/common/Layout';

function App() {
  return (
    <div className='bg-stone-700 text-white h-full'>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<BooksList />}></Route>
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
