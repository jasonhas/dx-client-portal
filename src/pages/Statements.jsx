import Bills from '../data/statements'

export default function Statements() {

    return (
    <div className='p-7 text-2xl font-semibold flex-1 h-screen text-center'>
        <h1>Statements</h1>

<div class="md:px-32 py-8 w-full">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-100">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 text-sm font-medium tracking-wider text-gray-700 uppercase">Date</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-medium tracking-wider text-gray-700 text-sm">Account</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Type</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Statement</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">
        {
            Bills.map((bill,i) => {
                return (
                    <tr key={bill.id} className='text-left'>
        <td class="py-4 px-4 text-sm font-medium text-gray-500 whitespace-nowrap">{bill.date}</td>
        <td class="py-4 px-4 text-sm font-medium text-gray-500 whitespace-nowrap">{bill.name}</td>
        <td class="py-4 px-4 text-sm font-medium text-gray-500 whitespace-nowrap">{bill.type}</td>
        <td class="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap underline"><a class="hover:text-blue-500" href={bill.doc} target="new">Statement</a></td>
                    </tr>
                )

            })
        }
    </tbody>
    </table>
  </div>
</div>
    </div>
    )
}