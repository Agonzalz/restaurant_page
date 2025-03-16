export default function loadContact() {
    const content = document.getElementById('content');
  
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
  
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
  
    const phone = document.createElement('p');
    phone.textContent = '📞 Phone: (123) 456-7890';
  
    const email = document.createElement('p');
    email.textContent = '📧 Email: contact@gourmetpalace.com';
  
    const address = document.createElement('p');
    address.textContent = '📍 Address: 123 Flavor Street, Food City';
  
    contactDiv.appendChild(headline);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);
    contactDiv.appendChild(address);
  
    content.appendChild(contactDiv);
  }
  