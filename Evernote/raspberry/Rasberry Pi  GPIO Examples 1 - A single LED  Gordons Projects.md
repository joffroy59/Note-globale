---
source: https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/
---
# [Gordons Projects](https://projects.drogon.net/)

## Projects, Fun and Games from Gordon @ Drogon

![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/unknown_filename.png]]

[Skip to primary content](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#content)
[Skip to secondary content](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#sidebar_primary)

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
[Home](https://projects.drogon.net/)→[Raspberry Pi](https://projects.drogon.net/raspberry-pi/)→[GPIO Examples](https://projects.drogon.net/raspberry-pi/gpio-examples/)→[Tux Crossing](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/)→**1: A single LED**

# 1: A single LED

Before we even get started with the GPIO, lets make an LED light up by simply wiring it to the +3.3v supply and 0v.

[![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/unknown_filename.3.jpeg]]](https://projects.drogon.net/wp-content/uploads/2012/06/example1.jpg)

Single LED Lit up

[![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/unknown_filename.7.jpeg]]](https://projects.drogon.net/wp-content/uploads/2012/06/1led_bb1.jpg)

One LED on the 3.3v supply

So… We have a yellow wire from the Pi’s +3.3v supply to the breadboard and this connects to an LED then via a 270Ω (ohm) resistor to 0v. The green wire connects back to the Pi.

(Note that here and in the following pages, the _Fritzing_ breadboard layout is slightly different from the photos – it’s the same circuit, just laid out in a way that makes it easy to see in the images)

Refer to the [diagram here](https://projects.drogon.net/raspberry-pi/wiringpi/pins/) to work out the pins we’re using. From this view the 3.3v pin on the GPIO connector is to the top-left, or pin number 1 on the connector.

In electronics terms, our circuit diagram looks like this:

[![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/unknown_filename.2.png]]](https://projects.drogon.net/wp-content/uploads/2012/06/test.png)

LED Circuit diagram

A quick word about the electronics involved. LEDs are Light Emitting Diodes and the diode part is important for us – they only pass electricity one way, so we need to make sure we put them in the right way round. They have a long leg and a slightly shorter leg. The long leg goes to the plus side and the shorter leg to the negative (or 0v) side. If we’re cut the legs short (as I have done here), then another way is to look at the side of the LED – there will be a flat section. Think of the flat as a minus sign and connect that to the 0v side of the circuit.

If we allow too much current through the LED, it will burn very bright for a very short period of time before it burns out, so we need a resistor to limit the current. Calculating the resistor value is not difficult but for now, just use anything from 270Ω to 330Ω. Anything higher will make the LED dimmer.

So now we have a lit LED. What we really need to do is make it easily turn on and offable – preferably by a command or program running on the Raspberry Pi.

We need to move the yellow wire to one of the programmable GPIO pins. We’ll move it to _**wiringPi**_ pin 0 (GPIO-17) which is notionally the first user GPIO pin. (It’s physical location is pin 11 on the GPIO connector)

[![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/unknown_filename.4.jpeg]]](https://projects.drogon.net/wp-content/uploads/2012/06/example2.jpg)

LED controlled by GPIO

[![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/unknown_filename.6.jpeg]]](https://projects.drogon.net/wp-content/uploads/2012/06/1led_gpio_bb1.jpg)

Breadboard layout for GPIO controlled LED

Do check against the wiring diagram to work out which pin on the connector to use. The LED will initially be off because normally the GPIO pins are initialised as inputs at power-on time.

If you haven’t already done so, [download and install wiringPi](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/). This will give you some libraries to use in C programs, but also a command-line program which we can use to test the GPIO with.

Type the commands:

gpio mode 0 out
gpio write 0 1
gpio write 0 0

If all has gone well, the LED should come on, then go off again. The first _**gpio**_ command above sets pin 0 to output mode, the 2nd sets pin 0 to the value “1” – logic 1 which puts a 3.3v signal on the pin, and turns the LED on, and the last one turns it off again.

#### A word about GPIO pin numberings…

t’s often customary to refer to the GPIO pins on a microcontroller by the pin number on the chip originating the signal (or by the internal register name and bit-number). The Arduino system decided that that was complex for newcomers and used a system called **_wiring_** which started the pin numbers at zero and worked upwards. This had the advantage of making sure that when they moved to new chips which possibly had different internal configurations, etc. the pin numbers would remain the same. I have adopted this scheme in my _**wiringPi**_ library for the Raspberry Pi, but I also allow for the native GPIO numbering scheme too. You will probably see the GPIO numbering scheme elsewhere though, so I’ll give examples using both schemes.

If you look at the [pins chart](https://projects.drogon.net/raspberry-pi/wiringpi/pins/), then it gives both values. You can see that _**wiringPi**_ pin 0 is GPIO-17. _**wiringPi**_ pin 1 is GPIO-18, _**wiringPi**_ pin 2 is GPIO-21 an so on. To use the GPIO pin numbering then you need to pass the -g flag to the **_gpio_** program:

gpio -g write 17 1
gpio -g write 17 0

This should turn the LED on then off again.

[And on to part 2](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/2-two-more-leds/) where we’ll add in 2 more LEDs.

* * *

### Comments

#### _1: A single LED_ — 125 Comments

		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 6, 2012 at 11:50 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-141) said:
	
	Did you remember to do the
	
	sudo make install
	
	in the gpio directory?
	
	That should put the executable file in /usr/local/bin. See if it’s there with
	
	ls -l /usr/local/bin/gpio
	
	If that’s fine, then you might want to inspect your PATH variable to see if it includes /usr/local/bin in it.
	
	$ echo $PATH
	/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games
	$ which gpio
	/usr/local/bin/gpio
	$ ls -l /usr/local/bin/gpio
	\-rwsr-xr-x 1 root root 15866 Jul 6 10:47 /usr/local/bin/gpio
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=141#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 6, 2012 at 12:58 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-143) said:
	
	If youy start here:
	
	<https://projects.drogon.net/raspberry-pi/wiringpi/>
	
	Then it ought to have all the info you need, or fast forward to:
	
	<https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/>
	
	it has all the download and install information…
	
	I’ll drop a note to the author of that site to make sure it’s up to date!
	
	however, after doing the sudo make install in the wiringPi direcytory, then the next thing to do is compile your own program – wiringPi by default doesn’t use any of the /sys/class/gpio stuff, so looking there won’t really help you.
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=143#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 19, 2013 at 1:44 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-1500) said:
	
	Hard to work out what you’re replying to (maybe I need to start a forum!)
	
	Just detail the issue here, or email me and I’ll see if I can get you sorted out,
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=1500#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/690279802960e356adee374b418b00b3.1.png]]chris on [July 13, 2012 at 7:35 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-181) said:
	
	Oh yes, you are right! ![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/unknown_filename.5.png]]
	I have 2 reistors with higher values…now i tried the lower one and it works fine. Thank you very much.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=181#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 23, 2012 at 10:06 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-255) said:
	
	If I was saying anything in any sort of official capacity, then I’d say “Yes, turn the Pi Off”, but since I’m not saying anything in an official capacity, then sure, just move it…
	
	Just take care. I rarely turn my Pi’s off when re-wiring them, but I have managed to reboot them – presumably by shorting something out and so-far I see to have “gotten away” with it… Connecting that wire going to the LED to any pin is highly unlikely to have any issues though. Connect it to the +5V and the LED will be a little brighter, connect it to a pin configured as an input, or 0V and nothing will happen.
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=255#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [August 11, 2012 at 7:47 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-361) said:
	
	Trying to work out what’s brown there – green maybe? I bought a load of male to female jumper leads off here a while back, but they seem out of stock: <http://www.skpang.co.uk/catalog/jumper-wires-premium-150mm-mf-pack-of-10-p-909.html>
	
	although they’re still selling the stater kits which contain a bunch of these leads. (as well as the usual male to male jumper leads for use with a normal breadboard)
	
	As for current – don’t exceede 16mA on a single pin – I have driven 17LEDs off the GPIO before – see <http://unicorn.drogon.net/pi17leds.jpg>
	
	Each of those is taking about 10mA, so 170mA in total – but I’m told that slighty exceeds the 3.3v supply, so probably not a good thing to do!
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=361#respond)
	

		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/7650c4a942ba89b4996cecd89206bd96.png]]Charles on [August 12, 2012 at 11:43 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-373) said:
	
	Thanks for the reply, that’s exactly what I was looking for. “Jumper wire” is the magic search term I needed to find them for sale. Found some F/M ones available on Amazon.
	
	Thanks also for the advice on current draw.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=373#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [August 14, 2012 at 2:01 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-380) said:
		
		Great! always the simple ones that you trip over ![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/unknown_filename.5.png]]
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=380#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 4, 2012 at 7:38 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-530) said:
		
		Easiest way to check is with an ammeter if you have one. Probably no harm dropping the value of the resistor though. Try with the LED connected directly to the 3.3v pin and 0v before connecting to a GPIO pin, but really a multimeter will tell you what current it’s drawing.
		
		Do you have any other LEDs – anything in the scrap pile you can salvage?
		
		But it does sound like the LED has an internal resistor to me though.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=530#respond)
		
	
		Pingback: [RaspberryPI | Pearltrees](http://www.pearltrees.com/mrmin24/raspberrypi/id5898613#pearl56479469&show=reveal,6)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 30, 2012 at 7:16 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-696) said:
		
		It doesn’t actually matter which side of the LED the resistor is on. The only think that’s important here is the way round the LED is. (And if you get it wrong it simply won’t work – you won’t break it)
		
		It’s easier to think of current being pushed – by the supply – in this case the 3.3v pin on the Pi – it will push the current from the 3.3v pin to the 0v or ground pin. In our circuit it will be psuhed via the LED (which will light up) and pushed via the resistor (which will reduce the flow – or slow it down in our water terms)
		
		You really need to go and study some books on elementary electronics …
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=696#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [October 1, 2012 at 7:44 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-703) said:
		
		Hope it’s sorted now though!
		You can connect gpio – LED/Resistor – 3.3v that works ok, but its not my prefered way to do it.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=703#respond)
		
	
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/9a152b626ca4ff40e3f67756084c51db.png]]Ste on [October 1, 2012 at 8:25 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-704) said:
	
	Thanks for your time and help.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=704#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [October 8, 2012 at 10:47 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-748) said:
		
		It could do – the Pi’s GPIO pins can sink up to 16mA, so by connecting the 0v lines together then you can use the Pi to control the LEDs, however it might be prudent to use something like an open-connector output type of arrangement to buffer the 2 supplies – e.g. uln2803 or simlar…
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=748#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 2, 2012 at 12:56 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-880) said:
		
		Make sure you use the -g command if you’re using the BCM\_GPIO numbering scheme. From my diagram on that page you can use
		
		either
		
		`gpio -g mode 17 out gpio -g write 17 1`
		
		or
		
		`gpio mode 0 out gpio write 0 1`
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=880#respond)
		
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/da568c01a942a30a0716c03de19f44eb.jpg]]John on [November 9, 2012 at 11:42 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-933) said:
	
	Thank you for such a well laid out tutorial. Once again thank you!
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=933#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 18, 2012 at 5:54 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-962) said:
		
		Difficult for me to make a suggestion here – my biggest issue is that I started doing this some 35+ years ago, so have just built it up along the way (along with spending 8 years in a university too!)
		
		What there is a lot of though is introductions to electronics based on the Arduino platform now – that’s quite a well established platform and the electronics principles are the same (although the Pi is 3.3v and the Arduino is typically 5v) and just keep on googling!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=962#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/292fa550fa5445664790eca6b2a75322.png]]Ahsan Ebrahim Khatri on [December 13, 2012 at 4:09 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-1157) said:
		
		“LXTerminal” thank you very much ![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/unknown_filename.5.png]]
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=1157#respond)
		
	
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/92002141c36c5ed0926da2262d7ddeb6.jpg]][Brad](http://k1gto.blogspot.com/) on [December 8, 2012 at 3:59 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-1129) said:
	
	Thank you very much for posting this easy to follow tutorial! Helps those of us getting started find our bearings. Looking forward to more.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=1129#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [December 17, 2012 at 9:36 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-1191) said:
		
		If you’re using the gpio command, then the easiest way to do it is in a bash script, but if you want to do it in a C program (or other language), then you can use the system() function – which executes a command from inside your program.
		
		So:
		
		#include <stdlib.h>
		
		…
		
		int i ;
		char cmd \[100\] ;
		
		…
		for (i = 0 ; i < 16 ; ++i)
		{
		sprintf (cmd, “/usr/local/bin/gpio write %d 1″, i) ;
		system (cmd) ;
		}
		
		will work in C. Most other languages have something similar to system() too.
		
		However it’s terribly innefficient – it will be slow!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=1191#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [December 28, 2012 at 2:05 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-1295) said:
		
		A good ‘daylight’ desk lamp and a magnifier. (Which is what I use)
		
		And a multimeter when all else fails…
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=1295#respond)
		
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/4bee4c4d7c98d5fd3bc5139677b113d2.png]][mark](http://www.howtoraspberry.com/) on [January 7, 2013 at 4:09 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-1390) said:
	
	It is very helpful procedure. Just keep posting an article like this so that it is easy to us people who have no idea about Raspberry Pi on how to get information like this.Keep up the good work.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=1390#respond)
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 11, 2013 at 9:53 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-1423) said:
		
		Hi,
		
		It’s not my area of expertiese I’m afraid. I’ve really no idea where to start, other than google…
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=1423#respond)
		
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/efc3fa6edd481233804aee9501b7dfd6.png]]mark page on [January 15, 2013 at 8:43 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-1449) said:
	
	Thank you Mr Gordon for your excellent tutorial. I love the way you have written and illustrated it.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=1449#respond)
	
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/2d0cf7bfc3baa6cd97aecf633b9e5da6.png]]Paul on [January 18, 2013 at 10:37 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-1480) said:
	
	Just to say thanks for the circuit details, photo’s and diagrams. I’ve just successfully got my LED flashing a treat. Using RISCos BTW
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=1480#respond)
	
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/04a6de30ca92f516f1ebea51b8611cce.png]]Manuel Santos on [January 27, 2013 at 8:23 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-1574) said:
	
	Muchas gracias. Ha funcionado perfectamente.
	
	MAnuel Santos, MADRID
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=1574#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 2, 2013 at 8:19 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-1637) said:
		
		Wish I knew what the answer was… I’ve just tried it on a Pi here (with a LED + resistor connected) and it seems to work OK:
		
		write 0 – LED off:
		
		`+----------+------+--------+------+-------+ | wiringPi | GPIO | Name | Mode | Value | +----------+------+--------+------+-------+ | 0 | 17 | GPIO 0 | OUT | Low | `
		
		write 1 – LED on:
		
		`+----------+------+--------+------+-------+ | wiringPi | GPIO | Name | Mode | Value | +----------+------+--------+------+-------+ | 0 | 17 | GPIO 0 | OUT | High | `
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=1637#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/0672f5ff2fbe53224a533a94047381fe.png]]Nathan on [June 4, 2013 at 5:57 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2656) said:
		
		I’m after the exact same thing. A power LED is easy (GPIO 2/6) but I’d really like to get an activity light wired to the exterior of the case I’m building.
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [October 30, 2013 at 2:54 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-3158) said:
		
		It all depends on the voltage drop the LED has – and what current you actually want to flow through it. Most common red/green/yellow LEDs work well using a resistor that’s 100 times the voltage – so 330 works ok with 3.3v, and so on.
		
		Doing the sums properly, then you can work out the exact resistor needed. So a common red LED probably has a vF of 2.0 volts and wants 20mA for full brightness – but the max we can safely pull is 15mA, so using Ohms law, R = V/I = (3.3 – 2.0) / 0.015 = 86, or 100 ohms which is the nearest standard value.
		
		I used 270 ohms because it was handy and safe should the LED have short circuited. (max. current through 270 ohms at 3.3v is I = V/R = 3.3/270 = 12mA) With a 100 ohm resistor the max. current should the LED short circuit would be 33mA – more than double the recommended limit.
		
		If I was doing this on a commercial project, making 1000’s of devices where I wanted the maximum brightness, then I would do the sums and make sure the drivers are doing their thing correctly, but for hobbyist use here, 270 or 330 is more than OK and errs on the side of caution, also the brightness of an LED driven at full current and half current is really not that noticable. Try an experiment yourself and see!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=3158#respond)
		
	
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/ad4a6eac75060b191837b0f96e875d30.png]]Mobius on [March 12, 2013 at 12:17 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2077) said:
	
	I followed your LED example but connected a single SPDT relay module instead. The Pi is just driving the input of an optoisolator so no current issues. As a bonus the relay module has an LED so I can determine when it is energized. I don’t have a specific application yet, but this opens up a whole world of possibilities. Thanks for your work on this project.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2077#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/80dc66d73b438aa6e50234dc97d83594.1.png]]Max on [March 26, 2013 at 12:31 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2207) said:
		
		It’s possible, although I would have expected pin 1 to cause just as many problems, but it was working just fine. I ended up switching that connection to pin 21 though, and now everything is working as expected.
		
		Thanks for writing a great library!
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [April 3, 2013 at 1:17 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2290) said:
		
		a 1K resistor ought to make a typical small LED light up – but it will be dim.
		
		So make sure you’re connecting it to the right pins. Pin 1 on the P1 connector is the +3.3v supply. If you connect that to the resistor then to the LED then to the 0v line then the LED should light up – as per this page
		
		<https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/>
		
		(it doesn’t matter if the LED is first or the resistor is first – but it does matter which way round the LED goes – the long leg to the +3.3v side)
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2290#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [April 6, 2013 at 7:04 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2309) said:
		
		Riiight… Bit late for an april fools…
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2309#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [April 6, 2013 at 8:12 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2312) said:
		
		Cheers!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2312#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [April 15, 2013 at 7:12 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2339) said:
		
		Firstly – you do not (and really shouldn’t) use sudo with the gpio command – it’s a set-uid program so doesn’t need it.
		
		Startup files don’t have any path set, so to run them you either need to set the PATH variable to include /usr/local/bin, or explicitly use gpio like /usr/local/bin/gpio
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2339#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [April 15, 2013 at 8:09 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2345) said:
		
		Hi Jake,
		
		Unfortunately I don’t program in Python, so you’ll need to get someone else to help you there. I only write code in C and BASIC. (And shell scripts)
		
		However, try to think in a higher level – you’ll need some sort of array or list to represent each LED, and a variable to hold the current position. So you light the LED at the first position, then you might do something like:
		
		`repeat wait for button push turn off LED at the current position wait for button to be released add 1 to position if position > last LED then position = 0 light LED at position cycle`
		
		So the code between the repeat…cycle lines would be run for ever.
		
		But how to translate that into Python – you’ll need to find someone who can write Python to help you there.
		
		If you want to look at some examples in another language – then look at the tuxx.sh example – that’s bash script, but it does something similar – it waits on the button being pushed then goes through a sequence of LEDs before waiting on the button again.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2345#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [April 28, 2013 at 8:42 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2413) said:
		
		Thanks,
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2413#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [April 29, 2013 at 9:18 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2425) said:
		
		Make sure the LEDs are the right wy round
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2425#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/6857f0f7409da5f9dcfff325a3ca8764.jpg]]Nicola on [May 12, 2013 at 6:31 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2520) said:
		
		The connections are ok but doesn’t
		work.
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2520#respond)
		
	
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/6857f0f7409da5f9dcfff325a3ca8764.1.jpg]]Nicola on [May 13, 2013 at 8:32 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2523) said:
	
	Solved. The plug on gpio was broken
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2523#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [May 17, 2013 at 11:41 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2556) said:
		
		Go here: <http://wiringpi.com/examples/blink/>
		
		Enjoy!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2556#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [May 19, 2013 at 5:14 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2571) said:
		
		You can still use Fritzing – e.g. see here:
		
		[Blink example](http://wiringpi.com/examples/blink/)
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2571#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [May 20, 2013 at 10:41 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2581) said:
		
		You’ll be OK with using e.g. cat 5 cable for an LED. No need for shielding.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2581#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/3b07b88e67263aab237e20dc948030e8.1.png]]Jon on [June 12, 2013 at 2:29 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2689) said:
		
		More along the lines of how the 6th Pin got set to High, and why I can not reset, or set it back to Low.
		
		I figure I either managed to do so during testing between Java, C, Python, or any of the other scripts I was running, or the physical pin has a hardware issue.
		
	
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/f445da6be815f52aafbb25e53d16818e.png]]myred on [July 1, 2013 at 3:59 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2725) said:
	
	Jon, did u find an answer about pin 6 ?
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2725#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 12, 2013 at 11:53 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2765) said:
		
		Looks like a cheap little kit with enough fun bits to get you going. Glad it’s working for you!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2765#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 6, 2013 at 8:00 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-2965) said:
		
		Yes.
		<http://unicorn.drogon.net/pi17leds.jpg>
		<https://projects.drogon.net/the-raspberry-ladder-board/>
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=2965#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/f6ce39b66002a410b335c00a285907b3.1.png]][David](http://www.centermonitoring.com/) on [September 29, 2013 at 2:44 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-3057) said:
		
		Sorry Gordon. I forgot the command.
		
		It is as follows :
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=3057#respond)
		
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 29, 2013 at 6:17 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-3058) said:
		
		How are you powering the fairy lights? If you’re powering them all off the Pi, then I suspect you’re overloading the 4v supply into the Pi. You only have about 200mA spare if the Pi is being powered via the micro USB connector – are you sure your lights take under 200mA?
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=3058#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [October 2, 2013 at 4:35 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-3067) said:
		
		Use the USB port. then you can use standard software like wvdial, etc. to talk to it.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=3067#respond)
		
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/716404219eacadf1a109f885aa9c942e.png]]Mike on [October 13, 2013 at 9:38 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-3101) said:
	
	For those looking for a really easy language to use with the PI can I suggest YOUSRC. Used with loads of school pupils and a great success.
	
	<http://www.yousrc.com/functions5.asp?AREA=PI>
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=3101#respond)
	
		![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/c2b26d458beaa50b9f55779861a68ba5.png]]jay germanwala on [October 16, 2013 at 4:24 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-3102) said:
	
	Hello Gordan Sir..!
	Can you please tell me how to use internet on R-pi using usb teathering?
	Also tell me the settings required to turn on internet using ethernet, having a dynamic ip.
	Thanks.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=3102#respond)
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 12, 2013 at 10:51 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-3188) said:
		
		Have replied in email, but will just this here anyway – 15 LEDs on the softPwm will be fine – it’s about 0.5% cpu usage per LED. Just set the pwm value to 0 to turn them off.
		
		I use vim and Makefiles for all my code – some people are having good results with Geany though…
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=3188#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 27, 2013 at 6:51 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-3213) said:
		
		gpio write 0 1
		and
		gpio -g write 17 1
		
		are functionally identical. wiringPi pin 0 is bcm\_gpio pin 17. There’s no reason the first version shouldn’t work.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=3213#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/4c94c28ea1aa21f41f33b5f62642dff8.1.jpg]]Jonathan on [December 27, 2013 at 4:28 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-3326) said:
		
		Aha!! nvm it turned out to be a simple breadboard error! Thanks for the great tutorial!!
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=3326#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 31, 2014 at 4:53 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-3396) said:
		
		470 will be fine – the LED will just be a bit dimmer.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=3396#respond)
		
	
			![[./_resources/Rasberry_Pi__GPIO_Examples_1_-_A_single_LED__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 1, 2014 at 5:32 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/#comment-3400) said:
		
		I think you’ll find that your thoughts are flawed. It really does not matter which side of the LED the resistor is on.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/?replytocom=3400#respond)
		

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
