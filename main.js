// Завдання 2
const count1Input = document.getElementById('count1');
const count2Input = document.getElementById('count2');


function sanitizeInput(input) {
  // Лише цифри
  let cleaned = input.value.replace(/\D/g, '');
  cleaned = cleaned.replace(/^0+(?!$)/, '');
  if (cleaned === '') cleaned = '0';
  input.value = cleaned;
}

count1Input.addEventListener('input', () => sanitizeInput(count1Input));
count2Input.addEventListener('input', () => sanitizeInput(count2Input));

// Додавання
function add1() {
  count1Input.value = parseInt(count1Input.value || '0') + 1;
}

function add2() {
  count2Input.value = parseInt(count2Input.value || '0') + 1;
}

// Віднімання
function deleting1() {
  const val = parseInt(count1Input.value || '0');
  if (val > 0) {
    count1Input.value = val - 1;
  }
}

function deleting2() {
  const val = parseInt(count2Input.value || '0');
  if (val > 0) {
    count2Input.value = val - 1;
  }
}


