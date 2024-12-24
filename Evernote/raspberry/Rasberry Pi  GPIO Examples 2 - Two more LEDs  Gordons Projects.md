---
source: https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/
---
# [Gordons Projects](https://projects.drogon.net/)

## Projects, Fun and Games from Gordon @ Drogon

![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/unknown_filename.png]]

[Skip to primary content](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#content)
[Skip to secondary content](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#sidebar_primary)

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
[Home](https://projects.drogon.net/)→[Raspberry Pi](https://projects.drogon.net/raspberry-pi/)→[GPIO Examples](https://projects.drogon.net/raspberry-pi/gpio-examples/)→[Tux Crossing](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/)→**2: Two more LEDs**

# 2: Two more LEDs

No surprises here – add 2 more LEDs to the board as shown below:

[![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/unknown_filename.2.jpeg]]](https://projects.drogon.net/wp-content/uploads/2012/06/example3.jpg)

Added two more LEDs

[![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/unknown_filename.4.jpeg]]](https://projects.drogon.net/wp-content/uploads/2012/06/3led_bb3.jpg)

Three LEDs on the breadboard

They are wired up as before with the Yellow LED being connected to _**wiringPi**_ pin 1 (GPIO-18) and the Green LED on _**wiringPi**_ pin 2 (GPIO-21)

Test with the _**gpio**_ program as before. e.g.

gpio mode 0 out
gpio mode 1 out
gpio mode 2 out
gpio write 0 1
gpio write 1 1
gpio write 2 1

to turn the all on.

If you want to do this somewhat easier, then we can use the shell programming system:

for i in 0 1 2 ; do gpio mode $i out; done
for i in 0 1 2 ; do gpio write $i 1; done
for i in 0 1 2 ; do gpio write $i 0; done

to do this using the GPIO pins:

for i in 17 18 21 ; do gpio -g write $i 1; done

If the above doesn’t make sense to you, then don’t worry for now.

[Lets move on](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/3-more-leds-and-a-button/) to finishing setting up the breadboard in part 3.

* * *

### Comments

#### _2: Two more LEDs_ — 22 Comments

		![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 17, 2012 at 10:42 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#comment-954) said:
	
	The “shell” is the name of the thing (program) that you type commands into – when you write a shell script, it’s really a program written using the normal commands you type in (plus a few more for flow control, etc.). If used to ole DOS, then it’s similar to writing a DOS ‘batch’ file.
	
	There are several different shells avalable, but the common one these days is called “bash”.
	
	Have a look at the tuxx.sh code for an example of a program written using the bash shell.
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/?replytocom=954#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [December 7, 2012 at 2:20 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#comment-1119) said:
	
	The fritzing diagram is correct, but the breadboard is the wrong way round compared to the photo I took. I’m slowly working my way through these again and re-doing them as needed.
	
	Cheers,
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/?replytocom=1119#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 5, 2013 at 11:49 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#comment-1363) said:
	
	You have a Rev 2 board and GPIO pin 21 is GPIO pin 27. (and that was written before Rev 2 boards existed)
	
	Stick to wiringPi numbers and they’ll always work as it knows the difference between board revisions.
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/?replytocom=1363#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/65de0fc92e04fb7abd23a16293d3ffbf.png]]Ben on [January 22, 2013 at 1:45 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#comment-1540) said:
	
	Hey
	
	Just wanted to say thanks for your tutorial, this kind of thing is brand new to me and following your steps I was able to turn my external LED on and off!!
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/?replytocom=1540#respond)
			![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 4, 2013 at 8:12 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#comment-1658) said:
		
		I must have missed something – An equivlent to what?
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/?replytocom=1658#respond)
		

		![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/e6e46d925fc579dc6452e4102c2da41e.1.png]][joao](http://none/) on [February 7, 2013 at 7:16 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#comment-1718) said:
	
	“DOS style” …. sorry
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/?replytocom=1718#respond)
	
		![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 7, 2013 at 7:18 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#comment-1719) said:
	
	You can’t use wiringPi to control servos. Use the servoblaster kernel module instead.
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/?replytocom=1719#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 24, 2013 at 8:27 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#comment-1888) said:
	
	Experimenting & fun is what it’s all about…
	
	And a button is just the bare ends of 2 wires… Improvise…
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/?replytocom=1888#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/091ddafe6985861c5318f6fc77540a77.jpg]]tai viinikka on [April 4, 2013 at 4:44 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#comment-2293) said:
	
	Gordon, you’re awesome. Thanks for the clear explanations and the diagrams and photos. Most people don’t realize how much work it is to get this stuff spelled out correctly and simply, but we who do realize really appreciate it!
	
	Cheers,
	tai
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/?replytocom=2293#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [June 8, 2013 at 10:45 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#comment-2670) said:
		
		Glad you’re having fun!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/?replytocom=2670#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_2_-_Two_more_LEDs__Gordons_Projects.resources/ed3caf3938fe282cfc163391168793b0.jpg]]Nicholas on [July 7, 2013 at 4:06 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/#comment-2745) said:
		
		Thanks for the fast reply! I know how to run shell commands in Python, so I think I can do this in python.
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/?replytocom=2745#respond)
		
	

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
