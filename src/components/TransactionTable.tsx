const transactions = [
  {
    id: 1,
    user: "Ajith",
    amount: "$450",
    status: "Safe"
  },
  {
    id: 2,
    user: "Rahul",
    amount: "$1200",
    status: "Fraud"
  },
  {
    id: 3,
    user: "Priya",
    amount: "$200",
    status: "Safe"
  }
]

function TransactionTable() {

  return (

    <table className="w-full bg-white shadow rounded">

      <thead className="bg-gray-200">

        <tr>
          <th className="p-3 text-left">User</th>
          <th className="p-3 text-left">Amount</th>
          <th className="p-3 text-left">Status</th>
        </tr>

      </thead>

      <tbody>

        {transactions.map((t) => (

          <tr key={t.id} className="border-t">

            <td className="p-3">{t.user}</td>
            <td className="p-3">{t.amount}</td>

            <td className="p-3">

              {t.status === "Fraud" ? (
                <span className="text-red-500 font-bold">
                  Fraud
                </span>
              ) : (
                <span className="text-green-600">
                  Safe
                </span>
              )}

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  )
}

export default TransactionTable