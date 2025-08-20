import Image, { StaticImageData } from "next/image";
import mai from "@/assets/team/mai 2.png";
import nis from "@/assets/team/Nisreen Jabbri.png";
import abd from "@/assets/team/Abdullah.png";
import farah from "@/assets/team/Farah Al Qaisi.png";
import moh from "@/assets/team/Mohammed Al-Jammal.png";
import majd from "@/assets/team/Majd Tran.png";
import logo from "@/assets/icons/bg logo.png";


interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData; // <-- important change
}

export const OurTeam = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Mai Enizat",
      role: "Chief Executive Director",
      image: mai,
    },
    {
      name: "Nisreen Jabbri",
      role: "Senior Processing Consultant",
      image: nis,
    },
    {
      name: "Abdallah Enizat",
      role: "Processing Consultant",
      image: abd,
    },
    {
      name: "Farah Al Qaisi",
      role: "Processing Consultant",
      image: farah,
    },
    {
      name: "Mohammed Al-Jammal",
      role: "Processing Consultant",
      image: moh,
    },
    {
      name: "Majd Abu-Tarbosh",
      role: "Legal Translator",
      image: majd,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto my-5 relative">
      <div className="">
        <div className="my-5">
          <div className="flex flex-col justify-center items-center text-center py-5">
            <h1 className="text-6xl lg:text-7xl font-bold text-[#242058] text-ceter">
             Our Amazing Team
            </h1>
            <p className="py-5">At MultiCitizenships, we take immense pride in our dynamic and knowledgeable team, a harmonious blend of experience and innovation. Allow us to introduce the some of our dedicated group, each playing a vital role in our journey to assist you in achieving your dreams of international mobility.</p>
          </div>
          <div className="flex flex-col items-center text-center my-10">
            <div className="relative  flex flex-col justify-center ">
              <Image
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                width={400}
                height={600}
                className=" object-cover w-full p-3 rounded-2xl"
              />
            </div>
            <div>
              <p className="text-[#d8a16f] font-semibold text-sm tracking-wider">
                {teamMembers[0].role}
              </p>
              <h3 className="text-4xl font-bold text-[#242058]">
                {teamMembers[0].name}
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 my-5">
          {teamMembers.slice(1).map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  className=" object-cover rounded-2xl"
                />
              </div>
              <div>
                <p className="text-[#d8a16f] font-semibold text-sm tracking-wider ">
                  {member.role}
                </p>
                <h3 className="text-2xl font-bold text-[#242058]">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
                <Image src={logo} alt="logo" width={100} height={100} className='absolute top-0 right-0 opacity-[0.5] w-[200px]'/>
    </section>
  );
};
