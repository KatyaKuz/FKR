// Завдання 2
const count1Input = document.getElementById('count1');
const count2Input = document.getElementById('count2');
const totalSpan = document.getElementById('total'); // Завдання 3

function sanitizeInput(input) {
  // Лише цифри
  let cleaned = input.value.replace(/\D/g, '');
  cleaned = cleaned.replace(/^0+(?!$)/, '');
  if (cleaned === '') cleaned = '0';
  input.value = cleaned;
  updateTotal(); // Завдання 3
}

count1Input.addEventListener('input', () => sanitizeInput(count1Input));
count2Input.addEventListener('input', () => sanitizeInput(count2Input));

// Додавання
function add1() {
  count1Input.value = parseInt(count1Input.value || '0') + 1;
  updateTotal(); // Завдання 3
}

function add2() {
  count2Input.value = parseInt(count2Input.value || '0') + 1;
  updateTotal(); // Завдання 3
}

// Віднімання
function deleting1() {
  const val = parseInt(count1Input.value || '0');
  if (val > 0) {
    count1Input.value = val - 1;
    updateTotal(); // Завдання 3
  }
}

function deleting2() {
  const val = parseInt(count2Input.value || '0');
  if (val > 0) {
    count2Input.value = val - 1;
    updateTotal(); // Завдання 3
  }
}

// Завдання 3
function updateTotal() {
  const val1 = parseInt(count1Input.value || '0');
  const val2 = parseInt(count2Input.value || '0');
  const total = val1 + val2;

  return total;
}

function submit() {
  const count1 = parseInt(count1Input.value || '0');
  const count2 = parseInt(count2Input.value || '0');
  const product1 = document.getElementById('product1').value;
  const product2 = document.getElementById('product2').value;

  const payload = {
    items: [
      { name: product1, count: count1 },
      { name: product2, count: count2 }
    ]
  };

  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
    if (data.response === 'ОК') {
      // Виведе значення total після тексту "Total:" + тільки при OК
      totalSpan.textContent = data.total; // через updateTotal()
    } else {
      alert(data.response);
    }
  })
  .catch(err => {
    console.error('Помилка:', err);
    alert('Сталася помилка при з’єднанні з сервером.');
  });
}
