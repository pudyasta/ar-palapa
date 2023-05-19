// import React, { useState } from 'react';

// import { QrReader } from 'react-qr-reader';

// const QRScanner = () => {
//   const [result, setResult] = useState('');

//   const handleScan = (data) => {
//     if (data) {
//       setResult(data);
//     }
//   }

//   const handleError = (err) => {
//     console.error(err);
//   }

//   return (
//     <div>
//       <h1>QR Code Scanner</h1>
//       <QrReader
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: '300px', margin: '0 auto' }}
//       />
//       <p>{result}</p>
//     </div>
//   );
// }

// export default QRScanner;



import {QrScanner} from '@yudiel/react-qr-scanner';
import { useNavigate } from "react-router-dom";




const QRScanner = () => {

  const navigateTo = useNavigate();

  const handleRes = (res) => {
    console.log(res);
    navigateTo("/blogs");
    window.location.reload();
  };

  const toFormasi = () => {
    navigateTo("/Scanner");
  }

  const myStyle = {
    height: '500px',
  };


  return (
    <div>
      <button onClick={toFormasi()} >
        Formasi
      </button>
      <QrScanner
          style={myStyle}
          onResult={(result) => handleRes(result)}
          onDecode={(result) => console.log(result)}
          onError={(error) => console.log(error?.message)}
          
      />
    </div>
  );

}

export default QRScanner;