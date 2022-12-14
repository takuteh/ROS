
"use strict";

let RobotStateEvent = require('./RobotStateEvent.js');
let MotorPower = require('./MotorPower.js');
let SensorState = require('./SensorState.js');
let ExternalPower = require('./ExternalPower.js');
let WheelDropEvent = require('./WheelDropEvent.js');
let BumperEvent = require('./BumperEvent.js');
let Led = require('./Led.js');
let DockInfraRed = require('./DockInfraRed.js');
let VersionInfo = require('./VersionInfo.js');
let PowerSystemEvent = require('./PowerSystemEvent.js');
let CliffEvent = require('./CliffEvent.js');
let DigitalOutput = require('./DigitalOutput.js');
let Sound = require('./Sound.js');
let DigitalInputEvent = require('./DigitalInputEvent.js');
let KeyboardInput = require('./KeyboardInput.js');
let ScanAngle = require('./ScanAngle.js');
let ButtonEvent = require('./ButtonEvent.js');
let ControllerInfo = require('./ControllerInfo.js');
let AutoDockingAction = require('./AutoDockingAction.js');
let AutoDockingActionFeedback = require('./AutoDockingActionFeedback.js');
let AutoDockingActionGoal = require('./AutoDockingActionGoal.js');
let AutoDockingFeedback = require('./AutoDockingFeedback.js');
let AutoDockingActionResult = require('./AutoDockingActionResult.js');
let AutoDockingResult = require('./AutoDockingResult.js');
let AutoDockingGoal = require('./AutoDockingGoal.js');

module.exports = {
  RobotStateEvent: RobotStateEvent,
  MotorPower: MotorPower,
  SensorState: SensorState,
  ExternalPower: ExternalPower,
  WheelDropEvent: WheelDropEvent,
  BumperEvent: BumperEvent,
  Led: Led,
  DockInfraRed: DockInfraRed,
  VersionInfo: VersionInfo,
  PowerSystemEvent: PowerSystemEvent,
  CliffEvent: CliffEvent,
  DigitalOutput: DigitalOutput,
  Sound: Sound,
  DigitalInputEvent: DigitalInputEvent,
  KeyboardInput: KeyboardInput,
  ScanAngle: ScanAngle,
  ButtonEvent: ButtonEvent,
  ControllerInfo: ControllerInfo,
  AutoDockingAction: AutoDockingAction,
  AutoDockingActionFeedback: AutoDockingActionFeedback,
  AutoDockingActionGoal: AutoDockingActionGoal,
  AutoDockingFeedback: AutoDockingFeedback,
  AutoDockingActionResult: AutoDockingActionResult,
  AutoDockingResult: AutoDockingResult,
  AutoDockingGoal: AutoDockingGoal,
};
