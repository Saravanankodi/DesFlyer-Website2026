import { useMemo, useState } from 'react'
import { FiSearch, FiDownload, FiTrash2, FiFileText, FiEye } from 'react-icons/fi'
import { exportToCSV, exportToXLSX } from '../../lib/exportUtils'

export default function AdminDataTable({
  rows,
  columns, // [{ key, label }]
  searchKeys, // fields to search across
  statusOptions, // if provided, renders a status dropdown per row using `statusKey`
  statusKey = 'status',
  onStatusChange,
  onDelete,
  exportFilename = 'export',
  resumeKey, // if provided, shows a (mock) download-resume action
  onView, // if provided, shows a View action opening a detail modal
}) {
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filtered = useMemo(() => {
    return rows.filter((row) => {
      const matchesQuery =
        !query ||
        searchKeys.some((k) => String(row[k] ?? '').toLowerCase().includes(query.toLowerCase()))
      const matchesStatus = statusFilter === 'All' || row[statusKey] === statusFilter
      return matchesQuery && matchesStatus
    })
  }, [rows, query, statusFilter, searchKeys, statusKey])

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="relative flex-1 min-w-[200px]">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--fg)]/40" size={15} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm text-[var(--fg)] outline-none focus:border-signal"
          />
        </div>

        {statusOptions && (
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm text-[var(--fg)] outline-none focus:border-signal"
          >
            <option value="All">All statuses</option>
            {statusOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        )}

        <button
          onClick={() => exportToCSV(rows, `${exportFilename}.csv`)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] text-sm text-[var(--fg)]/70 hover:border-signal hover:text-signal transition-colors"
        >
          <FiDownload size={14} /> CSV
        </button>
        <button
          onClick={() => exportToXLSX(rows, `${exportFilename}.xlsx`)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border)] text-sm text-[var(--fg)]/70 hover:border-signal hover:text-signal transition-colors"
        >
          <FiDownload size={14} /> Excel
        </button>
      </div>

      <div className="border border-[var(--border)] rounded-2xl overflow-x-auto">
        <table className="w-full text-sm min-w-[720px]">
          <thead>
            <tr className="border-b border-[var(--border)]">
              {columns.map((c) => (
                <th key={c.key} className="text-left font-mono text-xs uppercase tracking-[0.08em] text-[var(--fg)]/50 px-5 py-4">
                  {c.label}
                </th>
              ))}
              {(onStatusChange || onDelete || resumeKey || onView) && (
                <th className="text-left font-mono text-xs uppercase tracking-[0.08em] text-[var(--fg)]/50 px-5 py-4">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-5 py-10 text-center text-[var(--fg)]/40 text-sm">
                  No results found.
                </td>
              </tr>
            )}
            {filtered.map((row) => (
              <tr key={row.id} className="border-b border-[var(--border)] last:border-0">
                {columns.map((c) => (
                  <td key={c.key} className="px-5 py-4 text-[var(--fg)]/80 max-w-xs truncate">
                    {row[c.key]}
                  </td>
                ))}
                {(onStatusChange || onDelete || resumeKey || onView) && (
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      {onStatusChange && statusOptions && (
                        <select
                          value={row[statusKey]}
                          onChange={(e) => onStatusChange(row.id, e.target.value)}
                          className="text-xs px-2.5 py-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] text-[var(--fg)] outline-none"
                        >
                          {statusOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      )}
                      {resumeKey && row[resumeKey] && (
                        <span
                          title="Resume storage not connected yet"
                          className="flex items-center gap-1 text-xs text-[var(--fg)]/40 cursor-not-allowed"
                        >
                          <FiFileText size={13} /> {row[resumeKey]}
                        </span>
                      )}
                      {onView && (
                        <button
                          onClick={() => onView(row)}
                          aria-label="View"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--fg)]/40 hover:text-signal hover:bg-signal/10 transition-colors"
                        >
                          <FiEye size={14} />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(row.id)}
                          aria-label="Delete"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--fg)]/40 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                        >
                          <FiTrash2 size={14} />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
