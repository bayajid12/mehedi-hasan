export default function Stats() {
  const stats = [
    { value: "20+", label: "YEARS EXPERIENCE" },
    { value: "500+", label: "SOFTWARE PROJECTS" },
    { value: "100+", label: "GLOBAL CLIENTS" },
    { value: "10+", label: "TECH COMMUNITIES BUILT" },
  ];

  return (
    <section className="w-full bg-[#aeb8b2] py-20 px-8 flex justify-center items-center font-bebas">
      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-dark">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <h3 className="text-6xl md:text-7xl font-bold tracking-tight text-[#2b2b2f]">
              {stat.value}
            </h3>
            <p className="mt-2 text-xl md:text-2xl tracking-wider text-[#2b2b2f]/60">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
