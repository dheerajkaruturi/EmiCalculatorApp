export function useCsvExporter() {
  const exportToCsv = (data, filename = 'export.csv') => {
    if (!Array.isArray(data) || data.length === 0) {
      alert('No data to export')
      return
    }

    //Extract headers from the first object
    const headers = Object.keys(data[0])

    const csvRows = []

    // Add headers
    csvRows.push(headers.join(','))

    //add row values
    for (const row of data) {
      const values = headers.map((header) => `"${row[header] !== undefined ? row[header] : ''}"`)
      csvRows.push(values.join(','))
    }

    console.log('CSV Rows:', csvRows)

    // Create a Blob from the CSV data
    const csvString = csvRows.join('\n')
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    // Create a link element to download the file
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url) // Clean up the URL object
  }

  // Maintain backward compatibility with old function name
  const downloadCSVFile = exportToCsv

  return {
    exportToCsv,
    downloadCSVFile,
  }
}
