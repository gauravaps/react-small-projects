import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRcode = () => {
    const [qrcode,setqrcode]=useState('')

    const[input,setinput]=useState('')

    const generateCode=()=>{
        setinput(input)
        setqrcode(input)
        

        setinput('')
        console.log(input);

    }
    
  return (
    <div>
        <h3>QR-Code generaroe..!!!</h3>
        <div>
            <input type="text" name='input' placeholder='enter your value here' value={input} 
            onChange={(e)=>setinput(e.target.value)}/>
            <button onClick={generateCode}>Generate QR-code</button>
        </div><br />
        <div>
            <QRCode id='qr-code-value' value={qrcode} height={200} size={200} bgColor='white'/>
            
        </div>


    </div>
  )
}

export default QRcode