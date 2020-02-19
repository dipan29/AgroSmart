#include <ESP8266WiFi.h>
#include <WiFiManager.h>
#include <DNSServer.h>

#include <TaskScheduler.h>
#include <Servo.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include "Agrosmart.h"

#define RELAY_2 D2
#define RELAY_3 D1
#define DHTPIN D7
#define SERVO_PIN D8

//Multiplexer Selection Line 
#define S0 D3
#define S1 D4

#define SOIL_MOISTURE A0

static String URL_POST = "http://192.168.0.108:7988/node_data/send";
static String URL_GET = "http://192.168.0.108:7988/controller/69696";
static String CONTROLLER_ID = "controller: "+ESP.getChipId();

AgroSmart agrosmart;
Servo servo;

/*====== Callbacks associated with TaskScheduling ======*/
void getRelayState();
void sendSensorData();

/*====== Async Tasks ====== */
Task get_relay_state(2000, TASK_FOREVER, &getRelayState);
Task send_sensor_data(10000, TASK_FOREVER, &sendSensorData);
Scheduler TaskManager;

/*====== Getting Access Point IP for WiFi Config ====== */
void APModeCallback(WiFiManager* manager) {
  Serial.println("Entered config mode..");
  Serial.println(WiFi.softAPIP());
}

/*====== Setting up the Relay Channels by the response ====== */
void getRelayState(){
  StaticJsonDocument<200> doc;
  String actuator_data = agrosmart.get_data(URL_GET);
  Serial.println("..........Printing GET Response..........");
  Serial.println(actuator_data);
  deserializeJson(doc, actuator_data);
  String r2 = doc["relay2"];
  String r3 = doc["relay3"];
  String s1 = doc["servo1"];
  Serial.println(r2);
  Serial.println(r3);
  digitalWrite(RELAY_2, r2.toInt()?HIGH:LOW);
  digitalWrite(RELAY_3, r3.toInt()?HIGH:LOW);
  servo.write(s1.toInt());
}

/*====== Sending Sensor Node data to Server ====== */
void sendSensorData(){
    StaticJsonDocument<1000> doc;
    JsonObject data = doc.to<JsonObject>();
    
    String JSONmessageBuffer;
    data["deviceID"]=String(ESP.getChipId());
    data["temperature"]="31";
    data["humidity"]="86";
    data["moisture"]=String((analogRead(SOIL_MOISTURE)*1000)/1024.0);

    //Stringifying JSON Doc
    serializeJsonPretty(doc, JSONmessageBuffer);  
    Serial.println("........Printing data.........");
    Serial.println(JSONmessageBuffer);
    
    Serial.println(agrosmart.post_data(JSONmessageBuffer, URL_POST));
}

void setup() {
 
  Serial.begin(115200);    //Serial connection

  servo.attach(SERVO_PIN);
  pinMode(RELAY_2, OUTPUT);
  pinMode(RELAY_3, OUTPUT);
  
  /*======= WiFi Manager Setup =======*/
  WiFiManager wifiManager;
  wifiManager.setAPCallback(APModeCallback);
  // Let it sleep into the eternal world of darkness after 5 minutes
  wifiManager.setTimeout(300); 
  //On connection Failure
  if(!wifiManager.autoConnect("Shower when IP", "generic_password")){
    Serial.println("Failed Connection to remote Access Point");
    ESP.reset();
    delay(5000);
  }
  Serial.print(WiFi.localIP());
  Serial.println(" Connected");
  
  /*======= Task init and Schedules =======*/
  Serial.println("\n Tasking the Device with GET and POST with 2s and 10s Intervals");
  TaskManager.init();
  TaskManager.addTask(get_relay_state);
  TaskManager.addTask(send_sensor_data);
  get_relay_state.enable();
  send_sensor_data.enable();

}

void loop(){
  if(WiFi.status()==WL_CONNECTED){
    //Let the Task Manager Handle the Operations
    TaskManager.execute();
  }
  else{
    Serial.println("WiFi disconnected: Entering Deep Sleep");
    ESP.reset();
  //    ESP.deepSleep(20e6); // To be added in 20e6 uS in Prod for Deep sleep removing delay

  }
//  
}
