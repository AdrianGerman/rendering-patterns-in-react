import { useState } from "react"

export const ControlledInput = () => {
  const [value, setValue] = useState("")
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ingresa el código del cupón. Ej: 100FF"
      />
      <p>
        Cupón de descuento: <b>{value}</b>
      </p>
    </div>
  )
}
