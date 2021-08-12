export var xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:activiti="http://activiti.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.activiti.org/PbSystemUse">
  <process id="PbSystemUse" name="PB系统使用独立流程" isExecutable="true">
    <startEvent id="startevent1" name="Start" activiti:initiator="applyUserId"></startEvent>
    <userTask id="F1" name="承办人发起尽调流程"></userTask>
    <sequenceFlow id="flow1" sourceRef="startevent1" targetRef="F1"></sequenceFlow>
    <userTask id="F2" name="承办人部门负责人审批"></userTask>
    <sequenceFlow id="flow2" sourceRef="F1" targetRef="F2"></sequenceFlow>
    <userTask id="F3" name="产品经理审批"></userTask>
    <sequenceFlow id="flow3" sourceRef="F2" targetRef="F3"></sequenceFlow>
    <userTask id="F4" name="财富管理部副总经理审批"></userTask>
    <sequenceFlow id="flow4" sourceRef="F3" targetRef="F4"></sequenceFlow>
    <userTask id="F5" name="承办人填报PB系统申请单"></userTask>
    <sequenceFlow id="flow5" sourceRef="F4" targetRef="F5"></sequenceFlow>
    <userTask id="F6" name="承办人部门负责人审批申请单"></userTask>
    <sequenceFlow id="flow6" sourceRef="F5" targetRef="F6"></sequenceFlow>
    <userTask id="F7" name="产品经理审批申请单"></userTask>
    <sequenceFlow id="flow7" sourceRef="F6" targetRef="F7"></sequenceFlow>
    <exclusiveGateway id="exclusivegateway1" name="Exclusive Gateway"></exclusiveGateway>
    <sequenceFlow id="flow8" sourceRef="F7" targetRef="exclusivegateway1"></sequenceFlow>
    <userTask id="F8-1" name="信息技术中心系统管理专员审核"></userTask>
    <sequenceFlow id="flow9" name="产品交易上线、下线" sourceRef="exclusivegateway1" targetRef="F8-1">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[\${pbUseType == "CASE1"}]]></conditionExpression>
    </sequenceFlow>
    <userTask id="F8-2" name="运营管理部系统管理岗审核"></userTask>
    <sequenceFlow id="flow10" sourceRef="F8-1" targetRef="F8-2"></sequenceFlow>
    <sequenceFlow id="flow11" name="修改MAC地址或者申请使用PB系统" sourceRef="exclusivegateway1" targetRef="F8-2">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[\${pbUseType != "CASE1"}]]></conditionExpression>
    </sequenceFlow>
    <exclusiveGateway id="exclusivegateway2" name="Exclusive Gateway"></exclusiveGateway>
    <sequenceFlow id="flow12" sourceRef="F8-2" targetRef="exclusivegateway2"></sequenceFlow>
    <userTask id="F9-1" name="呼叫中心业务办理岗复核"></userTask>
    <sequenceFlow id="flow13" name=" 产品交易上线、下线" sourceRef="exclusivegateway2" targetRef="F9-1">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[\${pbUseType == "CASE1"}]]></conditionExpression>
    </sequenceFlow>
    <userTask id="F10-1" name="结算管理部清算主管审批"></userTask>
    <sequenceFlow id="flow14" sourceRef="F9-1" targetRef="F10-1"></sequenceFlow>
    <endEvent id="endevent1" name="End"></endEvent>
    <sequenceFlow id="flow15" sourceRef="F10-1" targetRef="endevent1"></sequenceFlow>
    <sequenceFlow id="flow16" name="修改MAC地址" sourceRef="exclusivegateway2" targetRef="endevent1">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[\${pbUseType == "CASE2"}]]></conditionExpression>
    </sequenceFlow>
    <userTask id="FF5" name="承办人填报PB系统申请单(2)"></userTask>
    <sequenceFlow id="flow17" name="申请使用PB系统" sourceRef="exclusivegateway2" targetRef="FF5">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[\${pbUseType == "CASE3"}]]></conditionExpression>
    </sequenceFlow>
    <userTask id="FF6" name="承办人部门负责人审批申请单(2)"></userTask>
    <sequenceFlow id="flow18" sourceRef="FF5" targetRef="FF6"></sequenceFlow>
    <userTask id="FF7" name="产品经理审批申请单(2)"></userTask>
    <sequenceFlow id="flow19" sourceRef="FF6" targetRef="FF7"></sequenceFlow>
    <userTask id="FF8-1" name="信息技术中心系统管理专员审核(2)"></userTask>
    <sequenceFlow id="flow20" sourceRef="FF7" targetRef="FF8-1"></sequenceFlow>
    <userTask id="FF8-2" name="运营管理部系统管理岗审核(2)"></userTask>
    <sequenceFlow id="flow21" sourceRef="FF8-1" targetRef="FF8-2"></sequenceFlow>
    <userTask id="FF9-1" name="呼叫中心业务办理岗复核(2)"></userTask>
    <sequenceFlow id="flow22" sourceRef="FF8-2" targetRef="FF9-1"></sequenceFlow>
    <userTask id="FF10-1" name="结算管理部清算主管审批(2)"></userTask>
    <sequenceFlow id="flow23" sourceRef="FF9-1" targetRef="FF10-1"></sequenceFlow>
    <sequenceFlow id="flow25" sourceRef="FF10-1" targetRef="endevent1"></sequenceFlow>
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_PbSystemUse">
    <bpmndi:BPMNPlane bpmnElement="PbSystemUse" id="BPMNPlane_PbSystemUse">
      <bpmndi:BPMNShape bpmnElement="startevent1" id="BPMNShape_startevent1">
        <omgdc:Bounds height="35.0" width="35.0" x="292.0" y="158.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="F1" id="BPMNShape_F1">
        <omgdc:Bounds height="91.0" width="105.0" x="370.0" y="130.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="F2" id="BPMNShape_F2">
        <omgdc:Bounds height="91.0" width="105.0" x="520.0" y="130.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="F3" id="BPMNShape_F3">
        <omgdc:Bounds height="91.0" width="105.0" x="680.0" y="130.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="F4" id="BPMNShape_F4">
        <omgdc:Bounds height="91.0" width="105.0" x="840.0" y="130.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="F5" id="BPMNShape_F5">
        <omgdc:Bounds height="91.0" width="105.0" x="840.0" y="310.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="F6" id="BPMNShape_F6">
        <omgdc:Bounds height="91.0" width="105.0" x="680.0" y="310.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="F7" id="BPMNShape_F7">
        <omgdc:Bounds height="91.0" width="105.0" x="526.0" y="310.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="exclusivegateway1" id="BPMNShape_exclusivegateway1">
        <omgdc:Bounds height="40.0" width="40.0" x="402.0" y="335.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="F8-1" id="BPMNShape_F8-1">
        <omgdc:Bounds height="91.0" width="105.0" x="370.0" y="470.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="F8-2" id="BPMNShape_F8-2">
        <omgdc:Bounds height="91.0" width="105.0" x="224.0" y="470.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="exclusivegateway2" id="BPMNShape_exclusivegateway2">
        <omgdc:Bounds height="40.0" width="40.0" x="256.0" y="620.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="F9-1" id="BPMNShape_F9-1">
        <omgdc:Bounds height="81.0" width="105.0" x="450.0" y="600.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="F10-1" id="BPMNShape_F10-1">
        <omgdc:Bounds height="81.0" width="105.0" x="600.0" y="600.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="endevent1" id="BPMNShape_endevent1">
        <omgdc:Bounds height="35.0" width="35.0" x="635.0" y="760.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="FF5" id="BPMNShape_FF5">
        <omgdc:Bounds height="84.0" width="105.0" x="80.0" y="710.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="FF6" id="BPMNShape_FF6">
        <omgdc:Bounds height="81.0" width="105.0" x="80.0" y="840.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="FF7" id="BPMNShape_FF7">
        <omgdc:Bounds height="81.0" width="105.0" x="80.0" y="960.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="FF8-1" id="BPMNShape_FF8-1">
        <omgdc:Bounds height="81.0" width="105.0" x="230.0" y="960.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="FF8-2" id="BPMNShape_FF8-2">
        <omgdc:Bounds height="81.0" width="105.0" x="380.0" y="960.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="FF9-1" id="BPMNShape_FF9-1">
        <omgdc:Bounds height="81.0" width="105.0" x="530.0" y="960.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="FF10-1" id="BPMNShape_FF10-1">
        <omgdc:Bounds height="81.0" width="105.0" x="680.0" y="960.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge bpmnElement="flow1" id="BPMNEdge_flow1">
        <omgdi:waypoint x="327.0" y="175.0"></omgdi:waypoint>
        <omgdi:waypoint x="370.0" y="175.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow2" id="BPMNEdge_flow2">
        <omgdi:waypoint x="475.0" y="175.0"></omgdi:waypoint>
        <omgdi:waypoint x="520.0" y="175.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow3" id="BPMNEdge_flow3">
        <omgdi:waypoint x="625.0" y="175.0"></omgdi:waypoint>
        <omgdi:waypoint x="680.0" y="175.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow4" id="BPMNEdge_flow4">
        <omgdi:waypoint x="785.0" y="175.0"></omgdi:waypoint>
        <omgdi:waypoint x="840.0" y="175.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow5" id="BPMNEdge_flow5">
        <omgdi:waypoint x="892.0" y="221.0"></omgdi:waypoint>
        <omgdi:waypoint x="892.0" y="310.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow6" id="BPMNEdge_flow6">
        <omgdi:waypoint x="840.0" y="355.0"></omgdi:waypoint>
        <omgdi:waypoint x="785.0" y="355.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow7" id="BPMNEdge_flow7">
        <omgdi:waypoint x="680.0" y="355.0"></omgdi:waypoint>
        <omgdi:waypoint x="631.0" y="355.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow8" id="BPMNEdge_flow8">
        <omgdi:waypoint x="526.0" y="355.0"></omgdi:waypoint>
        <omgdi:waypoint x="442.0" y="355.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow9" id="BPMNEdge_flow9">
        <omgdi:waypoint x="422.0" y="375.0"></omgdi:waypoint>
        <omgdi:waypoint x="422.0" y="470.0"></omgdi:waypoint>
        <bpmndi:BPMNLabel>
          <omgdc:Bounds height="42.0" width="100.0" x="427.0" y="409.0"></omgdc:Bounds>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow10" id="BPMNEdge_flow10">
        <omgdi:waypoint x="370.0" y="515.0"></omgdi:waypoint>
        <omgdi:waypoint x="329.0" y="515.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow11" id="BPMNEdge_flow11">
        <omgdi:waypoint x="402.0" y="355.0"></omgdi:waypoint>
        <omgdi:waypoint x="276.0" y="355.0"></omgdi:waypoint>
        <omgdi:waypoint x="276.0" y="470.0"></omgdi:waypoint>
        <bpmndi:BPMNLabel>
          <omgdc:Bounds height="42.0" width="100.0" x="280.0" y="369.0"></omgdc:Bounds>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow12" id="BPMNEdge_flow12">
        <omgdi:waypoint x="276.0" y="561.0"></omgdi:waypoint>
        <omgdi:waypoint x="276.0" y="620.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow13" id="BPMNEdge_flow13">
        <omgdi:waypoint x="296.0" y="640.0"></omgdi:waypoint>
        <omgdi:waypoint x="450.0" y="640.0"></omgdi:waypoint>
        <bpmndi:BPMNLabel>
          <omgdc:Bounds height="42.0" width="100.0" x="319.0" y="610.0"></omgdc:Bounds>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow14" id="BPMNEdge_flow14">
        <omgdi:waypoint x="555.0" y="640.0"></omgdi:waypoint>
        <omgdi:waypoint x="600.0" y="640.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow15" id="BPMNEdge_flow15">
        <omgdi:waypoint x="652.0" y="681.0"></omgdi:waypoint>
        <omgdi:waypoint x="652.0" y="760.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow16" id="BPMNEdge_flow16">
        <omgdi:waypoint x="276.0" y="660.0"></omgdi:waypoint>
        <omgdi:waypoint x="276.0" y="777.0"></omgdi:waypoint>
        <omgdi:waypoint x="635.0" y="777.0"></omgdi:waypoint>
        <bpmndi:BPMNLabel>
          <omgdc:Bounds height="14.0" width="71.0" x="292.0" y="759.0"></omgdc:Bounds>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow17" id="BPMNEdge_flow17">
        <omgdi:waypoint x="256.0" y="640.0"></omgdi:waypoint>
        <omgdi:waypoint x="132.0" y="640.0"></omgdi:waypoint>
        <omgdi:waypoint x="132.0" y="710.0"></omgdi:waypoint>
        <bpmndi:BPMNLabel>
          <omgdc:Bounds height="14.0" width="85.0" x="138.0" y="620.0"></omgdc:Bounds>
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow18" id="BPMNEdge_flow18">
        <omgdi:waypoint x="132.0" y="794.0"></omgdi:waypoint>
        <omgdi:waypoint x="132.0" y="840.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow19" id="BPMNEdge_flow19">
        <omgdi:waypoint x="132.0" y="921.0"></omgdi:waypoint>
        <omgdi:waypoint x="132.0" y="960.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow20" id="BPMNEdge_flow20">
        <omgdi:waypoint x="185.0" y="1000.0"></omgdi:waypoint>
        <omgdi:waypoint x="230.0" y="1000.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow21" id="BPMNEdge_flow21">
        <omgdi:waypoint x="335.0" y="1000.0"></omgdi:waypoint>
        <omgdi:waypoint x="380.0" y="1000.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow22" id="BPMNEdge_flow22">
        <omgdi:waypoint x="485.0" y="1000.0"></omgdi:waypoint>
        <omgdi:waypoint x="530.0" y="1000.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow23" id="BPMNEdge_flow23">
        <omgdi:waypoint x="635.0" y="1000.0"></omgdi:waypoint>
        <omgdi:waypoint x="680.0" y="1000.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="flow25" id="BPMNEdge_flow25">
        <omgdi:waypoint x="732.0" y="960.0"></omgdi:waypoint>
        <omgdi:waypoint x="732.0" y="777.0"></omgdi:waypoint>
        <omgdi:waypoint x="670.0" y="777.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`
