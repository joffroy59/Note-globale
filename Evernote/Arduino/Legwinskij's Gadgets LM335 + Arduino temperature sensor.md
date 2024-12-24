---

tags: 
  - arduino
  - Robot
  - webClip

source: http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html
---
<http://www.blogger.com/>Ce site utilise des cookies permettant de fournir les services. En utilisant ce site, vous acceptez l'utilisation des cookies. [En savoir plus](https://www.blogger.com/go/blogspot-cookies) 
<http://www.blogger.com/>

|     |     |
| --- | --- |
|     |     |

|     |     |
| --- | --- |
| Partager | 3   |

 [Blog suivant»](https://www.blogger.com/next-blog?navBar=true&blogID=3420675664427041965)[Créer un blog](http://www.blogger.com/home#create) [Connexion](http://www.blogger.com/)

[![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/banner2012.png]]](http://legwinskij.blogspot.fr/)

## Thursday, September 29, 2011

### LM335 + Arduino temperature sensor

Few weeks ago I’ve bought a LCD 16x2 display. I wanted to create a room temperature sensor. 

[![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/DSC00724.JPG.jpg]]](http://1.bp.blogspot.com/-v6jm5o8xAr4/ToS5rZ_MH8I/AAAAAAAAAP8/GYMuxzM9ul4/s1600/DSC00724.JPG)

I’ve been using pocket arduino and there’s been some issues with resetting. I had to burn bootloader once again, so it took me longer to make this post. Also I’ve picked LM35 for this project (cool but expensive), but I’ve burned it. So I was forced to go with LM335 (not that cool but cheap). You can download code and watch video below. 

Code : 

#include <LiquidCrystal.h>
float raw;
float temperature;
LiquidCrystal lcd(3, 4, 5, 6, 7, 8);
byte degree\[8\] = 
{
B01100,
B10010,
B10010,
B01100,
B00000,
B00000,
B00000,
B00000
};

void setup()
{
  lcd.begin(16, 2);
  lcd.print("Temperature :");
  lcd.createChar(0, degree); 
  lcd.setCursor(7,1);
  lcd.write(0);
  lcd.setCursor(8,1);
  lcd.print("C"); 
}

void loop()
{
 raw = analogRead(0);
 temperature = ((raw\*480.0/1024.0)-273); 
 lcd.setCursor(1,1);
 lcd.print(temperature);
 delay(500);
}

[![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/DSC00726.JPG.jpg]]](http://1.bp.blogspot.com/-dD0A-smyilE/ToS5sTttYgI/AAAAAAAAAQA/P729Pq5LqhQ/s1600/DSC00726.JPG)

![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/unknown_filename.png]]

0:00 / 0:43

LM335 + Arduino temperature sensor

By Legwinskij at [11:38 AM](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.html)
[Email This](http://www.blogger.com/share-post.g?blogID=3420675664427041965&postID=4131356089756277607&target=email)[BlogThis!](http://www.blogger.com/share-post.g?blogID=3420675664427041965&postID=4131356089756277607&target=blog)[Share to Twitter](http://www.blogger.com/share-post.g?blogID=3420675664427041965&postID=4131356089756277607&target=twitter)[Share to Facebook](http://www.blogger.com/share-post.g?blogID=3420675664427041965&postID=4131356089756277607&target=facebook)[Share to Pinterest](http://www.blogger.com/share-post.g?blogID=3420675664427041965&postID=4131356089756277607&target=pinterest)

+3   Recommend this on Google

Categories: [Arduino](http://legwinskij.blogspot.fr/search/label/Arduino), [Gadgets](http://legwinskij.blogspot.fr/search/label/Gadgets)

|     |     |
| --- | --- |
| Reactions: | [Awesome (0)](https://www.blogger.com/blog-post-reactions.g?options=%5BAwesome,+Good,+Bad,+Awful%5D&textColor=%23ffffffjavascript:void(0)) [Good (0)](https://www.blogger.com/blog-post-reactions.g?options=%5BAwesome,+Good,+Bad,+Awful%5D&textColor=%23ffffffjavascript:void(0)) [Bad (0)](https://www.blogger.com/blog-post-reactions.g?options=%5BAwesome,+Good,+Bad,+Awful%5D&textColor=%23ffffffjavascript:void(0)) [Awful (0)](https://www.blogger.com/blog-post-reactions.g?options=%5BAwesome,+Good,+Bad,+Awful%5D&textColor=%23ffffffjavascript:void(0)) |

#### 12 comments:

1. ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/anon36.png]]
	
	Anonymous[May 23, 2013 at 4:29 PM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1369351764018#c5672456261909138614)
	
	Great job, ever heard of anyone using a k-type probe for water or beer wart?
	
	[Reply](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	
	[Replies](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	
	* ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/P1190004.JPG.jpg]]
		
		[Legwinskij](http://www.blogger.com/profile/11684955679943511848)[May 23, 2013 at 4:35 PM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1369352139552#c9080520132821674498)
		
		Thanks :) I don't know if its drink-safe solution, but these sensors have plastic packages so if you won't put it in a boiling liquid it should be safe.
		
	[Reply](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	
2. ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/anon36.png]]
	
	Anonymous[May 23, 2013 at 5:35 PM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1369355739725#c148070820065601505)
	
	this is what I'm talking about, they have a 3 wire hook up to pid controllers but should work with just a positive and negative
	http://www.auberins.com/index.php?main\_page=product\_info&cPath=20\_3&products\_id=101
	
	[Reply](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	
	[Replies](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	
	* ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/P1190004.JPG.jpg]]
		
		[Legwinskij](http://www.blogger.com/profile/11684955679943511848)[May 23, 2013 at 6:02 PM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1369357341565#c8652593051358387515)
		
		Oh, I see, I believe you could use that with arduino.
		
	[Reply](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	
3. ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/photo.jpg]]
	
	[dan kniffel](http://www.blogger.com/profile/08582809854604839751)[April 22, 2014 at 7:38 AM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1398177484264#c567356370258967529)
	
	Awesome, do you have a schematic? I made something similar but I could never get the readings to be very accurate.
	
	[Reply](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	
	[Replies](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	
	* ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/P1190004.JPG.jpg]]
		
		[Legwinskij](http://www.blogger.com/profile/11684955679943511848)[April 22, 2014 at 8:13 AM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1398179627832#c5152847845522767237)
		
		Hi there, thanks :). I'm sorry but I don't have schematics available, what sensor have you used ? LM335 is not going to be totally precise and also take a look at conversion between mV and degrees.
		
	* ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/photo.jpg]]
		
		[dan kniffel](http://www.blogger.com/profile/08582809854604839751)[April 22, 2014 at 12:41 PM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1398195693723#c2406948225995192793)
		
		I've used the LM335 and the LM35. Any recommendations on a different chip?
		
	* ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/P1190004.JPG.jpg]]
		
		[Legwinskij](http://www.blogger.com/profile/11684955679943511848)[April 22, 2014 at 12:50 PM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1398196225987#c4185026301522897209)
		
		In the datasheets it says that both of them should have difference of 1 degree over 100, what do you mean readings were not accurate ?
		
	[Reply](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	
4. ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/photo.jpg]]
	
	[dan kniffel](http://www.blogger.com/profile/08582809854604839751)[April 22, 2014 at 8:01 PM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1398222092302#c2945709046775425869)
	
	I calibrated them at 32 degrees with ice, then transferred to boiling water and couldn't get within 15 degrees of 220. That's why I was asking for help.
	
	[Reply](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	
	[Replies](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	
	* ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/P1190004.JPG.jpg]]
		
		[Legwinskij](http://www.blogger.com/profile/11684955679943511848)[April 23, 2014 at 1:33 AM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1398241991535#c1741297319658446979)
		
		hmmm, I guess I would recommend calibrating it at room temperature, for highets accuracy, what equation are you using for transfering mV to degrees ? and how have you hooked up LM335 ?
		
	* ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/photo.jpg]]
		
		[dan kniffel](http://www.blogger.com/profile/08582809854604839751)[April 23, 2014 at 7:40 PM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1398307230483#c5299847157634327662)
		
		Figured it out. The voltage on the USB was fluctuating +/- .5V. An external power supply fixed it.
		
	* ![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/P1190004.JPG.jpg]]
		
		[Legwinskij](http://www.blogger.com/profile/11684955679943511848)[April 24, 2014 at 1:30 AM](http://legwinskij.blogspot.com/2011/09/lm335-arduino-temperature-sensor.html?showComment=1398328211984#c5455330476968930330)
		
		Glad it works :), I would never pick USB as a problem.
		
	[Reply](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)
	

**Comment as:**

[Load more...](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:;)

<https://www.blogger.com/comment-iframe.g?blogID=3420675664427041965&postID=4131356089756277607&blogspotRpcToken=5634546>

#### Odkazy na tento príspevok

[Create a Link](http://www.blogger.com/blog-this.g)

[Newer Post](http://legwinskij.blogspot.fr/2011/10/arduino-wireless-sketch-uploading-via.html) [Older Post](http://legwinskij.blogspot.fr/2011/09/soundnoise-sensor-for-arduino.html) [Home](http://legwinskij.blogspot.fr/)

Subscribe to: [Post Comments (Atom)](http://legwinskij.blogspot.com/feeds/4131356089756277607/comments/default)

## Categories

* [AR.Drone](http://legwinskij.blogspot.fr/search/label/AR.Drone)

* [Arduino](http://legwinskij.blogspot.fr/search/label/Arduino)
* [Bluetooth](http://legwinskij.blogspot.fr/search/label/Bluetooth)
* [Gadgets](http://legwinskij.blogspot.fr/search/label/Gadgets)
* [News](http://legwinskij.blogspot.fr/search/label/News)
* [Raspberry Pi](http://legwinskij.blogspot.fr/search/label/Raspberry%20Pi)
* [Robots](http://legwinskij.blogspot.fr/search/label/Robots)
* [Tutorials](http://legwinskij.blogspot.fr/search/label/Tutorials)
* [XBee](http://legwinskij.blogspot.fr/search/label/XBee)

## Blog Archive

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [2013](http://legwinskij.blogspot.fr/search?updated-min=2013-01-01T00:00:00-08:00&updated-max=2014-01-01T00:00:00-08:00&max-results=4) (4)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [2012](http://legwinskij.blogspot.fr/search?updated-min=2012-01-01T00:00:00-08:00&updated-max=2013-01-01T00:00:00-08:00&max-results=17) (17)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [December](http://legwinskij.blogspot.fr/2011_12_01_archive.html) (1)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [November](http://legwinskij.blogspot.fr/2011_11_01_archive.html) (1)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [October](http://legwinskij.blogspot.fr/2011_10_01_archive.html) (2)

* [LM335 + Arduino temperature sensor](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.html)

* [Sound/noise sensor for Arduino](http://legwinskij.blogspot.fr/2011/09/soundnoise-sensor-for-arduino.html)
* [Pocket Arduino](http://legwinskij.blogspot.fr/2011/09/pocket-arduino.html)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [August](http://legwinskij.blogspot.fr/2011_08_01_archive.html) (3)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [July](http://legwinskij.blogspot.fr/2011_07_01_archive.html) (2)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [June](http://legwinskij.blogspot.fr/2011_06_01_archive.html) (1)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [May](http://legwinskij.blogspot.fr/2011_05_01_archive.html) (1)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [April](http://legwinskij.blogspot.fr/2011_04_01_archive.html) (2)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [March](http://legwinskij.blogspot.fr/2011_03_01_archive.html) (3)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [February](http://legwinskij.blogspot.fr/2011_02_01_archive.html) (3)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [January](http://legwinskij.blogspot.fr/2011_01_01_archive.html) (6)

* [►](http://legwinskij.blogspot.fr/2011/09/lm335-arduino-temperature-sensor.htmljavascript:void(0))  [2010](http://legwinskij.blogspot.fr/search?updated-min=2010-01-01T00:00:00-08:00&updated-max=2011-01-01T00:00:00-08:00&max-results=9) (9)

## About Me

[![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/P1190004.JPG.1.jpg]]](http://www.blogger.com/profile/11684955679943511848)

[Legwinskij](http://www.blogger.com/profile/11684955679943511848)
I'm just a regular guy, that creates gadgets legwinskij@gmail.com

[View my complete profile](http://www.blogger.com/profile/11684955679943511848)

## Pageviews

![[./_resources/Legwinskij's_Gadgets_LM335_+_Arduino_temperature_sensor.resources/chart.png]] **42,503**

|     |     |
| --- | --- |
|     |     |

Powered by [Blogger](http://www.blogger.com/).
