import './Header.css'


function Header() {

  return (
    <>
      <div className='navbar'>
        <div className='leftPanel'>
          <div className='logo'>
            <a href="/">
              <svg viewBox="-52.5 0 361 361">
                <path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#ffffff" />
                <path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#2c2c2c" />
                <path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#2c2c2c" />
              </svg>
            </a>
          </div>
        </div>
        <div className='middle'>
        </div>
        <div className='rightPanel'>
          <div className='rightText'>Zadanie&nbsp;
            <div className='showUser'>
              rekrutacyjne
            </div>
          </div>
          <div className='userName'>Marcin Żamojda</div>
        </div>
      </div>
    </>
  )
}

export default Header