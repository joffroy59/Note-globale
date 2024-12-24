---
source: https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/
---
# [Gordons Projects](https://projects.drogon.net/)

## Projects, Fun and Games from Gordon @ Drogon

![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/unknown_filename.png]]

[Skip to primary content](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#content)
[Skip to secondary content](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#sidebar_primary)

* [Home](https://projects.drogon.net/)

* [Welcome](https://projects.drogon.net/welcome/)
* [Raspberry Pi](https://projects.drogon.net/raspberry-pi/)
* [PiTrak](https://projects.drogon.net/pitrak/)
* [Drogon Remote Control](https://projects.drogon.net/drogon-remote-control/)
* [DROSS](https://projects.drogon.net/dross/)
* [Return to Basics](https://projects.drogon.net/rtb/)
* [My 365](https://projects.drogon.net/my-365/)
* [Contact](https://projects.drogon.net/contact/)
* [STEM](https://projects.drogon.net/stem/)
[Home](https://projects.drogon.net/)→[Raspberry Pi](https://projects.drogon.net/raspberry-pi/)→[GPIO Examples](https://projects.drogon.net/raspberry-pi/gpio-examples/)→[Tux Crossing](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/)→**3: More LEDs and a Button**

# 3: More LEDs and a Button

We’ll add 2 more LEDs and a button now and here is the final photo:

[![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/unknown_filename.2.jpeg]]](https://projects.drogon.net/wp-content/uploads/2012/06/example4.jpg)

The Tux Crossing Board

[![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/unknown_filename.3.jpeg]]](https://projects.drogon.net/wp-content/uploads/2012/06/tuxx_bb.jpg)

Finished Tux Crossing – Breadboard layout

So we now have a traffic light/pelican (Tux!) crossing simulator.

The 2nd Red LED is connected to _**wiringPi**_ pin 3, (GPIO-22), and the 2nd Green LED is connected to _**wiringPi**_ pin 4, (GPIO-23).

Test them as before with the _**gpio**_ command, e.g.

for i in 0 1 2 3 4 ; do gpio mode $i out; done
for i in 0 1 2 3 4 ; do gpio write $i 1; done
for i in 0 1 2 3 4 ; do gpio write $i 0; done

The button is connected to **_wiringPi_** pin 8, (GPIO-0/SDA0), and the other side is connected to 0v. This pin has a 1.8KΩ resistor connecting it to +3.3v on the Raspberry Pi board. What this means is that when we set the pin to input mode and read the value, we are going to read in a logic high value (or 1 in our number terms), and when we push the button we connect the pin to 0v then the input will read a logic low value, or zero. This may appear to be the opposite way round to what we might expect, but we can easily cater for it in our programs.

Some designs for connecting buttons to the Rasberry Pi may include additional resistors, designed to protect the chips pin should you accidentally program it as an output. It’s not strictly necessary, but if you do program it as output, and write a high value to the pin, then you run the risk of damaging the pin, and possibly the chip.

We read the button as follows:

gpio mode 8 input
gpio read 8

The _**gpio**_ program will print 1 or 0 depending on the state of the button. Expect it to print 1 when the button is not pressed, and print 0 when it is pressed.

To complete this we need to write [some software to control it all](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/)

* * *

### Comments

#### _3: More LEDs and a Button_ — 38 Comments

		![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 13, 2012 at 8:12 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-183) said:
	
	Ah. Maybe there is a bug in the documentation. I’ll fix. Thanks!
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=183#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 21, 2012 at 7:03 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-241) said:
	
	Hi,
	Thanks. This is where confusion reigns in the world of GPIO. wiringPi pin 8 is GPIO pin 0 which is named SDA0.
	I’ve updated the page to read SDA0 though.
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=241#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/688f9c1635d6617419ecf4e00226af58.png]]Fede on [July 23, 2012 at 8:45 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-251) said:
	
	Thank you very much!
	I understand , but i need to write a code that runs with the mcp23017 extender that uses a python command (for example $ ./mcp23017.py -b a -o 0 -s high) to switch high or low. Do I add some extra code for a code fully functional?
	
		![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 23, 2012 at 8:51 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-252) said:
	
	The mcp23017 is an I2C device that add on additional GPIO type functionality. wiringPi won’t drive this device as it stands. Later kenels do have I2C drivers in it though, but I don’t yet have any wiringPi examples that use I2C. It is something I’m looking into though.
	
	\-Gordon
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 28, 2012 at 8:23 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-284) said:
	
	Hi Dan,
	Yes – more documentation is needed and I’m working on that…. I have boxes of M/M jump leads, so it’s just too easy for me to pick one up and wire it in without thinking!
	Cheers,
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=284#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/1a14c6eb698ada05d0552305baf96da9.png]]David on [September 1, 2012 at 5:17 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-490) said:
	
	I have stopped the buttonswitch from bouncing around with a little blutak to its base. Now to try to short out the switch. One side to RPi pin 3 and the other to the top row of the bb (0v).
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=490#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 1, 2012 at 6:27 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-492) said:
		
		Glad you’re sorted now!
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=492#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 5, 2012 at 10:30 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-538) said:
		
		Well… In theory, there’s only about 50mA “spare” on the 3.3v supply, so that’s 5 LEDs at 10mA, however I have successfully driven 17 LEDs from the GPIO pins on the Pi… It’s probably slightly exceeding some limit somewhere, but I appear to be able to “get away” with it.
		
		Also, my “ladder” game uses 12 LEDs and that’s not had any issues at all.
		
		But if you wanted to power more/ or high power ones, then you can use the 5v supply (or an external supply!) and some buffer chips to drive them – e.g. uln2803 type drivers…
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=538#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 5, 2012 at 11:16 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-540) said:
		
		I’m currently learning the “Fritzing” layout package, so will be updating everything when I can.
		
		However, there is no pull-down resistor on the bradboard. If it’s the switch, then the Pi has an on-board 1.8K pull-up resistor and the switch is connection the GPIO pin to ground.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=540#respond)
		
			![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 6, 2012 at 12:53 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-541) said:
		
		Hi, If you have time, please re-read those Tux Crossing pages and let me know if the Fritzing diagrams help.
		Thanks,
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=541#respond)
		
		![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/2e5fb8c54cfc066894a75692b0fa9a52.png]]paul on [September 6, 2012 at 9:49 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-542) said:
	
	hey gordon.
	
	the diagrams work like a charm.
	
	i just mis read the info before, i tought u placed a pull (up-down) resistor like u normaly do with logical inputs.
	and i was looking on the foto but got lost cuz i dint saw the resistor.
	
	but now i see the raspberry pi has them internal.
	
	anyway i ended up putting a pulldown resistor in it anyway and it still functioned so nothing bad ![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/1f61b.png]]
	
	thanks for the effort grts paul
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=542#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [October 23, 2012 at 12:23 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-815) said:
		
		OK. For the LCD display, try this link – [wiringPi LCD Library](https://projects.drogon.net/raspberry-pi/wiringpi/lcd-library/)
		
		Although those expanders, you can do it directly from the Pi with only 6 GPIO lines. (plus power)
		
		And you’re right about the Fritzing diagram – I’d not even noticed that… They were a recent addition to the pages though. I’ll have a look at re-doing them sometimes.
		
		Cheers,
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=815#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 18, 2012 at 11:28 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-956) said:
		
		You should be able to connect 100 if not thousands of LEDs to the Pi – there are various ways to do it – from shift registers to those specialist serial devices which allow you to chain 1000’s of RGB LEDs together via the SPI bus…
		
		The biggest issues might be rendering an image onto those LEDs – if it’s to display an image for example… and getting power to them all!
		
		Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=956#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [December 5, 2012 at 9:53 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-1098) said:
		
		The button should read 1 or High when not pressed. That’s because the pin its connected to is one of the I2C pins and there is an on-board 1.8KΩ pull-up resistor.
		
		Now… I’m wondering if you have a Rev 2 board (does it have 2 mounting holes?) However, even if you have and you’re using wiringPi pin numbers (that’s wiringPi pin number 8) then you should be OK.
		
		Another thing to check – do you have the I2C modules loaded? If so, then you might need to rmmod them.
		
		If you move it to pin 6 (wiringPi Pin 6), then you’ll need to enable the on-chip pull-up resistor to make it work reliably.
		
		It’s also possible you have the button in the wrong way round! It’s worth checking that too.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=1098#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [December 26, 2012 at 9:43 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-1270) said:
		
		/sys/class/gpio/gpio4 is not the same as reading pin 4 with the gpio command. The /sys/class interface uses the native numbering scheme. The gpio command is using wiringPi numbers. Use one or the other, but don’t mix them.
		
		If you want to emulate the native numbers with wiringPi, then use -g in the command – e.g. gpio -g read 4
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=1270#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [December 26, 2012 at 9:42 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-1269) said:
		
		What’s happening is that the pin is not connected to anything, so it’s floating – and sometimes it will read 1 and sometimes it will read 0..
		
		Try this:
		
		gpio mode 4 up
		
		then try the reads – you’ll find it always reads 1 unless you push the button (as long as the button is connected to ground)
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=1269#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [March 3, 2013 at 9:27 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-1993) said:
		
		Actually, I may have made a mistake there – I’m forgetting that the I2C pins has a 1.8K on-board and we’re pulling it down to 0v to read the switch and not pulling it up to 3.3v..
		
		So if using the I2C pins, then the “safety” resistor needs to be much smaller, but when using the other pins then 10K is fine when you enable the internal pull-up (which is about 50K).
		
		So the safety resistor for the I2C pins needs to be chosen such that it’s low enough to pull the line low (and not high as I was thinking of earlier!). So picking a value at random: 330Ω – that at 3.3v will pass a current of 10mA which is OK for the Pi, but when the pin is in input mode, the voltage drop over it is: 3.3 \* 330 / (330 + 1800) = 0.51v which I think is low enough to register a logic zero on the input.
		
		Personally I rarely use “safety” resistors, but I did put 10K ones on my ladder board which work out fine with the internal pull-up’s enabled.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=1993#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [April 7, 2013 at 8:32 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-2314) said:
		
		These are female to male jumper cables.
		They’re avalable from many places that sell Pi peripherals.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=2314#respond)
		
		![[./_resources/Rasberry_Pi__GPIO_Examples_3_More_LEDs_and_a_Button__Gordons_Projects.resources/d313b9e8f37cc3d32ec437258860de17.png]]Ivo \* on [May 17, 2013 at 2:37 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/#comment-2560) said:
	
	Sir! I thank you for this amzing tutorial!
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/?replytocom=2560#respond)
	

### Leave a Reply

Your email address will not be published. Required fields are marked **\***

Name **\***

Email **\***

Website

Comment

![[]]

### Recent Posts

* [4 Pi’s on my screen… What?](https://projects.drogon.net/4-pis-on-my-screen-what/) February 2, 2015

* [And on the 49th day, it stopped…](https://projects.drogon.net/and-on-the-49th-day-it-stopped/) July 22, 2014
* [Testing & Setting the USB current limiter on the Raspberry Pi B+](https://projects.drogon.net/testing-setting-the-usb-current-limiter-on-the-raspberry-pi-b/) July 14, 2014
* [A quick look at the new Raspberry Pi model B+](https://projects.drogon.net/a-quick-look-at-the-new-raspberry-pi-model-b/) July 14, 2014
* [LMC – The Little Man Computer on the Raspberry Pi](https://projects.drogon.net/lmc/) May 15, 2014
* [A Visit to the Center for Computing History](https://projects.drogon.net/a-visit-to-the-center-for-computing-history/) May 11, 2014

### Recent Comments

* Nick B on [A quick look at the new Raspberry Pi model B+](https://projects.drogon.net/a-quick-look-at-the-new-raspberry-pi-model-b/#comment-3614)

* [Gordon](http://drogon.net/) on [Download and Install](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3543)
* Mae on [Download and Install](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3542)
* [John](http://retroprogramming.com/) on [A Visit to the Center for Computing History](https://projects.drogon.net/a-visit-to-the-center-for-computing-history/#comment-3541)
* [Gordon](http://drogon.net/) on [BASIC is 50](https://projects.drogon.net/basic-is-50/#comment-3534)

### Archives

### Categories

### Electronics, etc. Shops

* [4D Systems](http://www.4dsystems.com.au/)

* [Adafruit](http://www.adafruit.com/)
* [Pimoroni](http://www.pimoroni.com/)
* [SK Pang](http://www.skpang.co.uk/catalog/index.php)
* [Tandy](http://www.tandyonline.co.uk/)

### Food

* [Artisan Bakery School](http://www.theartisanbakeryschool.com/)

* [Moor Bakes](http://moorbakes.co.uk/)

### People

* [Alan O'Donohoe](http://teachcomputing.wordpress.com/)

* [Dr. Sue Black](http://www.sueblack.co.uk/)
* [Gert van Loo](http://www.fenlogic.com/)
* [Les Pounder](http://about.me/lespounder)
* [Romilly Cocking](https://plus.google.com/112465172480483098623/posts)

### Raspberry Pi

* [Coding Club](http://www.codingclub.co.uk/)

* [Pimoroni](http://www.pimoroni.com/)
* [Serial Console](http://codeandlife.com/2012/07/01/raspberry-pi-serial-console-with-max3232cpe/)
* [The MagPi Magazine](http://www.themagpi.com/)
* [USB Console](http://tech2077.blogspot.co.uk/2012/07/adding-ftdi-chip-to-raspberry-pi.html)

### Sites of Interest

* [4D Systems](http://www.4dsystems.com.au/)

* [Drogon Systems](http://drogon.net/)
* [Fignition](http://sites.google.com/site/libby8dev/fignition)
* [Madlab](http://madlab.org.uk/)
* [Quick2Wire](http://quick2wire.com/)
* [Raspberry Pi](http://www.raspberrypi.org/)
* [The <goto> foundation](http://gotofdn.org/)
* [The Zuzebox blog](http://zuzebox.wordpress.com/)

### Meta

* [Log in](https://projects.drogon.net/wp-login.php)

* [Entries RSS](https://projects.drogon.net/feed/)
* [Comments RSS](https://projects.drogon.net/comments/feed/)
* [WordPress.org](https://wordpress.org/)

### Tags

[4d systems](https://projects.drogon.net/tag/4d-systems/) [7 segment](https://projects.drogon.net/tag/7-segment/) [30](https://projects.drogon.net/tag/30/) [200](https://projects.drogon.net/tag/200/) [adafruit](https://projects.drogon.net/tag/adafruit/) [Arduino](https://projects.drogon.net/tag/arduino/) [BASIC](https://projects.drogon.net/tag/basic/) [bread](https://projects.drogon.net/tag/bread/) [bug](https://projects.drogon.net/tag/bug/) [c](https://projects.drogon.net/tag/c/) [computing](https://projects.drogon.net/tag/computing/) [delay](https://projects.drogon.net/tag/delay/) [difference](https://projects.drogon.net/tag/difference/) [display](https://projects.drogon.net/tag/display/) [DRC](https://projects.drogon.net/tag/drc/) [dtronixs](https://projects.drogon.net/tag/dtronixs/) [examples](https://projects.drogon.net/tag/examples/) [features](https://projects.drogon.net/tag/features/) [fun](https://projects.drogon.net/tag/fun/) [GPIO](https://projects.drogon.net/tag/gpio/) [I2C](https://projects.drogon.net/tag/i2c/) [interfacing](https://projects.drogon.net/tag/interfacing/) [interpreter](https://projects.drogon.net/tag/interpreter/) [jamboree](https://projects.drogon.net/tag/jamboree/) [joystick](https://projects.drogon.net/tag/joystick/) [ladder game](https://projects.drogon.net/tag/ladder-game/) [lcd](https://projects.drogon.net/tag/lcd/) [ldc](https://projects.drogon.net/tag/ldc/) [madlab](https://projects.drogon.net/tag/madlab/) [manchester](https://projects.drogon.net/tag/manchester/) [meiko](https://projects.drogon.net/tag/meiko/) [mini piio](https://projects.drogon.net/tag/mini-piio/) [museum](https://projects.drogon.net/tag/museum/) [nes](https://projects.drogon.net/tag/nes/) [pimoroni](https://projects.drogon.net/tag/pimoroni-2/) [raspberry pi](https://projects.drogon.net/tag/raspberry-pi-2/) [rtb](https://projects.drogon.net/tag/rtb/) [speed](https://projects.drogon.net/tag/speed/) [supercomputer](https://projects.drogon.net/tag/supercomputer/) [touchscreen](https://projects.drogon.net/tag/touchscreen/) [training](https://projects.drogon.net/tag/training/) [ucubed](https://projects.drogon.net/tag/ucubed/) [update](https://projects.drogon.net/tag/update/) [WiringPi](https://projects.drogon.net/tag/wiringpi/) [years](https://projects.drogon.net/tag/years/)

|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |May 2015
| M   | T   | W   | T   | F   | S   | S   |
| --- | --- | --- | --- | --- | --- | --- |
| [« Feb](https://projects.drogon.net/2015/02/) |     |     |     |     |     |     |
|     |     |     |     | 1   | 2   | 3   |
| 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| 11  | 12  | 13  | 14  | 15  | 16  | 17  |
| 18  | 19  | 20  | 21  | 22  | 23  | 24  |
| 25  | 26  | 27  | 28  | 29  | 30  | 31  |

### Raspberry Pi®

**Raspberry Pi** and the associated Logo are trademarks of [The Raspberry Pi Foundation](http://www.raspberrypi.org/) The name and logo are used throughout this site and their trademarked status is acknowledged here.

### Cookies

This site is written using Wordpress and to make it operate, Wordpress sets 2 session cookes by default. These are temporary cookies which should only be held in the memory of your browser and be deleted when you shutdown the browser or reboot your computer.

### Copyright

All content copyright © 2012-2014 Gordon Henderson

© 2015 - [Gordons Projects](https://projects.drogon.net/) _[Proudly powered by WordPress](http://wordpress.org/)  Weaver II by [WP Weaver](http://weavertheme.com/)_
