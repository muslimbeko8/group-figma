const OurTeam = () => {
  return (
    <div className="relative mx-auto max-w-[1200px] ">
      <span className="text-5xl">Our team</span>
      <div className="flex items-center gap-8">
        <div className="border-l-4 border-[#00ddff84] h-[70px]  mt-7 rounded-sm"></div>
        <div className="text-[#9BA1A8] text-2xlz mt-4 ">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Maecenas
          iaculis <br />
          ac justo vitae ornare Lorem ipsum dolor sit amet consectetur
          adipiscing <br />
          elit Maecenas iaculis ac justo vitae ornare Lorem ipsum dolor sit amet{" "}
          <br />
          consectetur adipiscing elit
        </div>
      </div>

      <div className="mt-8 w-[530px] h-[300px] flex justify-between relative">
        <img src="/group.png" alt="group" />

        <img
          src="/meteors.png"
          alt="meteors"
          className="absolute top-[-100px] left-[750px] w-[900px] h-[500px]"
        />

        <img
          src="/mars.png"
          alt="mars"
          className="absolute left-[840px] w-[350px] top-[-60px] "
        />
      </div>
    </div>
  );
};
export default OurTeam;
