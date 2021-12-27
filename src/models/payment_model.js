const { PrismaClient } = require("@prisma/client");
const createError = require('http-errors');

const prisma = new PrismaClient()


class Payment {
  constructor(dataPayment) {
    this.dataPayment = { ...dataPayment }
  }

  createPayment() {

    return new Promise((resolve, reject) => {
      const { 
        order_id, 
        transaction_id,
        gross_amount,
        transaction_status,
        transaction_time,
        payment_type
      } = this.dataPayment;

      prisma.payment.create({
        data: {
          order_id,
          transaction_id,
          gross_amount,
          transaction_status,
          transaction_time,
          payment_type,
          payment_history: {
            create: {
              order_id,
              transaction_id,
              transaction_time,
              transaction_status
            }
          }
        }
      }).then(() => {
        resolve("Data Payment Saved!")
      }).catch((error) => {
        console.log(error);
        return reject(createError.BadGateway('Failed saved payment!'))
      }).finally(() => {
        prisma.$disconnect()
      })
    })
  }

  updatePayment() {
    return new Promise((resolve, reject) => {
      const { 
        order_id, 
        transaction_status,
        transaction_time,
      } = this.dataPayment;

      prisma.payment.update({
        where: { order_id },
        data: {
          transaction_status,
          transaction_time,
        }
      }).then(async () => {
        await this.addPaymentHistory().then(() => {
          resolve('Update payment successfully')
        })

      }).catch((error) => {
        console.log(error);
        return reject(createError.BadGateway('Failed saved payment!'))
      }).finally(() => {
         prisma.$disconnect()
      })
    })
  }

  addPaymentHistory() {
    return new Promise((resolve, reject) => {
      const { 
        order_id, 
        transaction_id,
        transaction_status,
        transaction_time,
      } = this.dataPayment;

      prisma.paymentHistory.create({
        data : {
          order_id,
          transaction_id,
          transaction_status,
          transaction_time,
          Payment: {
            connect: {
              order_id
            }
          }
        }
      }).then(() => {
        resolve("Adding payment history!")
      }).catch((error) => {
        console.log(error);
        return reject(createError.BadGateway('Failed saved payment!'))
      }).finally(() => {
        prisma.$disconnect()
      })
    })
  }

  static findPaymentByOrderId(orderId) {
    return new Promise((resolve, reject) => {
      prisma.payment.findMany({
        where: {order_id: orderId},
        include: {
          payment_history: true
        }
      }).then((result) => {
        resolve(result)
      }).catch((error) => {
        console.log(error);
        return reject(createError.NotFound())
      }).finally(() => {
        prisma.$disconnect()
      })
    })
  }
}

module.exports = Payment