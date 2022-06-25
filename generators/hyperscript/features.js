
/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Hyperscript for feature blocks.
 */
'use strict';

goog.module('Blockly.Hyperscript.features');

const Hyperscript = goog.require('Blockly.Hyperscript');


// So far as I can tell, this file is still necessary to define something from
// ./all.js, otherwise the build doesn't produce Blockly.Hyperscript at all :-/
// But maybe we can move the entire generator into client code and avoid this
// build step and also avoid modifications to core blockly all together
//
//
//
// Trying out putting all definitions beyond the generator into my client code
// Hyperscript['hyperscript_tell'] = function (block) {
//     // Colour picker.
//     const code = Hyperscript.quote_(block.getInputTargetBlock('TARGET').getFieldValue("TEXT"));
//     return 'hyperscript!' + code;
// };
