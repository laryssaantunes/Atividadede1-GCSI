const buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {buttons[i].onclick = function() {alert('Você clicou em "Saiba Mais"!');
     buttons[i].textContent = 'Obrigado por clicar!';
     buttons[i].disabled = true;
    };
}