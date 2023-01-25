import { Pizza } from 'components/Pizza/Pizza';
import { SortDropdown } from 'components/SortDropdown/SortDropdown';
import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import './scss/app.scss';

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="content">
          <div className="content__top">
            <Categories />
            <SortDropdown />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <Pizza />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
