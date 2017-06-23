/**
 * This file is used for setting up the game
 * This includes loading the map and initializing characters.
 */

'use strict';

goog.provide('Blockly.Blocks.setup');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.setup.HUE = 180;

Blockly.Blocks['setup_all'] = {
  /**
   * Block for creating a background image.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.setup.HUE);
    this.appendDummyInput()
        .appendField("setup game");
    this.appendDummyInput()
        .appendField("set speed to")
        .appendField(new Blockly.FieldNumber('5', 0, 10, 1), 'SPEED')
        .appendField("(0 to 10) 10 max speed");
    this.appendDummyInput()
        .appendField("select character")
        .appendField(new Blockly.FieldDropdown([['Mario', 'm'], ['Link', 'l']]), 'SPRITE');
    this.setInputsInline(false);
    this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);

  }
};
