'use strict';

const aws = require('aws-sdk')
const IS_OFFLINE = process.env.IS_OFFLINE

if (IS_OFFLINE) {
  aws.config.loadFromPath('./config.json')
}

const ses = new aws.SES()
const TO_EMAIL = process.env.TO_EMAIL
const SOURCE = process.env.SOURCE
const CORS_DOMAIN = process.env.CORS_DOMAIN

function generateResponse(code, payload) {
  return {
    statusCode: code,
    headers: {
      'Accces-Control-Allow-Origin': CORS_DOMAIN
    },
    body: JSON.stringify(payload)
  }
}

function validateData(data) {
  const {
    name,
    email,
    message,
    password,
  } = JSON.parse(data)

  if (!name || !email || !message) {
    throw new Error('Missing params')
  }

  if (password) {
    console.log('==PASSWORD_ERROR==')
    throw new Error('An error has occured')
  }

  return { name, email, message }
}

function sendEmail(formData) {
  const params = {
    Source: `mailer@${SOURCE}`,
    ReplyToAddresses: [formData.email],
    Destination: {
      ToAddresses: [TO_EMAIL],
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: `New Message from ${formData.email}`,
      },
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `${formData.message}`,
        }
      }
    },
  }

  return ses.sendEmail(params).promise()
}

module.exports.mailer = async (event, context) => {
  try {
    const formData = validateData(event.body)
    await sendEmail(formData)
    return generateResponse(200, 'Success!')
  } catch(err) {
    console.log(event.requestContext.identity.sourceIp, event.requestContext.identity.userAgent)
    console.log(err)
    return generateResponse(400, 'An Error has occured please try again')
  }
}
