const midtransCLient = require('midtrans-client');
const Str = require('@supercharge/strings')

const sendPayment = (req, res, next) => {
  
  const random = Str.random()
  
  const snap = new midtransCLient.Snap({
    isProduction: false,
    serverKey: "SB-Mid-server-V_UrtLS-DUdofGmSL0mK7hbv",
    clientKey: "SB-Mid-client-v5DgZkUJTGfVjKdW"
  })
  
  const parameter = {
    "transaction_details": {
        "order_id": random,
        "gross_amount": 20000
    },
    "item_details": [
      {
        "id": "ITEM3",
        "price": 10000,
        "quantity": 1,
        "name": "Midtrans Bear",
        "brand": "Midtrans",
        "category": "Toys",
        "merchant_name": "Midtrans"
      },
      {
        "id": "ITEM4",
        "price": 10000,
        "quantity": 1,
        "name": "Midtrans Bear2",
        "brand": "Midtrans",
        "category": "Toys",
        "merchant_name": "Midtrans"
      }
    ],
    "credit_card":{
        "secure" : true
    },
    "customer_details": {
      "first_name": "Sultan",
      "last_name": "Agung",
      "email": "budi.pra@example.com",
      "phone": "08111222333",
    }
  };
  
  snap.createTransaction(parameter).then((tx) => {
    const {token, redirect_url} = tx;
  
    res.json({
      token,
      redirect_url
    })
  }).catch(err => console.log(err))
  
}

module.exports = sendPayment;