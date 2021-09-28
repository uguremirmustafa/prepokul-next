import React from 'react';
export default function Table({ tableContent }) {
  const { rows } = tableContent;
  const basliklar = rows[0].cells;
  const icerik = rows.slice(1);
  //   console.log(icerik)
  return (
    <table className="table">
      <thead>
        {basliklar.map((i) => (
          <th key={i}>{i}</th>
        ))}
      </thead>
      <tbody>
        {icerik.map((satir, index) => (
          <tr key={index}>
            {satir.cells.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
