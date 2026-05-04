export default function Stats() {
  const stats = [
    { value: "20+", label: "YEARS EXPERIENCE" },
    { value: "500+", label: "SOFTWARE PROJECTS" },
    { value: "100+", label: "GLOBAL CLIENTS" },
    { value: "10+", label: "TECH COMMUNITIES BUILT" },
  ];

  return (
    <section className="w-full bg-[#aeb8b2] py-[180px] px-8 flex justify-center items-center font-bebas">
      <div className="max-w-7xl w-full grid grid-cols-2 md:grid-cols-4 gap-20 text-center text-dark reveal">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-start">
            <h3 className="text-7xl md:text-[100px] font-bold tracking-[-2px] text-[#2b2b2f]">
              {stat.value}
            </h3>
            <p className="mt-4 text-2xl md:text-[32px] leading-none tracking-wider text-[#838C83]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
