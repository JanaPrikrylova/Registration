import React, {useState} from 'react'
import { render } from 'react-dom';
import './style.css';


const App = () => {
  const [userName, setUserName] = useState('');
  const [country, setCountry] = useState('Česká republika');
  const [termAccepted, setTermAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`Jméno uživatele ${userName}`);
    console.log(`Registrován nový uživatel ${userName} ze země ${country}. `);
  };

  const handleChangeUserName = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  }

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  }

  const handleChangeTermsAccepted = (e) => {
    setTermAccepted(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Uživatelské jméno: {userName}
          <input value={userName} type="text" onChange={handleChangeUserName} />
        </label>
      </div>
      <div style={{ display: userName === '' ? null : 'none'}}>
        Uživatelské jméno je povinný údaj
      </div>
      <div>
        <label>
          Země původu: {country}
          <select value={country} onChange={handleChangeCountry}> 
            <option value="Chorvatsko">Chorvatsko</option>
            <option value="Česká republika">Česká republika</option>
            <option value="Polsko">Polsko</option>
            <option value="Slovenská republika">Slovenská republika</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" value={termAccepted} onChange={handleChangeTermsAccepted}/>
          Souhlasím s obchodními podmínkami 
        </label>
      </div>
      <div>
        <button type="submit" disabled={!(userName !== '' && termAccepted)}>
          Registrovat
        </button>
      </div>
    </form>
  );
};

render(<App />, document.querySelector('#app'));