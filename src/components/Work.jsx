export default function Work() {
  const work = [
    {
      name: 'Wool Puzzle',
      icon: './assets/wool-puzzle.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawetech.wool.puzzle.maze.arrow.escape',
    },
    {
      name: 'Doppelganger or Neighbor',
      icon: './assets/doppelganger-neighbor.webp',
      link: 'https://play.google.com/store/apps/details?id=com.waywegaming.that.is.not.my.creepy.neighbor.doppelganger.game',
    },
    {
      name: 'Tidy Room',
      icon: './assets/tidy-room.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawetech.dreamy.fantasy.room.decor.unpacking.tidy.home.design',
    },
    {
      name: 'Tile Matching Master',
      icon: './assets/tile-matching-master.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawetech.tile.match.master.puzzle.matching.game',
    },
    {
      name: 'Sweet Village',
      icon: './assets/sweet-village.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawetech.sweet.candy.village.crush.puzzle.match.game',
    },
    {
      name: 'Car Drive Zone',
      icon: './assets/car-drive-zone.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawetech.jdm.car.drift.max.pro.racing.master.drive.zone.game',
    },
    {
      name: 'Mega Ramp',
      icon: './assets/mega-ramp.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawepokerface.car.stunt.formula.mega.ramp.driving.wawe',
    }
  ];

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Recent Projects</h2>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {work.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group cursor-pointer"
            style={{ backgroundImage: `url(${item.icon})` }}
          >
            <div className="bg-white/20 backdrop-blur-md w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <h2 className="font-semibold">{item.name}</h2>
              <img src="./assets/send-icon.png" alt="Open Project" className="w-5" />
            </div>
          </a>
        ))}
      </div>

      {/* <a
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
      >
        Show more
        <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
        <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
      </a> */}
    </div>
  );
}
