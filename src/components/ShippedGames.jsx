export default function ShippedGames() {
  const shippedGames = [
    {
      name: 'Tidy Room',
      icon: './assets/tidy-room.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawetech.dreamy.fantasy.room.decor.unpacking.tidy.home.design',
      category: '2D',
    },
    {
      name: 'Wool Puzzle',
      icon: './assets/wool-puzzle.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawetech.wool.puzzle.maze.arrow.escape',
      category: '2D',
    },
    {
      name: 'Doppelganger or Neighbor',
      icon: './assets/doppelganger-neighbor.webp',
      link: 'https://play.google.com/store/apps/details?id=com.waywegaming.that.is.not.my.creepy.neighbor.doppelganger.game',
      category: '2D',
    },
    {
      name: 'Fill The Fridge',
      icon: './assets/fill-the-fridge-icon.webp',
      link: 'https://play.google.com/store/apps/details?id=com.kunhargamesstudios.fill.the.fridge.game',
      category: '3D',
    },
    {
      name: 'Fill The Closet',
      icon: './assets/fill-the-closet-icon.webp',
      link: 'https://play.google.com/store/apps/details?id=com.kunhargames.fill.the.closet.organizer3d',
      category: '3D',
    },
    {
      name: 'Car Drive Zone',
      icon: './assets/car-drive-zone.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawetech.jdm.car.drift.max.pro.racing.master.drive.zone.game',
      category: '3D',
    },
    {
      name: 'Tile Matching Master',
      icon: './assets/tile-matching-master.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawetech.tile.match.master.puzzle.matching.game',
      category: '3D',
    },
    {
      name: 'Sweet Village',
      icon: './assets/sweet-village.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawetech.sweet.candy.village.crush.puzzle.match.game',
      category: '2D',
    },
    {
      name: 'Mega Ramp',
      icon: './assets/mega-ramp.webp',
      link: 'https://play.google.com/store/apps/details?id=com.wawepokerface.car.stunt.formula.mega.ramp.driving.wawe',
      category: '3D',
    },
  ];

  return (
    <div id="shippedGames" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg zalando-sans-body">My Portfolio</h4>
      <h2 className="text-center text-5xl zalando-sans-heading">My Recent Projects</h2>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {shippedGames.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group cursor-pointer"
            style={{ backgroundImage: `url(${item.icon})` }}
          >
            <span className={item.category === '2D' ? 'absolute top-3 left-3 text-white text-xs px-2 py-1 rounded-full zalando-sans-body bg-purple-600/80' : 'absolute top-3 left-3 text-white text-xs px-2 py-1 rounded-full zalando-sans-body bg-blue-600/80'}>
              {item.category}
            </span>

            <div className="bg-white/20 backdrop-blur-md w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <h2 className="zalando-sans-body">{item.name}</h2>
              <img src="./assets/send-icon.png" alt="Open Project" className="w-5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}