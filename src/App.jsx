import equilibriumImage from './assets/image-equilibrium.jpg'
import ethereumIcon from './assets/icon-ethereum.svg'
import clockIcon from './assets/icon-clock.svg'
import creatorAvatar from './assets/logo.jpeg'
import './App.css'

function App() {
  return (
    <>
      <main className="card">
        <div className="card__images">
          <img
            className="card__images-layer"
            src={equilibriumImage}
            alt="nft_image"
          />
        </div>
        <div className="card__title">
          <h1>Equilibrium #3429</h1>
        </div>
        <p id="info">Our Equilibrium collection promotes balance and calm.</p>
        <div className="card__time">
          <span className="card__time-left">
            <img src={ethereumIcon} alt="NFT icon" />
            <span>0.041 ETH</span>
          </span>
          <span className="card__time-right">
            <img src={clockIcon} alt="Clock icon" /><span>3 days left.</span>
          </span>
        </div>
        <div className="card__creator">
          <img
            className=""
            src={creatorAvatar}
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
        Coded By <span><a href="https://www.github.com/WebPraveen01" target="_blank" rel="noopener noreferrer">
          Praveen Pal{" "}
        </a></span>
      </footer>
    </>
  );
}

export default App
