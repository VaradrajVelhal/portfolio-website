
function Github() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-sky-500 rounded-full blur-[150px] opacity-20"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px] opacity-20"></div>
      <h2 className="text-3xl font-bold text-sky-400 mb-10">GitHub Activity</h2>

      <div className="flex flex-col items-center gap-6">
        <img
          src="https://github-readme-stats.vercel.app/api?username=VaradrajVelhal&show_icons=true&theme=tokyonight"
          alt="github stats"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=VaradrajVelhal&layout=compact&theme=tokyonight"
          alt="top languages"
        />
      </div>
    </section>
  );
}

export default Github;
