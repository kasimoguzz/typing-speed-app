import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/WordSlice/WordSlice";
import style from './Header.module.css'

function Header() {
  const { selectedLanguage } = useSelector((state) => state.typingSpeed);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
      <div className={style.main}>
        <div className={style.container}>
        <select
          name="lang"
          id="lang"
          defaultValue={selectedLanguage}
          className="focus:outline-none p-2 rounded-md px-6 bg-orange-400"
          onChange={(e) => handleChange(e)}
        >
          <option value="TR" disabled={selectedLanguage === "TR"}>
            Türkçe
          </option>
          <option value="ENG" disabled={selectedLanguage === "ENG"}>
            English
          </option>
        </select>
      </div>
      </div>
  );
}

export default Header;
