import React from 'react'

const Table = ({data}) => {
  return (<div className="custom-border-purchase p-4 pb-12">
  <table className="table-auto w-full border-collapse">
    <thead>
      <tr className="custom-col-blue-purchase">
        <th className="px-4 py-2 text-xl font-semibold text-left custom-border-bottom-purchase pb-6">
          SL.No
        </th>
        <th className="px-4 py-2 text-xl font-semibold text-center custom-border-bottom-purchase pb-6">
          Date of transaction{" "}
        </th>
        <th className="px-4 py-2 text-xl font-semibold text-center custom-border-bottom-purchase pb-6">
          Type of transaction
        </th>
        <th className="px-4 py-2 text-xl font-semibold text-center custom-border-bottom-purchase pb-6">
          Quantity
        </th>
        <th className="px-4 py-2 text-xl font-semibold text-center custom-border-bottom-purchase pb-6">
          Status{" "}
        </th>
        <th className="px-4 py-2 text-xl font-semibold text-center custom-border-bottom-purchase pb-6">
          Amount{" "}
        </th>
        <th className="px-4 py-2 text-xl font-semibold text-center custom-border-bottom-purchase pb-6">
          Current Balance
        </th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td className=" px-4 py-3 text-left">{item.sno}</td>
          <td className=" px-4 py-3 text-center">{item.date}</td>
          <td className=" px-4 py-3 text-center">{item.type}</td>
          <td className=" px-4 py-3 text-center">{item.quantity}</td>
          <td className=" px-4 py-3 text-center">{item.status}</td>
          <td className=" px-4 py-3 text-center custom-green-amount">
            {item.amount}
          </td>
          <td className=" px-4 py-3 text-center">{item.currentBalance}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default Table