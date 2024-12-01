import { serverName } from "@/mcinfo";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
      <div className="max-w-2xl mx-auto text-[#53ca61] text-[1.2rem]">
        <p className="mb-4">
          Welcome to{" "}
          <span className="font-extrabold text-[#ffd118]">{serverName.slice(0, 3)}</span>
          <span className="font-extrabold text-[#ff1818]">{serverName[3].toUpperCase() + serverName.slice(4, 7)}</span>
          , a Minecraft server built on passion, community, and the love for adventure! Our story began during the lockdown in 2020 (or before) when a group of friends came together to create a server that would be a safe and fun place for players to explore and create. Initially named "IndianCraft" (or "Indian SMP"), the server faced challenges with management, leading the friends to create a fresh, new server called **IndianYT**.
        </p>
        <p className="mb-4">
          With the help of Dev Akaboy and streamers RDR, Origin RDX , **IndianYT** quickly grew into a beloved community, attracting players with its unique gameplay and engaging streams. People streamed on YouTube, bringing even more attention to the server, and it became a place where players could join in on the fun. As the server continued to thrive, the community became stronger, and the friends realized the potential of their project.
        </p>
        <p className="mb-4">
          In late 2021, as life returned to normal and many of the original founders returned to their day-to-day lives, Akaboy and his team decided to rebrand the server. And so, **HexGame** was born. With new features and updates, including the exciting release of Minecraft 1.18, HexGame became a hub for adventure and creativity. The server's community grew, its Discord surpassed 1,000 members, and it became more than just a server—it became a home.
        </p>
        <p className="mb-4">
          Despite its popularity, HexGame faced financial challenges and had to shut down in 2022. But the community's love for the server never faded. It came back in November 2022, and with the support of friends and new funding, it returned once again in July 2023. HexGame continued to evolve, bringing players together with fresh content and new adventures. However, in January 2024, due to a lack of player activity, HexGame closed its doors once again.
        </p>
        <p className="mb-4">
          But we're excited to announce that **HexGame is back** as of December 1, 2024! After overcoming all obstacles, we're proud to reopen the server for players to once again embark on thrilling adventures and make lasting memories. With a renewed vision and a passionate community, HexGame is ready for the next chapter.
        </p>
        <p>
          Join us today and become part of our ever-growing Minecraft family. Whether you're a seasoned player or new to the game, there's always a place for you here at **HexGame**. Let's build, explore, and create together!
        </p>
      </div>
    </div>
  );
}
