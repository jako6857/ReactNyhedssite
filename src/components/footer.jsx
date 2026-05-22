import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <h4>Adresse:</h4>
          <p>Intet nyt – Godt nyt ApS</p>
          <p>Tulipanvej 232</p>
          <p>7320</p>
          <p>Valby Øster</p>
        </div>
        <div className="footer__col">
          <h4>Links</h4>
          <a href="#">vikarnweb.dk</a>
          <a href="#">overpladenanderensdk.dk</a>
          <a href="#">retailinformation.dk</a>
          <a href="#">nogetmedneews.dk</a>
        </div>
        <div className="footer__col">
          <h4>Politik</h4>
          <a href="#">Privatlivspolitik</a>
          <a href="#">Cookiepolitik</a>
          <a href="#">Kildeinformation</a>
          <a href="#">Delingspolitik</a>
        </div>
        <div className="footer__col">
          <h4>Kontakt</h4>
          <p>ingn@nyhed.dk</p>
          <p>telefon: 23232323</p>
          <p>fax: 123123-333</p>
        </div>
      </div>
    </footer>
  );
}
