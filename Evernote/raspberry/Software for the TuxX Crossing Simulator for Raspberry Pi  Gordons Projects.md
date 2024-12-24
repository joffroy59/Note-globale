---
source: https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/
---
# [Gordons Projects](https://projects.drogon.net/)

## Projects, Fun and Games from Gordon @ Drogon

![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/unknown_filename.png]]

[Skip to primary content](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#content)
[Skip to secondary content](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#sidebar_primary)

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
[Home](https://projects.drogon.net/)→[Raspberry Pi](https://projects.drogon.net/raspberry-pi/)→[GPIO Examples](https://projects.drogon.net/raspberry-pi/gpio-examples/)→[Tux Crossing](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/)→**Software**

# Software

We can write the program to control the simulator in a variety of languages. Using the _**gpio**_ program we can do it in a simple shell script (or even call it from languages such as php, perl, etc.) and using the _**wiringPi**_ library then we can call it from C or C++.

As a bit of an exercise, I have written 2 versions – one using the standard BASH and the other in C. You can get the source code here:

* [TuxX Source Code](http://project-downloads.drogon.net/files/gpioExamples/)

* [GIT Repository](https://git.drogon.net/?p=gpioExamples;a=summary)

The bash code (tuxx.sh) will run directly, but to make the C program run, we first need to compile it, then run it as root via the sudo command.

Setup:

mkdir ~/tuxx
cd ~/tuxx

To get and run the Bash version:

wget http://project-downloads.drogon.net/files/gpioExamples/tuxx.sh
chmod +x tuxx.sh
./tuxx.sh

To get and run the C version:

wget http://project-downloads.drogon.net/files/gpioExamples/tuxx.c
cc -o tuxx -Wall -I/usr/local/include -L/usr/local/lib tuxx.c -lwiringPi
sudo ./tuxx

to get the latest via GIT:

git clone git://git.drogon.net/gpioExamples
cd gpioExamples/tuxx
make
sudo ./tuxx

Do examine the code (both the C and Bash versions) to understand how they work and how to adapt them for your own projects

Enjoy!

\-Gordon

* * *

### Comments

#### _Software_ — 47 Comments

		![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 8, 2012 at 10:08 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-167) said:
	
	The gpio command is part of my wiringPi package. You need to get it all from
	<https://projects.drogon.net/raspberry-pi/wiringpi/>
	and compile and install it yourself.
	I do all my stuff under Debian, but I don’t think there would be any issues under Arch
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=167#respond)
	

		![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 9, 2012 at 5:21 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-169) said:
	
	The way I wired it up was to use one of the I2C pins which has an on-board pull-up resistor. So that pin will always read 1 when the button is not pushed. the button shorts the signal to ground, reading 0 when it’s pushed.
	
	So I think the code is right…
	
	At least it works OK on my setup!
	
	How have you wired the button in?
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=169#respond)
	

		![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 21, 2012 at 6:50 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-239) said:
	
	That’s good to know, thanks. I’ve been using Debian for 18 years, so I’m a bit out of touch with other distros!
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=239#respond)
	

		![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/68ddae3c743cc808c068f1c19a13c583.png]]dan on [August 12, 2012 at 9:44 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-376) said:
	
	really enjoyed doing this as my first GPIO project, no problems with the bash code.
	thanx! for sharing… now i’m gonna move on to the ladder game ![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/unknown_filename.1.png]]
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=376#respond)
	
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 24, 2013 at 11:42 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-1560) said:
		
		Excellent!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=1560#respond)
		
	
		![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/c510febb9bed68b5cc4a09f076701e0f.jpg]]blix on [September 9, 2012 at 8:41 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-562) said:
	
	I just completed this as my first project, thanks Gordon.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=562#respond)
	
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 15, 2012 at 8:41 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-601) said:
		
		Yes – the GPIOs will stay the last you you left them! You may want to write a 2nd program that turns all outputs off, or resets them all to inputs.
		
		Or… Read up about signals so that if you stop your program with Control-C, it can be caught and in that function that catches it, you can reset all GPIOs to inputs, etc.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=601#respond)
		
	
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/9a152b626ca4ff40e3f67756084c51db.png]]Ste on [October 1, 2012 at 8:44 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-713) said:
		
		Possibly using a Push-to-break instead of push-to-make? (wrong pins on the switch?)
		
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [October 1, 2012 at 8:58 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-714) said:
		
		Those little push button switches are push to make – I don’t like them very much, but they’re cheap and cheerfull!
		
		\-Gordon
		
	
		![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/cc8a6977cce74bbee8b73a3dcdfbe155.png]]Launix on [October 4, 2012 at 9:59 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-735) said:
	
	Great job!
	What I looked for, to begin working on RaspBerry.
	Look easier to understand very deep how works the beats.
	
	\-Launix
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=735#respond)
	
		![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/dfd4d1082d42d9e22d7aac2ca5783506.jpg]]Joey Andres on [December 7, 2012 at 12:24 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-1117) said:
	
	Really impressive, coming form arduino, I can now unleash the monster programmer inside me into this approximately 800x more powerful machine. I was the third in this big city that i live in to get the raspberry pi.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=1117#respond)
	
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 6, 2013 at 9:22 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-1366) said:
		
		No reason why not. You’ll need some sort of buffers to drive the relays from the Pi – e.g. uln2803’s. Sounds like a fun version of the Tuxx crossing ![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/1f609.png]]
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=1366#respond)
		
	
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/e547884f0cf16323a50129050b649477.png]]Gus on [May 18, 2013 at 2:57 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-2562) said:
		
		Having lived in NZ for quite some time, I too thought the phasing was strange but then I do remember the flashing ambers back in Blighty! Will see if the kids notice when (if) I let them try it.
		
		Great work Gordon.
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=2562#respond)
		
		![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/715ece208307fc1ef4ff37a049fa787e.jpg]]zcat on [January 19, 2013 at 2:44 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-1489) said:
	
	.. also thanks heaps for the example though. Really helped me to figure this stuff out.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=1489#respond)
	
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/66baa69f58c4462056599134bd2c108d.1.png]]Kevin Cook on [January 27, 2013 at 8:34 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-1584) said:
		
		Sorry, ignore the ’18’ it doesn’t work on any number or mix.
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=1584#respond)
		
				![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [April 5, 2013 at 8:56 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-2301) said:
			
			wiringPi is written in C. I’ve really no idea what you’re doing there, sorry..
			
			\-Gordon
			
			[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=2301#respond)
			
		
	
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 2, 2013 at 4:47 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-1634) said:
		
		Yes, it should have printed Setup… followed by Waiting…
		
		I have just tried it myself – (I fetched the code via wget and via git) and it worked OK for me:
		
		`# cc -o tuxx -Wall -I/usr/local/include -I/usr/local/lib tuxx.c -lwiringPi # ./tuxx Setup ... OK Waiting for button ... ^C `
		
		I’d not normally be root to do this (other than sudo ./tuxx) but I was root to make sure I did the same as you…
		
		So I’m somewhat confused that it didn’t print anything. At this point, I’d stick a printf in the code in the main() section just to see if it starts up at all, but it’s really a simple program – hard to see why it would fail to start at all…
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=1634#respond)
		
	
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 13, 2013 at 6:21 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-1783) said:
		
		Is it the tuxx.sh script you’re running? If so, you should just be able to type it in a command window the same way to did in the first place..
		
		It’s not really designed to be “clicked” from a GUI though – start a terminal and type ./tuxx.sh
		
		If this isn’t what you’re after, then you’ll need to give me some more details though.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=1783#respond)
		
	
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [March 3, 2013 at 9:22 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-1992) said:
		
		Not sure that anything needs changing for c++ – you link your code the same way: -lwiringPi
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=1992#respond)
		
		![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/4f34160cb13d01450de0fae9ce08569d.png]]Phooi Seng Lim on [March 7, 2013 at 3:06 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-2030) said:
	
	Never mind, I have figured out myself from “google”. I need to include the -lstdc++ linker in my gcc command line. Thanks anyway.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=2030#respond)
	
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [March 10, 2013 at 9:34 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-2060) said:
		
		Just make sure you have the right pin. wiringPi pin 4 is BCM\_GPIO 23 and is on physical connector pin 16 on P1.
		
		The pin you might be refering to as CP Clk 0 is BCM\_GPIO 4 and wiringPi pin 7 (physical pin 7 on P1)
		
		The Pi revision is not an issue for either of these pins. Just double check your connections and pin assignments. If using the gpio command, then use the -g flag to force it to use BCM\_GPIO pin numbers, otherwise it will be using wiringPi pin numbers.
		
		See this page for the pin designations: <http://wiringpi.com/pins/>
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=2060#respond)
		
	
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 12, 2013 at 11:43 am](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-2759) said:
		
		Sure – However I’m not a Python programmer. I only do BASIC and C. There are many examples out there though.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=2759#respond)
		
		![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/8c7a420c11f4dd635a759375a841451f.png]]Gobion Rowlands on [August 10, 2013 at 6:43 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-2868) said:
	
	Lovely little project – very easy to follow and I enjoyed every minute of it! Thank you for taking the time to write it up ![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/unknown_filename.1.png]]
	
	A few notes:
	– Like one of the previous commenters mentioned I had to cut a bit of wire off a resistor to adapt one of the male-to-female wires to a male-to-male wire, but that was an easy hack. The skpang raspberry pi starter kit A was excellent for this.
	– I ran into a weird bug that made two of the lights blink but not light up. Turns out it was because I was also running the LEDBorg module – a quick “sudo rmmod ledborg” sorted that quickly. It is an edge case but as it had me scratching my head I thought I would share ![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/unknown_filename.1.png]]
	
	Thank you again – it is tutorials like this that make electronics approachable to a complete noob like me ![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/unknown_filename.1.png]]
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=2868#respond)
			![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [August 21, 2013 at 9:59 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-2891) said:
		
		Not sure I know what you’re after here, but look at the ladder board stuff and the tuxx.sh program – that’s a simulator for a UK pelican crossing using the ladder board.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=2891#respond)
		
		![[./_resources/Software_for_the_TuxX_Crossing_Simulator_for_Raspberry_Pi__Gordons_Projects.resources/885b470f6d1727868415670e2d9d0123.png]]Mark Evans on [October 30, 2013 at 10:25 pm](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/#comment-3160) said:
	
	Gordon,
	Just ran across your tutorial. Wanted to say thanks for sharing this. I enjoyed every step. I’ll be going over the same steps with my boys (13, 9) this weekend.
	
	Thanks again!
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/software/?replytocom=3160#respond)
	

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
