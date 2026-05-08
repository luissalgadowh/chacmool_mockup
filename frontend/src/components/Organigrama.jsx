import React, { useEffect, useState, useMemo } from 'react';
import { Network, Users, AlertCircle } from 'lucide-react';

const API = process.env.REACT_APP_BACKEND_URL;

// Renderizador iterativo del árbol (evita auto-referencia de componentes
// que rompe al plugin de visual-edits con recursión profunda).
function renderTree(roots) {
  // Producimos elementos React usando React.createElement para evitar
  // que el plugin de babel intente analizar las llamadas JSX recursivas.
  const h = React.createElement;

  function renderCard(item) {
    const perfil = item.perfilPuesto || item.position || 'Sin perfil';
    return h(
      'div',
      { className: 'bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all px-5 py-4 min-w-[240px] max-w-[260px] flex items-center gap-3' },
      item.avatar
        ? h('img', { src: item.avatar, alt: item.name, className: 'w-11 h-11 rounded-full object-cover border-2 border-white shadow' })
        : h('div', { className: 'w-11 h-11 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-sm' }, item.name ? item.name.charAt(0) : '?'),
      h(
        'div',
        { className: 'flex-1 min-w-0' },
        h('p', { className: 'font-semibold text-slate-900 text-sm truncate' }, item.name),
        h('p', { className: 'text-xs text-slate-500 truncate', title: perfil }, perfil),
        item.department
          ? h('span', { className: 'inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600' }, item.department)
          : null
      )
    );
  }

  function renderNode(item, key) {
    const childrenList = item.children || [];
    const hasChildren = childrenList.length > 0;

    const childrenBlock = hasChildren
      ? h(
          'div',
          { className: 'flex flex-col items-center', key: 'cb' },
          h('div', { className: 'w-px h-6 bg-slate-300', key: 'l1' }),
          h(
            'div',
            { className: 'relative flex items-start justify-center', key: 'row' },
            childrenList.length > 1
              ? h('div', { className: 'absolute top-0 left-6 right-6 h-px bg-slate-300', key: 'hl' })
              : null,
            h(
              'div',
              { className: 'flex items-start gap-8', key: 'flex' },
              childrenList.map(function (c) {
                return h(
                  'div',
                  { key: 'w-' + c.id, className: 'flex flex-col items-center' },
                  h('div', { className: 'w-px h-6 bg-slate-300', key: 'l2' }),
                  renderNode(c, c.id)
                );
              })
            )
          )
        )
      : null;

    return h(
      'div',
      { className: 'flex flex-col items-center', key: 'n-' + key },
      renderCard(item),
      childrenBlock
    );
  }

  return roots.map(function (r) { return renderNode(r, r.id); });
}

function Organigrama() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function load() {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(API + '/api/employees', {
          headers: { Authorization: 'Bearer ' + token },
        });
        if (!res.ok) throw new Error('No se pudo cargar la lista de empleados');
        const data = await res.json();
        setEmployees(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message || 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const treeData = useMemo(function () {
    const byId = new Map();
    employees.forEach(function (e) {
      byId.set(String(e.id), Object.assign({}, e, { children: [] }));
    });

    const roots = [];
    const orphans = [];

    byId.forEach(function (node) {
      const parentId = node.responsable ? String(node.responsable) : null;
      if (parentId && byId.has(parentId) && parentId !== String(node.id)) {
        byId.get(parentId).children.push(node);
      } else if (parentId && !byId.has(parentId)) {
        orphans.push(node);
      } else {
        roots.push(node);
      }
    });

    function sortRec(arr) {
      arr.sort(function (a, b) { return a.name.localeCompare(b.name); });
      arr.forEach(function (n) { sortRec(n.children); });
    }
    sortRec(roots);
    sortRec(orphans);

    return { roots: roots, orphans: orphans };
  }, [employees]);

  const roots = treeData.roots;
  const orphans = treeData.orphans;
  const totalEmpleados = employees.length;
  const conResponsable = employees.filter(function (e) { return !!e.responsable; }).length;
  const sinResponsable = totalEmpleados - conResponsable;

  return (
    <div className="animate-fade-in">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight" style={{ fontFamily: 'Outfit' }}>
            Organigrama
          </h1>
          <p className="text-slate-500 mt-1">Estructura organizacional construida a partir del campo Responsable</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-700">{totalEmpleados} empleados</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 flex items-center gap-2">
            <Network className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-700">{roots.length} {roots.length === 1 ? 'líder' : 'líderes'}</span>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500">Cargando organigrama…</div>
      ) : null}

      {!loading && error ? (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
          <div>
            <p className="font-medium text-red-700">No se pudo cargar el organigrama</p>
            <p className="text-sm text-red-600 mt-1">{error}</p>
          </div>
        </div>
      ) : null}

      {!loading && !error && totalEmpleados === 0 ? (
        <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-16 text-center">
          <p className="text-slate-500">No hay empleados registrados todavía.</p>
        </div>
      ) : null}

      {!loading && !error && totalEmpleados > 0 ? (
        <div>
          {sinResponsable > 0 ? (
            <div className="mb-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div className="text-sm text-amber-800">
                <p className="font-medium">{sinResponsable} {sinResponsable === 1 ? 'empleado sin responsable asignado' : 'empleados sin responsable asignado'}</p>
                <p className="text-amber-700 mt-0.5">
                  Se muestran como nodos raíz. Asígnales un responsable desde su perfil → Datos laborales para reflejar la jerarquía correcta.
                </p>
              </div>
            </div>
          ) : null}

          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 overflow-x-auto">
            <div className="min-w-max flex flex-col items-center gap-12">
              {renderTree(roots)}

              {orphans.length > 0 ? (
                <div className="w-full mt-8 pt-8 border-t border-dashed border-slate-300">
                  <p className="text-sm font-medium text-slate-600 mb-4 text-center">
                    Empleados con responsable inválido
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                    {renderTree(orphans)}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Organigrama;
