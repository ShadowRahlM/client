const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

exports.handleContactForm = functions.firestore
  .document('messages/{docId}')
  .onCreate(async (snap, context) => {
    const { name, email, message, phone } = snap.data();

    const notification = {
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection('notifications').add(notification);
    console.log('New contact form submission:', name);
  });

exports.handleBooking = functions.firestore
  .document('bookings/{docId}')
  .onCreate(async (snap, context) => {
    const { name, phone, service, date, time } = snap.data();

    const notification = {
      subject: `New Booking: ${service}`,
      text: `Name: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}`,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection('notifications').add(notification);
    console.log('New booking:', name, service);
  });
