const STATS = [
    {year: '2023', projects: 125, clients: 40, revenue: "1.5M", employees: 25},
    {year: '2022', projects: 100, clients: 35, revenue: "1.2M", employees: 20}
]

function TableSection() {
  return (
    <div className="bg-blue-200 relative">
        <div className="container mx-auto w-full h-full px-2 py-10">
            <h2 className="text-xl pt-2 font-semibold text-center">Agency Statistics</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse bg-white border border-gray-200 rounded-lg shadow-md mt-4">
                    <thead>
                        <tr className="bg-gray-100 text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Year</th>
                            <th className="py-3 px-6 text-left">Project Completed</th>
                            <th className="py-3 px-6 text-left">Total Clients</th>
                            <th className="py-3 px-6 text-left">Revenue</th>
                            <th className="py-3 px-6 text-left">Employees</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                        {STATS.map((data, index) => (
                            <tr key={index}>
                                <td className="py-3 px-6">{data.year}</td>
                                <td className="py-3 px-6">{data.projects}</td>
                                <td className="py-3 px-6">{data.clients}</td>
                                <td className="py-3 px-6">{data.revenue}</td>
                                <td className="py-3 px-6">{data.employees}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default TableSection