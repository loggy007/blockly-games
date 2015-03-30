/**
 * Blockly Games: Pinball
 *
 
/**
 * 
 * @author weifen@mijotech.net
 */
'use strict';

goog.provide('Q36031172_Hw5.Blocks');

goog.require('Blockly');
goog.require('BlocklyGames');
goog.require('Blockly.JavaScript');
goog.require('Blockly.Blocks.colour');
goog.require('Blockly.JavaScript.colour');
goog.require('Blockly.Blocks.lists');
goog.require('Blockly.JavaScript.lists');
goog.require('Blockly.Blocks.logic');
goog.require('Blockly.JavaScript.logic');
goog.require('Blockly.Blocks.loops');
goog.require('Blockly.JavaScript.loops');
goog.require('Blockly.Blocks.math');
goog.require('Blockly.JavaScript.math');
goog.require('Blockly.Blocks.procedures');
goog.require('Blockly.JavaScript.procedures');
goog.require('Blockly.Blocks.texts');
goog.require('Blockly.JavaScript.texts');
goog.require('Blockly.Blocks.variables');
goog.require('Blockly.JavaScript.variables');
goog.require('BlocklyGames');


Blockly.Blocks['x'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(270);
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("x=");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['x'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Blocks['y'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(270);
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("y=");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['y'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Blocks['count'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(65);
    this.appendValueInput("NAME")
        .setCheck("null");
    this.appendValueInput("NAME")
        .setCheck("null")
        .appendField(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["*", "*"]]), "math");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['count'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_math = block.getFieldValue('math');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['s_x'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("X");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['s_x'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['s_y'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
    this.appendDummyInput()
        .appendField("Y");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['s_y'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['ifelse'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendStatementInput("if")
        .setCheck("null")
        .appendField("if");
    this.appendStatementInput("NAME")
        .setCheck("null")
        .appendField("else");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['ifelse'] = function(block) {
  var statements_if = Blockly.JavaScript.statementToCode(block, 'if');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Blocks['if'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendStatementInput("if")
        .setCheck("null")
        .appendField("if");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['if'] = function(block) {
  var statements_if = Blockly.JavaScript.statementToCode(block, 'if');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Blocks['for'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendStatementInput("NAME")
        .setCheck("null")
        .appendField("for")
        .appendField(new Blockly.FieldTextInput("i"), "var1")
        .appendField("=")
        .appendField(new Blockly.FieldTextInput("0"), "init")
        .appendField(";")
        .appendField(new Blockly.FieldTextInput("i"), "var2")
        .appendField(new Blockly.FieldDropdown([["<", "OPTIONNAME"], [">", "OPTIONNAME"], ["=", "OPTIONNAME"]]), "selection")
        .appendField(new Blockly.FieldTextInput("0"), "number")
        .appendField(";")
        .appendField(new Blockly.FieldTextInput("i"), "NAME")
        .appendField("=")
        .appendField(new Blockly.FieldTextInput("i++"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.JavaScript['for'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var text_var1 = block.getFieldValue('var1');
  var text_init = block.getFieldValue('init');
  var text_var2 = block.getFieldValue('var2');
  var dropdown_selection = block.getFieldValue('selection');
  var text_number = block.getFieldValue('number');
  var text_name = block.getFieldValue('NAME');
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Blocks['start'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(105);
    this.appendDummyInput()
        .appendField("start");
    this.setInputsInline(true);
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};