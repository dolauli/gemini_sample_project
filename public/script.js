document.addEventListener('DOMContentLoaded', () => {
  const scheduleContainer = document.getElementById('schedule');
  const searchInput = document.getElementById('searchInput');
  let talksData = [];

  fetch('/api/talks')
    .then(response => response.json())
    .then(data => {
      talksData = data;
      renderSchedule(talksData);
    });

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTalks = talksData.filter(item => {
      if (item.type !== 'talk') {
        return true;
      }
      return item.category.some(cat => cat.toLowerCase().includes(searchTerm));
    });
    renderSchedule(filteredTalks);
  });

  function renderSchedule(data) {
    scheduleContainer.innerHTML = '';
    data.forEach(item => {
      const element = document.createElement('div');
      element.classList.add(item.type);

      let content = `<h2>${item.time} - ${item.title}</h2>`;
      if (item.type === 'talk') {
        content += `
          <div class="details">
            <span class="speakers">${item.speakers.join(', ')}</span>
            <span class="category">${item.category.join(', ')}</span>
          </div>
          <p>${item.description}</p>
        `;
      }
      element.innerHTML = content;
      scheduleContainer.appendChild(element);
    });
  }
});
