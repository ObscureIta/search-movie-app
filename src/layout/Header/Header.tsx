import './Header.scss';
import { Link } from 'react-router-dom';
import filmLogo from '/film.svg';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link className="header__logo" to="/">
            <img src={filmLogo} alt="" className="header__logo-image" />
            Кинолеееента
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
