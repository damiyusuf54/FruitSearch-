const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const query = str.toLowerCase();
  results = fruit.filter(f => f.toLowerCase().includes(query));
	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
  if (inputVal === '') {
    return;
}
results.forEach(result => {
	const li = document.createElement('li');
	li.textContent = result;
	suggestions.appendChild(li);
	li.addEventListener('mouseover', highlightSuggestion);
  li.addEventListener('mouseout', removeHighlight);
});
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
    const suggestion = e.target.textContent;
    input.value = suggestion;
    suggestions.innerHTML = '';
  }
}

function highlightSuggestion(e) {
  e.target.classList.add('highlight');
}

function removeHighlight(e) {
  e.target.classList.remove('highlight');
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);