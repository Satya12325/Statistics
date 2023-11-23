import { useEffect, useState } from 'react'

export default function CommonTable({data,type}:any) {
    const [tableData,setTableData] = useState({})
    useEffect(()=>{
        setTableData(data)
    },[tableData])
  return (
    <div>
    <h2>{type}  Statistics by Alcohol Class</h2>
    <table >
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(tableData).map((alcoholClass) => (
            <th key={alcoholClass}>{alcoholClass}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{type} Mean </td>
          {Object.values(tableData).map((stats:any, index) => (
            <td key={index}>{stats.mean.toFixed(2)}</td>
          ))}
        </tr>
        <tr>
          <td>{type}  Median </td>
          {Object.values(tableData).map((stats:any, index) => (
            <td key={index}>{stats.median.toFixed(2)}</td>
          ))}
        </tr>
        <tr>
          <td>{type}  Mode</td>
          {Object.values(tableData).map((stats:any, index) => (
            <td key={index}>{stats.mode.toFixed(2)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);
  
}
