import React, { FC, useState } from 'react'

interface formProps{
  onSubmit: (e: any) => void
}

const Form: FC<formProps> = ({onSubmit}) => {
  const [newItem, setNewItem] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newItem === "") return
    onSubmit(newItem)
    setNewItem('')
  }

  return <form onSubmit={handleSubmit} className='new-item-form'>
    <div className="mb-6">
      <label htmlFor="default-input" className="block">New Items</label>
      <input
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text"
        id="id"
        className="bg-yellow-300 text-black"
        placeholder='Add a Todo' />
      <button className='border-blue-500 block'>add</button>
    </div>
  </form>
}

export default Form