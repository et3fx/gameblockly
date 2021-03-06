# Gameblockly
Gameblockly is a fork of [Ardublockly][1], which uses Google's [Blockly][2] in order to allow easier programming.

Gameblockly uses the [Gameduino][3] in order to make playable games.  This version of Gameblockly was specifically developed for the 2017 National Jamboree to teach middle through high school aged students what programming is and introduce computer science into their lives.

GameBlockly is intended to be strictly an educational tool to make a game quickly (general time taken is estimated about ten minutes) while still being a fun game to play and teach the fundamentals of programming.  Thus, GameBlockly is unlike Blockly, Scratch, and ArduBlockly, where a block almost always makes one line which defines a very specific behavior. Instead, each block in GameBlockly is intended for its purpose, where if statements and loops are taught to the best of their abilities while still allowing for the game to teach players with a handout given alongside the game (producted in LaTeX, found in the manual folder).

Notice that the Arduino and Blockly blocks are still in the source files, simply not located in the xml file.  This allows you to reintroduce basic Arduino or Blockly functionality with "higher level" GameBlockly functionality.

See [Ardublockly][1] for instructions on installation and features.  It is generally the same.

In order to install, add the Gameduino_Sprites directory to you Arduino libraries directory and make sure you have the Gameduino library.

Notice how the files are running their uncompressed versions and the build will not include GameBlockly files.  This is important if planning on using GameBlockly: continue running on uncompressed files or add that functionality.  Was not needed for my purposes.


[1]: https://github.com/carlosperate/ardublockly/
[2]: https://developers.google.com/blockly/
[3]: http://summitbsa.org/events/jamboree/overview/
