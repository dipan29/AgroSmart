#include <ESP8266WiFi.h>
#include "dht.h"

/************************* Pin Definition *********************************/
//Relays for switching appliances
#define Relay1  D6
#define Relay2  D2
#define Relay3  D1
#define Relay4  D5

//DHT11 for reading temperature and humidity value
#define DHTPIN  D7
//buzzer to know the status of MQTT connections and can be used for any other purpose according to your project need.
#define buzzer  D0
//Selection pins for multiplexer module to switch between different sensors and give data on a single analog pin.
#define S0  D3
#define S1  D4

//Analog pin to read the incoming analog value from different sensors.
#define analogpin A0

/************************* WiFi Access Point *********************************/

#define WLAN_SSID       "MinD Webs SmartThings" //Wifi Name - Case and special character sensitive
#define WLAN_PASS       "smrtMW@3c"  //Wifi Password

char webHookUrl = "http://115.187.32.210:7988/node_data/";


#define DHTTYPE DHT11     // DHT 11 

dht DHT;
uint32_t delayMS;

void setup() {
  Serial.begin(115200);
  delay(10);

  pinMode(buzzer, OUTPUT);
  pinMode(Relay1, OUTPUT);
  pinMode(Relay2, OUTPUT);
  pinMode(Relay3, OUTPUT);
  pinMode(Relay4, OUTPUT);
  pinMode(S0, OUTPUT);
  pinMode(S1, OUTPUT);
  pinMode(A0, INPUT);

  digitalWrite(buzzer, HIGH);
  delay(50);
  digitalWrite(buzzer, LOW);
  delay(500);
  Serial.println("AgroSmart - Team SmartRIRD");

  // Connect to WiFi access point.
  Serial.println(); Serial.println();
  Serial.print("Connecting to ");
  Serial.println(WLAN_SSID);

  WiFi.begin(WLAN_SSID, WLAN_PASS);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  digitalWrite(buzzer, HIGH);
  delay(100);
  digitalWrite(buzzer, LOW);
  delay(200);
  digitalWrite(buzzer, HIGH);
  delay(100);
  digitalWrite(buzzer, LOW);
  
  Serial.println("WiFi connected");
  Serial.println("IP address: "); Serial.println(WiFi.localIP());
  

}

void loop() {
  // put your main code here, to run repeatedly:
  
}
