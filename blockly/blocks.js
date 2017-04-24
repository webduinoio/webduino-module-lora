//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#5ag74x
Blockly.Blocks['lora_new'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LORA , Reset Pin")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["15", "15"]]), "resetPin")
        .appendField(" , Address:")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["15", "15"]]), "address");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://webduino.io/');
  }
};

Blockly.Blocks['lora_send'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("lora"), "lora")
        .appendField("傳送字串");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://webduino.io/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#hv345s
Blockly.Blocks['lora_send_ack'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("lora"), "lora")
        .appendField("傳送字串");
    this.appendStatementInput("send_ok")
        .setCheck(null)
        .appendField("成功後執行");
    this.appendStatementInput("send_failure")
        .setCheck(null)
        .appendField("失敗後執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://webduino.io/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#t673pk
Blockly.Blocks['lora_recv_ack'] = {
  init: function() {
    this.appendStatementInput("recv_ok")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("lora"), "lora")
        .appendField("接收字串後執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://webduino.io/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#csh9m9
Blockly.Blocks['lora_recv_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("lora"), "lora")
        .appendField("接收的字串");
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://webduino.io/');
  }
};