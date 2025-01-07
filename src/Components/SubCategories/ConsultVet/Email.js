import emailjs from 'emailjs-com';

// Inside ConsultVet component
const handleSubmit = async (e) => {
  e.preventDefault();
  const { name, email, phone, query } = formData;

  try {
    const response = await emailjs.send(
      'your_service_id', // Your service ID from EmailJS
      'your_template_id', // Your template ID
      {
        from_name: name,
        from_email: email,
        from_phone: phone,
        message: query,
      },
      'your_user_id' // Your EmailJS user ID
    );
    alert("Your query has been sent!");
  } catch (error) {
    console.error('Failed to send email:', error);
    alert("There was an issue sending your query. Please try again.");
  }
};
