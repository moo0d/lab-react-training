import React from 'react'

function formatCreditNumber(number) {
    let last4 = number.slice(-4)
    return `●●●● ●●●● ●●●● ${last4}`

}

function CreditCard(props) {
    let cardStyle = {
        backgroundColor: `${props.bgColor}`,
        width: '350px',
        height: '200px',
        position: 'relative',
    }
    let colorStyle = {
        color: `${props.color}`,
    }

  return (
    <div className='Credit-Card' style={cardStyle}>

    <div className='Credit-Type' style={colorStyle}>
        <p>{props.type}</p>
        </div>
    <div className='Credit-Number' style={colorStyle}>
        <p>{formatCreditNumber(props.number)}</p>
        </div>
    <div className='Credit-Expiration' style={colorStyle}>
        <p>Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</p>
        </div>

    <div className='Credit-Owner' style={colorStyle}>
        <p>{props.owner}</p>
        </div>   
    </div>
    
  )
}

export default CreditCard