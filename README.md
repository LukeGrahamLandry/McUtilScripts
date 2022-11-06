# McUtil Scripts

A collection of scripts that make developing Minecraft mods less painful. In general, each script has self contained usage instructions and a more detailed write up on my tutorial website. If you want to use one yourself, I suggest using the release urls below rather than directly linking to files in this repo as the structure may change.

## JustEnoughPublishing

- https://moddingtutorials.org/publish.gradle

A gradle task to automatically publish minecraft mods to CurseForge and Github Releases based on a json config file. [Learn More](https://moddingtutorials.org/publish)

## NotEnoughGraphs

- https://moddingtutorials.org/cfstats.js

A userscript that parses the html of Curseforge's rewards transactions page and exports the data as json that you can process however you like. [Learn More](https://moddingtutorials.org/cfstats)

## MultiHitboxLib

- https://moddingtutorials.org/multihitboxlib.js

A BlockBench plugin that lets you define a group of cubes to be exported to a separate json object to use as a multipart hitbox for complex entities. Avoids needed to experimentally figure out the positioning and sizes by restarting the game repeatedly. I plan to write a library mod that handles the implementation side of this as well. 

## OldForgeAppleSilicon

- https://moddingtutorials.org/applesilicon.gradle

A gradle script that forces ForgeGradle to use a newer version of LWLGL. This was necessary to run a forge development environment for some versions on Apple's ARM CPU architecture. [Learn More](https://moddingtutorials.org/m1)