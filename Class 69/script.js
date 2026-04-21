 let selectedPrice = 16.99;
    let selectedType = "Paperback";

    function updatePrice(type, price, element) {
        selectedPrice = price;
        selectedType = type;
        document.getElementById('current-price').innerText = price;
        
   
        document.querySelectorAll('.format-btn').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');
    }

    
    const img = document.getElementById('main-img');
    const result = document.getElementById('zoom-result');

    img.addEventListener('mousemove', (e) => {
        result.style.visibility = "visible";
        const { left, top, width, height } = img.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        
        result.style.backgroundImage = `url('${img.src}')`;
        result.style.backgroundSize = `${width * 2.5}px ${height * 2.5}px`;
        result.style.backgroundPosition = `${x}% ${y}%`;
    });

    img.addEventListener('mouseleave', () => {
        result.style.visibility = "hidden";
    });

  
    function openModal() {
        const qty = document.getElementById('qty').value;
        const total = (selectedPrice * qty).toFixed(2);
        document.getElementById('summary-text').innerHTML = 
            `You have bought <strong>${qty}</strong> unit(s) of <strong>${selectedType}</strong>.<br><br>` +
            `<strong>Total to pay: $${total}</strong>`;
        document.getElementById('modal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }
