import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function Hero() {
  const data = await getData();

  if (!data) {
    // Handle case where data is not available
    return null;
  }

  return (
    <div className="bg-black text-white">
      <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">
              Top Fashion for a top price!
            </h1>
            <p className="max-w-md leading-relaxed xl:text-lg">
              We sell only the most exclusive and high-quality products for you.
              We are the best so come and shop with us.
            </p>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg shadow-lg md:left-16 md:top-16 lg:ml-0">
              {data.image1 && (
                <Image
                  src={urlFor(data.image1).url()}
                  alt="Great Photo"
                  className="h-full w-full object-cover object-center"
                  priority
                  width={500}
                  height={500}
                />
              )}
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              {data.image2 && (
                <Image
                  src={urlFor(data.image2).url()}
                  alt="Great Photo"
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                  priority
                />
              )}
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex h-120 w-90 divide-x overflow-hidden rounded-lg border">
          <Link href="/Men">
            <div className="flex w-1.5/3 items-center justify-center transition duration-100 hover:bg-white hover:text-black active:bg-gray-200 active:text-black" aria-label="Men">
          <span>Men</span>
            </div>
          </Link>
          <Link href="/Women">
            <div className="flex w-1/3 items-center justify-center transition duration-100 hover:bg-white hover:text-black active:bg-gray-200 active:text-black" aria-label="Women">
              <span>Women</span>
            </div>
          </Link>
          <Link href="/Teens">
            <div className="flex w-1/3 items-center justify-center transition duration-100 hover:bg-white hover:text-black active:bg-gray-200 active:text-black" aria-label="Teens">
              <span>Teens</span>
            </div>
          </Link>

          </div>
        </div> */}
      </section>
    </div>
  );
}
