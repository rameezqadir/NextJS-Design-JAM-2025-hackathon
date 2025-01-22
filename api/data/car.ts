import cars from '@/sanity/schemaTypes/cars';


export async function Home() {
  const products = await fetch(`*[_type == 'car']`);


  return (
    {cars}
  )

}
