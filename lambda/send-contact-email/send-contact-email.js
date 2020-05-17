// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const CONTACT_EMAIL = 'juszczykjakub@gmail.com'

exports.handler = (event, context, callback) => {

  try {
    const { description, adults, children, email, name, surname, phone, accomodation, extraPayment } = JSON.parse(event.body)

    const msg = {
      to: CONTACT_EMAIL,
      from: 'juszczykjakub@gmail.com',
      subject: 'New tour',
      text: 'New tour',
      html: `
        <p>adults: ${adults}</p>
        <p>children: ${children || 0}</p>
        <p>email: ${email}</p>
        <p>name: ${name}</p>
        <p>surname: ${surname}</p>
        <p>phone: ${phone}</p>
        <p>accomodation: ${accomodation ? 'yes' : 'no'}</p>
        <p>extraPayment: ${extraPayment ? 'yes' : 'no'}</p>
        <p>description: ${description}</p>
      `,
    };
    sgMail.send(msg).then(
      () =>       callback(null, {
        statusCode: 200,
        body: ''
      }),
      error => callback(null, {
        statusCode: 500,
        body: JSON.stringify(error)
      })
    )
  } catch (e) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify(e)
    })
  }

}
