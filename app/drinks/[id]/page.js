import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

import Image from 'next/image';

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error('There is error in getSingleDrink function');
  }

  return response.json();
};

const SingleDrinkPage = async ({ params }) => {
  const { id } = await params;
  const data = await getSingleDrink(id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image src={imgSrc} width={300} height={300} className="w-48 h-48 rounded-lg" alt="a drink" priority></Image>
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
