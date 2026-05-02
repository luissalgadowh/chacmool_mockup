// Lógica simple para añadir/eliminar items dinámicos

function addItem(listId) {
  const list = document.getElementById(listId);
  const isSuccess = listId.startsWith('aciertos');
  const placeholder = listId.includes('colab')
    ? (isSuccess ? 'Acierto del colaborador...' : 'Desacierto del colaborador...')
    : (isSuccess ? 'Acierto de la empresa...' : 'Desacierto de la empresa...');

  const row = document.createElement('div');
  row.className = 'list-row';
  row.innerHTML = `
    <input type="text" class="${isSuccess ? 'input-success' : 'input-danger'}" placeholder="${placeholder}" />
    <button class="btn-remove" aria-label="Eliminar" onclick="this.parentElement.remove()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
    </button>
  `;
  list.appendChild(row);
}

function addCompromiso() {
  const tbody = document.getElementById('compromisos-body');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>
      <select class="select-sm">
        <option value="colaborador">Colaborador</option>
        <option value="empresa">Empresa</option>
      </select>
    </td>
    <td><input type="text" class="input-sm" placeholder="Descripción del compromiso..." /></td>
    <td><input type="date" class="input-sm" style="width:auto;" /></td>
    <td>
      <button class="btn-remove" aria-label="Eliminar" onclick="this.closest('tr').remove()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/></svg>
      </button>
    </td>
  `;
  tbody.appendChild(tr);
}
