import { AddToCartButton } from './add-to-cart-button'
import { Test } from './test'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  const response = await fetch('https://api.github.com/users/douglasdl')
  const user = await response.json()

  // console.log(count)

  const [productId, size, color] = params.data
  //console.log(params.data)

  let colorClass = 'bg-neutral-800'
  switch (color) {
    case 'red':
      colorClass = 'bg-red-800'
      break
    case 'green':
      colorClass = 'bg-green-800'
      break
    case 'blue':
      colorClass = 'bg-blue-800'
      break
    default:
      break
  }

  return (
    <div
      className={`flex flex-col max-w-xs mx-auto rounded-lg p-4 ${colorClass}`}
    >
      <p>Product: {productId}</p>
      <p>Size: {size} </p>
      <p>Color: {color}</p>

      <AddToCartButton>
        <Test />
      </AddToCartButton>
    </div>
  )
}
