import Image from "next/image";

const getCategories = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json()
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category);

  return (
    <div className="container mx-auto my-6 grid grid-cols-12 gap-4">
      <div className="  col-span-3">
        <h2 className="font-bold text-md mb-4">All Category</h2>
        <ul className="flex flex-col gap-4">
          {
            categories.news_category.map(category => {
              return <li key={category.category_id} className="bg-slate-100 p-2 rounded-md font-bold text-center text-lg">{category.category_name}</li>
            })
          }
        </ul>
      </div>
      <div className="font-bold text-3xl bg-pink-400 col-span-6">All News</div>
      <div className="font-bold text-3xl bg-yellow-400 col-span-3">Social Icons</div>
    </div>
  );
}
