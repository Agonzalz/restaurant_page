export default function loadMenu() {
    const content = document.getElementById('content');
  
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
  
    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
  
    const menuList = document.createElement('ul');
  
    const menuItems = [
      {
        name: 'Grilled Salmon',
        description: 'Fresh Atlantic salmon grilled to perfection.',
      },
      {
        name: 'Filet Mignon',
        description: 'Tender beef filet served with garlic mashed potatoes.',
      },
      {
        name: 'Lobster Bisque',
        description: 'Creamy soup made from fresh lobster and herbs.',
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.',
      },
    ];
  
    menuItems.forEach(item => {
      const listItem = document.createElement('li');
      const itemName = document.createElement('h3');
      itemName.textContent = item.name;
  
      const itemDesc = document.createElement('p');
      itemDesc.textContent = item.description;
  
      listItem.appendChild(itemName);
      listItem.appendChild(itemDesc);
      menuList.appendChild(listItem);
    });
  
    menuDiv.appendChild(headline);
    menuDiv.appendChild(menuList);
  
    content.appendChild(menuDiv);
  }
  