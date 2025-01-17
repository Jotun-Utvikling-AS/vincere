import { getProjects } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";

const ImageLink = "/satchlogo.png";

export default async function Home() {
  const projects = await getProjects();
  const thisYear = new Date().getFullYear();
  console.log(thisYear);

  return (
    <div>
      {/*<Image src={ImageLink} alt='' width={1500} height={100} />*/}
      <h1 className='text-7xl font-extrabold py-48'>Velkommen til Vincere</h1>
      <p className='mt-3 text-xl text-white'>
        Dette er stedet for deg som har prøvd alt for å få hjelp, men ikke har
        fått det. For deg som ønsker å få tilbake den balanserte og lykkelige
        kvinnen, men som føler deg håpløs og hjelpeløs fordi ingen lytter til
        deg.
      </p>

      {/*<h2 className='mt-24 text-center font-bold text-gray-700 text-3xl'>
        Et utvalg av våre tjenester
      </h2>
      <div className='mt-5 mb-5 grid md:grid-cols-2 lg:grid-cols3 gap-8'>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className='border-2 border-gray-500 rounded-lg p-2 hover:scale-105 hover:border-blue-500 transition'>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}

            <div className='mt-2 font-extrabold bg-black bg-clip-text text-transparent'>
              {project.name}
            </div>
          </Link>
        ))}
      </div>

      <div>
        <h2 className='mt-24 text-center font-bold text-gray-700 text-3xl'>
          Samarbeidspartnere på fòr og utstyr
        </h2>
        <div className='mt-5 mb-5 grid md:grid-cols-4 lg:grid-cols3 gap-8 items-center  justify-center md:justify-start'>
          <Image
            src={"/eukanuba.png"}
            alt={"Eukanubalogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/farmina.png"}
            alt={"Farminalogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/provit.png"}
            alt={"Provitlogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/kingsmoor.jpg"}
            alt={"Kingsmoorlogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/vom.png"}
            alt={"Vomlogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/hurttalogovitbg.jpg"}
            alt={"Hurttalogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/kong.png"}
            alt={"Vomlogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/nonstop.png"}
            alt={"Nonstoplogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
        </div>
      </div>*/}

      <footer className='w-full my-10 text-center'>
        <i className='fa fa-copyright text-center ' aria-hidden='true'>
          Copyright {thisYear.toString()} Valdres Hundesalong | Built with ❤️ by
          Jotun Utvikling AS
        </i>
      </footer>
    </div>
  );
}
