---
source: https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/
---
# [Gordons Projects](https://projects.drogon.net/)

## Projects, Fun and Games from Gordon @ Drogon

![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/unknown_filename.png]]

[Skip to primary content](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#content)
[Skip to secondary content](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#sidebar_primary)

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
[Home](https://projects.drogon.net/)→[Raspberry Pi](https://projects.drogon.net/raspberry-pi/)→[WiringPi](https://projects.drogon.net/raspberry-pi/wiringpi/)→**Download and Install**

# Download and Install

_**WiringPi**_ is now maintained under GIT for ease of change tracking, however there is a _Plan B_ if you’re unable to use GIT for whatever reasons (usually your firewall will be blocking you, so do check that first!)

If you do not have GIT installed, then under any of the Debian releases (e.g. Raspbian), you can install it with:

sudo apt-get install git-core

If you get any errors here, make sure your Pi is up to date with the latest versions of Raspbian:

sudo apt-get update
sudo apt-get upgrade

To obtain WiringPi using GIT:

git clone git://git.drogon.net/wiringPi

If you have already used the clone operation for the first time, then

cd wiringPi
git pull origin

Will fetch an updated version then you can re-run the build script below.

To build/install there is a new simplified script:

cd wiringPi
./build

The new build script will compile and install it all for you – it does use the sudo command at one point, so you may wish to inspect the script before running it.

* * *

### Plan B

Click on this URL: (it should open in a new page)

<https://git.drogon.net/?p=wiringPi;a=summary>

Then look for the link marked **snapshot** at the right-hand side. You want to click on the top one.

This will download a tar.gz file with a name _like_ wiringPi-98bcb20.tar.gz. Note that the numbers and letters after **wiringPi** (98bcb20 in this case) will probably be different – they’re a unique identifier for each release.

You then need to do this to install:

tar xfz wiringPi-98bcb20.tar.gz
cd wiringPi-98bcb20
./build

Remmeber the actual filename will be different – you will have to check the name and adjust accordingly.

* * *

### Test wiringPi’s installation

run the gpio command to check the installation:

gpio -v
gpio readall

That should give you some confidence that it’s working OK.

_**WiringPi**_ is released under the GNU Lesser Public License version 3.

* * *

### Comments

#### _Download and Install_ — 321 Comments

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb55ffecc490b03c20589d9a2153cbb5.jpg]][Carter](http://nonapp.com/) on [September 26, 2013 at 12:00 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3048) said:
	
	Ya, this is an unfortunate bit about the PI, BUT, I handled off loading PWM to a I2C board to work around this limitation. Pardon the outright ad, and there are several out there, but Adafruit’s <http://www.adafruit.com/products/815>
	worked for me.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3048#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [June 20, 2012 at 3:54 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-71) said:
	
	What you can do is simply copy the source-code in-line with your own program. Just add it all on at the top of the program. It’s not elegant, but it should work!
	
	I’ve not had time to look at Geany yet though.
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=71#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/d8772b1875642982378fd43019a04df5.png]]arlukas on [August 21, 2012 at 8:48 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-413) said:
	
	Hello Jaques
	Like you I use Geany to program, compile and debug C programs and also I had the same problem with wiring library. Here is my solution.
	Go to ‘Build’ menu and then ‘Set Build Commands’. In the second option, ‘Build’, you have to write the following:
	
	gcc -o “%e” -l/usr/local/include “%f” -L/usr/local/lib -lwiringPi
	
	I assume that you have followed the standar installation instructions.
	
	Hope this helps.
	
	Regards.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=413#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [June 27, 2012 at 3:36 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-87) said:
	
	Looks like you’ve not missed the point, but I’ve missed a line! There should be a pwmRunning = TRUE in that block. However it’s not really doing any harm, just a minor optimisation and I’ll sort it out then next time I do an update!
	
	Thanks!
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=87#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 5, 2012 at 2:26 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-137) said:
	
	Essentially yes.
	
	You may have to tweak a few things though – e.g. there might not be a “byte” type (and even on the arduino, you probably want to #include <stdint.h> and use uint8\_t instead of ‘byte’…)
	The PWM value is 0 to 1023, so might need a little scaling.
	ints on the Pi are signed 32-bit values, as are longs, so do check ranges and so on.
	
	Not sure where you’re getting the day(), month() and year() functions from either, but I’ll assume you have something else to provide them… If not, and you’re not sure how to do this stuff under unix then lookup the manual page for the ctime() function.
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=137#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 7, 2012 at 8:14 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-158) said:
	
	uint8\_t is defined in stdint.h – it’s surprising if your system doesn’t have stdint.h though.
	
	#include <stdint.h>
	
	?
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=158#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/4df14d7545f16cb2a705db3718923d7d.png]][James](http://nanodyne.net/) on [February 22, 2013 at 6:32 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1869) said:
		
		Sometimes I’m dylsexic too!
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1869#respond)
		
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/800139af57555855bdaa56cbaf1ea004.1.png]]wally on [August 23, 2012 at 8:02 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-435) said:
	
	“You’ll only see a /dev/ttyUSB0 if you plug in a USB serial device.”
	
	sure, i’m donkey ![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/unknown_filename.2.png]]
	
	thank you
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [August 23, 2012 at 8:05 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-436) said:
	
	Nah, but it’s easy to get confused if you’re new to all this!
	
	\-Gordon
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 13, 2012 at 2:56 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-188) said:
	
	lxterm is fine.
	did you do the sequence of:
	cd wiringPi/wiringPi
	make
	sudo make install
	cd ../ gpio
	make
	sudo make install
	— and finally:
	cd ../examples
	make <— did you type make?
	sudo ./test1
	
	I’m wondering if you missed out the ‘make’ command in the examples directory.
	
	However, unless you connect up some LEDs to the Pi, you’re not going to see very much happening – they are really intended to be used as examples to base your own GPIO programs on.
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=188#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 13, 2012 at 2:57 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-189) said:
	
	Ah, guesed you missed the final ‘make’ them. Do look at the programs though and if you want more examples, there are a few more on my website – e.g. lookup the TuxX program and the ladders game …
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=189#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 20, 2012 at 2:20 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-228) said:
	
	Aargh )-:
	bother.
	That’s what I get for working on some ATmega and Pi projects at the same time. I’ve put the wrong thing in the wrong makefile – (and it happens I have the arduino IDE installed on my Pi’s so I never noticed it).
	Thanks for that. I’ll fix it right away.
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=228#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 20, 2012 at 2:20 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-229) said:
	
	Yes. I’ve goofed on the Makefile. Will fix it right away.
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=229#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 20, 2012 at 6:02 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-233) said:
	
	Type Control-C in the terminal window you started the program in.
	(That’s the usual unix/linux way!)
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=233#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 26, 2012 at 7:54 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-267) said:
	
	Thanks!
	
	What I’m aiming to do is to move it all to GIT, but that requires learning GIT first – I just need to sit down for an afternoon with no interruptions and get on with it..
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=267#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [July 29, 2012 at 3:45 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-289) said:
	
	Try:
	
	`cc -o test test.c -lwiringPi`
	
	to compile it (assuming your file is called test.c!)
	
	then
	
	`sudo ./test`
	
	to run it.
	
	I’m not sure about using geany – I don’t use it myself, but I might have to start to have a look soon to work out how to make it use additional libraries.
	
	\-Gordon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=289#respond)
	

		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/a988ccf67b3462af58febe0cfce5f8d9.png]]Dan Riches on [July 29, 2012 at 6:44 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-290) said:
	
	Many thanks Gordon, much much appreciated! I’ll be sure to let you know how I get on and if I manage to get it to compile under Geany.
	
	Thanks again ![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/unknown_filename.2.png]]
	
	Dan
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=290#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [August 6, 2012 at 4:17 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-327) said:
		
		Yes – you’re putting the PWM into the other mode (which is possibly more sensible than the default which is balanced out, but who knows) – it’s something I’ll be doing for the next release, providing the ability to change the frequency and mode.
		
		Cheers,
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=327#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [August 9, 2012 at 11:07 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-341) said:
		
		You’ve just sent me an email which I’ll answer shortly, but briefly:
		
		1 – In theory yes. There are various setups and libraries to do this – e.g. The Beowolf project and so on, or just by writing your own communication mechanisms.
		
		2 – The on-board LCD display port doesn’t have any drivers yet, so right now we’re limited to the HDMI or composite video output
		
		3 – You can power a Pi from batteries, but you’ll need a 5V regulator and be aware that the Pi is going to comsume some 3 watts, so regulat AA’s won’t last long, you’ll need something bigger.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=341#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [August 12, 2012 at 8:53 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-372) said:
		
		Glad your able to use it and modify it – but you’re probably right about /tmp, however you did learn something new ![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/1f609.png]]
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=372#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/dc5cb635795e37e46bd3b92ef3f3440f.png]][Ted](http://elecurls.tripod.com/) on [September 14, 2013 at 12:19 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2992) said:
		
		A post here mentioned your wiringPi Library.
		I’d sure like to have that!
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2992#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [August 22, 2012 at 2:30 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-417) said:
		
		Hi,
		
		How did you download and install it?
		
		If you try this:
		
		`git clone git://git.drogon.net/wiringPi`
		
		then:
		
		`cd wiringPi/wiringPi make sudo make install cd ../ gpio make sudo make install`
		
		then that should make everything cleanly.
		
		Let me know how you get on with that.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=417#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [August 22, 2012 at 2:59 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-420) said:
		
		OK. If you’re running Debian (Squeeze/Wheezy/Raspbian), then
		
		`sudo apt-get install git-core`
		
		will fetch and install GIT for you. It may be that the old release files are somewhat incomplete though – probably my fault when moving the project into GIT, so I’ve just pushed the current version to the old downloads site, so try again, either way and let me know how you get on.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=420#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [August 28, 2012 at 7:38 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-462) said:
		
		You need to make the programs. Just type ‘make’ in the examples programs to build them.
		
		For a start from LED 1 type example, have a look at:
		
		<https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/>
		
		Do drop me an email though if you need more help to get going.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=462#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 1, 2012 at 6:30 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-493) said:
		
		It’s a good question – and one reason is that while I’ve been using Debian for 18 years, I’m relatively new to actually building packages for it, so it’s on the cards, but not yet.
		Also, the GIT way will work on other Linux releases too – e.g. Arch which seems to have a small, but growing community, so GIT makes it an easy way to distribute for everyone.
		
		However, yes, you can remote git –
		
		sudo apt-get purge git-core
		sudo apt-get clean
		
		However, you’ll need it again, should you need to upgrade wiringPi.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=493#respond)
		
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/32d7bdc4efcd080679a39b88b34f07db.png]][Garym](http://www.binaryfarm.com/) on [September 2, 2012 at 3:03 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-495) said:
	
	Well you rock, Sir.
	You have a great body of work here. Very helpful. I’ve spent a lot of time wandering the pages here.
	
	Thank you!
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=495#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 8, 2012 at 9:50 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-560) said:
		
		If you pull the latest wiringPi via GIT then the delayMicroseconds() code uses a hardware timer when asking to delay under 100uS, then you can bit-bang the interface.
		
		However, there is a kernel module for 1-wire – I’ve not used it myself yet, but it’s there… However, even with the new delayMicroseconds() code, I’d be concerned about latency due to Linux getting in the way. Run as root, call wiringPiSetup() first, then piHiPri (50) ;
		
		Good luck!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=560#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 15, 2012 at 8:45 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-604) said:
		
		I’ll have a look at it. Thanks!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=604#respond)
		
		Pingback: [RaspberryPI | Pearltrees](http://www.pearltrees.com/mrmin24/raspberrypi/id5898613#pearl56479631&show=reveal,6)
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/821a854163dbcd43a88e1849162e148f.png]][paralegal certification and what you shoud expect](http://paralegaltrainingandjobs.com/the-importance-paralegal-certification/) on [September 12, 2012 at 6:13 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-583) said:
	
	Aw, this was an incredibly good post. Taking the time and actual effort to make a good
	article but what can I say I hesitate a lot and don’t seem to get anything done.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=583#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 16, 2012 at 10:10 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-612) said:
		
		Going to have to learn how to do that myself first, but it’s on the to-do list!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=612#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 21, 2012 at 12:28 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-639) said:
		
		Have sent you an email – but for anyone else reading, I’m testing a new Makefile which generates both a static and shared library for wiringPi and it’s ancilliary functions.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=639#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [October 8, 2012 at 10:45 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-747) said:
		
		OK. I’ll look into i again. Odd though – the data sheets for those chips all specify the timings in the nano seconds range!
		
		And it seems that the differnet displays have differnet ways to address len x hight.
		
		More to investigate…
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=747#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [October 7, 2012 at 12:02 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-742) said:
		
		With the latest wiringPi release, you compile the examples separately. e.g.
		
		**make test2**
		
		However… the difference between cc and gcc … Or is it simply because you omitted the -lwiringPi from the 2nd one? Can you post the output?
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=742#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [October 21, 2012 at 11:52 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-791) said:
		
		Well that’s new )-:
		
		I’ll see if I can get some more answers.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=791#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 20, 2012 at 1:25 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-974) said:
		
		If you use the <https://git.drogon.net/> site, then browse to a project, then click on the “snapshot” link on the right, you’ll then get a tar.gz file to download which you can manually unpack.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=974#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 1, 2012 at 6:17 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-869) said:
		
		You’re using Arch, I guess?
		I’ll have a look … moving from a static library to dynamic has caused more issues that any other change to wiringPi )-:
		
		\-Gordon
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/0cb2c925b1bf6b8d2295b9ae16330e26.png]]cattail on [July 10, 2013 at 9:20 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2751) said:
		
		Hi,Gordon
		I have the same issue in tinycore(for pi) 4.7.7
		
		google it find this page, have not test it yet ……
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2751#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [October 30, 2012 at 9:28 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-845) said:
		
		Well I use LaTeX for some of my own documentation, but controlling GPIO via TeX – that’s “special” ![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/1f609.png]]
		
		Drop me an email with your changes and I’ll have a look and see what’ swhat.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=845#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/504a59b13600978a40412b23dae7c5f7.png]]Philipp on [November 2, 2012 at 7:24 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-885) said:
		
		Everything works fine from the commandline, but when I start the script on bootup via update-rc.d the port is floating and the file mentioned in the post before contains nothing.
		
		Sorry if I myself unclear.
		
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 5, 2012 at 10:37 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-892) said:
		
		I can’t think why it might not be starting – I’d go through the scripts again, making sure the paths are set right, etc. I can’t think any other reasons right now, sorry..
		
		\-Gordon
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 2, 2012 at 8:01 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-874) said:
		
		You can use Either I2C or SPI with this device. Personally, I’d use SPI, but if you’re more familairwith I2C, then use that.
		
		In either mode, you essentially send the device a read or write command, then specify the internal register to read/write, then you write the data, or read the value of that register. These are all 8-bit commands, so you exchange 2 bytes each cycle.
		
		Then you need to work out the register details, and so on…
		
		It’s not a device I’ve used myself – If you want more replies then you might be better off posting this on one of the Raspberry Pi forums though – or even looking through the Arduino ones too – as Sparkfun make a breakout board for this device, so there will probably be plenty of people using it there…
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=874#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 7, 2012 at 12:11 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-920) said:
		
		the important thing is to find out what the voltage and current rating the back-light needs. If it’s a simple LED or 2, then you might be able to drive it directly from the Pi (via a suitable resistor).
		
		The switching transistor might be needed to drive the backlight at a higher voltage and/or current than the Pi can provide – without knowing the characteristics of the display, I don’t know if it’s needed or not.
		
		I’d also start by not using PWM. So try:
		
		gpio mode 1 out
		gpio write 1 0
		gpio write 1 1
		
		and see what happens.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=920#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/f581019d96f6bb04418392f6ab27dfc4.png]]Paul on [January 25, 2013 at 8:17 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1570) said:
		
		I ran into the same problem on Raspbmc. This worked:
		
		sudo apt-get update
		sudo apt-get install make
		sudo apt-get install gcc
		
		Then ./build
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1570#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 21, 2012 at 2:47 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-988) said:
		
		\-lwiringPi causes the C compiler to look for libwiringPi. where is .a for a static library or .so for the dynamic ones…
		
		So there should be /usr/local/lib/libwiringPi.so as well as some symbolic links to it to represent the versions of that library.
		
		`  gordon @ pi0: ls -l /usr/local/lib total 48 lrwxrwxrwx 1 root staff 33 Oct 21 18:53 libwiringPi.so -> /usr/local/lib/libwiringPi.so.1.0 lrwxrwxrwx 1 root staff 33 Oct 21 18:53 libwiringPi.so.1 -> /usr/local/lib/libwiringPi.so.1.0 -rwxr-xr-x 1 root staff 33532 Oct 21 18:53 libwiringPi.so.1.0  `
		
		I’m now wondering what distro you are using? I know that Debian includes /usr/local/lib in the library search paths by default, but so others?
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=988#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 21, 2012 at 4:10 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-990) said:
		
		The lib prefix is a bit of history that goes back over 30 years (I don’t know why) as for the version numbers – to be honest I did it that way because it seems that’s how everyone else does it – this is the first time I’ve actualyl built a dynamic library for Linux…
		
		Hiny, tips, suggestions for improvement are welcome ![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/1f609.png]]
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=990#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 26, 2012 at 8:29 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1025) said:
		
		Make sure you’ve got the latest version of wiringPi from GIT.
		
		cd
		it clone git://git.drogon.net/wiringPi
		cd wiringPi
		./build
		
		It sounds like your SoC hasn’t bee properly programmed though – check the output of
		
		cat /proc/cpuinfo
		
		but later versions of wiringPi cater for this (by assuming Rev 2)
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1025#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [December 26, 2012 at 11:28 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1259) said:
		
		You’re probably right and I’ve gone over the whole of the PWM code – again. Personally, I think the Pi’s PWM hardware is just a bit of a waste of time and have reverted to my software PWM for everything now.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1259#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [December 8, 2012 at 4:07 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1131) said:
		
		c++ is fine – just #include <wiringPih> as usual and us ethe functions as you would in a C program.
		
		To run a program at boot time – look into /etc/rc.local – you can add it in there. (Raspbian – Arch may be different)
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1131#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/51814dd01ab5c9b9fdf07dc3144eabc8.png]]muhackl on [December 20, 2012 at 10:41 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1217) said:
		
		Thanks! Seems to work.
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1217#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 14, 2013 at 11:09 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2994) said:
		
		You need to explicitly specify the path to run programs in the current directory (it’s a security measure) Also, this program needs root permissions to run, so:
		
		sudo ./okLed
		
		then watch the OK (or Act) LED on your Pi.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2994#respond)
		
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/4461ceb0dde7159ca325d25bf868538f.png]]evoncken on [January 1, 2013 at 1:20 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1317) said:
	
	Hi Gordon,
	
	Thanks for your efforts in creating/supporting the wiringPi library, much appreciated!
	
	I’ve done a fresh Raspbian (2012-12-16) install on my 256MB model B. Followed the instructions, cloned the git repository. Some of the examples won’t build though (cd examples; make $EXAMPLE):
	
	\[CC\] tone.c
	tone.c: In function ‘main’:
	tone.c:17:8: warning: unused variable ‘buf’ \[-Wunused-variable\]
	tone.c:16:10: warning: unused variable ‘j’ \[-Wunused-variable\]
	\[link\]
	/usr/local/lib/libwiringPi.a(piThread.o): In function \`piThreadCreate':
	piThread.c:(.text+0x18): undefined reference to \`pthread\_create’
	collect2: ld returned 1 exit status
	make: \*\*\* \[tone\] Error 1
	
	I get the same linker error for “servo” and “okLed”. It seems that the pthreads library is missing from the linker invocation. I’ve made the following modification to the Makefile to fix:
	
	pi@raspberrypi ~/github/wiringPi/examples $ git diff -p Makefile
	diff –git a/examples/Makefile b/examples/Makefile
	index 738d36c..f219c9e 100644
	— a/examples/Makefile
	+++ b/examples/Makefile
	@@ -95,15 +95,15 @@ serialRead: serialRead.o
	
	okLed: okLed.o
	@echo \[link\]
	– @$(CC) -o $@ okLed.o $(LDFLAGS) $(LDLIBS)
	\+ @$(CC) -o $@ okLed.o $(LDFLAGS) $(LDLIBS) -lpthread
	
	tone: tone.o
	@echo \[link\]
	– @$(CC) -o $@ tone.o $(LDFLAGS) $(LDLIBS)
	\+ @$(CC) -o $@ tone.o $(LDFLAGS) $(LDLIBS) -lpthread
	
	servo: servo.o
	@echo \[link\]
	– @$(CC) -o $@ servo.o $(LDFLAGS) $(LDLIBS)
	\+ @$(CC) -o $@ servo.o $(LDFLAGS) $(LDLIBS) -lpthread
	
	.c.o:
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1317#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 1, 2013 at 1:31 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1319) said:
		
		Hi,
		
		thanks for that. I goofed when I re-introduced the static libraries again. I have a fix for it, but not pushed it out to the GIT site yet. Will get there soon!
		
		Cheers,
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1319#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 1, 2013 at 5:17 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1325) said:
		
		It’s probably a side-effect of the binary constands not being recognised earlier.
		
		Can you build it directly on a Raspberry Pi?
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1325#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 1, 2013 at 5:44 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1327) said:
		
		I do all my stuff under Raspbian – because I’ve been using Debian for 18+ years now, and it seems to be what everyone else is using on the Pi right now too.
		
		Not sure what packages you might need under Arch to build it though – basic compiler & build tools I imagine, make, gcc, etc.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1327#respond)
		
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/1a7fbdd029d52bc5972dc6ba6455b0e7.1.png]]palkot on [January 1, 2013 at 5:46 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1328) said:
		
		Success!
		
		I had scp’d to the Pi the repo I cloned on my mac. That wasn’t working, so I installed git on the Pi, cloned WiringPi locally, and it built fine.
		
		Onward..
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1328#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 8, 2013 at 10:16 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1393) said:
		
		I’m supecting that maybe your local site is blocking GIT for some reason. The server is running (check with <https://git.drogon.net/> ) and I’ve just done some test GIT fetches from it.
		
		There was an issue a few days ago with IPv6, but that should be sorted – and it looks like your site can’t do IPv6 anyway – which is what’s leading me to think it might be an issue at your end – maybe a firewall?
		
		You can use the web link above to ge a tar.gz image of wiringPi (click on wiringPi in the main screen, then click on the ‘snapshot’ link at the right).
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1393#respond)
		
				![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 21, 2013 at 9:23 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1516) said:
			
			Wondering now if it’s to do with IPv6… You could try this:
			
			git clone git://195.10.226.169/wiringPi
			
			The wget package is old and will give you build issues with I2C (which I see from your other replies here)
			
			\-Gordon
			
			[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1516#respond)
			
		
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/aec2a2dcc4a27922c81203692e170066.png]]Brent on [January 8, 2013 at 11:32 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1398) said:
	
	yep that was it. Thanks.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1398#respond)
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/aec2a2dcc4a27922c81203692e170066.png]]Brent on [January 8, 2013 at 11:45 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1399) said:
	
	Hi Gordon,
	
	Something you might want to add to your instructions is to tell users that if they have trouble installing git to run the following command first. I am new to Linux and it took me a while to solve that problem.
	
	sudo aptitude update
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1399#respond)
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/af4b2498ffc4c0a0d17810b5d0e0b0d4.png]]jharragi on [January 9, 2013 at 2:05 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1407) said:
	
	This is a heads up to some of the people having the no control of GPIO2 problem.
	
	I just installed the newest archlinuxarm – and had the GPIO2 stuck low. I don’t remember if wiringpi was already installed – I think so. Arch’s pacman still has an older package. Anyway, removed the distro version and did a new build.
	
	/usr/local/lib/ is not searched for libwiringPi.so.1.0
	
	moved to /usr/lib/ and built the symlinks. Works fine.
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1407#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/75c51ed17ffbb0b330d939ce6251aa7b.1.png]]HBrydon on [January 10, 2013 at 10:55 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1420) said:
		
		Aha problem fixed – firewall blocked TCP port 9418, which is needed by git protocol – the list is at . I unblocked 9418 and it worked.
		
		Sorry, after submitting this issue, I see somebody else had a similar problem 4 messages up. I thought I checked for that before submitting a comment. Maybe my fix is helpful to them too…
		
		\[sent from my pi using IceWeasel browser…\]
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1420#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 12, 2013 at 6:27 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1427) said:
		
		You need to include the wiringPi library, so:
		
		g++ -o send send.cpp -lwiringPi
		
		However you also need to compile the library at the same time, so:
		
		g++ -o send send.cpp RCSwitch.cpp -lwiringPi
		
		Check the Makefile there too – that should have worked OK.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1427#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 12, 2013 at 9:53 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1430) said:
		
		the issue is that the gpio command uses naive wiringPi pin numbers by default, and your using wiringPiSetupSys() in the code.
		
		So if you change the wiringPiSetupSys() into wiringPiSetup() then it will work, but you’ll need to run the progam with sudo.
		
		If you want to do it without sudo, then:
		
		gpio export 23 out
		
		and use the wiringPiSetupSys() in the program, and change pin 4 to pin 23.
		
		However pinMode() does’t work in ‘Sys’ mode – it will only ever work if you use sudo. (And you only need to do it once, not in the loop)
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1430#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 12, 2013 at 11:05 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1432) said:
		
		it’s pin number confision.
		
		bcm\_gpio Pin 23 is wiringPi pin 4.
		
		wiringPiSetup() – my own wiringPi pin numbers.
		
		wiringPiSetupSys() – bcm\_gpio pin numbers.
		
		Stick to one system or the other.
		
		So here, change the 23 into 4.
		
		you don’t need the gpio export command in wiringPi() mode either.
		
		And, as you’ve seen, poking the wrong pins can crash the pi!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1432#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 13, 2013 at 12:18 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1436) said:
		
		It really sounds like the installation is incomplete. Do you have the gpio, wiringPi and examples directories?
		
		try this:
		
		cd
		rm -rf wiringPi
		git clone git://git.drogon.net/wiringPi
		cd wiringPi
		./build
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1436#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 13, 2013 at 5:44 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1440) said:
		
		Well it looks fine, but please stop using sudo for everything. That’s probably where it’s all gone wrong – the files will have been installed with root premissions rather than that of the ‘pi’ users (or whaterver user you are doing).
		
		So… Best to start again..
		
		`cd sudo rm -r wiringPi`
		
		…. then don’t use sudo, but:
		
		`git clone git://git.drogon.net/wiringPi cd wiringPi ./build`
		
		not a sudo in sight.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1440#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 14, 2013 at 7:56 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1448) said:
		
		You need to change into the examples directory first.
		
		`cd examples make test1`
		
		and so on.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1448#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/51eb94fd1d694b4ee27fd1a681dfcb41.1.png]]sajal nagwanshi on [January 15, 2013 at 5:53 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1454) said:
		
		WOWOWOW!!
		THanks so much. the edit in makefile was the culprit!
		This means a lot to me. I had been banging my head all this weekend. if you would been around I would have given a treat to you !
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/1f600.png]]
		Sir, you Rock!
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 15, 2013 at 9:52 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1458) said:
		
		Yes, thanks. I’ll work another way as I’ve had a couple of issues with that now. One way might even be to take out the I2C code for now.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1458#respond)
				![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/e439ac3377762a59703c1e35864a05f1.png]]Ashley on [February 14, 2013 at 9:17 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1793) said:
			
			I’m confused. I’m having this issue too. I have /usr/include/linux/i2c-dev.h but I’m getting:
			
			usr/lib/gcc/arm-linux… ‘i2c\_smbus\_write\_byte’
			‘i2c\_smbus\_read\_byte’
			\_write\_byte\_date’ …
			
			collect2: ld returned 1 exit status
			make: \*\*\* \[gpio\] Error 1
			\[Install\]
			cp: cannot stat \`gpio’: No such file or directory
			make: \*\*\* \[install\] Error 1
			
				![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 14, 2013 at 9:40 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1794) said:
			
			What issue too?
			
			Sorry – this isn’t really a forum so the comments don’t thread well, so I’m a little confused about what you’re getting.
			
			Firstly, have you got the latest version of wiringPi (Not the one from the project-downloads site, but the one via GIT). If you did not use GIT to download it, then you will not have the latest wiringPi and the compile will fail unless you install the i2c-dev package – and note that you will have a /usr/include/linux/i2c-dev.h, but not the right one!
			
			So – sudo apt-get install libi2c-dev
			
			will fix that for you – unless you’re on Arch in which case you won’t get the I2C stuff at all as they don’t provide it yet.
			
			\-Gordon
			
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 19, 2013 at 7:27 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1835) said:
		
		How did you get wiringPi into the Pi without Internet?
		
		You really need an Internet connection – you need to update & upgrade the existing software on the Pi from the initial SD card image. The nyou can fetch the i2c stuff and the latest wiringPi, etc.
		
		\-Gordon
		
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/e439ac3377762a59703c1e35864a05f1.png]]Ashley on [February 19, 2013 at 7:37 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1836) said:
		
		I downloaded the wiringPi folder onto a usb stick and copied it into my home directory… i compiled the makefile for wiringPi ok but not the makefile for the gpio…. hmmm
		
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 19, 2013 at 7:42 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1838) said:
		
		If you can still use a usb stick to do the transfer then:
		
		Fetch the latest wiringPi – use git if possible.
		Fetch this file: <http://unicorn.drogon.net/i2c-dev.h>
		copy the i2c-dev.h file to /usr/include/linux/i2c-dev.h
		
		`make wiringPi: cd wiringPi ./build`
		
		Do not try to use the inidvidual makefiles.
		
		\-Gordon
		
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/e439ac3377762a59703c1e35864a05f1.png]]Ashley on [February 19, 2013 at 7:38 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1837) said:
		
		thanks for your help
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 21, 2013 at 6:41 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1531) said:
		
		Thanks!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1531#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 20, 2013 at 3:17 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1505) said:
		
		Perfectly normal and in some-ways I’m glad you got that message ![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/1f609.png]]
		
		I’ve had a bit of a struggle to make sure other peoples system can build wiringPi – when they don’t have the i2c development libraries installed – essentially, I’ve put together some “helpers” for I2C similar to what I did for SPI, but it seems the I2C systems are widly different on different distributions. My I2C code is still somewhat experimental though, but if you are running Raspbian, then:
		
		`sudo apt-get install libi2c-dev`
		
		then re-doing the ./build ought to build and install them OK.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1505#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 21, 2013 at 9:25 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1517) said:
		
		sudo apt-get intstall libi2c-dev
		
		will work under Raspbian, but I updated the GIT version to cope with this for now. (changed the Makefile to not include i2c)
		
		If you can’t use GIT, then fetch the GTI version via http:
		
		Go here: <https://git.drogon.net/?p=wiringPi;a=summary>
		
		and select the snapshot link on the right…
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1517#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fa062ac4051d217125179e9575c963a1.1.png]]Andrey on [January 27, 2013 at 5:43 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1579) said:
		
		Connected to linker file libwiringPi.so.1.0.
		Project builded, but displays:
		wiringPi:
		Must be root to call wiringPiSetup().
		(Did you forget sudo?)
		
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 27, 2013 at 5:58 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1580) said:
		
		Yes, that’s right. You need to be root to call wiringPiSetup(). Did you forget to use sudo ?
		
		\-Gordon
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [January 31, 2013 at 8:15 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1613) said:
		
		Some I2C devices can simply supply data in response to read requsts, some need you to read a particular register. You’ll need to study the device to see how.
		
		My routines are nothing more than easy to use wrappers round the standard Linux libraries, so AIUI, they all handle ACK, START, etc. stuff just returning the data to you.
		
		So if you need to read a register, then use wiringPiI2CReadReg8 (or readReg16), but if the device just sends bytes, then a simple wiringPiI2CRead will work. I have a touchscreen that does the latter – it sends 5 bytes at a time, so I do 5 back to back wiringPiI2CRead () calls and it works just fine.
		
		It’s also possible that I don’t know what I’m doing, but that works for the limited number of devices I have used so-far.
		
		i2cdump reads registers sequentially. To emulate that, use
		
		for (i = 0 ; i < 6 ; ++i)
		array \[i\] = wiringPiI2CReadReg8 (fd, i) ;
		
		to read registers 0-5 inclusive.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1613#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 7, 2013 at 7:59 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1698) said:
		
		Soundsl ike you’re there, but just in-case
		
		tar xfz wiringPi-56c77b5.tar.gz
		cd wiringPi-56c77b5
		./build
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1698#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/15069e2cb46705a8d310a715a545821e.png]]Peter Davis on [February 7, 2013 at 12:05 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1697) said:
		
		Hi Gordon,
		Thanks a lot I am getting there!
		Thanks to your help test1 works!
		Thanks,
		peter
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1697#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 15, 2013 at 5:42 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1808) said:
		
		Thanks for that!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1808#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/37583c6b42129c93f1e0d63e98d37eae.png]]Tibor on [March 15, 2013 at 11:36 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2119) said:
		
		Forgot to mentioned that ar and ranlib are need to be changed to arm-none-linux-gnueabi-ar and arm-none-linux-gnueabi-ranlib in the Makefile
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 17, 2013 at 10:37 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1824) said:
		
		The other method will get you an older version of wiringPi. To get the latest, then use the GIT site via http…
		
		Access the GIT site using <https://git.drogon.net/>
		
		Navigate to the project – e.g. wiringPi, then look on the right-hand side where you will see a link marked “snapshot”. Download this and unpack it – it will create a filename like wiringPi-123456789abvdef.tar.gz and extract into a directory like wiringPi-1234567879abcdef.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1824#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 22, 2013 at 2:47 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1877) said:
		
		I’ve just checked and have no issues downloading from a variety of different sites, so I suspect you may have a local firewall issue.
		
		If you go here:
		
		<https://git.drogon.net/?p=wiringPi;a=summary>
		
		and click on the top-right link marked “snapshot” then it will download a tar.gz file which you can unpack and install as before.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1877#respond)
		
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/84069576aaff281820a15c8ef7253da0.png]]William on [February 23, 2013 at 3:14 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1884) said:
	
	Gracias Gordon!!
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1884#respond)
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/55b6a71360081ff2f2962268df8aab04.png]]Paul on [February 25, 2013 at 1:08 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1894) said:
	
	Great stuff! Works awesome!
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1894#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 26, 2013 at 4:45 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1916) said:
		
		C doesn’t have a native bool type. Only C++
		
		So as I write in C, if I did that then it would make it incompable with C.
		
		However I’ll double check to make sure the I’m not using bool/boolean anywhere that might conflict with c++
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1916#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/264f241608790b734ce283c2694d10e3.png]]gat on [February 27, 2013 at 10:51 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1928) said:
		
		tanks for your reponce
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1928#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 28, 2013 at 9:00 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1946) said:
		
		I don’t kow mch about it, but it looks like it might be a 5v device…
		Did you load the I2C module? Make sure that’s loaded first and that i2dcdetect can see the sensor. You won’t be able to do anything at all until you’ve done that.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1946#respond)
		
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/264f241608790b734ce283c2694d10e3.1.png]]gat on [February 27, 2013 at 11:53 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1929) said:
	
	tanks is ok tank tank !!
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1929#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [February 28, 2013 at 9:52 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1958) said:
		
		What distribution are you using?
		
		I recommend Raspbian.
		
		And it’s probably best to not build it as root. That’s why it uses sudo.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1958#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [March 1, 2013 at 10:45 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-1961) said:
		
		So it’s all OK now?
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=1961#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [March 6, 2013 at 9:07 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2021) said:
		
		I’ve jsut gone through some tests and can’t see any issues when I run it. I’m really surprised that you can’t **./build** though. That does surprise me. It suggests that something has gone wrong in the extract process – maybe you’ve gotten some corruption, etc. Turn off all overclocking and try again…
		
		I also have to say; I would NOT use the kernel, etc. on the man.ac.uk site. The standard Raspbian kernel supports SPI and has done so for the past 6 months or so. Once you have wiringPi installed, then you can simply use the gpio command to load the SPI modules..
		
		However back to wiringPi – I’ve just run this:
		
		**gordon @ pi0:** wget -OwiringPi.tgz ‘https://git.drogon.net/?p=wiringPi;a=snapshot;h=98bcb20d9391ebde24f9eb1244f0d238fb1a1dab;sf=tgz’
		–2013-03-06 08:52:26– <https://git.drogon.net/?p=wiringPi;a=snapshot;h=98bcb20d9391ebde24f9eb1244f0d238fb1a1dab;sf=tgz>
		Resolving git.drogon.net (git.drogon.net)… 2a00:ce0:2:feed:beef:cafe:0:3, 195.10.226.169
		Connecting to git.drogon.net (git.drogon.net)|2a00:ce0:2:feed:beef:cafe:0:3|:443… connected.
		HTTP request sent, awaiting response… 200 OK
		Length: unspecified \[application/x-gzip\]
		Saving to: \`wiringPi.tgz’
		
		\[ < => \] 56,722 –.-K/s in 0.06s
		
		2013-03-06 08:52:31 (860 KB/s) – \`wiringPi.tgz’ saved \[56722\]
		
		**gordon @ pi0:** file wiringPi.tgz
		wiringPi.tgz: gzip compressed data, from Unix
		**gordon @ pi0:** tar xfz wiringPi.tgz
		**gordon @ pi0:** cd wiringPi-98bcb20/
		**gordon @ pi0:** ls -l build
		\-rwxr-xr-x 1 gordon gordon 1462 Feb 7 21:53 build
		
		So that looks OK to me – and a subsequent **./build** worked fine.
		
		So double-check the download means – for that, I used my browser on my desktops ability to copy a link (hover over the “snapshot” link, right-click in firefox, select “copy link”, then in a terminal ssh’d into a Pi, I copied it to the command-line, added in the wget command, enclosed the url in quotes too – and off it went. You could use your browser to get the file, then copy it over to the Pi by whatever means though.
		
		But really – why is git failing? I’m really surprised at the number of places that seem to be blocking it though. I’ll look at providing ‘dumb’ http/https access to it though (so you can git clone https:// …)
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2021#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [March 6, 2013 at 11:34 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2027) said:
		
		Hi,
		
		That’s a 1-wire sensor – something no experience of on the Pi, so you might have to start looking on the forums, etc…. But yes, wiringPi can be used from c++ – it’s just a set of functions at the end of the day (rather than a set of clases)
		
		I do my Pi devleopment using the vi editor and Makefiles. (and it’s mostly in C too, not C++) I don’t know anything about the IDEs, etc.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2027#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/dcabd7cfe9e380f5dc7d304a64de2232.png]]chod on [March 13, 2013 at 9:17 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2103) said:
		
		many thanks
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2103#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [March 19, 2013 at 9:13 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2156) said:
		
		there is nothing in lcdInit() that would cause a hang. I’d start to put more traces in your program to see what’s happening.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2156#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [March 27, 2013 at 3:22 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2225) said:
		
		Sorry – I’ve lost the thread here – the wordpress comment system isn’t really a forum, so I don’t get to see the threads this is relating to. I am planning a forums system for the new site though..
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2225#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [March 27, 2013 at 3:18 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2221) said:
		
		Error messages?
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [March 27, 2013 at 5:39 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2228) said:
		
		wiringPi is designed to be used when developing programs. your chosen Linux distribution does not support program development, and I’m really sorry to say this, but “gcc: command not found” is a really obvious error that you should have been able to recognise, and I fear that you’ll have more problems later on when you try to build your own programs.
		
		Install Raspbian and all will work.
		
		alternatively some of the media-centric distributions can be “fixed” with a command like
		
		sudo apt-get install gcc
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2228#respond)
		
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/d9f44119161715cca58db2fa5383547c.1.png]]paul howarth on [March 27, 2013 at 7:20 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2229) said:
	
	Hi Gordon
	Having trouble with the large LCD (READ YOUR PI) , it powers up with 2×20 rows of 4×8 white squares but I cant write to it using GIT WiringPi test program lcd.c
	Has anyone else used this device that you know of, who’s code (c) I can have a look at and try.
	It may be the display so I have ordered a second one
	Thank you
	Paul
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2229#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/cd3e47409b6f5a751146aba069856974.1.png]]Cornelius on [March 30, 2013 at 6:07 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2251) said:
		
		thx
		
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/cd3e47409b6f5a751146aba069856974.png]]Cornelius on [March 31, 2013 at 7:09 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2263) said:
	
	Gordon,
	I still have a nother problem with my pi.
	Could you help me?
	The remote function will not work.
	Ever i get this message and I think that is the problem that i didnt get on the pi via webif.
	
	pi@pi-nas ~/raspberry-remote $ sudo ./daemon &
	\[1\] 3216
	pi@pi-nas ~/raspberry-remote $ ERROR on binding: Address already in use
	^C
	\[1\]+ Exit 1 sudo ./daemon
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2263#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/cd3e47409b6f5a751146aba069856974.1.png]]Cornelius on [April 1, 2013 at 10:36 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2271) said:
		
		fixed ![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/unknown_filename.2.png]]
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2271#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [April 11, 2013 at 4:09 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2328) said:
		
		Glad you’re sorted!
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2328#respond)
		
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/dc6f32a47b65bc4d6d83f2260b5db188.png]]Christian Cando on [April 28, 2013 at 8:11 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2419) said:
	
	Hi Gordo. I’m from Ecuadorian.
	I need a help.
	I need to create a code. The Data arriving by lxterminal want them saved in a document .txt.
	I am working with minicom library.
	
	Help me please
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2419#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [May 7, 2013 at 8:54 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2474) said:
		
		wiringPi works perfectly well with the revision 2 board – however to make sure your code is portable then you need to stick to the wiringPi pin numbers rather than use the native bcm gpio pin numbers. See the pins page here for the numbers:
		
		<http://wiringpi.com/pins/>
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2474#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [May 8, 2013 at 10:12 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2489) said:
		
		the i2c helpers will help you to write the code you need to access that sensor, but it’s not one I have myself, so I’ve not written any code for it myself.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2489#respond)
		
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/eebd0661aa12d209927878ce5d9e03f6.png]]Mats on [May 8, 2013 at 8:45 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2486) said:
	
	I guess ic2.h and ic2-dev.h should handle it, sorry for the disturbance ![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/unknown_filename.2.png]]
	
	/Mats
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2486#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/1430a34d96c267875142d3d421bf7be4.1.png]]tuxd3v on [May 13, 2013 at 6:07 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2527) said:
		
		Ouch :S
		
		thanks Gordon,
		it works now ![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/1f609.png]]
		
		regards
		tuxd3v
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2527#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [May 14, 2013 at 4:16 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2529) said:
		
		I’m sure it’ll work – if you write the code for it. It won’t use the existing wiringPi LCD code.
		
		However it looks like it uses SPI only – not I2C. It also looks like it needs an extra GPIO pin or 2 to connect the reset and D/C pins to (I think the latter one is data/command)
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2529#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [May 15, 2013 at 9:27 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2533) said:
		
		I won’t post the content of anonymous and abusive comments.
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2533#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [May 16, 2013 at 10:28 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2552) said:
		
		Great! Do check the new example program too – examples/lcd.c – it has a new function that lets you user-define characters now.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2552#respond)
		
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/72ef2894c6b148b05a77a8f2c7cbdbd3.png]]C Miggs on [May 16, 2013 at 9:59 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2546) said:
	
	Looks like the lcdInit line got mangled, let me try again:
	
	int lcdFD;
	if ((lcdFD = lcdInit
	(2, 16, 4, RS, EN,
	D0, D1, D2, D3,
	D0, D1, D2, D3)) 1){
	lcdPosition(lcdFD, 0,0);
	lcdPrintf(lcdFD, argv\[1\]);
	}
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2546#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [May 16, 2013 at 10:05 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2549) said:
		
		It’s just wordpress being a pain and trying to stop you injecting html codes..
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2549#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/d58d63920eb59c16b68a5ec6d85390f2.1.png]]PR0X1MA on [May 24, 2013 at 2:02 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2608) said:
		
		Don’t worry, got it.
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2608#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/e60855c208fa2fbce5b99fb666da8dbf.1.png]]Phillip Toone on [May 26, 2013 at 4:24 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2625) said:
		
		I used bash and everything works just fine now. Thank you so much for your help and thank you for this library. WiringPi is now available through the tce package management system in piCore.
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2625#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/04fde8a772b6dcc8ff382559a0f0af89.png]]raj on [May 26, 2013 at 2:36 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2624) said:
		
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/unknown_filename.1.png]] sadly still getting errors , i dint understand this code u told me , actually i need to add the wiringpi folder in set\_include\_directories command and set\_libraries i am confused over it . can you share your whole cmakelist file please
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2624#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [May 28, 2013 at 7:46 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2640) said:
		
		The trouble with learning C 32 years ago on an old Unix system … is that sometiems you miss these new fangled features! So I’ve done some reading & added it in. Shouldn’t really be an issue though. Hopefully done the right thing by defining \_GNU\_SOURCE in the Makefile and setting the flag in wiringPi.c … Will do a push shortly.
		
		Cheers,
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2640#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [June 4, 2013 at 9:34 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2658) said:
		
		Yes. You set it in your program at any time, or use the gpio command.
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2658#respond)
		
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/de2ef90ba09e2a225044d56879b7088a.png]]pi430 on [July 17, 2013 at 7:04 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2776) said:
	
	I wrote a tutorial for the beginners on how to compile a geany project when using the WiringPi library.
	<http://pi430.blogspot.com/2013/07/how-to-set-up-ide-for-your-raspberry-pi.html>
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2776#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [September 14, 2013 at 1:02 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-2998) said:
		
		It’s a Rev 2 board. Pin 20 is physical pin 6 on the P5 connector, not the main P1 connector.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=2998#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/62d277cf37dcf2d288ae46f56473f037.1.png]]Glen on [September 18, 2013 at 7:16 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3026) said:
		
		Hi Gordon
		
		I’m sorted. Was the firewall on the Viginmedia router that was blocking the git calls. Just need to understand how to set it up to allow calls through – over to virginmedia site …
		
		thanks
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3026#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/9a42e9d8473df1befddc069ed353510c.1.png]]In2Go on [September 17, 2013 at 11:17 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3015) said:
		
		no actually not. I’m at home ^^ damn. i’ll try plan-B. thanks so far.
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3015#respond)
		
	
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/5161f341d6f7884b845d7e267a46d86e.png]]Garima on [September 18, 2013 at 12:29 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3020) said:
	
	Hello ,
	
	I wanted to read a motor encoder’s output using a GPIo pin.. I referred to isr.c to get the count of falling edges.. but I want to calculate number of pulses in a second.. How can I use interrupt to get the same ?
	I tried the following code..
	
	static volatile int globalCounter=0 ;
	
	void myInterrupt (void) { ++globalCounter ; }
	int main (void)
	{
	int gotOne, pin ;
	int myCounter=0;
	int lastCounter=0;
	
	wiringPiSetup () ;
	
	if (wiringPiISR (5, INT\_EDGE\_FALLING, &myInterrupt) < 0)
	{
	fprintf (stderr, "Unable to setup ISR: %s\\n", strerror (errno)) ;
	return 1 ;
	}
	
	for (;;)
	{
	fflush (stdout) ;
	
	while (myCounter == globalCounter)
	delay (1000) ;
	
	printf (" Done. counter: %6d: %6d\\n",
	globalCounter, myCounter – lastCounter) ;
	lastCounter = myCounter ;
	myCounter = globalCounter ;
	}
	
	Its not giving me expected output..
	Please see to it.
	
	Thanks
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3020#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/f6105a3966a1796b7e502ab5011af2b7.1.png]]John on [September 23, 2013 at 5:50 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3039) said:
		
		Oh never mind, after cleaning and rebuilding the project, the same error occured for the static .a file ![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/unknown_filename.1.png]] Could not read symbols: File format not recognized
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3039#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/faffc204d966e588cfa4cd8544c18865.jpg]]Etienne on [October 18, 2013 at 2:15 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3106) said:
		
		Thanks for your fast answer!
		
		I had already use Plan-B but is less than ideal in certain scenarios.
		
		Unfortunately I don’t think the problem with the git access is on my side. As I said, a “Connection reset by peer” mean that the connection was made but that the server decided to close the connecting abruptly (for different reasons).
		
		Also I checked 2 things:
		1\. I tried to clone another git repo through the git protocol. It works.
		2\. I checked the TCP packet exchange and everything seem to be correct except that your server, at one moment, decided to send a “RST” for a unknown reason (to me, at least). The exchange looks like this:
		192.168.1.10 -> 195.10.226.169 59174 -> 9418 \[SYN\]
		195.10.226.169 -> 192.168.1.10 9418 -> 59174 \[ACK, SYN\]
		192.168.1.10 -> 195.10.226.169 59174 -> 9418 \[ACK\]
		192.168.1.10 -> 195.10.226.169 59174 -> 9418 \[ACK, PUSH\]
		195.10.226.169 -> 192.168.1.10 9418 -> 59174 \[ACK\]
		195.10.226.169 -> 192.168.1.10 9418 -> 59174 \[ACK, RST\]
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3106#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [October 21, 2013 at 7:32 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3115) said:
		
		Undefined reference usually means you’re not linking the library in. make sure you try:
		
		\-L/usr/loccal/lib -lwiringPi
		
		on the gcc compile line.
		
		\-gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3115#respond)
		
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/a6b4488697a6dc67335c7e67b0b3ba4d.png]]Olaf on [October 18, 2013 at 7:53 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3110) said:
	
	Hi Gordon,
	had the same Problem here, but plan B works.
	No other complains, many thanks for your work.
	
	Olaf
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3110#respond)
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [November 5, 2013 at 1:13 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3177) said:
		
		In input mode, the GPIO lines “float”, so are subject to stray electrical noise, so when you read them, sometimes they’re high and sometimes low.
		
		This is to be expected.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3177#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/9384fb396afc982a3c64cf1dc41e4e75.1.png]]Niccolò on [December 5, 2013 at 1:42 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3254) said:
		
		Ah, right xD, sorry!
		I have to modify ./build file?
		
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [December 5, 2013 at 1:45 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3255) said:
		
		I’ve no idea. I don’t cross compile.
		
		\-Gordon
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [December 20, 2013 at 9:39 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3290) said:
		
		How did you get the source for that program? Are you using the blink.c one in the examples directory? If not then use it – don’t copy & paste from elsewhere.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3290#respond)
		
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/80261558441908c22e04ea1193d76e25.png]]Peter on [January 6, 2014 at 9:51 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3356) said:
		
		Check the quite marks. It looks they are not ” but rather “ and ”.
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3356#respond)
		
	
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [December 26, 2013 at 6:20 pm](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3322) said:
		
		I don’t use apple products, so I’ve no idea what/how siriproxy works. But make sure it can find your program – maybe specify the full path – e.g. /home/pi/myprog etc.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3322#respond)
		
		![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/eeb5d5ded534f650bf1bd6755750cfcc.png]]Dom on [February 1, 2014 at 3:07 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3397) said:
	
	Thanks!! again.. this is the 3rd or 4th time I’ve come back to your guide!
	
	[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3397#respond)
			![[./_resources/Raspberry_Pi__Wiring__Download_&_Install__Gordons_Projects.resources/fb2bb9299dc8bc5223ea0cead8e074af.jpg]][Gordon](http://drogon.net/) on [May 12, 2014 at 9:33 am](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/#comment-3543) said:
		
		It’s mode 0. You can change the mode by changing the code.
		
		\-Gordon
		
		[Reply ↓](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/?replytocom=3543#respond)
		

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
