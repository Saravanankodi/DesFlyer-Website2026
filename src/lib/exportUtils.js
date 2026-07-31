// Real, working client-side export — no backend needed for this part.
import * as XLSX from 'xlsx'

export function exportToCSV(rows, filename = 'export.csv') {
  if (!rows.length) return
  const headers = Object.keys(rows[0])
  const csvRows = [
    headers.join(','),
    ...rows.map((row) =>
      headers
        .map((h) => {
          const val = String(row[h] ?? '').replace(/"/g, '""')
          return `"${val}"`
        })
        .join(','),
    ),
  ]
  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' })
  downloadBlob(blob, filename)
}

export function exportToXLSX(rows, filename = 'export.xlsx', sheetName = 'Sheet1') {
  if (!rows.length) return
  const worksheet = XLSX.utils.json_to_sheet(rows)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)
  XLSX.writeFile(workbook, filename)
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
