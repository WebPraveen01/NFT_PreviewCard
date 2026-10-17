import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="card">
        <div className="card_images">
          <img
            className="card__images-layer"
            src="../src/assets/image-equilibrium.jpg"
            alt="nft_image"
          />
        </div>
        <h1 className="card_title">Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="card_time">
          <span className="card__time-left">
            <img src="../src/assets/icon-ethereum.svg" alt="NFT icon" />
            0.041 ETH
          </span>
          <span className="card__time-right">
            <img src="../src/assets/icon-clock.svg" alt="Clock icon" />3 days
            left.
          </span>
        </div>
        <div className="card__creator">
          <img
            className=""
            src="../src/assets/logo.jpeg"
            alt="creataor_avatar"
            width={40}
            height={40}
          />
          <p>
            Creation of{" "}
            <a
              href="https://www.crio.do"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <span style={{ color: "white" }}>Ketean Mokode</span>
          </p>
        </div>
      </main>
      <footer className="attribution">
        Challange By{" "}
        <a href="https://www.crio.do" target="_blank" rel="noopener noreferrer">
          Crio.do{" "}
        </a>
        Coded By <span><a href="https://github.com/WebPraveen01" target="_blank" rel="noopener noreferrer">
          Praveen Pal{" "}
        </a></span>
      </footer>
    </>
  );
}

export default App
