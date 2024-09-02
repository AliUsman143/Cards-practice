"use client"
const ETargetvalueee = () => {
    const arry=[]
    const invoke=(e)=>{
        arry.push(e.target.value)
        console.log(arry)
    }
  return (
    <div>
         <input
          type="text"
          placeholder="Search..."
          className="border p-2 w-full mb-4 sticky top-0 z-50"
          onChange={invoke}
        />
    </div>
  )
}

export default ETargetvalueee